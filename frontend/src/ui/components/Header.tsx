import React from "react";
import useModalStore from "../../store/modal";
import usePlayersStore from "../../store/players";

const Header: React.FC = () => {
  const { updating, deleting, adding, addPlayer } = usePlayersStore((state) => state);
  const { open } = useModalStore((state) => state);
  return (
    <header>
      <div className="header__logo">
        <img src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" />
      </div>
      <div className="header__actions">
        <button disabled={adding || updating || deleting} onClick={() => open()}>
          Add New Player
        </button>
      </div>
    </header>
  );
};

export default Header;
