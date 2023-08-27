let inputElement = document.getElementById('validation-input');

    inputElement.addEventListener('blur', function() {
      let inputValue = inputElement.value;
      let requiredLength = parseInt(inputElement.getAttribute('data-length'));

      if (inputValue.length === requiredLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
      }
    });