import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProvider } from 'utils/testWrapper';
import QueuePage from 'pages/QueuePage';
import { ubsList } from '__tests__/mocks/ubs.mock';
import api from 'service/api';
import * as hooks from 'hooks/useAuth';

const apiGetScenarios =
  ({ me, ubs, ubsId }: Record<'me' | 'ubs' | 'ubsId', Record<string, unknown>>) =>
  (url: string): Promise<unknown> => {
    switch (url) {
      case '/appointment/me':
        return Promise.resolve(me);
      case 'ubs':
        return Promise.resolve(ubs);
      case 'ubs/1':
        return Promise.resolve(ubsId);
      default:
        return Promise.resolve({});
    }
  };

vi.mock('react-router-dom', async () => {
  const reactRouterDom = await vi.importActual('react-router-dom');

  return {
    ...(reactRouterDom as Record<string, unknown>),
    useLocation: () => ({ state: { selectedUbs: '1' } }),
  };
});

describe('QueuePage', () => {
  const apiGetSpy = vi.spyOn(api, 'get');
  const apiPostSpy = vi.spyOn(api, 'post');
  const apiDeleteSpy = vi.spyOn(api, 'delete');
  const useAuthSpy = vi.spyOn(hooks, 'useAuth');

  const renderComponent = () => {
    return renderWithProvider(<QueuePage />);
  };

  describe('NotOnQueue', () => {
    beforeEach(() => {
      apiGetSpy
        .mockRejectedValueOnce({})
        .mockResolvedValueOnce({ data: ubsList })
        .mockResolvedValueOnce({ data: ubsList[0] });
    });

    it('should match with snpashot', () => {
      const { container } = renderComponent();
      expect(container).toMatchSnapshot('NotOnQueue');
    });

    it('should show a select ubs', async () => {
      renderComponent();
      const ubsNameElement = await screen.findByText(/Chico da Silva/i);
      const doctorsCountElement = await screen.findByText(/3 medicos/i);
      const estimativeCountElement = await screen.findByText(/00:00 - 23:59/i);
      expect(ubsNameElement).toBeInTheDocument();
      expect(doctorsCountElement).toBeInTheDocument();
      expect(estimativeCountElement).toBeInTheDocument();
    });

    describe('should call handleEnterQueue on click button', () => {
      beforeEach(() => {
        apiPostSpy.mockReset();
      });

      it('signed', async () => {
        useAuthSpy.mockImplementation(
          () =>
            ({
              signed: true,
            } as IAuthContext),
        );
        apiPostSpy.mockResolvedValue({ status: 200 });
        renderComponent();
        const buttonElement = await screen.getByText(/Entra na Fila/i);
        expect(buttonElement).toBeInTheDocument();

        await userEvent.click(buttonElement);

        expect(apiPostSpy).toBeCalled();
      });

      it('not signed', async () => {
        useAuthSpy.mockImplementation(
          () =>
            ({
              signed: false,
            } as IAuthContext),
        );

        renderComponent();
        const buttonElement = await screen.getByText(/Entra na Fila/i);
        expect(buttonElement).toBeInTheDocument();

        await userEvent.click(buttonElement);

        expect(apiPostSpy).not.toBeCalled();
      });
    });
  });

  describe('OnQueue', () => {
    beforeEach(() => {
      apiGetSpy.mockImplementation(apiGetScenarios({ me: { data: ubsList[0] }, ubs: { data: ubsList }, ubsId: {} }));
    });

    it('should match with snpashot', () => {
      const { container } = renderComponent();
      expect(container).toMatchSnapshot('OnQueue');
    });

    it('should call api when leave queue', async () => {
      apiDeleteSpy.mockResolvedValue({ status: 200 });

      renderComponent();
      const buttonElement = await screen.findByText(/Desistir/i);

      expect(buttonElement).toBeInTheDocument();

      await userEvent.click(buttonElement);

      expect(apiDeleteSpy).toBeCalled();
    });
  });
});
