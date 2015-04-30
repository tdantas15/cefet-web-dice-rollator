// Fa�a seu exerc�cio neste arquivo


// Alguns elementos importantes na p�gina (index.html):
// #rolar: Bot�o rolar
//	 - voc� deve atribuir um _handler_ de evento a ele para fazer o c�lculo da rolagem dos dados
// #resultado: Elemento cujo conte�do deve ser uma string com os resultados
//	 - voc� deve definir seu conte�do (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados: 
//	 - voc� deve torn�-lo vis�vel removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

document.getElementById('rolar').addEventListener('click', function(){
	var resultado = [];
	resultado = resultado.concat(rolarDado(4,document.getElementById('quantidadeD4').value));
	resultado = resultado.concat(rolarDado(6,document.getElementById('quantidadeD6').value));
	resultado = resultado.concat(rolarDado(8,document.getElementById('quantidadeD8').value));
	resultado = resultado.concat(rolarDado(10,document.getElementById('quantidadeD10').value));
	resultado = resultado.concat(rolarDado(12,document.getElementById('quantidadeD12').value));
	resultado = resultado.concat(rolarDado(20,document.getElementById('quantidadeD20').value));

	document.getElementById('recipienteResultados').classList.remove('oculto');
	document.getElementById('resultado').innerHTML = gerarTexto(resultado);
});

function rolarDado(lados, numDados){
	var resultado = [];
	for (var i=0; i< numDados ; i++){
		resultado.push(Math.ceil(Math.random() * lados));
	}
	return resultado;
}

function gerarTexto(resultado){
	var soma = 0;
	var texto = '';
	for (var i=0; i<resultado.length; i++){
		soma += resultado[i];
		if (i == resultado.length - 1){
			texto += resultado[i];
		} else {
			texto += resultado[i]+ " + ";
		}
	}
	texto+= " = "+soma;
	return texto;
}
