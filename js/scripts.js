/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // playing all versions of CA2dGA in one video tag.
    var CAVideos = document.getElementById('CA2dGA'); // grabbing the video tag id to play all the related videos in one video tag.

    // array for different versions of the simulation for Covid-19 spread.
    var versions = [
        "assets/videos/CA2dOneVariantDeterministic.mp4",
        "assets/videos/CA2dOneVariantNonDeterministic.mp4",
        "assets/videos/CA2dTwoVariantsWithoutGA.mp4",
        "assets/videos/CA2dTwoVariantsWithGA.mp4"
    ];
    var activeVideo = 0;

    // adding event listener so it could play all videos after another.
    CAVideos.addEventListener('ended', function(e) {
        activeVideo = (++activeVideo) % versions.length;
        CAVideos.src = versions[activeVideo];
        CAVideos.play();
    });
    
})(jQuery); // End of use strict
