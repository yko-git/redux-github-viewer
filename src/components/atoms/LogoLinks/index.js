import styled from "styled-components";

const LogoLinksItem = styled.a`
  color: white;
`;

export default function LogoLinks() {
  return (
    <>
      <LogoLinksItem a herf="/">
        Issue
      </LogoLinksItem>
      <LogoLinksItem a herf="/">
        Pull Request
      </LogoLinksItem>
    </>
  );
}
