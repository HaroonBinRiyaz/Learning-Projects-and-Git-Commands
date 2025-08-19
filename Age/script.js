const dob = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const result = document.getElementById("display");

function calculateAge(){
  const dobValue = dob.value;
  if (dobValue === ''){
    alert("Please enter a date!")
  }
  else{
    const age = getAge(dobValue);
  }
}

function getAge(dobValue) {
  const today = new Date();
  const birthdayDate = new Date(dobValue);

  if (today < birthdayDate) {
    alert("Are you really from the future! 😳");
    return;
  }

  let years = today.getFullYear() - birthdayDate.getFullYear();
  let months = today.getMonth() - birthdayDate.getMonth();
  let days = today.getDate() - birthdayDate.getDate();

  if (days < 0) {
    months--; // borrow a month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.value = '';
  result.value = `You are ${years} years and ${months} months old`;
}


btnEl.addEventListener("click", calculateAge);