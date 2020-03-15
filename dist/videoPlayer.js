
function videoPlayerInit() {
    $("body").append("<div id=\"videoPlayerVideoMask\" active=\"false\"><video src=\"\" controls=\"controls\" autoplay=\"autoplay\" id=\"videoPlayerVideo\" show=\"false\"></video></div>");
    $("#videoPlayerVideoMask").click(function () {
        videoPlayerExit();
    });
    $("*").scrollTop(0);
    console.log("Video Player Initialized.");
}

function videoPlayerPlay(videoSource) {
    $("#videoPlayerVideo").bind("click", function () {
        event.stopPropagation();
    })
    $("#videoPlayerVideo").attr("src", videoSource);
    $("#videoPlayerVideo").attr("show", "true");
    $("#videoPlayerVideoMask").attr("active", "true");
}

function videoPlayerExit() {
    $("#videoPlayerVideo").attr("show", "false");
    $("#videoPlayerVideoMask").attr("active", "false");
    setTimeout(function () {
        $("#videoPlayerVideo").attr("src", "");
    }, 500)
}