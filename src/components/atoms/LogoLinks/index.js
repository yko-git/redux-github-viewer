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

export default function LogoLinks() {
  return (
    <LogoLinksList>
      <LogoLinksItem>
        <a herf="/profile/">Issue</a>
      </LogoLinksItem>
      <LogoLinksItem>
        <a herf="/">Pull Request</a>
      </LogoLinksItem>
    </LogoLinksList>
  );
}
