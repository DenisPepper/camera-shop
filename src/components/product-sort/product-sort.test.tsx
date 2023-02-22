import ProductSort from './product-sort';
import {render, screen} from '@testing-library/react';

it('should render ProductSort FC', async () => {
  render(<ProductSort/>);
  const element = await screen.findByText(/Сортировки/);
  expect(element).toBeInTheDocument();
});
