// Le input
const input = document.getElementById("text-input");

// Le champ de texte
const texte = document.getElementById("text");

input.addEventListener("change", (event) => {
  event.preventDefault();
  const { value } = input;
  if (value == "") {
    texte.innerHTML = "Ce texte change avec l'input en dessous";
    return;
  }
  texte.innerHTML = input.value;
});
