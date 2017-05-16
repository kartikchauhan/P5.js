var video;  // global video DOM element
var widthCanvas = 800;
var heightCanvas = 600;
var snapshotXOffset = 0;
var snapshotYOffset = 0;
var widthSnapshot = 80;
var heightSnapshot = 60;

function setup()
{
    createCanvas(widthCanvas, heightCanvas);
    background(200);
    video = createCapture(VIDEO, 300, 300);
}

function draw()
{
    image(video.get(), snapshotXOffset, snapshotYOffset, widthSnapshot, heightSnapshot);
//    for(var i=0; i<100; i++)
//    {
        snapshotXOffset += widthSnapshot;
        if(snapshotXOffset >= widthCanvas)
        {
            snapshotXOffset = 0;
            if(snapshotYOffset < heightCanvas)
            {
                snapshotYOffset += heightSnapshot;
            }
            else
            {
                snapshotYOffset = 0;
            }
        }
//    }
    console.log(frameCount);
    
}