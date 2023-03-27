import {shallowEqual, useSelector} from 'react-redux';
import {getItems} from '../../store/slices/cart/selectors/get-items/get-items';
import {useLayoutEffect, useState} from 'react';
import {ProductType} from '../../types/product-type';
import {fetchProductById} from '../../services/fetch-product-by-id/fetch-product-by-id';
import {errorSliceActions as actions} from '../../store/slices/error/slice/error-slice';
import {ApiError as Error} from '../../api/api-error';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {CartItemType, CartProductType} from '../../types/cart-types';
import CartListItem from '../cart-list-item/cart-list-item';

const getCount = (items: CartItemType[], id: number): number =>
  items.find((item) => item.id === id)?.count || 0;

const getProducts = (products: Array<ProductType | undefined>, items: CartItemType[]): CartProductType[] => {
  const cartProducts: CartProductType[] = [];
  products.forEach((product) => {
    if (product !== undefined) {
      cartProducts.push({...product, count: getCount(items, product.id)});
    }
  });
  return cartProducts;
};

export default function CartItemsList(): JSX.Element {
  const items = useSelector(getItems, shallowEqual);
  const [products, setProducts] = useState<CartProductType[]>([]);
  const dispatch = useAppDispatch();

  /**
   fetch products
   */
  useLayoutEffect(() => {
    const promises = items.map((item) => fetchProductById({
      id: item.id,
      callWhenRejected: () => dispatch(actions.addError(Error.OnFetchProductByID)),
    }));
    Promise.all<ProductType | undefined>(promises)
      .then((data) => {
        setProducts(getProducts(data, items));
      });
  }, [dispatch, items]);

  return (
    <ul className={'basket__list'}>
      {
        products.map((product) => <CartListItem key={product.id} product={product}/>)
      }
    </ul>
  );
}
