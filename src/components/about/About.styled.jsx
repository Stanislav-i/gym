import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 200px;

    @media (min-width: 1000px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 1600px) {
        padding: 200px 220px 0;
    }
`;
export const TextWrapper = styled.div`
  padding: 0 54px;

  @media (min-width: 1000px) {
        width: 472px;
        padding-left: 30px;
        padding-right: 0;
    }

    @media (min-width: 1600px) {
        padding: 0;
    }
`;

export const SectionTitle = styled.h2`
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-bottom: 50px;

  @media (min-width: 744px) {
    padding-bottom: 90px;
    font-size: var(--fs-h2);
  }

  @media (min-width: 1000px) {
    text-align: start;
    padding-bottom: 65px;
    font-size: var(--fs-h2);
  }

  @media (min-width: 1600px) {
  }
`;

export const AboutText = styled.p`
  font-family: var(--text-family);
  font-weight: var(--fs-sm);
  padding-bottom: 15px;

  &:last-child {
    padding-bottom: 60px;
    @media (min-width: 744px) {
      padding-bottom: 80px;
    }
  }
`;

export const SwiperDiv = styled.div`
  @media (min-width: 1000px) {
    width: 403px;
    margin-right: 30px;
  }

  @media (min-width: 1600px) {
    width: 570px;
    margin: 0;
  }
`;

export const ImgThumb = styled.div`
  width: 280px;
  height: 210px;
  border-radius: 15px;
  background-image: url('${props => props.$bgi}');
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 744px) {
    width: 570px;
    height: 430px;
  }

  @media (min-width: 1000px) {
    width: 403px;
    height: 305px;
  }

  @media (min-width: 1600px) {
    width: 570px;
    height: 430px;
  }
`;
