import { Link } from "react-router-dom";
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
        <Link to="issue">Issue</Link>
      </LogoLinksItem>
      <LogoLinksItem>
        <Link to="pullrequest">Pull Request</Link>
      </LogoLinksItem>
    </LogoLinksList>
  );
}
