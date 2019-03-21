/* Joseph Turner - 11/4/17 */
// create and populate array
var partList = ['Frame', 'Handlebar', 'Seat', 'Axles', 'Chain', 'Rims', 'Tires', 'Spokes'];
//displays list of parts on load

function displayList() {
    for (i=0;i<partList.length;i++){
        document.write(partList[i] + "<br/>");
    }
}
function addPart(){
    var newPart = prompt("Please enter a item to the list");
        if (newPart !== null){
        partList.push(newPart)
        }
}