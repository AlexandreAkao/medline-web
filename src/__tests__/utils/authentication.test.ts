import { vi } from 'vitest';

import { getToken, getUserInfo } from 'utils/authentication';

describe('authentication', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('getUserInfo', () => {
    it('should return user from localstorage', () => {
      vi.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(
        () => '{"id": 1, "name": "any_name", "cpf": "000.000.000-00"}',
      );
      const user = getUserInfo();
      expect(user).toEqual({ id: 1, name: 'any_name', cpf: '000.000.000-00' });
    });

    it('should return user from localstorage', () => {
      const user = getUserInfo();
      expect(user).toBeNull();
    });
  });

  describe('getToken', () => {
    it('should return token from localstorage', () => {
      vi.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() => 'any_token');
      const token = getToken();

      expect(token).toBe('any_token');
    });

    it('should return null if localstorage empty', () => {
      const token = getToken();
      expect(token).toBeNull();
    });
  });
});
