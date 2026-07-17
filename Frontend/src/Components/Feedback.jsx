import React from "react";
import "../Style/Feedback.css";

const Feedback = () => {
  const feedbackList = [
    {
      id: 1,
      customer: "Alice",
      rating: 5,
      comment: "Amazing service! Highly recommend."
    },
    {
      id: 2,
      customer: "Bob",
      rating: 4,
      comment: "Very good, but shipping took an extra day."
    },
    {
      id: 3,
      customer: "Charlie",
      rating: 5,
      comment: "The product exceeded my expectations."
    },
    {
      id: 4,
      customer: "David",
      rating: 5,
      comment: "Excellent quality paper cups."
    },
    {
      id: 5,
      customer: "Emma",
      rating: 5,
      comment: "Customization process was very easy."
    },
    {
      id: 6,
      customer: "Sophia",
      rating: 4,
      comment: "Good quality and fast delivery."
    }
  ];

  return (
    <section className="whychoose">
      <div className="feedback-container">

        <div className="feedback-heading">
          <h2>
            What Client Say <span>About Us?</span>
          </h2>
        </div>

        <div className="customer-feed">
          {feedbackList.map((item) => (
            <div key={item.id} className="feedback-card">
              <div className="inbox">
                <div className="avatar">
                  {item.customer.charAt(0)}
                </div>
                <h3>{item.customer}</h3>

                <p className="rating">
                  {"⭐".repeat(item.rating)}
                </p>

                <p className="comment">
                  "{item.comment}"
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feedback;