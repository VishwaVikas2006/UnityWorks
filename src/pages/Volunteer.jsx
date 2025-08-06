import React, { useState } from "react";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: [],
    availability: [],
    message: ""
  });

  const [errors, setErrors] = useState({}); // to track form errors

  const interestsOptions = [
    "Education",
    "Environment",
    "Healthcare",
    "Community Development",
    "Animal Welfare",
  ];

  const availabilityOptions = ["Weekdays", "Weekends"];

  // Validation helper functions
  const validateEmail = (email) => {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    // Allow empty or only digits
    return phone === "" || /^\d+$/.test(phone);
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!validatePhone(formData.phone)) {
      tempErrors.phone = "Phone number must contain digits only.";
    }

    setErrors(tempErrors);

    // If tempErrors is empty, form is valid
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Special handling to prevent invalid phone input on the fly (block non-digit)
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // Reject non-digit characters immediately
    }

    if (type === "checkbox" && (name === "interests" || name === "availability")) {
      let updatedList = [...formData[name]];
      if (checked) {
        updatedList.push(value);
      } else {
        updatedList = updatedList.filter((item) => item !== value);
      }
      setFormData({ ...formData, [name]: updatedList });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error for this field on change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Volunteer form submission:", formData);
      alert("Thank you for joining UnityWorks as a volunteer! Your submission was successful.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interests: [],
        availability: [],
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="volunteer-container">
      <h2>Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit} className="volunteer-form" noValidate>
        <label htmlFor="fullName">
          Full Name <span aria-hidden="true" style={{color:"red"}}>*</span>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            aria-required="true"
            aria-describedby="fullNameError"
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && (
            <span id="fullNameError" role="alert" className="error-text">
              {errors.fullName}
            </span>
          )}
        </label>

        <label htmlFor="email">
          Email Address <span aria-hidden="true" style={{color:"red"}}>*</span>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            aria-required="true"
            aria-describedby="emailError"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && (
            <span id="emailError" role="alert" className="error-text">
              {errors.email}
            </span>
          )}
        </label>

        <label htmlFor="phone">
          Phone Number
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Digits only, optional"
            aria-describedby="phoneError"
            maxLength={15}
            className={errors.phone ? "input-error" : ""}
            inputMode="numeric"
            pattern="\d*"
          />
          {errors.phone && (
            <span id="phoneError" role="alert" className="error-text">
              {errors.phone}
            </span>
          )}
        </label>

        <fieldset>
          <legend>Areas of Interest:</legend>
          {interestsOptions.map((interest) => (
            <label key={interest} className="checkbox-label">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleChange}
              />
              {interest}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Availability:</legend>
          {availabilityOptions.map((slot) => (
            <label key={slot} className="checkbox-label">
              <input
                type="checkbox"
                name="availability"
                value={slot}
                checked={formData.availability.includes(slot)}
                onChange={handleChange}
              />
              {slot}
            </label>
          ))}
        </fieldset>

        <label htmlFor="message">
          Why do you want to volunteer?
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your motivation..."
          />
        </label>

        <button type="submit" className="submit-button" aria-label="Submit Volunteer Form">
          Submit
        </button>
      </form>
    </section>
  );
}
