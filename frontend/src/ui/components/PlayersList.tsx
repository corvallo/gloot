import { useRef, useState, useEffect } from "react";
import { FixedSizeGrid } from "react-window";
import { IWithChildren } from "../../@typings/children";
import usePlayersStore from "../../store/players";
import Empty from "./Empty";
import Loading from "./Loading";
import PlayerCard from "./PlayerCard";

const PlayersList: React.FC<IWithChildren> = () => {
  const players = usePlayersStore((state) => state.players);
  const loading = usePlayersStore((state) => state.loading);
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
    <div className="list" ref={ref}>
      {players && players.length && !loading && (
        <FixedSizeGrid height={height} width={w} columnCount={1} columnWidth={w - 100} rowCount={players.length} rowHeight={250}>
          {(props) => <PlayerCard player={players[props.rowIndex]} {...props} />}
        </FixedSizeGrid>
      )}
      {!loading && !players.length && <Empty />}
      {loading && <Loading />}
    </div>
  );
};

export default PlayersList;
