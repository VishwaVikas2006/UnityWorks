import React from "react";

export default function Home() {
  return (
    <section className="home-container">
      <h1>Welcome to HelpingHands</h1>
      <p>
        Our mission is to empower communities through active volunteer work and meaningful impact.
      </p>
      <button
        onClick={() => {
          window.location.href = "/volunteer";
        }}
        className="hero-button"
      >
        Volunteer Now
      </button>
      <div className="impact-stats">
        <div><strong>500+</strong> Volunteers</div>
        <div><strong>120</strong> Projects Completed</div>
        <div><strong>10</strong> Communities Helped</div>
      </div>
    </section>
  );
}
