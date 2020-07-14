import React from 'react';
import styled from 'styled-components';
import { H1 } from './Elements';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.translucentWhite};
`;

const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.bgGrey};
  box-shadow: 1px 2px 10px ${(props) => props.theme.colors.bgGrey};
  width: 100%;
  height: 100%;
  padding: 25px;

  @media screen and (min-width: 720px) {
    width: 600px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .close-btn {
    position: relative;
    height: 18px;
    width: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    &:after,
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2.5px; /* cross thickness */
      background-color: black;
    }

    &:before {
      transform: rotate(45deg);
      transition: 0.2s ease-in-out;
    }

    &:after {
      transform: rotate(-45deg);
      transition: 0.2s ease-in-out;
    }
  }
`;

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <H1>Transaction Details</H1>
          {onClose && <div className="close-btn" onClick={onClose} />}
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
