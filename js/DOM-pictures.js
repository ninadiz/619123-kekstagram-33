import {pictureParams} from './picture-params-generator.js';

// Находим шаблон и контейнер для вставки элементов
const template = document.getElementById('picture');
const picturesContainer = document.querySelector('.pictures');

// Создаем DocumentFragment, чтобы временно хранить все сгенерированные элементы
const fragment = document.createDocumentFragment();

// Функция для создания и настройки элемента на основе шаблона
function createPictureElement({ url, description, comments, likes }) {
  const templateContent = template.content.cloneNode(true);
  // сама картинка и alt текст к ней
  const pictureImg = templateContent.querySelector('.picture__img');
  pictureImg.src = url;
  pictureImg.alt = description;
  // Форматируем и отображаем количество комментариев
  const commentsElement = templateContent.querySelector('.picture__comments'); //создали элемент с нужным тегом по темплейту
  commentsElement.textContent = Array.isArray(comments);
  if (Array.isArray(comments)) {
    // Если comments массив, отображаем количество комментариев
    commentsElement.textContent = `${comments.length}`;
  } else {
    // Если comments не массив, выводим сообщение "Нет комментариев"
    commentsElement.textContent = '0';
  }
  // Лайки
  templateContent.querySelector('.picture__likes').textContent = `${likes}`;
  return templateContent;
}

for (const item of pictureParams) {
  // Вызываем функцию создания элемента для каждого элемента массива с данными
  const pictureElement = createPictureElement(item);
  // Создаем и добавляем все элементы в fragment (хранится в оперативной памяти)
  fragment.appendChild(pictureElement);
}

// Вставляем все элементы из fragment в контейнер .pictures
picturesContainer.appendChild(fragment);

export {picturesContainer};

