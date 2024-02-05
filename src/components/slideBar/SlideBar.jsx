import ButtonSlide from "./ButtonSlide"
import "./SlideBar.css"
import { useState } from "react" 


export default function SlideBar(){
  const [currBtn , setCurrBtn] = useState("Content")

  const handelClick = (text) => {
    console.log(text)
    setCurrBtn(text)
  }


  const iconContent = <img width="60" height="60" src="https://img.icons8.com/dotty/80/e-learning.png" alt="e-learning"/>
  const iconCustomize = <img width="50" height="50" src="https://img.icons8.com/ios/100/maintenance--v1.png" alt="maintenance--v1"/>

  return (
    <div id="slide-bar">
      <ButtonSlide icon={iconContent} text={"Content"} isSelect={currBtn === "Content"} onSelect={() => handelClick("Content")}/>
      <ButtonSlide icon={iconCustomize} text={"Customize"} isSelect={currBtn === "Customize"} onSelect={() => handelClick("Customize")}/>

    </div>
  )
}