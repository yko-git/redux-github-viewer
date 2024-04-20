import NavIcon from "../../atoms/NavIcon";
import NavList from "../../atoms/NavList";
import { useState } from "react";

export default function HeaderNav() {
  const [navClick, setNavClick] = useState(false);

  function handleClick() {
    setNavClick(!navClick);
  }
  return (
    <div onClick={handleClick}>
      <NavIcon />
      {navClick && <NavList />}
    </div>
  );
}
