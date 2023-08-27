const valueElement = document.getElementById('value');
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');

    let counterValue = 0;

    function updateCounterText() {
      valueElement.textContent = counterValue;
    }

    decrementButton.addEventListener('click', function() {
      counterValue--;
      updateCounterText();
    });


    incrementButton.addEventListener('click', function() {
      counterValue++;
      updateCounterText();
    });


    updateCounterText();