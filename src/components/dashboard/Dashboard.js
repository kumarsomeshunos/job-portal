import React from "react";
import Widget from "./Widget";
import "./dashboard.css";
import Datatable from "./Datatable";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="widgets">
        <Widget title="Users" counter="100" />
        <Widget title="Teaching Applicants" counter="500" />
        <Widget title="Non Teaching Applicants" counter="250" />
        <Widget title="Total Applicants" counter="750" />
      </div>
      <div className="listContainter">
        <Datatable />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
