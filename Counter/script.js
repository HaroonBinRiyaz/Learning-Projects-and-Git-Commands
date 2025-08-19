const buttons = document.querySelectorAll('button');
const valueDisplay = document.querySelector('p');
let value = parseInt(valueDisplay.innerText);

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerText;

    if (buttonValue === "Increase") {
      value += 1;
    } else if (buttonValue === "Decrease") {
      value -= 1;
    } else if (buttonValue === "Reset") {
      value = 0;
    }

    valueDisplay.innerText = value;
  });
});
