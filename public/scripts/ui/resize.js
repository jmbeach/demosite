/// <reference path="../../../bower_components/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js" />

$(function() {
    setTimeout(function () {

        checkSize(ResponsiveBootstrapToolkit);
        // Execute code each time window size changes
        $(window).resize(
            ResponsiveBootstrapToolkit.changed(function () {
                checkSize(ResponsiveBootstrapToolkit);
            })
        )
    }, 120);
});

function checkSize(viewport) {
    if (viewport.is('xs')) {
        $("body").css("font-size", "100%");
    }
    if (viewport.is('sm')) {
        $("body").css("font-size", "100%");
    }
    if (viewport.is('md')) {
        $("body").css("font-size", "100%");
    }
    if (viewport.is('lg')) {
        $("body").css("font-size", "125%");
    }
}