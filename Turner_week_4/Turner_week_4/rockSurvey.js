//all cookies expire in one hour
function saveData() {
    var today = new Date();
    var expiry = new Date();
    expiry.setHours(expiry.getHours() + 1);

    //get input data from the form
    var userAge = document.querySelector('input[name="age"]:checked').value;
    var userGender = document.querySelector('input[name="gender"]:checked').value;
    var userName = document.getElementById('firstName').value;
    var timeName = document.getElementById('tmZone').value;

    //bake the cookies
    document.cookie = 'userName=' + userName + ';expires=' + expiry.toUTCString();
    document.cookie = 'userGender=' + userGender + ';expires=' + expiry.toUTCString();
    document.cookie = 'userAge=' + userAge + ';expires=' + expiry.toUTCString();
    document.cookie = 'timeName=' + timeName + ';expires=' + expiry.toUTCString();

    // return the userAge cookie to set the url for the new page
    var ageValue = parseInt(cookieVal('userAge'));
    var set_url = '';

    if (ageValue === 1) {
        set_url = 'age1.html';
    }
    else if (ageValue === 2) {
        set_url = 'age2.html';
    }
    else if (ageValue === 3) {
        set_url = 'age3.html';
    }
    else if (ageValue === 4) {
        set_url = 'age4.html';
    }
    else if (ageValue === 5) {
        set_url = 'age5.html';
    }
    else if (ageValue === 6) {
        set_url = 'age6.html';
    }
    //
    var go_url = set_url;
    //display alert
    alert('Data has been Saved');
    //open new window after clicking ok on the alert
    window.open(go_url, 'windowName');
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


