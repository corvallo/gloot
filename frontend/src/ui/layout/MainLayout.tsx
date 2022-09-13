import PlayersList from "../components/PlayersList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <PlayersList />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
