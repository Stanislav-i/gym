import { Container } from 'components/Container';
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { BurgerMenu, ColorSpan, Name, Wrapper } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Name>FORM<ColorSpan>FACTOR</ColorSpan></Name>
        <BurgerMenu>
          <HiMenu size="24px"/>
        </BurgerMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;
