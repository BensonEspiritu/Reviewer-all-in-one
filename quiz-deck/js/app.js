// Quiz Deck: no build step, no dependencies. Data lives in localStorage.
const KEY = 'quizdeck.sets.v1';
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const same = (a, b) => a.trim().toLowerCase() === b.trim().toLowerCase();

// Built-in sets come from data/*.js (window.QUESTION_BANK); imported sets come from localStorage.
const builtin = Object.fromEntries((window.QUESTION_BANK || []).map((d, i) => ['b' + i, { ...buildSet(d, 'Untitled set'), builtin: true }]));
let sets = { ...builtin, ...loadSets() };   // { id: { title, questions: [...], builtin? } }
let current = Object.keys(sets)[0] || null; // id of the open set
let session = null;      // active quiz / flashcard run
let moduleFilter = '';   // '' = all modules
let creatingSubject = false;
let addingQuestion = false;

function loadSets() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
function saveSets() { localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(Object.entries(sets).filter(([, v]) => !v.builtin)))); }

/* ---------- Import ---------- */

function parseCSV(text) {
  const rows = []; let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else quoted = false; }
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter(r => r.some(x => x.trim()));
  const keys = head.map(x => x.trim().toLowerCase());
  return body.map(r => Object.fromEntries(keys.map((k, i) => [k, (r[i] || '').trim()])));
}

// Accepts {question, answer, choices?, explanation?}. choices may be an array or "a|b|c".
function normalize(q) {
  const question = String(q.question ?? '').trim();
  const answer = String(q.answer ?? '').trim();
  if (!question || !answer) return null;
  let choices = q.choices;
  if (typeof choices === 'string') choices = choices.split('|').map(s => s.trim()).filter(Boolean);
  if (!Array.isArray(choices)) choices = [];
  choices = choices.map(String);
  if (choices.length && !choices.some(c => same(c, answer))) choices.push(answer);
  return { question, answer, choices, explanation: String(q.explanation ?? '').trim(), module: String(q.module ?? '').trim() };
}

function buildSet(data, fallbackTitle) {
  const raw = Array.isArray(data) ? data
    : data.modules ? data.modules.flatMap(m => (m.questions || []).map(q => ({ module: m.title, ...q })))
    : data.questions;
  return { title: data.title || fallbackTitle, questions: (raw || []).map(normalize).filter(Boolean) };
}

async function importFile(file) {
  try {
    const text = await file.text(), name = file.name.replace(/\.\w+$/, '');
    const set = buildSet(/\.json$/i.test(file.name) ? JSON.parse(text) : parseCSV(text), name);
    if (!set.questions.length) throw new Error('No rows with both a question and an answer.');
    const id = 's' + Date.now() + Math.random().toString(36).slice(2, 6);
    sets[id] = set;
    saveSets(); current = id; session = null; moduleFilter = ''; render();
  } catch (err) {
    alert(`Could not import ${file.name}: ${err.message}`);
  }
}

/* ---------- Sessions ---------- */

function begin(list, mode) {
  session = { mode, items: shuffle(list), i: 0, score: 0, missed: [], revealed: false, result: null };
  render();
}
const cur = () => session.items[session.i];
const pool = () => sets[current].questions.filter(q => !moduleFilter || q.module === moduleFilter);
function record(ok, given) {
  if (ok) session.score++; else session.missed.push(cur());
  session.result = { ok, given };
}
function advance() { session.i++; session.revealed = false; session.result = null; render(); }

