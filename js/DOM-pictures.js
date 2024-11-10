// Массив данных
const picturesData = [
  { href: 'https://example.com/photo1', src: 'https://example.com/photo1.jpg', comments: 5, likes: 10 },
  { href: 'https://example.com/photo2', src: 'https://example.com/photo2.jpg', comments: 8, likes: 15 },
  // можно добавить больше объектов
];


// Находим шаблон и контейнер для вставки элементов
const template = document.getElementById('picture');
const picturesContainer = document.querySelector('.pictures');

// Создаем DocumentFragment, чтобы временно хранить все сгенерированные элементы
const fragment = document.createDocumentFragment();

// Функция для создания и настройки элемента на основе шаблона
function createPictureElement({ href, src, comments, likes }) {
  const templateContent = template.content.cloneNode(true);
  // ссылка на картинку
  const pictureLink = templateContent.querySelector('.picture');
  pictureLink.href = href;
  // источник картинки
  const pictureImg = templateContent.querySelector('.picture__img');
  pictureImg.src = src;
  // лайки и комменты
  templateContent.querySelector('.picture__comments').textContent = `${comments } comments`;
  templateContent.querySelector('.picture__likes').textContent = `${likes } likes`;

  return templateContent;
}

// Создаем и добавляем все элементы в fragment (хранится в оперативной памяти?)

// Вызываем функцию создания элемента для каждого элемента массива с данными

for (const item of picturesData) {
  const pictureElement = createPictureElement(item);
  fragment.appendChild(pictureElement);
}

// Вставляем все элементы из fragment в контейнер .pictures
picturesContainer.appendChild(fragment);
