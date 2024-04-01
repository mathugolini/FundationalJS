switch (expressao) {
  case valor1:
    // bloco de código a ser executado se expressao for igual a valor1
    break;
  case valor2:
    // bloco de código a ser executado se expressao for igual a valor2
    break;
  // e assim por diante
  default:
    // bloco de código a ser executado se nenhum caso corresponder à expressao
}

let diaDaSemana = 2;
let nomeDia;

switch (diaDaSemana) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6: 
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sabado";
    break;
  default:
    nomeDia = "Dia inválido";
}

console.log("Hoje é " + nomeDia);






