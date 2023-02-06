interface ProductCardImageProps {
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export default function ProductCardImage(props: ProductCardImageProps): JSX.Element {
  const {name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = props;

  return (
    <div className="product-card__img">
      <picture>
        <source
          type="image/webp"
          srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`}
        />
        <img
          src={`/${previewImg}`}
          srcSet={`/${previewImg2x} 2x`}
          width="280"
          height="240"
          alt={name}
        />
      </picture>
    </div>
  );
}
