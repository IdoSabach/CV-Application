import "./EditingBlock.css";
import PersonalDetails from "./PersonalDetails";
import CreateDesignBlock from "./CreateDesignBlock";
import Customize from "./Customize";

export default function EditingBlock({ currMainEdit , isName , isEmail , isPhone , isAddress}) {
  const handleNameChange = (newName) => {
    isName(newName)
  };

  const handleEmailChange = (newEmail) => {
    isEmail(newEmail)
  };

  const handlePhoneChange = (newPhone) => {
    isPhone(newPhone)
  };

  const handleAddressChange = (newAddress) => {
    isAddress(newAddress)
  };

  let content = (
    <div>
      <PersonalDetails onNameChange={handleNameChange} onEmailChange={handleEmailChange} onPhoneChange={handlePhoneChange} onAddressChange={handleAddressChange}/>
      <CreateDesignBlock
        title={"Education"}
        addBtn={"Education"}
        labelOne={"School"}
        inputOne={"Enter School / University"}
        labelTwo={"Degree"}
        inputTow={"Enter Degree / Field Of Study"}
        labelThree={"Location"}
        inputThree={"Enter Location"}
      />
      <CreateDesignBlock
        title={"Experience"}
        addBtn={"Experience"}
        labelOne={"Company Name"}
        inputOne={"Enter Company Name"}
        labelTwo={"Position Title"}
        inputTow={"Enter Position Title"}
        labelThree={"Location"}
        inputThree={"Enter Location"}
      />
    </div>
  );

  let customize = (
    <Customize />
  )

  return (
    <div id="editingBlock">
      {currMainEdit === "Content" ? content : customize}
    </div>
  );
}
