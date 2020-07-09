// Recuperando o tamanho da tela disponível
var altura = 0
var largura = 0

var vidas = 1
var tempoTotal = 10
var tempoNovoMosquito = 0

var pontosAtuais = 0
var pontosNecessarios = 0

// Recupera o que vem após o target na url. 
// Com o replace, removemos a '?'
var nivel = window.location.search.replace('?', '')

if(nivel === 'facil'){
	tempoNovoMosquito = 1500
	tempoTotal = 60
	pontosNecessarios = 30
}
else if (nivel === 'normal'){
	tempoNovoMosquito = 1000	
	tempoTotal = 40
	pontosNecessarios = 27
}
else if (nivel === 'dificil'){
	tempoNovoMosquito = 750
	tempoTotal = 30
	pontosNecessarios = 22
}

// A cada 'resize' do body novos valores de largura e altura são definidos
function tamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth - 60
}
tamanhoTela()

// Cronometro do jogo
document.getElementById('tempo').innerHTML = tempoTotal
var cronometro = setInterval(function(){
	tempoTotal--

	if(tempoTotal < 0 || pontosAtuais == pontosNecessarios){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}
	else{
		document.getElementById('tempo').innerHTML = tempoTotal
	}

}, 1000)

// Criação de elementos randomicos
function posicaoRandomica(){
	
	/* 
		Antes da criação de um novo elemento
		verificamos se já existe algum elemento na tela
		se sim, vamos exclui-lo
	*/
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas > 3){
			window.location.href = 'fim-de-jogo.html'
		}
		else{
			document.getElementById('v' + vidas).src = '../imagens/coracao_vazio.png'
			vidas++
		}
	}

	var posY = Math.abs(Math.floor(Math.random() * altura) - 120)
	var posX = Math.abs(Math.floor(Math.random() * largura) - 120)

	var mosquito = document.createElement('img')
	mosquito.src = '../imagens/mosquito.png'
	mosquito.className = alteraTamanho() + ' ' + alteraLado() // Associa o retorno das funções as classes css
	mosquito.style.left = posX+'px'
	mosquito.style.top = posY+'px'
	mosquito.id = 'mosquito'
	mosquito.style.position = 'absolute'
	mosquito.onclick = function(){
		this.remove()
		pontosAtuais++
		document.getElementById('pontos').innerHTML = pontosAtuais
	}

	document.body.appendChild(mosquito)
}

// A cada 1 segundo, criamos um novo elemento
var criaMosquito = setInterval(function(){
	posicaoRandomica()
}, tempoNovoMosquito)

// Altera o tamanho dos mosquitos exibidos na tela
function alteraTamanho(){
	var classe = Math.floor(Math.random() * 3)
	switch (classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

// Altera o lado para o qual o mosquito "olha"
function alteraLado(){
	var classe = Math.floor(Math.random() * 2)
	switch (classe) {
		case 0:
			return 'ladoEsquerdo'
		case 1:
			return 'ladoDireito'
	}
}