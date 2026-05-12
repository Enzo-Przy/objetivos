const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log("textos")

for(let i = 0; i<botoes.length; i++){
    botoes[i].onclick = funcion () {
        for(let j=onabort; j<botoes.length;j++){
            botoes[j].classList.remove("ativo")
            botoes[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        botoes[i].classList.add("ativo")
        }
    }
}