import styled from "styled-components";
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import ButtonLink from "../../atoms/Button";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const ModalWrapper = styled(Modal)`
  width: 60%;
  margin: auto;
  background: rgb(255, 255, 255);
  position: absolute;
  inset: 40px;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  border: 1px solid rgb(204, 204, 204);
`;

const ModalInner = styled.div`
  max-width: 598px;
  margin: auto;
`;

const ModalBlock = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <ButtonLink primary="true" name="Open" handleClick={openModal} />
      <ModalWrapper isOpen={modalIsOpen}>
        <ModalInner>
          <Link onClick={() => setIsOpen(false)}>閉じる</Link>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};
export default ModalBlock;
