
class Tarefa {
    constructor(nome, descricao) {
        this._nome = nome;
        this._descricao = descricao;
        this._status = 'pendente';
    }

    set nome(nome) {
        this._nome = nome;
    }

    set descricao(descricao) {
        this._descricao = descricao.trim();
    }

    set status(status) {
        this._status = status;
    }

    get nome() {
        return this._nome;
    }

    get descricao() {
        return this._descricao;
    }

    get status() {
        return this._status;
    }

    concluir() {
        this._status = 'concluida';
    }

    detalhes() {

    }

}


class GerenciadorDeTarefas {
    constructor() {
        this._tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this._tarefas.push(tarefa);
    }

    listarTarefas() {
        let myNode = document.getElementById('listaTarefas');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        for(let i = 0; i < this._tarefas.length; i++) {
            let d = document.createElement('div');
            d.setAttribute('class', 'divTarefa');
    
            let e = document.createElement('P');
            let t = document.createTextNode(this._tarefas[i]._nome);
            e.appendChild(t);
            if(this._tarefas[i]._status == 'concluida') {
                e.setAttribute('class', 'statusConcluida');
            }
            else {
                e.setAttribute('class', 'statusPendente');
            }
            let c = document.createElement('div');
            c.setAttribute('class', 'divTituloTarefa');
            c.appendChild(e);


            let b = document.createElement('div');
            b.setAttribute('class', 'divTarefaBotoes');

            let m = document.createElement('button');
            m.setAttribute('class', 'btnDetalhes');
            t = document.createTextNode('Detalhes');
            m.appendChild(t);

            m.addEventListener('click', () => {
                this.visualizarDetalhes(i, d);
            });

            let n = document.createElement('button');
            n.setAttribute('class', 'btnConcluir');
            t = document.createTextNode('Concluir');
            n.appendChild(t);

            n.addEventListener('click', () => {
                this.marcarComoConcluida(i);
            });

            let r = document.createElement('button');
            r.setAttribute('class', 'btnRemover');
            t = document.createTextNode('Remover');
            r.appendChild(t);

            r.addEventListener('click', () => {
                this.removerTarefa(i);
                this.listarTarefas(); 
                if(z._tarefas.length == 0) {
                    document.getElementById("listaTarefas").style.visibility = "hidden";
                }
            });

            b.appendChild(m);
            b.appendChild(n);
            b.appendChild(r);
            
            d.appendChild(c);
            d.appendChild(b);
            document.getElementById('listaTarefas').appendChild(d);
        }
    }

    removerTarefa(index) {
        this._tarefas.splice(index, 1);
    }

    marcarComoConcluida(index) {
        this._tarefas[index].concluir();
        this.listarTarefas();
    }

    visualizarDetalhes(index, tarefaDiv) {
        let detalhesDiv = tarefaDiv.nextElementSibling;
        if (detalhesDiv && detalhesDiv.classList.contains('detalhesTarefa')) {
            detalhesDiv.remove();
        } else {
            detalhesDiv = document.createElement('div');
            detalhesDiv.setAttribute('class', 'detalhesTarefa');

            let descricao = document.createElement('p');
            descricao.textContent = this._tarefas[index]._descricao;

            detalhesDiv.appendChild(descricao);
            tarefaDiv.parentNode.insertBefore(detalhesDiv, tarefaDiv.nextSibling); // Insere após a tarefa atual
        }
    }
}


let z;

document.getElementById('btnAdicionarTarefa').addEventListener('click', function() {
    document.getElementById('listaTarefas').style.visibility = 'visible';

    if(z == null) {
        z = new GerenciadorDeTarefas();
    }

    if(validaNome(document.getElementById('nomeTarefa').value)) {
        let a = new Tarefa(document.getElementById('nomeTarefa').value, document.getElementById('descricaoTarefa').value);
    
        z.adicionarTarefa(a);
    
        z.listarTarefas();
    }
});

function validaNome(nome) {
    nome = nome.trim();
    nome[0] = nome[0].toUpperCase();
    if(nome != '')
        return nome;
    else
        return false;
}