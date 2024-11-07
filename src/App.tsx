import "./App.css";
import {
  QuestionsContainer,
  QuestionAnswerContainer,
  Result,
} from "./components";
import { useQuestion } from "./context/questions-context/QuestionsContext";

function App() {
  const { showResults } = useQuestion();

  const showedComponents = showResults ? (
    <Result />
  ) : (
    <div className="quizContainer">
      <QuestionsContainer />
      <QuestionAnswerContainer />
    </div>
  );

  return <div className="App">{showedComponents}</div>;
}

export default App;
