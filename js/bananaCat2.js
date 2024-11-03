board = document.getElementById("board").getContext("2d")

let speedDown = 0 
let gravity = 0.4

let bg = new BG(0, 0, 1280, 600, 'sprites/background1.jpg')
let bg2 = new BG(1280, 0, 1280, 600, 'sprites/background2.jpg')

let bananaCat = new BANANACAT(50, 450, 150, 150, 'sprites/bananaCat1.png')
let puddle = new OBSTACLES(1280, 505, 190, 110, 'sprites/puddle.png')

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
    bg.move(7, 1280, 0)
    bg2.move(7, 0, 1280)
    
    speedDown += gravity
    bananaCat.py = Math.min(bananaCat.py + speedDown, 450)
    bananaCat.animation(10, 8, 'bananaCat')

    puddle.moveRespaw(10, 1380, 1000, 900)

    counter++
    score.show(counter, 50, 50)

    jump()
    collision()
}


function jump()
{
    document.addEventListener("keypress", function(e)
        {
        if((e.code == "Space" || e.code == "ArrowUP") && bananaCat.py == 450)
            {
                speedDown = -15
            } 
        })
}
        
function collision() 
{
    if (bananaCat.detectCollision(puddle)) {
        window.location.href='gameOver.html'
        console.log(puddle.width, puddle.height)
    }
}

function main()
{
    board.clearRect(0, 0, 1280, 600)
    draw()
    update()
    requestAnimationFrame(main)
}

main()