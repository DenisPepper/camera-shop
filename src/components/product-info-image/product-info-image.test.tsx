import ProductInfoImage from './product-info-image';
import {render, screen} from '@testing-library/react';
import {stubProduct} from '../../mocks/stub-product';

describe('test ProductInfoImage FC', () => {

  it('render without crushing', () => {
    render(<ProductInfoImage product={stubProduct}/>);
    const element = screen.getByTestId('product-image');
    expect(element).toBeInTheDocument();
  });
});
