import React from "react";
import HeaderActions from "./HeaderActions";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <HeaderActions />
    </header>
  );
};

export default Header;
