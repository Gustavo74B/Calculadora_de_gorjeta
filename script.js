let conta = 0
let pessoas = 0

const conta_input = document.querySelector("#conta")
conta_input.addEventListener("input", receber_valor_conta)

function receber_valor_conta(evento) {
    conta = Number(evento.target.value)
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

}