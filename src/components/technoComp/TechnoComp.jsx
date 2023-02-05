import { Col, Container, Row } from "react-bootstrap";

import { data } from "../solutionComp/SolutionsComp";
import CustomComponent from "../../customComponents/CustomComponent";
import "./techno.scss";
const TechnoComp = () => {
  return (
    <div className="techno" id="techno">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <CustomComponent {...data}>
              Best Platform for the <br /> Technological Era
            </CustomComponent>
          </Col>
          <Col lg={6} className="sec__inner-imgs ">
            <div className="bg__img-container mb-4 mb-lg-0">
              <img
                src="/assets/imgs/rectangle.png"
                alt=""
                draggable="false"
                className="w-100 bg__img d-none d-lg-inline"
              />
              <img
                src="/assets/imgs/report-1.png"
                alt=""
                draggable="false"
                className="w-100 techno__img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechnoComp;
