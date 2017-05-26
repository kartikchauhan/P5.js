var video,
    videoScale = 16,
    particles = [];
function setup()
{
    createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/videoScale, height/videoScale);
    for(var i=0; i<100; i++)
    {
        particles[i] = new Particle(random(0, width), random(0, height));        
    }
    background(0);
}

function draw()
{
    video.loadPixels();   
    for(var i=0; i<100; i++)
    {
        particles[i].update();
        particles[i].show();        
    }
    
}

function Particle(x, y)
{
    this.x = x;
    this.y = y;
    this.historyPos = [];   // array for storing movements of bubble
    this.historyCol = [];   // array for storing color of bubble at every position
    
    this.update = function() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);  
        
        this.x = constrain(this.x, 0, width);   // putting constraint on x position so that bubble doesn't go out of canvas
        this.y = constrain(this.y, 0, height);  // putting constraint on y position so that bubble doesn't go out of canvas
        
        var pos = createVector(this.x, this.y);    
        this.historyPos.push(pos);   // push new vector to the historyPos array
        
        var px = floor(this.x/videoScale);  // mapping of canvas x position with respective x position of video element
        var py = floor(this.y/videoScale);  // mapping of canvas y position with respective y position of video element
        
        var col = video.get(px, py);    // get pixel value from video element
        this.historyCol.push(col);      // push color values of pixel
        
        if(this.historyPos.length > 100)     // if total moves/elements > 100, remove the very first move/element.
        {
            this.historyPos.splice(0, 1);   
            this.historyCol.splice(0, 1);  
        }
        
        console.log(this.historyPos.length);
    }
    
    this.show = function() {
        for(var i=0; i<this.historyPos.length; i++)
        {
            var pos = this.historyPos[i];
            var col = this.historyCol[i];
            
            noStroke();
            fill(col);
            rect(this.x, this.y, 20, 20);
        }
    }
    
}