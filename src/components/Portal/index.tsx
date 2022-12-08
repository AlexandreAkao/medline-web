import { useState, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { portalStyles } from 'components/Portal/styles';

function Portal({ children, wrapperId = 'react-portal-wrapper' }: IPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  const createWrapperAndAppendToBody = useCallback(() => {
    const createdWrapperElement = document.createElement('div');
    createdWrapperElement.setAttribute('id', wrapperId);
    createdWrapperElement.setAttribute('style', portalStyles.join());
    document.body.appendChild(createdWrapperElement);
    return createdWrapperElement;
  }, [wrapperId]);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody();
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [createWrapperAndAppendToBody, wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}

export default Portal;
