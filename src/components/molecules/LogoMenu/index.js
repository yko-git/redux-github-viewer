import styled from "styled-components";
import Logo from "../../atoms/Logo";
import LogoLinks from "../../atoms/LogoLinks";

const LogoArea = styled.div`
  display: flex;
  align-items: center;
`;

export default function LogoMenu() {
  return (
    <LogoArea>
      <Logo />
      <LogoLinks />
    </LogoArea>
  );
}
