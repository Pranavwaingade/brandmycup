import React from "react";
import "../Style/About.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    return (
        <>
            <Navbar />

            <main className="about-page">

                {/* ===========================
                    About Header
                =========================== */}

                <section className="about-hero">

                    <h1>
                        About BrandMyCup
                    </h1>

                    <p>
                        We help businesses turn everyday paper cups
                        into powerful brand experiences.
                    </p>

                </section>


                {/* ===========================
                    Our Story
                =========================== */}

                <section className="about-story">

                    <div className="story-content">

                        <span className="section-tag">
                            Our Story
                        </span>

                        <h2>
                            Your Brand.
                            <br />
                            Your Cup.
                            <br />
                            Your Identity.
                        </h2>

                        <p>
                            BrandMyCup is a custom paper cup branding
                            platform created to help businesses design
                            and order personalized paper cups easily.
                        </p>

                        <p>
                            From cafes and restaurants to events and
                            small businesses, we help brands make every
                            sip memorable with beautifully customized
                            paper cups.
                        </p>

                    </div>


                    <div className="story-highlight">

                        <div className="highlight-icon">
                            ☕
                        </div>

                        <h3>
                            Every Cup Tells a Story
                        </h3>

                        <p>
                            Your customers hold your brand in their hands.
                        </p>

                    </div>

                </section>


                {/* ===========================
                    Our Mission
                =========================== */}

                <section className="mission-section">

                    <span className="section-tag">
                        Our Mission
                    </span>

                    <h2>
                        Making Branding Simple
                    </h2>

                    <p>
                        Our mission is to make custom packaging accessible,
                        affordable and simple for every business.
                    </p>

                </section>


                {/* ===========================
                    Why Choose Us
                =========================== */}

                <section className="why-us-section">

                    <div className="section-heading">

                        <span className="section-tag">
                            Why BrandMyCup?
                        </span>

                        <h2>
                            More Than Just a Paper Cup
                        </h2>

                    </div>


                    <div className="about-features">

                        <div className="about-feature-card">

                            <div className="feature-icon">
                                🎨
                            </div>

                            <h3>
                                Custom Design
                            </h3>

                            <p>
                                Create cups that represent your brand,
                                logo and unique identity.
                            </p>

                        </div>


                        <div className="about-feature-card">

                            <div className="feature-icon">
                                ⭐
                            </div>

                            <h3>
                                Premium Quality
                            </h3>

                            <p>
                                We focus on high-quality materials and
                                professional printing.
                            </p>

                        </div>


                        <div className="about-feature-card">

                            <div className="feature-icon">
                                🚀
                            </div>

                            <h3>
                                Easy Ordering
                            </h3>

                            <p>
                                Choose, customize and order your branded
                                cups in a simple way.
                            </p>

                        </div>


                        <div className="about-feature-card">

                            <div className="feature-icon">
                                🌱
                            </div>

                            <h3>
                                Eco-Friendly Approach
                            </h3>

                            <p>
                                We believe in creating branding solutions
                                with sustainability in mind.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ===========================
                    Our Values
                =========================== */}

                <section className="values-section">

                    <span className="section-tag">
                        Our Values
                    </span>

                    <h2>
                        What We Believe In
                    </h2>


                    <div className="values-list">

                        <div className="value-item">
                            <strong>01</strong>
                            <span>Quality in every product</span>
                        </div>

                        <div className="value-item">
                            <strong>02</strong>
                            <span>Creativity in every design</span>
                        </div>

                        <div className="value-item">
                            <strong>03</strong>
                            <span>Simple experiences for every customer</span>
                        </div>

                        <div className="value-item">
                            <strong>04</strong>
                            <span>Growth for every business we serve</span>
                        </div>

                    </div>

                </section>


                {/* ===========================
                    CTA
                =========================== */}

                <section className="about-cta">

                    <h2>
                        Ready to Build Your Brand?
                    </h2>

                    <p>
                        Start creating customized paper cups
                        for your business today.
                    </p>

                    <button onClick={() => navigate("/products")}>
                        Explore Products
                    </button>

                </section>

            </main>

            <Footer />

        </>
    );
};

export default About;