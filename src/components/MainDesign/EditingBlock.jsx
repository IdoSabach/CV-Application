import "./EditingBlock.css";
import PersonalDetails from "./PersonalDeatails";

export default function EditingBlock({ currMainEdit }) {
  let content = (
    <div>
      <PersonalDetails />
    </div>
  );

  let customize = <p>customize</p>;

  return (
    <div id="editingBlock">
      {currMainEdit === "Content" ? content : customize}
    </div>
  );
}