const actions = {
  open(id) { current = id; session = null; moduleFilter = ''; creatingSubject = false; addingQuestion = false; render(); },
  newSubject() { current = null; session = null; creatingSubject = true; addingQuestion = false; render(); },
  cancelSubject() { creatingSubject = false; current = Object.keys(sets)[0] || null; render(); },
  createSubject(title) {
    title = title.trim();
    if (!title) return;
    const id = 's' + Date.now() + Math.random().toString(36).slice(2, 6);
    sets[id] = { title, questions: [] };
    current = id; creatingSubject = false; addingQuestion = true;
    saveSets(); render();
  },
  addQuestion() { addingQuestion = !addingQuestion; render(); },
  saveQuestion(form) {
    if (!current || sets[current].builtin) return;
    const data = new FormData(form);
    const question = normalize({ question: data.get('question'), answer: data.get('answer'), choices: data.get('choices'), explanation: data.get('explanation'), module: data.get('module') });
    if (!question) { $('#question-error').textContent = 'Enter both a question and an answer.'; return; }
    sets[current].questions.push(question);
    saveSets(); addingQuestion = false; render();
  },
  module(v) { moduleFilter = v; render(); },
  del(id) {
    if (!confirm(`Delete "${sets[id].title}"?`)) return;
    delete sets[id]; saveSets();
    if (current === id) { current = null; session = null; }
    render();
  },
  start(mode) { if (pool().length) begin(pool(), mode); },
  retry() { begin(session.missed, session.mode); },
  exit() { session = null; render(); },
  reveal() { session.revealed = true; render(); },
  grade(v) { record(v === 'y', null); advance(); },
  pick(i) { const q = cur(); record(same(q.choices[i], q.answer), q.choices[i]); render(); },
  check() { const v = $('#typed').value; if (!v.trim()) return; record(same(v, cur().answer), v); render(); },
  next() { advance(); }
};

document.addEventListener('click', e => {
  const el = e.target.closest('[data-a]');
  if (el) actions[el.dataset.a]?.(el.dataset.v);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.id === 'typed') actions.check();
});
document.addEventListener('submit', e => {
  if (e.target.id === 'subject-form') {
    e.preventDefault(); actions.createSubject(new FormData(e.target).get('title'));
  } else if (e.target.id === 'question-form') {
    e.preventDefault(); actions.saveQuestion(e.target);
  }
});

/* ---------- Views ---------- */

function renderSidebar() {
  const ids = Object.keys(sets);
  $('#sets').innerHTML = ids.map(id => `
    <li class="${id === current ? 'on' : ''}">
      <button data-a="open" data-v="${id}">${esc(sets[id].title)}<small>${sets[id].questions.length} questions</small></button>
      ${sets[id].builtin ? '' : `<button class="x" data-a="del" data-v="${id}" aria-label="Delete ${esc(sets[id].title)}">&times;</button>`}
    </li>`).join('');
}

function renderHome() {
  if (!current || !sets[current]) {
    if (creatingSubject) return `<section class="empty"><h2>Create a subject</h2>
      <p>Give the subject a name, then add questions to it.</p>
      <form id="subject-form" class="editor-form">
        <label>Subject name<input name="title" required maxlength="80" placeholder="e.g. Biology"></label>
        <div class="row"><button class="btn primary" type="submit">Create subject</button><button class="btn" type="button" data-a="cancelSubject">Cancel</button></div>
      </form></section>`;
    return `<section class="empty"><h2>No question set open</h2>
      <p>Create a subject to add questions, or import a .json / .csv file.</p></section>`;
  }
  const s = sets[current];
  const mods = [...new Set(s.questions.map(q => q.module).filter(Boolean))];
  if (moduleFilter && !mods.includes(moduleFilter)) moduleFilter = '';
  const p = pool(), mc = p.filter(q => q.choices.length).length;
  const chips = mods.length ? `<div class="chips">${['', ...mods].map(m =>
    `<button class="chip ${m === moduleFilter ? 'on' : ''}" data-a="module" data-v="${esc(m)}">${m ? esc(m) : 'All modules'}</button>`).join('')}</div>` : '';
  const editor = !s.builtin ? `<div class="editor-actions"><button class="btn" data-a="addQuestion">${addingQuestion ? 'Cancel' : 'Add a question'}</button></div>
    ${addingQuestion ? `<form id="question-form" class="editor-form">
      <label>Question<textarea name="question" required rows="3" placeholder="Write your question"></textarea></label>
      <label>Answer<input name="answer" required placeholder="The correct answer"></label>
      <label>Choices<input name="choices" placeholder="Optional, separate choices with |"></label>
      <label>Topic or module<input name="module" placeholder="Optional"></label>
      <label>Explanation<textarea name="explanation" rows="2" placeholder="Optional explanation"></textarea></label>
      <p id="question-error" class="form-error" role="alert"></p>
      <button class="btn primary" type="submit">Save question</button>
    </form>` : ''}` : '';
  const study = p.length ? `<p>${p.length} questions, ${mc} multiple choice.</p>
    <div class="row"><button class="btn primary" data-a="start" data-v="quiz">Start quiz</button>
    <button class="btn" data-a="start" data-v="flash">Review as flashcards</button></div>` : `<p>This subject has no questions yet.</p>`;
  return `<section class="empty"><h2>${esc(s.title)}</h2>
    ${chips}
    ${study}${editor}</section>`;
}

