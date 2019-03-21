/* Joseph Turner*/
//formats table to be zebra-striped
$(function formatTables(){
   //set color of row based on row-index for the info-table
    $(".table-info tr:even").css("background-color", "#e3e3e3");
    $(".table-info tr:odd").css("background-color", "#bbbfc7");
    //highlights the first row of the table
    $(".table-info tr:first").css("background-color", "#bbbfc7");
    //sets the colors of the row based on the table-index for the in-table
    $(".table-in tr:odd").css("background-color", "#bbbfc7");
    $(".table-in tr:even").css("background-color", "#e3e3e3");
});
//displays welcomeDialog on load
$(function welcomeDialog() {
    $("#welcome").dialog({
        modal:true,
        resizable: false,
        buttons:[{
            text: 'OK',
            click: function(){
                $(this).dialog('close')
            }
        }]
    })
});
//allows user to auto-complete their field of industry
$(function searchField(){
    var industryList = "Total nonFarm*Mining, logging, and construction*Manufacturing*Trade, transportation, and utilities*Information*Financial activities*Professional and business services*Education and health services*Leisure and hospitality*Other services*Government";
    $("#searchField").autocomplete({
        source: industryList.split('*')
    })
});
//allows users to select the dates they prefer to visit
$(function getInAndOutDate(){
    var dates = $("#from,#to").datepicker({
        defaultDate: "+1w",
        numberOfMonths: 2,
        onSelect: function(selectedDate) {
            var option = (this.id === 'from') ? 'minDate' : 'maxDate';
            date = $.datepicker.parseDate($.datepicker._defaults.dateFormat,selectedDate);
            dates.not(this).datepicker("option", option, date);
        }
    })
});
//toggles between showing and hiding the prefered days to visit section
$(function toggleDate(){
    $("#toggle").click(function(){
        $('#visitDiv').toggle();
    })
});
//submits the form
$(function submitForm(){
    $("#submitBtn").click(function(){
        $("#visit_form").submit();
    })
});
//resets the form
$(function resetForm(){
    $('#resetBtn').click(function(){
        $('#visit_form').trigger("reset");
    })
});
//allows the sideshow to browse through images
$(function slideShow() {
   $("#slides").slidesjs({
       navigation:{
           active: false,
           effect: "fade"
       },
       pagination: {
           effect: "fade"
       },
       effect: {
           fade: {
               speed: 800
           }
       }
   });
});
//allows the audio player to work
$(function playAudio(){
    $(".audio").mb_miniPlayer({
        width: 360,
        inLine: false,
        showRew: true,
        showTime: true
    });
});
//allows for the sortable tabs to work
$(function sortingTab(){
    var tabs= $("#tabs").tabs();
    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function(){
            tabs.tabs("refresh");
        }
    });
});
//insert after footer
$(function AftInsert(){
    $("<p>Peirce College</p>").insertAfter(".copyright");
});