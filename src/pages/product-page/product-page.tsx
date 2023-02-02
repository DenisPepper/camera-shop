import {useParams} from 'react-router-dom';

export default function ProductPage(): JSX.Element {
  const {id = ''} = useParams();

  return (<main>PRODUCT № {id} Page</main>);
}
