import React from "react";
import Widget from "./Widget";
import "./dashboard.css";
import Datatable from "./Datatable";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="listContainter">
        <Datatable />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
