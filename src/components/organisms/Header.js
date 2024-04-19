import styled from "styled-components";
import LogoMenu from "../molecules/LogoMenu";

const HeaderArea = styled.div`
  background-color: #333333;
`;

export default function Header() {
  return (
    <HeaderArea>
      <LogoMenu />
    </HeaderArea>
  );
}
