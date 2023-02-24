import Logo from './logo';
import {render, screen} from '@testing-library/react';

describe('test Logo FC', () => {

  it('should render without fails', () => {

    render(<Logo xlinkHref={''}/>);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});
