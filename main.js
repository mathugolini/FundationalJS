var frutas = ["Banana", "Maçã", "Laranja", "Abacaxi"];

frutas.sort();
console.log(frutas); // Output será ["Abacaxi", "Banana", "Laranja", "Maçã"]


var pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 35 }
];

// Usando o método sort() com uma função de comparação para ordenar as pessoas por idade
pessoas.sort(function(a, b) {
  return a.idade - b.idade;
});

console.log(pessoas);


