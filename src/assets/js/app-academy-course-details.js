document.addEventListener("DOMContentLoaded", function (e) {
    new Plyr("#plyr-video-player");
    (document.getElementsByClassName("plyr")[0].style.borderRadius = "6px"),
        (document.getElementsByClassName("plyr__poster")[0].style.display =
            "none");
    let t = document.getElementsByTagName("html")[0],
        n = document.querySelector(".stick-top");
    function s() {
        t.classList.contains("layout-navbar-fixed")
            ? n.classList.add("course-content-fixed")
            : n.classList.remove("course-content-fixed");
    }
    s(),
        (window.onscroll = function () {
            s();
        });
});
