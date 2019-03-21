/* Joseph Turner*/
window.addEventListener('load',initWin,false);
var rhx = false;
var winnersArray = [];

function initWin(){
    document.getElementById('searchField').addEventListener("keyup",searchSuggestion,false);

    if(window.XMLHttpRequest) {
        rhx= new XMLHttpRequest();
    }
    else{
        if(window.ActiveXObject){
            try{
                rhx = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e){

            }
        }
    }
    if (rhx) {
        rhx.addEventListener("readystatechange",setWinnerArray,false);
        rhx.open("GET", "AmChess.xml", true);
        rhx.send(null);
    }
    else{
        alert("XMLHttpRequest creation has failed");
    }
}

function setWinnerArray(){
    if(rhx.readyState === 4){
        if (rhx.status === 200){
            if (rhx.responseXML){
                var allUSAWinners = rhx.responseXML.getElementsByTagName("item");
                for (var i=0; i<allUSAWinners.length; i++){
                    winnersArray[i]=allUSAWinners[i].getElementsByTagName('label')[0].firstChild;
                }

            }
        }
        else{
            alert("Request can not proceeded" + rhx.status);
        }
    }
}

function searchSuggestion(){
    var str= document.getElementById('searchField').value;
    document.getElementById('searchField').className = "";
    if(str !== "") {
        document.getElementById('popup').innerHTML = "";

        for (var x=0; x<winnersArray.length; x++){
            var thisWinner = winnersArray[x].nodeValue;

            if(thisWinner.toLowerCase().indexOf(str.toLowerCase()) === 0){
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = thisWinner;
                tempDiv.addEventListener("click",makeSelection,false);
                tempDiv.className = "suggestions";
                document.getElementById('popup').appendChild(tempDiv);
            }
        }
        var foundCount = document.getElementById('popup').childNodes.length;
        if (foundCount === 0){
            document.getElementById('searchField').className = 'error';
        }
        if (foundCount === 1){
            document.getElementById('searchField').value = document.getElementById("popup").firstChild.innerHTML;
            document.getElementById('popup').innerHTML = " ";
        }
    }
}

function makeSelection(evt){
    if (evt){
        var thisDiv = evt.target;
    }
    else{
        var thisDiv = window.srcElement;
    }

    document.getElementById('searchField').value = thisDiv.innerHTML;
    document.getElementById('popup').innerHTML = "";
}