import React from 'react';
import { IconItem, IconsDiv, ImgThumb, Name, Wrapper } from './TrainerCard.styled';
import sprite from '../../../pictures/sprite.svg';

const TrainerCard = ({name}) => {
    return (
        <Wrapper>
            <ImgThumb></ImgThumb>
            <Name>{name}</Name>
            <IconsDiv>
                <IconItem>
                <svg width="30" height="30" stroke='#ffffff'>
                <use href={sprite + '#icon-instagram'} />
              </svg>
              </IconItem>
              <IconItem>
              <svg width="30" height="30" stroke='#ffffff'>
                <use href={sprite + '#icon-twitter'} />
              </svg>
              </IconItem>
              <IconItem>
              <svg width="30" height="30" stroke='#ffffff'>
                <use href={sprite + '#icon-youtube'} />
              </svg>
              </IconItem>
            </IconsDiv>
        </Wrapper>
    );
};

export default TrainerCard;