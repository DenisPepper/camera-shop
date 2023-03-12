import React from 'react';

const DEFAULT_DELAY = 500;

type Event = React.ChangeEvent<HTMLInputElement>;
type Callback = (evt: Event) => void;
type TimeoutID = ReturnType<typeof setTimeout>;

export const debounce = (callback: Callback, delay = DEFAULT_DELAY) => {
  let timeoutID: TimeoutID;

  return (evt: Event) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(evt), delay);
  };
};
