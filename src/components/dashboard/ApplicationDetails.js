import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ApplicationDetails.css";

const ApplicationsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const rejectApplication = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/applications/${id}/reject`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err) {
      console.error(`${err.message}`);
    }
  };

  const FetchingApplicant = useCallback(async () => {
    try {
      await fetch(`http://localhost:3000/applications/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          const objectprefix = val.applicant;
          const result = {
            name: objectprefix.firstName + " " + objectprefix.lastName,
            dob: objectprefix.dob,
            gender: objectprefix.dob,
            religion: objectprefix.religion,
            marital: objectprefix.marital_status,
            mobile: objectprefix.mobile,
            email: objectprefix.email,
            school: val.school,
            dept: val.department,
            acaddom: val.acad_domain,
            cr_country: val.cr_country,
            cr_state: val.cr_state,
            native_country: val.native_country,
            aadhaar_card: val.aadhaar_card,
            pan_card: val.pan_card,
          };
          setData(result);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [id]);
  useEffect(() => {
    FetchingApplicant();
  }, [FetchingApplicant]);

  return (
    <Card className="details">
      <Card.Header>{`Application Number ${id}`}</Card.Header>
      <Card.Body>
        <Card.Title>{`Name : ${data.name}`}</Card.Title>
        <hr></hr>
        <Card.Text>
          <h5>Applicant Details</h5>
        </Card.Text>
        <Card.Text>{`DOB : ${data.dob}`}</Card.Text>
        <Card.Text>{`GENDER : ${data.gender}`}</Card.Text>
        <Card.Text>{`Religion: ${data.religion}`}</Card.Text>
        <Card.Text>{`Marital Status : ${data.marital}`}</Card.Text>

        <Card.Text>{`Mobile: ${data.mobile}`}</Card.Text>
        <Card.Text>{`Email: ${data.email}`}</Card.Text>
        <Button variant="success" className="btn">
          HR APPROVED
        </Button>
        <Button variant="success" className="btn">
          DEPT APPROVED
        </Button>
        <Button variant="success" className="btn">
          HOD APPROVED
        </Button>
        <Button variant="danger" className="btn" onClick={rejectApplication}>
          REJECT
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ApplicationsDetails;
