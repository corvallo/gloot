import React from "react";
import usePlayersStore from "../../store/players";

const Header: React.FC = () => {
  const addPlayer = usePlayersStore((state) => state.addPlayer);

  return (
    <header>
      <div className="header__logo">
        <img src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" />
      </div>
      <div className="header__actions">
        <button onClick={() => addPlayer("FRANCESCO STALLO")}>Add New Player</button>
      </div>
    </header>
  );
};

export default Header;
