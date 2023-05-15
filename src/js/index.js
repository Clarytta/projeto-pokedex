const botaoAlterarTema = document.getElementById("alterar-tema"); //getElementByID pode ser usado para requisitar um ID do documento HTML

const body = document.querySelector("body"); //querySelector serve para requisitar class'es ou tag's do documento HTML

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

const footer = document.querySelector("footer");

const main = document.querySelector("main");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        footer.classList.remove("modo-escuro");
        main.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/interface/sun.png");
    } else {
        body.classList.add("modo-escuro");
        footer.classList.add("modo-escuro");
        main.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/interface/moon.png");
    }

});
//para adicionar uma ação, adicionamos o nome da variável que será usada em seguida do addEventListener, logo após fazemos uma instrução do que será feito, adicionamos o evento "click" para reconhecer a ação de clique, e usamos vírgula seguida de uma "arrow function" que seria o () => {}, serve para disparar uma ação, dentro dos {} especificamos o comando.