import { useState } from "react";
import "./app.css"
import SlideBar from "./components/slideBar/SlideBar";
import MainTab from "./components/mainBar/MainTab";
import CurrMain from "./components/mainDesign/CurrMain";
import Cv from "./components/cv/Cv";

function App() {
  return (
    <div id="app">
      <SlideBar />
      <div>
        <MainTab />
        <CurrMain />
      </div>
      <Cv />
    </div>
  );
}

export default App;
