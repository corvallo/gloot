export type TSnackbar = "success" | "error" | "pending";
export interface ISnackbar {
  type?: TSnackbar;
  message?: string;
}
