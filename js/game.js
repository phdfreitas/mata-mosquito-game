// Recuperando o tamanho da tela disponível
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var tempoMosquito = 0
var nivel = window.location.search.replace('?', '')

if(nivel === 'facil'){
	tempoMosquito = 1500
}
else if (nivel === 'normal'){
	tempoMosquito = 1000	
}
else{
	tempoMosquito = 750
}


// A cada 'resoze' do body novos valores de largura e altura são definidos
function tamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth	
	console.log(altura + ' ' + largura)
}
tamanhoTela()

// Cronometro do jogo
document.getElementById('tempo').innerHTML = tempo
var cronometro = setInterval(function(){
	tempo--

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}
	else{
		document.getElementById('tempo').innerHTML = tempo
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
			window.location.href = 'fim_de_jogo.html'
		}
		else{
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++
		}
	}

	var posY = Math.abs(Math.floor(Math.random() * altura) - 120)
	var posX = Math.abs(Math.floor(Math.random() * largura) - 120)

	console.log(posX, posY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = alteraTamanho() + ' ' + alteraLado() // Associa o retorno das funções as classes css
	mosquito.style.left = posX+'px'
	mosquito.style.top = posY+'px'
	mosquito.id = 'mosquito'
	mosquito.style.position = 'absolute'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)
}

// A cada 1 segundo, criamos um novo elemento
var criaMosquito = setInterval(function(){
	posicaoRandomica()
}, tempoMosquito)

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
