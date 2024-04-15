//-------------- FUNÇÕES GERAIS---------
function togglePopup(input, label) {
  // mostrar popup de campo obrigatorio
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  //ocultar popup de campo obrigatorio
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

//-----------VALIDAÇÃO USERNAME------------
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

//Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.length < 3) {
    //adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
    inputsCorretos.username = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true
  }
})

//-----------VALIDAÇÃO EMAIL------------
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if (valor.includes("@") && valor.includes(".com")) {
    //Adicioner estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicioner estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})

//----------------VALIDAÇÃO DE SENHA-----------
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value
  if (valor == "") {
    senhaHelper.innerText = "O campo senha não pode estar vazio"
    estilizarInputIncorreto(senhaInput, senhaHelper)
    inputsCorretos.senha = false
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper)
    inputsCorretos.senha = true
  }
})

//----------------VALIDAÇÃO confirmar SENHA-----------
let confirmaSenhaInput = document.getElementById("confirma-senha")
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valorconfirmasenha = e.target.value

  if (valorconfirmasenha == senhaInput.value) {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmaSenha = true
  } else {
    confirmaSenhaHelper.innerText = "As senhas precisam ser iguais"
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmaSenha = false
  }
})

//----------------EVITAR O ENVIO DO FORMULÁRIO-----------
let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmasenha: false
}

btnSubmit.addEventListener("click", (e) => {
  if (inputsCorretos.username == false ||
    inputsCorretos.email == false ||
    inputsCorretos.senha == false ||
    inputsCorretos.confirmaSenha == false) {
    e.preventDefault()
    alert('Os campos obrigatórios precisam ser preenchidos corretamente')
  } else {
    alert("Formulário enviado com sucesso")
  }

})
