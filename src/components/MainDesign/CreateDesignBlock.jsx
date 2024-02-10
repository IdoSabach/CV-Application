import { useState } from "react";
import "./CreateDesignBlock.css";

export default function Education({
  title,
  addBtn,
  labelOne,
  inputOne,
  labelTwo,
  inputTow,
  labelThree,
  inputThree,
  onSchoolChange,
  onDegreeChange,
  onStartDateChange,
  onEndDateChange,
  onLocationChange
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [addLine, setAddLine] = useState(false);
  const [formData, setFormData] = useState({
    school: localStorage.getItem("school") || "" ,
    degree:localStorage.getItem('degree') || "",
    startDate:localStorage.getItem('startDate') || "",
    endDate:localStorage.getItem('endDate') || "",
    location:localStorage.getItem('location') || "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem(name, value);
  };

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      setAddLine(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleAdd = () => {
    if (!addLine) {
      setAddLine(true);
    }
  };

  const handleCloseForm = () => {
    if(addLine){
      setAddLine(false);
    }
  }

  const handleClearForm = () => {
    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location:"",
    });
    localStorage.removeItem("school");
    localStorage.removeItem("degree");
    localStorage.removeItem("startDate");
    localStorage.removeItem("endDate");
    localStorage.removeItem("location");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchoolChange(formData.school);
    onDegreeChange(formData.degree);
    onStartDateChange(formData.startDate);
    onEndDateChange(formData.endDate);
    onLocationChange(formData.location)
  };

  const formEducation = (
    <div className="formEducation">
      <form action="">
        <div>
          <label htmlFor="">{labelOne}</label>
          <input type="text" id="school" name="school" value={formData.school} placeholder={inputOne} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">{labelTwo}</label>
          <input type="text" id="degree" name="degree" value={formData.degree} placeholder={inputTow} onChange={handleChange}/>
        </div>
        <div className="dateInput">
          <div>
            <label htmlFor="">Start Date</label>
            <input type="date" id="startDate" name="startDate" value={formData.startDate} placeholder="Enter Start Date" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">End Date</label>
            <input type="date" id="endDate" name="endDate" value={formData.endDate} placeholder="Enter End Date" onChange={handleChange}/>
          </div>
        </div>
        <div>
          <label htmlFor="">{labelThree}</label>
          <input type="text" id="location" name="location" value={formData.location} placeholder={inputThree} onChange={handleChange}/>
        </div>
      </form>

      <div className="lineButtons">
        <div>
          <button className="delete" onClick={handleClearForm}>
            Delete
          </button>
        </div>
        <div className="miniLineButtons">
          <button className="cancel" onClick={handleCloseForm}>
            Cancel
          </button>
          <button className="save" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="createDesignBlock">
      <div className="topSlide">
        <p>{title}</p>
        <button onClick={handleOpen} className="btnOpen">
          <span className="material-symbols-outlined">menu_open</span>
        </button>
      </div>
      {isOpen ? (
        <button className="add-education" onClick={handleAdd}>
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/ios-glyphs/30/plus-math.png"
            alt="plus-math"
          />
          {addBtn}
        </button>
      ) : (
        ""
      )}
      {addLine && formEducation}
    </div>
  );
}
