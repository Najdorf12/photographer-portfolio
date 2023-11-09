
import slider1 from "/slider-5.jpg";
import slider2 from "/slider-8.jpg";
import slider3 from "/slider-9.jpg";
import slider4 from "/slider-10.jpg";
import slider5 from "/slider-14.jpg";

import slider7 from "/slider-1.jpg";
import slider8 from "/slider-2.jpg";
import slider9 from "/slider-3.jpg";
import slider12 from "/slider-11.jpg";



import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div
      className="carousel"
      style={{
        overFlow: "hidden",
        width: "97vw",
        margin:"0 auto",
        paddingTop:"2rem",
      }}
    >
      <swiper-container
        style={{
          width:"100%",
          paddingBottom:"1rem",
            '--swiper-navigation-color': 'var(--color3)',
            '--swiper-pagination-color': 'var(--color3)',
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <swiper-slide >
          <img src={slider7} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider1} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider9} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider3} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider4} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider5} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider2} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider8} alt=""/>
        </swiper-slide>
        
        <swiper-slide >
          <img src={slider12} alt=""/>
        </swiper-slide>
        ...
      </swiper-container>
    </div>
  );
};

export default Carousel;
