import {useLayoutEffect, useRef, useState} from 'react';
import {DECIMAL} from '../../settings/settings';
import {fetchMinMaxPrice} from '../../services/fetch-min-max-price/fetch-min-max-price';
import {useSearchParams} from 'react-router-dom';

type PriceType = 'min' | 'max';
type PriceParamsType = {
  rice_gte?: string;
  rice_lte?: string;
}

export default function FilterPrice(): JSX.Element {
  const [, setSearchParams] = useSearchParams();
  const [minCatalogPrice, setMinCatalogPrice] = useState<string>('от');
  const [maxCatalogPrice, setMaxCatalogPrice] = useState<string>('до');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minModifier, setMinModifier] = useState('');
  const [maxModifier, setMaxModifier] = useState('');
  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);

  const handleMinInputChange = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (!minRef.current) {
      return;
    }
    if (!evt.currentTarget.value) {
      setMinModifier('');
      return;
    }
    const value = parseInt(evt.currentTarget.value, DECIMAL);
    handleValue(value, 'min', minRef.current);
  };

  const handleMaxInputChange = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (!maxRef.current) {
      return;
    }
    if (!evt.currentTarget.value) {
      setMaxModifier('');
      return;
    }
    const value = Number(evt.currentTarget.value);
    handleValue(value, 'max', maxRef.current);
  };

  /* eslint-disable camelcase */
  const handleValue = (value: number, priceType: PriceType, ref: HTMLInputElement) => {
    let price = value;
    const params: PriceParamsType = {};

    switch (priceType) {
      case 'max':
        if (value > Number(maxCatalogPrice)) {
          price = Number(maxCatalogPrice);
        }
        if (+value < minPrice) {
          price = minPrice;
        }
        setMaxPrice(price);
        params.rice_lte = price.toString();
        break;

      case 'min':
        if (value < Number(minCatalogPrice)) {
          price = Number(minCatalogPrice);
        }
        if (maxPrice && value > maxPrice) {
          price = maxPrice;
        }
        setMinPrice(price);
        params.rice_gte = price.toString();
    }

    setSearchParams(params);
    //setMaxModifier(price < 0 ? 'is-invalid' : 'is-valid');
    //setMinModifier(price < 0 ? 'is-invalid' : 'is-valid');
    ref.value = price.toString();
  };

  useLayoutEffect(() => {
    const minPricePromise = fetchMinMaxPrice('asc');
    const maxPricePromise = fetchMinMaxPrice('desc');
    Promise.all([minPricePromise, maxPricePromise])
      .then(([minPriceValue, maxPriceValue]) => {
        setMinCatalogPrice(minPriceValue.toString());
        setMaxCatalogPrice(maxPriceValue.toString());
      });
  }, []);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">

        <div className={`custom-input ${minModifier}`}>
          <label>
            <input
              ref={minRef}
              type="number"
              min={0}
              name="price"
              placeholder={minCatalogPrice}
              onBlur={handleMinInputChange}
            />
          </label>
        </div>

        <div className={`custom-input ${maxModifier}`}>
          <label>
            <input
              ref={maxRef}
              type="number"
              min={0}
              name="priceUp"
              placeholder={maxCatalogPrice}
              onBlur={handleMaxInputChange}
            />
          </label>
        </div>

      </div>
    </fieldset>
  );
}
