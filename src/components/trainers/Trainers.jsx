import React from 'react';
import {
  SectionTitle,
  SwiperDiv,
  TrainersList,
  Wrapper,
} from './Trainers.styled';
import { trainers } from './trainersDB';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TrainerCard from './trainerCard/TrainerCard';

const Trainers = () => {
  return (
    <Wrapper id="trainers">
      <SectionTitle>Trainers staff</SectionTitle>
      <SwiperDiv>
        <Swiper
          breakpoints={{
            390: {
              spaceBetween: 20,
              slidesPerView: 1.4,
              initialSlide: 1,
              loop: true,
            },
            744: { spaceBetween: 20, slidesPerView: 2.4, initialSlide: 1 },
            1000: {
              spaceBetween: 20,
              slidesPerView: 2.4,
              initialSlide: 1,
              loop: false,
            },
          }}
          centeredSlides={true}
        >
          {trainers.map(({ name }, index) => (
            <SwiperSlide key={index}>
              <TrainerCard name={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperDiv>
      <TrainersList>
        {trainers.map(({ name }, index) => (
          <li key={index}>
            <TrainerCard name={name} />
          </li>
        ))}
      </TrainersList>
    </Wrapper>
  );
};

export default Trainers;
