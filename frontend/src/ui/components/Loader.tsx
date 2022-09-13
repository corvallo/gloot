import { IWithChildren } from "../../@typings/children";

const Loader: React.FC<IWithChildren> = ({ children }) => {
  return (
    <>
      <div className="loader" />
      {children ? <div>{children}</div> : ""}
    </>
  );
};
export default Loader;
