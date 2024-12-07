/* eslint-disable prefer-arrow-callback */
const picturePreview = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderInput = document.querySelector('.effect-level__value');
const effectItems = document.querySelectorAll('.effects__item'); // каждый li списка фильтров

sliderContainer.classList.add('hidden');

const startValue = [100];
const stepValue = 1;
const minValue = [0];
const maxValue = [100];

const slider = noUiSlider.create(sliderElement, {
  start: startValue,
  connect: 'lower',
  step: stepValue,
  range: {
    'min': minValue,
    'max': maxValue
  }
});

sliderInput.value = startValue;

const effectSliderParams = {
  chrome: { start: 1, step: 0.1, min: 0, max: 1 },
  sepia: { start: 1, step: 0.1, min: 0, max: 1 },
  marvin: { start: 100, step: 1, min: 0, max: 100 },
  phobos: { start: 3, step: 0.1, min: 0, max: 3 },
  heat: { start: 3, step: 0.1, min: 1, max: 3 }
};

function setSliderParams(effectDefault, effectStep, effectMinValue, effectMaxValue) {
  slider.updateOptions({
    start: effectDefault,
    step: effectStep,
    range: {
      'min': effectMinValue,
      'max': effectMaxValue
    }
  });
}

// Карта эффектов: по тому, что написано в `value` у инпута type="radio" выбирает нужный CSS-фильтр
const effectsMap = {
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`,
  original: () => '' // Для оригинала удаляется фильтр
};

// Слушалка изменений в слайдере - срабатывает в том числе при запуске страницы
sliderElement.noUiSlider.on('update', () => {
  sliderInput.value = parseFloat(sliderElement.noUiSlider.get()).toFixed(1); // Обновляем значение в input с точностью до 1 знака
  const effectType = document.querySelector('input[type="radio"]:checked')?.value; // Получаем текущее значение фильтра

  if (effectType && effectsMap[effectType]) { // Проверяем, что effectType существует и это функция в effectsMap (ее не существует при запуске страницы)
    const filterValue = sliderInput.value;
    picturePreview.style.filter = effectsMap[effectType](filterValue); // Применяем фильтр с значением слайдера
  }
});

// Слушалка для каждого элемента списка фильтров
effectItems.forEach(function(effectTypeElement) {
  effectTypeElement.addEventListener('click', function() {
    const radioInput = effectTypeElement.querySelector('input[type="radio"]'); // Находим вложенный input внутри текущего элемента
    const effectType = radioInput.value; // Получаем значение effectType этого input
    if (radioInput.value !== 'none') {
      sliderContainer.classList.remove('hidden');
      const { start, step, min, max } = effectSliderParams[effectType];
      setSliderParams(start, step, min, max); // Обновляем параметры слайдера
      sliderElement.noUiSlider.set(start); // Устанавливаем начальное значение слайдера
      sliderInput.value = start; // Обновляем значение input слайдера
      picturePreview.style.filter = effectsMap[effectType](start); // Применяем фильтр с дефолтным(стартовым) значением слайдера
    } else {
      sliderContainer.classList.add('hidden');
    }
  });
});
