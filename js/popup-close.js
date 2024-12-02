/* eslint-disable prefer-arrow-callback */
import { closeButtons, bigPicture, uploadOverlay } from './DOM-elements.js';

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Закрытие окна по клику на кнопку (иконку закрытия)
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function () {
    if (!bigPicture.classList.contains('hidden')) {
      closePopup(bigPicture);
    } else if (!uploadOverlay.classList.contains('hidden')) {
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

/*
Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля
выбора файла .img-upload__input. В принципе, всё будет работать, если при повторной попытке загрузить
в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же
фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания.
Значение других полей формы также нужно сбрасывать.

Как отменить обработчик Esc при фокусе?
Задача не имеет одного верного решения, однако намекнём
на самый простой — использовать stopPropagation для события нажатия клавиш в поле при фокусе.
*/
