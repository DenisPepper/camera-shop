import {render} from '@testing-library/react';
import {App} from './app';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const store = mockStore();

it('should render without crushing', () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>
  );
});
