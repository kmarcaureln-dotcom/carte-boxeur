const bouton = document.getElementById("bouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
  message.textContent = "20 victoires, 3 défaites. Un vrai boxeur ! 🥊";
});