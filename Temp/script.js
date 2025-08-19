const button = document.getElementById("btn");

button.addEventListener("click",function(e){

  const input = document.getElementById("inputText");
  const inputValue = parseInt(input.value.trim());
  const fahren = document.getElementById("fahren");
  const celsius = document.getElementById("celsius");
  const result = document.getElementById("result");
 
 if (isNaN(inputValue)) {
  result.innerText = "Enter a valid number";
  return;
}
 if (fahren.checked){
  result.innerText = ((inputValue - 32) * 5/9).toFixed(3) + "°C"
  
 }

 if(celsius.checked){
  result.innerText = (inputValue * 9/5).toFixed(3) + 32 + "°F"
 }

 if (!celsius.checked && !fahren.checked){
  result.innerText = "Please select one of the options"
 }
 

});
