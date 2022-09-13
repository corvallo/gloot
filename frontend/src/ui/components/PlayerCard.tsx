import { useState } from "react";
import { IPlayerCard } from "../../@typings/player";
import usePlayersStore from "../../store/players";

const PlayerCard: React.FC<IPlayerCard> = ({ style, player }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const deletePlayer = usePlayersStore((state) => state.deletePlayer);
  return (
    <div className="item-container" style={{ ...style, width: "99%" }}>
      <div className="item">
        <div className="avatar">
          <span>{player.name[0]}</span>
        </div>
        <h2>{player.name}</h2>
        <div className="actions">
          <button className="outline edit">Edit</button>
          <button className="outline delete" onClick={() => deletePlayer(player.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
