'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const SliderCarousel = styled(Slider)`

  .slick-prev:before, .slick-next:before{
    color: var(--dark-color-rgb);
    font-size: 40px;
  } 
`

const Carousel = () => {

    const settings = {
        dots: true,
        number: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        customPaging: (i) => (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" , fontSize: "17px"}}>
            {i + 1}
          </div>
        ),
     
    };
    
    return (
      <div>
        <SliderCarousel {...settings}>
        <div>
          <h4>Finanzas</h4>
          <iframe title="Sample Finanzas"width="80%" height="420" src="https://app.powerbi.com/view?r=eyJrIjoiM2MwNGZkNjItMDRkMS00ZGNhLWJjYmEtZGI2NTVmM2FiZjMwIiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9" frameborder="0" allowFullScreen="true"/>
        </div>
        <div>
          <h4>Recursos humanos</h4>
          <iframe title="HR Sample" width="80%" height="420" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ0NmNhOGItOGJmYy00MDYyLTk0ODItZDgxMDUzZDNmNmE0IiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9" frameborder="0" allowFullScreen="true"/>
        </div>
        <div>
          <h4>Inventarios</h4>
          <iframe title="Report Section" width="80%" height="420" src="https://app.powerbi.com/view?r=eyJrIjoiODI5NTM0YTAtOTFjMi00NjdhLWFiMzMtZGYwZDc4MTE0MGJhIiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9" frameborder="0" allowFullScreen="true"/>
        </div>
        </SliderCarousel>
      </div>
    );
  
}

export default Carousel;

{/* <iframe title="HR Sample" width="100%" height="520px" padding="30px" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ0NmNhOGItOGJmYy00MDYyLTk0ODItZDgxMDUzZDNmNmE0IiwidCI6IjNlMDUxM2Q2LTY4ZmEtNDE2ZS04ZGUxLTZjNWNkYzMxOWZmYSIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> */}
