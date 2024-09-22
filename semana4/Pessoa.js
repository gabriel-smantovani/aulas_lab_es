
class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, linkLattes) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.matricula = matricula;
        this.linkLattes = linkLattes;
    }

    set nome(nome) {
        nome = validaNome(nome);
        if(nome) {
            this._nome = nome;
        }
    }    

    set email(email) {
        email = validaEmail(email);
        if(email) {
            this._email = email;
        }
    }

    set dataNascimento(dataNascimento) {
        dataNascimento = validaDataNascimento(dataNascimento);
        if(dataNascimento) {
            this._dataNascimento = dataNascimento;
        }
    }

    set telefoneFixo(telefoneFixo) {
        telefoneFixo = validaTelefoneFixo(telefoneFixo);
        if(telefoneFixo) {
            this._telefoneFixo = telefoneFixo;
        }
    }

    set telefoneCelular(telefoneCelular) {
        telefoneCelular = validaTelefoneCelular(telefoneCelular);
        if(telefoneCelular) {
            this._telefoneCelular = telefoneCelular;
        }
    }

    set matricula(matricula) {
        this._matricula = matricula;
    }

    set linkLattes(linkLattes) {
        linkLattes = validaLinkLattes(linkLattes);
        this._linkLattes = linkLattes;
    }

    get nome() {
        return this._nome;
    }

    get email() {
        return this._email;
    }
    
    get dataNascimento() {
        return this._dataNascimento;
    }

    get telefoneFixo() {
        return this._telefoneFixo;
    }

    get telefoneCelular() {
        return this._telefoneCelular;
    }

    get matricula() {
        return this._matricula;
    }

    get linkLattes() {
        return this._linkLattes;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, linkLattes, curso) {
        super(nome);
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.matricula = matricula;
        this.linkLattes = linkLattes;
        this.curso = curso;
    }

    set matricula(matricula) {
        matricula = validaMatricula(matricula, 'aluno');

        if(matricula) {
            this._matricula = matricula;
        }
    }

    set curso(curso) {
        curso = validaAreaOuCurso(curso);
        this._curso = curso;
    }

    get curso() {
        return this._curso;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, linkLattes, areaAtuacao) {
        super(nome);
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.matricula = matricula;
        this.linkLattes = linkLattes;
        this.areaAtuacao = areaAtuacao;
    }

    set matricula(matricula) {
        matricula = validaMatricula(matricula, 'professor');

        if(matricula) {
            this._matricula = matricula;
        }
    }

    set areaAtuacao(areaAtuacao) {
        areaAtuacao = validaAreaOuCurso(areaAtuacao);
        this._areaAtuacao = areaAtuacao;
    }

    get areaAtuacao() {
        return this._areaAtuacao;
    }
}

//VALIDAÇÕES

function validaNome(nome) {
    nome = nome.trim();
    let nomeArrayAux = nome.split(" ");
    if((nome != "") && (nomeArrayAux.length > 1)) {
        return nome;
    }
    else
        return false;
}

function validaEmail(email) {
    email = String(email).trim();
    if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return email;
    }
    else
        return false;
}

function validaDataNascimento(dataNascimento) {
    let dataArrayAux = String(dataNascimento).split("-");
    if(dataArrayAux[0] >= 1900 && dataArrayAux[0] <= 2024) {
        dataNascimento = `${dataArrayAux[2]}/${dataArrayAux[1]}/${dataArrayAux[0]}`;
        return dataNascimento;
    }
    else
        return false;
}

function validaTelefoneFixo(telefoneFixo) {
    telefoneFixo = String(telefoneFixo);

    if(telefoneFixo.length == 13) {
        return telefoneFixo;
    }
    else
        return false;
}

function validaTelefoneCelular(telefoneCelular) {
    telefoneCelular = String(telefoneCelular);

    if(telefoneCelular.length == 14) {
        return telefoneCelular;
    }
    else
        return false;
}

function validaMatricula(matricula, tipoUsuario) {
    matricula = String(matricula);

    if(tipoUsuario == 'aluno') {
        if(matricula.length == 10) {
            return matricula;
        }
        else
            return false;
    }
    else {
        if(matricula.length == 5) {
            return matricula;
        }
        else
            return false;
    }
}

/*
function validaMatriculaAluno(matricula) {
    matricula = String(matricula);
    if(matricula.length == 10) {
        console.log("validou matricula " + matricula);
        return matricula;
    }
    else
        return false;
}

function validaMatriculaProfessor(matricula) {
    matricula = String(matricula);
    if(matricula.length == 5) {
        return matricula;
    }
    else
        return false;
}
        */

