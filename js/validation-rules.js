/* eslint-disable prefer-arrow-callback */
import { HASHTAGS_MAX_AMOUNT } from './const';

let hashtagsArray = [];

function checkType (value) {
  hashtagsArray = value.trim().split(/\s+/);
  const regex = /^#[A-Za-z0-9]{1,19}$/;
  return hashtagsArray.every((hashtag) => regex.test(hashtag));
}

function checkUnique(value) {
  // Разбиваем строку на хештеги
  hashtagsArray = value.trim().split(/\s+/);
  // Проверка на дубликаты
  return hashtagsArray.length === new Set(hashtagsArray).size;
}

function checkHashtagCount (value) {
  hashtagsArray = value.trim().split(/\s+/);
  return hashtagsArray.length < HASHTAGS_MAX_AMOUNT;
}

export { checkType, checkUnique, checkHashtagCount };
