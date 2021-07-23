var currentDay = moment().format('dddd, MMM Do YYYY');

// Display current day
$("#currentDay").append(currentDay);

// When refresh will save the text
$(document).ready(function () {

    // When Button id cliked will save the text
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeBlock() {
        // get hours
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var block = parseInt($(this).attr("id").split("hour")[1]);

            if (block < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (block === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // Get info from local Storage
    $("#hr1 .description").val(localStorage.getItem("hr1"));
    $("#hr2 .description").val(localStorage.getItem("hr2"));
    $("#hr3 .description").val(localStorage.getItem("hr3"));
    $("#hr4 .description").val(localStorage.getItem("hr4"));
    $("#hr5 .description").val(localStorage.getItem("hr5"));
    $("#hr6 .description").val(localStorage.getItem("hr6"));
    $("#hr7 .description").val(localStorage.getItem("hr7"));
    $("#hr8 .description").val(localStorage.getItem("hr8"));
    $("#hr9 .description").val(localStorage.getItem("hr9"));

    timeBlock();
});