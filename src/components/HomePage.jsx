import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (kid) => {
    navigate(`/dashboard/${kid}`);
  };

  return (
    <div className="home-page">
      <div className="card" onClick={() => handleCardClick("kid1")}>
        Kid 1
      </div>
      <div className="card" onClick={() => handleCardClick("kid2")}>
        Kid 2
      </div>
      <div className="card" onClick={() => handleCardClick("kid3")}>
        Kid 3
      </div>
    </div>
  );
};

export default HomePage;
