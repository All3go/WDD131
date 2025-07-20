const form = document.getElementById('contact-form');
const messageBox = document.createElement('p');
messageBox.id = 'form-message';
form.appendChild(messageBox);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-message');

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill out all fields.';
    feedback.style.color = 'red';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Thanks! We’re waiting for permission from the owner before Kim will receive your contact info.';
  feedback.style.color = 'green';

  setTimeout(() => {
    form.reset();
    feedback.textContent = '';
  }, 5000);
});
