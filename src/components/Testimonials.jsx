import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "../constant";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>What Other says</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container tablet:w-4/5 laptop:w-2/5 pb-16"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className=" bg-background-variant text-center p-8 rounded-[2rem] select-none"
          >
            <div className="client-avatar w-8 aspect-square overflow-hidden rounded-[50%] mt-0 mx-auto mb-4 border-[0.4rem] border-solid border-primary-variant">
              <img
                src={testimonial.avatar}
                alt={`Avatar-${testimonial.avatar}`}
              />
            </div>
            <a href={testimonial.linkedInProfile} target="_blank">
              {testimonial.name}
            </a>
            <small className="text-custom-light font-[300] block tablet:w-4/5 mt-[0.8rem] mx-auto mb-0">
              {testimonial.testimonial}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
