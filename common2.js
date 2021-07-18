define([], function() {
    "use strict";
    var t = /^[a-zA-Z0-9_]*$/
      , s = /^([abcdefg\.hijklmnopqrstuvwxyz!#\$%&'\*\/\=\?\^\_\+\-\`\{\|\}\~0123456789]{1,64})@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
      , _ = /^https?:\/\/(mobile\.|www\.)?twitter\.com\/(#!\/)?([a-zA-Z0-9_]+)\/status(es)?\/([0-9]{0,19})(\?[sS]=([0-9]{0,19}))?$/
      , i = /^https?:\/\/(mobile\.|www\.)?twitter\.com\/i\/lists\/([0-9]{1,19})$/
      , T = /^https?:\/\/pbs\.twimg\.com\/.*$/
      , p = /^https?:\/\/(mobile\.|www\.)?twitter\.com\/(i|[a-zA-Z0-9_]{2,15})\/(?:moments|events)\/([0-9]{0,19})$/
      , E = /^https:\/\/vine\.co\/v\//
      , A = /^(http|https):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/i
      , R = /twitter\.com\/(?:#!\/)?([a-zA-Z0-9_]+)\//
      , a = /(\bhttps?:\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,24}(:[0-9]{1,5})?(\/.*)?|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?)/i
      , o = /^https?:\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,24}(:[0-9]{1,5})?(\/.*)?$|^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/gim
      , w = /^(https?):\/\/(www\.)?(periscope|pscp)\.tv\/(w|([a-zA-Z0-9_]{2,20}))\/([a-zA-Z0-9_]+)\/?$/i
      , e = ["^https?://mobile.twitter.com/(#!/)?[a-zA-Z0-9_]+/status(es)?/([0-9]{0,19})$", "^https?://twitter.com/(#!/)?[a-zA-Z0-9_]+/.*$", "^https?://pbs.twimg.com/.*$", "^https?://pic.twitter.com/.*$", "^https?://o.twimg.com/(1|2)/proxy.jpg?.*$", "^https?://amp.twimg.com/v/.*$", "^https?://snpy.tv/.*$", "^https?://gph.is/.*$", "^https?://gif.co/.*$", "^https?://video.twimg.com/ext_tw_video/.*$", "^https?://video.twimg.com/dm_video/.*$"]
      , m = /\(?(?:(http|https):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/i;
    return {
        SCREEN_NAME_PATTERN: t,
        VALID_EMAIL_FORMAT: s,
        TWEET_URL_PATTERN: _,
        MOMENT_URL_PATTERN: p,
        VINE_URL_PATTERN: E,
        VALID_URL_PATTERN: A,
        TWEET_USERNAME_PATTERN: R,
        URL_IN_TEXT_PATTERN: a,
        MULTILINE_URL_PATTERN: o,
        PERISCOPE_URL_PATTERN: w,
        TWITTER_PROPERTY_URLS_REGEXS: e,
        VALID_PARTIAL_URL_PATTERN: m,
        CHANNEL_URL_PATTERN: i,
        CHANNEL_BANNER_IMAGE_URL_PATTERN: T
    }
});
