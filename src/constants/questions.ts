import { Question } from "../models/questions";

export const questions: Question[] = [
  {
    question: "JavaScript is essential for front-end web development.",
    questId: 1,
    questionNumber: 1,
    correctAnswer: 5,
    options: [
      { answer: "Completely disagree", questId: 1, isActive: false },
      { answer: "Partially disagree", questId: 2, isActive: false },
      { answer: "Not sure", questId: 3, isActive: false },
      { answer: "Partially agree", questId: 4, isActive: false },
      { answer: "Completely agree", questId: 5, isActive: false },
    ],

    // isActive: false,
  },
  {
    question: "JavaScript's asynchronous nature is challenging to understand.",
    questId: 2,
    questionNumber: 2,
    correctAnswer: 5,
    options: [
      { answer: "Completely disagree", questId: 1, isActive: false },
      { answer: "Partially disagree", questId: 2, isActive: false },
      { answer: "Not sure", questId: 3, isActive: false },
      { answer: "Partially agree", questId: 4, isActive: false },
      { answer: "Completely agree", questId: 5, isActive: false },
    ],
    // isActive: false,
  },
  // {
  //   question: "TypeScript makes JavaScript development more efficient.",
  //   questId: 3,
  //   isActive: false,
  // },
  // {
  //   question:
  //     "JavaScript frameworks like React, Angular, and Vue improve development speed.",
  //   questId: 4,
  //   isActive: false,
  // },
  // {
  //   question: "Understanding closures is crucial for mastering JavaScript.",
  //   questId: 5,
  //   isActive: false,
  // },
  // {
  //   question: "The 'this' keyword in JavaScript is often confusing.",
  //   questId: 6,
  //   isActive: false,
  // },
  // {
  //   question:
  //     "JavaScript is equally suitable for back-end development as it is for front-end.",
  //   questId: 7,
  //   isActive: false,
  // },
  // {
  //   question: "Arrow functions make JavaScript code more readable.",
  //   questId: 8,
  //   isActive: false,
  // },
  // {
  //   question: "JavaScript's flexibility with types can lead to more bugs.",
  //   questId: 9,
  //   isActive: false,
  // },
  // {
  //   question: "Using JavaScript modules is beneficial for organizing code.",
  //   questId: 10,
  //   isActive: false,
  // },
];
