import { FixedSizeGrid } from "react-window";
import { IWithChildren } from "../../@typings/children";
import useElementSize from "../../hooks/useElementSize";
import usePlayersStore from "../../store/players";
import Empty from "./Empty";
import Loader from "./Loader";
import PlayerCard from "./PlayerCard";

const PlayersList: React.FC<IWithChildren> = () => {
  const { players, loading } = usePlayersStore((state) => state);
  const [ref, { width, height }] = useElementSize();
  return (
    <div className={`list ${loading ? "loading" : ""} `} ref={ref as React.MutableRefObject<HTMLDivElement>}>
      {players && players.length > 0 && (
        <FixedSizeGrid height={height} width={width} columnCount={1} columnWidth={width} rowCount={players.length} rowHeight={250}>
          {(props) => <PlayerCard player={players[props.rowIndex]} {...props} />}
        </FixedSizeGrid>
      )}
      {!loading && players.length === 0 && <Empty />}
      {loading && players.length === 0 && <Loader>Players list loading...</Loader>}
    </div>
  );
};

export default PlayersList;
