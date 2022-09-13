import useNotificationStore from "../../store/notifications";

const SnackBar: React.FC = () => {
  const { isOpen, type, message, closing, close } = useNotificationStore((state) => state);
  useNotificationStore.subscribe(({ isOpen }) => {
    if (isOpen) {
      setTimeout(() => {
        useNotificationStore.setState({
          closing: true,
        });
        close();
      }, 1500);
    }
  });
  return isOpen ? <div className={`snackbar ${type} ${closing ? "closing" : ""}`}>{message}</div> : null;
};

export default SnackBar;
