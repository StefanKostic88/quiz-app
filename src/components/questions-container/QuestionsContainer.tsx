import { useQuestion } from "../../context/questions-context/QuestionsContext";

const QuestionsContainer = () => {
  const { currentQuestion } = useQuestion();
  return (
    <div className="leftContainer">
      <div className="leftContainerInner">
        <h1>Pitanje:</h1>
        <h3>{currentQuestion.question}</h3>
      </div>
      <div className="qNumber">{currentQuestion.questionNumber}</div>
    </div>
  );
};

export default QuestionsContainer;
