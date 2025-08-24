const btnEl = document.querySelector('button');

btnEl.addEventListener("click", function () {
  toggleTheme();
});

function toggleTheme() {
  if (document.body.style.backgroundColor === "black") {
    // Switch back to light
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btnEl.textContent = "Dark"
  } else {
    // Switch to dark
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btnEl.textContent = "Light"
  }
}
