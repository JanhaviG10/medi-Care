import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from "styled-components";

import image1 from './SliderImages/slider1.png';
import image2 from './SliderImages/slider2.png';
import image3 from './SliderImages/slider3.png';

export default function HomePageSlider() {
    return (
        <Carousel fade={true} className='carousel'>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}
