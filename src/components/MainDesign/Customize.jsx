import "./Customize.css";
import { useState } from "react";
import ButtonFonts from "./ButtonFonts";

export default function Customize() {
  const [currFont, setCurrFont] = useState("Serif");
  const handleFont = (text) => {
    console.log(text);
    setCurrFont(text);
  };

  const fonts = (
    <div className="font">
      <h1>Fonts</h1>
      <div className="fonts-btn">
        <ButtonFonts
          name={"Serif"}
          isSelect={currFont === "Serif"}
          onSelect={() => handleFont("Serif")}
        />
        <ButtonFonts
          name={"Sans"}
          isSelect={currFont === "Sans"}
          onSelect={() => handleFont("Sans")}
        />
        <ButtonFonts
          name={"Mono"}
          isSelect={currFont === "Mono"}
          onSelect={() => handleFont("Mono")}
        />
      </div>
    </div>
  );
  return <div id="customize">{fonts}</div>;
}
