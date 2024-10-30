import React, { createContext, useContext, useEffect, useState } from "react";
import { questions } from "../../constants/questions";
import { Question } from "../../models/questions";

interface QuestionContextInterface {
  currentQuestion: Question;
  selectQuestionAnswer: (answerId: number) => void;
  setNextPage: () => void;
  setPrevPage: () => void;
}

const QuestionContext = createContext<QuestionContextInterface | null>(null);

export const QuestionContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [allQuestion, setAllQuestion] = useState<Question[]>(questions);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[questionCount]
  );

  const selectQuestionAnswer = (answerId: number) => {
    setCurrentQuestion((prevState) => {
      const updatedOptions = prevState.options.map((option) =>
        option.questId === answerId
          ? { ...option, isActive: true }
          : { ...option, isActive: false }
      );
      return { ...prevState, options: [...updatedOptions] };
    });
  };

  const setNextPage = () => {
    setAllQuestion((prevState) => {
      const updatedQuestions = prevState.map((question) => {
        if (question.questId === currentQuestion.questId) {
          return currentQuestion;
        } else {
          return question;
        }
      });
      return updatedQuestions;
    });

    setQuestionCount((prevCount) => prevCount + 1);
  };

  const setPrevPage = () => {
    setQuestionCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    setCurrentQuestion(() => allQuestion[questionCount]);
  }, [questionCount, allQuestion]);

  const contextStat: QuestionContextInterface = {
    currentQuestion,
    selectQuestionAnswer,
    setNextPage,
    setPrevPage,
  };

  return (
    <QuestionContext.Provider value={contextStat}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }

  return context;
};
