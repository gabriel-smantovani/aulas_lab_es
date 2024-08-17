
function ehPositivo() {

    let nbr;

    do {
        nbr = parseInt(prompt("Digite um número inteiro positivo: "));
    } while(isNaN(nbr) || nbr < 0);

    return nbr;

}

function ehPar() {

    let nbr = ehPositivo();

    if(nbr % 2 == 0) {
        alert("O número é par!");
    }
    else {
        alert("O número é ímpar!");
    }

}

function ehPrimo() {
    
    let nbr = ehPositivo();

    switch(nbr) {
        case 1:
            alert("O número não é primo!");
            break;
        case 2:
            alert("O número é primo!");
            break;
        default:
            if(nbr % 2 == 0) {
                alert("O número não é primo!");
                break;
            }
            else {
                let primo = true;
                for(i = 3; i < nbr; i = i+2) {
                    if(nbr % i == 0) {
                        alert("O número não é primo!");
                        primo = false;
                        break;
                    }
                }
                if(primo) {
                    alert("O número é primo!");
                }
            }
            break;
    }

}

function fatorial() {
    
    let nbr = ehPositivo();

    let fatorial = 1;
    for(i = nbr; i > 0; i--) {
        fatorial *= i;
    }
    alert("O fatorial de " + nbr + " é " + fatorial);

}

function tipoDado() {
    
    let data = prompt("Digite algo: ");

    if(!isNaN(parseInt(data))) {
        alert("'" + data + "' é um número!");
    }
    else if(data.toUpperCase() == "TRUE" || data.toUpperCase() == "FALSE" || data.toUpperCase() == "VERDADEIRO" || data.toUpperCase() == "FALSO") {
        alert("'" + data + "' é um dado booleano!")
    }
    else {
        alert("'" + data + "' é uma string!");
    }

}