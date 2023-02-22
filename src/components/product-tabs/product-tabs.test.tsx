import ProductTabs from './product-tabs';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ProductTab as Tab} from '../../settings/settings';

describe('test ProductTabs FC', () => {
  const stubCallback = jest.fn();
  const stubProps = {
    description: 'stub description',
    vendorCode: 'stub vendor code',
    category: 'stub category',
    type: 'stub type',
    level: 'stub level',
    tab: 'stub tab',
    onTabClickHandler: stubCallback,
  };

  it('should render with stub description', async () => {
    render(<ProductTabs {...stubProps}/>);
    const element = await screen.findByText(new RegExp(stubProps.description));
    expect(element).toBeInTheDocument();
  });

  it('should render with stub vendor code', async () => {
    render(<ProductTabs {...stubProps}/>);
    const element = await screen.findByText(new RegExp(stubProps.vendorCode));
    expect(element).toBeInTheDocument();
  });

  it('should render with stub category', async () => {
    render(<ProductTabs {...stubProps}/>);
    const element = await screen.findByText(new RegExp(stubProps.category));
    expect(element).toBeInTheDocument();
  });

  it('should render with stub type', async () => {
    render(<ProductTabs {...stubProps}/>);
    const element = await screen.findByText(new RegExp(stubProps.type));
    expect(element).toBeInTheDocument();
  });

  it('should render with stub level', async () => {
    render(<ProductTabs {...stubProps}/>);
    const element = await screen.findByText(new RegExp(stubProps.level));
    expect(element).toBeInTheDocument();
  });

  describe('tab with characteristics', () => {
    it('should call stub callback with expected arg', async () => {
      render(<ProductTabs {...stubProps}/>);
      const element = await screen.findByText(/Характеристики/);
      await userEvent.click(element);
      expect(stubCallback).toHaveBeenCalledTimes(1);
      expect(stubCallback).toBeCalledWith(Tab.Characteristic);
    });
  });

  describe('tab with description', () => {
    it('should call stub callback with expected arg', async () => {
      render(<ProductTabs {...stubProps}/>);
      const element = await screen.findByText(/Описание/);
      await userEvent.click(element);
      expect(stubCallback).toHaveBeenCalledTimes(1);
      expect(stubCallback).toBeCalledWith(Tab.Description);
    });
  });


});
