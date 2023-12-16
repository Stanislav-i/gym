import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { HiMenu } from 'react-icons/hi';
import {
  BurgerMenu,
  ColorSpan,
  HeaderNavList,
  HeaderNavlistItem,
  Name,
  Wrapper,
} from './Header.styled';
import ModalMenu from 'components/modals/ModalMenu';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBurgerMenuClick = ()=>{
    setShowModal(true)
    document.body.style.overflow = 'hidden';
  }

  const handleCloseBtnClick = ()=>{
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }


  return (
    <Wrapper>
      <Name>
        Form<ColorSpan>Factor</ColorSpan>
      </Name>
      <BurgerMenu onClick={handleBurgerMenuClick}>
        <HiMenu size="24px" />
      </BurgerMenu>
      <HeaderNavList>
        <HeaderNavlistItem href="#advantages">Advantages</HeaderNavlistItem>
        <HeaderNavlistItem href="#membership">Membership</HeaderNavlistItem>
        <HeaderNavlistItem href="#about">About</HeaderNavlistItem>
        <HeaderNavlistItem href="#trainers">Trainers</HeaderNavlistItem>
      </HeaderNavList>
      {showModal && createPortal(
        <ModalMenu onClose={handleCloseBtnClick} />,
        document.body
      )}
    </Wrapper>
    
  );
};

export default Header;
