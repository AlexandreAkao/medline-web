import { MouseEvent, useRef, useState } from 'react';

import { OverflowMenuContainer, OverflowMenuContent } from 'components/OverflowMenu/styles';
import useOutsideHandler from 'hooks/useOutsideHandler';

function OverflowMenu({ children, render }: IOverflowMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<IOverflowMenuPosition>({
    positionX: 'right',
    positionY: 'top',
  });
  const ref = useRef<HTMLDivElement>(null);
  useOutsideHandler<HTMLDivElement>(ref, () => setIsOpen(false));

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, view } = event;
    const clientHeight = view?.document?.body?.clientHeight ?? 100;
    const popupHeight = ref.current?.children[0]?.clientHeight ?? 100;
    const positionX = clientX < 350 ? 'left' : 'right';
    const positionY = clientHeight - clientY < popupHeight ? 'bottom' : 'top';

    setPosition({ positionX, positionY });
    setIsOpen(true);
  };

  return (
    <OverflowMenuContainer ref={ref} onClick={handleClick}>
      {render}
      {isOpen && (
        <OverflowMenuContent data-testid="overflow-menu-content" {...position}>
          {children}
        </OverflowMenuContent>
      )}
    </OverflowMenuContainer>
  );
}

export default OverflowMenu;
