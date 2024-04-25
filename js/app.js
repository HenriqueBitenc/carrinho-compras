////Zerando os campos de total geral e carrinho de compras fora das funções para iniciar a página

let total = document.querySelector(".carrinho__total")

total.innerHTML = `<p class="carrinho__total">
Total: <span class="texto-azul" id="valor-total">R$0</span>
</p>`

let carrinho = document.getElementById("lista-produtos")

carrinho.innerHTML = `<section class="carrinho__produtos__produto">
<span class="texto-azul"></span><span class="texto-azul"></span>
</section>`

let totalGeral = 0

////Início da função limpar

function limpar() {

///Limpar o carrinho de compras
let carrinho = document.getElementById("lista-produtos")

carrinho.innerHTML = `<section class="carrinho__produtos__produto">
<span class="texto-azul"></span><span class="texto-azul"></span>
</section>`


////Limpar o total geral
let total = document.querySelector(".carrinho__total")

total.innerHTML = `<p class="carrinho__total">
Total: <span class="texto-azul" id="valor-total">R$0</span>
</p>`

/// Trazer a quantidade para vazio novamente
document.getElementById("quantidade").value = ""

}

//Início da função Adicionar
function adicionar(){

///Declarar as variáveis do formulário para isolar o nome e o valor dos produtos

let formulario = document.getElementById("produto").value
let produtoNome = formulario.split("-")[0]
let produtoValor = formulario.split("R$")[1]

///Obter também o valor da quantidade para calcular o subtotal

let quantidade = document.getElementById("quantidade").value

if(quantidade == ""){
    alert("Por favor informe o número de itens para adicionar ao carrinho!")
    return
}

let produtoTotal = quantidade * produtoValor

///Declarar a lista de compras para adicionar novos itens

let listaDeCompras = document.getElementById("lista-produtos")

    listaDeCompras.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoTotal}</span>
  </section>`


///Total geral
totalGeral = totalGeral + produtoTotal

total.innerHTML = `<p class="carrinho__total">
Total: <span class="texto-azul" id="valor-total">R$${totalGeral}</span>
</p>`

///Novamente zerando a quantidade após adicionar um item
document.getElementById("quantidade").value = ""

}