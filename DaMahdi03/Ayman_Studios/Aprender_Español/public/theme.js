var scrollInterval = setInterval(function() {
    if ($(document).scrollTop() > ($(".lesson").outerHeight(true) + $(".intro").outerHeight(true))) {
        $(".practice").css("visibility", "visible");
        alert("If you feel ready enough, continue onto the Practice Section.");
        clearInterval(scrollInterval);
        lesssonSectionCompleted = true;
    }
}, 500);