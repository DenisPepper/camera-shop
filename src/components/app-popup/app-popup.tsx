import AppPortal from '../app-portal/app-portal';
import {ROOT} from '../../index';
import React, {ReactNode, useCallback, useEffect} from 'react';

interface AppPopupProps {
  children?: ReactNode;
  isOpen: boolean;
  overlayOnClickHandler: () => void;
  onEscapeKeyDownHandler: () => void;
}

export default function AppPopup(props: AppPopupProps): JSX.Element {
  const {
    children,
    isOpen,
    overlayOnClickHandler,
    onEscapeKeyDownHandler
  } = props;

  const handleOnKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onEscapeKeyDownHandler();
    }
  }, [onEscapeKeyDownHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleOnKeyDown);
    }
    return () => window.removeEventListener('keydown', handleOnKeyDown);
  }, [isOpen, handleOnKeyDown]);

  return (
    <AppPortal container={ROOT}>
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className={'modal__wrapper'}>
          <div className="modal__overlay" onClick={overlayOnClickHandler}></div>
          <div className={'modal__content'}>
            {children}
          </div>
        </div>
      </div>
    </AppPortal>
  );
}
