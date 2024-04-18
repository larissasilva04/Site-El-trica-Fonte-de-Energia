const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left ="50%"
    form.style.tranform = "translatex(-50%)"
    mascara.style.visibility ="visible"
}

function esconderForm(){
    form.style.left ="-300%"
    form.style.tranform = "translatex(0%)"
    mascara.style.visibility ="hidden"
}
const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener("click", () => {
    // Passo 3 - adicionar a classe ativo nos projetos escondidos 
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais 
    // Passo 1 - pegar o botão e esconder ele 
    esconderBotao();      
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });
}
  