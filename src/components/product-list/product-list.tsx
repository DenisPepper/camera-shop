import {useParams} from 'react-router-dom';

export default function ProductList(): JSX.Element {
  const {page = ''} = useParams();

  return (
    <div className={'catalog__content'}>
      {`catalog page ${page}`}
    </div>
  );
}
