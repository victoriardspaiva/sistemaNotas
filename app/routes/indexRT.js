
function resultado(media) {
   // console.log('passei em resultado', media)
    if (media >= 7) {
      return "Aprovado"
    } else if (media >= 3 && media < 7) {
      return "Recuperação"
    } else {
      return "Reprovado"
    }
  }

  function soma (n1, n2, n3, n4) {
     // console.log('passei em soma', n1)
      return (n1+n2+n3+n4)/4
  }

  function status (n1, n2, n3, n4){
    //  console.log('passei em status')
      return resultado(soma(n1, n2, n3, n4))
  }


var dados = [
    {'disciplina' : 'Banco de dados', 'n1': 2, 'n2' : 2, 'n3' : 2, 'n4': 2, 'resultado' : function () { return status(this.n1, this.n2, this.n3, this.n4)}},
    {'disciplina' : 'Lógica', 'n1': 10, 'n2' : 9, 'n3' : 7, 'n4': 7, 'resultado' : function () { return status(this.n1, this.n2, this.n3, this.n4)}},
    {'disciplina' : 'Redes de computadores', 'n1': 8, 'n2' : 7, 'n3' : 5, 'n4': 7, 'resultado' : function () { return status(this.n1, this.n2, this.n3, this.n4)}},
    {'disciplina' : 'Estrutura de dados', 'n1': 6, 'n2' : 6, 'n3' : 6, 'n4': 6, 'resultado' : function () { return status(this.n1, this.n2, this.n3, this.n4)}},
    {'disciplina' : 'Aplicações Mobile', 'n1': 9, 'n2' : 9, 'n3' : 7, 'n4': 7, 'resultado' : function () { return status(this.n1, this.n2, this.n3, this.n4)}},
    
]


module.exports = function(site){
  //  console.log('media: ',dados[0].resultado())
    // console.log('aqui esta os dados: ', dados);
    // rota inicial
    site.get('/', function(req, res){
        res.render('index', {dados})
    })
    
}