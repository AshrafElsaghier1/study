import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Timeline from "../timeline/Timeline";
import "./business.scss";
const BusinessComp = () => {
  return (
    <div id="business" className="py-3">
      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="business__inner-left">
              <h2 className="mb-3">
                Acceleration Process to <br className="d-none d-md-block" />
                Grow Your Business
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
              </p>
              <Link to="/" className="link__btn d__flex-center">
                About us
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <ul
              className="business__inner-right"
              style={{ paddingLeft: "20px" }}
            >
              <Timeline />
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessComp;
