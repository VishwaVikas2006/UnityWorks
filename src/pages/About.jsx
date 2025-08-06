import React from "react";

// Import images from the assets folder
import vishwaImg from "../assets/Vishwa.jpg";
import iconImg from "../assets/ICON.jpg";
import godImg from "../assets/god.jpg";

export default function About() {
  const team = [
    { name: "GOD", role: "Founder & CEO", img: godImg },
    { name: "VishwaVikas", role: "Volunteer Coordinator", img: vishwaImg },
    { name: "People", role: "Interns", img: iconImg },
    
  ];

  return (
    <section className="about-container">
      <h2>About UnityWorks</h2>
      <p>
        UnityWorks is dedicated to empowering communities by mobilizing volunteers and running impactful, sustainable projects across multiple causes.
      </p>

      <h3>Our Core Values</h3>
      <ul className="values-list">
        <li>Compassion & Empathy</li>
        <li>Transparency & Integrity</li>
        <li>Community Empowerment</li>
        <li>Sustainability & Growth</li>
        <li>Collaboration & Innovation</li>
      </ul>

      <h3>Meet Our Team</h3>
      <div className="team-grid">
        {team.map(({ name, role, img }) => (
          <div key={name} className="team-member">
            <img
              src={img}
              alt={`Photo of ${name}`}
              className="team-photo"
            />
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
