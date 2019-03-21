/* Joseph Turner - 11/12/17 */


//create stoplight array and populate it with pictures
var stopArray = ["light-red.jpg", "light-green.jpg", "light-yellow.jpg"];
var theLight = 0;
var color;

//create walking image array and populate it
var i = 0;
var walking = new Array(8);
var timer;
var walkFlag;

walking[0] = "walk/walk1anim.png";
walking[1] = "walk/walk2anim.png";
walking[2] = "walk/walk3anim.png";
walking[3] = "walk/walk4anim.png";
walking[4] = "walk/walk5anim.png";
walking[5] = "walk/walk6anim.png";
walking[6] = "walk/walk7anim.png";
walking[7] = "walk/walk8anim.png";

//function to allow image to change on rollover and back on roll out
//commented out due to not allowing walker animation to work
//function MouseOver(pic){
 //   pic.src = "speedLimitSmGrnRoad.png";
 //}
//function MouseOut(pic){
 //   pic.src = "speedLimitSmRedRoad.png";
//}

//function that walking image displayed
function walk() {
    document.getElementById("walker").src = walking[i];
    i = (i + 1) % walking.length;
}

//sets the timer which controls the animation
function setTimer(){
    if(timer){
        //stop walking
        clearInterval(timer);
        timer=null;
        walkFlag = false;
    }
    else{
        timer = setInterval(walk, 60);
        walkFlag = true;
    }
}

//starts the stoplight animation loop when the button is clicked
function LightGo(){
    theLight++;
    if (theLight === stopArray.length){
        theLight = 0;
    }
    document.getElementById("stoplight").src = stopArray[theLight];
    color = setTimeout(LightGo, 3 * 2000);
}

//stops the stoplight animation loop
function LightStop() {
    clearTimeout(color);
}

//stops the walker animation if running; brings up an alert message if the walker animation is not running
function stopWalk(){
    if (walkFlag !== true) {
        alert("Walker is already stopped!");
    } else {
        clearInterval(timer)
    }
}