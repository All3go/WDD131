function isCardNumberValid(number) {
  // Only accept this fake test number for now
  return number === '1234123412341234';
}

function displayError(msg) {
  // Show error message in the .errorMsg <p>
  document.querySelector('.errorMsg').innerHTML = msg.replace(/\n/g, '<br>');
}

function submitHandler(event) {
  event.preventDefault(); // Stop form from reloading the page

  let errorMsg = '';
  displayError(''); // Clear any previous errors

  // Card number validation
  const cardNumber = this.cardNumber.value;
  if (isNaN(cardNumber)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  // Expiration date validation
  const month = parseInt(this.expMonth.value, 10);
  const year = parseInt(this.expYear.value, 10) + 2000; // Convert YY to YYYY

  if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    errorMsg += 'Expiration date is not valid\n';
  } else {
    const enteredDate = new Date(year, month - 1); // JS months: 0–11
    const now = new Date();
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth());

    if (enteredDate < startOfThisMonth) {
      errorMsg += 'Expiration date is in the past\n';
    }
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  // Passed all checks
  alert('Payment submitted successfully!');
  return true;
}

// Attach event listener to the form
document.querySelector('#credit-card').addEventListener('submit', submitHandler);
