import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #14102e;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1d28f2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 200ms ease-in-out;
  @media (max-width: 900px) {
    margin: 17px 10px 10px 5px;
    ${"" /* display: none; */}
  }
  :hover {
    background-color: #138af2;
  }
`;

const Modal = ({ message, onClose }) => (
  <ModalOverlay>
    <ModalContent>
      <p style={{ padding: "10px 20px 20px 20px" }}>{message}</p>
      <button onClick={onClose}>
        <Button>Close</Button>
      </button>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
