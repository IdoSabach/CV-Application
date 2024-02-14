import './LineOnCv.css'


export default function LineOnCv(){
  return (
    <div id="line-cv">
      <div className="left-block">
        <div className="date">
          <div className="start-date"></div>
          <div className="end-date"></div>
        </div>
        <div className="location"></div>
      </div>
      <div className="right-block">
        <div className="school"></div>
        <div className="degree"></div>
      </div>
    </div>
  )
}