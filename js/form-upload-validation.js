/* eslint-disable prefer-arrow-callback */
import { uploadForm, uploadButton, hashtagInput } from './DOM-elements.js';
import { validateHashtagInput } from './validation-rules.js';

const errorMessageConfig = {
  classTo: 'img-upload_field-wrapper', // Элемент с классом img-upload_field-wrapper получит дополнительный класс ошибки.
  errorContainer: 'img-upload__field-wrapper', // Сообщение об ошибке будет добавлено внутри контейнера img-upload__field-wrapper.
  errorTextClass: 'img-upload_field-wrapper--error' // Это сообщение об ошибке будет стилизовано с помощью класса img-upload_field-wrapper--error.
};

const pristine = new Pristine(uploadForm, errorMessageConfig, true); // true: включает валидацию при изменении значений в полях формы (после ввода каждой буквы).

pristine.addValidator (hashtagInput, validateHashtagInput, 'Некорректный хэштег. Проверьте правила и количество хэштегов.');

uploadButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Клик по кнопке отправки формы');

  const isValid = pristine.validate(); // Запускаем валидацию
  console.log('Результат валидации:', isValid); // Логируем результат

  const errors = pristine.getErrors();
  console.log('Ошибки:', errors); // Показываем какие ошибки были найдены

  if (isValid) {
    alert('Форма отправлена успешно');
  } else {
    alert('Есть ошибки в форме');
  }
});
