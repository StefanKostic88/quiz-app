import { Question } from "../models/questions";

const optionsArr = [
  { answer: "Completely disagree", optionId: 1, isActive: false },
  { answer: "Partially disagree", optionId: 2, isActive: false },
  { answer: "Not sure", optionId: 3, isActive: false },
  { answer: "Partially agree", optionId: 4, isActive: false },
  { answer: "Completely agree", optionId: 5, isActive: false },
];

const questionsStrings = [
  "The company I work for sets financial-strategic goals for growth and development.",
  "Information sharing in the company I work for is timely and clear.",
  "The company I work for is capable of meeting all its market demands.",
  "The goals and tasks assigned to employees are clearly defined and understandable.",
  "The company I work for explores and enters new markets to increase revenue.",
  "The tasks assigned to employees represent a challenge through which they can develop professionally.",
  "The company has operational plans for executing the annual work plan.",
  "The workplace is equipped with all the necessary materials needed for work.",
  "The company I belong to actively works on retaining existing clients and creating new ones.",
  "My company views employees as crucial to business success.",
  "The company I work for continuously increases revenue by attracting new customers through offering new products.",
  "The company I work for evaluates employee effectiveness in its operations.",
  "The market in which the company operates is developed and meets all company requirements.",
  "The information employees receive about their work is accurate and precise.",
  "The company meets its financial obligations on time.",
  "In the company where I work, there are no communication barriers.",
  "The company regularly plans its budget and executes it across all sectors.",
  "The company offers professional training to employees.",
  "The company where I work thoroughly investigates profitable and unprofitable customers.",
  "The company continuously increases revenue by attracting new customers through the offer of new products.",
  "The company analyzes its competitors.",
  "The company I belong to works intensively on employee motivation.",
  "The company has an adequate IT system for business tracking and reporting.",
  "The company performs ABC analysis of customers and categorizes them according to financial values.",
  "The company reviews the efficiency of employees in their work.",
  "The company has an adequate reward system in line with established financial goals for all employees.",
  "The environment in which employees work has all the necessary climatic and physical conditions (ventilation, optimal temperature, enough light...) that enable full employee productivity.",
  "The company has clearly defined sectoral goals at a specific (monthly, quarterly, semi-annual, or annual) level.",
  "All the information I need to work is transparent and easily accessible.",
  "The company reviews and evaluates its suppliers.",
  "The management measures employee satisfaction at work on an annual basis.",
  "The company performs market analysis before introducing new products/services.",
  "My company conducts analyses of 'how our company is perceived by customers'.",
  "The company makes responsible and planned investments in business ventures.",
  "Information that is of high importance to the company is shared discreetly and responsibly.",
  "In the company where I work, financial risks are rationally predicted and planned.",
  "The management regularly tracks and measures the individual goals achieved by employees.",
  "The company has a developed annual work plan.",
  "The information transfer system from management to employees is hierarchical and respected.",
  "My company publishes financial statements showing the company's liquidity.",
];

export const questions = questionsStrings.map((question, index) => {
  const newQuestion: Question = {
    question: question,
    questionNumber: index + 1,
    questId: index + 1,
    options: [...optionsArr],
    correctAnswer: 5,
  };

  return newQuestion;
});

export const finanseHealthOfTheCompany = [1, 7, 15, 17, 26, 28, 34, 36, 38, 40];
export const businessProcess = [2, 5, 8, 14, 16, 23, 27, 29, 35, 39];
export const efficensy = [4, 6, 10, 12, 18, 20, 22, 25, 31, 37];
export const customerSatisfaction = [3, 9, 11, 13, 19, 21, 24, 30, 32, 33];
