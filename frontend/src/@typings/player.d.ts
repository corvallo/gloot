import { GridChildComponentProps } from "react-window";

export interface IPlayer {
  name: string;
  id: string;
}
export interface IPlayerStore {
  loading: boolean;
  players: IPlayer[];
  addPlayer: (p: string) => void;
  deletePlayer: (id: string) => void;
  fetchPlayers: () => void;
}
export interface IPlayerCard extends GridChildComponentProps {
  player: IPlayer;
}
