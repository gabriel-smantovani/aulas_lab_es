//LISTA DE ITENS
let listaItens = [];

function deletaLista(listaAnterior) {
    let myNode = document.getElementById('listaItens');
    while(myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

function exibeLista(lista) {
    for(let i = 0; i < lista.length; i++) {
        let d = document.createElement('div');
        d.setAttribute('class', 'divItem');

        let e = document.createElement('P');
        let t = document.createTextNode(lista[i][1] + 'x ' + lista[i][0]);
        e.appendChild(t);
        
        d.appendChild(e);
        document.getElementById('listaItens').appendChild(d);
    }
}

function comparaStrings(lista, item) {
    for(let i = 0; i < lista.length; i++) {
        if(lista[i][0] == item) {
            return i;
        }
    }
    return -1;
}

function adicionaItem() {
    let item = document.getElementById('dadosEntrada').value;
    item = item.toUpperCase();
    
    if(item != "") {
        if(comparaStrings(listaItens, item) != -1) {
            index = comparaStrings(listaItens, item);
            listaItens[index][1] = listaItens[index][1] + 1;
            deletaLista(listaItens);
            exibeLista(listaItens);
        }
        else {
            listaItens.push([item, 1]);
            listaItens.sort();
            deletaLista(listaItens);
            exibeLista(listaItens);
        }
    }

    document.getElementById('dadosEntrada').value = "";
    document.getElementById('dadosEntrada').focus();
}

document.getElementById('addItem').addEventListener("click", adicionaItem);
document.getElementById('dadosEntrada').addEventListener("keypress", function (e) {
    if(e.key === 'Enter') {
        adicionaItem();
    }
});