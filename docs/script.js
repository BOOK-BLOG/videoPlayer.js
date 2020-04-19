$("body").ready(function () {
    videoPlayer.init()
})

$("#videoPlayer-play").click(function () {
    videoPlayer.play('videoPlayer.js.mp4')
})

$("#get-started").click(function () {
    window.open('https://github.com/BOOK-BLOG/videoPlayer.js/blob/master/README.md')
})