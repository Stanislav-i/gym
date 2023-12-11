import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { BurgerMenu, ColorSpan, HeaderNavList, HeaderNavlistItem, Name, Wrapper } from './Header.styled';

const Header = () => {
  return (
      <Wrapper>
        <Name>Form<ColorSpan>Factor</ColorSpan></Name>
        <BurgerMenu>
          <HiMenu size="24px"/>
        </BurgerMenu>
        <HeaderNavList>
          <HeaderNavlistItem href="#advantages">Advantages</HeaderNavlistItem>
          <HeaderNavlistItem href="#membership">Membership</HeaderNavlistItem>
          <HeaderNavlistItem href="#about">About</HeaderNavlistItem>
          <HeaderNavlistItem>Trainers</HeaderNavlistItem>
        </HeaderNavList>
      </Wrapper>
  );
};

export default Header;
