import { Col, Container, Row } from "react-bootstrap";
import "./report.scss";
import { data } from "../solutionComp/SolutionsComp";
import CustomComponent from "../../customComponents/CustomComponent";
const Report = () => {
  return (
    <div className="report" id="reports">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="report__inner-imgs">
            <div className="bg__img-container mb-4 mb-lg-0">
              <img src="/assets/imgs/NoPath.png" alt="" />
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
