document.getElementById("teste-vocacional").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Coletando as respostas das questões
    const questao1 = document.querySelector('input[name="questao1"]:checked');
    const questao2 = document.querySelector('input[name="questao2"]:checked');
    const questao3 = document.querySelector('input[name="questao3"]:checked');
    const questao4 = document.querySelector('input[name="questao4"]:checked');

    // Verificando se todas as perguntas foram respondidas
    if (!questao1 || !questao2 || !questao3 || !questao4) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    // Definindo as pontuações para as profissões
    let pontuacao = {
        "Tecnologia": 0,
        "Ciências Humanas": 0,
        "Saúde": 0,
        "Artes": 0,
        "Engenharia": 0,
        "Administração": 0
    };

    // Atribuindo pontos às respostas de cada questão
    // Questão 1
    if (questao1.value === "Tecnologia") pontuacao["Tecnologia"] += 3;
    if (questao1.value === "Ciências Humanas") pontuacao["Ciências Humanas"] += 2;
    if (questao1.value === "Saúde") pontuacao["Saúde"] += 2;
    if (questao1.value === "Artes") pontuacao["Artes"] += 1;
    if (questao1.value === "Engenharia") pontuacao["Engenharia"] += 3;
    if (questao1.value === "Administração") pontuacao["Administração"] += 2;

    // Questão 2
    if (questao2.value === "Criativa") pontuacao["Artes"] += 3;
    if (questao2.value === "Organizada") pontuacao["Administração"] += 3;
    if (questao2.value === "Comunicativa") pontuacao["Ciências Humanas"] += 3;
    if (questao2.value === "Prática") pontuacao["Engenharia"] += 3;
    if (questao2.value === "Líder") pontuacao["Administração"] += 2;
    if (questao2.value === "Analítica") pontuacao["Tecnologia"] += 3;

    // Questão 3
    if (questao3.value === "Inovação") pontuacao["Tecnologia"] += 3;
    if (questao3.value === "Estabilidade") pontuacao["Saúde"] += 3;
    if (questao3.value === "Trabalhar com pessoas") pontuacao["Saúde"] += 2;
    if (questao3.value === "Desafios") pontuacao["Engenharia"] += 3;
    if (questao3.value === "Impactar o mundo") pontuacao["Ciências Humanas"] += 2;
    if (questao3.value === "Alta remuneração") pontuacao["Administração"] += 3;

    // Questão 4
    if (questao4.value === "Escritório") pontuacao["Administração"] += 2;
    if (questao4.value === "Ao ar livre") pontuacao["Engenharia"] += 2;
    if (questao4.value === "Ambiente de laboratório") pontuacao["Saúde"] += 3;
    if (questao4.value === "Locais criativos") pontuacao["Artes"] += 3;
    if (questao4.value === "Indústria") pontuacao["Engenharia"] += 2;
    if (questao4.value === "Ambiente corporativo") pontuacao["Administração"] += 2;

    // Determinando a profissão com maior pontuação
    let profissao = '';
    let maiorPontuacao = 0;
    
    for (let area in pontuacao) {
        if (pontuacao[area] > maiorPontuacao) {
            maiorPontuacao = pontuacao[area];
            profissao = area;
        }
    }

    // Exibindo o resultado baseado na maior pontuação
    let resultado = '';
    switch (profissao) {
        case 'Tecnologia':
            resultado = "Você parece ter grande interesse em Tecnologia, com foco em inovação. Áreas como **Desenvolvimento de Software**, **Inteligência Artificial** ou **Segurança da Informação** podem ser ideais para você.";
            break;
        case 'Ciências Humanas':
            resultado = "Você pode explorar carreiras nas **Ciências Humanas**, como **Jornalismo**, **Publicidade e Propaganda** ou **Relações Públicas**, onde sua habilidade de comunicação será essencial.";
            break;
        case 'Saúde':
            resultado = "Uma carreira na área da **Saúde**, como **Medicina**, **Enfermagem** ou **Fisioterapia**, pode ser ideal para você, pois você tem um grande desejo de ajudar as pessoas.";
            break;
        case 'Artes':
            resultado = "Você parece ter aptidão para as **Artes**, como **Design Gráfico**, **Artes Visuais** ou **Música**. Seu talento criativo poderá florescer em ambientes que incentivam a expressão artística.";
            break;
        case 'Engenharia':
            resultado = "A **Engenharia** é uma excelente escolha, especialmente em áreas como **Engenharia Mecânica**, **Engenharia Elétrica** ou **Engenharia de Produção**, onde você poderá lidar com desafios e trabalhar com soluções práticas.";
            break;
        case 'Administração':
            resultado = "Carreiras em **Administração**, como **Gestão de Empresas**, **Empreendedorismo** ou **Recursos Humanos**, podem ser uma excelente escolha para você, considerando suas habilidades de liderança e foco em resultados.";
            break;
        default:
            resultado = "Você tem aptidões variadas! Considere explorar múltiplas áreas até encontrar a que mais lhe interessa.";
            break;
    }

    // Exibindo o resultado final
    document.getElementById("mensagem-resultado").innerText = resultado;
    document.getElementById("resultado").style.display = "block";
    
});

function voltar() {
    window.location.href = 'inicio.html'; // Redireciona para a página inicial
}
