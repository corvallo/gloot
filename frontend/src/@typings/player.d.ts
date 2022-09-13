import { GridChildComponentProps } from "react-window";

export interface IPlayer {
  name: string;
  id: string;
}
export interface IPlayerStore {
  loading: boolean;
  adding: boolean;
  deleting: boolean;
  updating: boolean;
  players: IPlayer[];
  selectedPlayer: IPlayer | null;
  setSelectedPlayer: (p: IPlayer | null) => void;
  addPlayer: (p: string) => void;
  updatePlayer: (id: string, name: string) => void;
  deletePlayer: (id: string) => void;
  fetchPlayers: () => void;
}
export interface IPlayerCard extends GridChildComponentProps {
  player: IPlayer;
}
