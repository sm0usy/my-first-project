define(["jquery"], function(t) {
    "use strict";
    function i(t) {
        this.$bar = jQuery('<div class="notification-bar"></div>'),
        this.$barContainer = jQuery('<div class="notification-bar-container"></div>'),
        this.$barContents = jQuery('<div class="notification-bar-contents"></div>'),
        this.$barBackground = jQuery('<div class="notification-bar-bkg"></div>'),
        this.$message = jQuery('<div class="message"></div>'),
        this.$bar.hide(),
        this.$barBackground.hide();
        var i = this;
        this.$bar.click(function(t) {
            i.removeAfterEvent(t)
        }),
        this.className = t
    }
    function e() {
        i.call(this, "message-info"),
        this.timeoutInMilliseconds = 3e3
    }
    function s() {
        i.call(this, "message-info"),
        this.timeoutInMilliseconds = 6e3
    }
    function o() {
        i.call(this, "message-progress"),
        this.timeoutInMilliseconds = 1e3
    }
    function n() {
        i.call(this, "message-error"),
        this.timeoutInMilliseconds = 8e3
    }
    /**
   * Twitter - http://www.twitter.com
   * Copyright (C) 2009 Twitter
   * Author: Chris Wetherell (chrisw@gmail.com)
   */
    return function() {
        jQuery.inherits = function(t, i) {
            function e() {}
            e.prototype = i.prototype,
            t.prototype = new e,
            t.prototype.constructor = t
        }
    }(),
    function() {
        jQuery.fn.equals = function(t) {
            return this.get(0) == t.get(0)
        }
    }(),
    function() {
        jQuery.fn.hasParent = function(i) {
            var e = !1;
            return this.parents().map(function() {
                t(this).equals(i) && (e = !0)
            }),
            e
        }
    }(),
    i.SLIDE_SPEED_IN_MS = 300,
    i.prototype.remove = function() {
        var t = this;
        this.slideUp(function() {
            t.$bar.remove(),
            t.$barBackground.remove(),
            window.clearTimeout(t.timeout)
        })
    }
    ,
    i.prototype.removeAfterEvent = function(i) {
        var e = t(i.target);
        "a" == e.get(0).nodeName.toLowerCase() && e.hasParent(this.$message) || this.remove()
    }
    ,
    i.prototype.setMessage = function(t) {
        return this.msg = t,
        this
    }
    ,
    i.prototype.show = function() {
        return this.$message.addClass(this.className).html(this.msg),
        this.$barContainer.append(this.$barBackground).append(this.$bar.append(this.$barContents.append(this.$message))),
        jQuery("#notifications").append(this.$barContainer),
        this.$barBackground.height(this.$bar.height()),
        this.showBar(),
        this.onShow && this.onShow(),
        this
    }
    ,
    i.prototype.removeInMilliseconds = function() {
        var t = this;
        this.timeout = window.setTimeout(function() {
            t.remove()
        }, t.timeoutInMilliseconds)
    }
    ,
    i.prototype.showBar = function() {
        this.$bar.show(),
        this.$barBackground.show()
    }
    ,
    i.prototype.onShow = function() {
        this.removeInMilliseconds()
    }
    ,
    i.prototype.slideUp = function(t) {
        this.$bar.slideUp(i.SLIDE_SPEED_IN_MS),
        this.$barBackground.slideUp(i.SLIDE_SPEED_IN_MS, t)
    }
    ,
    jQuery.inherits(e, i),
    e.prototype.showBar = function() {
        this.$bar.slideDown(i.SLIDE_SPEED_IN_MS),
        this.$barBackground.slideDown(i.SLIDE_SPEED_IN_MS)
    }
    ,
    jQuery.inherits(s, i),
    s.prototype.showBar = function() {
        this.$bar.slideDown(i.SLIDE_SPEED_IN_MS),
        this.$barBackground.slideDown(i.SLIDE_SPEED_IN_MS)
    }
    ,
    jQuery.inherits(o, i),
    o.prototype.setProgressMessage = function(t) {
        return this.setMessage(t)
    }
    ,
    o.prototype.setCompletedMessage = function(t) {
        return this.completedMsg = t,
        this
    }
    ,
    o.prototype.onShow = function() {}
    ,
    o.prototype.cancel = function() {
        this.timeoutInMilliseconds = 0,
        this.removeInMilliseconds()
    }
    ,
    o.prototype.done = function() {
        this.$message.addClass("message-progress-done").removeClass(this.className).html(this.completedMsg),
        this.removeInMilliseconds()
    }
    ,
    jQuery.inherits(n, i),
    {
        InfoNotification: s,
        ShortNotification: e,
        ProgressNotification: o,
        ErrorNotification: n
    }
});
