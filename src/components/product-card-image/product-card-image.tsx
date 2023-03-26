import ProductImage from '../product-image/product-image';

interface ProductCardImageProps {
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export default function ProductCardImage(props: ProductCardImageProps): JSX.Element {
  const {...restProps} = props;

  return (
    <div className="product-card__img">
      <ProductImage {...restProps} width={'280'} height={'240'}/>
    </div>
  );
}
