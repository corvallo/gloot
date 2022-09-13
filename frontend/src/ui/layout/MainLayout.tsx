import PlayersList from "../components/PlayersList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SnackBar from "../components/Snackbar";
import Modal from "../components/Modal";

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
      {/* <SnackBar /> */}
      <Modal />
    </>
  );
};
export default MainLayout;
