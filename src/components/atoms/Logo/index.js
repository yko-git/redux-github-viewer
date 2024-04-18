import styled from "styled-components";

const LogoLink = styled.a`
  color: red;
`;
const H1 = styled.h1`
  font-size: 2rem;
`;

export default function Logo() {
  return (
    <LogoLink a herf="/">
      <H1>Github Viewer</H1>
    </LogoLink>
  );
}
