
class revisaoController{

    constructor(){
        const $ = document.getElementById.bind(document)
        this.formInputMateria = $("materia")
        this.formInputConteudo = $("conteudo")
        this.formInputData = $("data")
        this.formInputIntervalo = $("intervalo")
        this.revisaoView = new revisaoView();
        this.listaRevisao = new listaRevisao()
        this.BancoDeDados = new DBModel()



    }

    adiciona(event){
        event.preventDefault();
        console.log("modulo funcionando")
        const materia = this.formInputMateria.value
        const conteudo = this.formInputConteudo.value
        const data = this.formInputData.value
        const intervalo = this.formInputIntervalo.value
        
        this.criaListaRevisao(new Revisao(materia,conteudo,new dateHelper(data).data,intervalo))
        this.BancoDeDados.adicionaRevisao(new Revisao(materia,conteudo,new dateHelper(data).data,intervalo))
        this.revisaoView.adicionaRevisao(this.listaRevisao.revisoes)

    }

    criaListaRevisao(revisao){
        this.listaRevisao.adicionaItem(revisao)
    }
}
