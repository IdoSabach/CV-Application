import "./TopBar.css"

export default function TopBar(){
  const iconTrash = <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/delete.png" alt="delete"/>
  return (
    <div id="topBar">
      <button className="clear">{iconTrash}Clear Resume</button>
      <button className="load">Load Example</button>
    </div>
  )
}