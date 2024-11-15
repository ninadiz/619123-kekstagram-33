/* eslint-disable prefer-arrow-callback */
import {picturesContainer} from './DOM-pictures';
import {pictureParams} from './picture-params-generator.js';
console.log(pictureParams);

// Находим необходимые элементы
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const userAvatar = bigPicture.querySelector('.social__picture');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureLikes = bigPicture.querySelector('.social__likes .likes-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotal = bigPicture.querySelector('.social__comment-total-count');

// Функция создания списка комментов в оверлее
// Сначала нужно узнать, по какой фотке кликнули

// Функция для открытия полноэкранного просмотра
function openFullScreenView(imageUrl, description, likesCount) {
  // Изменяем содержимое
  bigPictureImg.src = imageUrl; // Устанавливаем путь к изображению
  userAvatar.src = imageUrl; // Аватар пользователя
  bigPictureDescription.textContent = description; // Подпись к изображению
  bigPictureLikes.textContent = likesCount; // Количество лайков
  commentsShown.textContent = 2;
  commentsTotal.textContent = 222;
  // Cоздание списка комментов в оверлее
  // Сначала нужно узнать, по какой фотке кликнули - параметр ImageId

  // Делаем оверлей видимым
  bigPicture.classList.remove('hidden');
  // Прячем ссылку загрузить еще
  commentsLoader.classList.add('hidden');
  //Убираем прокрутку контента когда попап открыт
  document.body.classList.add('modal-open');
}

// Обработчик клика на миниатюру
picturesContainer.addEventListener('click', function(evt) {
  // если элемент не найден, вернет null
  // closest ищет родителя элемента (включая сам элемент) с этим тегом
  const pictureLink = evt.target.closest('.picture');
  // В JavaScript null, undefined, 0, NaN, пустая строка (""), или false, являются "ложными" (falsе)
  // Условие if (pictureLink) станет if (false) и код не выполнится
  if (pictureLink) {
    evt.preventDefault();
    // Получаем данные изображения из DOM элементов
    const imageUrl = pictureLink.querySelector('img').src;
    const description = pictureLink.querySelector('img').alt;
    const likesCount = pictureLink.querySelector('.picture__likes').textContent;

    // Вызываем функцию с этими параметрами
    openFullScreenView(imageUrl, description, likesCount);
  }
});

export {bigPicture};
