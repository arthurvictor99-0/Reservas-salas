document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio do formulário

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") { // Simulação
      window.location.href = "Principal.html";
  } else {
      alert("Usuário ou senha incorretos!");
  }
});





  