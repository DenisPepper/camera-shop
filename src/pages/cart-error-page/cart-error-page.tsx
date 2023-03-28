import './cart-error-page.css';
import {Link} from 'react-router-dom';
import {Path} from '../../settings/settings';

export default function CartErrorPage(): JSX.Element {
  return (
    <div className={'wrapper--cart-error'}>
      <h1 className="title title--h1">При отправке заказа возникла ошибка</h1>
      <Link className={'main-nav__link'} to={Path.Cart}>
        Перейти в корзину
      </Link>
    </div>
  );
}
