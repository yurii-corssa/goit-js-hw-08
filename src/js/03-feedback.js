import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');

const saveFormDataToLocal = () => {
  const { email, message } = feedbackFormRef;

  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const submitForm = event => {
  event.preventDefault();

  const localFormData = localStorage.getItem('feedback-form-state');

  console.log(JSON.parse(localFormData));

  feedbackFormRef.reset();
  localStorage.removeItem('feedback-form-state');
};

const populateForm = () => {
  const localFormData = localStorage.getItem('feedback-form-state');

  if (localFormData) {
    const { email, message } = JSON.parse(localFormData);

    feedbackFormRef.email.value = email;
    feedbackFormRef.message.value = message;
  }
};

feedbackFormRef.addEventListener('input', throttle(saveFormDataToLocal, 500));
feedbackFormRef.addEventListener('submit', submitForm);
populateForm();
