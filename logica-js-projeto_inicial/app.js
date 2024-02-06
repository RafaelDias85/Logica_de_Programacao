alert('Boas Vindas ao jogo do Numero secreto!');

let numeroMaximo = 100;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

while (chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo} contador ${tentativas}ª Tentativa`)

    if (chute == numeroSecreto){
        
        break;
    } else{
        if (chute > numeroSecreto ){
            alert(`vc errou! O Numero é menor que ${chute}`);
        } else {
            alert(`vc errou! O numero é maior que ${chute}`);
        }
        tentativas ++;
        
    }

}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`vc acertou, o numero secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// if (tentativas > 1){
//     alert(`vc acertou, o numero secreto é ${numeroSecreto} com ${tentativas} Tentativas.`);

// }else {
//     alert(`vc acertou, o numero secreto é ${numeroSecreto} com ${tentativas} Tentativa.`);
// }

