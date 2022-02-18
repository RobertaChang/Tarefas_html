let dadosusuario = {
    nome: '',
    idade: '',
    sexo: '',
}

let Usuarios = []

var i = new Array(dadosusuario);
let n_Usuarios = parseInt(prompt("Digite o numero desejado de usuários"));

for (let i = 0; i < n_Usuarios; i++) {
    dadosusuario.nome = prompt('Digite seu nome')
    dadosusuario.idade = prompt('Digite sua idade')
    dadosusuario.sexo = prompt('Digite seu sexo')

    Usuarios.push(dadosusuario)

    document.writeln("Meu nome é " + dadosusuario.nome);
    document.writeln("tenho " + dadosusuario.idade + " anos ");
    document.writeln("e sou do sexo " + dadosusuario.sexo);
    document.writeln("<br>");
}

