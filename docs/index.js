
// Map is saved by a list of numbers, each referencing one of 3: empty, wall or coin
const MAP = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
	[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
	[1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
	[1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1],
	[1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1],
	[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]
]

// Each number refrences a different positon on the spritesheet.png texture
const MAP_SPRITE_INDICES = [
	[ 41, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 44, 41, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 44 ],
	[ 14,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 14,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12 ],
	[ 14,  0, 32, 11, 34,  0, 32, 11, 11, 34,  0, 12, 14,  0, 32, 11, 11, 34,  0, 32, 11, 34,  0, 12 ],
	[ 14,  0, 33, 13, 31,  0, 33, 13, 13, 31,  0, 33, 31,  0, 33, 13, 13, 31,  0, 33, 13, 31,  0, 12 ],
	[ 14,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12 ],
	[ 14,  0, 52, 22, 54,  0, 51,  0, 52, 22, 22, 91, 92, 22, 22, 54,  0, 51,  0, 52, 22, 54,  0, 12 ],
	[ 14,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0, 12, 14,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0, 12 ],
	[ 42, 11, 11, 11, 34,  0, 81, 22, 22, 54,  0, 33, 31,  0, 52, 22, 22, 83,  0, 32, 11, 11, 11, 43 ],
	[  0,  0,  0,  0, 14,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0, 12,  0,  0,  0,  0 ],
	[ 13, 13, 13, 13, 31,  0, 53,  0, 36, 22, 54,  0,  0, 52, 22, 38,  0, 53,  0, 33, 13, 13, 13, 13 ],
	[  0,  0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0, 12 ],
	[ 11, 11, 11, 11, 34,  0, 51,  0, 37, 22, 22, 22, 22, 22, 22, 35,  0, 51,  0, 32, 11, 11, 11, 11 ],
	[  0,  0,  0,  0, 14,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0, 12,  0,  0,  0, 12 ],
	[  0,  0,  0,  0, 14,  0, 21,  0, 32, 11, 11, 11, 11, 11, 11, 34,  0, 21,  0, 12,  0,  0,  0, 12 ],
	[ 41, 13, 13, 13, 31,  0, 53,  0, 33, 13, 13, 44, 41, 13, 13, 31,  0, 53,  0, 33, 13, 13, 13, 44 ],
	[ 14,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 14,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12 ],
	[ 14,  0, 52, 22, 38,  0, 52, 22, 22, 54,  0, 33, 31,  0, 52, 22, 22, 54,  0, 36, 22, 54,  0, 12 ],
	[ 14,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 21,  0,  0,  0, 12 ],
	[ 71, 22, 54,  0, 53,  0, 51,  0, 52, 22, 22, 91, 92, 22, 22, 54,  0, 51,  0, 53,  0, 52, 22, 73 ],
	[ 14,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0, 12, 14,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0, 12 ],
	[ 14,  0, 36, 22, 22, 22, 82, 22, 22, 38,  0, 12, 14,  0, 36, 22, 22, 82, 22, 22, 22, 38,  0, 12 ],
	[ 14,  0, 53,  0,  0,  0,  0,  0,  0, 53,  0, 33, 31,  0, 53,  0,  0,  0,  0,  0,  0, 53,  0, 12 ],
	[ 14,  0,  0,  0, 32, 11, 11, 34,  0,  0,  0,  0,  0,  0,  0,  0, 32, 11, 11, 34,  0,  0,  0, 12 ],
	[ 42, 11, 11, 11, 43,  0,  0, 42, 11, 11, 11, 11, 11, 11, 11, 11, 43,  0,  0, 42, 11, 11, 11, 43 ]
]

// Helper functions

function getTime() {
	return performance.now() / 1000
}

function dist(a, b) {
	return Math.abs(a - b)
}

function clamp(x, min, max) {
	if (x < min) {
		return min
	} else if (x > max) {
		return max
	}

	return x
}

function lerp(t, start, end) {
	return start + clamp(t, 0, 1) * (end - start)
}

function mod2(x, n) {
	return x < 0 ? (n + x % n) : (x % n)
}

// GAME STAGES
const MENU = 0
const IN_GAME = 1

// DIRECTION INDICES
const UP = 0
const LEFT = 1
const DOWN = 2
const RIGHT = 3

// TILE INDICES
const EMPTY = 0
const WALL = 1
const COIN = 2
const POWER_UP = 3

// DIRECTION FUNCTIONS
function isHorizontal(dir) {
	return dir % 2 == 1
}

function isVertical(dir) {
	return dir % 2 == 0
}

function dirX(direction) {
	return isHorizontal(direction) ? (direction - 2) : 0
}

function dirY(direction) {
	return isVertical(direction) ? (direction - 1) : 0
}

function directionByDeltaMovement(dx, dy) {
	if (Math.abs(dx) > Math.abs(dy)) {
		if (dx > 0) {
			return RIGHT
		} else {
			return LEFT
		}
	} else {
		if (dy > 0) {
			return DOWN
		} else {
			return UP
		}
	}
}

function fetchRandomDirection(x, y, excluded = -1) {
	const directions = []


	for (let i = 0; i < 4; ++i) {
		
		if (map.at(Math.floor(x + dirX(i)), Math.floor(y + dirY(i))) !== WALL && (excluded === -1 || i !== mod2(excluded - 2, 4))) {
			directions.push(i)
		}
	}

	if (directions.length === 0) return mod2(excluded - 2, 4)

	return directions[Math.floor(Math.random() * directions.length)]
}

// CONSTANTS
const PACMAN_SPAWN = [12, 17.5]
const GHOST_POSITIONS = [[12, 8.5], [10, 10.5], [12, 10.5], [14, 10.5]]
const GHOST_COLORS = ['#ff0000', '#ffb8ff', '#00ffff', '#ffb851']

// CLASSES
class Map {
	constructor(size) {
		this.size = size
		this.coins = 0
		for (let x = 0; x < this.size; ++x) {
			this[x] = []
			for (let y = 0; y < this.size; ++y) {
				this[x][y] = EMPTY
			}
		}
	}

	fill(preset) {

		//Clean out current map
		for (let i = 0; i < this.size; ++i) {
			this[i] = undefined
		}
		this.coins = 0

		// Fill in new map
		this.size = preset.length
		for (let x = 0; x < this.size; ++x) {
			this[x] = []
			for (let y = 0; y < this.size; ++y) {
				const cell = preset[y][x]
				this[x][y] = cell

				if (cell === COIN) {
					++this.coins
				}
			}
		}

		// Spawn up to 6 powerups
		let tries = 6

		while(tries > 0) {
			--tries

			let x = Math.floor(Math.random() * this.size)
			let y = Math.floor(Math.random() * this.size)
			if (this[x][y] === COIN) {
				--this.coins
				this[x][y] = POWER_UP
			}
		}
	}

	at(x, y) {
		x = mod2(x, this.size)
		y = mod2(y, this.size)
		return this[x][y]
	}

	place(x, y, object) {
		x = mod2(x, this.size)
		y = mod2(y, this.size)
		this[x][y] = object
	}
}

class Pacman {
	constructor() {
		this.x = 0
		this.y = 0
		this.direction = RIGHT
		this.speed = 4

		this.ox = 0
		this.oy = 0

		this.lives = 3
		this.coins = 0
		this.nextDirection = this.direction
	}

	place(x, y) {
		this.x = x
		this.y = y
		this.ox = this.x
		this.oy = this.y
	}

	reset(x = 0, y = 0, direction = UP) {
		this.place(x, y)
		this.direction = direction
		this.nextDirection = direction
	}
}

class Ghost {
	constructor(index) {
		this.x = 0
		this.y = 0
		this.direction = DOWN
		this.speed = 2

		this.ox = 0
		this.oy = 0

		this.index = index
		this.color = GHOST_COLORS[this.index]
	}

	place(x, y) {
		this.x = x
		this.y = y
		this.ox = this.x
		this.oy = this.y
	}

	reset(x = 0, y = 0, direction = UP) {
		this.place(x, y)
		this.direction = direction
 	}
}







const tps = 20 //game ticks per second

let title
let playButton
let instructions

let intervalId = -1
let gameStage = MENU

let startTime = 0
let gameTime = 0
let prevGameTime = 0

let message = ''
let messageTime = 0

const map = new Map(MAP.length)
let pacman
const ghosts = []

document.addEventListener('DOMContentLoaded', function init() {

	if ('ontouchstart' in window || navigator.msMaxTouchPoints > 0) { // if mobile
    	document.documentElement.style.setProperty('--h', `${window.innerHeight}px`)

    	window.addEventListener('resize', () => {
        	document.documentElement.style.setProperty('--h', `${window.innerHeight}px`)
    	})
	}

	setupCanvas()
	setupInputDetection()

	title = document.getElementById('title')
	instructions = document.getElementById('instructions')
	playButton = document.getElementById('play-button')
	playButton.onclick = () => {
		if (gameStage === MENU) {
			startNewGame()
		}
	}
})



// GAME BEHAVIOUR

function startNewGame(freshGame = true) {

	if (freshGame) { // Add fresh game objects
		title.style.display = 'none'
		instructions.style.display = 'none'
		playButton.style.display = 'none'

		messageTime = 0

		map.fill(MAP)
		
		pacman = new Pacman()

		ghosts.length = 0
		for (let i = 0; i < 4; ++i) {
			ghosts[i] = new Ghost(i)
		}
	}

	// Reset to default states
	pacman.reset(PACMAN_SPAWN[0], PACMAN_SPAWN[1], RIGHT)
	for (let i = 0; i < 4; ++i) {
		const position = GHOST_POSITIONS[i]
		ghosts[i].reset(position[0], position[1], i % 2 === 0 ? 2 * Math.round(Math.random()) + 1 : fetchRandomDirection(position[0], position[1]))
	}
	
	startTime = getTime()
	gameTime = startTime
	prevGameTime = startTime

	gameStage = IN_GAME
	tick()
	intervalId = setInterval(tick, 1000 / tps)
}

function nextCell(x, y, direction) {
	return map.at(Math.floor(x + dirX(direction)), Math.floor(y + dirY(direction)))
}

function tick() {
	prevGameTime = gameTime
	gameTime = getTime()
	const dt = gameTime - prevGameTime

	if (gameTime - startTime < 4) return // game doesnt tick during countdown

	// Pacman Movement
	pacman.ox = pacman.x
	pacman.oy = pacman.y
	tickPacman(dt)

	// Ghost movement
	for (let i = 0; i < ghosts.length; ++i) {
		const ghost = ghosts[i]
		ghost.ox = ghost.x
		ghost.oy = ghost.y
		tickGhost(ghost, dt)
	}

	// Collision detection
	let cellX = Math.floor(pacman.x)
	let cellY = Math.floor(pacman.y)

	switch(map.at(cellX, cellY)) {
		case EMPTY:
			break

		case WALL:
			endGame(-1)

			break
		case COIN:
			++pacman.coins
			map.place(cellX, cellY, EMPTY)

			if (pacman.coins >= map.coins) {
				endGame(1)
			}

			break
		case POWER_UP:
			pacman.speed += 0.3
			map.place(cellX, cellY, EMPTY)

			break
	}
	
	for (const ghost of ghosts) {
		const distance = Math.hypot(pacman.x - ghost.x, pacman.y - ghost.y)
		if (distance <= 0.5) {
			endGame(0)
		}
	}
}

function endGame(type) {
	let gameEnd = false

	switch (type) {
		case -1:
			gameEnd = true
			message = 'You glitched into a wall!'

			break;
		case 0:
			if (pacman.lives > 1) {
				--pacman.lives
				message = `You have ${pacman.lives + (pacman.lives === 1 ? ' Live' : ' Lives')} left!`
			} else {
				gameEnd = true
				message = `You lost!`
			}

			break;
		case 1:
			gameEnd = true
			message = `You won!`

			break;
	}

	clearInterval(intervalId)

	if (gameEnd) {
		gameStage = MENU
		messageTime = getTime() + 5
		title.style.display = ''
		instructions.style.display = ''
		playButton.style.display = ''
	} else {
		messageTime = getTime() + 3
		startNewGame(false)
	}
}

function tickPacman(dt) {
	const movement_x = pacman.speed * dt
	const movement_y = pacman.speed * dt
	let x = pacman.x
	let y = pacman.y
	let cellX = Math.floor(x)
	let cellY = Math.floor(y)

	//Direction checks whether pacman can change to new direction (green arrow)

	if (isHorizontal(pacman.direction)) { // LEFT / RIGHT
		pacman.y = Math.floor(pacman.y) + 0.5 // ensure pacman stays in center of direction axis 

		if (isHorizontal(pacman.nextDirection)) { // already moves on current axis
			pacman.direction = pacman.nextDirection
		} else {
			// check if pacman is close enough to center of cell to change direction axis
			if (dist(pacman.x % 1, 0.5) < pacman.speed / tps && nextCell(pacman.x, pacman.y, pacman.nextDirection) !== WALL) { 
				pacman.x = Math.floor(pacman.x) + 0.5
				pacman.direction = pacman.nextDirection
			}
		}
	} else { // UP / DOWN
		pacman.x = Math.floor(pacman.x) + 0.5 // ensure pacman stays in center of direction axis

		if (isVertical(pacman.nextDirection)) { // already moves on current axis
			pacman.direction = pacman.nextDirection
		} else {
			// check if pacman is close enough to center of cell to change direction axis
			if (dist(pacman.y % 1, 0.5) < pacman.speed / tps && nextCell(pacman.x, pacman.y, pacman.nextDirection) !== WALL) {
				pacman.y = Math.floor(pacman.y) + 0.5
				pacman.direction = pacman.nextDirection
			}
		}
	}

	x = pacman.x
	y = pacman.y
	cellX = Math.floor(x)
	cellY = Math.floor(y)
	const nc = nextCell(cellX, cellY, pacman.direction)

	//Movement

	switch (pacman.direction) {
		case UP:
			x = Math.floor(x) + 0.5

			if (nc !== WALL) {
				y -= movement_y
			} else {
				y = Math.max(cellY + 0.5, y - movement_y)
			}
			
			break
		case LEFT:
			y = Math.floor(y) + 0.5

			if (nc !== WALL) {
				x -= movement_x
			} else {
				x = Math.max(cellX + 0.5, x - movement_x)
			}

			break
		case DOWN:
			x = Math.floor(x) + 0.5

			if (nc !== WALL) {
				y += movement_y
			} else {
				y = Math.min(cellY + 0.5, y + movement_y)
			}
		
			
			break
		case RIGHT:
			y = Math.floor(y) + 0.5

			if (nc !== WALL) {
				x += movement_x
			} else {
				x = Math.min(cellX + 0.5, x + movement_x)
			}
			
			break
	}
	
	pacman.x = mod2(x, map.size)
	pacman.y = mod2(y, map.size)

	if (x !== pacman.x || y !== pacman.y) {
		pacman.ox = pacman.x
		pacman.oy = pacman.y
	}
}


function tickGhost(ghost, dt) { //this code is mostly recycled and simplified from the pacman movement
	let flag = false

	// check if ghost is in center of current cell
	if (isHorizontal(ghost.direction)) {
		flag = dist(ghost.x % 1, 0.5) < ghost.speed / tps
	} else {
		flag = dist(ghost.y % 1, 0.5) < ghost.speed / tps
	}

	// Help the ghosts to escape the spawn box as the current movement implementation gets them stuck there
	if (flag && Math.abs(ghost.x - GHOST_POSITIONS[2][0]) < 0.5 && Math.abs(ghost.y - GHOST_POSITIONS[2][1]) < 0.5) {
		ghost.direction = UP
	}

	if (flag && nextCell(ghost.x, ghost.y, ghost.direction) === WALL) {	// change direction if next cell is a wall
		ghost.x = Math.floor(ghost.x) + 0.5
		ghost.y = Math.floor(ghost.y) + 0.5
		ghost.direction = fetchRandomDirection(ghost.x, ghost.y, ghost.direction)
	}
	
	if (true) { //movement
		const movement_x = ghost.speed * dt
		const movement_y = ghost.speed * dt
		let x = ghost.x
		let y = ghost.y
		let cellX = Math.floor(x)
		let cellY = Math.floor(y)
		const nc = nextCell(cellX, cellY, ghost.direction)

		switch (ghost.direction) {
			case UP:
				x = Math.floor(x) + 0.5

				if (nc !== WALL) {
					y -= movement_y
				} else {
					y = Math.max(cellY + 0.5, y - movement_y)
				}

				break
			case LEFT :
				y = Math.floor(y) + 0.5

				if (nc !== WALL) {
					x -= movement_x
				} else {
					x = Math.max(cellX + 0.5, x - movement_x)
				}

				break
			case DOWN:
				x = Math.floor(x) + 0.5

				if (nc !== WALL) {
					y += movement_y
				} else {
					y = Math.min(cellY + 0.5, y + movement_y)
				}
			

				break
			case RIGHT:
				y = Math.floor(y) + 0.5

				if (nc !== WALL) {
					x += movement_x
				} else {
					x = Math.min(cellX + 0.5, x + movement_x)
				}

				break
		}	

		ghost.x = mod2(x, map.size)
		ghost.y = mod2(y, map.size)

		if (x !== ghost.x || y !== ghost.y) {
			ghost.ox = ghost.x
			ghost.oy = ghost.y
		}

	}
}










// INPUT DETECTION

function setNextDirection(direction) {
	if (gameStage === IN_GAME) {
		pacman.nextDirection = direction
	}
}

function setupInputDetection() {
	// Key detection
	window.addEventListener("keydown", (event) => {
		switch (event.key.toLowerCase()) {
			case 'w':
			case 'arrowup':
				setNextDirection(UP)
				break
			case 'a':
			case 'arrowleft':
				setNextDirection(LEFT)
				break
			case 's':
			case 'arrowdown':
				setNextDirection(DOWN)
				break
			case 'd':
			case 'arrowright':
				setNextDirection(RIGHT)
				break
		}
    })

	let startX, startY

	// Mouse click detection
	window.addEventListener('mousedown', (event) => {
		startX = event.clientX
		startY = event.clientY
	})

	window.addEventListener('mouseup', (event) => {
		detectDirection(startX, startY, event.clientX, event.clientY);
	})

	// Touch (swipe) gesture detection
	window.addEventListener('touchstart', (event) => {
		startX = event.touches[0].clientX
		startY = event.touches[0].clientY
	})

	window.addEventListener('touchend', (event) => {
		detectDirection(startX, startY, event.changedTouches[0].clientX, event.changedTouches[0].clientY);
	})

	function detectDirection(x1, y1, x2, y2) {
		const dx = x2 - x1
		const dy = y2 - y1

		setNextDirection(directionByDeltaMovement(dx, dy))
	}
}








// RENDERING

const spritesheet = new Image()
let canvas
let ctx
let width
let height

function setupCanvas() {
	canvas = document.querySelector('canvas')
	ctx = canvas.getContext('2d');
	
	const resizeObserver = new ResizeObserver(function (entries) {
		const entry = entries[entries.length - 1]
		setTimeout(function() {
			const dpr = Math.floor(window.devicePixelRatio * 100) / 100
			canvas.width = width = entry.contentRect.width * dpr
			canvas.height = height = entry.contentRect.height * dpr
			ctx.imageSmoothingEnabled = false
		})
	})

	resizeObserver.observe(canvas)
	
	spritesheet.src = 'spritesheet.png'
	spritesheet.onload = () => requestAnimationFrame(render)
}


function render() {
	const time = getTime()
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, width, height)

	if (gameStage === MENU) {
		drawMenuScreen(time)
	} else {
		drawGame(time)
	}

	if (messageTime > time) {
		ctx.font = `${width / 24}px Bungee Spice`
		ctx.fillStyle = 'white'
		ctx.textAlign = 'center'
		ctx.fillText(message, width / 2, height / 3)
	}
	
	requestAnimationFrame(render)
}

