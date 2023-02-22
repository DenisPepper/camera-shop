import ProductSimilarButton from './product-similar-button';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('test ProductSimilarButton FC', () => {
  const stubCallback = jest.fn();
  const StubProps = {
    isDisabled: false,
    callback: stubCallback,
  };

  it('should render', () => {
    render(<ProductSimilarButton {...StubProps} modifier={'--prev'}/>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should call callback with modifier value', async () => {
    render(<ProductSimilarButton {...StubProps} modifier={'--prev'}/>);
    const element = screen.getByRole('button');
    await userEvent.click(element);
    expect(stubCallback).toBeCalledTimes(1);
    expect(stubCallback).toBeCalledWith('--prev');
  });

});
