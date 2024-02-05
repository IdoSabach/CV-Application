import { useState } from "react";
import "./app.css"
import SlideBar from "./components/SlideBar/SlideBar";
import TopBar from "./components/TopBar/TopBar";
import EditingBlock from "./components/MainDesign/EditingBlock";
import TheCv from "./components/TheCv/TheCv";

function App() {
  return (
    <div id="app">
      <SlideBar />
      <div>
        <TopBar />
        <EditingBlock />
      </div>
      <TheCv />
    </div>
  );
}

export default App;
