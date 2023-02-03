import React from 'react';
import { Provider } from 'react-redux';
import {StateSchema} from './state-schema';
import {buildStore} from './store';


interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: StateSchema;
}

export default function StoreProvider(props: StoreProviderProps): JSX.Element {
  const { children, initialState } = props;
  const store = buildStore(initialState);
  return <Provider store={store}>{children}</Provider>;
}
