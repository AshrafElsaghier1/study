import { Col, Container, Row } from "react-bootstrap";
import CustomComponent from "../../customComponents/CustomComponent";
import { solutionsData } from "../../dummyData/dummyData";
import SingleSolution from "./SingleSolution";
export const data = {
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam  erat, sed diam voluptua. At vero eos et accusam et justo duo  dolores et ea rebum.",
  text1:
    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
  link: "Learn About Our Success",
};
const SolutionsComp = () => {
  return (
    <Container className=" pt-3 pt-md-5 mt-1 mt-md-3">
      <Row>
        <Col lg={6} className="mb-3">
          <CustomComponent {...data}>
            The best business <br /> solution for you
          </CustomComponent>
        </Col>
        <Col lg={6} style={{ paddingTop: "6px" }}>
          <Row>
            {solutionsData.map((solution) => (
              <Col md={6} className="mb-3 mb-lg-4" key={solution.id}>
                <SingleSolution {...solution} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SolutionsComp;
