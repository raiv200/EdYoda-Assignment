import React, { useState } from "react";
import Alert from "./Alert";

const InputContainers = () => {
  const [selectedSubscription, setSelectedSubscription] = useState("");
  const subscriptionPrices = {
    "12_months": 179,
    "6_months": 149,
    "3_months": 99,
  };

  const handleSubscriptionClick = (subscription) => {
    setSelectedSubscription(subscription);
  };

  const calculateTotalFee = () => {
    return subscriptionPrices[selectedSubscription] || 0;
  };

  return (
    <div className="input-container">
      {/* Input-1  */}
      <div className="input-1">
        {/* Offer Expired Tag  */}

        <div className="tag-expire">
          <p>Offer Expired</p>
        </div>

        <div className="input-btn-1">
          <button></button>
        </div>
        <div className="input-text-container">
          <p className="input-text-1">12 Month Subscription</p>

          <div className="input-price-box">
            <p className="top-text-1">
              Total
              <span>₹99</span>
            </p>
            <p className="bottom-text-1">
              ₹8
              <span>/mo</span>
            </p>
          </div>
        </div>
      </div>

      {/* Input-2  */}
      <div className={`input-2 ${selectedSubscription === '12_months' ? 'selected' : ''}`}>
        {/* Offer Recommended Tag  */}

        <div className="tag-recommended">
          <p>Recommended</p>
        </div>

        {selectedSubscription === "12_months" ? (
          <img
            className="icon-circle-check"
            src="./Icon_circle_check.svg"
            alt="Timeout Icon"
          />
        ) : (
          <button onClick={() => handleSubscriptionClick('12_months')}
          className="input-btn-2"></button>
        )}

        <div className="input-text-container">
          <p className="input-text-2">12 Month Subscription</p>

          <div className="input-price-box">
            <p className="top-text-2">
              Total
              <span>₹{subscriptionPrices["12_months"]}</span>
            </p>
            <p className="bottom-text-2">
              ₹15
              <span>/mo</span>
            </p>
          </div>
        </div>
      </div>

      {/* Input-3  */}
      <div className={`input-2 ${selectedSubscription === '6_months' ? 'selected' : ''}`}>
        
        
      {selectedSubscription === "6_months" ? (
          <img
            className="icon-circle-check"
            src="./Icon_circle_check.svg"
            alt="Timeout Icon"
          />
        ) : (
          <button onClick={() => handleSubscriptionClick('6_months')}
          className="input-btn-2"></button>
        )}
        
        
        <div className="input-text-container">
          <p className="input-text-2">6 Month Subscription</p>

          <div className="input-price-box">
            <p className="top-text-2">
              Total
              <span>₹{subscriptionPrices["6_months"]}</span>
            </p>
            <p className="bottom-text-2">
              ₹25
              <span>/mo</span>
            </p>
          </div>
        </div>
      </div>

      {/* Input-4  */}
      <div className={`input-2 ${selectedSubscription === '3_months' ? 'selected' : ''}`}>
        
      {selectedSubscription === "3_months" ? (
          <img
            className="icon-circle-check"
            src="./Icon_circle_check.svg"
            alt="Timeout Icon"
          />
        ) : (
          <button onClick={() => handleSubscriptionClick('3_months')}
          className="input-btn-2"></button>
        )}

        <div className="input-text-container">
          <p className="input-text-2">3 Month Subscription</p>

          <div className="input-price-box">
            <p className="top-text-2">
              Total
              <span>₹{subscriptionPrices["3_months"]}</span>
            </p>
            <p className="bottom-text-2">
              ₹33
              <span>/mo</span>
            </p>
          </div>
        </div>
      </div>

      {/* Summary Container  */}

      <div className="summary-container">
        <div className="text-container">
          <p>Subscription Fee</p>
          <span>₹18,500</span>
        </div>

        <Alert />

        <div className="total-price-container">
          <p>
            Total
            <span>(Incl. of 18% GST)</span>
          </p>
          <span>₹{calculateTotalFee()}</span>
        </div>
      </div>

      {/* Button Container  */}

      <div className="button-container">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-success">Proceed to Pay</button>
      </div>

      {/* Icon Conatiner  */}

      <div className="icon-container">
        <img src="./Icon_razorpay.png" alt="Razorpay Icon" />
      </div>
    </div>
  );
};

export default InputContainers;
