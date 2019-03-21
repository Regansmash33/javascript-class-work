/* Joseph Turner    11/25/17 */

window.addEventListener('load',initPage, false);
function initPage(){
    var now = new Date();
    var expDate = new Date();
    expDate.setMonth(expDate.getMonth()+6);

    var hitCounter = parseInt(cookieVal('pageHit'));
    hitCounter++;
    var lastVisit = cookieVal('pageVisit');
    if (lastVisit === 0){
        lastVisit = '';
    }


    document.cookie = 'pageHit=' + hitCounter + ';expires=' + expDate.toUTCString();
    document.cookie = 'pageVisit=' + now + ';expires=' + expDate.toUTCString();

    var outMsg = 'Visit Number: ' + hitCounter;
    if (lastVisit !== ''){
        var lastDate = writeDateString(lastVisit);
        var outVisit = 'Last Visit: ' + lastDate;
    }

    document.getElementById('hitCount').innerHTML = outMsg;
    document.getElementById('visitDate').innerHTML= outVisit;

}

function writeDateString() {
    var d = new Date();
    var month = [];
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'Mar';
    month[3] = 'Apr';
    month[4] = 'May';
    month[5] = 'Jun';
    month[6] = 'Jul';
    month[7] = 'Aug';
    month[8] = 'Sep';
    month[9] = 'Oct';
    month[10] = 'Nov';
    month[11] = 'Dec';

    var monthName = month[d.getMonth()];

    var theDate = d.getDate();

    var theYear = d.getFullYear();

    return monthName + " " + theDate + ", " + theYear;
}

function cookieVal(cookieName) {
    var thisCookie = document.cookie.split("; ");

    for (var i=0; i<thisCookie.length; i++) {
        if (cookieName === thisCookie[i].split("=")[0]) {
            return thisCookie[i].split("=")[1];
        }
    }
    return 0;
}