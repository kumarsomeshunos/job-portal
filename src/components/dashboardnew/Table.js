import React from "react";
import data from "./data";
import Button from "../Button";
import "./table.css";

const Table = () => {
  return (
    <div className="main-div">
      <table>
        <tr>
          <th>Serial No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Seen</th>
          <th>Status</th>
          <th>View</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.sno}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.seen}</td>
              <td>{val.status}</td>
              <td><Button text={"View"} tcolor={"white"} color={"green"} /></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
