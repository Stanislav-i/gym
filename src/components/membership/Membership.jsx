import React from 'react';
import {
  MembershipList,
  SectionTitle,
  SwiperDiv,
  Wrapper,
} from './Membership.styled';
import MembershipCard from './membershipCard/MembershipCard';
import { memberships } from './membershipDB';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Membership = () => {
  return (
    <Wrapper id="membership">
      <SectionTitle>Gym membership</SectionTitle>
      <SwiperDiv>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.4}
          centeredSlides={true}
          initialSlide={1}
          // loop={true}
        >
          {memberships.map(({ pass, cost, features }, index) => (
            <SwiperSlide key={index}>
              <MembershipCard pass={pass} cost={cost} features={features} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperDiv>
      <MembershipList>
        {memberships.map(({ pass, cost, features }, index) => (
          <li key={index}>
            <MembershipCard pass={pass} cost={cost} features={features} />
          </li>
        ))}
      </MembershipList>
    </Wrapper>
  );
};

export default Membership;
