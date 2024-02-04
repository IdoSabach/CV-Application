import "./mainBar.css"

export default function MainTab(){
  const iconTrash = <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/delete.png" alt="delete"/>
  return (
    <div id="main-tab">
      <button className="clear">{iconTrash}Clear Resume</button>
      <button className="load">Load Example</button>
    </div>
  )
}