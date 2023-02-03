import React from 'react';

interface MainLogoProps {
  xlinkHref: string;
}

export default function Logo(props: MainLogoProps): JSX.Element {
  const {xlinkHref} = props;
  return (
    <svg width="100" height="36" aria-hidden="true">
      <use xlinkHref={xlinkHref}></use>
    </svg>
  );
}
