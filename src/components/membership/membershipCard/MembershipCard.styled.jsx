import styled from 'styled-components';

export const Wrapper = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    border-radius: 15px;
    width: 275px;
    height: 400px;

`

export const LitemTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: var(--fs-lg);
    font-weight: var(--fw-semi-bold);
    padding: 22px 0 10px;

    &.cost{
        font-size: 22px;
        padding: 0 0 22px;
        border-bottom: 2px solid black;
    }
`
export const LitemList = styled.ul`
    padding: 0 23px;
`
 export const LitemText = styled.li`
    display: flex;
    align-items: center;
    font-size: var(--fs-md);
    padding-bottom: 15px;

    &:first-child{
        padding-top: 27px;
    }

    &:last-child{
        padding-bottom: 0;
    }

` 
export const LitemImg = styled.span`
    padding-right: 6px;
`
export const LitemP = styled.p`
    
`

export const YellowBtnCont = styled.div`
position: absolute;
bottom: 38px;
`