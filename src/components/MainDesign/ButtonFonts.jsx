import './ButtonFonts.css'

export default function ButtonFonts( {name , isSelect , onSelect} ){
  return(
    <div id="button-font">
      <button className={isSelect ? "active" : undefined} onClick={onSelect}>
          <div className="symbol">Aa</div>
          <div className="name-font">{name}</div>
        </button>
    </div>
  )
}