var bubble = [];

function setup()
{
    createCanvas(500, 500);
    for(var i=0; i<10; i++)
    {
        bubble[i] = new Bubble();
    }
}

function draw()
{
    background(0);
    for(var i=0; i<10; i++)
    {
        bubble[i].display();
        bubble[i].move();
    }
    
}

function mousePressed()
{
    for(var i=0; i<10; i++)
    {
        bubble[i].clicked();
    }
}

function Bubble()   // constructor function
{
    var majorAxis = 50, minorAxis = 50; // majorAxis and minorAxis of the ellipse, in this case it'll be circle with diameter 50

    this.x = random(0, width);
    this.y = random(0, height);
    this.col = color(255);
    
    this.clicked = function() {
        var distance = dist(mouseX, mouseY, this.x, this.y);
        if(distance < majorAxis)
            {
                this.col = color(255, 100, 0);  // change color to orange when a circle is clicked
            }
    }
    
    this.display = function() {
        fill(this.col);
        ellipse(this.x, this.y, majorAxis, majorAxis);
    }
    
    this.move = function() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    
}