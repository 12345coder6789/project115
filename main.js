function preload(){

}
  
function setup(){

canvas = createCanvas(400,450);
canvas.center();
document.getElementById("my").innerHTML=canvas;
    video= createCapture(VIDEO);
    video.size(400,450)
    video.hide();

poseNet = ml5.poseNet(video,ModelLoaded);
poseNet.on('pose',gotPoses);

    }

    
        function gotPoses(results)
        {
            if(results.length > 0)
            {
                
                console.log(results);
                noseX = results[0].pose.nose.x;
                noseY = results[0].pose.nose.y+100;
                console.log("nose x = " + results[0].pose.nose.x);
                console.log("nose y = " + results[0].pose.nose.y+100);
           
            }
        }
    

    function modelLoaded(){
        console.log('PoseNetIs Initialised');
    }

    function draw() {
        image(video,0,0,300,300);
    
    }