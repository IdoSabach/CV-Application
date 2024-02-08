import "./EditingBlock.css";
import PersonalDetails from "./PersonalDetails";
import CreateDesignBlock from "./CreateDesignBlock";
import Customize from "./Customize";

export default function EditingBlock({ currMainEdit }) {
  let content = (
    <div>
      <PersonalDetails />
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
