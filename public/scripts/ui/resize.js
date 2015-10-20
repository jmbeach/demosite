/// <reference path="../../../bower_components/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.js" />

$(function () {
    setTimeout(function () {
        checkSize(ResponsiveBootstrapToolkit);
        var container = $('.view-animate-container').first();
        // Execute code each time window size changes
        $(window).resize(
            function () {
                checkSize(ResponsiveBootstrapToolkit);
            }
        );
    }, 120);
});
function checkSize(viewport) {
    if (viewport.is('xs')) {
        $("body").css("font-size", "100%");
        repositionArrow(-18);
        blurbMargin(true);
    }
    if (viewport.is('sm')) {
        $("body").css("font-size", "150%");
        repositionArrow(68);
        blurbMargin(false);
    }
    if (viewport.is('md')) {
        $("body").css("font-size", "180%");
        repositionArrow(-35);
        blurbMargin(false);
    }
    if (viewport.is('lg')) {
        $("body").css("font-size", "200%");
        repositionArrow(-35);
        blurbMargin(false);
    }
}
function repositionArrow(left) {
    var $arrow = $("#arrow");
    if ($arrow.length) {
        $arrow.css("left", left);
    }
}

function blurbMargin(isRemove) {
    var $smBlurb = $("#smallBlurb");
    var $lgBlurb = $("#bigBlurb");
    if ($smBlurb.length && $lgBlurb.length) {
        if (isRemove) {
            $smBlurb.attr("style", "margin-top:0;");
            $lgBlurb.attr("style", "margin-top:0;");
        }
        else {
            $smBlurb.attr("style", "");
            $lgBlurb.attr("style", "");
        }
    }
}

