import { scaleValue, picturePreview, scaleSmaller, scaleBigger } from './DOM-elements';
import { SCALE_STEP } from './const';

let scale = 100;

function updateScale() {
  scaleValue.value = `${scale}%`;
  picturePreview.style.transform = `scale(${scale / 100})`;
  // запись значения для отправки на сервер
}

scaleSmaller.addEventListener('click', () => {
  if (scale > 10) {
    scale -= SCALE_STEP;
    updateScale();
  }
});

scaleBigger.addEventListener('click', () => {
  if (scale < 100) {
    scale += SCALE_STEP;
    updateScale();
  }
});
