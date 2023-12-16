import styled from 'styled-components';
import heroBgImgMobile from '../../pictures/hero-img-mobile.jpg';
import heroBgImgTablet from '../../pictures/hero-img-tablet.jpg';
import heroBgImgDesktop from '../../pictures/hero-img-desktop.jpg';
import heroBgImgDesktopLarge from '../../pictures/hero-img-desktoplarge.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 408px;

  background-image: linear-gradient(
      to right,
      #000000 25%,
      rgba(15, 15, 15, 0) 150%
    ),
    url('${heroBgImgMobile}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 80px 0;

  margin-top: 60px;

  @media (min-width: 744px) {
    height: 604px;
    margin-top: 0;
    padding: 40px 20px 94px 20px;
    align-items: start;

    background-image: linear-gradient(
        to right,
        #000000 10%,
        rgba(15, 15, 15, 0) 50%
      ),
      linear-gradient(to top, #000000 2%, rgba(15, 15, 15, 0) 30%),
      url('${heroBgImgTablet}');
    background-position: 290px 0;
  }

  @media (min-width: 1000px) {
    height: 791px;
    padding: 40px 30px;

    background-image: linear-gradient(
        to right,
        #000000 10%,
        rgba(15, 15, 15, 0) 50%
      ),
      linear-gradient(to top, #000000 2%, rgba(15, 15, 15, 0) 30%),
      url('${heroBgImgDesktop}');
    background-position: 300px 0;
  }

  @media (min-width: 1600px) {
    padding-left: 220px;
    padding-right: 220px;

    background-image: linear-gradient(
        to right,
        #000000 10%,
        rgba(15, 15, 15, 0) 50%
      ),
      linear-gradient(to top, #000000 2%, rgba(15, 15, 15, 0) 30%),
      linear-gradient(to left, #000000 50%, rgba(15, 15, 15, 0) 70%),
      url('${heroBgImgDesktopLarge}');
    background-position: 650px 0;
  }
`;

export const HeroText = styled.h1`
  font-family: var(--h-family);
  padding: 90px 37px 75px;
  text-align: center;
  font-size: 48px;

  @media (min-width: 744px) {
    padding: 200px 250px 60px 0px;
    font-size: 58px;
    text-align: left;
  }

  @media (min-width: 1000px) {
    padding-top: 228px;
    font-size: 58px;
    text-align: left;
    width: 700px;
  }
`;
