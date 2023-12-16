import styled from 'styled-components';
import trainer from '../../../pictures/trainer.jpg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-cards);
  border-radius: 15px;
  width: 275px;
  height: 450px;
  padding: 22px 20px 30px;
`;

export const ImgThumb = styled.div`
  width: 238px;
  height: 297px;
  border-radius: 15px;
  background-image: url(${trainer});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Name = styled.p`
  padding: 18px 0;
`;

export const IconsDiv = styled.ul`
  display: flex;
  gap: 15px;
`;

export const IconItem = styled.li`
  fill: #222222;
  cursor: pointer;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    fill: var(--color-accent);
  }
`;
