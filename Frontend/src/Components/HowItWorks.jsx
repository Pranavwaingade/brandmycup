import React from "react";
import "../Style/HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: "1️⃣",
    title: "Choose Your Cup",
    description:
      "Select the size, shape, and paper quality that best fits your business needs."
  },
  {
    id: 2,
    icon: "2️⃣",
    title: "Upload Your Design",
    description:
      "Upload your logo, brand name, or custom artwork to personalize your cups."
  },
  {
    id: 3,
    icon: "3️⃣",
    title: "Preview & Customize",
    description:
      "Review your design with a live preview and make adjustments before ordering."
  },
  {
    id: 4,
    icon: "4️⃣",
    title: "Place Your Order",
    description:
      "Complete your order securely and get your custom-branded cups delivered to your doorstep."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">

      <div className="section-title">
        <h1>How CupsCraft Works</h1>
        <p>
          Follow these simple steps to design and order your custom paper cups.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-icon">{step.icon}</div>

            <h2>{step.title}</h2>

            <p>{step.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;