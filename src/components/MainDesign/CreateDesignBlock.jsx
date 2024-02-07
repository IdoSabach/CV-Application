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
  inputThree
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [addLine, setAddLine] = useState(false);

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
    setAddLine(false);
  };

  const formEducation = (
    <div className="formEducation">
      <form action="">
        <div>
          <label htmlFor="">{labelOne}</label>
          <input type="text" placeholder={inputOne} />
        </div>
        <div>
          <label htmlFor="">{labelTwo}</label>
          <input type="text" placeholder={inputTow} />
        </div>
        <div className="dateInput">
          <div>
            <label htmlFor="">Start Date</label>
            <input type="date" placeholder="Enter Start Date" />
          </div>
          <div>
            <label htmlFor="">End Date</label>
            <input type="date" placeholder="Enter End Date" />
          </div>
        </div>
        <div>
          <label htmlFor="">{labelThree}</label>
          <input type="text" placeholder={inputThree} />
        </div>
      </form>

      <div className="lineButtons">
        <div>
          <button className="delete" onClick={handleCloseForm}>
            Delete
          </button>
        </div>
        <div className="miniLineButtons">
          <button className="cancel" onClick={handleCloseForm}>
            Cancel
          </button>
          <button className="save">Save</button>
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
