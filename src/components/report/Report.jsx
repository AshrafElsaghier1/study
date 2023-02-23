import { Col, Container, Row } from "react-bootstrap";
import { data } from "../solutionComp/SolutionsComp";
import CustomComponent from "../../customComponents/CustomComponent";
import "./report.scss";
import { useEffect, useLayoutEffect } from "react";
const Report = () => {
  return (
    <div className="report" id="reports">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="sec__inner-imgs ">
            <div className="bg__img-container mb-4 mb-lg-0">
              <img
                src="./assets/imgs/rectangle.png"
                alt=""
                draggable="false"
                className="w-100 bg__img d-none d-lg-inline"
              />
              <img
                src="./assets/imgs/report-l.svg"
                alt=""
                draggable="false"
                className="w-100 report__img"
              />
            </div>
          </Col>
          <Col lg={6}>
            <CustomComponent {...data}>
              Best Platform for the <br /> Technological Era
            </CustomComponent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Report;
