import { Col, Container, Row } from "react-bootstrap";
import CustomComponent from "../../customComponents/CustomComponent";
import TestimonialSwiper from "./TestimonialSwiper";

import "./testimonial.scss";
const data = {
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed  diam nonumy eirmod tempor invidunt ut labore et dolore magna  aliquyam erat, sed diam voluptua. At vero eos et accusam et  justo duo dolores et ea rebum.",
  text1:
    " Stet clita kasd gubergren, no sea  takimata sanctus est Lorem ipsum dolor sit amet",
};

const Testimonial = () => {
  return (
    <section id="testimonial" className=" py-0 py-md-4">
      <Container>
        <Row>
          <Col lg={6}>
            <TestimonialSwiper />
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <CustomComponent {...data} button={true}>
              Grow Your Business and
              <br /> Join Our Happy Users
            </CustomComponent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
