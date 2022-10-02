import React from "react";
import JobCard from "./JobCard";

const JobCardMain = () => {
  return (
    <div className="jobcardmain">
      <h2>Latest Job Openings @ Manipal</h2>
      <div className="jobcardcollector">
        <JobCard />
       
      </div>
    </div>
  );
};

export default JobCardMain;
