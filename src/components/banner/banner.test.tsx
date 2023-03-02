/* eslint-disable @typescript-eslint/no-unsafe-return */

import Banner from './banner';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('test Banner FC', () => {

  it('should render without fail', () => {
    render(<Banner/>,
      {wrapper: BrowserRouter});
    const element = screen.getByTestId('banner');
    expect(element).toBeInTheDocument();
  });
});
