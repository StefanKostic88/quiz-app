import { useEffect, useState } from "react";
import { Grade, Question } from "../models/questions";

import { ResultDataService } from "../services/resultData.service";

const generateGradeArray = (allQuestion: Question[]) => {
  return allQuestion.map((question) => {
    const grade: Grade = {
      quetionId: question.questId,
      grade: question.options.find((option) => option.isActive)
        ?.optionId as number,
    };
    return grade;
  });
};

const useResultsData = () => {
  const [resultsArray, setResultsArray] = useState<Grade[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (resultsArray.length === 0) return;
    setShowResults(() => true);
  }, [resultsArray, setShowResults]);

  useEffect(() => {
    if (!showResults) return;

    const resultDataService = new ResultDataService(resultsArray);
    const finalData = resultDataService.filterAll().companyGraphPerecnts;
  }, [showResults]);

  return {
    resultsArray,
    setResultsArray,
    showResults,
    setShowResults,
    generateGradeArray,
  };
};

export default useResultsData;