function drawMenuScreen(time) {
	const border = 0.0125
	const size = 20

	ctx.save()
	ctx.translate(border * width, border * height)
	ctx.scale(width / size * (1 - 2 * border), height / size * (1 - 2 * border))

	let speed = 4
	let offset = 5
	let x = (time * speed - offset) % (size + 2 * offset)
	let y = 0.75 * size
	
	ctx.fillStyle = `#ffbf00`
	for (let i = 0; i < size; ++i) {
		let p = 0

		if (x > i) {
			p = (i < x - offset) ? (1 - Math.exp(5 - x + i)) : (0)
		} else {
			p = 1
		}

		let size = 0.2 * p
		ctx.fillRect(i + (0.5 - size / 2), y + (0.5 - size / 2), size, size)
	}

	drawPacman2(x, y + 0.5, speed, RIGHT, time)

	ctx.restore()

	ctx.fillStyle = '#1e1eca'
	ctx.fillRect(0, 0, width * border, height)
	ctx.fillRect(width * (1 - border), 0, width * border, height)
	ctx.fillRect(0, 0, width, height * border)
	ctx.fillRect(0, height * (1 - border), width, height * border)
}

function drawGame(time) {
	const i = (time - gameTime) * tps
		
	ctx.save()
	ctx.scale(width / map.size, height / map.size)

	drawMap(time)
	drawPacman(i, time)

	for (let j = 0; j < ghosts.length; ++j) {
		drawGhost(ghosts[j], time, i)
	}

	const fontSize = 0.55
	ctx.font = `${fontSize}px monospace`
	ctx.fillStyle = 'white'

	ctx.textAlign = 'left'
	ctx.fillText('Lives: ' + pacman.lives, 2 / 3, 1 / 2)

	ctx.textAlign = 'right'
	ctx.fillText('Score: ' + pacman.coins, map.size - 2 / 3, 1 / 2)

	let actualGameTime = gameTime - startTime
	if (actualGameTime < 4) {
		ctx.font = `3px Bungee Spice`
		ctx.textAlign = 'center'
		let text = actualGameTime < 3 ? Math.ceil(3 - actualGameTime) : 'GO!'
		ctx.fillText(text, map.size / 2, map.size / 2)
	}

	ctx.restore()
}

