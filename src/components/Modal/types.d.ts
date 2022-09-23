interface IModalStyles {
  customStyles?: import('styled-components').Interpolation<import('react').CSSProperties>;
}

interface IModalProps extends IModalStyles {
  children: React.ReactNode;
  isVisible: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}
