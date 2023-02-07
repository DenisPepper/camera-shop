import FooterNavItem from '../footer-nav-item/footer-nav-item';
import {Path, PathName} from '../../settings/settings';

const NAV_LINKS = [
  {title: PathName[Path.Catalog], to: Path.Catalog},
  {title: PathName[Path.Guarantee], to: Path.Guarantee},
  {title: PathName[Path.Delivery], to: Path.Delivery},
  {title: PathName[Path.About], to: Path.About},
];

const RESOURCES_LINKS = [
  {title: PathName[Path.Courses], to: Path.Courses},
  {title: PathName[Path.Blog], to: Path.Blog},
  {title: PathName[Path.Community], to: Path.Community},
];

const SUPPORT_LINKS = [
  {title: PathName[Path.Faq], to: Path.Faq},
  {title: PathName[Path.Feedback], to: Path.Feedback},
];

export default function FooterNav(): JSX.Element {
  return (
    <ul className={'footer__nav'}>
      <FooterNavItem
        key={'Навигация'}
        title={'Навигация'}
        paths={NAV_LINKS}
      />
      <FooterNavItem
        key={'Ресурсы'}
        title={'Ресурсы'}
        paths={RESOURCES_LINKS}
      />
      <FooterNavItem
        key={'Поддержка'}
        title={'Поддержка'}
        paths={SUPPORT_LINKS}
      />
    </ul>
  );
}
