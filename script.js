// Função para salvar os dados do cadastro no Local Storage
function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const confirmSenha = document.getElementById('confirm-password').value;

    if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Salva os dados no Local Storage (email como chave)
    localStorage.setItem(email, JSON.stringify({ nome: nome, senha: senha }));
    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');

    // Redireciona para a página de login
    window.location.href = "login.html";
}

// Função para realizar o login e redirecionar para a página index.html
function fazerLogin(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Verifica se o usuário está cadastrado no Local Storage
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario) {
        // Valida a senha
        if (usuario.senha === senha) {
            alert(`Bem-vindo, ${usuario.nome}!`);
            // Redireciona para a página inicial (index.html)
            window.location.href = "inicio.html"; // Aqui redireciona para a página inicial
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    } else {
        alert("Usuário não encontrado. Verifique o e-mail ou cadastre-se.");
    }
}

// Função para lidar com a recuperação de senha
function recuperarSenha() {
    const email = prompt("Por favor, insira seu e-mail:");

    // Verifica se o e-mail está cadastrado no Local Storage
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario) {
        alert(`Sua senha é: ${usuario.senha}`);
    } else {
        alert("E-mail não encontrado. Cadastre-se.");
    }
}

// Adiciona ouvintes de eventos para os formulários
document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.querySelector("form[action='process_cadastro.php']");
    const formLogin = document.querySelector("#loginForm"); // Seleciona o formulário de login

    if (formCadastro) {
        formCadastro.addEventListener("submit", cadastrarUsuario);
    }

    if (formLogin) {
        formLogin.addEventListener("submit", fazerLogin); // Adiciona o evento de submit
    }

    // Botão de "Esqueceu a senha?"
    const esqueceuSenhaBtn = document.getElementById('esquecer-senha');
    if (esqueceuSenhaBtn) {
        esqueceuSenhaBtn.addEventListener("click", recuperarSenha);
    }
});
// Aguardando o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Capturando o botão e adicionando o evento de clique
    document.getElementById('search-button').addEventListener('click', buscarConcurso);
});

function buscarConcurso() {
    // Obtendo o valor da pesquisa (em minúsculo para tornar a busca insensível a maiúsculas/minúsculas)
    var pesquisa = document.getElementById("pesquisa").value.toLowerCase();

    // Mapeamento de concursos e links
    var concursos = {
        "inss 2024": "https://www.inss.gov.br/concursos",
        "banco do brasil": "https://www.bb.com.br/pbb/concursos",
        "polícia federal": "https://www.pf.gov.br/concursos",
        "correios": "https://www.correios.com.br/concursos"
    };

    // Verifica se a pesquisa corresponde a algum concurso
    if (concursos[pesquisa]) {
        window.location.href = concursos[pesquisa]; // Redireciona para o link correspondente
    } else {
        alert("Concurso não encontrado! Tente novamente.");
    }
}
// Lista de concursos
const concursos = {
    "inss 2024": "https://www.cebraspe.org.br/concursos/",
    "banco do brasil": "https://www.cesgranrio.org.br/concursos/",
    "polícia federal": "https://www.cebraspe.org.br/concursos/",
    "correios": "https://www.cesgranrio.org.br/concursos/"
};

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('pesquisa');
    const searchButton = document.getElementById('search-button');
    const suggestionsContainer = document.getElementById('suggestions');

    // Evento de digitação na barra de pesquisa
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        // Filtra os concursos que correspondem à pesquisa
        const filteredConcursos = Object.keys(concursos).filter(c => c.toLowerCase().includes(query));

        // Limpa a lista de sugestões antes de adicionar novos itens
        suggestionsContainer.innerHTML = '';

        // Adiciona sugestões se houver correspondências
        if (filteredConcursos.length > 0 && query) {
            filteredConcursos.forEach(function(concurso) {
                const suggestion = document.createElement('div');
                suggestion.classList.add('suggestion');
                suggestion.textContent = concurso;
                suggestion.addEventListener('click', function() {
                    searchInput.value = concurso;
                    suggestionsContainer.innerHTML = '';  // Limpa as sugestões ao clicar em uma
                    buscarConcurso(concurso);
                });
                suggestionsContainer.appendChild(suggestion);
            });
        }
    });

    // Quando clicar no botão de pesquisa
    searchButton.addEventListener('click', function() {
        buscarConcurso(searchInput.value);
    });
});

// Função de busca
function buscarConcurso(query) {
    query = query.toLowerCase(); // Normaliza a pesquisa para minúsculas

    if (concursos[query]) {
        window.location.href = concursos[query]; // Redireciona para o concurso correspondente
    } else {
        alert("Concurso não encontrado! Tente novamente.");
    }
}
document.getElementById('voltarBtn').addEventListener('click', function() {
    // Redireciona para a página inicial
    window.location.href = 'inicio.html'; // Ou qualquer outro caminho que você deseje
});