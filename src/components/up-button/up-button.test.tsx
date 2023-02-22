import UpButton from './up-button';
import {render, screen} from '@testing-library/react';

it('should render UpButton FC', () => {
  render(<UpButton/>);
  const element = screen.getByRole('link');
  expect(element).toBeInTheDocument();
});
