import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 200px 37px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 744px){
        padding: 140px 80px 180px;
    }

    @media (min-width: 1000px){
        padding: 160px 30px 200px;
    }

    @media (min-width: 1600px){
        padding: 180px 220px 250px;
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
        text-align: left;
    }
`

export const SectionList = styled.ul`
    @media (min-width: 1000px) {
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 80px 60px;
    }

    @media (min-width: 1600px) {
    grid-gap: 86px 117px;
    }
`

export const SectionLitem = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 40px;

    &:last-child {
    padding-bottom: 0px;
  }

    @media (min-width: 1000px) {
padding-bottom: 0;
    }
`
export const SectionLitemTextWrapper = styled.div`

`

export const SectionLitemTitle = styled.h3`
    padding-bottom: 14px;
    font-weight: var(--fw-semi-bold);
`
export const SectionLitemText = styled.p`
    font-family: var(--text-family);
    font-weight: var(--fs-sm);
`