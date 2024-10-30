board = document.getElementById("board").getContext("2d")

let bananaCat = new BANANACAT(50, 385, 230, 216, 'sprites/bananaCat1.png')



function draw() 
{
    bananaCat.drawing()
}

function update()
{
    bananaCat.animation(7, 8, 'bananaCat')
    bananaCat.fall(0, 0.4)
}

function main()
{
    board.clearRect(0, 0, 1280, 600)
    draw()
    update()
    requestAnimationFrame(main)
}

main()