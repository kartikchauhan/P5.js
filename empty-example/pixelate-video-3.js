var video,
    videoScale = 16,
    particles = [];
function setup()
{
    createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/videoScale, height/videoScale);
    for(var i=0; i<1000; i++)
    {
        particles[i] = new Particle(320, 240);        
    }
    background(0);
}

function draw()
{
    video.loadPixels();
    for(var i=0; i<1000; i++)
    {
        particles[i].update();
        particles[i].show();        
    }
    
}

function Particle(x, y)
{
    this.x = x;
    this.y = y;
    
    this.update = function() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);        
    }
    
    this.show = function() {
        noStroke();
        var px = floor(this.x/videoScale);
        var py = floor(this.y/videoScale);
        
        var col = video.get(px, py);
        fill(col);
        ellipse(this.x, this.y, 5, 5);
        
    }
    
    
}