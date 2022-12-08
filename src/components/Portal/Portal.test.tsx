import { render } from '@testing-library/react';

import Portal from 'components/Portal';

describe('Portal', () => {
  const renderComponent = (customProps: Partial<IPortalProps> = {}) => {
    const props: IPortalProps = {
      children: 'Portal example',
      ...customProps,
    };
    return render(<Portal {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render Portal', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });
});
