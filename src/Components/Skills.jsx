import React from "react";
import { Card, CardHeader, CardImg, CardText, CardBody } from "reactstrap";
import skills from "../Skill";
import "../index.css";

function Img(props) {
  return (
    <div class="col-md">
      <CardImg
        src={props.loc}
        alt={props.name}
        className="img-fluid img"
      ></CardImg>
    </div>
  );
}

function CCard(props) {
  return (
    <div>
      <Card>
        <CardHeader className="eduname">{props.name}</CardHeader>
        <CardImg src={props.loc}></CardImg>
        <CardBody>
          <div className="row">{props.sub.map(Img)}</div>
        </CardBody>
      </Card>
    </div>
  );
}

function Skill() {
  return (
    <div>
      <div className="head">Skills</div>
      <div className="row back">{skills.map(CCard)}</div>
    </div>
  );
}

export default Skill;
