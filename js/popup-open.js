/* eslint-disable prefer-arrow-callback */
import {pictureParams} from './picture-params-generator.js';
import {getRandomInteger} from './random-number-from-range.js';

//
const SHOWN_COMMENTS_NUMBER = 5;

// Находим необходимые элементы
const bigPicture = document.querySelector('.big-picture');
const loadMore = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const userAvatar = bigPicture.querySelector('.social__header .social__picture'); // ищем элемент social__picture внутри элемента с .social__header
const bigPictureLikes = bigPicture.querySelector('.social__likes .likes-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotal = bigPicture.querySelector('.social__comment-total-count');
const pictureThumbnailsLinks = document.querySelectorAll('.picture'); // Получаем все элементы с классом .picture__img в коллекции NodeList
const dynamicCommentsList = bigPicture.getElementsByClassName('social__comment'); // создает динамическую коллекцию комментариев

// Функция генерации DOM элементов для комментов
function getComments(comment) {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  newComment.appendChild(commentAvatar);
  newComment.appendChild(commentText);
  return newComment;
}

// Функция открытия попапов
function openPopup (evt, imageUrl, description, likesCount) {
  const clickedPicture = evt.target; // Получаем  DOM элемент, на который кликнули - <img>
  const clickedPictureId = parseInt(clickedPicture.dataset.id, 10);
  bigPictureImg.src = imageUrl; // Устанавливаем путь к изображению
  userAvatar.src = `img/avatar${getRandomInteger(1, 6)}.svg`; // Аватар пользователя
  bigPictureDescription.textContent = description; // Подпись к изображению
  bigPictureLikes.textContent = likesCount; // Количество лайков
  bigPicture.classList.remove('hidden'); // Делаем оверлей видимым
  // commentsLoader.classList.add('hidden'); // Прячем ссылку загрузить еще
  document.body.classList.add('modal-open'); // Убираем прокрутку контента когда попап открыт
  // Вытягиваем комментарии из массива объектов pictureParams
  commentsList.innerHTML = ''; // стираем исходник html
  const commentsArray = pictureParams[clickedPictureId - 1].comments;
  commentsShown.textContent = SHOWN_COMMENTS_NUMBER;
  commentsTotal.textContent = commentsArray.length;
  // Запускаем генератор DOM элементов комментариев для каждого элемента массива
  commentsArray.forEach(function (comment) {
    const commentElement = getComments(comment);
    commentsList.appendChild(commentElement);
  });
  // Ищем каждый элемент списка комментов и скрываем их начиная со следующего после SHOWN_COMMENTS_NUMBER
  for (let i = SHOWN_COMMENTS_NUMBER; i < dynamicCommentsList.length; i++) {
    dynamicCommentsList[i].classList.add('hidden');
  }
}

// Слушалка по клику на loadMore
loadMore.addEventListener('click', function () {
  console.log('Нажала загрузить еще');
  loadMoreComments ();
});

// Функция отображения следующих комментариев
function loadMoreComments () {
  console.log('Комменты загрузились');

  for (let i = SHOWN_COMMENTS_NUMBER; i < dynamicCommentsList.length; i++) {
    dynamicCommentsList[i].classList.add('hidden');
  }
}

// Слушалка ссылок для каждого элемента в коллекции pictureThumbnailsLinks, thumbnail - это все найденные <a> c тегом .picture
pictureThumbnailsLinks.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function(evt) {
    evt.preventDefault();
    const imageUrl = thumbnail.querySelector('.picture__img').src;
    const description = thumbnail.querySelector('.picture__img').alt;
    const likesCount = thumbnail.querySelector('.picture__likes').textContent;
    openPopup(evt, imageUrl, description, likesCount); // Вызываем функцию с этими параметрами
  });
});

export {bigPicture};
