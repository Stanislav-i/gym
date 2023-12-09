import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: 744px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1000px) {
  }

  @media (min-width: 1600px) {
  }
`;

export const SwiperDiv = styled.div`
  @media (min-width: 744px) {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-bottom: 70px;

  @media (min-width: 744px) {
    padding-bottom: 100px;
    font-size: var(--fs-h2);
  }

  @media (min-width: 1000px) {
    padding-bottom: 120px;
    font-size: var(--fs-h2);
  }

  @media (min-width: 1600px) {
  }
`;

export const MembershipList = styled.ul`
  display: none;

  @media (min-width: 744px) {
    width: fit-content;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 34px;

    @media (min-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 56px;
    }

    @media (min-width: 1600px) {
      grid-gap: 68px;
    }
  }
`;
