/* Joseph Turner */

//note: couldn't display images using the xml file, the broken code is in a block comment underneath the program
window.onload = choosePix;
var selectImg = 0;
var imgTitle = " ";
var pixArray = [];
var imgValue;

pixArray[0]= "pix/chess1.jpg";
pixArray[1]= "pix/chess2.jpg";
pixArray[2]= "pix/chess3.jpg";
pixArray[3]= "pix/chess4.jpg";
pixArray[4]= "pix/chess5.jpg";

function choosePix(){
    selectImg = Math.floor(Math.random() * pixArray.length);
    imgValue=pixArray[selectImg];
    document.getElementById("chessPicture").src = pixArray[selectImg];
    imgTitle = getTitle(imgValue);
    document.getElementById('chessPicture').title = imgTitle;

    rotate();
}

function rotate(){
    selectImg++;
    imgValue=pixArray[selectImg];
    imgTitle = getTitle(imgValue);
    if (selectImg === pixArray.length){
        selectImg = 0;
    }
    document.getElementById('chessPicture').src = pixArray[selectImg];
    document.getElementById('chessPicture').title = imgTitle;

    setTimeout(rotate, 5*1000);
}
function getTitle(imgValue){
     if(imgValue === "pix/chess1.jpg"){
        return "Chess pieces";
    }
    else if(imgValue === "pix/chess2.jpg"){
        return "Boy studying chess positions";
    }
    else if(imgValue === "pix/chess3.jpg") {
        return "Variant Chess Set";
    }
    else if(imgValue === "pix/chess4.jpg"){
        return "Lawn Chess";
    }
    else if(imgValue === "pix/chess5.jpg"){
        return "Circular Chess";
    }
    else{
    return "Chess pieces";
     }
}

//broken code is here

/*
//var rxh = false;

function initPic(){
/!*
    if (window.XMLHttpRequest){
        rxh = new XMLHttpRequest();
    }
    else{
        if (window.ActiveXObject){
            try {
                rxh = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e){
            }
        }
    }

    if (rxh){
        getImg();
    }
    else{
        alert('Cannot create an XMLHttpRequest at this time');
    }
}

function getImg(){
    rxh.open('POST', "chessPix.xml", true);
    rxh.addEventListener("readystatechange", showImgs, false);
    rxh.send(null);

    setTimeout(getImg, 5 * 1000);
}

function showImgs(){
    var pixPlace = document.getElementById('chessPix').src;
    var pixText = document.getElementById('chessPix').alt;
    var imgSrc;
    var imgAlt;
    var tempText = document.createElement('div');

    if(rxh.readyState === 4){
        if(rxh.status === 200){
            var allPixs = rxh.response.getElementsByTagName('pic');
            var randomPix = Math.floor(Math.random() * allPixs.length);

            tempText.innerHTML = getPixVal(allPixs[randomPix]);
            var thisImg = tempText.getElementsByTagName("pic")[1];
            document.getElementById('test').innerHTML=thisImg.innerHTML;
        }
        else{
            alert("A wild problem has occured" +  rxh.status);
        }
    }

    function getPixVal(inVal){
        return alert((inVal.textContent) ? inVal.textContent : inVal.text);
    }
}
*!/
*/
