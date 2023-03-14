import React, {Dispatch, SetStateAction, useLayoutEffect, useRef, useState} from 'react';
import {fetchMinMaxPrice} from '../../services/fetch-min-max-price/fetch-min-max-price';
import {debounce} from '../../lib/debounce/debounce';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions} from '../../store/slices/search-params/slice/search-params-slice';
import {shallowEqual, useSelector} from 'react-redux';
import {getMinPrice} from '../../store/slices/search-params/selectors/get-min-price/get-min-price';
import {getMaxPrice} from '../../store/slices/search-params/selectors/get-max-price/get-max-price';

interface FilterPriceProps {
  resetStylesHandlers: Dispatch<SetStateAction<string>>[];
}

export default function FilterPrice(props: FilterPriceProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {resetStylesHandlers} = props;
  const minPrice = Number(useSelector(getMinPrice, shallowEqual));
  const maxPrice = Number(useSelector(getMaxPrice, shallowEqual));
  const [minCatalogPrice, setMinCatalogPrice] = useState<string>('');
  const [maxCatalogPrice, setMaxCatalogPrice] = useState<string>('');
  const [minModifier, setMinModifier] = useState('');
  const [maxModifier, setMaxModifier] = useState('');
  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);

  const handleMinPriceBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
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
    // eslint-disable-next-line no-console
    console.log(price);
    dispatch(searchParamsActions.setMinPrice(price === 0 ? '' : price.toString()));
    setupMinPriceStyles(!evt.target.value ? evt.target.value : price.toString());
  };

  const handleMaxPriceBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
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
    dispatch(searchParamsActions.setMaxPrice(price === 0 ? '' : price.toString()));
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

  useLayoutEffect(() => {
    resetStylesHandlers.push(setMaxModifier);
    resetStylesHandlers.push(setMinModifier);
  }, []);

  useLayoutEffect(() => {
    minRef.current && (minRef.current.value = minPrice ? minPrice.toString() : '');
    maxRef.current && (maxRef.current.value = maxPrice ? maxPrice.toString() : '');
  }, [minPrice, maxPrice]);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">

        <div className={`custom-input ${minModifier}`}>
          <label>
            <input
              ref={minRef}
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
              ref={maxRef}
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
