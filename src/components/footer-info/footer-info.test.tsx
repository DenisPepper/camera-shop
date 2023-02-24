import FooterInfo from './footer-info';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';


describe('test FooterInfo FC', () => {

  it('should render without fail', () => {

    render(<FooterInfo/>, {wrapper: BrowserRouter});
    const element = screen.getByText('Интернет-магазин фото- и видеотехники');
    expect(element).toBeInTheDocument();
  });
});
