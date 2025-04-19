const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");
const p = document.getElementsByTagName("p");
incrementButton.addEventListener("onclick", () => {
  p[0].innerText += 1;
});
decrementButton.addEventListener("onclick", () => {
  p[0].innerText -= 1;
});
