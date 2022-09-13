import { ISnackbar } from "../../@typings/snackbar";

const SnackBar: React.FC<ISnackbar> = ({ message = "", type = "success" }) => {
  return <div className="snackbar warning"></div>;
};

export default SnackBar;
