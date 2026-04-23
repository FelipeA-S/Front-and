function revelar() {
    var imagem = document.querySelector('.card-img-top');
    imagem.src = 'img/_vinicius_junior.png';
    imagem.alt = 'Vinícius Júnior';

    var spanNome = document.getElementById('Nome');
    var badge = document.getElementById('Rank');
    spanNome.childNodes[0].textContent = 'Vinícius Júnior ';

    badge.textContent = '9,5';

    var spanData = document.getElementById('Data_Nas');
    spanData.textContent = '📅 12/07/2000 (25 anos)';

    var spanAltura = document.getElementById('Alutra');
    spanAltura.textContent = '📏 1,76 m';

    var spanPosicao = document.getElementById('Posição ');
    spanPosicao.textContent = '🏃 Ponta-esquerda / Atacante';

    spanNome.classList.remove('placeholder');
    spanData.classList.remove('placeholder');
    spanAltura.classList.remove('placeholder');
    if (spanPosicao) spanPosicao.classList.remove('placeholder');

    var pgElements = document.querySelectorAll('.placeholder-glow');
    pgElements.forEach(function(el) {
        el.classList.remove('placeholder-glow');
        el.classList.add('card-text');
    });

    var card = document.querySelector('.card');
    card.removeAttribute('aria-hidden');

    badge.classList.remove('text-bg-secondary');
    badge.classList.add('text-bg-success');
}