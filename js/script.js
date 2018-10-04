const alunos = document.querySelectorAll(".aluno");

for (aluno of alunos){
    const notaUm = aluno.querySelector(".info-notaum").textContent;
    const notaDois = aluno.querySelector(".info-notadois").textContent;
    let media = aluno.querySelector(".info-media");
    let calculoMedia = (parseFloat(notaUm) + parseFloat(notaDois))/2;
    media.textContent = calculoMedia.toFixed(2);
    if(media.textContent < 5){
        aluno.style.backgroundColor = "#fa4747";
    }
}