import create from "zustand";
import { IPlayerStore } from "../@typings/player";
import config from "../config";
import useNotificationStore from "./notifications";

const usePlayersStore = create<IPlayerStore>((set) => ({
  loading: false,
  players: [],
  selectedPlayer: null,
  setSelectedPlayer: (player) => set((state) => ({ ...state, selectedPlayer: player })),
  fetchPlayers: async () => {
    set((state) => ({ ...state, loading: true }));
    try {
      const _players = await fetch(`${config.API_URL}players`).then((r) => r.json());

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
      const _player = await fetch(`${config.API_URL}player`, {
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
      useNotificationStore.setState({
        message: `Player successfully created`,
        type: "success",
        isOpen: true,
      });
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
      useNotificationStore.setState({
        message: `There was an error creating the player`,
        type: "error",
        isOpen: true,
      });
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
      useNotificationStore.setState({
        message: `Player successfully updated`,
        type: "success",
        isOpen: true,
      });
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
      useNotificationStore.setState({
        message: `There was an error updating the player`,
        type: "error",
        isOpen: true,
      });
    }
  },

  deletePlayer: async (id: string) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const _deletedPlayer = await fetch(`${config.API_URL}player/${id}`, {
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
      useNotificationStore.setState({
        message: `Player successfully deleted`,
        type: "success",
        isOpen: true,
      });
    } catch (e) {
      set((state) => ({ ...state, loading: false }));
      useNotificationStore.setState({
        message: `There was an error deleting the player`,
        type: "error",
        isOpen: true,
      });
    }
  },
}));
export default usePlayersStore;
