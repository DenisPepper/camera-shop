import {Link, LinkProps} from 'react-router-dom';

type FooterLinkProps = LinkProps

export default function FooterLink(props: FooterLinkProps): JSX.Element {
  const {children, to: path, ...restProps} = props;

  return(
    <li className={'footer__item'}>
      <Link className={'link'} to={path} {...restProps}>{children}</Link>
    </li>
  );
}
