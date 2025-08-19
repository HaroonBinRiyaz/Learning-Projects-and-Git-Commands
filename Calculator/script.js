const buttons = document.querySelectorAll("button");

const inputs = document.getElementById("display");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () =>{
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "C"){
    clearResult();
    }
    else if (buttonValue === "="){
      calculate();
    }
    else{
      appendValue(buttonValue);
      adjustFont();
    }
  });
  
}

function clearResult(){
  inputs.value = '';
}

function calculate(){
  // inputs.value = eval(inputs.value); //2) eval() function parses values as numbers.
  // the logic above is what i used earlier
  // Chat gpt logic below
  try {
    let result = eval(inputs.value);
    
    // Limit to 6 decimal places and remove trailing zeroes
    result = parseFloat(result.toFixed(6)).toString();
    
    inputs.value = result; //Updation
  } catch (e) {
    inputs.value = "Error ⚠️";
  }
}


function appendValue(buttonValue){ 
  inputs.value += buttonValue; //1) It appends values as strings
  // inputs.value = inputs.value + buttonValue;
  
}

function adjustFont() {
  if (inputs.value.length > 10) {
    inputs.style.fontSize = "30px";
  } else {
    inputs.style.fontSize = "50px";
  }
}
