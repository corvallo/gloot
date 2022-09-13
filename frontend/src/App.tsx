import React, { useEffect } from "react";
import usePlayersStore from "./store/players";
import MainLayout from "./ui/layout/MainLayout";

const App: React.FC = () => {
  const fetchPlayers = usePlayersStore((s) => s.fetchPlayers);
  useEffect(() => {
    fetchPlayers();
  }, []);
  return <MainLayout />;
};

export default App;
