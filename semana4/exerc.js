
function Pessoa() {

    let nome;
    let email;
    let dataNascimento;
    let telefoneFixo
    let telefoneCelular;
    let matricula;
    let linkLattes;

    this.getNome = function() {
        return this.nome;
    }

    this.setNome = function(nome) {
        this.nome = nome;
    }

    this.getEmail = function() {
        return this.email;
    }

    this.setEmail = function(email) {
        this.email = email;
    }

    this.getDataNascimento = function() {
        return this.dataNascimento;
    }

    this.setDataNascimento = function(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    this.getTelefoneFixo = function() {
        return this.telefoneFixo;
    }

    this.setTelefoneFixo = function(telefoneFixo) {
        this.telefoneFixo = telefoneFixo;
    }

    this.getTelefoneCelular = function() {
        return this.telefoneCelular;
    }

    this.setTelefoneCelular = function(telefoneCelular) {
        this.telefoneCelular = telefoneCelular;
    }

    this.getMatricula = function() {
        return this.matricula;
    }

    this.setMatricula = function(matricula) {
        this.matricula = matricula;
    }

    this.getLinkLattes = function() {
        return this.linkLattes;
    }

    this.setLinkLattes = function(linkLattes) {
        this.linkLattes = linkLattes;
    }

}


function Aluno() {

    Pessoa.call(this);

    let curso;

    this.getCurso = function() {
        return this.curso;
    }

    this.setCurso = function(curso) {
        this.curso = curso;
    }

    this.criaPessoa = function() {
        this.setNome(document.getElementById('nome').value);
        this.setEmail(document.getElementById('email').value);
        this.setData_nascimento(document.getElementById('dataNascimento').value);
        this.setTelefoneFixo(document.getElementById('telefoneFixo').value);
        this.setTelefoneCelular(document.getElementById('telefoneCelular').value);
        this.setCurso(document.getElementById('areaAtuacao').value);
        this.linkLattes(document.getElementById('linkLattes').value);
        this.setMatricula(document.getElementById('matricula').value);
    }

}


function Professor() {

    Pessoa.call(this);

    let areaAtuacao;

    this.getAreaAtuacao = function() {
        return this.areaAtuacao;
    }

    this.setAreaAtuacao = function(areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }

    this.criaPessoa = function() {
        this.setNome(document.getElementById('nome').value);
        this.setEmail(document.getElementById('email').value);
        this.setData_nascimento(document.getElementById('dataNascimento').value);
        this.setTelefoneFixo(document.getElementById('telefoneFixo').value);
        this.setTelefoneCelular(document.getElementById('telefoneCelular').value);
        this.setAreaAtuacao(document.getElementById('areaAtuacao').value);
        this.linkLattes(document.getElementById('linkLattes').value);
        this.setMatricula(document.getElementById('matricula').value);
    }

}


document.getElementById('usuarioAluno').addEventListener('click', function() {
    myNode = document.getElementById('labelAreaAtuacao');
    myNode.innerHTML = 'Curso:';
    
    myNode = document.getElementById('areaAtuacao');
    myNode.setAttribute('placeholder', 'Digite seu curso');
})


document.getElementById('usuarioProfessor').addEventListener('click', function() {
    myNode = document.getElementById('labelAreaAtuacao');
    myNode.innerHTML = 'Área:';
    
    myNode = document.getElementById('areaAtuacao');
    myNode.setAttribute('placeholder', 'Digite sua área de atuação');
})


document.getElementById('nome').addEventListener('blur', function() {
    let conteudo = document.getElementById('nome').value;
    conteudo = conteudo.trim();
    if(conteudo == '') {
        let myNode = document.getElementById('validacaoNome');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Nome inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        let myNode = document.getElementById('validacaoNome');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
})


document.getElementById('email').addEventListener('blur', function() {
    let conteudo = document.getElementById('email').value;
    conteudo = conteudo.trim();
    if(conteudo == '') {
        let myNode = document.getElementById('validacaoEmail');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Email inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        if(document.getElementById('email').value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            let myNode = document.getElementById('validacaoEmail');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
        }
        else {
            let myNode = document.getElementById('validacaoEmail');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }

            let e = document.createElement('P');
            let t = document.createTextNode('Email inválido');
            e.appendChild(t);
            
            myNode.appendChild(e);
        }
    }
})


document.getElementById('dataNascimento').addEventListener('blur', function() {
    let conteudo = document.getElementById('dataNascimento').value;
    conteudo = conteudo.trim();
    if(conteudo == '') {
        let myNode = document.getElementById('validacaoDataNascimento');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Data inválida');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        let myNode = document.getElementById('validacaoDataNascimento');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
})


document.getElementById('telefoneFixo').addEventListener('blur', function() {
    let conteudo = document.getElementById('telefoneFixo').value;
    conteudo = conteudo.trim();
    if(conteudo.length != 13) {
        let myNode = document.getElementById('validacaoTelefoneFixo');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Telefone fixo inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        let myNode = document.getElementById('validacaoTelefoneFixo');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
})


document.getElementById('telefoneFixo').addEventListener('keydown', function(event) {
    
    if(event.key != 'Backspace' && event.key != 'Delete') {
        let tel = document.getElementById('telefoneFixo').value;
        switch(tel.length) {
            case 1:
                tel = '(' + tel;
                break;
            case 3:
                tel = tel + ')';
                break;
            case 8:
                tel = tel + '-';
                break;
        }
        document.getElementById('telefoneFixo').value = tel;
    }

})


document.getElementById('telefoneCelular').addEventListener('blur', function() {
    let conteudo = document.getElementById('telefoneCelular').value;
    conteudo = conteudo.trim();
    if(conteudo.length != 14) {
        let myNode = document.getElementById('validacaoTelefoneCelular');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Telefone celular inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        let myNode = document.getElementById('validacaoTelefoneCelular');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
})


document.getElementById('telefoneCelular').addEventListener('keydown', function(event) {
    
    if(event.key != 'Backspace' && event.key != 'Delete') {
        let tel = document.getElementById('telefoneCelular').value;
        switch(tel.length) {
            case 1:
                tel = '(' + tel;
                break;
            case 3:
                tel = tel + ')';
                break;
            case 9:
                tel = tel + '-';
                break;
        }
        document.getElementById('telefoneCelular').value = tel;
    }
    
})


document.getElementById('areaAtuacao').addEventListener('blur', function() {
    let conteudo = document.getElementById('areaAtuacao').value;
    conteudo = conteudo.trim();
    if(conteudo == '') {
        let myNode = document.getElementById('validacaoAreaAtuacao');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t;

        if(document.getElementById('usuarioProfessor').checked) {
            t = document.createTextNode('Área de atuação inválida');
        }
        else {
            t = document.createTextNode('Curso inválido');
        }

        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        let myNode = document.getElementById('validacaoAreaAtuacao');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
})


document.getElementById('matricula').addEventListener('blur', function() {
    let conteudo = document.getElementById('matricula').value;
    conteudo = conteudo.trim();
    if(conteudo == '') {
        let myNode = document.getElementById('validacaoMatricula');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Matrícula inválida');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        if(document.getElementById('usuarioAluno').checked && document.getElementById('matricula').value.length == 10) {
            let myNode = document.getElementById('validacaoMatricula');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
        }
        else if(document.getElementById('usuarioProfessor').checked && document.getElementById('matricula').value.length == 5) {
            let myNode = document.getElementById('validacaoMatricula');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
        }
        else {
            let myNode = document.getElementById('validacaoMatricula');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }

            let e = document.createElement('P');
            let t = document.createTextNode('Matrícula inválida');
            e.appendChild(t);
            
            myNode.appendChild(e);
        }
    }
})


document.getElementById('linkLattes').addEventListener('blur', function() {
    let conteudo = document.getElementById('linkLattes').value;
    conteudo = conteudo.trim();
    if(conteudo == '') {
        let myNode = document.getElementById('validacaoLinkLattes');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Link lattes inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
    else {
        let myNode = document.getElementById('validacaoLinkLattes');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
})