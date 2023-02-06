import {Link} from 'react-router-dom';
import {PathName as to} from '../../settings/settings';

interface ProductCardButtonProps {
  id: number;
}

export default function ProductCardButton(props: ProductCardButtonProps): JSX.Element {
  const {id} = props;

  return (
    <div className="product-card__buttons">
      <button
        className="btn btn--purple product-card__btn"
        type="button"
      >
        Купить
      </button>
      <Link
        className="btn btn--transparent"
        to={`/${to.Catalog}/${to.Product}/${id}`}
      >
        Подробнее
      </Link>
    </div>
  );
}
