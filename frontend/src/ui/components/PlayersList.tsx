import { useRef, useState, useEffect } from "react";
import { FixedSizeGrid } from "react-window";
import { IWithChildren } from "../../@typings/children";
import usePlayersStore from "../../store/players";
import Empty from "./Empty";
import Loader from "./Loader";
import PlayerCard from "./PlayerCard";

const PlayersList: React.FC<IWithChildren> = () => {
  const { deleting, updating, adding, players, loading } = usePlayersStore((state) => state);
  const [height, setHeight] = useState<number>(0);
  const [w, setW] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref!.current!.clientHeight);
      setW(ref!.current!.clientWidth);
    }
  });

  return (
    <div className={`list ${loading ? "loading" : ""} ${adding || updating || deleting ? "disabled" : ""}`} ref={ref}>
      {players && players.length > 0 && !loading && (
        <FixedSizeGrid height={height} width={w} columnCount={1} columnWidth={w - 100} rowCount={players.length} rowHeight={250}>
          {(props) => <PlayerCard player={players[props.rowIndex]} {...props} />}
        </FixedSizeGrid>
      )}
      {!loading && players.length === 0 && <Empty />}
      {loading && players.length === 0 && <Loader>Players list loading...</Loader>}
    </div>
  );
};

export default PlayersList;
