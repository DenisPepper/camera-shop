import FooterLink from './footer-link';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test FooterLink FC', () => {
  const title = 'link';

  it('should render without fail', () => {

    render(
      <FooterLink to={''}>
        {title}
      </FooterLink>, {wrapper: BrowserRouter}
    );
    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
  });
});
