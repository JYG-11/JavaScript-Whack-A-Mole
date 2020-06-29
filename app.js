const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {

	// reset all squares
	square.forEach(className => {
		className.classList.remove('mole')
	})

	// pick a random position
	let randomPosition = square[Math.floor(Math.random() * 9)]
	randomPosition.classList.add('mole')

	// set hit position to random position
	hitPosition = randomPosition.id
}

square.forEach(id => {
	id.addEventListener('mouseup', () => {
		if (id.id === hitPosition) {
			result++
			score.textContent = result
			hitPosition = null
		}
	})
})

let moleId = null

function moveMole() {
	moleId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
	currentTime--
	timeLeft.textContent = currentTime

	if (currentTime === 0) {
		clearInterval(timerId)
		clearInterval(moleId)
		alert('GAME OVER! Your final score is ' + result)
	}
}

let timerId = setInterval(countDown, 1000)

