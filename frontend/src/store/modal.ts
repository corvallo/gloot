import create from "zustand";
interface IModalStore {
  modalType: "create" | "update" | "delete";
  isOpen: boolean;
  closing: boolean;
  open: (type?: "create" | "update" | "delete") => void;
  close: () => void;
  toggle: () => void;
}
const useModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  closing: false,
  modalType: "create",
  open: (type = "create") => set((state) => ({ ...state, isOpen: true, modalType: type })),
  close: () => {
    set((state) => ({ ...state, closing: true }));
    setTimeout(() => set((state) => ({ ...state, isOpen: false, closing: false })), 200);
  },
  toggle: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}));
export default useModalStore;
