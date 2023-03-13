import React, {useLayoutEffect, useState} from 'react';
import {FilterPriceParams} from '../../settings/settings';
import {fetchMinMaxPrice} from '../../services/fetch-min-max-price/fetch-min-max-price';
import {useSearchParams} from 'react-router-dom';
import {debounce} from '../../lib/debounce/debounce';

type PriceParamsType = {
  [FilterPriceParams.GreaterThan]?: string;
  [FilterPriceParams.LessThan]?: string;
}

export default function FilterPrice(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMinPrice: number = Number(searchParams.get(FilterPriceParams.GreaterThan)) || 0;
  const initialMaxPrice: number = Number(searchParams.get(FilterPriceParams.LessThan)) || 0;
  const [minPrice, setMinPrice] = useState<number>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);
  const [minCatalogPrice, setMinCatalogPrice] = useState<string>('');
  const [maxCatalogPrice, setMaxCatalogPrice] = useState<string>('');
  const [minModifier, setMinModifier] = useState('');
  const [maxModifier, setMaxModifier] = useState('');

  const handleMinPriceBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    const params: PriceParamsType = {};
    let price = value;

    if (value && value < Number(minCatalogPrice)) {
      price = Number(minCatalogPrice);
    }
    if (value && maxPrice && value > maxPrice) {
      price = maxPrice;
    }
    if (value <= 0) {
      price = 0;
    }
    evt.target.value = price ? price.toString() : '';
    setMinPrice(() => price);

    if (maxPrice) {
      params[FilterPriceParams.LessThan] = maxPrice.toString();
    }
    if (price) {
      params[FilterPriceParams.GreaterThan] = value.toString();
    }
    setSearchParams(params);

    setupMinPriceStyles(!evt.target.value ? evt.target.value : price.toString());
  };

  const handleMaxPriceBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    const params: PriceParamsType = {};
    let price = value;

    if (value && value > Number(maxCatalogPrice)) {
      price = Number(maxCatalogPrice);
    }
    if (value && minPrice && value < minPrice) {
      price = minPrice;
    }
    if (value <= 0) {
      price = 0;
    }
    evt.target.value = price ? price.toString() : '';
    setMaxPrice(() => price);

    if (price) {
      params[FilterPriceParams.LessThan] = value.toString();
    }
    if (minPrice) {
      params[FilterPriceParams.GreaterThan] = minPrice.toString();
    }
    setSearchParams(params);

    setupMaxPriceStyles(!evt.target.value ? evt.target.value : price.toString());
  };

  const checkMaxPriceNotValid = (maxPriceValue: number) =>
    maxPriceValue <= 0
    || (maxCatalogPrice && maxPriceValue > Number(maxCatalogPrice))
    || (minPrice && maxPriceValue < minPrice)
    || (minCatalogPrice && maxPriceValue < Number(minCatalogPrice));

  const checkMinPriceNotValid = (minPriceValue: number) =>
    minPriceValue <= 0
    || (minCatalogPrice && minPriceValue < Number(minCatalogPrice))
    || (maxPrice && minPriceValue > maxPrice);

  const setupMinPriceStyles = (value: string) => {
    if (!value) {
      setMinModifier(value);
      return;
    }
    const modifier = checkMinPriceNotValid(Number(value)) ? 'is-invalid' : 'is-valid';
    setMinModifier(modifier);
  };

  const setupMaxPriceStyles = (value: string) => {
    if (!value) {
      setMaxModifier(value);
      return;
    }
    const modifier = checkMaxPriceNotValid(Number(value)) ? 'is-invalid' : 'is-valid';
    setMaxModifier(modifier);
  };

  const handleMinPriceChange = debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
    setupMinPriceStyles(evt.target.value);
  });

  const handleMaxPriceChange = debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
    setupMaxPriceStyles(evt.target.value);
  });

  /**
   fetch max and min prices from server
   */
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
              type="number"
              name="price"
              placeholder={minCatalogPrice}
              onChange={handleMinPriceChange}
              onBlur={handleMinPriceBlur}
            />
          </label>
        </div>

        <div className={`custom-input ${maxModifier}`}>
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder={maxCatalogPrice}
              onChange={handleMaxPriceChange}
              onBlur={handleMaxPriceBlur}
            />
          </label>
        </div>

      </div>
    </fieldset>
  );
}
