import { Col, Container, Row } from "react-bootstrap";
import { clientsData } from "../../dummyData/dummyData";

import { Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./clients.scss";
const Clients = () => {
  return (
    <Container id="clients" className="pb-3">
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="img__container  text-center">
            <Swiper
              spaceBetween={10}
              modules={[Scrollbar]}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {clientsData.map(({ imgSrc, id }) => (
                <SwiperSlide key={id}>
                  <img src={imgSrc} alt={`client-${id}`} draggable="false" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
