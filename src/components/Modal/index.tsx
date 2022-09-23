import { useEffect, useRef } from 'react';

import { ModalContainer, ModalContent } from 'components/Modal/styles';
import Portal from 'components/Portal';
import useOutsideHandler from 'hooks/useOutsideHandler';

function Modal({ isVisible, onClose, onOpen, customStyles, children }: IModalProps) {
  const ref = useRef(null);
  const refContent = useRef(null);

  useOutsideHandler<HTMLDivElement>(refContent, onClose);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' && onClose && isVisible ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [isVisible, onClose]);

  useEffect(() => {
    if (isVisible && onOpen) onOpen();
  }, [isVisible, onOpen]);

  if (!isVisible) return null;

  return (
    <Portal wrapperId="portal-modal">
      <ModalContainer ref={ref}>
        <ModalContent ref={refContent} customStyles={customStyles}>
          {children}
        </ModalContent>
      </ModalContainer>
    </Portal>
  );
}

export default Modal;
