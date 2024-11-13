class obj 
{
    frame = 1
    timer = 0

    constructor(px, py, width, height, image)
    {
        this.px = px
        this.py = py
        this.width = width
        this.height = height
        this.image = image
    }
    
    drawing()
    {
        let img = new Image()
        img.src = this.image
        board.drawImage(img, this.px, this.py, this.width, this.height)
    }

    animation(speed, limit, nameImage) 
    {
        this.timer++
        if (this.timer > speed) 
        {
            this.timer = 0
            this.frame++
        }
        
        if(this.frame > limit) 
        {
            this.frame = 1
        }

        this.image = 'sprites/' + nameImage + this.frame + '.png'
    }

    animationJPG(speed, limit, nameImage) 
    {
        this.timer++
        if (this.timer > speed) 
        {
            this.timer = 0
            this.frame++
        }
        
        if(this.frame > limit) 
        {
            this.frame = 1
        }

        this.image = 'sprites/' + nameImage + this.frame + '.jpg'
    }

}

class BG extends obj 
{
    move(speed, limit, pos) 
    {
        this.px -= speed
        if(this.px < -limit)
        {
            this.px = pos
        }
    }
}

class BANANACAT extends obj
{
    detectCollision(obj) 
    {
        if(this.px < obj.px + obj.width && this.px + this.width > obj.px && 
           this.py < obj.py + obj.height && this.py + this.height > obj.py) 
        {
            return true
        }
        else
        {
            return false
        }
    }
}

class OBSTACLES extends obj 
{
    moveRespaw(speed, limit, max, min)
    {
        this.px -= speed
        if (this.px < -limit) 
        {
            this.px = Math.random() * (max - min) + min
        }
    }
}

class SCORE
{
    show(text, x, y)
    {
        board.font = "60px Courier New"
        board.fillStyle = 'white'
        board.fillText(text, x, y)
    }
}