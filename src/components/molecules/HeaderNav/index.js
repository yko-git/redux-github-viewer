import styled from "styled-components";
import NavIcon from "../../atoms/NavIcon";
import NavList from "../../atoms/NavList";
import { useState } from "react";

const HeaderNavArea = styled.div`
  //   display: flex;
`;

export default function HeaderNav() {
  const [navClick, setNavClick] = useState("hidden");

  function handleClick() {
    if (navClick === "hidden") {
      setNavClick("active");
    } else {
      setNavClick("hidden");
    }
  }
  return (
    <HeaderNavArea className={navClick} onClick={handleClick}>
      <NavIcon />
      <NavList />
    </HeaderNavArea>
  );
}
