// Altere o método aplicarDesconto para que receba um valor
// de desconto (em porcentagem) e retorne o valor do 
// produto com o desconto aplicado.
// Altere o método valorPorUnidade para que retorne o valor
// do produto por unidade
// (ex.: sabao = {nome:"sabão em pó", quantidade:500, tipoUnidade:"gramas", valor:30}
//  sabao.valorPorUnidade() => "0,06 por grama")

class Produto {
    constructor(nome, valor, quantidade = 1, tipoUnidade = "unidade"){
        this.nome = nome
        this.quantidade = quantidade
        this.tipoUnidade = tipoUnidade
        this.valor = valor

    }

    aplicarDesconto(desconto){
        return this.valor
    }

    valorPorUnidade(){
        return this.valor
    }
}

module.exports = Produto