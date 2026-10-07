window.QUESTION_BANK = window.QUESTION_BANK || [];
window.QUESTION_BANK.push({
  title: "CS0011",
  modules: [
    {
      // Module 5
      title: "Module 5",
      questions: [
        {
          question:
            "You implement an activity as a subclass of the `Content Provider` class",
          answer: "False",
          choices: ["True", "False"],
          explanation:
            "False. An Activity inherits from android.app.Activity, directly or through a subclass such as AppCompatActivity. A ContentProvider manages shared app data instead of an Activity's screen.",
        },
        {
          question:
            "Which callback is last when an Activity finishes normally?",
          answer: "onDestroy()",
          choices: ["onRestart()", "onResume()", "onStop()", "onDestroy()"],
          explanation:
            "Closing a resumed Activity with finish() normally calls onPause() -> onStop() -> onDestroy(). onStop() means hidden; onDestroy() means the instance is being destroyed. onRestart() and onResume() belong to returning. Killing the app process does not guarantee onDestroy().",
        },
        {
          question:
            "For a single Activity instance, onCreate() runs once and onDestroy() runs at most once",
          answer: "True",
          choices: ["True", "False"],
          explanation:
            "True. These callbacks belong to one instance. Rotation can destroy that instance and create another, which receives its own onCreate(). onDestroy() may be skipped if the process is killed.",
        },
        {
          question:
            "Which callback runs first when the user returns to an Activity that was stopped, but has not been destroyed, after using another application?",
          answer: "onRestart()",
          choices: ["onRestart()", "onDestroy()", "onPause()", "onResume()"],
          explanation:
            "onRestart() -> onStart() -> onResume() brings the stopped instance back. onPause() happens when leaving; onDestroy() destroys the instance. If Android killed the background process, returning creates a new instance via onCreate() instead.",
        },
        {
          question:
            "Activity class takes care of creating window for you in which you can place your UI with setContentView(View)",
          answer: "True",
          choices: ["True", "False"],
          explanation:
            "True. Activity provides a window, and setContentView(View) places a View hierarchy inside it. In an XML-based screen, setContentView(R.layout.activity_main) inflates the layout resource, usually during onCreate().",
        },
        {
          question:
            "An activity class loads all the UI component using the XML file available in ______ folder of the project during the onCreate() callback",
          answer: "res/layout",
          choices: ["res/drawable", "res/layout", "res/values", "res/mipmap"],
          explanation:
            "res/layout stores XML screen layouts. setContentView(R.layout.activity_main) loads res/layout/activity_main.xml. res/drawable holds drawable resources, res/values holds values such as strings and colors, and res/mipmap typically holds launcher icons.",
        },
        {
          question:
            "Which file conventionally defines the main Activity's UI layout in an XML-based Android project?",
          answer: "activity_main.xml",
          choices: [
            "AndroidManifest.xml",
            "strings.xml",
            "activity_main.xml",
            "MainActivity.kt",
          ],
          explanation:
            "activity_main.xml defines the screen's Views. AndroidManifest.xml declares app components and permissions; strings.xml stores text resources; MainActivity.kt contains Kotlin code. Layout filenames can vary by project.",
        },
        {
          question:
            "Which file conventionally contains the main Activity's Kotlin code?",
          answer: "MainActivity.kt",
          choices: [
            "MainActivity.kt",
            "MainActivity.java",
            "activity_main.xml",
            "AndroidManifest.xml",
          ],
          explanation:
            "MainActivity.kt is Kotlin source code. MainActivity.java is Java source code; activity_main.xml describes a layout; AndroidManifest.xml declares app configuration. The .kt extension identifies a Kotlin file.",
        },
        {
          question:
            "This callback is called when the activity becomes visible to the user",
          answer: "onStart()",
          choices: ["onCreate()", "onResume()", "onStart()", "onStop()"],
          explanation:
            "onStart() means visible. Opening a new Activity follows onCreate() (initialize) -> onStart() (visible) -> onResume() (interactive). onStop() means it is no longer visible.",
        },
        {
          question:
            "This callback is called when the activity is no longer visible.",
          answer: "onStop()",
          choices: ["onPause()", "onStop()", "onDestroy()", "onRestart()"],
          explanation:
            "Minimizing a full-screen Activity with Home normally calls onPause() -> onStop(). Paused can still mean visible; stopped means hidden. Minimizing does not itself destroy the instance. onRestart() runs when a stopped instance returns.",
        },
        {
          question:
            "Which callback runs when an Activity enters the Resumed state, ready for user interaction?",
          answer: "onResume()",
          choices: ["onStart()", "onPause()", "onRestart()", "onResume()"],
          explanation:
            "onResume() means ready for interaction. Returning from Paused goes directly to onResume(); returning from Stopped goes through onRestart() -> onStart() -> onResume(). onStart() means visible, and onPause() means leaving the Resumed state.",
        },
      ],
    },
    {
      // module 4

      // Module 4

      title: "Module 4",
      questions: [
        {
          question:
            "Application components are the essential building blocks of an Android application. These components are loosely coupled by the application manifest file _____",
          answer: "AndroidManifest.xml",
          choices: [
            "strings.xml",
            "AndroidManifest.xml",
            "activity_main.xml",
            "build.gradle",
          ],
        },
        {
          question:
            "They dictate the UI and handle the user interaction to the phone screen",
          answer: "Activities",
          choices: [
            "Services",
            "Content Providers",
            "Activities",
            "Broadcast Receivers",
          ],
          explanation:
            "Example: an email application might have one activity that shows a list of new emails, another",
        },
        {
          question:
            "They handle background processinmg associated with an application",
          answer: "Services",
          choices: [
            "Services",
            "Activities",
            "Broadcast Receivers",
            "Content Providers",
          ],
        },
        {
          question:
            "They handle communication between Android OS and applications",
          answer: "Broadcast Receivers",
          choices: [
            "Content Providers",
            "Services",
            "Broadcast Receivers",
            "Activities",
          ],
          explanation:
            "applications can also initiate broadcasts to let other applications know that some data has been downloaded to the device and is available for them to use",
        },
        {
          question: "They handle data and database management issues",
          answer: "Content Providers",
          choices: [
            "Activities",
            "Content Providers",
            "Services",
            "Broadcast Receivers",
          ],
        },
        {
          question: "Represents a portion of user interface in an activity",
          answer: "Fragments",
          choices: ["Layouts", "Intents", "Services", "Fragments"],
        },
        {
          question:
            "UI elements that are drawn on-screen including buttons, lists, forms, etc",
          answer: "Views",
          choices: ["Views", "Resources", "Intents", "Services"],
        },
        {
          question:
            "View hierarchies that control screen format and appearance of the views",
          answer: "Layouts",
          choices: ["Fragments", "Resources", "Layouts", "Intents"],
        },
        {
          question: "Messages wiring components together",
          answer: "Intents",
          choices: ["Views", "Intents", "Layouts", "Resources"],
        },
        {
          question:
            "External elements, such as strings, constants, and drawable pictures",
          answer: "Resources",
          choices: ["Services", "Activities", "Fragments", "Resources"],
        },
        {
          question: "Configuartion file for the application",
          answer: "Manifest",
          choices: ["Manifest", "Layout", "Intent", "Fragment"],
        },
        {
          question:
            "A _____ component supplies data from one application to thers on request",
          answer: "Content Provider",
          choices: [
            "Broadcast Receiver",
            "Activity",
            "Content Provider",
            "Service",
          ],
          explanation:
            "Such requests are handled by the methods of the ContentResolver class",
        },
        {
          question: "XML files that define property animations",
          answer: "animator/",
          choices: ["anim/", "animator/", "drawable/", "layout/"],
          explanation:
            "They are saved in res/animator/ and accessed from the R.animator class.",
        },
        {
          question: "XML files that define a state list of colors",
          answer: "color/",
          choices: ["drawable/", "values/", "layout/", "color/"],
          explanation:
            "They are savied in res/color/ and accessed from the R.color class",
        },
        {
          question: "Arbitrary files to save in their raw form",
          answer: "raw/",
          choices: ["raw/", "xml/", "values/", "menu/"],
          explanation:
            "You need to call Resources.openRawResource() with the resource ID, which is R.raw.filename to open such raw files.",
        },
        {
          question: "XML files that define tween animations.",
          answer: "anim/",
          choices: ["animator/", "drawable/", "anim/", "layout/"],
          explanation:
            "They are saved in res/anim/ folder and accessed from the R.anim class.",
        },
        {
          question:
            "Image files like .png, .jpg, .gif or XML files that are compiled into bitmaps, state lists, shapes, animation drawable.",
          answer: "drawable/",
          choices: ["color/", "drawable/", "raw/", "xml/"],
          explanation:
            "They are saved in res/drawable/ and accessed from the R.drawable class.",
        },
        {
          question:
            "XML files that define application menus, such as an Options Menu, Context Menu, or Sub Menu.",
          answer: "menu/",
          choices: ["layout/", "values/", "xml/", "menu/"],
          explanation:
            " They are saved in res/menu/ and accessed from the R.menu class.",
        },
        {
          question:
            "Arbitrary XML files that can be read at runtime by calling Resources.getXML().",
          answer: "xml/",
          choices: ["xml/", "raw/", "menu/", "drawable/"],
          explanation:
            "You can save various configuration files here which will be used at run time.",
        },
      ],
    },
    {
      // module 1

      title: "Module 1",
      questions: [
        {
          question:
            "Released in 2008. Very first Android release with Gmail, Maps, YouTube, and Android Market",
          answer: "Android 1.0 (Alpha)",
          choices: [
            "Android 1.0 (Alpha)",
            "Android 1.5 (Cupcake)",
            "Android 1.6 (Donut)",
            "Android 2.0 (Eclair)",
          ],
        },
        {
          question:
            "Released in 2017, Picture-in-Picture (PIP) and notification channels",
          answer: "Android  8.0 (Oreo)",
          choices: [
            "Android 6.0 (Marshmallow)",
            "Android 7.0 (Nougat)",
            "Android  8.0 (Oreo)",

            "Android 9.0 (Pie)",
          ],
        },
        {
          question: "When did Google purchased Android Inc.",
          answer: "2005",
          choices: ["2003", "2005", "2007", "2008"],
        },
        {
          question: "Android is a Mobile operating system based on ____",
          answer: "Linux",
          choices: ["Windows", "macOS", "DOS", "Linux"],
        },
        {
          question:
            "Support for multiple screen dimensions and Quick Search Box",
          answer: "Android 1.6 (Donut)",
          choices: [
            "Android 1.5 (Cupcake)",
            "Android 1.6 (Donut)",
            "Android 2.0 (Eclair)",
            "Android 2.2 (Froyo)",
          ],
        },
        {
          question: "First Android version designed precisely for tablets",
          answer: "Android 3.0 (Honeycomb)",
          choices: [
            "Android 3.0 (Honeycomb)",
            "Android 2.2 (Froyo)",
            "Android 2.3 (Gingerbread)",
            "Android 4.0 (Ice Cream Sandwich)",
          ],
        },
        {
          question: "Support ART and Multiple SIM card support",
          answer: "Android 5.0 (Lollipop)",
          choices: [
            "Android 4.0 (Ice Cream Sandwich)",
            "Android 4.1 (Jelly Bean)",
            "Android 4.4 (Kitkat)",
            "Android 5.0 (Lollipop)",
          ],
        },
        {
          question: "Fingerprint authentication",
          answer: "Android 6.0 (Marshmallow)",
          choices: [
            "Android 4.4 (Kitkat)",
            "Android 5.0 (Lollipop)",
            "Android 6.0 (Marshmallow)",
            "Android 7.0 (Nougat)",
          ],
        },
        {
          question: "Provide multitasking and multi-window mode",
          answer: "Android 7.0 (Nougat)",
          choices: [
            "Android 7.0 (Nougat)",
            "Android 5.0 (Lollipop)",
            "Android 6.0 (Marshmallow)",
            "Android 8.0 (Oreo)",
          ],
        },
        {
          question: "adds a feature in Google now and GPS support",
          answer: "Android 4.4 (Kitkat)",
          choices: [
            "Android 2.3 (Gingerbread)",
            "Android 3.0 (Honeycomb)",
            "Android 4.0 (Ice Cream Sandwich)",
            "Android 4.4 (Kitkat)",
          ],
        },
        {
          question:
            "Support Live Wallpaper, Support Bluetooth 2.1, Ability to add contacts photo and select to call, message, or email",
          answer: "Android 2.0 (Eclair)",
          choices: [
            "Android 1.5 (Cupcake)",
            "Android 2.0 (Eclair)",
            "Android 2.2 (Froyo)",
            "Android 2.3 (Gingerbread)",
          ],
        },
        {
          question:
            "Released in 2010, Support Animated GIF WiFi and Hotspot functionality",
          answer: "Android 2.2 (Froyo)",
          choices: [
            "Android 1.6 (Donut)",
            "Android 2.0 (Eclair)",
            "Android 2.2 (Froyo)",
            "Android 3.0 (Honeycomb)",
          ],
        },
        {
          question: "Released in 2018, screenshot button has been add",
          answer: "Android 9.0 (Pie)",
          choices: [
            "Android 9.0 (Pie)",
            "Android 6.0 (Marshmallow)",
            "Android 7.0 (Nougat)",
            "Android 8.0 (Oreo)",
          ],
        },
        {
          question: "Android was developed by ____ led by Google",
          answer: "Open Handset Alliance",
          choices: [
            "Wi-Fi Alliance",
            "Open Handset Alliance",
            "Bluetooth Special Interest Group",
            "World Wide Web Consortium",
          ],
        },
        {
          question:
            "In the Android Architecture, Composes of apps (NFC, Location, Content Providers, Notification...)",
          answer: "Application Framework",
          choices: [
            "Linux Kernel",
            "Android Runtime",
            "Platform Libraries",
            "Application Framework",
          ],
        },
        {
          question:
            "____ is the main component in android to provide its operating system functions to mobile",
          answer: "Linux Kernel",
          choices: [
            "Application Framework",
            "Android Runtime",
            "Linux Kernel",
            "Platform Libraries",
          ],
          explanation:
            "Dalvik Virutal Machine (DVM) which is responsible for running a mobile application",
        },
        {
          question:
            "In the Android Architecture, Composes of Platform Libraries (SSL,SGL,Graphics,OpenGL..)",
          answer: "Platform Libraries",
          choices: [
            "Android Runtime",
            "Platform Libraries",
            "Application Framework",
          ],
        },
      ],
    },
    {
      // Module 3

      // Based on Kotlin-Datatypes.txt, variables.txt, and null-value.txt.
      // Additional practice checked against the official Kotlin documentation:
      // https://kotlinlang.org/docs/numbers.html
      // https://kotlinlang.org/docs/null-safety.html
      // https://kotlinlang.org/docs/basic-syntax.html
      // https://kotlinlang.org/docs/arrays.html
      // https://kotlinlang.org/docs/strings.html
      // https://kotlinlang.org/docs/booleans.html
      // https://kotlinlang.org/docs/control-flow.html
      // https://kotlinlang.org/docs/functions.html
      // https://kotlinlang.org/docs/kotlin-doc.html
      // https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-float/-companion/-m-i-n_-v-a-l-u-e.html
      title: "Module 3",
      questions: [
        {
          question:
            "Which declaration creates a mutable String variable named studentName?",
          answer: 'var studentName: String = "Jayson"',
          choices: [
            'var studentName: String = "Jayson"',
            'String studentName = "Jayson"',
            'var String: studentName = "Jayson"',
            'var studentName: Int = "Jayson"',
          ],
          explanation:
            "Kotlin puts the name before the type: var name: Type = value. The var keyword permits reassignment.",
        },
        {
          question:
            "What does val mean for a local Kotlin variable after it has been initialized?",
          answer: "The variable cannot be reassigned",
          choices: [
            "The variable can only store numbers",
            "The variable cannot be reassigned",
            "The variable must contain null",
            "The variable can change its type",
          ],
          explanation:
            "Use val for a local variable you will not reassign. Use var when you need to assign a new value.",
        },
        {
          question:
            'What happens with this code? var grade = 100; grade = "Excellent"',
          answer: "It does not compile because grade has type Int",
          choices: [
            "grade changes its type to String",
            "It prints Excellent",
            "It does not compile because grade has type Int",
            "It converts Excellent to an integer",
          ],
          explanation:
            "Type inference fixes grade as Int. Reassignment with var must still respect the declared or inferred type.",
        },
        {
          question: "What type is inferred for var myint = 35?",
          answer: "Int",
          choices: ["Byte", "Short", "Long", "Int"],
          explanation:
            "An ordinary integer literal that fits the Int range is inferred as Int when no other type is specified.",
        },
        {
          question:
            'What does this print? val studentName = "Jayson"; val studentGrade = 100; println("Name: $studentName Grade: $studentGrade")',
          answer: "Name: Jayson Grade: 100",
          choices: [
            "Name: Jayson Grade: 100",
            "Name: $studentName Grade: $studentGrade",
            "Jayson100",
            "It does not compile",
          ],
          explanation:
            "String templates insert variable values. Both $studentName and ${studentName} can insert this simple variable.",
        },
        {
          question:
            "Which declaration explicitly gives studentGrade the Kotlin integer type?",
          answer: "var studentGrade: Int = 100",
          choices: [
            "var studentGrade: Integer = 100",
            "var studentGrade: Int = 100",
            "Int studentGrade = 100",
            "var studentGrade = Int: 100",
          ],
          explanation:
            "The Kotlin type name is Int, and an explicit type follows the variable name and a colon.",
        },
        {
          question: "What is the inclusive range of Kotlin Byte?",
          answer: "-128 to 127",
          choices: [
            "0 to 255",
            "-127 to 128",
            "-128 to 127",
            "-32768 to 32767",
          ],
          explanation:
            "Byte is a signed 8-bit integer. Byte.MIN_VALUE is -128 and Byte.MAX_VALUE is 127.",
        },
        {
          question: "Which statement correctly describes Kotlin Short?",
          answer: "16 bits, with values from -32768 to 32767",
          choices: [
            "8 bits, with values from -128 to 127",
            "32 bits, with values from -32768 to 32767",
            "16 bits, with values from 0 to 65535",
            "16 bits, with values from -32768 to 32767",
          ],
          explanation:
            "Short is signed. Use Short.MIN_VALUE and Short.MAX_VALUE to inspect its limits.",
        },
        {
          question: "What is the inclusive range of Kotlin Int?",
          answer: "-2,147,483,648 to 2,147,483,647",
          choices: [
            "-2,147,483,648 to 2,147,483,647",
            "-32768 to 32767",
            "0 to 4,294,967,295",
            "-128 to 127",
          ],
          explanation:
            "Int uses 32 bits. Int.MIN_VALUE and Int.MAX_VALUE expose these bounds.",
        },
        {
          question: "Which signed integer type uses 64 bits?",
          answer: "Long",
          choices: ["Byte", "Long", "Short", "Int"],
          explanation:
            "Long ranges from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. These limits are Long.MIN_VALUE and Long.MAX_VALUE.",
        },
        {
          question: "What type is inferred for val mylong = 23L?",
          answer: "Long",
          choices: ["Int", "Float", "Long", "Double"],
          explanation: "The uppercase L suffix identifies a Long literal.",
        },
        {
          question: "Which literal explicitly has type Float?",
          answer: "54F",
          choices: ["54", "54L", "54.0", "54F"],
          explanation: "Use F or f for Float literals, such as 54F or 54.0f.",
        },
        {
          question: "What type is inferred for val price = 54.0?",
          answer: "Double",
          choices: ["Double", "Int", "Float", "Long"],
          explanation:
            "A floating-point literal without F or f is a Double by default.",
        },
        {
          question:
            "Which pairing correctly gives the size of Kotlin floating-point types?",
          answer: "Float: 32 bits; Double: 64 bits",
          choices: [
            "Float: 64 bits; Double: 32 bits",
            "Float: 32 bits; Double: 64 bits",
            "Float: 16 bits; Double: 32 bits",
            "Float: 32 bits; Double: 32 bits",
          ],
          explanation:
            "Float uses single precision and Double uses double precision. Double can generally preserve more significant digits.",
        },
        {
          question: "What does Float.MIN_VALUE represent?",
          answer: "The smallest positive nonzero Float value",
          choices: [
            "The most negative finite Float value",
            "Exactly zero",
            "The smallest positive nonzero Float value",
            "Negative infinity",
          ],
          explanation:
            "Float.MIN_VALUE is about 1.4E-45. The most negative finite Float is -Float.MAX_VALUE. Double.MIN_VALUE similarly means the smallest positive nonzero Double, about 4.9E-324.",
        },
        {
          question:
            "Which expression gives the largest finite positive Double value?",
          answer: "Double.MAX_VALUE",
          choices: [
            "Double.MIN_VALUE",
            "-Double.MAX_VALUE",
            "Double.POSITIVE_INFINITY",
            "Double.MAX_VALUE",
          ],
          explanation:
            "Double.MAX_VALUE is about 1.7976931348623157E308. Float.MAX_VALUE is about 3.4028235E38. Infinity is not a finite value.",
        },
        {
          question: "Which pair contains the two non-null Boolean values?",
          answer: "true and false",
          choices: [
            "true and false",
            "0 and 1",
            '"true" and "false"',
            "yes and no",
          ],
          explanation:
            'Boolean represents logical truth. Quoted "true" is a String, and the numbers 0 and 1 are not Boolean literals.',
        },
        {
          question: "What does println(true && false) print?",
          answer: "false",
          choices: ["true", "false", "1", "It does not compile"],
          explanation:
            "The && operator requires both operands to be true. Use || for logical OR and ! for logical NOT.",
        },
        {
          question: "Which declaration correctly stores a Char?",
          answer: "val alphabet: Char = 'C'",
          choices: [
            'val alphabet: Char = "C"',
            "val alphabet: Char = 'CS'",
            "val alphabet: Char = 'C'",
            "val alphabet: Char = 67",
          ],
          explanation:
            "A Char literal uses single quotes around one character, as in the notes. Double quotes create a String.",
        },
        {
          question: 'Which Kotlin type stores the text "Computer Science"?',
          answer: "String",
          choices: ["Char", "Boolean", "Int", "String"],
          explanation:
            "String represents a sequence of characters and uses double quotes for ordinary literals.",
        },
        {
          question:
            'What does this print? val studentName = "Hazel San"; println(studentName.lowercase())',
          answer: "hazel san",
          choices: ["hazel san", "hazelsan", "hazel_san", "null"],
          explanation:
            "lowercase() returns a String with letters converted to lowercase.",
        },
        {
          question:
            'What happens to name after val name = "CS"; name.lowercase()?',
          answer: "name still contains the original uppercase text",
          choices: [
            "name is replaced with lowercase text",
            "name still contains the original uppercase text",
            "name becomes null",
            "It does not compile",
          ],
          explanation:
            "Strings are immutable. lowercase() returns a new value; this code discards it, leaving name unchanged.",
        },
        {
          question:
            "Which operator checks whether a value has a particular type?",
          answer: "is",
          choices: ["as", "==", "is", "in"],
          explanation:
            "For example, value is String checks the type. The notes use true is Boolean and alphabet is Char.",
        },
        {
          question:
            "Given val score: Int = 100, which assignment to a Long variable compiles?",
          answer: "val total: Long = score.toLong()",
          choices: [
            "val total: Long = score",
            "val total: Long = (Long) score",
            "val total: Long = score.toString()",
            "val total: Long = score.toLong()",
          ],
          explanation:
            "Assigning an existing Int value to Long requires an explicit numeric conversion.",
        },
        {
          question: "What does println(5 / 2) print?",
          answer: "2",
          choices: ["2", "2.5", "3", "It does not compile"],
          explanation:
            "Both operands are integers, so the fractional part is discarded.",
        },
        {
          question: "What does println(5 / 2.0) print?",
          answer: "2.5",
          choices: ["2", "2.5", "3.0", "It does not compile"],
          explanation: "The Double operand makes this floating-point division.",
        },
        {
          question: 'What does "hello".toIntOrNull() return?',
          answer: "null",
          choices: ["0", "An empty String", "null", "The integer 5"],
          explanation:
            "toIntOrNull() returns an Int? and produces null when the text cannot be parsed as an Int.",
        },
        {
          question:
            'What type is inferred for val words = arrayOf("I", "Love", "CS")?',
          answer: "Array<String>",
          choices: ["String", "Array<Char>", "IntArray", "Array<String>"],
          explanation:
            "arrayOf creates an array. All three values here are Strings.",
        },
        {
          question:
            'Given val words = arrayOf("I", "Love", "CS"), what is words[0]?',
          answer: "I",
          choices: ["I", "Love", "CS", "0"],
          explanation: "Array indexing starts at zero.",
        },
        {
          question: "Which statement describes a Kotlin Array?",
          answer: "Its size is fixed, but its elements can be replaced",
          choices: [
            "It automatically grows when an element is assigned",
            "Its size is fixed, but its elements can be replaced",
            "Its elements can never change",
            "It has no index positions",
          ],
          explanation:
            "Use size for the element count. Resizing requires another array.",
        },
        {
          question:
            'What happens here? val words = arrayOf("I", "Love", "CS"); words[2] = "Kotlin"',
          answer: "The third element becomes Kotlin",
          choices: [
            "It fails because val freezes the elements",
            "A fourth element is added",
            "The third element becomes Kotlin",
            "The array variable becomes a String",
          ],
          explanation:
            "val prevents reassignment of words; it does not freeze the array contents.",
        },
        {
          question:
            'What does this code print? val words = arrayOf("I", "Love", "CS"); for (word in words) { println(word) }',
          answer: "I, Love, and CS on separate lines",
          choices: [
            "The index numbers 0, 1, and 2",
            "Only CS",
            "All three words on one line",
            "I, Love, and CS on separate lines",
          ],
          explanation:
            "The loop visits each element in order. println adds a newline after each word.",
        },
        {
          question: "Which expression creates an IntArray?",
          answer: "intArrayOf(1, 2, 3)",
          choices: [
            "intArrayOf(1, 2, 3)",
            "arrayOf(1, 2, 3)",
            "listOf(1, 2, 3)",
            'arrayOf("1", "2", "3")',
          ],
          explanation:
            "IntArray is a specialized integer array type, distinct from Array<Int>.",
        },
        {
          question:
            "What does the question mark mean in var studentSection: String? = null?",
          answer: "The variable may contain a String or null",
          choices: [
            "The String must contain a question mark",
            "The variable may contain a String or null",
            "The variable always contains null",
            "The type will be decided at runtime",
          ],
          explanation: "The ? suffix marks a nullable type.",
        },
        {
          question:
            "Which declaration is invalid because its type does not allow null?",
          answer: "val name: String = null",
          choices: [
            "val name: String? = null",
            'val name: String = "Hazel"',
            "val name: String = null",
            'val name: String? = "Hazel"',
          ],
          explanation: "String excludes null; String? permits it.",
        },
        {
          question:
            "What does this print? val studentSection: String? = null; println(studentSection?.lowercase())",
          answer: "null",
          choices: [
            "An empty line",
            "false",
            "It throws a NullPointerException",
            "null",
          ],
          explanation:
            "A safe call skips lowercase() when the receiver is null.",
        },
        {
          question:
            "Given a variable name of type String?, what is the type of name?.length?",
          answer: "Int?",
          choices: ["Int?", "Int", "String?", "Boolean"],
          explanation: "The result may be an integer length or null.",
        },
        {
          question:
            'What does this print? val name: String? = null; println(name ?: "Guest")',
          answer: "Guest",
          choices: [
            "null",
            "Guest",
            "name",
            "It throws a NullPointerException",
          ],
          explanation:
            "The Elvis operator ?: supplies its right operand when the left is null.",
        },
        {
          question:
            "What happens here? val name: String? = null; println(name!!.length)",
          answer: "It throws a NullPointerException",
          choices: [
            "It prints 0",
            "It prints null",
            "It throws a NullPointerException",
            "It prints 4",
          ],
          explanation:
            "!! asserts non-nullness and throws when that assertion is false.",
        },
        {
          question:
            "Inside fun show(name: String?), why does if (name != null) { println(name.length) } compile?",
          answer:
            "The null check allows a smart cast to String inside the branch",
          choices: [
            "All nullable values allow direct member access",
            "The check converts null to an empty String",
            "length is always allowed on null",
            "The null check allows a smart cast to String inside the branch",
          ],
          explanation:
            "The checked parameter cannot change, so Kotlin knows it is non-null.",
        },
        {
          question:
            "What does value as? String return when value contains an Int?",
          answer: "null",
          choices: [
            "null",
            "The number converted to text",
            "An empty String",
            "It always throws a ClassCastException",
          ],
          explanation:
            "as? attempts a safe cast; it does not perform numeric-to-text conversion.",
        },
        {
          question: "Which syntax starts a single-line Kotlin comment?",
          answer: "// comment",
          choices: [
            "# comment",
            "// comment",
            "<!-- comment -->",
            "-- comment",
          ],
          explanation: "Text after // on the same line is a comment.",
        },
        {
          question: "Which syntax encloses a Kotlin block comment?",
          answer: "/* comment */",
          choices: [
            "<!-- comment -->",
            "# comment #",
            "/* comment */",
            "(* comment *)",
          ],
          explanation:
            "A block comment can span multiple lines, as shown in the notes.",
        },
        {
          question: "Which syntax begins a KDoc documentation comment?",
          answer: "/**",
          choices: ["//", "<!--", "##", "/**"],
          explanation:
            "KDoc comments end with */ and can include documentation tags such as @param.",
        },
        {
          question:
            "Which declaration is a valid entry point for a simple Kotlin console program?",
          answer: 'fun main() { println("Hello") }',
          choices: [
            'fun main() { println("Hello") }',
            'function main() { println("Hello") }',
            'void main() { println("Hello") }',
            'def main(): println("Hello")',
          ],
          explanation:
            "Kotlin uses the main function as a console program entry point.",
        },
        {
          question:
            "What does package com.example.lib do at the top of a Kotlin file?",
          answer: "Places declarations in the com.example.lib package",
          choices: [
            "Creates a variable named lib",
            "Places declarations in the com.example.lib package",
            "Installs an external library",
            "Starts the main function",
          ],
          explanation:
            "A package groups declarations under a qualified name. This line appears in all three notes.",
        },
        {
          question:
            'What is the difference between print("CS") and println("CS")?',
          answer: "println adds a line break after the text",
          choices: [
            "print only accepts numbers",
            "println converts text to uppercase",
            "println adds a line break after the text",
            "print automatically repeats the text",
          ],
          explanation:
            "Both write output. println moves subsequent output to the next line.",
        },
        {
          question:
            "Which declaration defines a function that takes two Int values and returns an Int?",
          answer: "fun add(a: Int, b: Int): Int { return a + b }",
          choices: [
            "fun add(Int a, Int b): Int { return a + b }",
            "function add(a: Int, b: Int): Int { return a + b }",
            "fun add(a: Int, b: Int): String { return a + b }",
            "fun add(a: Int, b: Int): Int { return a + b }",
          ],
          explanation:
            "Parameters use name: Type, and the return type follows the parameter list.",
        },
        {
          question:
            "What does this print? fun double(n: Int) = n * 2; println(double(4))",
          answer: "8",
          choices: ["8", "4", "44", "It does not compile"],
          explanation:
            "An expression body follows =. The function doubles its argument and has an inferred Int return type.",
        },
        {
          question:
            "Which Kotlin type describes a function that returns no meaningful result?",
          answer: "Unit",
          choices: ["Null", "Unit", "Nothing", "Boolean"],
          explanation:
            "Functions that only perform an action, such as printing, commonly return Unit. Their explicit : Unit annotation can be omitted.",
        },
        {
          question:
            'What is result after val score = 80; val result = if (score >= 75) "Pass" else "Fail"?',
          answer: "Pass",
          choices: ["Fail", "true", "Pass", "It does not compile"],
          explanation:
            "if can produce a value. Since 80 is at least 75, this expression produces Pass.",
        },
        {
          question:
            'What is label after val level = 2; val label = when (level) { 1 -> "Beginner"; 2 -> "Intermediate"; else -> "Advanced" }?',
          answer: "Intermediate",
          choices: ["Beginner", "Advanced", "2", "Intermediate"],
          explanation:
            "when selects the matching branch. An else branch handles remaining cases.",
        },
        {
          question: "What does for (i in 1..3) { print(i) } print?",
          answer: "123",
          choices: ["123", "12", "012", "234"],
          explanation:
            "The .. range includes both endpoints, so the loop visits 1, 2, and 3.",
        },
        {
          question: "What does for (i in 0 until 3) { print(i) } print?",
          answer: "012",
          choices: ["0123", "012", "123", "01"],
          explanation: "until excludes its upper bound.",
        },
        {
          question: "What does println(7 % 3) print?",
          answer: "1",
          choices: ["2", "3", "1", "0"],
          explanation:
            "The % operator gives the remainder: 7 is 2 groups of 3 with 1 left over.",
        },
        {
          question:
            'What does this print? val a = 3; val b = 4; println("Total: ${a + b}")',
          answer: "Total: 7",
          choices: [
            "Total: 34",
            "Total: ${a + b}",
            "It does not compile",
            "Total: 7",
          ],
          explanation:
            "Braces in a string template allow an expression to be evaluated and inserted into the text.",
        },
      ],
    },
  ],
});
