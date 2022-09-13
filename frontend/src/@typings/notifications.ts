export type TNotification = "success" | "error";
export interface INotificationStore {
  isOpen: boolean;
  closing: boolean;
  message: string;
  type: TNotification;
  close: () => void;
}
