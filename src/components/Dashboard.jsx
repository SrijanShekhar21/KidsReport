import React, { useState } from "react";
import ProgressSummary from "./ProgressSummary";
import DetailedReports from "./DetailedReports";

const Dashboard = () => {
  const [progress, setProgress] = useState(true);
  const [report, setReport] = useState(false);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div
          onClick={() => setProgress(true) & setReport(false)}
          className="sidebarTabs"
        >
          Progress Summary
        </div>
        <div
          onClick={() => setProgress(false) & setReport(true)}
          className="sidebarTabs"
        >
          Detailed Reports
        </div>
      </div>
      <div className="content">
        {progress && <ProgressSummary />}
        {report && <DetailedReports />}
      </div>
    </div>
  );
};

export default Dashboard;
