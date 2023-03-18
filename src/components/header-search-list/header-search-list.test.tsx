import HeaderSearchList from './header-search-list';
import {render, screen} from '@testing-library/react';
import {stubProduct} from '../../mocks/stub-product';


describe('test of HeaderSearchList FC', () => {

  const handleFormPick = jest.fn();

  it('should render without fail', () => {
    render(<HeaderSearchList products={[stubProduct]} handleFormPick={handleFormPick}/>);
    const element = screen.getByRole('list');
    expect(element).toBeInTheDocument();
  });
});
