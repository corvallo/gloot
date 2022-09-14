import { memo } from "react";
import useModalStore from "../../store/modal";
import usePlayersStore from "../../store/players";

const HeaderActions: React.FC = () => {
  const { loading } = usePlayersStore((state) => state);
  const open = useModalStore((state) => state.open);

  return (
    <div className="header__actions">
      <button type="button" role="button" disabled={loading} onClick={() => open()} aria-label="Create new player">
        Create New Player
      </button>
    </div>
  );
};
export default memo(HeaderActions);
