import FooterNavItem from '../footer-nav-item/footer-nav-item';
import {RoutesConfig} from '../../settings/settings';

const NAV_LINKS = [
  {title: 'Каталог', to: RoutesConfig.Main},
  {title: 'Гарантии', to: RoutesConfig.NotFound},
  {title: 'Доставка', to: RoutesConfig.NotFound},
  {title: 'О компании', to: RoutesConfig.NotFound},
];

const RESOURCES_LINKS = [
  {title: 'Курсы операторов', to: RoutesConfig.NotFound},
  {title: 'Блог', to: RoutesConfig.NotFound},
  {title: 'Сообщество', to: RoutesConfig.NotFound},
];

const SUPPORT_LINKS = [
  {title: 'FAQ', to: RoutesConfig.NotFound},
  {title: 'Задать вопрос', to: RoutesConfig.NotFound},
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
