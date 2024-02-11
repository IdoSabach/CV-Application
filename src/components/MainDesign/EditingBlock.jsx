import React from "react";
import "./EditingBlock.css";
import PersonalDetails from "./PersonalDetails";
import CreateDesignBlock from "./CreateDesignBlock";
import Customize from "./Customize";

export default function EditingBlock({
  currMainEdit,
  isName,
  isEmail,
  isPhone,
  isAddress,
  isSchool,
  isDegree,
  isStartDate,
  isEndDate,
  isLocation,
}) {
  const handleChange = (field, value) => {
    switch (field) {
      case "name":
        isName(value);
        break;
      case "email":
        isEmail(value);
        break;
      case "phone":
        isPhone(value);
        break;
      case "address":
        isAddress(value);
        break;
      case "school":
        isSchool(value);
      case "degree":
        isDegree(value);
      case "startDate":
        isStartDate(value);
      case "endDate":
        isEndDate(value);
      case "location":
        isLocation(value);
      default:
        break;
    }
  };

  const content = (
    <div>
      <PersonalDetails
        onNameChange={(newName) => handleChange("name", newName)}
        onEmailChange={(newEmail) => handleChange("email", newEmail)}
        onPhoneChange={(newPhone) => handleChange("phone", newPhone)}
        onAddressChange={(newAddress) => handleChange("address", newAddress)}
      />
      <CreateDesignBlock
        id={1}
        title="Education"
        addBtn="Education"
        labelOne="School"
        inputOne="Enter School / University"
        labelTwo="Degree"
        inputTwo="Enter Degree / Field Of Study"
        labelThree="Location"
        inputThree="Enter Location"
        onSchoolChange={(newSchool) => handleChange("school", newSchool)}
        onDegreeChange={(newDegree) => handleChange("degree", newDegree)}
        onStartDateChange={(newStartDate) =>
          handleChange("startDate", newStartDate)
        }
        onEndDateChange={(newEndDate) => handleChange("endDate", newEndDate)}
        onLocationChange={(newLocation) =>
          handleChange("location", newLocation)
        }
      />
      <CreateDesignBlock
        id={2}
        title="Experience"
        addBtn="Experience"
        labelOne="Company Name"
        inputOne="Enter Company Name"
        labelTwo="Position Title"
        inputTwo="Enter Position Title"
        labelThree="Location"
        inputThree="Enter Location"
        onSchoolChange={(newSchool) => handleChange("school", newSchool)}
        onDegreeChange={(newDegree) => handleChange("degree", newDegree)}
        onStartDateChange={(newStartDate) =>
          handleChange("startDate", newStartDate)
        }
        onEndDateChange={(newEndDate) => handleChange("endDate", newEndDate)}
        onLocationChange={(newLocation) =>
          handleChange("location", newLocation)
        }
      />
    </div>
  );

  const customize = <Customize />;

  return (
    <div id="editingBlock">
      {currMainEdit === "Content" ? content : customize}
    </div>
  );
}
