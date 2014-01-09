/**
 * Main JS file for Nonlinear behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        $(".content p a").attr("target", "_blank");

        $('img[alt="cover-pic"]').css("display", "none");
        var source = $('img[alt="cover-pic"]').attr("src");

        if (typeof source != 'undefined') {
			$("#site-head").css("background-image", "url(" + source + ")");
        }
    });

}(jQuery));