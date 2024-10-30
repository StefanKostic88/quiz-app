export interface Question {
  question: string;
  questId: number;
  questionNumber: number;
  correctAnswer: number;
  options: { answer: string; questId: number; isActive: boolean }[];
}