function validaLinkLattes(linkLattes) {
    linkLattes = String(linkLattes).trim();

    //se preciso, colocar regex para aceitar um site estritamente oriundo do lattes

    return linkLattes;
}

function validaAreaOuCurso(areaOuCurso) {
    areaOuCurso = String(areaOuCurso).trim();

    if(areaOuCurso != '') {
        return areaOuCurso;
    }
    else
        return false;
}

function exibePessoa(p) {
    if(p instanceof Aluno) {
        return `ALUNO\nNome: ${p.nome}\nEmail: ${p.email}\nData de nascimento: ${p.dataNascimento}\nTelefone fixo: ${p.telefoneFixo}\nTelefone celular: ${p.telefoneCelular}\nCurso: ${p.curso}\nMatricula: ${p._matricula}\nLattes: ${p.linkLattes}`;
    }
    else {
        return `PROFESSOR\nNome: ${p.nome}\nEmail: ${p.email}\nData de nascimento: ${p.dataNascimento}\nTelefone fixo: ${p.telefoneFixo}\nTelefone celular: ${p.telefoneCelular}\nÁrea de atuação: ${p.areaAtuacao}\nMatricula: ${p._matricula}\nLattes: ${p.linkLattes}`;
    }
}

//BLUR

document.getElementById('nome').addEventListener('blur', function() {
    let conteudo = document.getElementById('nome').value;
    conteudo = validaNome(conteudo);

    if(conteudo) {
        let myNode = document.getElementById('validacaoNome');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    else {
        let myNode = document.getElementById('validacaoNome');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Nome inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
});

document.getElementById('email').addEventListener('blur', function() {
    let conteudo = document.getElementById('email').value.toLowerCase();
    conteudo = validaEmail(conteudo);

    if(conteudo) {
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
});

document.getElementById('dataNascimento').addEventListener('blur', function() {
    let conteudo = document.getElementById('dataNascimento').value;
    conteudo = validaDataNascimento(conteudo);

    if(conteudo) {
        let myNode = document.getElementById('validacaoDataNascimento');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    else {
        let myNode = document.getElementById('validacaoDataNascimento');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Data inválida');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
});

document.getElementById('telefoneFixo').addEventListener('blur', function() {
    let conteudo = document.getElementById('telefoneFixo').value;
    conteudo = validaTelefoneFixo(conteudo);

    if(conteudo) {
        let myNode = document.getElementById('validacaoTelefoneFixo');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    else {
        let myNode = document.getElementById('validacaoTelefoneFixo');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        let e = document.createElement('P');
        let t = document.createTextNode('Telefone fixo inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
});

document.getElementById('telefoneCelular').addEventListener('blur', function() {
    let conteudo = document.getElementById('telefoneCelular').value;
    conteudo = validaTelefoneCelular(conteudo);

    if(conteudo) {
        let myNode = document.getElementById('validacaoTelefoneCelular');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    else {
        let myNode = document.getElementById('validacaoTelefoneCelular');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        
        let e = document.createElement('P');
        let t = document.createTextNode('Telefone celular inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
});

document.getElementById('areaAtuacao').addEventListener('blur', function() {
    let conteudo = document.getElementById('areaAtuacao').value;
    conteudo = validaAreaOuCurso(conteudo);


    if(conteudo) {
        let myNode = document.getElementById('validacaoAreaAtuacao');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    else {
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
});

document.getElementById('matricula').addEventListener('blur', function() {
    let conteudo = document.getElementById('matricula').value;
    
    if(document.getElementById('usuarioAluno').checked) {
        conteudo = validaMatricula(conteudo, 'aluno');
    }
    else {
        conteudo = validaMatricula(conteudo, 'professor');
    }
    

    if(conteudo) {
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
});

document.getElementById('linkLattes').addEventListener('blur', function() {
    let conteudo = document.getElementById('linkLattes').value;
    conteudo = conteudo.trim();
    if(conteudo == '' || conteudo.match(/^(https:\/\/)?lattes\.cnpq\.br\/.*$/)) {
        let myNode = document.getElementById('validacaoLinkLattes');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    else {
        let myNode = document.getElementById('validacaoLinkLattes');
        while(myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        
        let e = document.createElement('P');
        let t = document.createTextNode('Link lattes inválido');
        e.appendChild(t);
        
        myNode.appendChild(e);
    }
})

//BOTÕES

document.getElementById('enviar').addEventListener('click', function() {
    if(document.getElementById('usuarioAluno').checked) {
        //console.log(`NOME: ${document.getElementById('email').value}\nEMAIL: ${document.getElementById('email').value}\nDATA: ${document.getElementById('dataNascimento').value}\nFIXO: ${document.getElementById('telefoneFixo').value}\nCEL: ${document.getElementById('telefoneCelular').value}\nMATRICULA: ${document.getElementById('matricula').value}\nAREA ATUAÇÃO: ${document.getElementById('areaAtuacao').value}`);
        if(validaNome(document.getElementById('nome').value)
                && validaEmail(document.getElementById('email').value)
                && validaDataNascimento(document.getElementById('dataNascimento').value)
                && validaTelefoneFixo(document.getElementById('telefoneFixo').value)
                && validaTelefoneCelular(document.getElementById('telefoneCelular').value)
                && validaMatricula(document.getElementById('matricula').value, 'aluno')
                && validaAreaOuCurso(document.getElementById('areaAtuacao').value))
        {
            let a = new Aluno(
                document.getElementById('nome').value,
                document.getElementById('email').value,
                document.getElementById('dataNascimento').value,
                document.getElementById('telefoneFixo').value,
                document.getElementById('telefoneCelular').value,
                document.getElementById('matricula').value,
                document.getElementById('linkLattes').value,
                document.getElementById('areaAtuacao').value
            );
            console.log(exibePessoa(a));
        }
        else {
            document.getElementById('nome').focus();
            document.getElementById('email').focus();
            document.getElementById('dataNascimento').focus();
            document.getElementById('telefoneFixo').focus();
            document.getElementById('telefoneCelular').focus();
            document.getElementById('matricula').focus();
            document.getElementById('linkLattes').focus();
            document.getElementById('areaAtuacao').focus();
            document.getElementById('nome').focus();

            let myNode = document.getElementById('validacaoCadastro');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
    
            let e = document.createElement('P');
            let t = document.createTextNode('Por favor, preencha os dados destacados para se cadastrar');
            e.appendChild(t);
            
            myNode.appendChild(e);
        }
    }
    else {
        if(validaNome(document.getElementById('nome').value)
                && validaEmail(document.getElementById('email').value)
                && validaDataNascimento(document.getElementById('dataNascimento').value)
                && validaTelefoneFixo(document.getElementById('telefoneFixo').value)
                && validaTelefoneCelular(document.getElementById('telefoneCelular').value)
                && validaMatricula(document.getElementById('matricula').value, 'professor')
                && validaAreaOuCurso(document.getElementById('areaAtuacao').value))
        {
            let p = new Professor(
                document.getElementById('nome').value,
                document.getElementById('email').value,
                document.getElementById('dataNascimento').value,
                document.getElementById('telefoneFixo').value,
                document.getElementById('telefoneCelular').value,
                document.getElementById('matricula').value,
                document.getElementById('linkLattes').value,
                document.getElementById('areaAtuacao').value
            );
            console.log(exibePessoa(p));
        }
        else {
            document.getElementById('nome').focus();
            document.getElementById('email').focus();
            document.getElementById('dataNascimento').focus();
            document.getElementById('telefoneFixo').focus();
            document.getElementById('telefoneCelular').focus();
            document.getElementById('matricula').focus();
            document.getElementById('linkLattes').focus();
            document.getElementById('areaAtuacao').focus();
            document.getElementById('nome').focus();

            let myNode = document.getElementById('validacaoCadastro');
            while(myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
    
            let e = document.createElement('P');
            let t = document.createTextNode('Por favor, preencha os dados destacados para se cadastrar');
            e.appendChild(t);
            
            myNode.appendChild(e);
        }
    }
});

document.getElementById('redefinir').addEventListener('click', function() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('telefoneFixo').value = '';
    document.getElementById('telefoneCelular').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('linkLattes').value = '';
    document.getElementById('areaAtuacao').value = '';
});

//AJUSTES NA INTERFACE

document.getElementById('usuarioAluno').addEventListener('click', function() {
    let myNode = document.getElementById('labelAreaAtuacao');
    myNode.innerHTML = '*Curso:';
    
    myNode = document.getElementById('areaAtuacao');
    myNode.setAttribute('placeholder', 'Digite seu curso');
    
    document.getElementById('areaAtuacao').focus();
    document.getElementById('matricula').focus();
    document.getElementById('usuarioAluno').focus();
});

document.getElementById('usuarioProfessor').addEventListener('click', function() {
    let myNode = document.getElementById('labelAreaAtuacao');
    myNode.innerHTML = '*Área de atuação:';
    
    myNode = document.getElementById('areaAtuacao');
    myNode.setAttribute('placeholder', 'Digite sua área de atuação');

    document.getElementById('areaAtuacao').focus();
    document.getElementById('matricula').focus();
    document.getElementById('usuarioProfessor').focus();
});

//"MÁSCARAS" DOS TELEFONES

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

});

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
    
});
