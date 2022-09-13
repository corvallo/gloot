import create from "zustand";
import { IPlayerStore } from "../@typings/player";
import config from "../config";

const usePlayersStore = create<IPlayerStore>((set) => ({
  loading: false,
  players: [],
  selectedPlayer: null,
  setSelectedPlayer: (player) => set((state) => ({ ...state, selectedPlayer: player })),
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
    set((state) => ({ ...state, loading: true }));
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
        loading: false,
      }));
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
    }
  },

  updatePlayer: async (id: string, name: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const _updatedPlayer = await fetch(`${config.API_URL}player/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }).then((r) => r.json());
      set((state) => ({
        ...state,
        players: [...state.players.map((p) => (p.id === _updatedPlayer.id ? _updatedPlayer : p))],
        loading: false,
      }));
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
    }
  },

  deletePlayer: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const _deletedPlayer = await fetch(`${config.API_URL}/player/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((r) => r.json());
      set((state) => ({
        ...state,
        players: [...state.players.filter((p) => p.id !== _deletedPlayer.id)],
        loading: false,
      }));
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
export default usePlayersStore;
