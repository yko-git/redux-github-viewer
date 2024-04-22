import styled from "styled-components";

const LogoLinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
const LogoLinksItem = styled.li`
  color: white;
  margin-right: 16px;
`;

const LogoLinksLink = styled.a`
  color: white;
`;

export default function LogoLinks() {
  return (
    <LogoLinksList>
      <LogoLinksItem>
        <LogoLinksLink as="a" herf="/issue/">
          Issue
        </LogoLinksLink>
      </LogoLinksItem>
      <LogoLinksItem>
        <LogoLinksLink as="a" herf="/pullrequest/">
          Pull Request
        </LogoLinksLink>
      </LogoLinksItem>
    </LogoLinksList>
  );
}
