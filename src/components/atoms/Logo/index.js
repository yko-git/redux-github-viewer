import styled from "styled-components";

const LogoLink = styled.a`
  color: white;
`;
const LogoLinkItem = styled.h1`
  margin: 0;
  padding: 0;
`;

export default function Logo() {
  return (
    <LogoLink>
      <LogoLinkItem>Github Viewer</LogoLinkItem>
    </LogoLink>
  );
}
