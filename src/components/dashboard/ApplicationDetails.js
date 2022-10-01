import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ApplicationDetails.css"

const ApplicationsDetails = (props) => {
  const { id } = useParams();

  return (
    <Card className="details">
      <Card.Header>{`Application Number ${id}`}</Card.Header>
      <Card.Body>
        <Card.Title>Applicant Name</Card.Title>
        <hr></hr>
        <Card.Text>
         Supporting details like , Qualification , courses , publications , certificates goes here
        </Card.Text>
        <Button variant="success">HR APPROVED</Button>
        <Button variant="success">DEPT APPROVED</Button>
        <Button variant="success">HOD APPROVED</Button>
        <Button variant="danger">REJECT</Button>

      </Card.Body>
    </Card>
  );
};

export default ApplicationsDetails;
