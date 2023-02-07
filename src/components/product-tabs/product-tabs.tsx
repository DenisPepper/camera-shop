import React, {useState} from 'react';

interface ProductTubsProps {
  description: string;
  vendorCode: string;
  category: string;
  type: string;
  level: string;
}

export default function ProductTabs(props: ProductTubsProps): JSX.Element {
  const {description, vendorCode, category, type, level} = props;

  const [flag, setFlag] = useState(true);

  const handleOnClick = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div className={'tabs product__tabs'}>
      <div className="tabs__controls product__tabs-controls">
        <button
          className={`tabs__control ${flag ? 'is-active' : ''}`}
          type="button"
          onClick={handleOnClick}
        >
          Характеристики
        </button>

        <button
          className={`tabs__control ${!flag ? 'is-active' : ''}`}
          type="button"
          onClick={handleOnClick}
        >
          Описание
        </button>
      </div>

      <div className="tabs__content">

        <div className={`tabs__element ${flag ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list" key={'Артикул'}>
              <span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list" key={'Категория'}>
              <span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list" key={'Тип камеры'}>
              <span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list" key={'Уровень'}>
              <span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>

        <div className={`tabs__element ${!flag ? 'is-active' : ''}`}>
          <div className="product__tabs-text">
            <p>
              {description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
