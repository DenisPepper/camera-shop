import AppPopup from '../app-popup/app-popup';

export default function PostReviewPopup(): JSX.Element {

  return (
    <AppPopup>
      <div className={'modal is-active'}>
        Форма отправки комментрария
      </div>
    </AppPopup>
  );
}
