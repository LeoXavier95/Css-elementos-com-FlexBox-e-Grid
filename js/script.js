
const botaoMenu = document.querySelector(".cabecalho__menu").addEventListener("click", function(){
    esconderBotao()
})

let esconderBotao = () =>{
    const menu = document.querySelector('.menu-lateral')

    menu.classList.toggle('menu-lateral--ativo')
}