import {render} from '@testing-library/react';
import ProductSimilarSlider from './product-similar-slider';

it('should render ProductSimilarSlider FC', () => {
  render(<ProductSimilarSlider products={[]}/>);
});
