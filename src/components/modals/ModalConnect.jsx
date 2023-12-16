import React from 'react';
import {
  BackDrop,
  CloseBtn,
  Modal,
  ModalForm,
  ModalFormInput,
} from './Modals.styled';
import { ApplyButton } from 'components/buttons/ApplyButton.styled';

const ModalConnect = ({ onClose }) => {
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

const handleSubmit = (e) => {
    e.preventDefault();
    onClose();   
}
  return (
    <BackDrop onClick={handleOverlayClick}>
      <Modal>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <ModalForm onSubmit={handleSubmit}>
          <ModalFormInput placeholder='Enter your name'/>
          <ModalFormInput placeholder='Enter your phone'/>
            <ApplyButton
                type='submit'
              $wdth={'200px'}
              $hgth={'30px'}
              $pd={'6px 38px'}
              $fs={'var(--fs-sm)'}
            >
              Call me back!
            </ApplyButton>
        </ModalForm>
      </Modal>
    </BackDrop>
  );
};

export default ModalConnect;
