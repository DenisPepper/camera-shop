import ProductInfoContent from './product-info-content';
import {render, screen} from '@testing-library/react';
import {stubProduct} from '../../mocks/stub-product';
import {ProductTab as Tab} from '../../settings/settings';

describe('test ProductInfoContent FC', () => {
  const stubCallback = jest.fn();

  it('should be render without crushing', () => {
    render(
      <ProductInfoContent
        product={stubProduct}
        tab={Tab.Characteristic}
        handleInfoTabClick={stubCallback}
      />);
    const element = screen.getByText('Добавить в корзину');
    expect(element).toBeInTheDocument();
  });
});
