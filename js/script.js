const alunos = document.querySelectorAll(".aluno");

for(aluno of alunos){
    const notaUm = aluno.querySelector(".info-notaum");
    const notaDois = aluno.querySelector(".info-notadois");
    const media = aluno.querySelector(".info-media");

    const notaUmConteudo = notaUm.textContent;
    const notaDoisConteudo = notaDois.textContent;
    media.textContent =  calcularMedia(notaUmConteudo, notaDoisConteudo).toFixed(2);
}

function calcularMedia (notaUm, notaDois){
    let calculoMedia = (parseFloat(notaUm) + parseFloat(notaDois)) / 2;
    return calculoMedia;
}