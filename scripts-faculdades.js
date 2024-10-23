// Script para exibir a lista de cursos e notas de corte ao clicar nos botões
document.querySelectorAll('.nota-btn').forEach(button => {
    button.addEventListener('click', function() {
        const faculdade = this.getAttribute('data-faculdade');
        const cursosDiv = document.querySelector(`#${faculdade.toLowerCase()}-cursos`);

        // Limpa todas as listas antes de mostrar a selecionada
        document.querySelectorAll('.cursos-list').forEach(div => {
            if (div !== cursosDiv) {
                div.style.display = 'none'; // Esconde as outras listas
            }
        });

        // Alterna a exibição da lista de cursos e notas de corte
        cursosDiv.style.display = cursosDiv.style.display === "none" || cursosDiv.style.display === "" ? "block" : "none";
    });
});
function voltar() {
    window.location.href = 'inicio.html'; // Redireciona para a página inicial
}
