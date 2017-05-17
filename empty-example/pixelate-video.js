var video;
var videoScale = 10;

function setup()
{
    createCanvas(800, 600);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(80, 60);
}

function draw()
{
    video.loadPixels();
    loadPixels();

    for(var y=0; y<video.height; y++)
    {
        for(var x=0; x<video.width; x++)
        {
            var index = ((y * video.width) + x) * 4;  // index keeps track of current pixel. 4 is the offset here as it the pixel array holds 4 values of a single pixel.
            var r = video.pixels[index+0];  // getting red value of current pixel
            var g = video.pixels[index+1];  // getting green value of current pixel
            var b = video.pixels[index+2];  // getting blue value of current pixel
            var a = 255;    // alpha value is usually taken as 255 to keep our opaque            
            var grayvideoScale = r+g+b/3;  // computing the average of r, g, b value. This will produce a grayvideoScale image
            
            fill(grayvideoScale);
            tint(255, 0, 255);
            ellipse(x*videoScale, y*videoScale, videoScale, videoScale);
        }
    }
}