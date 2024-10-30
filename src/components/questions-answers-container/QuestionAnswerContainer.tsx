import QuestionsLIst from "./questions-list/QuestionsLIst";
import QuetionAnswerActionButtonsContainer from "./quiestions-answer-action-buttons-container/QuetionAnswerActionButtonsContainer";

const QuestionAnswerContainer = () => {
  return (
    <div className="rightContainer">
      <div className="rightContainerInner">
        <QuestionsLIst />
      </div>

      <QuetionAnswerActionButtonsContainer />
    </div>
  );
};

export default QuestionAnswerContainer;
