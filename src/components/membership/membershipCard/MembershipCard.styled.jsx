import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-cards);
  border-radius: 15px;
  width: 275px;
  height: 400px;

  &:hover {
    border: 1px solid var(--color-accent);
    .cost,
    .pass {
      background-color: var(--color-accent);
      border: 1px solid var(--color-accent);
      color: black;
    }
    .svg {
      stroke: var(--color-accent);
    }
  }
`;

export const LitemTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: var(--fs-lg);
  font-weight: var(--fw-semi-bold);
  padding: 22px 0 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  &.cost {
    font-size: 22px;
    padding: 0 0 22px;
    border-bottom: 2px solid black;
    border-radius: 0;
  }
`;
export const LitemList = styled.ul`
  padding: 0 23px;
`;
export const LitemText = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--fs-md);
  padding-bottom: 15px;

  &:first-child {
    padding-top: 27px;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;
export const LitemImg = styled.span`
  padding-right: 6px;
`;
export const LitemP = styled.p``;

export const ApplyBtnCont = styled.div`
  position: absolute;
  bottom: 38px;
`;
