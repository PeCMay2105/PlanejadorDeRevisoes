class revisaoView{
    constructor(){
    this.tabela = document.querySelector(".tabela")
    
    }
    adicionaRevisao(listaRevisao){
        this.tabela.innerHTML = this.editaView(listaRevisao)
    }

    editaView(listaRevisao){
        return `
        <tr class="linha">
                <th class="celula">Matéria</th>
                <th class="celula">Conteúdo</th>
                <th class="celula">Última revisão</th>
            </tr>
            ${listaRevisao.map(revisao => {
            if(this.verificaIntervalo(revisao) == true){ 
                return `
            <tr class="linhaAdicionada">
                <td class="celula overtime">${revisao.materia}</td>
                <td class="celula overtime">${revisao.conteudo}</td>
                <td class="celula overtime">${revisao.data}</td>
            </tr>`
            }
            else{
                return `<tr class="linhaAdicionada">
                <td class="celula">${revisao.materia}</td>
                <td class="celula">${revisao.conteudo}</td>
                <td class="celula">${revisao.data}</td>
            </tr>`
            }
                }
                    )
                        }`
    }

    verificaIntervalo(revisao){
      const diasEmMiliseg = 86400000
      let diaMesAno = revisao.data.split("/");
      let dataAtual = new Date()
      console.log(dataAtual)
      let dataDaRevisao = new Date(diaMesAno[2],diaMesAno[1]-1,diaMesAno[0])
      console.log(dataDaRevisao)
      let tempoDecorrido = dataAtual.getTime() - dataDaRevisao.getTime()
      let tempoDecorridoFormatado = tempoDecorrido/diasEmMiliseg
      console.log(tempoDecorridoFormatado)
        if(tempoDecorridoFormatado > revisao.intervalo){
            return true
        }
    }
}