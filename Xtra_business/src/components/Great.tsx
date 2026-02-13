import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Great() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div className="dialog-container">
      <h1 className="dialog-heading">Will you be my Valentine?</h1>
      <div className="answer-buttons">
        <button className="answer-button" onClick={() => navigate("/About")}>
          Yes
        </button>
        {visible && (
          <button className="answer-button" onClick={handleClick}>
            No
          </button>
        )}
      </div>
    </div>
  );
}

export default Great;
