import FooterNavItem from './footer-nav-item';
import {render, screen} from '@testing-library/react';
import {FooterNavItemsType} from '../../types/footer-nav-items-type';
import {BrowserRouter} from 'react-router-dom';


describe('test FooterNavItem FC', () => {
  const stubTitle = 'NAV LINK';
  const stubNavLinks: FooterNavItemsType[] = [{to: '', title: 'nav link'}];

  it('should render without fail', () => {

    render(
      <FooterNavItem
        title={stubTitle}
        paths={stubNavLinks}
      />, {wrapper: BrowserRouter});
    const element = screen.getByText(stubTitle);
    expect(element).toBeInTheDocument();
  });
});
