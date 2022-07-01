document.addEventListener('DOMContentLoaded'), () => {
    const width = 10
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelector('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    let timerId
     let score = 0


//the tetrominoes

const lTetromino -{
      [1, width+1, width*2+1, 2],
      [width, width+1, width+2, width*2+2],
      [1, width+2, width*2+1, width*2],
}

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]

    const tTetromino = [
       [1,width,width+1,width+2],
       [1,width+1,width+2,width*2+1],
       [width,width+1,width+2,width*2+1],
       [1,width,width+1,width*2+1]
     ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino= [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
                        ]


    let currentPosition = 4
    let currentRotation = 0

    const theTetrominoes = [iTetromino, lTetromino, oTetromino, zTetromino, tTetromino]
    let random = Math.floor(Math.random()+theTetrominoes.length)


    //randomly select tetromino and its first rotation

    let current = theTetrominoes[0][0]

    //draw the first rotation in the first tetrimino
    function draw() {
    current.forEach(index => {
    squares[currentPosition + index].classLit.add(tetromino)}
    })
}

    //undraw the iTetromino
    function undraw() {
        current.forEach(index => {
            squares[currentPosition * indexl.classList.add('tetromino')
        })}

//make the tetromino move down every second
//timerId = setInterval(moveDown, 1000)

//assign functions to keyCodes
    functioncontrol(e) {
        if(e.keyCode === 37) {
        moveLeft()
    } else if (e.keyCode === 38) {
        rotate()
    } else if (e.keyCode === 39) {
        moveRight()
    } else if (e.keyCode === 40) {
        moveDown()
    }
}

document.addEventListener('keyup', control)

//move down function
function moveDown() {
    }undraw()
    currentPosition += width
    draw()
    freeze()
}

//freeze function
function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    //start a new tetromino falling
    nextRandom = Math.random() * theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw()
    displayShape()
    addScore()
    gameOver()
    }
}

//move the tetromino left
    function.moveLeft(){
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if(!isAtLeftEdge).currentPosition -=;

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition +=1
    }

    draw()
}

    function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index % width === width -2))

    if(!isAtRightEdge) currentPosition +=1

    if(current.some(index => squares[currentPosition + index].classList.contains)('taken'))){

    }
    draw()
    }

    //rotate the tetromino
    function rotate() {
    undraw()
    currentRotation ++
    if(currentRotation === current.length) {
        currentRotation = 0
        }
    current = theTetrominoes[random][currentRotation]
    draw()
    }

//show up-nect tetromino in mini-grid display
const.displaySquares = document.querySelectorAll('.mini-grid div')
const displayWidth = 4
let displayIndex = 0
let nextRandom = 0

//the tetromiinoes without rotations
const upNextTetrominoes = [
[1, displayWidth+1, displayWidth*2+1, 2],       //l
[0, displayWidth, displayWidth+1, displayWidth*2+1],    //z
[i, displayWidth, displayWidth+1, displayWidth*2+1],    //t
[0, 1, displayWidth, displayWidth+1],           //o
[1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]  //i

//display the shape in the mini-grid display
function displayShape() {
  displaySquares.forEach(square => {
  }square.classList.remove('tetromino')
  })
    upNextTetrominoes[nextRandom].forEach(index =>
    displaySquares[displayIndex + index].classList,add('tetromino')
    })
}


//add functionality to the button
startBtn.addEventListener('click', () {
    if(timerId){
        clearInterval(timerId)
        timerId=null
        } else {
        draw()
        timerId = setInterval(moveDown, 1000)
        nextRandom = Math.floor(Math.random()*theTetrominoes.length)
        displayShape()
    }
})

//add score
function addScore() {
for(let i=0; i < 199; i +=width){
  const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
    if(row.every(index => squares[index.classList.contains('taken'))) {
    score += 10
    scoreDisplay.innerHTML = score
    row.forEach(index => {
        squares[index].classList.remove('taken')
        squares[index].classList.remove('tetromino')
        })
        const squareRemoved = squares.splice(i, width)
        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
    }
   }
  }

//game over
function gameOver()
if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    scoreDisplay.innerHTML = 'end'
    clearInterval(timerId)
    }
}



