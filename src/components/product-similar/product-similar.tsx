import {shallowEqual, useSelector} from 'react-redux';
import {getSimilarProducts} from '../../store/slices/similar/selectors/get-similar-products/get-similar-products';
import ProductSimilarSlider from '../product-similar-slider/product-similar-slider';

export default function ProductSimilar(): JSX.Element {
  const products = useSelector(getSimilarProducts, shallowEqual);

  return (
    <div className={'page-content__section'}>
      {
        !!products &&
        <section className={'product-similar'}>
          <div className={'container'}>
            <h2 className="title title--h3">Похожие товары</h2>
            <ProductSimilarSlider
              key={'ProductSimilarSlider'}
              products={products}
            />
          </div>
        </section>
      }
    </div>
  );
}
