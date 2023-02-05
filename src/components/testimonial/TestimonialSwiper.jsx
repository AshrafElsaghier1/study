import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Col, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const testimonialData = [
  {
    id: 1,
    imgSrc: "./assets/imgs/testimonial.png",
    name: "Florie Jacobs",
    jobTitle: "CEO of Company",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    iconCount: 5,
  },
  {
    id: 2,
    imgSrc: "./assets/imgs/testimonial.png",
    name: " Jacobs",
    jobTitle: "CEO of Company",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    iconCount: 3,
  },
  {
    id: 3,
    imgSrc: "./assets/imgs/testimonial.png",
    name: "Florie",
    jobTitle: "CEO of Company",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    iconCount: 4,
  },
];

const TestimonialSwiper = () => {
  return (
    <div className="testimonial__container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper "
        loop={true}
      >
        {testimonialData.map(
          ({ id, imgSrc, jobTitle, iconCount, desc, name }) => (
            <SwiperSlide className="swiper__item" key={id}>
              <Row className="align-items-sm-center p-3">
                <Col xs={4}>
                  <img src={imgSrc} alt="user-img" className="w-100" />
                </Col>
                <Col xs={8}>
                  <div className="testimonial__inner-info">
                    <p className="mb-0 "> {name} </p>
                    <span className="d-block mb-2"> {jobTitle} </span>
                    <span className="d-block">{desc}</span>
                    <span className="icons__container">
                      {[...Array(iconCount)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </span>
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
