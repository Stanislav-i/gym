import React from 'react';
import {
  AboutText,
  ImgThumb,
  SectionTitle,
  SwiperControlItem,
  SwiperControlItemDiv,
  SwiperControlsDiv,
  SwiperDiv,
  TextWrapper,
  Wrapper,
} from './About.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import sprite from '../../pictures/sprite.svg';

import gymImg1 from '../../pictures/gym 1.jpg';
import gymImg2 from '../../pictures/gym 2.jpg';
import gymImg3 from '../../pictures/gym 3.jpg';
import gymImg4 from '../../pictures/gym 4.jpg';

const About = () => {
  return (
    <Wrapper id="about">
      <TextWrapper>
        <SectionTitle>About us</SectionTitle>
        <AboutText>
          Welcome to our modern gym, where fitness meets innovation.
        </AboutText>
        <AboutText>
          At our state-of-the-art facility, we redefine the fitness experience
          with cutting-edge equipment, expert trainers, and a dynamic
          atmosphere. Whether you're a seasoned athlete or just starting your
          fitness journey, our diverse range of classes and personalized
          training programs cater to all levels and goals.
        </AboutText>
        <AboutText>
          Join our vibrant community committed to health and wellness, and
          embark on a transformative fitness adventure.{' '}
        </AboutText>
        <AboutText>
          Discover the power of a modern gym designed to inspire, motivate, and
          elevate your fitness journey to new heights.
        </AboutText>
      </TextWrapper>
      <SwiperDiv>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            390: { spaceBetween: 20, slidesPerView: 1.4, initialSlide: 1 },
            744: { spaceBetween: 27, slidesPerView: 1.3, initialSlide: 1 },
            1000: { spaceBetween: 0, slidesPerView: 1, initialSlide: 0 },
          }}
          centeredSlides={true}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: false,
          }}
        >
          <SwiperSlide>
            <ImgThumb $bgi={gymImg1}></ImgThumb>
          </SwiperSlide>
          <SwiperSlide>
            <ImgThumb $bgi={gymImg2}></ImgThumb>
          </SwiperSlide>
          <SwiperSlide>
            <ImgThumb $bgi={gymImg3}></ImgThumb>
          </SwiperSlide>
          <SwiperSlide>
            <ImgThumb $bgi={gymImg4}></ImgThumb>
          </SwiperSlide>
        </Swiper>
        <SwiperControlsDiv>
          <div className="swiper-pagination"></div>
          <SwiperControlItemDiv>
            <SwiperControlItem className="prev">
              <svg width="40" height="20" stroke="#ffffff" fill="#ffffff">
                <use href={sprite + '#icon-arrow-left2'} />
              </svg>
            </SwiperControlItem>
            <SwiperControlItem className="next">
              <svg width="40" height="20" stroke="#ffffff" fill="#ffffff">
                <use href={sprite + '#icon-arrow-right2'} />
              </svg>
            </SwiperControlItem>
          </SwiperControlItemDiv>
        </SwiperControlsDiv>
      </SwiperDiv>
    </Wrapper>
  );
};

export default About;
