import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner" id="banner">
      <Container className="">
        <Row className="w-100 banner__inner">
          <Col xs={12} lg={6} className="mb-3 pe-0">
            <div className="banner__inner-info d-flex justify-content-center flex-column">
              <p>Advanced Platform</p>
              <h1 className="mb-3">
                Take your team <br /> to the next level
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </span>
              <div className="link__btn mt-3 ">
                <Link to="/study" className="w-100 d__flex-center">
                  About us
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="banner__inner-img p-0">
            <img
              src="./assets/imgs/report.png"
              alt="report-img"
              className="w-100"
              draggable="false"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
