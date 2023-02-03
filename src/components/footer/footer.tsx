import FooterInfo from '../footer-info/footer-info';
import FooterNav from '../footer-nav/footer-nav';

export default function Footer(): JSX.Element {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <FooterInfo/>
        <FooterNav/>
      </div>
    </footer>
  );
}
