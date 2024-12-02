/* eslint-disable prefer-arrow-callback */
import { HASHTAGS_MAX_AMOUNT } from './const';

function checkType (hashtagsArray) {
  if (!hashtagsArray.every(function(hashtag) {
    return /^#[a-zA-Z0-9а-яА-Я]{1,20}$/.test(hashtag);
  })) {
    return ' Хештег начинается с #, содержит только буквы и/или цифры и не длиннее 20 символов.';
  }
}

function checkDublicates (hashtagsArray) {
  const uniqueHashtags = new Set(hashtagsArray); // Создаем множество (Set), которое автоматически удаляет повторяющиеся элементы
  if (uniqueHashtags.size !== hashtagsArray.length) {
    return 'Хештеги повторяются';
  }
}

function checkAmount (hashtagsArray) {
  if (hashtagsArray.length > HASHTAGS_MAX_AMOUNT) {
    return 'Хештегов слишком много, больше 20 не ставьте';
  }
}

const hashtagValidationRules = [
  checkType,
  checkDublicates,
  checkAmount,
];

const validateHashtagInput = (value) => {
  // Строка разбивается на массив по пробелам
  const strokesSplitArray = value.split(/\s/);
  // Все элементы массива преобразуются в нижний регистр
  const lowerCaseArray = strokesSplitArray.map(function(element) {
    return element.toLowerCase();
  });
  // Убираем пустые строки и всякий мусор из массива
  const hashtagsArray = lowerCaseArray.filter(Boolean);
  // Массив для хранения сообщений об ошибках
  const errorsMessagesArray = [];
  // Применяем валидаторы с использованием reduce
  const result = hashtagValidationRules.reduce(function(errors, validator) {
    const errorMessage = validator(hashtagsArray); // Применяем валидатор к каждому элементу массива hashtagsArray, там функция если встретит ошибку, выведет текст этой ошибки
    console.log(errorMessage);
    if (errorMessage) {
      errors.push(errorMessage); // Если ошибка найдена, добавляем её в массив-аккумулятор errors
    }
    console.log(errors);
    return errors; // Возвращаем обновлённый массив ошибок
  }, errorsMessagesArray); // Передаем массив-аккумулятор errors в массив errorsMessagesArray

  // Возвращаем итоговый массив ошибок
  return result;
};

export { validateHashtagInput };
