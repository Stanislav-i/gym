import { Container } from 'components/Container';
import React from 'react';
import { HeroText, Wrapper } from './Hero.styled';
import Header from 'components/header/Header';
import { YellowButton } from 'components/YellowButton/YellowButton.styled';

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Header />
                <HeroText>Free trial session with a trainer</HeroText>
                <YellowButton $wdth={'177px'} $hgth={'52px'}>Detailed</YellowButton>
            </Wrapper>
        </Container>
    );
};

export default Hero;