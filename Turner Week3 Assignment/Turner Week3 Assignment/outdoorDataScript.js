/*/     Joseph Turner   11/20/17     /*/

window.onload = initForm;
function initForm(){
    document.forms[0].onsubmit = validateForm;
}

function validateForm(){
    var isValid = true;
    var allTags = document.forms[0].getElementsByTagName("*");

    for (var x=0; x<allTags.length; x++){
        if(!tagValid(allTags[x])){
            isValid = false;
        }
    }
    return isValid;

    function tagValid(thisTag){
        var outClass = "";
        var allClasses = thisTag.className.split(" ");

        for (var j=0; j<allClasses.length; j++){
            outClass += validBasedOnClass(allClasses[j])+ "";
        }

        thisTag.className = outClass;

        if (outClass.indexOf("invalid") > -1){
            invalidLabel(thisTag.parentNode);
            thisTag.focus();
            if (thisTag.nodeName === "LABEL") {
                thisTag.select();
            }
            return false;
        }
        return true;


        function validBasedOnClass(thisClass){
            var classBack = " ";

            switch(thisClass){
                case "":
                case "invalid":
                    break;
                case "reqd":
                    if (isValid && thisTag.value === ""){
                        classBack = "invalid";
                    }
                    classBack += thisClass;
                    break;
                case "specCode":
                    if(isValid && !validCode(thisTag.value)){
                    }
                    classBack += thisClass;
                    break;
                case "email":
                    if (isValid && !validEmail(thisTag.value)){
                        classBack = "invalid";
                    }
                    classBack += thisClass;
                    break;
                case "select":
                    if (isValid && !validSelect(thisTag.value)){
                        classBack = "invalid";
                    }
                    classBack += thisClass;
                    break;
                case "groupedElements":
                    if (isValid && !validGroup(thisTag.value)){
                        classBack = "invalid";
                    }
                    classBack += thisClass;
                    break;
            }
            return classBack;

            function validEmail(email){
                var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var OK = emailFormat.test(email);
                if (!OK)
                    window.alert("Invalid Email Address Entered");
                return emailFormat.test(email);

            }
            function validCode(specCode){
                var prizeFormat = /([A-Z]{3})([0-9]{3})([a-z]{3})/;
                var good = prizeFormat.test(specCode);
                if (!good)
                    window.alert('Invalid Prize Code \n Prize Code should be three capital letters, then three numbers, followed by three lower-case letters \n  Example Code: ABC123XYZ');
                return prizeFormat.test(specCode);
            }
            function validGroup(groupedElements){
                var groupSet = document.forms[0][groupedElements];

                if (groupSet){
                    for (var e=0; e<groupSet.length; e++){
                        if(groupSet[e].checked){
                            return true;
                        }
                    }
                }
                alert('Error In form please check at least one checkbox and select one radio button');
                return false;
            }
            function validSelect(select){
                if (select.value !== " "){
                    return true;
                }
            }
        }
    }
    function invalidLabel(parentTag) {
        if (parentTag.nodeName === "LABEL") {
            parentTag.className += " invalid";
        }
    }
}

//clears the form
function resetForm(){
    document.getElementById("outdoorForm").reset();
}