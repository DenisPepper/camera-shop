import ProductImage from '../product-image/product-image';

interface CartItemImageProps {
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export default function CartItemImage(props: CartItemImageProps): JSX.Element {
  const {...restProps} = props;

  return (
    <div className="basket-item__img" data-testid={'basket-item__img'}>
      <ProductImage {...restProps} width={'140'} height={'120'}/>
    </div>
  );
}
