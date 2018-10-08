window.addEventListener("load", function(){
    imprimirTabela();
})

function imprimirTabela (){
    const alunos = document.querySelectorAll(".aluno");
    for(aluno of alunos){
        const notaUm = aluno.querySelector(".info-notaum").textContent;
        const notaDois = aluno.querySelector(".info-notadois").textContent;
        const media = aluno.querySelector(".info-media");
        media.textContent =  calcularMedia(notaUm, notaDois).toFixed(2);
        let mediaCalculada = media.textContent;
        notasVermelhas(mediaCalculada, media);
    }
}
function notasVermelhas (mediaCalculada, media){
        if (mediaCalculada < 5){
        media.classList.add("abaixo-da-media");
    }
}

function calcularMedia (notaUm, notaDois){
    return calculoMedia = (parseFloat(notaUm) + parseFloat(notaDois)) / 2;
}