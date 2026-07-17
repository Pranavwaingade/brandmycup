import React from "react";
import "../Style/WhyChooseme.css";

const features = [
  {
    icon: "🖨️",
    title: "High Quality Printing",
    text: "Sharp and vibrant printing for every paper cup."
  },
  {
    icon: "🌱",
    title: "Eco Friendly",
    text: "Made using sustainable and recyclable materials."
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    text: "Quick production and on-time delivery."
  },
  {
    icon: "💰",
    title: "Bulk Discounts",
    text: "Special pricing for large quantity orders."
  },
  {
    icon: "🎨",
    title: "Easy Customization",
    text: "Customize logo, colors, size and paper quality."
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    text: "Safe online payments with trusted gateways."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <h1 style={{color:'#8d4a23'}}>Why Choose BrandMyCup?</h1>

      <p>
        Everything you need to create premium branded paper cups for your
        business.
      </p>

      <div className="why-grid">

        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h2>{item.title}</h2>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;