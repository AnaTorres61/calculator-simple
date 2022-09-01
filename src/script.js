function calcular(){
  var primeiroNumero = parseFloat(document.getElementById('primeiroNumero').value)
  var segundoNumero = parseFloat(document.getElementById('segundoNumero').value)
  var resultado = document.getElementById('resultado')
  var operacaoSelecionada = obterOperacaoSelecionada()
  
  if(operacaoSelecionada == "soma"){
   resultado.value = primeiroNumero + segundoNumero
  }else if(operacaoSelecionada == "subtracao"){
    resultado.value = primeiroNumero - segundoNumero
  }else if(operacaoSelecionada == "multiplicacao"){
    resultado.value = primeiroNumero * segundoNumero
  }else if(operacaoSelecionada == "divisao"){
    resultado.value = primeiroNumero / segundoNumero
  }
  
  function obterOperacaoSelecionada(){
  var radioOperacao = document.getElementsByClassName('operacao')
  for(var i = 0; i < radioOperacao.length; i++){
    if(radioOperacao[i].checked){
      return radioOperacao[i].value
    }
  }
}
}

function limpar(){
  primeiroNumero.value = ""
  segundoNumero.value = ""
  resultado.value = ""
}