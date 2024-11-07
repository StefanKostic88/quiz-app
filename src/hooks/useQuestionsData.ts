import { useEffect, useState } from "react";
import { Question } from "../models/questions";
import { questions } from "../constants/questions";

const updateQuestionHelper = (answerId: number, question: Question) => {
  return question.options.map((option) =>
    option.optionId === answerId
      ? { ...option, isActive: true }
      : { ...option, isActive: false }
  );
};

const updateAllQuestionsHelper = (
  previousAllQuestions: Question[],
  currentQuestionState: Question
) => {
  return previousAllQuestions.map((question) =>
    question.questId === currentQuestionState.questId
      ? currentQuestionState
      : question
  );
};

const useQuestionsData = () => {
  const [allQuestion, setAllQuestion] = useState<Question[]>(questions);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[questionCount]
  );

  useEffect(() => {
    setCurrentQuestion(() => allQuestion[questionCount]);
  }, [questionCount, allQuestion]);

  return {
    allQuestion,
    questionCount,
    setAllQuestion,
    setQuestionCount,
    currentQuestion,
    setCurrentQuestion,
    updateQuestionHelper,
    updateAllQuestionsHelper,
  };
};

export default useQuestionsData;
