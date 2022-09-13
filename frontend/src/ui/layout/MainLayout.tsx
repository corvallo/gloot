import PlayersList from "../components/PlayersList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import SnackBar from "../components/Snackbar";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <PlayersList />
        </main>
        <Footer />
      </div>
      <Modal />
      <SnackBar />
    </>
  );
};
export default MainLayout;
