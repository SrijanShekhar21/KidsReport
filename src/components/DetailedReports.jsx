import React from "react";

const DetailedReports = () => {
  return (
    <div className="detailed-reports">
      <h2>Detailed Reports</h2>
      <p>
        Hours Spent: <span>9 hours</span>
      </p>
      <p>
        Progress: <span>75%</span>
      </p>
      <p>
        Overall Proficiency: <span>Intermediate</span>
      </p>
      <p>Scores:</p>
      <ul>
        <li>
          Level 1: <span>80%</span>
        </li>
        <li>
          Level 2: <span>70%</span>
        </li>
        <li>
          Level 3: <span>75%</span>
        </li>
      </ul>
      <p>Progress Over Time:</p>
      <div className="line-graph">[Line Graph]</div>
      <p>
        Strengths: <span>Speaking, Listening</span>
      </p>
      <p>
        Weaknesses: <span>Writing</span>
      </p>
      <p>
        Improvements: <span>Reading</span>
      </p>
    </div>
  );
};

export default DetailedReports;
