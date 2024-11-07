import React, { createContext, useContext, useEffect } from "react";

import { Question } from "../../models/questions";
import useQuestionsData from "../../hooks/useQuestionsData";
import useResultsData from "../../hooks/useResultsData";

interface QuestionContextInterface {
  currentQuestion: Question;
  selectQuestionAnswer: (answerId: number) => void;
  setNextPage: () => void;
  setPrevPage: () => void;
  getResults: () => void;
  questionsCount: number;
  showResults: boolean;
}

const QuestionContext = createContext<QuestionContextInterface | null>(null);

export const QuestionContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const {
    allQuestion,
    setAllQuestion,
    setQuestionCount,
    currentQuestion,
    setCurrentQuestion,
    updateQuestionHelper,
    updateAllQuestionsHelper,
  } = useQuestionsData();

  const { showResults, setResultsArray, generateGradeArray } = useResultsData();

  const selectQuestionAnswer = (answerId: number) => {
    setCurrentQuestion((prevState) => ({
      ...prevState,
      options: [...updateQuestionHelper(answerId, prevState)],
    }));
  };

  const setNextPage = () => {
    setAllQuestion((prevState) =>
      updateAllQuestionsHelper(prevState, currentQuestion)
    );
    setQuestionCount((prevCount) => prevCount + 1);
  };

  const setPrevPage = () => {
    setQuestionCount((prevCount) => prevCount - 1);
  };

  const getResults = () => {
    setAllQuestion((prevState) => {
      const updatedQuestions = updateAllQuestionsHelper(
        prevState,
        currentQuestion
      );
      const newResultsArray = generateGradeArray(updatedQuestions);
      setResultsArray(() => [...newResultsArray]);
      return updatedQuestions;
    });
  };

  const contextStat: QuestionContextInterface = {
    currentQuestion,
    selectQuestionAnswer,
    setNextPage,
    setPrevPage,
    questionsCount: allQuestion.length,
    getResults,
    showResults,
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
