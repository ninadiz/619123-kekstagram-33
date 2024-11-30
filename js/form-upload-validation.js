/*
const hashtagInput = document.querySelector('.text-hashtag');
const descriptionInput = document.querySelector('.text-description');

const pristineConfig = {
  classTo: 'img-upload_field-wrapper',
  errorTextParent: 'img-upload_field-wrapper',
  errorTextclass: 'img-upload_field-wrapper--error'
};

// validation rules
function validateHashtagInput() {
}

function getHashtagErrorMessage() {
}

function validateCommentInput() {
}

function getCommentErrorMessage() {
}


const pristine = new Pristine(uploadForm, pristineConfig, false);

// pristine.addValidator(element, validatorFunction, errorMessage, priority, halt);
pristine.addValidator(
  hashtagInput,
  validateHashtagInput,
  getHashtagErrorMessage);

pristine.addValidator(
  descriptionInput,
  validateCommentInput,
  getCommentErrorMessage);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    uploadForm.submit();
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

*/
