import AppPortal from '../app-portal/app-portal';
import React, {MutableRefObject, ReactNode, useCallback, useEffect, useRef} from 'react';
import './app-popup.css';
import AppPopupCloseButton from '../app-popup-close-button/app-popup-close-button';
import AppPopupFocusCatcher from '../app-popup-focus-catcher/app-popup-focus-catcher';

const root = document.getElementById('root') as HTMLElement;

interface AppPopupProps {
  children?: ReactNode;
  isOpen: boolean;
  title: string;
  isNarrow?: boolean;
  onPopupCloseHandler: () => void;
  defaultFocusedElement: MutableRefObject<HTMLElement | null>;
}

export default function AppPopup(props: AppPopupProps): JSX.Element {
  const {
    children,
    isOpen,
    title,
    isNarrow,
    defaultFocusedElement,
    onPopupCloseHandler,
  } = props;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleOnPopupKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onPopupCloseHandler();
    }
  }, [onPopupCloseHandler]);

  const pageContentRef = useRef<HTMLDivElement>(document.querySelector('.wrapper'));

  useEffect(() => {
    const pageContent = pageContentRef.current;
    if (isOpen) {
      window.addEventListener('keydown', handleOnPopupKeyDown);
      pageContent?.classList.add('wrapper--under-modal');
    }
    return () => {
      window.removeEventListener('keydown', handleOnPopupKeyDown);
      pageContent?.classList.remove('wrapper--under-modal');
    };
  }, [isOpen, handleOnPopupKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setupDefaultFocus();
      }, 100);
    }
  },
  [isOpen, defaultFocusedElement]);

  const setupDefaultFocus = () => {
    defaultFocusedElement?.current?.focus();
  };

  return (
    <AppPortal container={root}>
      <div className={`modal ${isOpen ? 'is-active ' : ''}${isNarrow ? 'modal--narrow' : ''}`}>
        <div className={'modal__wrapper'}>
          <div className="modal__overlay" onClick={onPopupCloseHandler}/>
          <div className={'modal__content'}>
            <p className="title title--h4">{title}</p>
            <AppPopupFocusCatcher
              onFocusHandler={setupDefaultFocus}
            />
            {children}
            <AppPopupCloseButton
              onClickHandler={onPopupCloseHandler}
              ref={closeButtonRef}
            />
            <AppPopupFocusCatcher
              onFocusHandler={setupDefaultFocus}
            />
          </div>
        </div>
      </div>
    </AppPortal>
  );
}
