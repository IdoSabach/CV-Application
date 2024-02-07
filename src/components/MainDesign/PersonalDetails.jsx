import "./PersonalDetails.css";
import { useState } from "react";

export default function PersonalDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    if(isOpen){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }
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
            <input type="text" placeholder="First and last name" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="Enter email" />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input type="text" placeholder="City, Country" />
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
