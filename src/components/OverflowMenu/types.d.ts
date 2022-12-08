type OverflowMenuPosition = 'right' | 'left' | 'top' | 'bottom';

interface IOverflowMenuPosition {
  positionX: OverflowMenuPosition;
  positionY: OverflowMenuPosition;
}

interface IOverflowMenuProps {
  render: React.ReactNode;
  children: React.ReactNode;
}
