var frutas = ['maçã', 'banana', 'laranja'];
frutas.push('laranja');
console.log(frutas); // Output será ['maçã', 'banana', 'laranja']

var frutas = ['maçã', 'banana', 'laranja'];
var ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Output será 'laranja'
console.log(frutas); // Output será ['maçã', 'banana']

var frutas = ['maçã', 'banana', 'laranja'];
var primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Output será 'maçã'
console.log(frutas); // Output será ['banana', 'laranja']

var frutas = ['banana', 'laranja'];
frutas.unshift('maçã');
console.log(frutas); // Output será ['maçã', 'banana', 'laranja']

var frutas = ['maçã', 'banana'];
var outrasFrutas = ['laranja', 'morango'];
var todasFrutas = frutas.concat(outrasFrutas);
console.log(todasFrutas); // Output será ['maçã', 'banana', 'laranja', 'morango']

var frutas = ['maçã', 'banana', 'laranja', 'morango'];
var algumasFrutas = frutas.slice(1, 3);
console.log(algumasFrutas); // Output será ['banana', 'laranja']

var frutas = ['maçã', 'banana', 'laranja', 'morango'];
frutas.splice(2, 1, 'uva', 'pêra');
console.log(frutas); // Output será ['maçã', 'banana', 'uva', 'pêra', 'morango']