import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";


const TestimonialContainer = ({ swiperRef, data }) => {
    return (
        <Swiper
            onSwiper={e => swiperRef.current = e}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
        >
            {data.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialContainer;