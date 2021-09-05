const prompt = require('prompt-sync')();

var qtdjogadores = +prompt("Digite quantos jogadores vão jogar? ");
console.log(`OK ${qtdjogadores} jogadores.`);
var rodadas = +prompt("Digite quantas rodadas quer jogar: ");
console.log(`Muito bem, serão ${rodadas} rodadas para jogar`)

let listaJogadores = []; 

for(let i = 0; i < qtdjogadores; i++) {
    var nome = prompt("Qual o nome do jogador? ");
    let jogador = {
        nome: nome,
        dado: 0,
        vitorias: 0,
        
    }
    listaJogadores.push(jogador);
    
    
}

for(let j = 0; j < rodadas; j++) {
    for(i = 0; i < listaJogadores.length; i++) {
        listaJogadores[i].dado = (Math.floor(Math.random() * 6 + 1));

    }
    listaJogadores.sort((a, b) => a.dado - b.dado).reverse();
    listaJogadores[0].vitorias++;
    console.log(`${listaJogadores[0].nome} ganhou essa rodada tirando o valor: ${listaJogadores[0].dado}`)
}
listaJogadores.sort((a, b) => a.vitorias - b.vitorias).reverse();

console.log(`O ganhador é: ${listaJogadores[0].nome}`);
console.log(listaJogadores);





