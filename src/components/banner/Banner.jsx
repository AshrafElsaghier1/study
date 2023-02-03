import { Col, Row } from "react-bootstrap";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner" id="banner">
      <Row className="w-100 banner__inner">
        <Col xs={12} md={6} className="banner__inner-info"></Col>
        <Col xs={12} md={6} className="banner__inner-img"></Col>
      </Row>
    </div>
  );
};

export default Banner;
