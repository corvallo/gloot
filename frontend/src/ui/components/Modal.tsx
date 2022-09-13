import useModalStore from "../../store/modal";
import usePlayersStore from "../../store/players";
import capitalize from "../../utils/capitalize";
import Input from "./Input";

const Modal: React.FC = () => {
  const { isOpen, close, closing, modalType } = useModalStore((state) => state);
  const { selectedPlayer, setSelectedPlayer, deletePlayer, addPlayer, updatePlayer } = usePlayersStore((state) => state);
  return isOpen ? (
    <>
      <div className={`modal ${closing ? "closing" : ""}`}>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            if (modalType === "delete" && selectedPlayer) {
              deletePlayer(selectedPlayer.id);
            } else {
              const target = e.target as typeof e.target & {
                name: { value: string };
              };

              modalType === "create" ? addPlayer(target.name.value) : updatePlayer(selectedPlayer?.id, target.name.value);
            }
          }}
        >
          <h4>{`${capitalize(modalType)} player`}</h4>
          <div className="modal-content">
            {modalType === "delete" && (
              <>
                <p>Player {selectedPlayer!.name} will be deleted.</p>
                <p>Are you sure?</p>
              </>
            )}
            {modalType !== "delete" && <Input defaultValue={selectedPlayer ? selectedPlayer.name : null} />}
          </div>
          <div className="modal-actions">
            <button className="outline edit" type="submit">
              {`${capitalize(modalType)}`} Player
            </button>
            <button
              className="outline delete"
              type="button"
              onClick={() => {
                close();
                setSelectedPlayer(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="modal-mask"></div>
    </>
  ) : null;
};
export default Modal;
