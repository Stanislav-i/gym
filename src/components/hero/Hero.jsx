import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { HeroText, Wrapper } from './Hero.styled';
import Header from 'components/header/Header';
import { ApplyButton } from 'components/buttons/ApplyButton.styled';
import ModalConnect from 'components/modals/ModalConnect';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDetailedBtnClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBtnClick = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <Wrapper>
      <Header />
      <HeroText>Free trial session with a trainer</HeroText>
      <ApplyButton
        $wdth={'177px'}
        $hgth={'52px'}
        onClick={handleDetailedBtnClick}
      >
        Detailed
      </ApplyButton>
      {showModal &&
        createPortal(
          <ModalConnect onClose={handleCloseBtnClick} />,
          document.body
        )}
    </Wrapper>
  );
};

export default Hero;
