import styled from 'styled-components';
import trainer from '../../../pictures/trainer.jpg'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222222;
  border-radius: 15px;
  width: 275px;
  height: 450px;
  padding: 22px 20px 30px;

  &:hover {
    border: 1px solid var(--color-accent);
  }
`;

export const ImgThumb = styled.div`
    width: 238px;
    height: 297px;
    border-radius: 15px;
    background-image: url(${trainer});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Name = styled.p`
    padding: 18px 0;
`

export const IconsDiv = styled.ul`
display: flex;
gap: 15px;
`

export const IconItem = styled.li`
      &:hover {
      stroke: var(--color-accent);
  }
`