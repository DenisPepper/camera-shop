import { HTMLAttributes } from 'react';
import './app-error.css';

export default function AppError(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const {children} = props;

  return (
    <div className={'app-error'}>
      {children}
    </div>
  );
}
