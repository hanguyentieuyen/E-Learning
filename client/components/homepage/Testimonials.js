import { Container } from "@mui/material";
import TestimonialsCard from "./TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Ava1 from "../../images/Avatar1.png";
import Ava2 from "../../images/Avatar2.png";
import Ava3 from "../../images/Avatar3.png";
import Ava4 from "../../images/Avatar4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  return (
    <>
      <div className="wrapper testimonials">
        <Container>
          <h2 className="testimonials-title">
            What's Our Student Say About Us
          </h2>
          <div className="testimonials-cards">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <TestimonialsCard
                  img={Ava1}
                  name="John Smith"
                  job="Designer"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                ></TestimonialsCard>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard
                  img={Ava2}
                  name="John Smith"
                  job="Designer"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                ></TestimonialsCard>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard
                  img={Ava3}
                  name="John Smith"
                  job="Designer"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                ></TestimonialsCard>
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialsCard
                  img={Ava4}
                  name="John Smith"
                  job="Designer"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                ></TestimonialsCard>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Testimonials;
