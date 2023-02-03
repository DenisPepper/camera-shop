import {Link, LinkProps} from 'react-router-dom';

type HeaderLinkProps = LinkProps

export default function HeaderLink(props: HeaderLinkProps): JSX.Element {
  const {children, to: path, ...restProps} = props;

  return(
    <li className={'main-nav__item'}>
      <Link className={'main-nav__link'} to={path} {...restProps}>{children}</Link>
    </li>
  );
}
