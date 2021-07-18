define(["jquery", "bootstrap", "modules/shared/language_switcher", "modules/shared/partner_banner", "shared/newtwitter_dropdown", "modules/shared/notifications", "shared/leftnav_menu"], function(e, n, t, a, o, i) {
    "use strict";
    e(function() {
        if (e(".language-link").click(function(n) {
            n.preventDefault(),
            n.stopPropagation(),
            t.changeSiteLanguage(e(this).attr("lang"))
        }),
        e("#logout_button").click(function() {
            e("#logout_form").submit()
        }),
        e("#query").bind("focus", function() {
            e(this).parent().addClass("focused")
        }).bind("blur", function() {
            e(this).parent().removeClass("focused")
        }),
        e(".glass").bind("click", function() {
            e.trim(e("#query").val()) && e(this).closest("form").submit()
        }),
        e(".mobile-search a").bind("click", function() {
            e("#search_holder").toggleClass("open"),
            e("#search_holder").hasClass("open") && e("#query").focus(),
            e("#container").bind("click", function(n) {
                e("#search_holder").removeClass("open"),
                e(this).unbind(n)
            })
        }),
        e("#flash_message").length) {
            var n = new i.InfoNotification;
            n.setMessage(e("#flash_message").val()),
            n.show()
        }
        var o = e("#close_partner_message");
        o.length && o.bind("click", function() {
            a.disablePartnerBanner()
        }),
        e("input[data-confirm]").click(function() {
            return confirm(e(this).attr("data-confirm"))
        }),
        e(document).on("click", "a[data-popup]", function() {
            return window.open(e(this).attr("href")),
            !1
        }),
        e("#btn-search").click(function() {
            return e("#btn-search, a.twitter-bird").hide(),
            e("#home-search-xs, #btn-search-close").fadeIn(200),
            !1
        }),
        e("#btn-search-close").click(function() {
            return e("#btn-search, a.twitter-bird").fadeIn(200),
            e("#home-search-xs, #btn-search-close").hide(),
            !1
        }),
        e("#btn-mobile-nav").click(function(n) {
            n.stopPropagation(),
            n.preventDefault(),
            e("#mobile-category-nav").fadeIn(200),
            e("body").addClass("mobile-nav-open")
        }),
        e("button", "#mobile-category-nav").click(function(n) {
            n.stopPropagation(),
            n.preventDefault(),
            e("#mobile-category-nav").fadeOut(200),
            e("body").removeClass("mobile-nav-open")
        })
    })
});
