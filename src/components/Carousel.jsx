import slider1 from "/slider1.jpeg";
import slider2 from "/slider2.jpeg";
import slider3 from "/slider3.jpeg";
import slider4 from "/slider4.jpeg";
import slider5 from "/slider5.jpeg";
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
        background:"#ffba08",
        overFlow: "hidden",
        width: "97vw",
        margin:"0 auto",
        paddingTop:"2rem",
      }}
    >
      <swiper-container
        style={{
          background:"red",
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
          <img src={slider3} alt=""/>
        </swiper-slide>
        <swiper-slide  >
          <img src={slider5} alt=""/>
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
          <img src={slider5} alt=""/>
        </swiper-slide>
        <swiper-slide >
          <img src={slider5} alt=""/>
        </swiper-slide>
        ...
      </swiper-container>
    </div>
  );
};

export default Carousel;
