export interface Question {
  question: string;
  questId: number;
  questionNumber: number;
  correctAnswer: number;
  options: { answer: string; optionId: number; isActive: boolean }[];
}

export interface Grade {
  quetionId: number;
  grade: number;
}
