var snake, 
    food,
    scl = 10,
    foodX,
    foodY,
    totalScore;    

function setup()
{
    createCanvas(480, 480);
    snake = new Snake(240, 160);
    food = new Food();
    food.setPosition();
    frameRate(10); 
    totalScore = createDiv('Score: ' + 0);
    totalScore.parent('container');
}

function draw()
{
    background(0);    
    if(snake.eats(foodX, foodY))
    {
        food.clearFood();
        food.setPosition();
    }
    if(snake.dead())
    {
        background(255, 0, 0, 255);
        fill(255);
        textSize(50);
        text('Game Over', width/4, height/2);
        return false;
    }
    snake.update();
    snake.show(); 
    food.show();
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        snake.dir(0, -1);
    }
    else if(keyCode === DOWN_ARROW)
    {
        snake.dir(0, 1);
    }
    else if(keyCode === LEFT_ARROW)
    {
        snake.dir(-1, 0);
    }
    else if(keyCode === RIGHT_ARROW)
    {
        snake.dir(1, 0);
    }
}

function Snake(x, y)
{
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.tail = [];
    this.total = 0;
    
    this.dir = function(xSpd, ySpd) {
        this.xSpeed = xSpd;
        this.ySpeed = ySpd;
    }
    
    this.update = function() {
        if(this.total === this.tail.length)
        {
            for(var i=0; i<this.tail.length-1; i++)
            {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);
        this.x += (this.xSpeed * scl);
        this.y += (this.ySpeed * scl);
        
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }
    
    this.show = function() {
        fill(255);
        for(var i=0; i<this.tail.length; i++)
        {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
//        arc(this.x+scl, this.y+scl/2, scl, scl, HALF_PI, PI+HALF_PI);
    }
    
    this.eats = function(foodPosX, foodPosY) {
        if(dist(this.x, this.y, foodPosX, foodPosY) < 1)
        {
            this.total++;
            totalScore.html('Score: ' + this.total);
            return true;
        }
        else
        {
            return false;
        }
    }
    
    this.dead = function() {
        var distance;
        if(this.xSpeed == -1)
        {
            distance = dist(this.x, this.y, 0, this.y);
        }
        else if(this.xSpeed == 1)
        {
            distance = dist(this.x, this.y, width-scl, this.y);
        }
        else if(this.ySpeed == -1)
        {
            distance = dist(this.x, this.y, this.x, 0);
        }
        else if(this.ySpeed == 1)
        {
            distance = dist(this.x, this.y, this.x, height-scl);
        }
        if(distance < 10)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function Food()
{
    this.cols = floor(width/scl),
    this.rows = floor(height/scl);
    
    this.setPosition = function() {
        this.foodGrid = createVector(floor(random(this.cols)), floor(random(this.rows)));
        this.foodGrid.mult(scl);
        foodX = this.foodGrid.x;
        foodY = this.foodGrid.y;
    }
    
    this.show = function() {
        fill(255, 0, 0, 255);
        rect(this.foodGrid.x, this.foodGrid.y, scl, scl);
    }    
    
    this.clearFood = function() {
        fill(0);
        rect(this.foodGrid.x, this.foodGrid.y, scl, scl);
        
    }
}