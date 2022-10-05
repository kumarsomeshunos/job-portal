import React from "react";
import "./card.css";

const card = () => {
  return <div className="main-card-div">
    <div>
      <h3 className="card-info-h2">Applications Recieved</h3>
      <hr />
      <h1 className="card-info-h1">1220+</h1>
    </div>
    <div>
      <h3 className="card-info-h2">Applications Selected</h3>
      <hr />
      <h1 className="card-info-h1">230+</h1>
    </div>
    <div>
      <h3 className="card-info-h2">Applications Interviewed</h3>
      <hr />
      <h1 className="card-info-h1">55+</h1>
    </div>
    <div>
      <h3 className="card-info-h2">Applications Appointed</h3>
      <hr />
      <h1 className="card-info-h1">20+</h1>
    </div>
  </div>;
};

export default card;
