'use client'
import Slider from "react-slick";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import style from "./style.module.css"
import useReveal from "@/hooks/useReveal";

const SliderCarousel = styled(Slider)`

  .slick-prev:before, .slick-next:before{
    color: var(--dark-color-rgb);
    font-size: 40px;
  } 
 
`

const slides = [
    {
        title: "Finanzas",
        frameTitle: "Sample Finanzas",
        src: "https://app.powerbi.com/view?r=eyJrIjoiM2MwNGZkNjItMDRkMS00ZGNhLWJjYmEtZGI2NTVmM2FiZjMwIiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9",
    },
    {
        title: "Recursos humanos",
        frameTitle: "HR Sample",
        src: "https://app.powerbi.com/view?r=eyJrIjoiNzQ0NmNhOGItOGJmYy00MDYyLTk0ODItZDgxMDUzZDNmNmE0IiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9",
    },
    {
        title: "Inventarios",
        frameTitle: "Report Section",
        src: "https://app.powerbi.com/view?r=eyJrIjoiODI5NTM0YTAtOTFjMi00NjdhLWFiMzMtZGYwZDc4MTE0MGJhIiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9",
    },
]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutRef, animation] = useReveal()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        customPaging: (i) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              fontSize: '17px',
              fontWeight: 'bold',
              color: i === currentSlide ? '#82469C' : 'grey',
              transition: 'color 0.3s ease-in-out',
            }}
          >
            {i + 1}
          </div>
        ),
        afterChange: (current) => {
          setCurrentSlide(current);
        },
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false
            }
          }
        ]
    };
    
    return (
      <div className={animation} ref={aboutRef}>
        <SliderCarousel {...settings}>
        {slides.map((slide) => (
          <div key={slide.title}>
            <h4>{slide.title}</h4>
            <iframe
              title={slide.frameTitle}
              className={style.frame}
              width="80%"
              height="420"
              src={slide.src}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
        </SliderCarousel>
      </div>
    );
  
}

export default Carousel;
