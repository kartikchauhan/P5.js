var bubble = [];
var numBubbles = 10;

function setup()
{
    createCanvas(500, 500);
    for(var i=0; i<numBubbles; i++)
    {
        bubble[i] = new Bubble();
    }
}

function draw()
{
    background(0);
    for(var i=0; i<numBubbles; i++)
    {
        bubble[i].display();
        bubble[i].move();
        for(var j=0; j<numBubbles; j++)
        {
            if(i != j)
            {
                if(bubble[i].collide(bubble[j]))
                {
                    bubble[i].changeColor();
                    bubble[j].changeColor();
                }
            }
        }
    }
    
}

function Bubble()
{
    this.x = random(0, width);
    this.y = random(0, height);
    this.radius = 25;
    this.col = color(255);
    
    this.display = function() {
        fill(this.col);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
    
    this.move = function() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    
    this.changeColor = function() {
        this.col = color(random(255), random(255), random(255));
    }
    
    this.collide = function(otherObj) {
        var dis = dist(this.x, this.y, otherObj.x, otherObj.y);
        if(dis <= (this.radius + otherObj.radius))
            return true;
        else
            return false;
    }
    
}