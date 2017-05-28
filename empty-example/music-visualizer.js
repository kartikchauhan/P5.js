var song,
    actionButton,
    sliderVolume,
    amp;    // amplitude of the song

//function preload()
//{
//}

function setup()
{
    createCanvas(500, 500);
    song = loadSound("media/Breaking_Bad_Main_Title_Theme.mp3", loaded);    
    background(0);
    actionButton = createButton("play");
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    amp = new p5.Amplitude();
    actionButton.mousePressed(toggleAction);
}

function loaded()
{
    console.log('song has loaded');
}

function draw()
{
    song.currentTime();
    song.setVolume(sliderVolume.value());
    ampValue = amp.getLevel();        
    diameter = map(ampValue, 0, 0.5, 0, 1000);  // diameter of the ellipse at the center of the canvas
    console.log(+diameter);
    fill(255);
    ellipse(width/2, height/2, diameter, diameter);
}

function toggleAction()
{
    if(!song.isPlaying())
    {
        song.play();
        actionButton.html("pause");
    }
    else
    {
        song.pause();
        actionButton.html("play");
    }
}
