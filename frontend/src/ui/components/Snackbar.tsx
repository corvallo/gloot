import { ISnackbar } from "../../@typings/snackbar";

const SnackBar: React.FC<ISnackbar> = ({ message = "", type = "success" }) => {
  return <div className={`snackbar ${type}`}>{message}</div>;
};

export default SnackBar;