function drawSprite(x, y, type) {
	const image_x = type % 10
	const image_y = (type - image_x) / 10
	ctx.drawImage(spritesheet, image_x * 10, image_y * 10, 6, 6, x, y, 1, 1)
}

function drawMap(time) {
	for (let i = 0; i < map.size; ++i) {
		for (let j = 0; j < map.size; ++j) {
			switch(map[i][j]) {
				case WALL:
					
					const type = MAP_SPRITE_INDICES[j][i]
					if (type > 0) {
						drawSprite(i, j, type)
					}
					break

				case COIN:

					ctx.fillStyle = `#ffbf00`
					ctx.fillRect(i + 0.4, j + 0.4, 0.2, 0.2)
					break

				case POWER_UP:

					const s = Math.sin(time * 25 + i * j) / 10
					const c = Math.cos(time * 25 + i  *j) / 10
					ctx.fillStyle = `#fff`
					ctx.fillRect(i + 0.2 + c, j + 0.2 - s, 0.6, 0.6)
					break
			}
		}
	}
}

function drawPacman(i, time) {
	const x = lerp(i, pacman.ox, pacman.x)
	const y = lerp(i, pacman.oy, pacman.y)

	drawPacman2(x, y, pacman.speed, pacman.direction, time)
	
	const rotation = (1 - pacman.nextDirection) * Math.PI / 2
	
	ctx.fillStyle = '#0f0'
	ctx.save()
	ctx.beginPath()
	ctx.translate(x, y)
	ctx.rotate(rotation)
    ctx.moveTo(-1.1, 0)
    ctx.lineTo(-0.7, -0.4)
    ctx.lineTo(-0.7, 0.4)
    ctx.fill()
	ctx.restore()
}

