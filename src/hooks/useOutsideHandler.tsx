import { MutableRefObject, useEffect } from 'react';

function useOutsideHandler<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  action?: (event: MouseEvent) => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action && action(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [action, ref]);
}

export default useOutsideHandler;
