// Recuperando o tamanho da tela disponível
var altura = 0
var largura = 0

// A cada 'resoze' do body novos valores de largura e altura são definidos
function tamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth	
	console.log(altura + ' ' + largura)
}
tamanhoTela()

// Criação de elementos randomicos
function posicaoRandomica(){
	
	var posY = Math.abs(Math.floor(Math.random() * altura) - 90)
	var posX = Math.abs(Math.floor(Math.random() * largura) - 90)

	console.log(posX, posY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = 'mosquito'
	mosquito.style.left = posX+'px'
	mosquito.style.top = posY+'px'
	mosquito.style.position = 'absolute'
	document.body.appendChild(mosquito)
}
posicaoRandomica()
