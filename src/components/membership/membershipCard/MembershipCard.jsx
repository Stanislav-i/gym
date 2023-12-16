import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  LitemImg,
  LitemList,
  LitemP,
  LitemText,
  LitemTitle,
  Wrapper,
  ApplyBtnCont,
} from './MembershipCard.styled';
import sprite from '../../../pictures/sprite.svg';
import { ApplyButton } from 'components/buttons/ApplyButton.styled';
import ModalConnect from 'components/modals/ModalConnect';

const MembershipCard = ({ pass, cost, features }) => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyBtnClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBtnClick = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <Wrapper>
      <LitemTitle className="pass">Pass "{pass}"</LitemTitle>
      <LitemTitle className="cost">${cost}</LitemTitle>
      <LitemList>
        {features.map((text, index) => (
          <LitemText key={index}>
            <LitemImg>
              <svg width="20" height="20" className="svg">
                <use href={sprite + '#icon-checkmark'} />
              </svg>
            </LitemImg>
            <LitemP>{text}</LitemP>
          </LitemText>
        ))}
      </LitemList>
      <ApplyBtnCont>
        <ApplyButton
          onClick={handleBuyBtnClick}
          $wdth={'107px'}
          $hgth={'30px'}
          $pd={'6px 38px'}
          $fs={'var(--fs-sm)'}
        >
          Buy
        </ApplyButton>
      </ApplyBtnCont>
      {showModal &&
        createPortal(
          <ModalConnect onClose={handleCloseBtnClick} />,
          document.body
        )}
    </Wrapper>
  );
};

export default MembershipCard;
