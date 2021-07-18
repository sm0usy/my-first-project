define(["jquery", "lib/twitter-text", "lib/jquery.cookie", "lib/jquery.fileupload", "lib/jquery.iframe-transport", "lib/jquery.fileupload-validate", "modules/forms/servicecloud", "lib/big", "modules/forms/common-constants", "modules/forms/common-regex", "shared/common_behavior", "aem"], function(e, r, t, i, a, n, o, l, s, d) {
    "use strict";
    function u(r, t) {
        return e.grep(r, function(r) {
            return -1 === e.inArray(r, t)
        })
    }
    function c(e) {
        ot = e
    }
    function f() {
        var r = e("body").find("input.selenium:hidden")
          , t = {};
        return r.each(function() {
            t[e(this).attr("id")] = e(this).val()
        }),
        t
    }
    function v(r, t) {
        var i = [];
        return e("input:" + r + "[name='" + t + "']:checked").map(function(e, r) {
            i.push(r.value)
        }),
        i
    }
    function p(e, r, t) {
        var i = [];
        return e.find("input:" + r + ":checked").map(t || function(e, r) {
            i.push(r.value)
        }
        ),
        i
    }
    function h(e, r) {
        var t = [];
        return p(e, r, function(e, r) {
            t.push(r.id)
        }),
        t
    }
    function m(r) {
        var t = [];
        return e("." + r + ":checked").map(function(e, r) {
            t.push(r.value)
        }),
        t
    }
    function _(r) {
        return e("#" + r).find("option:selected")
    }
    function b(e, r, t) {
        var i = "";
        i = e.data("serialized-value") ? e.data("serialized-value") : "radio" === e.prop("type") && e.hasClass("naked-radio") ? e.parent().not("error-template").text() : "radio" === e.prop("type") ? e.siblings("span").not(".error-template").text() : "select-one" === e.prop("type") ? e.find("option:selected").text() : "checkbox" === e.prop("type") && e.is(":checked") ? e.siblings("span").not(".error-template").text() : "checkbox" !== e.prop("type") || e.is(":checked") ? e.val() : "",
        "" === i ? i = "n/a" : e.closest("div").hasClass("input-prepend") && (i = e.closest("div").find("span.add-on").text() + i);
        var a = e.closest("div.controls, div.serialized-input").siblings("label:visible")
          , n = a.text();
        return a.data("serialized-label") && (n = a.data("serialized-label")),
        r || !n ? i : t ? n + ":\r\n" + i : n + ": " + i
    }
    function g(e, r) {
        r = "undefined" != typeof r ? r : window.location.href,
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)")
          , i = t.exec(r);
        return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
    }
    function w() {
        for (var e, r, t = {}, i = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), a = 0; a < i.length; a++)
            e = i[a].split("="),
            r = e[0].toLowerCase(),
            t[r] = decodeURIComponent(e[1]);
        return t
    }
    function C() {
        var e = g("reported_username") || g("reported_username", document.referrer)
          , r = g("reported_tweet_id") || g("reported_tweet_id", document.referrer);
        return e && r ? "Tweet" : e ? "Profile" : ""
    }
    function x(r, t) {
        $r && $r();
        var i;
        switch (r) {
        case 400:
            i = e("#required_error");
            break;
        case 401:
            i = e("#user_name_error");
            break;
        case 405:
            i = e("#required_error"),
            e(".captcha-validate").each(function() {
                Y(e(this), "captcha-validate-error")
            });
            break;
        case 406:
            i = e("#rfc_822_error");
            break;
        case 410:
            i = e("#redirect_error"),
            e("#submit_button").attr("disabled", !0),
            t && t.getResponseHeader("Location") && e("#redirect_error_link").attr("href", t.getResponseHeader("Location"));
            break;
        case 429:
            i = e("#rate_limit_error");
            break;
        default:
            i = e("#submit_error")
        }
        i.fadeIn(),
        e("html, body").animate({
            scrollTop: e(".form-horizontal").offset().top
        }),
        e("#submit_not_loading").length ? (e("#submit_loading").hide(),
        e("#submit_not_loading").show()) : e("#submit_loading").fadeOut("fast")
    }
    function y(r) {
        for (var t = 0; t < r.length; t++)
            e("input[name=" + r[t] + "]:radio").prop("checked", !1)
    }
    function T() {
        var r = {
            authenticity_token: e("#authenticity_token").val(),
            user_id: e("#logged_in_user_id").val()
        };
        return e.ajax({
            type: "POST",
            url: "/forms/update_u13_restoration_status",
            headers: {
                "X-CSRF-Token": e('meta[name="csrf-token"]').attr("content")
            },
            data: r
        })
    }
    function k(r, t) {
        var i = u(r, t)
          , a = t.join(", ")
          , n = i.join(", ")
          , o = e(n).not(a)
          , l = e(a);
        E(o),
        K(l),
        K(l)
    }
    function E(e) {
        e.hide()
    }
    function z(r, t) {
        var i = r.closest(".controls");
        if ("checkbox" === r.attr("type") || "radio" === r.attr("type")) {
            i = r.closest("ul").parent(),
            i.removeClass("has-error");
            var a = e("." + r.attr("name") + "_error");
            a.fadeOut("fast", t)
        } else
            r.closest("div.form-group").removeClass("has-error"),
            i.find(".error-template").each(function() {
                var r = e(this);
                r.closest(".controls")[0] === i[0] && r.fadeOut("fast", t)
            })
    }
    function R(r) {
        q(e("body")),
        j(),
        e(window).bind("pageshow load", function() {
            j(),
            "function" == typeof r && r()
        }),
        W("/api/v1/tickets"),
        e(document).on("change", nt.join(","), function(r) {
            Or(e(r.target))
        }),
        e(".custom-form :input:visible:first").focus(),
        e("#submit_button").prop("disabled", !1),
        e(".form-horizontal").submit(function(r) {
            r.preventDefault(),
            e("#submit_error").fadeOut("fast"),
            Mr() ? (e("#submit_button").prop("disabled", !0),
            e("#required_error").fadeOut("fast"),
            e("#submit_not_loading").length ? (e("#submit_loading").show(),
            e("#submit_not_loading").hide()) : e("#submit_loading").fadeIn(),
            Q()) : (e("html, body").animate({
                scrollTop: e(".form-horizontal").offset().top
            }),
            e("#required_error").fadeIn())
        }),
        e(document).ajaxError(function(r, t, i) {
            403 != t.status && 404 != t.status && ("/api/v1/tickets" == i.url && e("#submit_button").prop("disabled", !1),
            x(t.status, t))
        })
    }
    function N() {
        return g("subtopic")
    }
    function A(r) {
        return e(r).is(":checked")
    }
    function I() {
        return e(".tweet-url-validate:visible, .tweet-url:visible").filter(function() {
            return "" !== e(this).val()
        }).length
    }
    function L() {
        var r = [];
        return e(".reported-usernames").each(function() {
            "" !== e(this).val() && r.push(e(this).val())
        }),
        e.unique(r).length
    }
    function S() {
        var r = e("#tweet_url_1").val()
          , t = r.match(d.TWEET_URL_PATTERN);
        return t && t[3] ? t[3] : ""
    }
    function F(r) {
        e(r).prop("disabled", !0)
    }
    function P(r) {
        e(r).prop("disabled", !1)
    }
    function j() {
        U("input"),
        U("textarea"),
        U("select")
    }
    function U(r) {
        e(r).not(".no-reset").each(function() {
            var r = e(this);
            switch (r[0].type) {
            case "text":
                r.val("");
                break;
            case "textarea":
                r.val("");
                break;
            case "checkbox":
                r.removeAttr("checked");
                break;
            case "radio":
                r.removeAttr("checked");
                break;
            case "select-one":
                r.val(e("option:first", this).val())
            }
        })
    }
    function q(r) {
        var t, i = e("#error_depot");
        r.find(".email-validate").each(function() {
            var r;
            0 === e(this).next(".email-validate-error").size() && (r = e("#error_depot .email-validate-error:first").clone(),
            e(this).after(r)),
            0 === e(this).next(".rfc-email-validate-error").size() && (r = e("#error_depot .rfc-822-validate-error:first").clone(),
            e(this).after(r))
        }),
        r.find(".required-validate").each(function() {
            if (0 === e(this).siblings(".required-validate-error, .required-block-validate-error").size()) {
                var r;
                r = "textarea" === e(this).prop("type") || e(this).hasClass("input-xxlarge") ? e("#error_depot .required-block-validate-error:first").clone() : e("#error_depot .required-validate-error:first").clone(),
                e(this).parent(".input-group").size() > 0 ? e(this).parent(".input-group").after(r) : e(this).after(r)
            }
        }),
        r.find(".disclaimer-validate").each(function() {
            if (0 === e(this).siblings(".disclaimer-validate-error").size()) {
                var r = e("#error_depot .disclaimer-validate-error:first").clone()
                  , t = e(this).prop("id") + "_error";
                r.prop("id", t),
                r.addClass(e(this).prop("name") + "_error"),
                e(this).closest("li").after(r)
            }
        }),
        r.find(".radio-selection-validate").each(function() {
            if (0 === e(this).closest("ul").siblings(".radio-selection-validate-error").size()) {
                var r = e("#error_depot .radio-selection-validate-error:first").clone();
                r.addClass(e(this).prop("name") + "_error"),
                e(this).closest("ul").after(r)
            }
        }),
        r.find(".exact-match-validate").each(function() {
            if (0 === e(this).siblings(".exact-match-validate-error").size()) {
                var r = e("#error_depot .exact-match-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".file-upload-validate").each(function() {
            if (0 === e(this).siblings(".file-upload-validate-error").size()) {
                var r = e("#error_depot .file-upload-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".screen-name-validate").each(function() {
            if (0 === e(this).next(".screen-name-validate-error").size()) {
                var r = e("#error_depot .screen-name-validate-error:first").clone()
                  , t = e(this).parent(".input-group");
                t.size() > 0 ? t.after(r) : e(this).after(r)
            }
        }),
        t = i.find(".screen-name-remote-validate-error:first"),
        r.find(".screen-name-remote-validate").each(function() {
            if (0 === e(this).next(".screen-name-remote-validate-error").size()) {
                var r = e(this).parent(".input-group");
                r.size() > 0 ? r.after(t.clone()) : e(this).after(t.clone())
            }
        }),
        r.find(".not-own-screen-name-validate").each(function() {
            if (0 === e(this).next(".not-own-screen-name-validate-error").size()) {
                var r = e("#error_depot .not-own-screen-name-validate-error:first").clone();
                e(this).parent(".input-group").size() > 0 ? e(this).parent(".input-group").after(r) : e(this).after(r)
            }
        }),
        r.find(".validate-unique-screen-name").each(function() {
            if (0 === e(this).next(".validate-unique-screen-name-error").size()) {
                var r = e("#error_depot .validate-unique-screen-name-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".tweet-url-validate").each(function() {
            if (0 === e(this).next(".tweet-url-validate-error").size()) {
                var r = e("#error_depot .tweet-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".tweet-urls-belong-to-one-user").each(function() {
            if (0 === e(this).next(".tweet-urls-belong-to-one-user-error").size()) {
                var r = e("#error_depot .tweet-urls-belong-to-one-user-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".moment-url-validate").each(function() {
            if (0 === e(this).next(".moment-url-validate-error").size()) {
                var r = e("#error_depot .moment-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".tweet-url-validate-username").each(function() {
            if (0 === e(this).parent().find(".tweet-url-username-match-error").size()) {
                var r = e("#error_depot .tweet-url-username-match-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".tweet-or-moment-url-or-fleet-id-validate").each(function() {
            if (0 === e(this).parent().find(".tweet-or-moment-url-or-fleet-id-validate-error").size()) {
                var r = e("#error_depot .tweet-or-moment-url-or-fleet-id-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".generic-entity-validate").each(function() {
            if (0 === e(this).parent().find(".generic-entity-validate-error").size()) {
                var r = e("#error_depot .generic-entity-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".tweet-url-validate-duplicate").each(function() {
            if (0 === e(this).parent().find(".tweet-url-duplicate-error").size()) {
                var r = e("#error_depot .tweet-url-duplicate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".captcha-validate").each(function() {
            if (0 === e(this).next(".captcha-validate-error").size()) {
                var r = e("#error_depot .captcha-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".vine-url-validate").each(function() {
            if (0 === e(this).next(".vine-url-validate-error").size()) {
                var r = e("#error_depot .vine-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".channel-url-validate").each(function() {
            if (0 === e(this).next(".channel-url-validate-error").size()) {
                var r = e("#error_depot .channel-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".channel-banner-image-url-validate").each(function() {
            if (0 === e(this).next(".channel-banner-image-url-validate-error").size()) {
                var r = e("#error_depot .channel-banner-image-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".url-validate").each(function() {
            if (0 === e(this).next(".url-validate-error").size()) {
                var r = e("#error_depot .url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".fleet-id-validate").each(function() {
            if (0 === e(this).next(".fleet-id-validate-error").size()) {
                var r = e("#error_depot .fleet-id-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".vine-id-validate").each(function() {
            if (0 === e(this).next(".vine-id-required-validate-error").size()) {
                var r = e("#error_depot .vine-id-required-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".vine-id-validate").each(function() {
            if (0 === e(this).next(".vine-id-validate-error").size()) {
                var r = e("#error_depot .vine-id-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".other-text-validate").each(function() {
            if (0 === e(this).next(".other-text-validate-error").size()) {
                var r = e("#error_depot .other-text-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".length-validate").each(function() {
            if (0 === e(this).next(".length-validate-error").size()) {
                var r = e("#error_depot .length-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".twitter-property-url-validate").each(function() {
            if (0 === e(this).next(".twitter-property-url-validate-error").size()) {
                var r = e("#error_depot .twitter-property-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".twitter-property-url-validate").each(function() {
            if (0 === e(this).next(".twitter-property-url-validate-error").size()) {
                var r = e("#error_depot .twitter-property-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".multiline-url-validate").each(function() {
            if (0 === e(this).next(".multiline-url-validate-error").size()) {
                var r = e("#error_depot .multiline-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".no-tweet-url-validate").each(function() {
            if (0 === e(this).next(".no-tweet-url-validate-error").size()) {
                var r = e("#error_depot .no-tweet-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".no-url-validate").each(function() {
            if (0 === e(this).next(".no-url-validate-error").size()) {
                var r = e("#error_depot .no-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".periscope-id-validate").each(function() {
            if (0 === e(this).next(".periscope-id-validate-error").size()) {
                var r = e("#error_depot .periscope-id-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".periscope-url-validate, .periscope-url-optional-validate").each(function() {
            if (0 === e(this).next(".periscope-url-validate-error").size()) {
                var r = e("#error_depot .periscope-url-validate-error:first").clone();
                e(this).after(r)
            }
        }),
        r.find(".spam-form-url-validate").each(function() {
            if (0 === e(this).next(".spam-form-url-validate-error").size()) {
                var r = e("#error_depot .spam-form-url-validate-error:first").clone();
                e(this).after(r)
            }
        })
    }
    function O() {
        return "true" === e("#hide_labels").val()
    }
    function M() {
        var r = e("#subject").val();
        return 0 !== e(".mobile_subject").length && (r = e(".mobile_subject").filter(":visible").val()),
        e(".replace-subject, .append-to-subject").filter(":visible").each(function() {
            var t = e(this)
              , i = t.prop("type");
            if ("radio" !== i || t.is(":checked")) {
                var a = t.val();
                t.data("subject") && (a = Kr(t.data("subject"))),
                t.hasClass("append-to-subject") ? r += " - " + a : r = a
            }
        }),
        r ? r : "Default subject"
    }
    function D() {
        var r = "";
        e("#subject").hasClass("include-in-description") && (r += e("#subject").val() + "\r\n\r\n");
        var t = []
          , i = 1e3;
        return e('.serialize-me:visible, input[type="hidden"].serialize-me').each(function(r) {
            var a = e(this);
            if (a.is(":checkbox:checked") || !a.is(":checkbox")) {
                var n = a.attr("class").match(/field-order-(\d+)/);
                t.push(n ? [parseInt(n[1], 10), r, a] : [i++, r, a])
            }
        }),
        t.sort(function(e, r) {
            return e[0] < r[0] ? -1 : e[0] > r[0] ? 1 : e[1] < r[1] ? -1 : e[1] > r[1] ? 1 : 0
        }),
        e.each(t, function(t, i) {
            var a = e(i[2])
              , n = a.prop("type");
            if ("radio" !== n || a.is(":checked")) {
                if (a.hasClass("tweet-url")) {
                    var o = a.val().split("?")[0];
                    a.val(o)
                }
                var l = b(a, O(), a.hasClass("newline-between"));
                a.hasClass("newline-before") && (l = "\r\n" + l),
                a.hasClass("newline-after") && (l += "\r\n"),
                r += l + "\r\n"
            }
        }),
        r
    }
    function H(e) {
        Zr = e
    }
    function W(e) {
        tt = e
    }
    function X(e) {
        $r = e
    }
    function B(e) {
        Qr = e
    }
    function G(e) {
        et = e
    }
    function V(e) {
        rt = e
    }
    function J(e) {
        at = e
    }
    function K(e) {
        e.fadeIn()
    }
    function Y(r, t) {
        var i = r.closest("div.controls")
          , a = i.find(".error-template:visible");
        if ("checkbox" === r.attr("type") || "radio" === r.attr("type")) {
            i = r.closest("ul").parent(),
            i.addClass("has-error");
            var n = e("." + r.attr("name") + "_error");
            n && 0 !== n.length || (n = i.find(".error-template")),
            n.fadeIn()
        } else
            r.closest("div.form-group").removeClass("is-valid"),
            r.closest("div.form-group").addClass("has-error"),
            a.size() > 0 && !a.hasClass(t) ? a.fadeOut("fast", function() {
                i.find("." + t).fadeIn()
            }) : i.find("." + t).fadeIn()
    }
    function Z(e) {
        "checkbox" !== e.attr("type") && "radio" !== e.attr("type") && (e.closest("div.form-group").removeClass("has-error"),
        e.closest("div.form-group").addClass("is-valid"))
    }
    function $(r, t, i) {
        if (tr(t)) {
            z(t, function() {});
            var a = "/api/v1/screen_name_validations?screen_name=" + e.trim(r);
            e.getJSON(a, function(e) {
                e.valid ? Z(t) : Y(t, i)
            })
        }
    }
    function Q() {
        Zr && Zr();
        var r = w()
          , t = e("#app")
          , i = e("#phone_number").val()
          , a = e("#country_code").val();
        i && a && "+" != i[0] && "+" != a[0] && (i = "+" + a + i);
        var n = {
            authenticity_token: e("#authenticity_token").val(),
            regarding: e("#regarding").val(),
            hiddens: f(),
            serviceCloud: {
                Mobile_App__c: t ? t.find("option:selected").val() : "",
                Subject: M(),
                Screen_Name__c: Kr(e("#user_name").val()),
                Form_Email__c: Kr(e("#email").val()),
                SuppliedPhone: i,
                Description: D(),
                Referral_Source__c: r.source,
                Referral_Client__c: r.client ? "client_" + r.client : ""
            }
        };
        "undefined" != typeof et && e.extend(n, et(n)),
        o.fillServiceCloud(n, rt),
        e.ajax({
            type: "POST",
            url: tt,
            headers: {
                "X-CSRF-Token": e('meta[name="csrf-token"]').attr("content")
            },
            data: n,
            success: function() {
                if (Qr)
                    Qr(n);
                else {
                    var r = e("#regarding").val()
                      , t = e("#u13_reason").val()
                      , i = e("input[name='private_info']:checked").val()
                      , a = w()
                      , o = ot + "?regarding=" + encodeURIComponent(r);
                    "locked" === r && (a.u13_reason ? o += "&u13_selection=" + encodeURIComponent(a.u13_reason) : t && (o += "&u13_selection=" + encodeURIComponent(t))),
                    "abusiveuser" == r && i && "harass_others" == i && (o += "&target=other"),
                    window.location = o
                }
            }
        })
    }
    function er(e) {
        return e.is(":checked")
    }
    function rr(r) {
        var t = e.trim(r.val());
        return !t || d.VALID_EMAIL_FORMAT.test(t)
    }
    function tr(r) {
        var t = e.trim(r.val());
        return t.length <= 20 && d.SCREEN_NAME_PATTERN.test(t)
    }
    function ir(r) {
        var t = e.trim(r.val())
          , i = e.trim(e("#user_name").val()) || e.trim(e(".reporter-usernames:visible").val());
        return !(t && i && t.toLowerCase() == i.toLowerCase())
    }
    function ar(r) {
        var t = r.val().toLowerCase()
          , i = e('[name="trademark_product"]:checked').val()
          , a = e("#reported_accounts_" + i).val() || "";
        return -1 === a.indexOf(t)
    }
    function nr(r) {
        var t = r.attr("data-validate-tweet-url-username");
        if (!t)
            return !0;
        var i = e("#" + t)
          , a = i.val();
        if (!a)
            return !0;
        a = a.toLowerCase();
        var n = r.val()
          , o = n.match(d.TWEET_USERNAME_PATTERN);
        if (o && o[1]) {
            var l = o[1].toLowerCase();
            return a == l
        }
        return !1
    }
    function or(r) {
        for (var t = r.attr("data-validate-tweet-url-username"), i = {}, a = e("input[data-validate-tweet-url-username='" + t + "']"), n = 0; n < a.length; n++) {
            var o = e(a[n]).val();
            if ("" != o) {
                if (i[o])
                    return !1;
                i[o] = !0
            }
        }
        return !0
    }
    function lr() {
        var r = e('[id^="tweet_url_"]');
        e.each(r, function() {
            var r = e(this);
            "" !== r.value && r.closest("div.form-group").addClass("is-valid"),
            r.closest("div.form-group").removeClass("has-error"),
            z(r, function() {
                var r = e(".error-template.error:visible").size();
                0 >= r && e("#required_error").hide("fast")
            })
        })
    }
    function sr() {
        var r = e("input[data-validate-tweet-url-username]").toArray()
          , t = [];
        return r.forEach(function(r) {
            var i = e(r).val().match(d.TWEET_URL_PATTERN);
            i && i[3] && (t.includes(i[3]) || t.push(i[3]))
        }),
        1 === t.length
    }
    function dr(e) {
        var r = e.val();
        return "" === r || d.TWEET_URL_PATTERN.test(r) && _r(r)
    }
    function ur(e) {
        var r = e.val();
        return "" === r || d.MOMENT_URL_PATTERN.test(r) && gr(r)
    }
    function cr(e) {
        var r = e.val();
        return "" === r || d.CHANNEL_URL_PATTERN.test(r) && br(r)
    }
    function fr(e) {
        var r = e.val();
        return "" === r || d.CHANNEL_BANNER_IMAGE_URL_PATTERN.test(r)
    }
    function vr(e) {
        return dr(e) || ur(e)
    }
    function pr(e) {
        return dr(e) || ur(e) || Er(e) || zr(e)
    }
    function hr(e) {
        return dr(e) || ur(e) || Er(e) || zr(e) || cr(e)
    }
    function mr(e) {
        return !dr(e)
    }
    function _r(e) {
        var r = e.match(d.TWEET_URL_PATTERN);
        if (r && r[5]) {
            var t = new l(r[5]);
            return t.lte(s.MAX_TWEET_ID)
        }
        return !1
    }
    function br(e) {
        var r = e.match(d.CHANNEL_URL_PATTERN);
        if (r && r[2]) {
            var t = new l(r[2]);
            return t.lte(s.MAX_CHANNEL_ID)
        }
        return !1
    }
    function gr(e) {
        var r = e.match(d.MOMENT_URL_PATTERN);
        if (r && r[3]) {
            var t = new l(r[3]);
            return t.lte(s.MAX_MOMENT_ID)
        }
        return !1
    }
    function wr(e) {
        var r = e.val();
        return "" === r || d.VINE_URL_PATTERN.test(r)
    }
    function Cr(e) {
        var r = e.val();
        return "" === r || d.VALID_URL_PATTERN.test(r)
    }
    function xr(e) {
        return "vine_accountdelete_pending" === e || "vine_pw" === e
    }
    function yr(r) {
        return e("#regarding", r.closest("form")).val()
    }
    function Tr(e) {
        var r = e.val()
          , t = xr(yr(e));
        return t ? "" !== r : !0
    }
    function kr(e) {
        var r = e.val()
          , t = xr(yr(e));
        return t ? r > 0 : !0
    }
    function Er(e) {
        var r = e.val();
        return /F1-\d+/.test(r)
    }
    function zr(e) {
        var r = e.val();
        return /([a-zA-Z0-9_])+/.test(r)
    }
    function Rr(r) {
        var t, i = r.prop("id"), a = e("#" + i + "_text");
        return t = "p" === a.prop("nodeName").toLowerCase() ? a.text() : a.val(),
        r.val().toLowerCase().trim() === t.toLowerCase().trim()
    }
    function Nr(e) {
        return e.parent().prev().find(".media-data").length > 0
    }
    function Ar(r) {
        var t = parseInt(r.attr("maxlength"), 10)
          , i = r.val();
        return e.trim(i).length <= t
    }
    function Ir(r) {
        var t = r.prop("name");
        return e("input[name=" + t + "]:checked").val()
    }
    function Lr(r) {
        return "" !== e.trim(r.val())
    }
    function Sr(e) {
        var r = e.val();
        return null != r.match(new RegExp(d.TWITTER_PROPERTY_URLS_REGEXS.join("|"),"i"))
    }
    function Fr(e) {
        var r = e.val();
        return !d.URL_IN_TEXT_PATTERN.test(r)
    }
    function Pr(r) {
        var t = e.trim(r.val())
          , i = t.match(d.MULTILINE_URL_PATTERN);
        return null === i && 0 === t.length || i && i.length === t.split("\n").length
    }
    function jr(e) {
        var r = e.val();
        return d.PERISCOPE_URL_PATTERN.test(r)
    }
    function Ur(r) {
        var t = e.trim(r.val());
        return "" === t || d.PERISCOPE_URL_PATTERN.test(t)
    }
    function qr(e) {
        e.val();
        return !0
    }
    function Or(r) {
        if (r.hasClass("radio-selection-validate")) {
            if (!Ir(r))
                return Y(r, "radio-selection-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("exact-match-validate")) {
            if (!Rr(r))
                return Y(r, "exact-match-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("file-upload-validate")) {
            if (!Nr(r))
                return Y(r, "file-upload-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("disclaimer-validate")) {
            if (!er(r))
                return Y(r, "disclaimer-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("required-validate")) {
            if (!Lr(r))
                return "textarea" === r.prop("type") || r.hasClass("input-xxlarge") ? Y(r, "required-block-validate-error") : Y(r, "required-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("email-validate")) {
            if (!rr(r))
                return Y(r, "email-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("screen-name-validate")) {
            if (!tr(r))
                return Y(r, "screen-name-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("not-own-screen-name-validate")) {
            if (!ir(r))
                return Y(r, "not-own-screen-name-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("validate-unique-screen-name")) {
            if (!ar(r))
                return Y(r, "validate-unique-screen-name-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("tweet-url-validate")) {
            if (!dr(r))
                return Y(r, "tweet-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("moment-url-validate")) {
            if (!ur(r))
                return Y(r, "moment-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("tweet-or-moment-url-validate")) {
            if (!vr(r))
                return Y(r, "tweet-or-moment-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("tweet-or-moment-url-or-fleet-id-validate")) {
            if (!pr(r))
                return Y(r, "tweet-or-moment-url-or-fleet-id-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("channel-url-validate")) {
            if (!cr(r))
                return Y(r, "channel-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("channel-banner-image-url-validate")) {
            if (!fr(r))
                return Y(r, "channel-banner-image-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("generic-entity-validate")) {
            if (!hr(r))
                return Y(r, "generic-entity-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("tweet-url-validate-username")) {
            if (!nr(r))
                return Y(r, "tweet-url-username-match-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("tweet-url-validate-duplicate")) {
            if (!or(r))
                return Y(r, "tweet-url-duplicate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("twitter-property-url-validate")) {
            if (!Sr(r))
                return Y(r, "twitter-property-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("tweet-urls-belong-to-one-user")) {
            if (!sr())
                return Y(r, "tweet-urls-belong-to-one-user-error"),
                !1;
            lr()
        }
        if (r.hasClass("no-tweet-url-validate")) {
            if (!mr(r))
                return Y(r, "no-tweet-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("no-url-validate")) {
            if (!Fr(r))
                return Y(r, "no-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("multiline-url-validate")) {
            if (!Pr(r))
                return Y(r, "multiline-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("periscope-id-validate")) {
            if (!qr(r))
                return Y(r, "periscope-id-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("periscope-url-validate")) {
            if (!jr(r))
                return Y(r, "periscope-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("periscope-url-optional-validate") && !Ur(r))
            return Y(r, "periscope-url-validate-error"),
            !1;
        if (r.hasClass("fleet-id-validate")) {
            if (!Er(r) && !zr(r))
                return Y(r, "fleet-id-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("vine-url-validate")) {
            if (!wr(r))
                return Y(r, "vine-url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("url-validate")) {
            if (!Cr(r))
                return Y(r, "url-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("vine-id-validate")) {
            if (!Tr(r))
                return Y(r, "vine-id-required-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("vine-id-validate")) {
            if (!kr(r))
                return Y(r, "vine-id-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("length-validate")) {
            if (!Ar(r))
                return Y(r, "length-validate-error"),
                !1;
            Z(r)
        }
        if (r.hasClass("spam-form-url-validate")) {
            if (!Cr(r))
                return Y(r, "spam-form-url-validate-error"),
                !1;
            Z(r)
        }
        return z(r, function() {
            var r = e(".error-template.error:visible").size();
            0 === r && e("#required_error").hide("fast")
        }),
        !0
    }
    function Mr() {
        for (var r = 0, t = [], i = 0; i < nt.length; i++)
            t.push(nt[i] + ":visible");
        var a = t.join(", ");
        return e(a).each(function() {
            var t = e(this);
            Or(t) || r++
        }),
        r > 0 ? !1 : "undefined" != typeof at ? at() : !0
    }
    function Dr() {
        function r(r, t) {
            if (e(".list-container .list-item").length < it) {
                var i = r.clone();
                return 0 == t && r.find(".tweet-url").val(""),
                t++,
                i.find("[id]").each(function() {
                    e(this).attr("id", e(this).attr("id") + "_" + t)
                }),
                i.find("[name]").each(function() {
                    e(this).attr("name", e(this).attr("name") + "_" + t)
                }),
                i.find("[for]").each(function() {
                    e(this).attr("for", e(this).attr("for") + "_" + t)
                }),
                i.removeClass("init-hide"),
                i.find("a.remove-item-link").removeClass("init-hide"),
                i.find("div.remove-item-link-wrapper").removeClass("init-hide"),
                1 === t && (i.find("a.remove-item-link").remove(),
                i.find("div.remove-item-link-wrapper").remove()),
                K(i.find(".list-item")),
                e("#reported_material_buttons").removeClass("error reported-materials-validation-error"),
                i
            }
            return e(".max-reported-error").show(),
            null
        }
        var t = e(".reported-tweet").first()
          , i = e(".list-container")
          , a = e(".list-item", i).length
          , n = r(t, a);
        n && (a > 0 && n.find(".tweet-url").val(""),
        i.append(n))
    }
    function Hr() {
        var r = ["Address", "Phone", "Email", "ContactInformation", "Financial", "Id", "Image", "HackedMaterials", "Other"];
        return e.map(r, function(r) {
            return e(".offensive-tweet-info-" + r.toLowerCase()).is(":checked") ? r : void 0
        }).join(";")
    }
    function Wr() {
        it = parseInt(e("#list_container").attr("data-max-reported-items")),
        Dr(),
        e(document).on("click", "#inf_tweet_button", function() {
            Dr(),
            e(".list-container").show()
        }),
        e(document).on("click", ".remove-item-link", function() {
            return e(this).closest(".list-item").remove(),
            e(".list-container .list-item").length < it && e(".max-reported-error").hide(),
            !1
        })
    }
    function Xr(r) {
        return e("#" + r + "_options").find("input:radio").each(function() {
            this.checked = !1
        }).end().find("ul").each(function() {
            E(e("#" + this.id))
        }),
        e("#" + r).closest("li").siblings().find("input:radio").each(function() {
            this.checked = !1
        }).end().find("ul").each(function() {
            E(e("#" + this.id))
        }),
        K(e("#" + r + "_options")),
        this
    }
    function Br(r, t, i) {
        return e.inArray("#" + r, t) >= 0 ? K(e("." + i)) : E(e("." + i)),
        this
    }
    function Gr() {
        !function(r, t) {
            t = document.createElement("script"),
            t.type = "text/javascript",
            t.async = !0,
            t.onload = function() {
                e("#recaptcha-consent-button").hide(),
                e("#submit_button").prop("disabled", !1).show()
            }
            ,
            t.src = "https://www.google.com/recaptcha/api.js",
            r.getElementsByTagName("head")[0].appendChild(t)
        }(document)
    }
    function Vr(r, t, i) {
        function a() {
            var e = d.children().size() >= m;
            u.attr("disabled", e),
            u.find("input").attr("disabled", e)
        }
        function n(r) {
            var t = r.data;
            t && (t = e.parseJSON(t),
            e("#" + t.upload_id).data({
                "media-id": t.media_id_string,
                "image-type": t.image.image_type
            }))
        }
        i = i || !1;
        var o, l, s = e(r), d = e(t), u = s.parent(".fileinput-button"), c = "https://upload.twitter.com/i/media/upload.iframe", f = e(location).attr("origin"), v = "json", p = !0, h = /(\.|\/)(gif|jpe?g|png|webp)$/i, m = 1, _ = 3e6, b = "media", g = encodeURIComponent(f), w = {
            authenticity_token: e("#authenticity_token").val(),
            origin: f
        };
        i ? (o = c + "?origin=" + g,
        l = function() {}
        ) : (o = "/api/v1/media_uploads",
        l = function(r, t) {
            if (t && t.result) {
                var i = t.result;
                e("#" + i.upload_id).data({
                    "media-id": i.media_id,
                    "image-type": i.image_type
                })
            }
        }
        ),
        s.fileupload({
            url: o,
            dataType: v,
            autoUpload: p,
            acceptFileTypes: h,
            maxFileSize: _,
            forceIframeTransport: !0,
            initialIframeSrc: " ",
            paramName: b,
            formData: w,
            messages: {
                acceptFileTypes: e("#error_unsupported_type").val(),
                maxFileSize: e("#error_max_file_size").val()
            },
            done: l
        }).on("fileuploadadd", function(r, i) {
            var n = e(this).parent().next(".upload-errors");
            n.find(".file-upload-validate-error").hide(),
            n.find(".file-upload-validate-file-type-error").hide(),
            n.find(".file-upload-validate-file-type-error").hide(),
            n.find(".file-upload-error").hide(),
            e("#submit_button").attr("disabled", !0);
            var o = e("<div/>");
            i.context = o.appendTo(t),
            e.each(i.files, function(r, t) {
                if (!r) {
                    var n = e("<a/>").addClass("glyphicon").addClass("glyphicon-remove").on("click", function() {
                        var r = e(this)
                          , t = r.data();
                        t.abort(),
                        r.closest(".media-data").remove(),
                        a()
                    }).data(i)
                      , l = e("<span/>").addClass("fa fa-spin fa-spinner")
                      , s = e("<span/>").addClass("progress progress-info");
                    s.append(l),
                    o.addClass("media-data"),
                    o.append(e("<div/>").text(t.name)),
                    o.append(e("<div/>").text("(" + Math.floor(t.size / 1e3) + " KB)")),
                    o.append(e("<div/>").addClass("progress-container").append(s)),
                    o.append(e("<div/>").append(n))
                }
                o.appendTo(i.context),
                a()
            })
        }).on("fileuploadprocessalways", function(r, t) {
            var i = t.index
              , n = t.files[i]
              , o = e(t.context);
            if (n.error) {
                var l = e(this).parent().next(".upload-errors");
                o.remove(),
                n.error == t.messages.maxFileSize && l.find(".file-upload-validate-file-size-error").show(),
                n.error == t.messages.acceptFileTypes && l.find(".file-upload-validate-file-type-error").show(),
                a()
            } else {
                var s = e.now();
                o.attr("id", s),
                t.formData.upload_id = s
            }
        }).on("fileuploadprogress", function(e, r) {
            var t = parseInt(r.loaded / r.total * 100, 10);
            r.context.find(".bar").css("width", t + "%")
        }).on("fileuploaddone", function(r, t) {
            var i = e("<span />").addClass("glyphicon glyphicon-ok file-uploaded-icon info");
            setTimeout(function() {
                e("#submit_button").attr("disabled", !1),
                t.context.find(".progress").remove(),
                t.context.find(".progress-container").append(i)
            }, 1e3)
        }).on("fileuploadfail", function(r, t) {
            if ("abort" !== t.errorThrown) {
                var i = (t.files[0],
                e(t.context.children()[0]));
                i.closest(".media-data").remove();
                var a = e(this).parent().next(".upload-errors");
                a.find(".file-upload-error").show(),
                e("#submit_button").attr("disabled", !1)
            }
        }),
        d.data("unsupported-file-types", []),
        i && window.addEventListener("message", n, !1)
    }
    function Jr(e) {
        var r = document.createElement("div")
          , t = document.createTextNode(e);
        return r.appendChild(t),
        r.innerHTML
    }
    function Kr(e) {
        return e ? e.trim() : e
    }
    function Yr() {
        return "true" === e("#is_recaptcha_enabled").val()
    }
    var Zr, $r, Qr, et, rt, tt, it, at, nt = [".disclaimer-validate", ".email-validate", ".exact-match-validate", ".file-upload-validate", ".generic-entity-validate", ".length-validate", ".not-own-screen-name-validate", ".remote-screen-name-validate", ".required-validate", ".radio-selection-validate", ".screen-name-validate", ".tweet-url-validate", ".tweet-urls-belong-to-one-user", ".url-validate", ".validate-unique-screen-name", ".channel-banner-image-url-validate", ".channel-url-validate", ".fleet-id-validate", ".vine-id-validate", ".vine-url-validate", ".twitter-property-url-validate", ".no-url-validate", ".multiline-url-validate", ".periscope-id-validate", ".periscope-url-optional-validate", ".periscope-url-validate", ".moment-url-validate", ".tweet-or-moment-url-validate", ".tweet-or-moment-url-or-fleet-id-validate", ".spam-form-url-validate"], ot = "/forms/submitted";
    return {
        changeSubmitPath: c,
        fillSubject: M,
        findChecked: v,
        findCheckedInElement: p,
        findCheckedIdInElement: h,
        findCheckedByClass: m,
        findSelected: _,
        gatherPrivatePostingType: Hr,
        getUrlParameter: g,
        getParamsObject: w,
        getReportSource: C,
        getSubtopic: N,
        getNumberOfTweets: I,
        getNumberOfUniqueUsernames: L,
        getUsernameFromFirstTweetUrl: S,
        hideAndShow: k,
        hideElems: E,
        hideError: z,
        initForm: R,
        initializeTweetBox: Wr,
        injectRecaptchaScript: Gr,
        isRecaptchaEnabled: Yr,
        isChecked: A,
        prepareFormErrors: q,
        resetAllFormFields: j,
        resetFormFields: U,
        sanitizeInput: Jr,
        screenNameRemoteCheck: $,
        serializeForm: D,
        setGatherExtraDataFunction: G,
        setGatherServiceCloudFunction: V,
        setPostSubmitFunction: B,
        setSubmitFailFunction: X,
        setSubmitFunction: H,
        setSubmitUrl: W,
        setupFileUpload: Vr,
        setValidationFunction: J,
        showElems: K,
        showError: Y,
        submittedPath: ot,
        validateAll: Or,
        validateForm: Mr,
        uncheckRadios: y,
        updateU13RestorationStatus: T,
        disableFormFields: F,
        enableFormFields: P,
        uncheckChildrenAndSiblingsAndHideShowInfoOf: Xr,
        hideShowForm: Br,
        trimString: Kr
    }
});
