/* eslint-disable prefer-arrow-callback */
import { closeButtons, bigPicture } from './DOM-elements.js';
const uploadOverlay = document.querySelector('.img-upload__overlay');

// Функция закрытия попапа
function closePopup(popup) {
  console.log('Классы до добавления hidden:', popup.classList.toString());
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  console.log(uploadOverlay);
  console.log('Классы после добавления hidden:', popup.classList.toString());
}

// Закрытие окна по клику на кнопку (иконку закрытия)
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function () {
    if (!bigPicture.classList.contains('hidden')) {
      console.log('Нажата кнопка крестик у биг пикчур ');
      closePopup(bigPicture);
    } else if (!uploadOverlay.classList.contains('hidden')) {
      console.log('uploadOverlay открыт, закрываю...');
      closePopup(uploadOverlay);
    }
  });
});

// Добавляем обработчик события нажатия клавиши "Esc"
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (!bigPicture.classList.contains('hidden')) {
      closePopup(bigPicture);
    } else if (!uploadOverlay.classList.contains('hidden')) {
      closePopup(uploadOverlay);
    }
  }
});
