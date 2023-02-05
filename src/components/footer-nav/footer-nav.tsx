import FooterNavItem from '../footer-nav-item/footer-nav-item';
import {RoutesConfig} from '../../settings/settings';

const NAV_LINKS = [
  {title: 'Каталог', to: RoutesConfig.Main},
  {title: 'Гарантии', to: '/guarantees'},
  {title: 'Доставка', to: '/delivery'},
  {title: 'О компании', to: '/about'},
];

const RESOURCES_LINKS = [
  {title: 'Курсы операторов', to: '/courses'},
  {title: 'Блог', to: '/blog'},
  {title: 'Сообщество', to: '/community'},
];

const SUPPORT_LINKS = [
  {title: 'FAQ', to: '/faq'},
  {title: 'Задать вопрос', to: '/feedback'},
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
