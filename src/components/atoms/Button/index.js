import styled from "styled-components";

const ButtonLink = styled.div`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  background: ${(props) =>
    props.primary ? "rgb(66, 195, 96)" : "rgb(215, 58, 73)"};
  border-bottom: ${(props) =>
    props.primary
      ? "2px solid rgb(40, 167, 69)"
      : "2px solid rgb(175, 28, 42)"};
`;

export default function Button({ name, primary }) {
  return <ButtonLink primary={primary}>{name}</ButtonLink>;
}
