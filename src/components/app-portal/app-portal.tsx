import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface AppPortalProps {
  children?: ReactNode;
  container?: HTMLElement;
}

export default function AppPortal(props: AppPortalProps): JSX.Element {
  const { children, container = document.body } = props;
  return createPortal(children, container);
}
