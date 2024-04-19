import styled from "styled-components";
import NavIcon from "../../atoms/NavIcon";
import NavList from "../../atoms/NavList";

const HeaderNavArea = styled.div`
  //   display: flex;
`;

export default function HeaderNav() {
  return (
    <HeaderNavArea>
      <NavIcon />
      <NavList />
    </HeaderNavArea>
  );
}
