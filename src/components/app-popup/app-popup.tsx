import AppPortal from '../app-portal/app-portal';
import {ROOT} from '../../index';
import {ReactNode} from 'react';

interface AppPopupProps {
  children?: ReactNode;
  isOpen: boolean;
}

export default function AppPopup(props: AppPopupProps): JSX.Element {
  const {children, isOpen} = props;

  return (
    <AppPortal container={ROOT}>
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className={'modal__wrapper'}>
          <div className="modal__overlay"></div>
          <div className={'modal__content'}>
            {children}
          </div>
        </div>
      </div>
    </AppPortal>
  );
}
