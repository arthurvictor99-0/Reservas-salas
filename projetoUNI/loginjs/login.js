document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    // Recupera as credenciais salvas no LocalStorage
    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');

    // Verifica se as credenciais estão corretas
    if (usuario && senha) {
        if (usuario === usuarioSalvo && senha === senhaSalva) {
            alert('Login realizado com sucesso!');
            window.location.href = 'principal.html'; // Redireciona para a página principal
        } else {
            alert('Usuário ou senha incorretos!');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
