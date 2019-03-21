/* Joseph Turner */
window.addEventListener('load',initPage);
window.addEventListener('load',initDate);
var div;
var ol;

function initPage(){
    document.getElementById('kiteForm').addEventListener('submit',nodeChange,false);
    ol=document.getElementById('myList');
    div=document.getElementById('displayKites');
}

function makeNode(){
    var item = document.getElementById('kiteModel').value;
    var model = checkInput(item);
    var newLI = document.createElement('LI');
    var newText = document.createTextNode(model);
    newLI.appendChild(newText);
    ol.appendChild(newLI);
    div.appendChild(ol);
}

function deleteNode(){
    var selectedItem = document.getElementById('itemCount').selectedIndex;
    var allThings = ol.getElementsByTagName('LI');
    var oldThing = allThings.item(selectedItem);

    ol.removeChild(oldThing);
}

function nodeChange(evt){
    var actionType = -1;
    var olKiteCount = ol.getElementsByTagName('LI').length;
    var radioButtonSet = document.getElementById('kiteForm').nodeAction;

    for(var x=0; x<radioButtonSet.length; x++){
        if (radioButtonSet[x].checked){
            actionType = x;
        }
    }
    switch(actionType){
        case 0:
            makeNode();
            break;
        case 1:
            if (olKiteCount>0){
                deleteNode();
                break;
            }
        default:
            alert('No valid action selected');
    }

    document.getElementById('itemCount').options.length = 0;

    for (x=0; x<ol.getElementsByTagName('LI').length; x++){
        document.getElementById('itemCount').options[x] = new Option(x+1);
    }

    evt.preventDefault()
}

function checkInput(item){
    if(item === 'Alpha+'){
        return "Alpha+"
    }
    else if(item === 'Dream On'){
        return 'Dream On'
    }
    else if(item === 'Puma'){
        return 'Puma'
    }
    else if(item === 'Kratos'){
        return "Kratos"
    }
    else if(item === 'Magellan'){
        return 'Magellan'
    }
    else if(item === 'Mighty Bug 1.0'){
        return 'Mighty Bug 1.0'
    }
    else if(item === 'Hypnotist'){
        return 'Hypnotist'
    }
    else if(item === 'Speedfoil 2X'){
        return "Speedfoil 2X"
    }
    else if(item === 'Symphony 1.8'){
        return "Symphony 1.8"
    }
    else if(item === 'Yukon'){
        return "Yukon"
    }
    else if(item === ' '){
        alert ('No text was entered');
        return false;
    }
    else{
        alert ('Please enter a valid kite model');
        return false;
    }
}

function initDate(){

    var inDate = new Date();
    inDate.setDate(inDate.getDate()+90);
    var outVoice;
    outVoice = 'Your invoice will be due on ' + inDate;

    document.getElementById('dateDue').innerHTML = outVoice;
}
