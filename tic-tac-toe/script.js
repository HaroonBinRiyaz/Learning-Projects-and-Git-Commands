const buttons = document.querySelectorAll(".option-btn");
const resultEl = document.getElementById("result")
const resetBtn = document.getElementById("reset-btn")
const xscore = document.getElementById("xscore");
const oscore = document.getElementById("oscore");
let gameOver = false;
let Xscore = 0;
let Oscore = 0;
console.log(buttons);
let xPlay = true;
let oPlay = false;

buttons.forEach(button => {
  button.addEventListener("click", function(e){
     if (gameOver) return;
     if (button.textContent !== "") return;  //stop running the rest of this click event function and go back
    
    // console.log(button)
    addXOrO(button);
    checkWin(buttons);
  })
})

function addXOrO(button){


  if(xPlay == true){
    button.textContent = "x";
    button.style.color = "red";
    oPlay = true;
    xPlay = false;
    
  }
  else{
    button.textContent = "o"
    button.style.color = "green"
    oPlay = false;
    xPlay = true;
    

  }
 
}

function checkWin(buttons){
  if((buttons[0].textContent == "x" && buttons[1].textContent == "x" && buttons[2].textContent == "x")||
  (buttons[3].textContent == "x" && buttons[4].textContent == "x" && buttons[5].textContent == "x") || 
  (buttons[6].textContent == "x" && buttons[7].textContent == "x" && buttons[8].textContent == "x") ||
  (buttons[0].textContent == "x" && buttons[3].textContent == "x" && buttons[6].textContent == "x") ||
  (buttons[1].textContent == "x" && buttons[4].textContent == "x" && buttons[7].textContent == "x") ||
  (buttons[2].textContent == "x" && buttons[5].textContent == "x" && buttons[8].textContent == "x") ||
  (buttons[0].textContent == "x" && buttons[4].textContent == "x" && buttons[8].textContent == "x") ||
  (buttons[2].textContent == "x" && buttons[4].textContent == "x" && buttons[6].textContent == "x")){

    resultEl.innerHTML = "X WINS";
    Xscore++;
    xscore.textContent = Xscore;
     gameOver = true;
    


    


  } else if((buttons[0].textContent == "o" && buttons[1].textContent == "o" && buttons[2].textContent == "o")||
  (buttons[3].textContent == "o" && buttons[4].textContent == "o" && buttons[5].textContent == "o") || 
  (buttons[6].textContent == "o" && buttons[7].textContent == "o" && buttons[8].textContent == "o") ||
  (buttons[0].textContent == "o" && buttons[3].textContent == "o" && buttons[6].textContent == "o") ||
  (buttons[1].textContent == "o" && buttons[4].textContent == "o" && buttons[7].textContent == "o") ||
  (buttons[2].textContent == "o" && buttons[5].textContent == "o" && buttons[8].textContent == "o") ||
  (buttons[0].textContent == "o" && buttons[4].textContent == "o" && buttons[8].textContent == "o") ||
  (buttons[2].textContent == "o" && buttons[4].textContent == "o" && buttons[6].textContent == "o")){

   resultEl.innerHTML = "O WINS";
   Oscore++;
   oscore.textContent = Oscore;
   gameOver = true;

  } 
// Draw logic, done using A.I
  const allFilled = [...buttons].every(btn => btn.textContent !== "");
  if (allFilled && !gameOver) {
    resultEl.innerHTML = "DRAW";
    gameOver = true;
  }
}
  

  




  resetBtn.addEventListener('click', function(e){
    buttons.forEach(button => {button.textContent = "";
      xPlay = true;
      oPlay = false;
      gameOver = false;
      resultEl.textContent = '';

    })
  })