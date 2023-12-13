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
            <svg width="40" height="40" className='svg'>
                <use href={sprite + '#icon-inst'} />
              </svg>
              </IconItem>
              <IconItem>
              <svg width="40" height="40" className='svg'>
                <use href={sprite + '#icon-twit'} />
              </svg>
              </IconItem>
              <IconItem>
              <svg width="40" height="40" className='svg'>
                <use href={sprite + '#icon-yt'} />
              </svg>
              </IconItem>
            </IconsDiv>
        </Wrapper>
    );
};

export default TrainerCard;