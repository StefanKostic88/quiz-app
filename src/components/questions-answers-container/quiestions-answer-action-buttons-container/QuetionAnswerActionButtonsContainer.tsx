import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useQuestion } from "../../../context/questions-context/QuestionsContext";

const QuetionAnswerActionButtonsContainer = () => {
  const {
    currentQuestion: { questionNumber, options },
    setNextPage,
    setPrevPage,
    questionsCount,
    getResults,
  } = useQuestion();

  const isFirstPage = questionNumber === 1;
  const optionsNotSelected = options.every(
    (option) => option.isActive === false
  );
  const lastPage = questionNumber === questionsCount;

  const onNextPageHandler = () => {
    setNextPage();
  };

  const onPrevPageHandler = () => {
    setPrevPage();
  };

  const onGetResultsHandler = () => {
    getResults();
  };

  const nextButtonComponent = (
    <button
      disabled={optionsNotSelected}
      className={`btn btn-primary ${
        (optionsNotSelected && "btn-disable") || (lastPage && "btn-disable")
      }`}
      onClick={onNextPageHandler}
    >
      Next
      <MdOutlineKeyboardDoubleArrowRight size={20} />
    </button>
  );

  const resultButtonComponent = (
    <button
      className={`btn btn-primary ${optionsNotSelected && "btn-disable"}`}
      onClick={onGetResultsHandler}
    >
      Results
    </button>
  );

  return (
    <div className="actionButtons">
      <button
        disabled={isFirstPage}
        className={`btn btn-primary ${isFirstPage && "btn-disable"}`}
        onClick={onPrevPageHandler}
      >
        <MdOutlineKeyboardDoubleArrowLeft size={20} />
        previous
      </button>
      {lastPage ? resultButtonComponent : nextButtonComponent}
    </div>
  );
};

export default QuetionAnswerActionButtonsContainer;
