import ProductInfoImage from '../product-info-image/product-info-image';
import ProductInfoContent from '../product-info-content/product-info-content';
import {getProduct} from '../../store/slices/product/selectors/get-product/get-product';
import {useSelector} from 'react-redux';

interface ProductInfoProps {
  tab: string;
  onTabClickHandler: (tabName: string) => void;
}

export default function ProductInfo(props: ProductInfoProps): JSX.Element {
  const {tab, onTabClickHandler} = props;
  const product = useSelector(getProduct);

  return (
    <div className={'page-content__section'}>
      {
        !!product &&
        <section className={'product'}>
          <div className={'container'}>
            <ProductInfoImage
              key={'ProductImage'}
              product={product}
            />
            <ProductInfoContent
              key={'ProductContent'}
              product={product}
              tab={tab}
              onTabClickHandler={onTabClickHandler}
            />
          </div>
        </section>
      }
    </div>);
}
