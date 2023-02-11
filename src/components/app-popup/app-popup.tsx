import AppPortal from '../app-portal/app-portal';
import {ROOT} from '../../index';
import {ReactNode} from 'react';

interface AppPopupProps {
  children?: ReactNode;
}

export default function AppPopup(props: AppPopupProps): JSX.Element {
  const {children} = props;

  return (
    <AppPortal container={ROOT}>
      {children}
    </AppPortal>
  );
}
