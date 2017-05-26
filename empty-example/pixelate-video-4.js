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

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(4, 32);
  
  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);    
    this.y = constrain(this.y, 0, height);    
  }
  
  this.show = function() {
    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[2], slider.value());
    ellipse(this.x, this.y, this.r, this.r);    
  }
  