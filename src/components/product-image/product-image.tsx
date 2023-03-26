interface ProductImageProps {
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  width: string;
  height: string;
}

export default function ProductImage(props: ProductImageProps): JSX.Element {
  const {
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    width,
    height,
  } = props;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`}
      />
      <img
        src={`/${previewImg}`}
        srcSet={`/${previewImg2x} 2x`}
        width={width}
        height={height}
        alt={name}
      />
    </picture>
  );
}
