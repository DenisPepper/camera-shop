import {ProductType} from '../../types/product-type';
import ProductSimilarButton from '../product-similar-button/product-similar-button';
import ProductCard from '../product-card/product-card';
import {useState} from 'react';

const STEP = 3;

const enum ButtonModifier {
  Prev = '--prev',
  Next = '--next',
}

interface ProductSimilarSliderProps {
  products: ProductType[];
}

export default function ProductSimilarSlider(props: ProductSimilarSliderProps): JSX.Element {
  const {products} = props;
  const [start, setStart] = useState(0);

  const handleOnClick = (modifier: string) => {
    setStart((prev) => modifier === ButtonModifier.Next ? prev + 1 : prev - 1);
  };

  return (
    <div className={'product-similar__slider'}>

      <ProductSimilarButton
        key={'ProductSimilarButtonPrev'}
        isDisabled={start === 0}
        modifier={ButtonModifier.Prev}
        callback={handleOnClick}
      />

      <div className={'product-similar__slider-list'}>
        {products.slice(start, start + STEP).map((product) =>
          (
            <ProductCard
              key={product.id}
              product={product}
              modifier={'is-active'}
            />
          )
        )}
      </div>

      <ProductSimilarButton
        key={'ProductSimilarButtonNext'}
        isDisabled={start + STEP === products.length - 1}
        modifier={ButtonModifier.Next}
        callback={handleOnClick}
      />

    </div>
  );
}

