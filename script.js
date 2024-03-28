let conta = 0
let pessoas = 0
let porcentagem = 0

const conta_input = document.querySelector("#conta")
conta_input.addEventListener("input", receber_valor_conta)

function receber_valor_conta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoas_input = document.querySelector("#pessoas")
pessoas_input.addEventListener("input", receber_quantidade_pessoas)

function receber_quantidade_pessoas(evento) {
    const paragrafo_erro = document.querySelector(".pessoas #erro")
    const div_erro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
        paragrafo_erro.style.display = "block"
        div_erro.setAttribute("id", "erro-div")
    } else {
        paragrafo_erro.style.display = "none"
        div_erro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }

    calcular()
}

const botoes_gorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoes_gorjeta.forEach(botao => {
    botao.addEventListener("click", receber_porcentagem_botao)
})

function receber_porcentagem_botao(evento) {
    botoes_gorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if (botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100      
    } else {
        porcentagem = 0
    }

    calcular()
}

const gorjeta_input = document.querySelector("#outra")
gorjeta_input.addEventListener("input", receber_porcentagem_botao)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strong_gorjeta_total = document.querySelector(".gorjeta-total > strong")
        strong_gorjeta_total.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`

        const strong_total = document.querySelector(".total > strong")
        strong_total.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`
    }
}

const botao_limpar = document.querySelector(".resultados button")
botao_limpar.addEventListener("click", limpar)

function limpar() {
    conta_input.value = ""

    botoes_gorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjeta_input.value = ""

    pessoas_input.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$0.00"
    document.querySelector(".total > strong").innerHTML = "R$0.00"
}