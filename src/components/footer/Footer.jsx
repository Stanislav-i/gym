import React from 'react';
import {
  AboutText,
  ContactsItemWrapper,
  IconItem,
  IconsDiv,
  TextBlock,
  TextContent,
  Title,
  VisuallyHidden,
  Wrapper,
} from './Footer.styled';
import sprite from '../../pictures/sprite.svg';
import { ColorSpan, Name } from 'components/header/Header.styled';

const Footer = () => {
  return (
    <Wrapper>
      <VisuallyHidden>Contacts</VisuallyHidden>
      <AboutText>
        <Name className="footerName">
          Form<ColorSpan>Factor</ColorSpan>
        </Name>
        <TextContent>
          Cutting-edge fitness facility designed to transform your workout
          experience.
        </TextContent>
      </AboutText>
      <TextBlock>
        <Title>Address</Title>
        <TextContent>
          United States <br />
          New-York <br />
          Ukraine Avenue 1991
        </TextContent>
      </TextBlock>
      <TextBlock>
        <Title>Contacts</Title>
        <TextContent>
          <ContactsItemWrapper>
            <span>
              <svg width="20" height="20">
                <use href={sprite + '#icon-call'} />
              </svg>
            </span>
            <span>111-11-111-111</span>
          </ContactsItemWrapper>
          <ContactsItemWrapper>
            <span>
              <svg width="20" height="20">
                <use href={sprite + '#icon-email'} />
              </svg>
            </span>
            <span>formfactorgym@gmail.com</span>
          </ContactsItemWrapper>
        </TextContent>
        <IconsDiv>
          <IconItem>
            <svg width="30" height="30" stroke="#ffffff">
              <use href={sprite + '#icon-instagram'} />
            </svg>
          </IconItem>
          <IconItem>
            <svg width="30" height="30" stroke="#ffffff">
              <use href={sprite + '#icon-facebook'} />
            </svg>
          </IconItem>
          <IconItem>
            <svg width="30" height="30" stroke="#ffffff">
              <use href={sprite + '#icon-youtube'} />
            </svg>
          </IconItem>
          <IconItem>
            <svg width="30" height="30" stroke="#ffffff">
              <use href={sprite + '#icon-twitter'} />
            </svg>
          </IconItem>
        </IconsDiv>
      </TextBlock>
    </Wrapper>
  );
};

export default Footer;
