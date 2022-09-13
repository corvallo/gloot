import useModalStore from "../../store/modal";

const Empty: React.FC = () => {
  const { open } = useModalStore((state) => state);
  return (
    <div className="empty">
      <p>Players List is empty!</p>
      <button onClick={open}>Add New Player</button>
    </div>
  );
};

export default Empty;
