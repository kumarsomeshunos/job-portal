import React from "react";
import Select from 'react-select'
import { Helmet } from "react-helmet";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

import Widget from "./Widget";
import "./dashboard.css";
import "../../config";
import { useEffect, useCallback, useState } from "react";
// import { Button } from "@mui/material";

const Dashboard = () => {
  const URL = 'http://localhost:3000/applications';

  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);
  const [dateRange, setDateRange] = useState({start: "", end: ""});

  const [searchQuery, setSearchQuery] = useState("");
  const [searchName, setSearchName] = useState("");

  const [filters, setFilters] = useState({
    jobType: { value: '', label: 'Any' },
    faculty: { value: '', label: 'Any' },
    school: { value: '', label: 'Any' },
    department: { value: '', label: 'Any' },
    status: { value: '', label: 'Any' }
  });

  const FetchingData = useCallback(async () => {
    try {
      await fetch(URL + 
        	"?jobType=" + filters.jobType.value + 
			"&faculty=" + filters.faculty.value + 
			"&school=" + filters.school.value + 
			"&department=" + filters.department.value + 
			"&status=" + filters.status.value + 
			"&startDate=" + dateRange.start + 
			"&endDate=" + dateRange.end + 
			"&searchName=" + searchName
			
		)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          setData(val.results);
          setStats(val.stats);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [filters, dateRange, searchName]);

  useEffect(() => {
    console.log(dateRange);
    FetchingData();
  }, [FetchingData]);

  const handleChange = (e, propertyName) => {
    setFilters({ ...filters, [propertyName]: e });
  };

  const handleDateChange = (start, end, label) => {
    console.log(start, end, label);
    setDateRange({start: start, end: end});
  };

  const handleSearchChange = (e) => {
	setSearchName(searchQuery);
  }

  const jobTypeOptions = global.config.jobTypeOptions;


  const statusOptions = {
    "draft": "Draft",
    "submitted": "Submitted",
  }

  const statusClass = {
    "draft": "bg-secondary",
    "submitted": "bg-info",
    "approved": "bg-success",
  }

  return (
    <React.Fragment>
      {/* <Helmet>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
      </Helmet> */}
      <div className="p-5">
        <div className="widgets p-0 mb-5">
          <Widget title="Total Applications Submitted" counter={stats.totalSubmitted} />
          <Widget title="Academic Applicants" counter={stats.totalAcademic} />
          <Widget title="Non Academic Applicants" counter={stats.totalNonAcademic} />
          <Widget title="Administration Applicants" counter={stats.totalAdmin} />
        </div>
        <div className="row filters mb-4">

          <div className="col-md-3">
            <label>Job Type</label>
            <Select defaultValue={filters.jobType} value={filters.jobType} options={jobTypeOptions} onChange={e => handleChange(e, 'jobType')} />
          </div>

          <div className="col-md-3">
            <label>Faculty</label>
            <Select defaultValue={filters.faculty} value={filters.faculty} options={jobTypeOptions} onChange={e => handleChange(e, 'faculty')} />
          </div>

          <div className="col-md-3">
            <label>School</label>
            <Select defaultValue={filters.school} value={filters.school} options={jobTypeOptions} onChange={e => handleChange(e, 'school')} />
          </div>

          <div className="col-md-3">
            <label>Department</label>
            <Select defaultValue={filters.department} value={filters.department} options={jobTypeOptions} onChange={e => handleChange(e, 'department')} />
          </div>

          <div className="col-md-3">
            <label>Status</label>
            <Select defaultValue={filters.status} value={filters.status} options={global.config.statusOptions} onChange={e => handleChange(e, 'status')} />
          </div>

          <div className="col-md-3">
            <label>Created Date</label>
            <DateRangePicker onCallback={handleDateChange}>
              <input type="text" className="form-control"/>
            </DateRangePicker>
          </div>

          <div className="col-md-5">
            <label>Search</label>
            <input type="text" className="form-control" value={searchQuery} placeholder="Search by name" onChange={e => setSearchQuery(e.target.value)} />
          </div>

		  <div className="col-md-1">
			<label className="w-100"></label>
			<button className="btn btn-dark text-white" onClick={handleSearchChange}>Search</button>
		  </div>


        </div>
        <div>
          <div className="listContainter">
            <table className="table table-hover align-middle mb-0 bg-white applicationsTable">
              <thead className="bg-light">
                <tr>
                  <th>Id</th>
                  <th>Name </th>
                  <th>Applied On</th>
                  <th>Status</th>
                  <th>Resume</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((application, i) => (
                  <tr key={i}>
                    <td>{application.id}</td>
                    {/* TODO: Save small version of photo */}
                    <td><img src={application.photo} className="img-fluid" style={{ "max-width": "50px", "border-radius": "25px" }}></img> {application.applicant.firstName} {application.applicant.lastName}</td>
                    <td>
                      {application.createdDate}
                    </td>
                    <td>
                      <span className={"badge rounded-pill " + statusClass[application.status]}>{statusOptions[application.status]}</span>
                    </td>
                    <td>
                      <a className="btn btn-info text-white" href={application.resume} target="_blank">View/Download</a>
                    </td>
                    <td>
                      <a className="btn btn-success text-white" href={"/applicantdetails/" + application._id} target="_blank">Details</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
