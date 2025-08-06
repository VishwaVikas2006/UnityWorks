import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Home() {
  const navigate = useNavigate(); // Access React Router's navigation hook

  return (
    <section className="home-container">
      <h1>Welcome to UnityWorks</h1>
      <p>
        Our mission is to empower communities through active volunteer work and meaningful impact.
      </p>
      <button
        onClick={() => navigate("/volunteer")} // Use React Router to navigate
        className="hero-button"
      >
        Volunteer Now
      </button>
      <div className="impact-stats">
        <div><strong>800+</strong> Volunteers</div>
        <div><strong>150+</strong> Projects Completed</div>
        <div><strong>15</strong> Communities Helped</div>
      </div>
    </section>
  );
}
