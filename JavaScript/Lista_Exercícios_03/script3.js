let bin = prompt('Digite um número binário')
let dec = 0;
for (let c = 0; c < bin.length; c++) dec += Math.pow(2, c) * bin[bin.length - c - 1];
console.log(dec);
document.write(dec)