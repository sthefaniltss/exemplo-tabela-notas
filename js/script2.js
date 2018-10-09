const botaoAdicionar = document.querySelector("#adicionar-aluno");

botaoAdicionar.addEventListener("click", function(evento){
    evento.preventDefault();
    /* function obterAluno (){
    return adicionarNovoAluno(document.querySelector("#form-adiciona"));
}

function validarNotas(aluno){
    if(!(aluno.notaUmAluno >= 0 && aluno.notaUmAluno <= 10)){
        document.querySelector("#mensagem-erro").textContent = "A nota 1 está incorreta!";
        return false;
    }
    if(!(aluno.notaDoisAluno >= 0 && aluno.notaDoisAluno <= 10)){
        document.querySelector("#mensagem-erro").textContent = "A nota 2 está incorreta!";
        return false;
    }
}
    */
    const novoFormulario = document.querySelector("#form-adiciona");
    const tabelaAlunos = document.querySelector("#tabela-alunos")
    let novoAluno = adicionarNovoAluno(novoFormulario);
    let alunoTr = document.createElement("tr");
    let nomeAlunoTd = document.createElement("td");
    nomeAlunoTd.textContent = novoAluno.nomeAluno;
    let notaUmAlunoTd = document.createElement("td");
    notaUmAlunoTd.textContent = novoAluno.notaUmAluno;
    let notaDoisAlunoTd = document.createElement("td");
    notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno;
    let mediaAlunoTd = document.createElement("td");
    mediaAlunoTd.textContent = novoAluno.mediaAluno.toFixed(2);

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);
    tabelaAlunos.appendChild(alunoTr);

})





function adicionarNovoAluno (dadosDoFormulario) {
    //A função recebe o parâmetro dadosDoFormulario e quando executada no evento acima é passada a variável que contém o formulário do DOM através do querySelector
    //Este objeto serve para pegar as informações dos inputs e guardá-lo para não precisar criar várias variáveis
    let infoAluno = {
        nomeAluno: dadosDoFormulario.nome.value ,
        notaUmAluno: dadosDoFormulario.notaum.value,
        notaDoisAluno: dadosDoFormulario.notadois.value,
        mediaAluno: calcularMedia(dadosDoFormulario.notaum.value, dadosDoFormulario.notadois.value)
    }
    //a função calcularMedia está declarada no outro script, ela serviu passando os parâmetros corretos para fazer o calculo
    return infoAluno;
}