import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

import "./features.scss";

const featuresData = [
  { id: 1, timer: 570, title: "Download" },
  { id: 2, timer: 570, title: "Active User" },
  { id: 3, timer: 570, title: "Positive Feedback" },
  { id: 4, timer: 570, title: "+ rating" },
];

export const Features = () => {
  return (
    <section id="features" className="py-4">
      <Container>
        <h2 className="mx-auto text-center">
          Don't Just Take <br /> our Word for it!
        </h2>
        <div className="features__inner-count mt-2 mt-lg-5 pt-3">
          <Row>
            {featuresData.map(({ timer, id, title }) => (
              <Col sm={4} lg={3} key={id}>
                <div className="feature__inner">
                  <h2 className="mb-1">
                    <CountUp end={timer} enableScrollSpy={true} />
                  </h2>
                  <p> {title} </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};
