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
            <div className="bg__img-container">
              {/* <img src="/assets/imgs/rectangle.png" alt="" className="w-100" /> */}
            </div>
            {/* <div className="report__img-container">
              <img src="/assets/imgs/report.png" alt="" className="w-100" />
            </div> */}
          </Col>
          <Col lg={6}>
            <CustomComponent {...data}>
              Best Platform for the Technological Era
            </CustomComponent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Report;
