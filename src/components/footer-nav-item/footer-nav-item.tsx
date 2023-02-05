import FooterLink from '../footer-link/footer-link';
import {FooterNavItemsType} from '../../types/footer-nav-items-type';

interface FooterNavItemProps {
  title: string;
  paths: FooterNavItemsType[];
}

export default function FooterNavItem(props: FooterNavItemProps): JSX.Element {
  const {title, paths} = props;

  return (
    <li className={'footer__nav-item'}>
      <p className="footer__title">{title}</p>
      <ul className={'footer__list'}>
        {paths.map( (path) => <FooterLink key={path.to} to={path.to}>{path.title}</FooterLink>)}
      </ul>
    </li>
  );
}

