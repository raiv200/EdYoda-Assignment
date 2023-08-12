import React, { useState } from "react";
import ProgessBar from "./ProgressBar";
import InputContainers from "./InputContainers";

const SubscriptionForm = () => {
  const [selectedSubscription, setSelectedSubscription] = useState("");
  const subscriptionPrices = {
    "12_months": 120,
    "6_months": 70,
    "3_months": 40,
  };

  const handleSubscriptionClick = (subscription) => {
    setSelectedSubscription(subscription);
  };

  const calculateTotalFee = () => {
    return subscriptionPrices[selectedSubscription] || 0;
  };

  return (
    <div className="subscription-container">
      <ProgessBar />
      <h2 className="sub-text">Select your subcription plan</h2>
      <InputContainers />
      
    </div>
  );
};

export default SubscriptionForm;
