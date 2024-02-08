import "./TheCv.css";

export default function TheCv({ name, mail, phone, address }) {
  return (
    <div id="theCv">
      <header className="header">
        <div className="name">{name}</div>
        <div className="nav">
          <div className="mail">{mail}</div>
          <div className="phone">{phone}</div>
          <div className="address">{address}</div>
        </div>
      </header>
      <main>main</main>
    </div>
  );
}
