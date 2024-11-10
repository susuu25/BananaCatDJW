board = document.getElementById("board").getContext("2d")

const points = document.querySelector('.points')
let speedDown = 0 
let gravity = 0.4

let bg = new BG(0, 0, 1920, 1295, 'sprites/background.jpg')
let bg2 = new BG(1920, 0, 1920, 1295, 'sprites/background.jpg')

let bananaCat = new BANANACAT(250, 1145, 150, 150, 'sprites/bananaCat1.png')
let puddle = new OBSTACLES(1920, 1145, 190, 110, 'sprites/puddle.png')

let score = new SCORE()
counter = 0

function draw() 
{
    bg.drawing()
    bg2.drawing()
    bananaCat.drawing()
    puddle.drawing()
}

function update()
{
    bg.move(7, 1920, 0)
    bg2.move(7, 0, 1920)
    
    speedDown += gravity
    bananaCat.py = Math.min(bananaCat.py + speedDown, 1145)
    bananaCat.animation(10, 8, 'bananaCat')

    puddle.moveRespaw(10, 1380, 1000, 900)

    counter++
    score.show(counter, 250, 950)

    jump()
    collision()
    pause()
}


function jump()
{
    document.addEventListener("keypress", function(e)
        {
        if((e.code == "Space" || e.code == "ArrowUP") && bananaCat.py == 1145)
            {
                speedDown = -15
            } 
        })
}
        
function collision() 
{
    if (bananaCat.detectCollision(puddle)) {
        window.location.href='gameOver.html'
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