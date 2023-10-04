// Selecionando os atributoss
let corteDeCabelo = document.getElementById('corte');
let barba = document.getElementById('barba');
let sombrancelha = document.getElementById('somb');
let calc = document.getElementById('calcular');
var lucro = document.getElementById('lucro');

// Dando valor a cada serviço

const valorCorteDeCabelo = 30;
const valorBarba = 20;
const valorSombrancelha = 10;

// Criando as Funçoes

function clicou() {
    // Fazendo a soma

    let somaCorte = corte.value * valorCorteDeCabelo;
    let somaBarba = barba.value * valorBarba;
    let somaSombrancelha = sombrancelha.value * valorSombrancelha;


    if (corteDeCabelo.value === "" || barba.value === "" || sombrancelha.value === "") {
        alert('Não foi possível calcular o valor');
    } else {
        let resultado = somaCorte + somaBarba + somaSombrancelha;
        lucro.innerHTML = (`Voce lucrou: R$${resultado}`);
        lucro.style.display = 'block';
    }
}

// Criando evento
calc.addEventListener('click', clicou)

//corteDeCabelo.valor.length == 0 || barba.value.length == 0 || sombrancelha.value.length == 0