board = document.getElementById("board").getContext("2d")

let speedDown = 0 
let gravity = 0.4

let bg = new BG(0, 0, 1920, 1295, 'sprites/background.jpg')
let bg2 = new BG(1920, 0, 1920, 1295, 'sprites/background.jpg')
let ground = new BG(0, 1200, 1920, 150, 'sprites/ground.jpg')
let ground2 = new BG(1920, 1200, 1920, 150, 'sprites/ground.jpg')

let bananaCat = new BANANACAT(50, 1115, 150, 150, 'sprites/bananaCat1.png')
let puddle = new OBSTACLES(1920, 1200, 190, 110, 'sprites/puddle.png')
let dog = new OBSTACLES(1920, 1145, 190, 110, 'sprites/dog.png')

let score = new SCORE()
counter = 0

let music = new Audio('sons/gameMusic.mp3')
let jumpSound = new Audio('sons/jump.mp3')

function draw() 
{
    bg.drawing()
    bg2.drawing()
    ground.drawing()
    ground2.drawing()
    bananaCat.drawing()
    puddle.drawing()
    dog.drawing()
}

function update()
{
    bg.move(8, 1920, 0)
    bg2.move(8, 0, 1920)
    ground.move(8, 1920, 0)
    ground2.move(8, 0, 1920)
    
    speedDown += gravity
    bananaCat.py = Math.min(bananaCat.py + speedDown, 1115)
    bananaCat.animation(10, 8, 'bananaCatGreen')

    puddle.moveRespaw(8, 2000, 1000, 900)
    dog.moveRespaw(20, 2000, 3000, 3000)

    counter++
    score.show(counter, 940, 350)

    music.loop = true
    music.play()

    jump()
    collision()
    pause()
}


function jump()
{
    document.addEventListener("keypress", function(e)
        {
        if((e.code == "Space" || e.code == "ArrowUP") && bananaCat.py == 1115)
            {
                speedDown = -17
                jumpSound.play()
            } 
        })
}
        
function collision() 
{
    if (bananaCat.detectCollision(puddle) || bananaCat.detectCollision(dog)) {
        window.location.href='gameOverGreen.html'
    }
}

function pause()
{
    document.addEventListener("keypress", function(e)
    {
        if (e.code == "Enter") 
        {
            window.location.href = 'pause.html'
        }
    })
}

function msg(text) {
    points.innerHTML = `<h1> Sua pontuação foi: ${text} </h1>`
}

function main()
{
    board.clearRect(0, 0, 1280, 600)
    draw()
    update()
    requestAnimationFrame(main)
}

main()