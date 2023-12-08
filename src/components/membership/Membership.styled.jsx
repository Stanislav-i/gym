import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;



    @media (min-width: 744px){

    }

    @media (min-width: 1000px){

    }

    @media (min-width: 1600px){

    }
`

export const SectionTitle = styled.h2`
display: inline-block;
width: 100%;
text-align: center;
    padding-bottom: 70px;

    @media (min-width: 744px){
        padding-bottom: 100px;
        font-size: var(--fs-h2);
    }

    @media (min-width: 1000px){
        padding-bottom: 120px;
        font-size: var(--fs-h2);
    }

    @media (min-width: 1600px){

    }
`

export const MembershipList = styled.ul`
    display: flex;
    flex-direction: column;
`