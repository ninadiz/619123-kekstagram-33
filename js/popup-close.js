/* eslint-disable prefer-arrow-callback */
import {bigPicture} from './popup-open';
const closeButton = document.querySelector('.big-picture__cancel');

// Функция для закрытия оверлея
function closeFullScreenView() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Закрытие окна по клику на кнопку (иконку закрытия)
closeButton.addEventListener('click', closeFullScreenView);

// Закрытие окна по нажатию клавиши Esc
document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closeFullScreenView();
  }
});
