
window.addEventListener("load", ()=> {
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

    let res = diaSemana + ", " + diaMes + " de " + mes + " de " + ano + ".";

    document.getElementById("data").innerHTML = res;
});


function setHora() {
    let dia = new Date();
    let horas = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();

    let res = horas + ":" + minutos + ":" + segundos;

    document.getElementById("hora").innerHTML = res;
}

document.addEventListener(setInterval(setHora, 1000));