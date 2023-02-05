import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.scss";
const footerLinks = [
  {
    link: "Avis clients",
  },
  {
    link: "Mentions légales ",
  },
  {
    link: "Plan du site",
  },
  {
    link: "  Blog d’Idéematic",
  },
  {
    link: "Le dictionnaire du digital",
  },
  {
    link: "   Notre boutique  ",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="mt-4">
      <Container>
        <div className="footer__inner">
          <Row>
            <Col md={7}>
              <Row>
                <Col md={6} xl={5}>
                  <div className="footer__inner-left">
                    <h2 className="mb-3">Study</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus eget diam at mi sollicitudin
                    </p>
                  </div>
                </Col>
                <Col md={6} xl={7}>
                  <div className="footer__inner-middle">
                    <p className="title mb-3">Nos services</p>
                    <ul>
                      {footerLinks.map(({ link }, index) => (
                        <li key={index}>
                          <Link to="/"> {link} </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <div className="footer__inner-right ">
                <p className="title mb-3">Sign up for Special Offers!</p>
                <div className="input__container">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Mail"
                      aria-label="mail"
                      aria-describedby="mail"
                    />
                    <Button>Subscribe</Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
