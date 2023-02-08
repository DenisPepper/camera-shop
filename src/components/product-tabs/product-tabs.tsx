import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {ProductTab as Tab} from '../../settings/settings';


interface ProductTubsProps {
  description: string;
  vendorCode: string;
  category: string;
  type: string;
  level: string;
}

export default function ProductTabs(props: ProductTubsProps): JSX.Element {
  const {description, vendorCode, category, type, level} = props;

  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get('tab') || '';

  const handleOnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const button = evt.currentTarget;
    setSearchParams({tab: button.name});
  };

  return (
    <div className={'tabs product__tabs'}>
      <div className="tabs__controls product__tabs-controls">
        <button
          className={`tabs__control ${tab === Tab.Characteristic ? 'is-active' : ''}`}
          type="button"
          name={Tab.Characteristic}
          onClick={handleOnClick}
        >
          Характеристики
        </button>

        <button
          className={`tabs__control ${tab === Tab.Description ? 'is-active' : ''}`}
          type="button"
          name={Tab.Description}
          onClick={handleOnClick}
        >
          Описание
        </button>
      </div>

      <div className="tabs__content">

        <div className={`tabs__element ${tab === Tab.Characteristic ? 'is-active' : ''}`}>
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

        <div className={`tabs__element ${tab === Tab.Description ? 'is-active' : ''}`}>
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
