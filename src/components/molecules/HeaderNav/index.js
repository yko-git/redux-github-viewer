import styled from "styled-components";
import NavIcon from "../../atoms/NavIcon";
import NavList from "../../atoms/NavList";
import { useState } from "react";

const NavWrapper = styled.div`
  display: none;
  .active & {
    display: block;
  }
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
    <div class={navClick} onClick={handleClick}>
      <NavIcon />
      <NavWrapper>
        <NavList />
      </NavWrapper>
    </div>
  );
}
