let qntdUsuarios = {
    numeros: '',
}

let numerosDesejados = []

var i = new Array(qntdUsuarios);
let n_numerosDesejados = parseInt(prompt("Quantos números deseja escrever?"));
var soma = 0;
var media = 0;
var valorPotencia = 0;
var raizQuadrada = 0;
var raizCubica = 0;


for (let i = 0; i < n_numerosDesejados; i++) {
    qntdUsuarios.numeros = parseFloat(prompt('Digite o número'))
    soma = parseFloat(qntdUsuarios.numeros) + parseFloat(soma)
    valorPotencia = parseFloat(qntdUsuarios.numeros) * parseFloat(qntdUsuarios.numeros)
    raizQuadrada = Math.sqrt(qntdUsuarios.numeros)
    raizCubica = Math.cbrt (qntdUsuarios.numeros)

    document.write('O valor em potência de ' + qntdUsuarios.numeros + ' é igual a ' + valorPotencia)
    document.writeln("<br>");
}
media = soma / n_numerosDesejados

document.write('A raiz quadrada de ' + qntdUsuarios.numeros + ' é ' + raizQuadrada)
document.writeln("<br>");
document.write('A raiz cúbica de ' + qntdUsuarios.numeros + ' é ' + raizCubica)
document.writeln("<br>");
document.write('A soma é ' + soma)
document.writeln("<br>");
document.write('A média é ' + media)