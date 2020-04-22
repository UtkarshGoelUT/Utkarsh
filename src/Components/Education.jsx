import React from "react";
import "../index.css";
import "../Education";
import { Card, CardBody, CardText, CardHeader } from "reactstrap";
import edu from "../Education";

function CCard(props) {
  return (
    <div>
      <Card className="card">
        <CardHeader className="eduname">{props.name}</CardHeader>
        <CardBody>
          <CardText className="eduloc">{props.loc}</CardText>
          <CardText className="edudig">{props.dig}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function Edu() {
  return (
    <div>
      <div className="head">Education</div>
      <div className="row back">{edu.map(CCard)}</div>
    </div>
  );
}

export default Edu;
