import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { GoArrowRight } from "react-icons/go";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/space");
  };

  return (
    <div className="container">
      <Header />
      <div className="image-text-container">
        <div>
          <h1 className="title">
            YOUR MENTAL
            <br /> HEALTH MATTERS
          </h1>
          <p className="description">
            Explore a compassionate space where
            <br /> you can connect, share, and grow with
            <br /> others on their mental health journey.
          </p>
          <div className="button-container">
            <button className="speak-button" onClick={handleBackClick}>
              SPEAK IT OUT
              <GoArrowRight className="icon-class" />
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.onelifehealth.care/assets/home-flower.png"
            alt="main"
            className="main-image"
          />
        </div>
      </div>
      <div className="image-text-container2">
        <div>
          <img
            src="https://cdn.onelifehealth.care/assets/its-ok-to-not-be-ok.png"
            alt="main"
            className="main-image"
          />
        </div>
        <div>
          <h1 className="title2">IT'S OKAY TO NOT BE OKAY</h1>
          <p id="text">
            In the fast-paced hustle of life, it's easy to feel
            <br /> overwhelmed by the weight of our problems. But fret
            <br /> not, for here, within the safe confines of our anonymous
            <br /> haven, you can unburden your heart and soul without
            <br /> fear or judgment.
          </p>
          <p className="description2"></p>
        </div>
      </div>
      <div className="App">
        <div className="section anonymity">
          <h2>ANONYMITY, SECURITY AND SAFETY</h2>
          <p>
            Your identity remains safeguarded as you open up about your deepest
            struggles.
          </p>
        </div>
        <div className="section professionals">
          <h2>SEASONED PROFESSIONALS AT YOUR FINGERTIPS</h2>
          <p>
            Engage in insightful conversations with experienced psychologists
            and empathetic individuals who genuinely care.
          </p>
        </div>
        <div className="section support">
          <h2>AROUND-THE-CLOCK SUPPORT</h2>
          <p>
            Day or night, you're never alone. Our dedicated team ensures that
            someone is always available to lend a compassionate ear.
          </p>
        </div>
        <div className="section express">
          <h2>LIBERATION TO EXPRESS</h2>
          <p>
            Feel free to articulate your challenges without reservation, knowing
            that here, your voice matters.
          </p>
        </div>
        <div className="section empower">
          <h2>EMPOWER THROUGH SUPPORT</h2>
          <p>
            Beyond seeking solace, you also have the opportunity to extend a
            helping hand to others traversing similar paths.
          </p>
        </div>
      </div>
      <div className="who-we-are-container">
        <h3 className="title title3">WHO WE ARE ? WHAT WE DO ? WHY WE DO ?</h3>
      </div>
      <div>
        <main className="main-content">
          <div className="card">
            <p>
              We harness the power of technology not just to connect, but to
              heal—to ensure that every interaction nurtures both mind and soul.
              We believe in the transformative magic of sharing, knowing that in
              each narrative lies the potential for healing and growth.
            </p>
          </div>
          <div className="card">
            <p>
              In a world where mental well-being is often overlooked, especially
              in India where millions grapple with silent battles, we stand firm
              in our commitment to fostering positive change. Through our app
              and website, we've cultivated a diverse tapestry of voices,
              including survivors, therapists, psychologists, and everyday
              heroes. Here, conversations span a myriad of topics—from financial
              woes to familial dynamics—bolstered by the unifying thread of
              empathy and understanding.
            </p>
          </div>
          <div className="card">
            <p>
              We're more than just a platform; we're a beacon of hope in the
              digital realm, providing solace to those navigating life's storms.
              Our mission is simple yet profound: to create a nurturing
              environment where individuals can share their struggles openly
              while receiving invaluable insights and support from a caring
              community.
            </p>
          </div>
        </main>
      </div>
      <main className="quote-section">
        <div className="quote-card">
          <div className="author-text-container">
            <h1 className="quote-title">
              “RECOVERY IS NOT ONE AND DONE. IT'S A LIFELONG JOURNEY THAT TAKES
              PLACE ONE DAY, ONE STEP AT A TIME.”
            </h1>
            <p className="author">- Steve Jobs, Mental Health & Adaptations.</p>
          </div>
          <div className="author-image-container">
            <img
              src="https://cdn.onelifehealth.care/assets/banner-image.png"
              alt="quote"
              className="quote-image"
            />
          </div>
        </div>
        <div className="mission-statement">
          <p>
            Join us on this journey of resilience and renewal, as together, we
            weave a tapestry of support and
            <br /> compassion. At One Life Healthcare, your well-being is not
            just our priority; it's our collective mission.
          </p>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#refund">Refund Policy</a>
          <a href="#shipping">Shipping Policy</a>
          <a href="#contact">Contact us</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#support">Support</a>
        </div>
        <div className="footer-address">
          <p>
            Address: 11th floor, Brigade Signature Towers, Kattamnallur,
            Bangalore 560049
          </p>
          <p>© Fly Fare Technologies LLP 2024. All rights reserved.</p>
        </div>
      </footer>
      <div className="chat-bot-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLrukrV1xZUuwFdA97kt1T9B-3DN8ebL5lg&s"
          alt="bot"
          className="chat-bot"
        />
      </div>
    </div>
  );
};
export default Home;
