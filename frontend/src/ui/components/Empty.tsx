import useModalStore from "../../store/modal";

const Empty: React.FC = () => {
  const { open } = useModalStore((state) => state);
  return (
    <div className="empty">
      <p>Players List is empty!</p>
      <button type="button" role="button" onClick={() => open("create")} aria-label="Create new player" title="Create new player">
        Create New Player
      </button>
    </div>
  );
};

export default Empty;
