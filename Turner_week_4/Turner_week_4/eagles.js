window.addEventListener('load',setPage, false);

function setPage(){
    //values used to hold the value contained in the cookie if exists
    var tZone = '';
    var gender = '';
    var name = '';
    //reads the value of the cookie
    var uGender = cookieVal('userGender');
    var uName =  cookieVal('userName');
    var uZone = cookieVal('timeName');

    //check if the userName cookie, is set
    if( uName !== '' ){
        name = uName;
    }
    else{
        alert('no username cookie saved')
    }

    //check if gender cookie is set, if set sends to formatPic function
    if (uGender !== ''){
        gender = uGender;
        var pic = formatPic(gender)

    }
    else{
        alert('No gender cookie saved')
    }

    //check if timeName cookie is set, if set sends to formatTimezone Function
    if (uZone !== ''){
        tZone = uZone;
        var timeZone = formatTimeZone(tZone);
    }
    else{
        alert("No Timezone cookie saved")
    }

    //display username
    document.getElementById('vName').innerHTML = name;
    //display timezone
    document.getElementById('tzText').innerHTML = timeZone;
    //display picture
    document.getElementById('gendPix').src = pic;
}

function formatPic(gender){
    if(gender === 'Male'){
        return 'bartGuitar250x270.png';
    }
    else if(gender === 'Female'){
        return 'lisaSax250x270.png';
    }
    else{
        return false;
    }

}

function formatTimeZone(tZone){
    if(tZone === 'ET'){
        return "Eastern Time Zone"
    }
    else if(tZone === 'CT'){
        return 'Central Time Zone'
    }
    else if(tZone === 'MT'){
        return 'Mountain Time Zone'
    }
    else if(tZone === 'PT'){
        return 'Pacific Time Zone'
    }
    else{
        return false;
    }

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