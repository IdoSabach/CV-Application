import { useState } from "react";
import "./app.css";
import SlideBar from "./components/SlideBar/SlideBar";
import TopBar from "./components/TopBar/TopBar";
import EditingBlock from "./components/MainDesign/EditingBlock";
import TheCv from "./components/TheCv/TheCv";

function App() {
  const [currMain, setCurrMain] = useState("Content");
  const [currName, setCurrName] = useState("Welcome to CV Application");
  const [currEmail, setCurrEmail] = useState("");
  const [currPhone, setCurrPhone] = useState("");
  const [currAddress, setCurrAddress] = useState("");

  const handelMain = (name) => {
    setCurrMain(name);
  };
  const handelName = (newName) => {
    setCurrName(newName);
  };

  const handelEmail = (newEmail) => {
    setCurrEmail(newEmail);
  };

  const handelPhone = (newPhone) => {
    setCurrPhone(newPhone);
  };

  const handelAddress = (newAddress) => {
    setCurrAddress(newAddress);
  };

  const handleAddTextToCv = () =>{
    setCurrName('Ido Sabach')
    setCurrEmail('Idosabach11@gmail.com')
    setCurrPhone('0537205476')
    setCurrAddress('yeruham')
  }

  const handleRmTextToCv = () => {
    setCurrName("Welcome to CV Application")
    setCurrEmail("")
    setCurrPhone("")
    setCurrAddress("")
  };

  return (
    <div id="app">
      <SlideBar currMain={handelMain} />
      <div>
        <TopBar addText={handleAddTextToCv} rmText={handleRmTextToCv}/>
        <EditingBlock
          currMainEdit={currMain}
          isName={handelName}
          isEmail={handelEmail}
          isPhone={handelPhone}
          isAddress={handelAddress}
        />
      </div>
      <TheCv
        name={currName}
        mail={currEmail}
        phone={currPhone}
        address={currAddress}
      />
    </div>
  );
}

export default App;
