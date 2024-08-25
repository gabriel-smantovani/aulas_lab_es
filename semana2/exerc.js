//DATA, HORA E PALÍNDROMO, RESPECTIVAMENTE

window.addEventListener("load", ()=> {  //DATA
    let dia = new Date();
    let diaMes = dia.getDate();
    let diaSemana = dia.getDay();
    let mes = dia.getMonth();
    let ano = dia.getYear() + 1900;

    switch(diaSemana) {
        case 0:
            diaSemana = "Domingo";
            break;
        case 1:
            diaSemana = "Segunda-feira";
            break;
        case 2:
            diaSemana = "Terça-feira";
            break;
        case 3:
            diaSemana = "Quarta-feira";
            break;
        case 4:
            diaSemana = "Quinta-feira";
            break;
        case 5:
            diaSemana = "Sexta-feira";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
    }

    switch(mes) {
        case 0:
            mes = "janeiro";
            break;
        case 1:
            mes = "fevereiro";
            break;
        case 2:
            mes = "março";
            break;
        case 3:
            mes = "abril";
            break;
        case 4:
            mes = "maio";
            break;
        case 5:
            mes = "junho";
            break;
        case 6:
            mes = "julho";
            break;
        case 7:
            mes = "agosto";
            break;
        case 8:
            mes = "setembro";
            break;
        case 9:
            mes = "outubro";
            break;
        case 10:
            mes = "novembro";
            break;
        case 11:
            mes = "dezembro";
            break;
    }

    let res = diaSemana + ", " + diaMes + " de " + mes + " de " + ano;

    document.getElementById("data").innerHTML = res;
});


function setHora() {    //FUNÇÃO HORA
    let dia = new Date();
    let horas = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();

    let res = horas.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');

    document.getElementById("hora").innerHTML = res;
}

setInterval(setHora, 1000);  //INTERVALO E CHAMADA DE FUNÇÃO HORA


document.getElementById("isPalindrome").addEventListener("click", ()=> {  //PALÍNDROMO
    let str = document.getElementById("testePalindromo").value;

    if(str != "") {
        str = str.replaceAll(" ", "");
        str = str.replaceAll(".", "");
        str = str.replaceAll(",", "");
        str = str.replaceAll("-", "");
        str = str.replaceAll(";", "");
        str = str.replaceAll("!", "");
        str = str.replaceAll("?", "");
        str = str.replaceAll("[", "");
        str = str.replaceAll("]", "");
        str = str.replaceAll("(", "");
        str = str.replaceAll("]", "");
        str = str.replaceAll("{", "");
        str = str.replaceAll("}", "");
        str = str.replaceAll("á", "a");
        str = str.replaceAll("à", "a");
        str = str.replaceAll("ã", "a");
        str = str.replaceAll("â", "a");
        str = str.replaceAll("é", "e");
        str = str.replaceAll("ê", "e");
        str = str.replaceAll("í", "i");
        str = str.replaceAll("ó", "o");
        str = str.replaceAll("õ", "o");
        str = str.replaceAll("ô", "o");
        str = str.replaceAll("ú", "u");
        str = str.toLowerCase();
        let strContraria = "";

        for(i = str.length - 1; i >= 0; i--) {
            strContraria = strContraria + str[i];
        }

        if(str == strContraria)
            alert("O texto é palíndromo!");
        else
            alert("O texto não é palíndromo!");
    }
    else
        alert("Nada foi digitado! Insira um dado qualquer!");
});
