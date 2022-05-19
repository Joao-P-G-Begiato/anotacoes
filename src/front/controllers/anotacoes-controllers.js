class AnotacoesController{
    constructor (){
        this.array =[]
    }

    addAnotação(){
        this.array.push(new Anotacoes($("#titulo").val(), $("#descricaoTarefa").val()))
    } 
}

let anotacoes = new AnotacoesController

$(".btn").click(function(e){
    e.preventDefault()
    anotacoes.addAnotação()
})