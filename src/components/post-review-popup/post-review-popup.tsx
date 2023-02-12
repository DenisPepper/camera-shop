import AppPopup from '../app-popup/app-popup';

interface PostReviewPopupProps {
  isOpen: boolean;
}

export default function PostReviewPopup(props: PostReviewPopupProps): JSX.Element {
  const {isOpen} = props;

  return (
    <AppPopup isOpen={isOpen}>
      Форма отправки отзыва
    </AppPopup>
  );
}
