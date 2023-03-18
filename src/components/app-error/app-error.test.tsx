import AppError from './app-error';
import {render, screen} from '@testing-library/react';

describe('test of AppError FC', () => {
  const message = 'error mesage';

  it('should render without fail', () => {
    render(
      <AppError>
        {message}
      </AppError>
    );
    const element = screen.getByText(message);
    expect(element).toBeInTheDocument();
  });
});
