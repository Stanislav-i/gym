import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 37px;
    width: 100%;

    @media (min-width: 744px) {
        padding: 0;
  }
`
export const Name = styled.div`
    font-family: var( --title-family);
    font-size: 24px;
`
export const BurgerMenu = styled.div`
    cursor: pointer;

    @media (min-width: 744px) {
       display: none;
  }
`

export const ColorSpan = styled.span`
    color: var(--color-accent);
`

export const HeaderNavList = styled.nav`
    display: none;
    gap: 75px;

    @media (min-width: 744px) {
       display: flex;
  }
`
export const HeaderNavlistItem = styled.a`
    color: var(--color-text);
    font-family: var(--text-family);
    font-size: var(--fs-sm);
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: var(--color-accent);
    }
`