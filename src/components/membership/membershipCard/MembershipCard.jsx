import React from 'react';
import {
  LitemImg,
  LitemList,
  LitemP,
  LitemText,
  LitemTitle,
  Wrapper,
  YellowBtnCont,
} from './MembershipCard.styled';
import sprite from '../../../pictures/sprite.svg';
import { YellowButton } from 'components/YellowButton/YellowButton.styled';

const MembershipCard = ({ pass, cost, features }) => {
  return (
    <Wrapper>
      <LitemTitle>Pass "{pass}"</LitemTitle>
      <LitemTitle className="cost">${cost}</LitemTitle>
      <LitemList>
        {features.map((text, index) => (
          <LitemText key={index}>
            <LitemImg>
              <svg width="20" height="20">
                <use href={sprite + '#icon-checkmark'} />
              </svg>
            </LitemImg>
            <LitemP>{text}</LitemP>
          </LitemText>
        ))}
      </LitemList>
      <YellowBtnCont>
        <YellowButton
          $wdth={'107px'}
          $hgth={'30px'}
          $pd={'6px 38px'}
          $fs={'var(--fs-sm)'}
        >
          Buy
        </YellowButton>
      </YellowBtnCont>
    </Wrapper>
  );
};

export default MembershipCard;
