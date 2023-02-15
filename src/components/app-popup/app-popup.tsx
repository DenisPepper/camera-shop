import AppPortal from '../app-portal/app-portal';
import {ROOT} from '../../index';
import React, {ReactNode, useCallback, useEffect, useRef} from 'react';
import './app-popup.css';

interface AppPopupProps {
  children?: ReactNode;
  isOpen: boolean;
  title: string;
  isNarrow?: boolean;
  disableOnTab?: boolean;
  overlayOnClickHandler: () => void;
  onEscapeKeyDownHandler: () => void;
}

export default function AppPopup(props: AppPopupProps): JSX.Element {
  const {
    children,
    isOpen,
    title,
    isNarrow,
    disableOnTab = false,
    overlayOnClickHandler,
    onEscapeKeyDownHandler,
  } = props;

  const handleOnKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onEscapeKeyDownHandler();
    } else if (evt.key === 'Tab' || evt.shiftKey) {
      disableOnTab && evt.preventDefault();
    }
  }, [onEscapeKeyDownHandler, disableOnTab]);

  const pageContentRef = useRef<HTMLDivElement>(document.querySelector('.wrapper'));

  useEffect(() => {
    const pageContent = pageContentRef.current;
    if (isOpen) {
      window.addEventListener('keydown', handleOnKeyDown);
      pageContent?.classList.add('wrapper--under-modal');
    }
    return () => {
      window.removeEventListener('keydown', handleOnKeyDown);
      pageContent?.classList.remove('wrapper--under-modal');
    };
  }, [isOpen, handleOnKeyDown]);

  return (
    <AppPortal container={ROOT}>
      <div className={`modal ${isOpen ? 'is-active ' : ''}${isNarrow ? 'modal--narrow' : ''}`}>
        <div className={'modal__wrapper'}>
          <div className="modal__overlay" onClick={overlayOnClickHandler}></div>
          <div className={'modal__content'}>
            <p className="title title--h4">{title}</p>
            {children}
          </div>
        </div>
      </div>
    </AppPortal>
  );
}
