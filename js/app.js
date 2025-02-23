// ===============================
// Desafio 1 e 2: Projeto Alugames
// ===============================

// Variável global para controlar a contagem de jogos alugados
let jogosAlugados = 0;

// Função que imprime no console a quantidade de jogos alugados
function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Função para alterar o status de um jogo (alugar/devolver)
// Inclui confirmação antes de devolver e atualiza a contagem de jogos alugados
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Solicita confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        // Aluga o jogo
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que alguns jogos já podem estar alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


// ===============================
// Desafio 3: Verificar se uma palavra ou frase é um palíndromo
// ===============================

// Função que remove espaços, pontuação e diferenciação entre maiúsculas/minúsculas para verificar o palíndromo
function isPalindromo(texto) {
    let textoLimpo = texto.toLowerCase().replace(/[\W_]/g, '');
    let textoReverso = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoReverso;
}

// Exemplo de uso da função isPalindromo
function testarPalindromo() {
    let entrada = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");
    if (entrada === null) return; // Caso o usuário cancele o prompt
    if (isPalindromo(entrada)) {
        console.log(`"${entrada}" é um palíndromo.`);
    } else {
        console.log(`"${entrada}" não é um palíndromo.`);
    }
}


// ===============================
// Desafio 4: Ordenar três números em sequência
// ===============================

// Função que recebe três números como argumentos e os exibe em ordem crescente
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso da função ordenarNumeros
function testarOrdenacao() {
    ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"
}


// ===============================
// Chamadas de Teste (opcionais)
// ===============================

// Descomente as linhas abaixo para testar as funcionalidades:

// testarPalindromo();
// testarOrdenacao();
