import { useState } from "react";
import "./app.css"
import SlideBar from "./components/SlideBar/SlideBar";
import TopBar from "./components/TopBar/TopBar";
import EditingBlock from "./components/MainDesign/EditingBlock";
import TheCv from "./components/TheCv/TheCv";

function App() {
  const [currMain , setCurrMain] = useState("Content")
  
  const handelMain = (name) =>{
    setCurrMain(name)
  }
  return (
    <div id="app">
      <SlideBar currMain={handelMain} />
      <div>
        <TopBar />
        <EditingBlock currMainEdit={currMain}/>
      </div>
      <TheCv />
    </div>
  );
}

export default App;
