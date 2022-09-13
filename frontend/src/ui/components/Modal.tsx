import useModalStore from "../../store/modal";
import PlayerForm from "./PlayerForm";

const Modal: React.FC = () => {
  const { isOpen, close, closing, modalType } = useModalStore((state) => state);
  return isOpen ? (
    <>
      <div className={`modal ${closing ? "closing" : ""}`}>
        <h4>{modalType === "create" ? "Create new player" : "Update player"}</h4>
        <div className="modal-content">
          <PlayerForm />
        </div>
        <div className="modal-actions">
          <button className="outline edit">{modalType === "create" ? "Create" : "Edit"}</button>
          <button className="outline delete" onClick={() => close()}>
            Close
          </button>
        </div>
      </div>
      <div className="modal-mask"></div>
    </>
  ) : null;
};
export default Modal;
