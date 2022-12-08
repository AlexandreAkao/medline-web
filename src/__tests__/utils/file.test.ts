import { vi } from 'vitest';

import { downloadFile } from 'utils/file';

describe('file', () => {
  describe('downloadFile', () => {
    it('should return user from localstorage', () => {
      const click = vi.fn();
      vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'http://any-url');
      vi.spyOn(document, 'createElement').mockImplementation(
        () =>
          ({
            href: 'any_href',
            download: '',
            click,
          } as unknown as HTMLElement),
      );
      const blob = new Blob(['<div>any file</div>'], { type: 'text/html' });
      downloadFile(blob, 'any_file');
      expect(click).toBeCalled();
    });
  });
});
