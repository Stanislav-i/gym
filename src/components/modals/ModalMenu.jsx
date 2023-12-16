import React from 'react';
import { BackDrop, CloseBtn, BurgerNavList, Modal } from './Modals.styled';
import { HeaderNavlistItem } from 'components/header/Header.styled';

const ModalMenu = ({onClose}) => {
    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
      };
  return (
    <BackDrop onClick={handleOverlayClick}>
      <Modal className='burgerMenu'>
        <CloseBtn onClick={onClose}>
          &times;
        </CloseBtn>
        <BurgerNavList>
        <HeaderNavlistItem className='burger' href="#advantages" onClick={onClose}>Advantages</HeaderNavlistItem>
        <HeaderNavlistItem className='burger' href="#membership" onClick={onClose}>Membership</HeaderNavlistItem>
        <HeaderNavlistItem className='burger' href="#about" onClick={onClose}>About</HeaderNavlistItem>
        <HeaderNavlistItem className='burger' href="#trainers" onClick={onClose}>Trainers</HeaderNavlistItem>
      </BurgerNavList>
      </Modal>
    </BackDrop>
  );
};

export default ModalMenu;
