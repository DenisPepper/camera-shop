import { useOutletContext} from 'react-router-dom';

export default function ProductsListPage(): JSX.Element {
  const context = useOutletContext();

  // eslint-disable-next-line no-console
  console.log(context);

  return (
    <div>
      PRODUCTS PAGE
    </div>
  );
}
