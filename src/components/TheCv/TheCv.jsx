import "./TheCv.css";

export default function TheCv({ name, mail, phone, address , startDate , endDate , location , school , degree}) {
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
      <main>
        <header className="topSlide">Education</header>
        <div className="lineEducation">
          <div className="firstBox">
            <div className="date">{startDate}-{endDate}</div>
            <div className="location">{location}</div>
          </div>
          <div className="secondBox">
            <div className="school">{school}</div>
            <div className="degree">{degree}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
