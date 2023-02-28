import Filter from './filter';
import {render, screen} from '@testing-library/react';

describe('test Filter', () => {

  it('should render without fail', () => {
    render(<Filter/>);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
