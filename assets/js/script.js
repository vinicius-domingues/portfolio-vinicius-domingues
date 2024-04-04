
// manipulação do DOM
// let = local
// var = global
// const = constante

console.log("calcular...")

qtde = document.querySelector("#qtde").addEventListener("change", calcular)
tipo = document.querySelector("#tipo").addEventListener("change", calcular)
radios = document.querySelector("#prototipo_sim").addEventListener("change", calcular)
radion = document.querySelector("#prototipo_nao").addEventListener("change", calcular)

// addEventListerner = espera algum evento causado pelo usuário
// "change" = dispara quando algum valor é alterado (qual será escutado)
// #qtde -> está no meu index

function calcular(){
    const qtde = document.querySelector("#qtde").value
    let preco = (qtde * 1000)

    const tipo = document.querySelector("#tipo").value
    if (tipo == "2") preco += 1000

    const temLayout = document.querySelector("#prototipo_sim").checked
    if (temLayout) preco *= 1.1

    document.querySelector("#orcamento").innerText = "R$ " + preco.toFixed(2)


}

console.log(qtde)
