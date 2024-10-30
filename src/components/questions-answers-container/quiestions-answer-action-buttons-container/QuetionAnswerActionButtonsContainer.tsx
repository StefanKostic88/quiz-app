import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useQuestion } from "../../../context/questions-context/QuestionsContext";

// className={`btn ${next <= 0 ? "btn-disable" : null}`}
// onClick={next <= 0 ? null : onPrevClick}

const QuetionAnswerActionButtonsContainer = () => {
  const {
    currentQuestion: { questionNumber, options },
    setNextPage,
    setPrevPage,
  } = useQuestion();

  const isFirstPage = questionNumber === 1;
  const optionsNotSelected = options.every(
    (option) => option.isActive === false
  );
  const lastPage = questionNumber === 2;

  const onNextPageHandler = () => {
    setNextPage();
  };

  const onPrevPageHandler = () => {
    setPrevPage();
  };

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
      <button
        disabled={optionsNotSelected || lastPage}
        className={`btn btn-primary ${
          (optionsNotSelected && "btn-disable") || (lastPage && "btn-disable")
        }`}
        onClick={onNextPageHandler}
      >
        Next
        <MdOutlineKeyboardDoubleArrowRight size={20} />
      </button>
    </div>
  );
};

export default QuetionAnswerActionButtonsContainer;
