//POSITIVO, PAR, PRIMO, FATORIAL E TIPO DE DADO, RESPECTIVAMENTE

function isPositive(inputData) {
    let nbr = parseInt(inputData);
    
    if(isNaN(nbr)) {
        alert("O dado inserido não é um número e, portanto, não pode ser usado na operação! Insira um número positivo, qualquer número com ponto flutuante será tratado como inteiro!");
        return false;
    }    
    else if(nbr < 0) {
        alert("O número inserido não é válido, pois é um número negativo! Insira um número positivo, qualquer número com ponto flutuante será tratado como inteiro!");
        return false;
    }
    else
        return nbr;
}


document.getElementById("isEven").addEventListener("click", ()=> {
    let inputData = document.getElementById("dadosEntrada").value;
    
    if(inputData != "") {
        let nbr = isPositive(inputData);

        if(nbr) {
            if(nbr % 2 == 0)
                alert("O número é par!");
            else
                alert("O número é ímpar!");
        }
    }
    else
        alert("Nenhum dado inserido! Insira um número positivo, qualquer número com ponto flutuante será tratado como inteiro!");
});


document.getElementById("isPrimeNumber").addEventListener("click", ()=> {
    let inputData = document.getElementById("dadosEntrada").value;

    if(inputData != "") {
        let nbr = isPositive(inputData);

        if(nbr) {
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
    }
    else
        alert("Nenhum dado inserido! Insira um número positivo, qualquer número com ponto flutuante será tratado como inteiro!");
});


document.getElementById("factorial").addEventListener("click", ()=> {
    let inputData = document.getElementById("dadosEntrada").value;

    if(inputData != "") {
        let nbr = isPositive(inputData);

        if(nbr) {
            let fatorial = 1;
            for(i = nbr; i > 0; i--) {
                fatorial *= i;
            }
            alert("O fatorial de " + nbr + " é " + fatorial);
        }
    }
    else
        alert("Nenhum dado inserido! Insira um número positivo, qualquer número com ponto flutuante será tratado como inteiro!");
});


document.getElementById("dataType").addEventListener("click", ()=> {
    let inputData = document.getElementById("dadosEntrada").value;

    if(inputData != "") {
    if(!isNaN(parseInt(inputData)))
        alert("'" + inputData + "' é um número!");
    else if(inputData.length == 1)
        alert("'" + inputData + "' é um caractere!");
    else if(inputData.toUpperCase() == "TRUE" || inputData.toUpperCase() == "FALSE" || inputData.toUpperCase() == "VERDADEIRO" || inputData.toUpperCase() == "FALSO")
        alert("'" + inputData + "' é um dado booleano!");
    else
        alert("'" + inputData + "' é uma string!");
    }
    else
        alert("Nada foi digitado! Insira um dado qualquer!");
});
