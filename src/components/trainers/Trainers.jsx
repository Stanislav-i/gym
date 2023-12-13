import { Container } from 'components/Container';
import React from 'react';
import { SectionTitle, SwiperDiv, Wrapper } from './Trainers.styled';
import { trainers } from './trainersDB';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TrainerCard from './trainerCard/TrainerCard';

const Trainers = () => {
  return (
    <Container>
      <Wrapper id="trainers">
        <SectionTitle>Trainers staff</SectionTitle>
        <SwiperDiv>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.4}
            centeredSlides={true}
            initialSlide={1}
            loop={true}
          >
            {trainers.map(({ name }, index) => (
              <SwiperSlide key={index}>
                <TrainerCard name={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperDiv>
      </Wrapper>
    </Container>
  );
};

export default Trainers;
