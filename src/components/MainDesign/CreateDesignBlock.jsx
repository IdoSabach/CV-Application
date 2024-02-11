import React, { useState, useEffect } from "react";
import "./CreateDesignBlock.css";

export default function Education({
  id,
  title,
  addBtn,
  labelOne,
  inputOne,
  labelTwo,
  inputTwo,
  labelThree,
  inputThree,
  onSchoolChange,
  onDegreeChange,
  onStartDateChange,
  onEndDateChange,
  onLocationChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [addLine, setAddLine] = useState(false);
  const [formData, setFormData] = useState({
    school: localStorage.getItem(`school_${id}`) || "",
    degree: localStorage.getItem(`degree_${id}`) || "",
    startDate: localStorage.getItem(`startDate_${id}`) || "",
    endDate: localStorage.getItem(`endDate_${id}`) || "",
    location: localStorage.getItem(`location_${id}`) || "",
  });
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    const storedFormDataArray = JSON.parse(
      localStorage.getItem(`formDataArray_${id}`)
    );
    if (storedFormDataArray) {
      setFormDataArray(storedFormDataArray);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem(`${name}_${id}`, value);
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
    if (addLine) {
      setAddLine(false);
    }
  };

  const handleClearForm = () => {
    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    localStorage.removeItem(`school_${id}`);
    localStorage.removeItem(`degree_${id}`);
    localStorage.removeItem(`startDate_${id}`);
    localStorage.removeItem(`endDate_${id}`);
    localStorage.removeItem(`location_${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormDataArray = [...formDataArray, formData];
    setFormDataArray(newFormDataArray);
    onSchoolChange(formData.school);
    onDegreeChange(formData.degree);
    onStartDateChange(formData.startDate);
    onEndDateChange(formData.endDate);
    onLocationChange(formData.location);
    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    localStorage.setItem(
      `formDataArray_${id}`,
      JSON.stringify(newFormDataArray)
    );
  };

  const handleDelete = (index) => {
    const updatedFormDataArray = [...formDataArray];
    updatedFormDataArray.splice(index, 1);
    setFormDataArray(updatedFormDataArray);
    localStorage.setItem(
      `formDataArray_${id}`,
      JSON.stringify(updatedFormDataArray)
    );
  };

  return (
    <div id={`createDesignBlock_${id}`} className="createDesignBlock">
      <div className="topSlide">
        <p>{title}</p>
        <button onClick={handleOpen} className="btnOpen">
          <span className="material-symbols-outlined">menu_open</span>
        </button>
      </div>
      <div className="lineEducation">
        <ul className="listLine">
          {formDataArray.map((data, index) => (
            <li key={index}>
              {data.school}, {data.degree}
              <button onClick={() => handleDelete(index)}>
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios/100/delete-sign--v1.png"
                  alt="delete-sign--v1"
                />
              </button>
            </li>
          ))}
        </ul>
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
      {addLine && (
        <div className="formEducation">
          <form action="">
            <div>
              <label htmlFor="">{labelOne}</label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                placeholder={inputOne}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">{labelTwo}</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                placeholder={inputTwo}
                onChange={handleChange}
              />
            </div>
            <div className="dateInput">
              <div>
                <label htmlFor="">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  placeholder="Enter Start Date"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  placeholder="Enter End Date"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="">{labelThree}</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                placeholder={inputThree}
                onChange={handleChange}
              />
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
              <button className="save" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
