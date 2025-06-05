export type Question = {
    question: string;
    options: string[];
    answer: string;
  };
  
  export const questions: Question[] = [
    
    {
        question: 'What does CPU stand for in computer science?',
        options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Peripheral Unit'],
        answer: 'Central Processing Unit',
      },
      {
        question: 'Which data structure uses LIFO (Last In, First Out) principle?',
        options: ['Queue', 'Stack', 'Linked List', 'Array'],
        answer: 'Stack',
      },
      {
        question: 'What is the main purpose of an operating system?',
        options: ['Compiling code', 'Managing hardware and software resources', 'Designing web pages', 'Editing images'],
        answer: 'Managing hardware and software resources',
      },
    //   {
    //     question: 'Which of the following is not a programming paradigm?',
    //     options: ['Object-Oriented', 'Functional', 'Procedural', 'Hexagonal'],
    //     answer: 'Hexagonal',
    //   },
    //   {
    //     question: 'What is the function of a compiler?',
    //     options: ['Runs the code line-by-line', 'Translates high-level code to machine code', 'Edits the code automatically', 'Stores code in memory'],
    //     answer: 'Translates high-level code to machine code',
    //   },
    //   {
    //     question: 'Which of the following is a non-volatile memory?',
    //     options: ['RAM', 'Cache', 'Register', 'Hard Drive'],
    //     answer: 'Hard Drive',
    //   },
    //   {
    //     question: 'What does HTML stand for?',
    //     options: ['Hyperlink and Text Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyper Text Manipulation Language'],
    //     answer: 'HyperText Markup Language',
    //   },
    //   {
    //     question: 'Which layer in the OSI model is responsible for end-to-end communication?',
    //     options: ['Application Layer', 'Transport Layer', 'Network Layer', 'Data Link Layer'],
    //     answer: 'Transport Layer',
    //   },
    //   {
    //     question: 'What is the primary purpose of DNS in networking?',
    //     options: ['Encrypt data', 'Translate domain names to IP addresses', 'Route packets', 'Manage firewalls'],
    //     answer: 'Translate domain names to IP addresses',
    //   },
    //   {
    //     question: 'Which of the following is an example of an open-source operating system?',
    //     options: ['Windows', 'macOS', 'Linux', 'iOS'],
    //     answer: 'Linux',
    //   },
    //   {
    //     question: 'What is the time complexity of accessing an element in a hash table on average?',
    //     options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    //     answer: 'O(1)',
    //   },
    //   {
    //     question: 'Which of the following sorting algorithms has the best average-case time complexity?',
    //     options: ['Bubble Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'],
    //     answer: 'Quick Sort',
    //   },
    //   {
    //     question: 'In the context of databases, what does ACID stand for?',
    //     options: [
    //       'Atomicity, Consistency, Isolation, Durability',
    //       'Accuracy, Consistency, Isolation, Durability',
    //       'Atomicity, Concurrency, Isolation, Durability',
    //       'Accuracy, Concurrency, Integrity, Durability'
    //     ],
    //     answer: 'Atomicity, Consistency, Isolation, Durability',
    //   },
    //   {
    //     question: 'Which design pattern restricts the instantiation of a class to one single instance?',
    //     options: ['Factory Pattern', 'Observer Pattern', 'Singleton Pattern', 'Decorator Pattern'],
    //     answer: 'Singleton Pattern',
    //   },
    //   {
    //     question: 'What is the main difference between a process and a thread?',
    //     options: [
    //       'Threads have separate memory space; processes share memory',
    //       'Processes have separate memory space; threads share memory within a process',
    //       'Threads are slower than processes',
    //       'Processes cannot run concurrently, threads can',
    //     ],
    //     answer: 'Processes have separate memory space; threads share memory within a process',
    //   },
    //   {
    //     question: 'Which of the following is true about context switching in operating systems?',
    //     options: [
    //       'It involves saving and loading CPU state',
    //       'It happens only when a process terminates',
    //       'It is not needed for multi-threading',
    //       'It reduces CPU overhead',
    //     ],
    //     answer: 'It involves saving and loading CPU state',
    //   },
    //   {
    //     question: 'In Big-O notation, what does O(n log n) typically represent?',
    //     options: [
    //       'Linear time',
    //       'Quadratic time',
    //       'Log-linear time',
    //       'Exponential time',
    //     ],
    //     answer: 'Log-linear time',
    //   },
    //   {
    //     question: 'Which of the following statements about deadlocks is correct?',
    //     options: [
    //       'Deadlocks occur only in single-threaded systems',
    //       'Deadlocks can be prevented by preemptive resource allocation',
    //       'Deadlocks always resolve automatically',
    //       'Deadlocks require all four conditions: mutual exclusion, hold and wait, no preemption, and circular wait',
    //     ],
    //     answer: 'Deadlocks require all four conditions: mutual exclusion, hold and wait, no preemption, and circular wait',
    //   },
    //   {
    //     question: 'In relational databases, what is a foreign key?',
    //     options: [
    //       'A unique identifier for a record in a table',
    //       'A key used to encrypt data',
    //       'A field that uniquely identifies a row in another table',
    //       'A column that stores large data blobs',
    //     ],
    //     answer: 'A field that uniquely identifies a row in another table',
    //   },
    //   {
    //     question: 'What does the CAP theorem state about distributed systems?',
    //     options: [
    //       'A system can provide consistency, availability, and partition tolerance simultaneously',
    //       'A system can only provide two out of consistency, availability, and partition tolerance at the same time',
    //       'CAP theorem applies only to single-node databases',
    //       'CAP theorem is about network protocols',
    //     ],
    //     answer: 'A system can only provide two out of consistency, availability, and partition tolerance at the same time',
    //   },

  ];
  