let dataAtual = new Date();

// Obter o dia da semana 
//(0 para Domingo, 1 para Segunda-feira, ..., 6 para Sábado)
let diaDaSemana = dataAtual.getDay();
console.log(diaDaSemana);


// Convertendo uma data UTC para o horário local
let dataUTCString = '2024-03-21T12:30:00Z';
let dataLocalConvertida = new Date(dataUTCString);
console.log(dataLocalConvertida);

