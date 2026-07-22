import React, { useState } from "react";
import "../Style/Contact.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    const handleSubmit = (event) => {

        event.preventDefault();

        alert("Thank you for contacting BrandMyCup!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });

    };


    return (
        <>
            <Navbar />

            <main className="contact-page">

                {/* ===========================
                    Contact Hero
                =========================== */}

                <section className="contact-hero">

                    <h1>
                        Contact Us
                    </h1>

                    <p>
                        Have a question? We would love to hear from you.
                    </p>

                </section>


                {/* ===========================
                    Contact Content
                =========================== */}

                <section className="contact-container">


                    {/* Contact Information */}

                    <div className="contact-info">

                        <span className="section-tag">
                            Get In Touch
                        </span>

                        <h2>
                            Let's Talk About Your Brand
                        </h2>

                        <p className="contact-description">
                            Whether you have a question about our products,
                            customization, orders or anything else, our team
                            is ready to help you.
                        </p>


                        <div className="contact-info-list">


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    📧
                                </div>

                                <div>
                                    <h3>
                                        Email Us
                                    </h3>

                                    <p>
                                        support@brandmycup.com
                                    </p>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    📞
                                </div>

                                <div>
                                    <h3>
                                        Call Us
                                    </h3>

                                    <p>
                                        +91 9876543210
                                    </p>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    📍
                                </div>

                                <div>
                                    <h3>
                                        Visit Us
                                    </h3>

                                    <p>
                                        Pune, Maharashtra, India
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Social Media */}

                        <div className="social-section">

                            <h3>
                                Follow Us
                            </h3>

                            <div className="social-links">

                                <a href="#" aria-label="Instagram">
                                    📷
                                </a>

                                <a href="#" aria-label="Facebook">
                                    f
                                </a>

                                <a href="#" aria-label="Twitter">
                                    𝕏
                                </a>

                                <a href="#" aria-label="LinkedIn">
                                    in
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}

                    <div className="contact-form-card">

                        <h2>
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label>
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />

                                </div>

                            </div>


                            <div className="form-row">

                                <div className="form-group">

                                    <label>
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />

                                </div>


                                <div className="form-group">

                                    <label>
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this about?"
                                        required
                                    />

                                </div>

                            </div>


                            <div className="form-group">

                                <label>
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="6"
                                    required
                                />

                            </div>


                            <button
                                type="submit"
                                className="send-message-btn"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </section>


                {/* ===========================
                    FAQ CTA
                =========================== */}

                <section className="contact-cta">

                    <h2>
                        Need Help With Your Order?
                    </h2>

                    <p>
                        Check your order status or explore our products.
                    </p>

                </section>

            </main>

            <Footer />

        </>
    );
};

export default Contact;