function renderResults() {
  const s = session, total = s.items.length;
  return `<section class="empty"><h2>${s.score} of ${total} correct</h2>
    <p>${s.missed.length ? `${s.missed.length} to review.` : 'Clean run.'}</p>
    <div class="row">
      ${s.missed.length ? '<button class="btn primary" data-a="retry">Retry missed</button>' : ''}
      <button class="btn" data-a="start" data-v="${s.mode}">Run again</button>
      <button class="btn" data-a="exit">Back to set</button>
    </div></section>`;
}

function renderSession() {
  const s = session, q = cur(), r = s.result;
  let body = '';
  if (s.mode === 'flash') {
    body = s.revealed
      ? `<div class="answer">${esc(q.answer)}</div>${q.explanation ? `<p class="why">${esc(q.explanation)}</p>` : ''}
         <div class="row"><button class="btn" data-a="grade" data-v="n">Missed it</button><button class="btn primary" data-a="grade" data-v="y">Got it</button></div>`
      : `<div class="row"><button class="btn primary" data-a="reveal">Show answer</button></div>`;
  } else if (q.choices.length) {
    body = `<div class="choices">${q.choices.map((c, i) => {
      const cls = r ? (same(c, q.answer) ? 'right' : (r.given === c ? 'wrong' : '')) : '';
      return `<button class="choice ${cls}" ${r ? 'disabled' : ''} data-a="pick" data-v="${i}">${esc(c)}</button>`;
    }).join('')}</div>`;
  } else {
    body = r ? '' : `<div class="row"><input id="typed" autocomplete="off" placeholder="Type your answer" autofocus>
      <button class="btn primary" data-a="check">Check</button></div>`;
  }
  if (r) {
    body += `<p class="verdict ${r.ok ? 'ok' : 'bad'}">${r.ok ? 'Correct.' : `Not quite. Answer: ${esc(q.answer)}`}</p>
      ${q.explanation ? `<p class="why">${esc(q.explanation)}</p>` : ''}
      <div class="row"><button class="btn primary" data-a="next">${s.i + 1 === s.items.length ? 'See results' : 'Next question'}</button></div>`;
  }
  return `<section class="card">
    <div class="meta"><span>${s.i + 1} of ${s.items.length}</span><button class="link" data-a="exit">End session</button></div>
    <h2 class="q">${esc(q.question)}</h2>${body}</section>`;
}

function render() {
  renderSidebar();
  $('#view').innerHTML = session ? (session.i >= session.items.length ? renderResults() : renderSession()) : renderHome();
  $('#typed')?.focus();
}

/* ---------- Wiring ---------- */

$('#file').addEventListener('change', async e => { for (const f of e.target.files) await importFile(f); e.target.value = ''; });
$('#new-subject').addEventListener('click', () => actions.newSubject());
const drop = $('#drop');
['dragover', 'drop'].forEach(t => drop.addEventListener(t, e => e.preventDefault()));
drop.addEventListener('drop', async e => { for (const f of e.dataTransfer.files) await importFile(f); });

render();
