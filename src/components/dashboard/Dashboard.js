import React from "react";
import Widget from "./Widget";
import "./dashboard.css";
import Datatable from "./Datatable";
import { useEffect, useCallback, useState } from "react";

const Dashboard = () => {
  const URL = 'http://localhost:3000/applications';
  const [data, setData] = useState([]);

  const FetchingData = useCallback(async () => {
    try {
      await fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          setData(val.results);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, []);
  useEffect(() => {
    FetchingData();
  }, [FetchingData]);


  return (
    <React.Fragment>
      <div className="widgets">
        <Widget title="Users" counter="100" />
        <Widget title="Teaching Applicants" counter="500" />
        <Widget title="Non Teaching Applicants" counter="250" />
        <Widget title="Total Applicants" counter="750" />
      </div>
      {/* Filter applicants using dropdown choices */}
      <div className="filters">
        <select className="filterSelect">
          <option value="all">All</option>
          <option value="teaching">Teaching</option>
          <option value="nonteaching">Non Teaching</option>
        </select>
        <select className="filterSelect">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div className="listContainter">
        {/* <Datatable data={data} /> */}
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
            <th>Id</th>
                <th>Name </th>
                <th>Title</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.applicant.firstName} {item.applicant.lastName}</td>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))}
        </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
