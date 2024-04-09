// Selecionando um elemento pelo ID
const elemento = document.getElementById('meuElemento');

// Selecionando elementos pela classe
const elementos = document.getElementsByClassName('minhaClasse');

// Selecionando elementos pelo nome da tag
const paragrafos = document.getElementsByTagName('p');

// Selecionando o primeiro elemento que corresponde a um seletor CSS
const primeiroElemento = document.querySelector('.minhaClasse');


// Alterando o conteúdo de um elemento
elemento.innerHTML = 'Novo conteúdo';

// Alterando o estilo de um elemento
elemento.style.color = 'red';

// Adicionando uma classe a um elemento
elemento.classList.add('novaClasse');

// Alterando um atributo
elemento.setAttribute('nome', 'novoValor');





elemento.addEventListener('click', function() {
  console.log('O elemento foi clicado');
});

// Criando um novo elemento
const novoElemento = document.createElement('div');

// Adicionando o novo elemento ao DOM
document.body.appendChild(novoElemento);

// Removendo um elemento do DOM
const elementoParaRemover = document.getElementById('elementoParaRemover');
elementoParaRemover.parentNode.removeChild(elementoParaRemover);











