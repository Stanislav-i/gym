import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 300ms linear, visibility 300ms linear;
    z-index: 1;
`

export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(1);

    height: 290px;
    width: 290px;
    background: var(--color-bg-cards);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    transition: transform 300ms linear;
    padding: 24px;

    &.burgerMenu{
        width: 200px;
        height: 250px;
    }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background-color: var(--color-bg-cards);
  color: white;
`;

export const BurgerNavList = styled.nav`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    padding-top: 50px;
`

export const ModalFormInput = styled.input`
    width: 250px;
    height: 25px;
    background-color: var(--color-bg);
    color: var(--color-text);
`