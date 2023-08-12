import React from "react";

const Alert = () => {
  return (
    <div className="alert-background">
      <div className="alert">
        <div className="alert-header">
          <p>Limited Time offer</p>
          <span className="alert-text">- ₹18,401</span>
        </div>

        <div className="alert-body">
          <img src="./Icon_timeout.svg" alt="Timeout Icon" />
          <p>Offer valid till 25th March 2023</p>
        </div> 
      </div>
    </div>
  );
};

export default Alert;
