export interface ToastProps {
  isOpen: boolean;
  message: string;
  type: string;
  onToastClose: () => void;
}