function drawPacman2(x, y, speed, direction, time, r = 0.45) {
	const openness = 0.7 * (1 - Math.abs((time * 3 * speed) % 2 - 1))
	const shift = (direction + 1) * Math.PI / 2

	ctx.fillStyle = '#ff0'
	ctx.save()
	ctx.beginPath()
	ctx.moveTo(x, y)
    ctx.arc(x, y, r, openness - shift, 2 * Math.PI - openness - shift, false)
	ctx.fill()
	ctx.restore()
}


function drawGhost(ghost, time, i) {
	const x = lerp(i, ghost.ox, ghost.x)
	const y = lerp(i, ghost.oy, ghost.y)
	const r = 0.45
	
	ctx.fillStyle = ghost.color

	ctx.beginPath()
	ctx.moveTo(x, y)
    ctx.arc(x, y, r, 1 * Math.PI, 2 * Math.PI, false)
	ctx.fillRect(x-r, y - 0.02, 2 * r, r * 1.5)
	ctx.fill()

	if ((time + ghost.index * ghost.index) * 1.2 % 2 > 1) {
		ctx.fillRect(x-r + 0 / 3 - 0 / 3 * (1 - 2 * r) + 0 / 6, y - 0.04 + r * 1.5, 2 * r / 6, r * 0.25)
		ctx.fillRect(x-r + 2 / 3 - 2 / 3 * (1 - 2 * r) + 1 / 6, y - 0.04 + r * 1.5, 2 * r / 6, r * 0.25)
		ctx.fillRect(x-r + 1 / 3 - 0.5 / 3 * (1 - 2 * r) + 0 / 6, y - 0.04 + r * 1.5, 2 * r / 6 * 2, r * 0.25)
	
	} else {
		ctx.fillRect(x-r + -0.25 / 3 - -0.25 / 3 * (1 - 2 * r) + 1 / 6, y - 0.04 + r * 1.5, 2 * r / 6, r * 0.25)
		ctx.fillRect(x-r + (2.25) / 3 - (2.25) / 3 * (1 - 2 * r) + 0 / 6, y - 0.04 + r * 1.5, 2 * r / 6, r * 0.25)
		ctx.fillRect(x-r + 1.125 / 3 - 1.125 / 3 * (1 - 2 * r) + 0 / 6, y - 0.04 + r * 1.5, 2 * r / 6 * 1.5, r * 0.25)
	}

	const xO = 0.1 * dirX(ghost.direction)
	const yO = 0.1 * dirY(ghost.direction)

	ctx.fillStyle = 'white'
	ctx.beginPath()
	ctx.moveTo(x - 0.2 + xO, y + 0.1 + yO)
    ctx.arc(   x - 0.2 + xO, y + 0.1 + yO, 0.15, 0, 2 * Math.PI, false)
	ctx.moveTo(x + 0.2 + xO, y + 0.1 + yO)
    ctx.arc(   x + 0.2 + xO, y + 0.1 + yO, 0.15, 0, 2 * Math.PI, false)
	ctx.fill()
	
	ctx.fillStyle = 'blue'
	ctx.beginPath()
	ctx.moveTo(x - 0.2 + 2 * xO, y + 0.1 + 1.5 * yO)
    ctx.arc(   x - 0.2 + 2 * xO, y + 0.1 + 1.5 * yO, 0.08, 0, 2 * Math.PI, false)
	ctx.moveTo(x + 0.2 + 2 * xO, y + 0.1 + 1.5 * yO)
    ctx.arc(   x + 0.2 + 2 * xO, y + 0.1 + 1.5 * yO, 0.08, 0, 2 * Math.PI, false)
	ctx.fill()
}