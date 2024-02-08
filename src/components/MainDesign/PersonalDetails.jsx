import "./PersonalDetails.css";
import React, { useState } from "react";

export default function PersonalDetails({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onAddressChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    onPhoneChange(newPhone);
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    onAddressChange(newAddress);
  };

  return (
    <div id="personalDetails">
      <div className="topSlide">
        <p>Personal Details</p>
        <button onClick={handleOpen}>
          <span className="material-symbols-outlined">menu_open</span>
        </button>
      </div>
      {isOpen ? (
        <form action="">
          <div>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="First and last name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="City, Country"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
