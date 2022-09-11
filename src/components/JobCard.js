import React from "react";

const JobCard = () => {
  return (
    <div class="card" style={{"width": "20rem"}}>
      <div style={{"display": "flex"}}>
      <img src="images/cardimage.png" class="card-img-top" alt="..." style={{"width": "8rem"}} />
      </div>
      <div class="card-body">
        <h5 class="card-title">Job Title</h5>
        <p class="card-text">
          Some quick description and facts about the job and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default JobCard;
