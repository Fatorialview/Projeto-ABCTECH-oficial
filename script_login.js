// ---------- VALIDAÇÃO USERNAME ---------- //
let NomeInput = document.getElementById("Nome");
let NomeLabel = document.querySelector('label[for="Nome"]');
let NomeHelper = document.getElementById("Nome-helper");

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');

NomeInput.addEventListener("blur", () => {

  NomeLabel.classList.remove("required-popup");
});

function mostrar_popup(input, label) {
  input.addEventListener("focus", () => {

    label.classList.add("required-popup");
  });
}

mostrar_popup(NomeInput, NomeLabel)
mostrar_popup(senhaInput, senhaLabel)

NomeInput.addEventListener("input", (evento) => {
  console.log(evento.target.value);

  if (evento.target.value.length < 3) {
    NomeInput.classList.remove("correct");

    NomeInput.classList.add("error");

    NomeHelper.classList.add("visible");

    NomeHelper.innerText = "Campo deve no minimo 3 caracteres!";
  } else {
    NomeInput.classList.remove("error");

    NomeInput.classList.add("correct");

    NomeHelper.classList.remove("visible");
  }
});