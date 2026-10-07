window.QUESTION_BANK = window.QUESTION_BANK || [];
window.QUESTION_BANK.push({
  title: "CS0053",
  modules: [
    {
      title: "Module 3",
      questions: [
        {
          question: "Which of these is NOT a common git hosting service",
          answer: "Stack Overflow",
          choices: ["Bitbucket", "GitHub", "Stack Overflow", "Gitlab"],
          explanation:
            "The answer is Stack Overflow. It is a question-and-answer site for programmers, while Bitbucket, GitHub, and GitLab host Git repositories.",
        },
        {
          question: "Which of the following best describes version control",
          answer:
            "A system for tracking changes to files and coordinating work among developers",
          choices: [
            "A system for tracking changes to files and coordinating work among developers",
            "A programming language feature for managing memory",
            "A debugging tool for detecting erros in code",
            "A system for automatically compiling code",
          ],
          explanation:
            "The answer is a system for tracking changes to files and coordinating work among developers. Version control records revisions and helps people work together on shared files.",
        },
        {
          question:
            "Once a commit is pushed to GitHub, it can never be modified or reverted",
          answer: "False",
          choices: ["True", "False"],
          explanation:
            "The answer is False. A pushed commit can be followed by new commits that undo or replace its changes; a remote branch can also be changed, although rewriting shared history should be done carefully.",
        },
        {
          question: "What is the local history of changes in Git called",
          answer: "Repository",
          choices: ["Repository", "Clone", "Commit", "Branch"],
          explanation:
            "The answer is Repository. A Git repository stores a project's files and its recorded change history; a commit is one recorded snapshot within that history.",
        },
        {
          question:
            "Merge conflicts must always be resolved manually by the developer",
          answer: "False",
          choices: ["True", "False"],
          explanation:
            "The answer is False. Some merge conflicts can be resolved automatically by Git. A developer needs to step in only when Git cannot safely combine the changes.",
        },
        {
          question:
            "`git pull` downloads and merges changes from a remote repository into the local branch",
          answer: "True",
          choices: ["True", "False"],
          explanation:
            "The answer is True. `git pull` fetches changes from the configured remote and integrates them into the current local branch, usually by merging or rebasing depending on configuration.",
        },
        {
          question: "Collaboration through GitHub is possible because ____",
          answer:
            "Changes can be pushed to a shared remote repository and merged",
          choices: [
            "Git automatically prevents all conflicts",
            "GitHub removes the need for commits",
            "All developers work only on the same local machine",
            "Changes can be pushed to a shared remote repository and merged",
          ],
          explanation:
            "The answer is that changes can be pushed to a shared remote repository and merged. The remote lets collaborators exchange commits and combine work from separate branches.",
        },
        {
          question: "`git push origin main` does what?",
          answer: "Pushes local changes to the remote repository's main branch",
          choices: [
            "Saves changes locally without uploading them",
            "Creates a new branch called origin",
            "Pushes local changes to the remote repository's main branch",
            "Changes can be pushed to a shared remote repository and merged",
          ],
          explanation:
            "The answer is that it pushes local changes to the remote repository's `main` branch. `origin` names the remote, and `main` names the destination branch.",
        },
        {
          question: "In Git, what does the command `git status` do?",
          answer:
            "Displays the current state of the working directory and staging area",
          choices: [
            "Shows the list of all commits in history",
            "Displays the current state of the working directory and staging area",
            "Pushes changes to the remote repository",
            "Deletes the repository",
          ],
          explanation:
            "The answer is that it displays the current state of the working directory and staging area. It reports changed, staged, and untracked files and indicates the current branch.",
        },
        {
          question:
            "The staging area in Git is where files are prepared before being committed",
          answer: "True",
          choices: ["True", "False"],
          explanation: "True",
        },
      ],
    },
    {
      title: "Module 2",
      questions: [
        {
          question: "What is the priamry purpose of IDE",
          answer:
            "To provide a complete environment for writing, testing, and debugging programs",
          choices: [
            "To provide a complete environment for writing, testing, and debugging programs",
            "To manage cloud deployments",
            "To compile code only",
            "To replace version control tools like Git",
          ],
          explanation: "",
        },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
        { question: "", answer: "", choices: [], explanation: "" },
      ],
    },
  ],
});
