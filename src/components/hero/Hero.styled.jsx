import styled from "styled-components";
import heroBgImg from '../../pictures/hero-img-2.jpg'

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
    url('${heroBgImg}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 80px 0;
     
    margin-top: 60px;

`
export const HeroText = styled.h1`
    font-family: var(--h-family);
    padding: 90px 37px 100px;
    text-align: center;
    font-size: 48px;
`