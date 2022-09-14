import { IPlayerCard } from "../../@typings/player";
import useModalStore from "../../store/modal";
import usePlayersStore from "../../store/players";

const PlayerCard: React.FC<IPlayerCard> = ({ style, player }) => {
  const { setSelectedPlayer, loading } = usePlayersStore((state) => state);
  const { open } = useModalStore((state) => state);
  return (
    <div className="item-container" style={{ ...style, width: "99%" }}>
      <div className="item">
        <div className="avatar">
          <span>{player.name[0]}</span>
        </div>
        <h2>{player.name}</h2>
        <div className="actions">
          <button
            title={`Edit player ${player.name}`}
            aria-label={`Edit player ${player.name}`}
            className="outline edit"
            disabled={loading}
            onClick={() => {
              setSelectedPlayer(player);
              open("update");
            }}
          >
            Edit
          </button>
          <button
            title={`Delete player ${player.name}`}
            aria-label={`Delete player ${player.name}`}
            className="outline delete"
            disabled={loading}
            onClick={() => {
              setSelectedPlayer(player);
              open("delete");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
