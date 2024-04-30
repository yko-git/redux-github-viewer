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

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  padding: 0 8px;
`;

const InputArea = styled.div`
  padding: 32px 0px 16px;
`;

const InputBlock = styled.div`
  padding: 16px;
`;

const InputLavel = styled.label`
  display: block;
  padding: 8px 0px;
`;

const TextField = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

const Textarea = styled(Input)`
  min-height: 150px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const CloseLink = styled(Link)`
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 4px 6px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  font-size: 1rem;
  text-decoration: none;
`;

const ModalBlock = ({ name, inputText, addList }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <ButtonLink children="New" variant="new" handleClick={openModal} />
      <ModalWrapper isOpen={modalIsOpen}>
        <ModalInner>
          <ModalTitle>Issueを追加</ModalTitle>
          <InputArea>
            <InputBlock>
              <InputLavel>タイトル</InputLavel>
              <TextField>
                <Input
                  placeholder="タイトルを入力してください"
                  value={name}
                  onChange={inputText}
                ></Input>
              </TextField>
            </InputBlock>
            <InputBlock>
              <InputLavel>説明</InputLavel>
              <TextField>
                <Textarea placeholder="説明を入力してください"></Textarea>
              </TextField>
            </InputBlock>
          </InputArea>
          <Buttons>
            <div onClick={addList}>
              <ButtonLink variant="new" children="作成" />
            </div>

            <CloseLink onClick={() => setIsOpen(false)}>閉じる</CloseLink>
          </Buttons>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};
export default ModalBlock;
