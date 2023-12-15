import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 200px 0px 70px;
  text-align: center;

  @media (min-width: 744px) {
    padding: 250px 0px 83px;
    display: flex;
    justify-content: space-between;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (min-width: 1000px) {
        padding: 250px 30px 83px;
  }

  @media (min-width: 1600px) {
    padding: 260px 220px 80px;
  }
`;

export const VisuallyHidden = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const AboutText = styled.div`
    display: none;
    @media (min-width: 1000px) {
    width: 275px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
  }

`

export const TextBlock = styled.div`
  &:not(:last-child){
    padding-bottom: 30px;
  }

  @media (min-width: 744px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &.hidden{
    display: none;
  }
`;

export const Title = styled.h3`
  font-family: var(--h-family);
  font-weight: var(--fw-semi-bold);
  letter-spacing: 3px;
  padding-bottom: 30px;
`;

export const TextContent = styled.div`
  @media (min-width: 744px) {
    text-align: left;
  }
`;

export const ContactsItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 744px) {
    text-align: left;
    justify-content: start;
  }
`;
export const IconsDiv = styled.div`
padding-top: 30px;
  display: flex;
  justify-content: center;
  gap: 24px;
`;
export const IconItem = styled.li`
  cursor: pointer;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
       fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    stroke: var(--color-accent);
    fill: var(--color-accent);
  }
`;
