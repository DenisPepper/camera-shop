import HeaderLink from './header-link';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';


describe('test HeaderLink FC', () => {
  const stubLink = '';
  const stubText = 'Link';

  it('should render without fail', () => {

    render(
      <HeaderLink to={stubLink}>
        {stubText}
      </HeaderLink>,
      {wrapper: BrowserRouter});

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    const text = screen.getByText(stubText);
    expect(text).toBeInTheDocument();
  });
});
