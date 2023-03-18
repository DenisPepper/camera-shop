import HeaderSearchResetButton from '../header-search-reset-button/header-search-reset-button';
import HeaderSearchInput from '../header-search-input/header-search-input';
import HeaderSearchList from '../header-search-list/header-search-list';
import {useRef, useState} from 'react';
import {
  fetchProductsByNameSubstring
} from '../../services/fetch-products-by-name-substring/fetch-products-by-name-substring';
import {ProductType} from '../../types/product-type';
import {DEFAULT_PRODUCT_TAB, Path as to} from '../../settings/settings';
import {useNavigate} from 'react-router-dom';

export default function HeaderSearchForm(): JSX.Element {
  const navigate = useNavigate();
  const [notEmpty, setNotEmpty] = useState(() => false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormInput = (value: string) => {
    setNotEmpty(() => !!value);
    value ?
      fetchProductsByNameSubstring(value)
        .then((data) => setProducts(data))
      :
      setProducts([]);
  };

  const handleFormPick = (id: number) => {
    formRef.current?.reset();
    navigate(`/${to.Product}/${id}?tab=${DEFAULT_PRODUCT_TAB}`);
  };

  const handleFormReset = () => {
    setNotEmpty(() => false);
    setProducts(() => []);
  };

  return (
    <div className={`form-search ${products.length ? 'list-opened' : ''}`} data-testid={'form-search'} >
      <form onReset={handleFormReset} ref={formRef}>

        <HeaderSearchInput
          key={'HeaderSearchInput'}
          handleFormInput={handleFormInput}
        />

        {!!products.length &&
          <HeaderSearchList
            key={'HeaderSearchList'}
            products={products}
            handleFormPick={handleFormPick}
          />}

        {notEmpty &&
          <HeaderSearchResetButton
            key={'HeaderSearchResetButton'}
          />}
      </form>

    </div>
  );
}
