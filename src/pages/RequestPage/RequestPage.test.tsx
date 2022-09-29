import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { toast } from 'react-toastify';

import { renderWithProvider } from 'utils/testWrapper';
import RequestPage from 'pages/RequestPage';
import api from 'service/api';
import * as RequestPageValidadtion from 'pages/RequestPage/validation';

const navigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const reactRouterDom = await vi.importActual('react-router-dom');
  return {
    ...(reactRouterDom ?? {}),
    useNavigate: () => navigate,
  };
});

describe('RequestPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  const renderComponent = () => {
    return renderWithProvider(<RequestPage />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  describe('should call handleSubmitRequest on submit form', async () => {
    it('request invalid', async () => {
      const toastSpy = vi.spyOn(toast, 'error');

      renderComponent();

      const buttonSubmitElement = screen.getByTestId('test-button-submit');
      expect(buttonSubmitElement).toBeInTheDocument();
      await userEvent.click(buttonSubmitElement);

      expect(toastSpy).toBeCalledWith('Preencha todos os campos', { theme: 'colored' });
    });

    it('request valid', async () => {
      const toastSpy = vi.spyOn(toast, 'success');
      vi.spyOn(RequestPageValidadtion, 'isFormValid').mockImplementation(() => true);
      vi.spyOn(api, 'post').mockImplementation(() =>
        Promise.resolve({
          status: 200,
        }),
      );

      renderComponent();

      const buttonSubmitElement = screen.getByTestId('test-button-submit');

      expect(buttonSubmitElement).toBeInTheDocument();

      await userEvent.click(buttonSubmitElement);

      expect(toastSpy).toBeCalledWith('Solicitação criada com Sucesso', { theme: 'colored' });
      expect(navigate).toBeCalled();
    });
  });
});
