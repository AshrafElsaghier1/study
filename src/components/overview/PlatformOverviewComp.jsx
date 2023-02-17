import { Col, Container, Row } from "react-bootstrap";
import SwiperOverview from "../overviewSwiper/SwiperOverview";
import "./platform.scss";

const PlatformOverviewComp = () => {
  return (
    <section id="platform" className="position-relative">
      <Container>
        <div className="platform__inner-top ">
          <Row>
            <Col md={8} lg={6} className="mx-auto">
              <p>Advanced Customer Service Platform</p>
              <h2>Platform Overview</h2>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
              </span>
            </Col>
          </Row>
        </div>
        <SwiperOverview />
      </Container>
    </section>
  );
};

export default PlatformOverviewComp;
