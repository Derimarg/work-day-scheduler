// get current day
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

// refreshing the browser will host the input event
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var blockEvent = $(this).siblings(".description").val();
        var blockTime = $(this).parent().attr("id");

        // Save event in local storage
        localStorage.setItem(blockTime, blockEvent);
    })
   
    function tracker() {
        //get current hour
        var time = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            // condition for color of blocks
            if (blockHour < time) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockHour === time) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // get items from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    tracker();
});