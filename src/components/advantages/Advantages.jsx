import { Container } from 'components/Container';
import React from 'react';
import {
  SectionList,
  SectionLitem,
  SectionLitemText,
  SectionLitemTextWrapper,
  SectionLitemTitle,
  SectionTitle,
  Wrapper,
} from './Advantages.styled';
import sprite from '../../pictures/sprite.svg';

const Advantages = () => {
  return (
    <Container>
      <Wrapper id="advantages">
        <SectionTitle>Reasons to join</SectionTitle>
        <SectionList>
          <SectionLitem>
            <span>
            <svg width="50" height="50" stroke="var(--color-accent)">
              <use href={sprite + '#icon-icon_line'} />
            </svg>
            </span>
            <SectionLitemTextWrapper>
                <SectionLitemTitle>15000 sq.m.</SectionLitemTitle>
                <SectionLitemText>A spacious gym for sports – a safe distance between exercise machines</SectionLitemText>
            </SectionLitemTextWrapper>
          </SectionLitem>
          <SectionLitem>
          <span>
            <svg width="50" height="50" stroke="var(--color-accent)">
              <use href={sprite + '#icon-icon_eq'} />
            </svg>
          </span>
            <SectionLitemTextWrapper>
                <SectionLitemTitle>More than 200 equipment</SectionLitemTitle>
                <SectionLitemText>No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.</SectionLitemText>
            </SectionLitemTextWrapper>
          </SectionLitem>
          <SectionLitem>
          <span>
            <svg width="50" height="50" stroke="var(--color-accent)">
              <use href={sprite + '#icon-icon_zones'} />
            </svg>
          </span>
            <SectionLitemTextWrapper>
                <SectionLitemTitle>4 fitness zones</SectionLitemTitle>
                <SectionLitemText>From cardio to functional and cycle. Separate area for boxing and mixed martial arts</SectionLitemText>
            </SectionLitemTextWrapper>
          </SectionLitem>
          <SectionLitem>
          <span>
            <svg width="50" height="50" stroke="var(--color-accent)">
              <use href={sprite + '#icon-icon_clock'} />
            </svg>
            </span>
            <SectionLitemTextWrapper>
                <SectionLitemTitle>Round-the-clock operation</SectionLitemTitle>
                <SectionLitemText>The gym is open 24 hours a day, also works on all holidays and weekends</SectionLitemText>
            </SectionLitemTextWrapper>
          </SectionLitem>
        </SectionList>
      </Wrapper>
    </Container>
  );
};

export default Advantages;
