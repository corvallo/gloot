import { useRef, useState, useEffect } from "react";
import { FixedSizeGrid } from "react-window";
import { IWithChildren } from "../../@typings/children";
import usePlayersStore from "../../store/players";
import Empty from "./Empty";
import Loader from "./Loader";
import PlayerCard from "./PlayerCard";

const PlayersList: React.FC<IWithChildren> = () => {
  const { deleting, updating, adding, players, loading } = usePlayersStore((state) => state);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      setSize({
        w: ref?.current?.clientWidth || 0,
        h: ref?.current?.clientHeight || 0,
      });
    }
    const handleResize = () => {
      setSize({
        w: ref?.current?.clientWidth || 0,
        h: ref?.current?.clientHeight || 0,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`list ${loading ? "loading" : ""} ${adding || updating || deleting ? "disabled" : ""}`} ref={ref}>
      {players && players.length > 0 && !loading && (
        <FixedSizeGrid height={size.h} width={size.w} columnCount={1} columnWidth={size.w - 100} rowCount={players.length} rowHeight={250}>
          {(props) => <PlayerCard player={players[props.rowIndex]} {...props} />}
        </FixedSizeGrid>
      )}
      {!loading && players.length === 0 && <Empty />}
      {loading && players.length === 0 && <Loader>Players list loading...</Loader>}
    </div>
  );
};

export default PlayersList;
