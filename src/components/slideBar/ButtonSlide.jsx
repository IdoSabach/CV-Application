import "./ButtonSlide.css";
export default function ButtonSlide({ icon , text , onSelect , isSelect}) {
  return (
      <button id="button-slide" className={isSelect ? "active" : undefined} onClick={onSelect}>
        <span className="icon">{icon}</span>
        <p>{text}</p>
      </button>
  );
}
