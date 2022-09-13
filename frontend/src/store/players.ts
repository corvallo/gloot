import create from "zustand";
import { IPlayerStore } from "../@typings/player";

const usePlayersStore = create<IPlayerStore>((set) => ({
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  players: [],
  fetchPlayers: async () => {
    set((state) => ({ ...state, loading: true }));
    try {
      const _players = await fetch(`http://127.0.0.1:7000/players`).then((r) => r.json());

      set((state) => ({
        ...state,
        players: [...state.players, ..._players],
        loading: false,
      }));
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
    }
  },
  addPlayer: async (player: string) => {
    set((state) => ({ ...state, adding: true }));
    try {
      const _player = await fetch(`http://127.0.0.1:7000/player`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: player }),
      }).then((r) => r.json());

      set((state) => ({
        ...state,
        players: [...state.players, _player],
        adding: false,
      }));
    } catch (e) {
      set((state) => ({ ...state, adding: false }));
    }
  },

  deletePlayer: async (id: string) => {
    set((state) => ({ ...state, deleting: true }));
    try {
      const _deletedPlayer = await fetch(`http://localhost:7000/player/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((r) => r.json());
      set((state) => ({
        ...state,
        players: [...state.players.filter((p) => p.id !== _deletedPlayer.id)],
        deleting: false,
      }));
    } catch (e) {
      set((state) => ({ ...state, deleting: false }));
    }
  },
}));
export default usePlayersStore;
