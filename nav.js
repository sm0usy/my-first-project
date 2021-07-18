define(["jquery"], function(a) {
    "use strict";
    a(function() {
        function t(t) {
            var e, s = 0;
            t && (e = a('a[data-category="' + t + '"]', i),
            e.length && (a("a.active, ul.leftnav-group.active", i).removeClass("active"),
            e.hasClass("has-articles") ? (e.trigger("click"),
            e.parentsUntil(".leftnav-top", ".leftnav-group").each(function(t) {
                s -= (l ? -1 : 1) * parseInt(a(this).css("width")),
                a(this).addClass("active"),
                0 === t && a(".panel-heading", i).text(a(this).prev("a.has-subcategories").text())
            })) : (e.next("ul").add(e.parentsUntil(".leftnav-top", ".leftnav-group")).each(function() {
                s -= (l ? -1 : 1) * parseInt(a(this).css("width")),
                a(this).addClass("active")
            }),
            a(".panel-heading", i).text(e.text())),
            n.css(l ? "right" : "left", s + "px").show()))
        }
        function e() {
            var t = a("header", i).outerHeight(!0);
            if (a("a.has-subcategories + .leftnav-group.active", i).length) {
                var e = a("a.has-subcategories + .leftnav-group.active", i).last().outerHeight(!0);
                a(i).height(t + e)
            } else
                a(i).height(t + a(".leftnav-top", i).outerHeight(!0));
            i.css("visibility", "visible")
        }
        function s() {
            var s = i.data("article")
              , n = i.data("belongsTo")
              , l = a('a[data-article="' + s + '"]', i);
            l.length ? (t(n),
            l.addClass("active")) : (t(n),
            l = a('a[data-category="' + n + '"]', i),
            l.find("i").addClass("fa-spinner fa-spin").removeClass("fa-chevron-down"),
            a.get("/categories/" + n + "/articles", function(t) {
                l.parent().append(t),
                l.next("ul").toggleClass("active", !0),
                a('a[data-article="' + s + '"]', i).addClass("active"),
                l.find("i").addClass("fa-chevron-down").removeClass("fa-spinner fa-spin"),
                e()
            }))
        }
        var i = a("#left-nav-menu")
          , n = a(".nav-wrapper", i)
          , l = !!a('html[dir="rtl"]').length;
        a("a.has-subcategories", i).on("click", function(t) {
            t.preventDefault();
            var s = parseInt(n.css("left"))
              , r = parseInt(a(this).next("ul").css("width"));
            a(".panel-heading", i).text(a(this).text()),
            l ? n.animate({
                right: s + r + "px"
            }, 200, "swing") : n.animate({
                left: s - r + "px"
            }, 200, "swing"),
            a(this).next("ul").addClass("active"),
            a(this).next("ul").find("a.has-articles").first().trigger("click"),
            e()
        }),
        a("a.has-articles", i).on("click", function(t) {
            t.preventDefault();
            var s = a(this)
              , n = s.hasClass("active")
              , l = s.parent();
            a("a.active, a.active + ul.leftnav-group.active", i).removeClass("active"),
            s.toggleClass("active", !n),
            s.next("ul").length ? (s.next("ul").toggleClass("active", !n),
            e()) : (s.find("i").addClass("fa-spinner fa-spin").removeClass("fa-chevron-down"),
            a.get("/categories/" + a(this).data("category") + "/articles", function(a) {
                s.find("i").addClass("fa-chevron-down").removeClass("fa-spinner fa-spin"),
                l.append(a),
                s.next("ul").toggleClass("active", !n),
                e()
            }))
        }),
        a("a.leftnav-back", i).on("click", function(t) {
            t.preventDefault();
            var s = parseInt(l ? n.css("right") : n.css("left"))
              , r = a(this).closest("ul")
              , c = r.parents(".leftnav-group").first()
              , o = parseInt(r.css("width"));
            a("a.active, ul.leftnav-group.active", i).removeClass("active"),
            a(".panel-heading", "#left-nav-menu ").text(c.length ? c.prev("a.has-subcategories").text() : a("ul.leftnav-top", i).prev("a").text()),
            l ? n.animate({
                right: s - o + "px"
            }, 200, "swing") : n.animate({
                left: s + o + "px"
            }, 200, "swing"),
            c.addClass("active"),
            e()
        }),
        a("a.breadcrumb", "nav.breadcrumbs").on("click", function(s) {
            s.preventDefault(),
            t(a(this).data("category")),
            e()
        }),
        a(window).resize(function() {
            var t = 0;
            a("ul.active", i).each(function(e, s) {
                t = a(s).width(),
                l ? n.css("right", t + "px") : n.css("left", -t + "px")
            }),
            e()
        }),
        i.data("article") ? s() : t(i.data("category")),
        e()
    })
});
