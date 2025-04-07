function entrar() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Usuário e senha de exemplo 
    const usuarioValido = "admin";
    const senhaValida = "1234";

    if (usuario === usuarioValido && senha === senhaValida) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos.");
    }

    return false; 
}
