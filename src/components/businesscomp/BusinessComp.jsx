import { Col, Container, Row } from "react-bootstrap";
import CustomComponent from "../../customComponents/CustomComponent";
import Timeline from "../timeline/Timeline";
import "./business.scss";

const data = {
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed  diam nonumy eirmod tempor invidunt ut labore et dolore magna  aliquyam erat, sed diam voluptua. At vero eos et accusam et  justo duo dolores et ea rebum.",
  text1:
    " Stet clita kasd gubergren, no sea  takimata sanctus est Lorem ipsum dolor sit amet",
};

const BusinessComp = () => {
  return (
    <div id="business" className="pt-3">
      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="business__inner-left">
              <CustomComponent button={true} {...data}>
                Acceleration Process to <br />
                Grow Your Business
              </CustomComponent>
            </div>
          </Col>
          <Col lg={6}>
            <ul className="business__inner-right">
              <Timeline />
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessComp;
