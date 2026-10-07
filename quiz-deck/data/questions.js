// Built-in question bank. Edit this file; reload the page to see changes.
// Each entry is one subject. Use "modules" for chapters/topics, or a flat "questions" list.
// To add another subject: add another object below, or copy this file (e.g. data/chemistry.js),
// keep the first line, and add a matching <script src="data/chemistry.js"></script> in index.html
// above the app.js line.
window.QUESTION_BANK = window.QUESTION_BANK || [];

window.QUESTION_BANK.push({
  title: "CS0081",
  modules: [
    {
      title: "Module 3",
      questions: [
        {
          question:
            "Which type of cybersecurity safeguard refers to the devices and products available to protect information systems and fend off cyber criminals?",
          answer: "Technologies",
          choices: [
            "Standards",
            "Policies and Practices",
            "Technologies",
            "People",
          ],
          explanation:
            "Technologies are the devices and products used to protect information systems and fend off cyber criminals.",
        },
        {
          question:
            "Which safeguard consists of procedures and guidelines that enable the citizens of the cyber world to stay safe and follow good practices?",
          answer: "Policies and Practices",
          choices: [
            "Technologies",
            "Countermeasures",
            "Policies and Practices",
            "People",
          ],
          explanation:
            "Policies and Practices are the procedures and guidelines that help users stay safe and follow good practices.",
        },
        {
          question:
            "Which AAA service verifies the identity of a user to prevent unauthorized access?",
          answer: "Authentication",
          choices: [
            "Authorization",
            "Accounting",
            "Authentication",
            "Accessibility",
          ],
          explanation:
            "Authentication verifies a user's identity, for example with a username or ID, something you know, something you have, or something you are.",
        },
        {
          question:
            "Which AAA service determines which resources users can access, along with the operations they can perform?",
          answer: "Authorization",
          choices: [
            "Authentication",
            "Authorization",
            "Accounting",
            "Availability",
          ],
          explanation:
            "Authorization determines which resources users can access and what they can do with them. It can also control when they have access.",
        },
        {
          question:
            "Which AAA service keeps track of what users do, including what they access, how long they access it, and any changes made?",
          answer: "Accounting",
          choices: [
            "Authentication",
            "Authorization",
            "Accounting",
            "Auditing",
          ],
          explanation:
            "Accounting tracks user activity, including resources accessed, time spent, and changes made.",
        },
        {
          question:
            "Which method of transmitting data uses removable media to physically move data from one computer to another?",
          answer: "Sneaker net",
          choices: [
            "Wired networks",
            "Wireless networks",
            "Sneaker net",
            "Direct-attached storage",
          ],
          explanation:
            "Sneaker net physically carries data on removable media between computers.",
        },
        {
          question:
            "Which data-in-transit challenge describes cyber criminals intercepting and altering data while it travels across a network?",
          answer: "Protecting data integrity",
          choices: [
            "Protecting data confidentiality",
            "Protecting data integrity",
            "Protecting data availability",
            "Protecting data privacy",
          ],
          explanation:
            "Protecting data integrity is about preventing criminals from intercepting and altering data in transit. Confidentiality concerns capturing and stealing data, and availability concerns rogue devices interrupting access.",
        },
        {
          question:
            "Which network-based safeguard is a secure virtual network that uses the public network, with security based on encrypting packet content between endpoints?",
          answer: "Virtual Private Network (VPN)",
          choices: [
            "Network access control (NAC)",
            "Wireless access point security",
            "Virtual security appliance",
            "Virtual Private Network (VPN)",
          ],
          explanation:
            "A VPN uses the public network (the Internet) and gets its security from encrypting packet content between the VPN endpoints.",
        },
        {
          question:
            "Which safeguard requires a set of checks, such as up-to-date antivirus software or OS updates, before allowing a device to connect to a network?",
          answer: "Network access control (NAC)",
          choices: [
            "Virtual Private Network (VPN)",
            "Network access control (NAC)",
            "Wireless access point security",
            "Intrusion Prevention System (IPS)",
          ],
          explanation:
            "NAC checks a device's security posture, such as antivirus and OS updates, before it can join the network.",
        },
        {
          question:
            "In cloud-based safeguards, which service allows users to access application software and databases while the cloud provider manages the infrastructure?",
          answer: "Software as a Service (SaaS)",
          choices: [
            "Infrastructure as a Service (IaaS)",
            "Software as a Service (SaaS)",
            "Virtual security appliances",
            "Storage area network (SAN)",
          ],
          explanation:
            "With SaaS, users access application software and databases. The provider manages the infrastructure, and users store data on the provider's servers.",
        },
        {
          question:
            "Which cloud-based service provides virtualized computing resources over the Internet, with the provider hosting the hardware, software, servers, and storage components?",
          answer: "Infrastructure as a Service (IaaS)",
          choices: [
            "Software as a Service (SaaS)",
            "Virtual security appliances",
            "Infrastructure as a Service (IaaS)",
            "Network attached storage (NAS)",
          ],
          explanation:
            "IaaS provides virtualized computing resources over the Internet, with the provider hosting the underlying hardware, software, servers, and storage.",
        },
        {
          question:
            "Which type of security document is a flexible list of suggestions on how to do things more efficiently and securely, and is not usually mandatory?",
          answer: "Guidelines",
          choices: ["Policy", "Standards", "Procedure", "Guidelines"],
          explanation:
            "Guidelines are suggestions that are similar to standards but more flexible and not usually mandatory. Standards help maintain consistency, a policy sets security objectives and rules, and a procedure gives detailed step-by-step instructions.",
        },
        {
          question:
            "What is identified by the first dimension of the cybersecurity cube?",
          answer: "Goals",
          choices: ["Tools", "Knowledge", "Goals", "Safeguards", "Rules"],
          explanation:
            "The first dimension of the cybersecurity sorcery cube identifies the goals or security principles required to protect the cyber world.",
        },
        {
          question: "What are three types of sensitive information?",
          answer: "PII, business, and classified",
          choices: [
            "Declassified, public, and published",
            "PII, business, and classified",
            "PII, public, and classified",
            "Business, published, and declassified",
          ],
          explanation:
            "Sensitive information is information that would otherwise cause harm to a company or individual if publicly disclosed. PII, business and classified information are all sensitive.",
        },
        {
          question: "What are two common hash functions?",
          answer: "SHA and MD5",
          choices: [
            "Blowfish and ECC",
            "RC4 and RSA",
            "SHA and MD5",
            "MD5 and ECC",
          ],
          explanation:
            "SHA and MD5 use complex mathematical algorithms to compute hash values.",
        },
        {
          question:
            "What service determines which resources a user can access along with the operations that a user can perform?",
          answer: "Authorization",
          choices: [
            "Authentication",
            "Biometric",
            "Authorization",
            "Accounting",
            "Token",
          ],
          explanation:
            "Authorization determines whether a user has certain access privileges.",
        },
        {
          question:
            "What type of cybersecurity laws protect you from an organization that might want to share your sensitive data?",
          answer: "Privacy",
          choices: [
            "Authentication",
            "Confidentiality",
            "Nonrepudiation",
            "Privacy",
            "Integrity",
          ],
          explanation:
            "Privacy laws control appropriate use of data and access to data.",
        },
        {
          question:
            "What three design principles help to ensure high availability? (Choose three.)",
          answer:
            "Detect failures as they occur, eliminate single points of failure, and provide for reliable crossover",
          choices: [
            "Check for data consistency, use encryption, and ensure confidentiality",
            "Eliminate single points of failure, use encryption, and ensure confidentiality",
            "Detect failures as they occur, check for data consistency, and provide for reliable crossover",
            "Detect failures as they occur, eliminate single points of failure, and provide for reliable crossover",
          ],
          explanation:
            "High availability systems typically include three design principles: eliminate single points of failure, provide for reliable crossover, and detect failures as they occur.",
        },
        {
          question:
            "For the purpose of authentication, what three methods are used to verify identity?",
          answer:
            "Something you know, something you have, and something you are",
          choices: [
            "Where you are, something you do, and something you know",
            "Something you are, something you do, and something you have",
            "Where you are, something you have, and something you know",
            "Something you know, something you have, and something you are",
          ],
          explanation:
            "The forms of authentication are something you know, something you have, and something you are.",
        },
        {
          question: "What two methods help to ensure system availability?",
          answer: "Up-to-date operating systems and equipment maintenance",
          choices: [
            "Integrity checking and fire extinguishers",
            "System backups and integrity checking",
            "Up-to-date operating systems and equipment maintenance",
            "System resiliency and fire extinguishers",
          ],
          explanation:
            "Up-to-date operating systems and equipment maintenance help keep systems available. Integrity checking addresses data integrity rather than availability.",
        },
        {
          question:
            "What name is given to a storage device connected to a network?",
          answer: "NAS",
          choices: ["NAS", "SAN", "RAID", "Cloud", "DAS"],
          explanation:
            "NAS refers to a storage device connected to a network that allows storage and retrieval of data from a centralized location by authorized network users.",
        },
        {
          question: "What are two methods that ensure confidentiality?",
          answer: "Authentication and encryption",
          choices: [
            "Authorization and availability",
            "Nonrepudiation and integrity",
            "Integrity and encryption",
            "Authentication and encryption",
          ],
          explanation:
            "Confidentiality means viewing of information only for those who need to know. This can be accomplished by encrypting data and authenticating users who request access.",
        },
        {
          question:
            "What is a secure virtual network called that uses the public network?",
          answer: "VPN",
          choices: ["MPLS", "IDS", "Firewall", "NAC", "IPS", "VPN"],
          explanation:
            "The term VPN describes a virtual network that uses encryption to protect data when traveling across Internet media.",
        },
        {
          question:
            "What mechanism can organizations use to prevent accidental changes by authorized users?",
          answer: "Version control",
          choices: [
            "SHA-1",
            "Backups",
            "Version control",
            "Hashing",
            "Encryption",
          ],
          explanation:
            "Version control ensures that two users cannot update the same object.",
        },
        {
          question:
            "What is a method of sending information from one device to another using removable media?",
          answer: "Sneaker net",
          choices: [
            "Wired",
            "Infrared",
            "LAN",
            "Packet",
            "Wireless",
            "Sneaker net",
          ],
          explanation:
            "Sneaker net refers to hand delivering the removable data.",
        },
        {
          question:
            "What are the three foundational principles of the cybersecurity domain?",
          answer: "Confidentiality, integrity, and availability",
          choices: [
            "Policy, security, and encryption",
            "Confidentiality, integrity, and encryption",
            "Policy, integrity, and availability",
            "Confidentiality, integrity, and availability",
          ],
          explanation:
            "Three foundational security principles are confidentiality, integrity and availability.",
        },
        {
          question:
            "How are data accuracy and consistency ensured? (Choose two)",
          answer: "Data consistency checks and hashing",
          choices: [
            "Privacy and availability",
            "Authorization and repudiation",
            "Data consistency checks and hashing",
            "Hashing and privacy",
          ],
          explanation:
            "Hashing and data consistency checks are methods used to ensure data integrity.",
        },
        {
          question:
            "What three tasks are accomplished by a comprehensive security policy?",
          answer:
            "Defines legal consequences of violations, gives security staff the backing of management, and sets rules for expected behavior",
          choices: [
            "Useful for management, is not legally binding, and vagueness",
            "Defines legal consequences of violations, gives security staff the backing of management, and sets rules for expected behavior",
            "Sets rules for expected behavior, is not legally binding, and vagueness",
            "Useful for management, defines legal consequences of violations, and vagueness",
          ],
          explanation:
            "A security policy sets rules for expected behavior, defines the legal consequences of violations, and gives security staff the backing of management. It also demonstrates the organization's commitment to security and ensures consistency in system operations and in software and hardware acquisition, use and maintenance.",
        },
        {
          question:
            "What principle prevents the disclosure of information to unauthorized people, resources, and processes?",
          answer: "Confidentiality",
          choices: [
            "Integrity",
            "Confidentiality",
            "Nonrepudiation",
            "Accounting",
            "Availability",
          ],
          explanation:
            "The security principle of confidentiality refers to the prevention of the disclosure of information to unauthorized people, resources, and processes.",
        },
        {
          question: "What are the three states of data?",
          answer: "At rest, in-transit, and in-process",
          choices: [
            "Suspended, in-cloud, and encrypted",
            "At rest, in-cloud, and encrypted",
            "In-transit, in-process, and suspended",
            "At rest, in-transit, and in-process",
          ],
          explanation:
            "The three states of data are data at rest (stored), data in-transit, and data in-process.",
        },
        {
          question:
            "What name is given to any changes to the original data such as users manually modifying data, programs processing and changing data, and equipment failures?",
          answer: "Modification",
          choices: [
            "Deletion",
            "Modification",
            "Dissemination",
            "Corruption",
            "Backup",
            "Integrity",
          ],
          explanation:
            "Modification involves changes to the original data and not complete deletion of the data.",
        },
        {
          question: "What are three access control security services?",
          answer: "Authentication, authorization, and accounting",
          choices: [
            "Access, repudiation, and availability",
            "Authentication, repudiation, and availability",
            "Access, authorization, and accounting",
            "Authentication, authorization, and accounting",
          ],
          explanation:
            "The three access control services are the AAA services: authentication, authorization, and accounting.",
        },
        {
          question: "What three methods help to ensure system availability?",
          answer:
            "System backups, equipment maintenance, and up-to-date operating systems",
          choices: [
            "System resiliency, fire extinguishers, and integrity checking",
            "System backups, equipment maintenance, and up-to-date operating systems",
            "System backups, fire extinguishers, and integrity checking",
            "System resiliency, equipment maintenance, and integrity checking",
          ],
          explanation:
            "Methods used to ensure high availability include system redundancy, system backups, increased system resiliency, equipment maintenance, operating system and software updates and patches, and proactive plans for swift recovery from unforeseen disasters.",
        },
      ],
    },
    {
      title: "Module 4",
      questions: [
        {
          question:
            "Which type of malware carries out malicious operations under the guise of a desired operation, such as playing an online game?",
          answer: "Trojan horse",
          choices: ["Worm", "Virus", "Trojan horse", "Logic bomb"],
          explanation:
            "A Trojan horse hides its malicious operations behind a desired function and exploits the privileges of the user who runs it. It binds itself to non-executable files such as images, audio files or games.",
        },
        {
          question:
            "Which type of malware persuades the user to take action out of fear, using forged pop-up windows that resemble operating system dialogue windows?",
          answer: "Scareware",
          choices: ["Adware", "Spyware", "Browser hijacker", "Scareware"],
          explanation:
            "Scareware persuades users to act based on fear by forging pop-up windows that look like operating system dialogue windows.",
        },
        {
          question:
            "Which type of phishing uses voice communication technology, such as spoofed VoIP calls or recorded messages that appear legitimate?",
          answer: "Vishing",
          choices: ["Smishing", "Pharming", "Vishing", "Whaling"],
          explanation:
            "Vishing is phishing using voice communication technology. Criminals can spoof calls from legitimate sources using VoIP, or leave recorded messages that appear legitimate.",
        },
        {
          question:
            "What is the term for impersonating a legitimate website in an effort to deceive users into entering their credentials?",
          answer: "Pharming",
          choices: ["Whaling", "Pharming", "SEO poisoning", "Scareware"],
          explanation:
            "Pharming is the impersonation of a legitimate website to trick users into entering their credentials.",
        },
        {
          question:
            "Which phishing attack targets high-profile people within an organization, such as senior executives?",
          answer: "Whaling",
          choices: ["Vishing", "Whaling", "Smishing", "Pharming"],
          explanation:
            "Whaling is a phishing attack aimed at high-profile targets within an organization, such as senior executives.",
        },
        {
          question:
            "Which technique uses search engine optimization to make a malicious website appear higher in search results?",
          answer: "SEO poisoning",
          choices: [
            "Browser hijacking",
            "Pharming",
            "Spamming",
            "SEO poisoning",
          ],
          explanation:
            "SEO poisoning uses SEO techniques, normally used by legitimate companies to improve rankings, to push a malicious website higher in search results.",
        },
        {
          question:
            "Which malware alters a computer's browser settings to redirect the user to websites paid for by the criminals' customers, and is usually installed through a drive-by download?",
          answer: "Browser hijacker",
          choices: ["Adware", "Scareware", "Browser hijacker", "Rootkit"],
          explanation:
            "A browser hijacker changes browser settings to redirect users to sites paid for by the criminals' customers. It usually installs without the user's permission as part of a drive-by download.",
        },
        {
          question:
            "Which social engineering attack involves an attacker calling an individual and lying to them in an attempt to gain access to privileged data?",
          answer: "Pretexting",
          choices: [
            "Pretexting",
            "Tailgating",
            "Shoulder surfing",
            "Something for something (quid pro quo)",
          ],
          explanation:
            "In pretexting, an attacker lies to the target, for example by pretending to need personal or financial data to confirm the person's identity.",
        },
        {
          question:
            "Which social engineering attack involves an attacker requesting personal information from a party in exchange for something, like a gift?",
          answer: "Something for something (quid pro quo)",
          choices: [
            "Pretexting",
            "Impersonation",
            "Something for something (quid pro quo)",
            "Piggybacking",
          ],
          explanation:
            "Something for something (quid pro quo) is when an attacker requests personal information in exchange for something, such as a gift.",
        },
        {
          question:
            "Which practice involves picking up PINs, access codes or credit card numbers by watching a victim from close proximity, or with binoculars or closed circuit cameras?",
          answer: "Shoulder surfing",
          choices: ["Tailgating", "Shoulder surfing", "Sniffing", "Pharming"],
          explanation:
            "Shoulder surfing (and dumpster diving) refers to picking up PINs, access codes or credit card numbers by observing a victim or going through discarded material.",
        },
        {
          question:
            "What is it called when a criminal tags along with an authorized person to gain entry into a secure location or restricted area?",
          answer: "Piggybacking (tailgating)",
          choices: [
            "Pretexting",
            "Shoulder surfing",
            "Dumpster diving",
            "Piggybacking (tailgating)",
          ],
          explanation:
            "Piggybacking occurs when a criminal tags along with an authorized person to gain entry to a restricted area. Tailgating is another term for the same practice.",
        },
        {
          question:
            "Which type of network attack interrupts network services to users, devices or applications, and is relatively simple to conduct even by an unskilled attacker?",
          answer: "Denial-of-service (DoS)",
          choices: [
            "Sniffing",
            "Spoofing",
            "Denial-of-service (DoS)",
            "Man-in-the-middle",
          ],
          explanation:
            "A DoS attack interrupts network services and can cause significant loss of time and money. These attacks are relatively simple to carry out.",
        },
        {
          question:
            "Which attack occurs when attackers examine all network traffic passing through their NIC, whether or not the traffic is addressed to them?",
          answer: "Sniffing",
          choices: [
            "Spoofing",
            "Sniffing",
            "Zero-day attack",
            "Keyboard logging",
          ],
          explanation:
            "Sniffing is similar to eavesdropping. It can be done with a software application, a hardware device, or a combination of the two.",
        },
        {
          question:
            "Which impersonation attack takes advantage of a trusted relationship between two systems that accept each other's authentication?",
          answer: "Spoofing",
          choices: ["Sniffing", "Denial-of-service", "RF jamming", "Spoofing"],
          explanation:
            "Spoofing is an impersonation attack that exploits a trusted relationship between two systems, so a user logged onto one system might not authenticate again to access the other.",
        },
        {
          question:
            "In which attack does a criminal intercept communications between computers, and possibly manipulate messages and relay false information between hosts?",
          answer: "Man-in-the-middle",
          choices: [
            "Denial-of-service",
            "Man-in-the-middle",
            "Zero-day attack",
            "Buffer overflow",
          ],
          explanation:
            "In a man-in-the-middle (MitM) attack the criminal intercepts communications to steal information, and can alter messages because the hosts are unaware of the modification.",
        },
        {
          question:
            "Which attack tries to exploit software vulnerabilities that are unknown or undisclosed by the software vendor?",
          answer: "Zero-day attack",
          choices: [
            "Zero-day attack",
            "Buffer overflow",
            "SQL injection",
            "Logic bomb",
          ],
          explanation:
            "A zero-day attack exploits vulnerabilities the vendor does not know about or has not disclosed. The term zero hour describes the moment someone discovers the exploit.",
        },
        {
          question:
            "Which type of program records the keystrokes of a user and can reveal usernames, passwords and websites visited?",
          answer: "Keyboard logging",
          choices: ["Adware", "Sniffing", "Keyboard logging", "Scareware"],
          explanation:
            "Keyboard logging records the keystrokes of the user. It can be implemented with software installed on a computer or with hardware attached to it, and the log file can be emailed to the criminal.",
        },
        {
          question:
            "Which term describes applications that behave in an annoying or undesirable manner and may pose a risk to the user, even though they may not contain recognizable malware?",
          answer: "Grayware",
          choices: ["Spyware", "Grayware", "Ransomware", "Scareware"],
          explanation:
            "Grayware includes applications that behave in an annoying or undesirable manner. It is a growing problem in mobile security with the popularity of smartphones.",
        },
        {
          question:
            "What is a wireless access point installed on a secure network without explicit authorization called?",
          answer: "Rogue access point",
          choices: [
            "Guest access point",
            "Bluejacking device",
            "Rogue access point",
            "DMZ device",
          ],
          explanation:
            "A rogue access point is a wireless access point installed on a secure network without explicit authorization.",
        },
        {
          question:
            "Which wireless attack disrupts the transmission of a radio or satellite station so that the signal does not reach the receiving station?",
          answer: "RF jamming",
          choices: ["Bluejacking", "Bluesnarfing", "RF jamming", "Sniffing"],
          explanation:
            "Radio frequency (RF) jamming deliberately disrupts the transmission of a radio or satellite station so the signal does not reach the receiver.",
        },
        {
          question:
            "What is the term for sending unauthorized messages to another Bluetooth device?",
          answer: "Bluejacking",
          choices: ["Bluesnarfing", "Bluejacking", "Smishing", "Spoofing"],
          explanation:
            "Bluejacking sends unauthorized messages to another Bluetooth device. Bluesnarfing goes further and copies the victim's information, such as emails and contact lists.",
        },
        {
          question:
            "Which type of vulnerability allows a cybercriminal to execute any command on a target machine, with the privileges of the user running the application?",
          answer: "Remote code execution",
          choices: [
            "Cross-site scripting",
            "Grayware",
            "Remote code execution",
            "Bluejacking",
          ],
          explanation:
            "Remote code execution vulnerabilities let a criminal run malicious code and take control of a system with the privileges of the user running the application.",
        },
        {
          question:
            "What weakness do both XML and SQL injection attacks exploit?",
          answer: "Not validating database queries properly",
          choices: [
            "Buffer sizes that are too small",
            "Not validating database queries properly",
            "Static wireless keys",
            "Unpatched Bluetooth stacks",
          ],
          explanation:
            "Both XML and SQL injection attacks exploit weaknesses in the program, such as not validating database queries properly.",
        },
        {
          question:
            "What is the first line of defense against an application attack?",
          answer: "Write solid code",
          choices: [
            "Disabling automatic updates",
            "Write solid code",
            "Trusting input from known sources",
            "Placing the server in a DMZ",
          ],
          explanation:
            "The first line of defense against an application attack is to write solid code. Treat all outside input as hostile, validate it, and keep all software up to date.",
        },
        {
          question:
            "Where can access points be placed to restrict their placement within the network?",
          answer: "Outside the firewall or in a demilitarized zone (DMZ)",
          choices: [
            "Outside the firewall or in a demilitarized zone (DMZ)",
            "Inside the most trusted network segment",
            "Next to the domain controllers",
            "Anywhere, as long as default settings are kept",
          ],
          explanation:
            "Restricting access point placement means putting these devices outside the firewall or in a DMZ, which contains other untrusted devices such as email and web servers.",
        },
        {
          question: "What are two common indicators of spam mail?",
          answer:
            "The email has no subject line and has misspelled words or punctuation errors or both",
          choices: [
            "The email is from a friend and is from your supervisor",
            "The email has keywords in it and has an attachment that is a receipt for a recent purchase",
            "The email has no subject line and has misspelled words or punctuation errors or both",
            "The email has no subject line and is from your supervisor",
          ],
          explanation:
            "Spam is a common method of advertising through the use of unsolicited email and may contain malware.",
        },
        {
          question:
            "What is the term used to describe an email that is targeting a specific person employed at a financial institution?",
          answer: "Spear phishing",
          choices: [
            "Spyware",
            "Target phishing",
            "Spear phishing",
            "Spam",
            "Vishing",
          ],
          explanation:
            "Spear phishing is a phishing attack customized to reach a specific person or target.",
        },
        {
          question:
            "What is the term for deceptive SMS messages that trick users into visiting malicious websites?",
          answer: "Smishing",
          choices: ["Grayware", "Spam", "Smishing", "Impersonation"],
          explanation:
            "Smishing is also known as SMS phishing and is used to send deceptive text messages to trick a user into calling a phone number or visiting a specific website.",
        },
        {
          question: "What does a rootkit modify?",
          answer: "Operating system",
          choices: [
            "Microsoft Word",
            "Programs",
            "Screen savers",
            "Operating system",
            "Notepad",
          ],
          explanation:
            "A rootkit commonly modifies an operating system to create a backdoor to bypass normal authentication mechanisms.",
        },
        {
          question:
            "What is the term for code that evades normal authentication?",
          answer: "Backdoor",
          choices: ["Virus", "Worm", "Trojan", "Backdoor", "Ransomware"],
          explanation:
            "A backdoor is a program or program code implemented by a criminal to bypass the normal authentication that is used to access a system.",
        },
        {
          question:
            "A computer is presenting a user with a screen requesting payment before the user data is allowed to be accessed by the same user. What type of malware is this?",
          answer: "A type of ransomware",
          choices: [
            "A type of worm",
            "A type of logic bomb",
            "A type of ransomware",
            "A type of virus",
          ],
          explanation:
            "Ransomware commonly encrypts data on a computer and makes the data unavailable until the computer user pays a specific sum of money.",
        },
        {
          question: "How do viruses and worms differ?",
          answer: "Worms self-replicate but viruses do not.",
          choices: [
            "Viruses self-replicate but worms do not.",
            "Worms require a host file but viruses do not.",
            "Worms self-replicate but viruses do not.",
            "Viruses hide in legitimate programs but worms do not.",
          ],
          explanation:
            "Worms are able to self-replicate and exploit vulnerabilities on computer networks without user participation.",
        },
        {
          question:
            "What is the term used when a malicious party sends a fraudulent email disguised as being from a legitimate, trusted source?",
          answer: "Phishing",
          choices: [
            "Trojan",
            "Vishing",
            "Phishing",
            "Backdoor",
            "Social engineering",
          ],
          explanation:
            "Phishing is used by malicious parties who create fraudulent messages that attempt to trick a user into either sharing sensitive information or installing malware.",
        },
        {
          question: "What are two ways to protect a computer from malware?",
          answer: "Use antivirus software and keep software up to date",
          choices: [
            "Empty the browser cache and defragment the hard disk",
            "Delete unused software and empty the browser cache",
            "Use antivirus software and keep software up to date",
            "Use antivirus software and defragment the hard disk",
          ],
          explanation:
            "At a minimum, a computer should use antivirus software and have all software up to date to defend against malware.",
        },
        {
          question: "What happens when data exceeds a buffer's capacity?",
          answer: "A buffer overflow",
          choices: [
            "An SQL injection",
            "Cross-site scripting",
            "A buffer overflow",
            "A system exception",
          ],
          explanation:
            "A buffer overflow occurs by changing data beyond the boundaries of a buffer and can lead to a system crash, data compromise, or cause escalation of privileges.",
        },
        {
          question:
            "What type of attack involves intercepting data from nearby devices, as in the case of an attacker copying emails and contact lists outside a store?",
          answer: "Bluesnarfing",
          choices: ["RF jamming", "Bluesnarfing", "Smishing", "Bluejacking"],
          explanation:
            "Bluesnarfing is the copying of user information through unauthorized Bluetooth transmissions.",
        },
        {
          question:
            "A criminal is using software to obtain information about the computer of a user. What is the name of this type of software?",
          answer: "Spyware",
          choices: ["Phishing", "Virus", "Adware", "Spyware"],
          explanation:
            "Spyware is software that tracks the activity of a user and obtains information about that user.",
        },
        {
          question: "13. What is the meaning of the term logic bomb?",
          answer:
            "A malicious program that uses a trigger to awaken the malicious code",
          choices: [
            "A malicious worm",
            "A malicious program that uses a trigger to awaken the malicious code",
            "A malicious virus",
            "A malicious program that hides itself in a legitimate program",
          ],
          explanation:
            "A logic bomb remains inactive until a trigger event occurs. Once activated, a logic bomb runs malicious code that causes harm to a computer.",
        },
        {
          question:
            "What are two of the tactics used by a social engineer to obtain personal information from an unsuspecting target?",
          answer: "Intimidation and urgency",
          choices: [
            "Honesty and integrity",
            "Compassion and honesty",
            "Intimidation and integrity",
            "Intimidation and urgency",
          ],
          explanation:
            "Social engineering tactics include authority, intimidation, consensus/social proof, scarcity, urgency, familiarity/liking, and trust.",
        },
        {
          question:
            "What is the name for the type of software that generates revenue by generating annoying pop-ups?",
          answer: "Adware",
          choices: ["Pop-ups", "Adware", "Spyware", "Trackers"],
          explanation:
            "Adware is a type of malware that displays pop-ups on a computer to generate revenue for the creator of the malware.",
        },
        {
          question:
            "What is a vulnerability that allows criminals to inject scripts into web pages viewed by users?",
          answer: "Cross-site scripting",
          choices: [
            "Buffer overflow",
            "Cross-site scripting",
            "SQL injection",
            "XML injection",
          ],
          explanation:
            "Cross-site scripting (XSS) allows criminals to inject scripts that contain malicious code into web applications.",
        },
        {
          question: "What are two weaknesses of the WEP protocol?",
          answer:
            "The key is static and repeats on a congested network, and the key is transmitted in clear text",
          choices: [
            "WEP uses the same encryption features as Bluetooth, and the default settings cannot be modified",
            "Everyone on the network uses a different key, and the default settings cannot be modified",
            "The key is static and repeats on a congested network, and the key is transmitted in clear text",
            "The key is static and repeats on a congested network, and everyone on the network uses a different key",
          ],
          explanation:
            "The WEP initialization vector (IV) is a 24-bit field, which is too small. It is cleartext and readable, and it is static, which causes identical key streams to repeat on a busy network.",
        },
        {
          question:
            "What is the term for an attack exploiting SQL databases through user input fields?",
          answer: "SQL injection",
          choices: [
            "Buffer overflow",
            "XML injection",
            "Cross-site scripting",
            "SQL injection",
          ],
          explanation:
            "A criminal can insert a malicious SQL statement in an entry field on a website where the system does not filter the user input correctly.",
        },
      ],
    },
  ],
});
