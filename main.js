for (inicialização; condição; expressão final) {
  // bloco de código a ser repetido
}

for (let i=0; i<=5; i++) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula a iteração quando i é igual a 3
  }
  console.log(i);
  if (i === 4) {
    break; // Termina o loop quando i é igual a 4
  }
}

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i=0; i<matriz.length; i++) {
  for (let j=0; i<matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}





