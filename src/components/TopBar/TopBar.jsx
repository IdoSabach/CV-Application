import "./TopBar.css"

export default function TopBar( {addText , rmText} ){
  const handleAddText = () =>{
    addText()
  }
  const handleRmText = () =>{
    rmText()
  }
  const iconTrash = <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/delete.png" alt="delete"/>
  return (
    <div id="topBar">
      <button className="clear" onClick={handleRmText}>{iconTrash}Clear Resume</button>
      <button className="load" onClick={handleAddText}>Load Example</button>
    </div>
  )
}