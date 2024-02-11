import React, { useState, useEffect } from "react";
import "./PersonalDetails.css";

export default function PersonalDetails({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onAddressChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    address: localStorage.getItem("address") || "",
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(formData.name);
    onEmailChange(formData.email);
    onPhoneChange(formData.phone);
    onAddressChange(formData.address);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("address");
  };

  useEffect(() => {
    setFormData({
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
      phone: localStorage.getItem("phone") || "",
      address: localStorage.getItem("address") || "",
    });
  }, []);

  return (
    <div id="personalDetails">
      <div className="topSlide">
        <p>Personal Details</p>
        <button onClick={handleOpen}>
          <span className="material-symbols-outlined">menu_open</span>
        </button>
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="First and last name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              placeholder="City, Country"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="box-btn">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button onClick={handleClear} type="submit" className="clear-btn">
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
