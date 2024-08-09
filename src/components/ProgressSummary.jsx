import React from "react";

const ProgressSummary = () => {
  return (
    <div className="progress-summary">
      <h2>Progress Summary</h2>

      <div className="lessonName">
        <p>
          Lesson: <span>Learning ABCs</span>
        </p>
      </div>

      <div className="timeSpent">
        <p>Time Spent:</p>
        <ul>
          <li>
            Speaking: <span>2 hours</span>
          </li>
          <li>
            Listening: <span>3 hours</span>
          </li>
          <li>
            Reading: <span>1.5 hours</span>
          </li>
          <li>
            Writing: <span>2.5 hours</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressSummary;
