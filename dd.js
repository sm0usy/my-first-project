define(["jquery"], function(n) {
    "use strict";
    n(document).ready(function() {
        n("body").bind("click", function() {
            n("ul.menu-dropdown").hide(),
            n("a.menu").parent("li").removeClass("open").children("ul.menu-dropdown").hide()
        }),
        n("a.menu").click(function() {
            return n(this).parent("li").hasClass("open") ? (n(this).parent("li").removeClass("open"),
            n(this).siblings("ul.menu-dropdown").hide()) : (n(this).parent("li").addClass("open"),
            n(this).siblings("ul.menu-dropdown").show()),
            n(this).parent("li").siblings("li").children("ul.menu-dropdown").hide(),
            n(this).parent("li").siblings("li").removeClass("open"),
            !1
        })
    })
});
