import React from "react";
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import data from "./JobListing.json";


const JobListing = () => {
  return (
    <Container>
      <h3>Admin - Create new Job Listing</h3>
      <form className="row g-3" post="/" method="post">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Job Title
          </label>
          <input
            type="text"
            class="form-control"
            id="heading"
            name="heading"
            placeholder="Job Tile"
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea" class="form-label">
            Details
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea"
            rows="3"
            placeholder="Enter Card Body Text"
            name="invite"
            autocomplete="off"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Last Date
          </label>
          <input
            type="date"
            class="form-control"
            id="time"
            name="time"
            placeholder="Enter date and time in exact format "
          />
        </div>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      <hr></hr>
      <h3>Delete Listing</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job ID</th>
            <th scope="col">Due Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{item.jobid}</td>
              <td>{item.duedate}</td>
              <td>
                <Button variant="contained" color="primary">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default JobListing;
