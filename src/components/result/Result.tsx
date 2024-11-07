import "./Result.css";
import { MdClose } from "react-icons/md";

const Result = () => {
  return (
    <div className="resultContainer">
      <div className="resultPopup">
        <div className="closeBtn">
          <MdClose size={20} />
        </div>
        <h2>Your Score is 😀</h2>

        <h5>60/60</h5>
      </div>
    </div>
  );
};

export default Result;
