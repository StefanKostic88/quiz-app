import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { useQuestion } from "../../../context/questions-context/QuestionsContext";

const QuestionsLIst = () => {
  const {
    currentQuestion: { options },
    selectQuestionAnswer,
  } = useQuestion();

  return (
    <ul className="options">
      {options.map((option) => (
        <li
          className={`option ${option.isActive ? "activeOption" : ""}`}
          onClick={() => {
            selectQuestionAnswer(option.questId);
          }}
          key={option.questId}
        >
          <div className="radioCheckIcon ">
            {option.isActive ? (
              <ImRadioChecked2 size={15} />
            ) : (
              <ImRadioUnchecked size={15} />
            )}
          </div>
          {option.answer}
        </li>
      ))}
    </ul>
  );
};

export default QuestionsLIst;
