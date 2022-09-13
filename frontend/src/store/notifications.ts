import create from "zustand";
import { INotificationStore } from "../@typings/notifications";

const useNotificationStore = create<INotificationStore>((set) => ({
  isOpen: false,
  closing: false,
  message: "",
  type: "success",
  close: () => set(() => ({ isOpen: false, message: "", type: "success", closing: false })),
}));
export default useNotificationStore;
