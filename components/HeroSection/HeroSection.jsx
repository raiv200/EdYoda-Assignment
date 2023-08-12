import React from "react";
import SubscriptionForm from "../Form/SubscriptionForm";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="frame">
          <div>Access curated courses worth </div>
          <div>
            ₹ <span className="number-line">18500</span>
            at just
            <span className="number-discount">₹99</span>
            per year!
          </div>
        </div>

        <div className="pointer">
          <img src="./Icon_book.png" alt="Book Icon" />
          <div className="pointer-text">
            <span>100+</span>
            Job relevant courses
          </div>
        </div>

        <div className="pointer">
          <img src="./Icon_clock.png" alt="Clock Icon" />
          <div className="pointer-text">
            <span>20000+</span>
            Hours of content
          </div>
        </div>

        <div className="pointer">
          <img src="./Icon_live.png" alt="Live TV Icon" />
          <div className="pointer-text">
            <span>Exclusive</span>
            Webinar access
          </div>
        </div>

        <div className="pointer">
          <img src="./Icon_scholar.png" alt="Scholar Icon" />
          <div className="pointer-text">
            Scholarship worth
            <span>₹94500</span>
          </div>
        </div>

        <div className="pointer">
          <img src="./Icon_ads.png" alt="ADs Icon" />
          <div className="pointer-text">
            <span>Add Free</span>
            learning experience
          </div>
        </div>
      </div>

      <div className="hero-right">
        <SubscriptionForm />
      </div>
    </section>
  );
};

export default HeroSection;
