import "./App.css";
import {
  QuestionsContainer,
  QuestionAnswerContainer,
  Result,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="quizContainer">
        <QuestionsContainer />
        <QuestionAnswerContainer />
      </div>
      <Result />
    </div>
  );
}

export default App;
