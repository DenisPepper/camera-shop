import {useSelector} from 'react-redux';
import {getPromoProductId} from '../../store/slices/promo/selectors/get-promo-product-id/get-promo-product-id';
import {getPromoProductName} from '../../store/slices/promo/selectors/get-promo-product-name/get-promo-product-name';
import {Link} from 'react-router-dom';
import {Path as to} from '../../settings/settings';

export default function Banner(): JSX.Element {
  const id = useSelector(getPromoProductId);
  const name = useSelector(getPromoProductName);

  return (
    <div className={'banner'}>
      <picture>
        <source
          type="image/webp"
          srcSet={'/img/content/promo.webp, /img/content/promo@2x.webp 2x'}
        />
        <img
          src={'/img/content/promo.jpg'}
          srcSet={'/img/content/promo@2x.jpg 2x'}
          width="1280"
          height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        {!!name && <span className="title title--h1">{name}</span>}
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        {!!id && <Link className={'btn'} to={`/${to.Product}/${id}`}>Подробнее</Link>}
      </p>
    </div>
  );
}
