import {AppSpinner} from './app-spinner';
import {render, screen} from '@testing-library/react';

describe('test of AppSpinner FC', () => {

  it('should render without fail', () => {
    render(<AppSpinner/>);
    const element = screen.getByTestId('app-spinner');
    expect(element).toBeInTheDocument();
  });
});

