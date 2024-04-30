import styled from "styled-components";
import { variant } from "styled-system";

const variants = {
  new: {
    backgroundColor: "rgb(66, 195, 96)",
    borderBottom: "2px solid rgb(40, 167, 69)",
  },
  delete: {
    backgroundColor: "rgb(215, 58, 73)",
    borderBottom: "2px solid rgb(175, 28, 42)",
  },
};

export const ButtonLink = styled.div`
  ${variant({ variants })}
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
`;

ButtonLink.defaultProps = {
  variant: "new",
};

export default function Button({ children, handleClick }) {
  return <ButtonLink onClick={handleClick}>{children}</ButtonLink>;
}
