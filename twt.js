define(function() {
    function t(t, e) {
        return e = e || "",
        "string" != typeof t && (t.global && e.indexOf("g") < 0 && (e += "g"),
        t.ignoreCase && e.indexOf("i") < 0 && (e += "i"),
        t.multiline && e.indexOf("m") < 0 && (e += "m"),
        t = t.source),
        new RegExp(t.replace(/#\{(\w+)\}/g, function(t, e) {
            var r = twttr.txt.regexen[e] || "";
            return "string" != typeof r && (r = r.source),
            r
        }),e)
    }
    function e(t, e) {
        return t.replace(/#\{(\w+)\}/g, function(t, r) {
            return e[r] || ""
        })
    }
    function r(t, e, r) {
        var a = String.fromCharCode(e);
        return r !== e && (a += "-" + String.fromCharCode(r)),
        t.push(a),
        t
    }
    function a(t) {
        var e = {};
        for (var r in t)
            t.hasOwnProperty(r) && (e[r] = t[r]);
        return e
    }
    function n(t, e, r) {
        return r ? !t || t.match(e) && RegExp["$&"] === t : "string" == typeof t && t.match(e) && RegExp["$&"] === t
    }
    window.twttr = window.twttr || {},
    twttr.txt = {},
    twttr.txt.regexen = {};
    var i = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    twttr.txt.htmlEscape = function(t) {
        return t && t.replace(/[&"'><]/g, function(t) {
            return i[t]
        })
    }
    ;
    var l = String.fromCharCode
      , s = [l(32), l(133), l(160), l(5760), l(6158), l(8232), l(8233), l(8239), l(8287), l(12288)];
    r(s, 9, 13),
    r(s, 8192, 8202);
    var x = [l(65534), l(65279), l(65535)];
    r(x, 8234, 8238),
    twttr.txt.regexen.spaces_group = t(s.join("")),
    twttr.txt.regexen.spaces = t("[" + s.join("") + "]"),
    twttr.txt.regexen.invalid_chars_group = t(x.join("")),
    twttr.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~/,
    twttr.txt.regexen.atSigns = /[@\uff20]/,
    twttr.txt.regexen.extractMentions = t(/(^|[^a-zA-Z0-9_])(#{atSigns})([a-zA-Z0-9_]{1,20})(?=(.|$))/g),
    twttr.txt.regexen.extractReply = t(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/),
    twttr.txt.regexen.listName = /[a-zA-Z][a-zA-Z0-9_\-\u0080-\u00ff]{0,24}/,
    twttr.txt.regexen.extractMentionsOrLists = t(/(^|[^a-zA-Z0-9_])(#{atSigns})([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?(?=(.|$))/g);
    var o = [];
    r(o, 1024, 1279),
    r(o, 1280, 1319),
    r(o, 11744, 11775),
    r(o, 42560, 42655),
    r(o, 4352, 4607),
    r(o, 12592, 12677),
    r(o, 43360, 43391),
    r(o, 44032, 55215),
    r(o, 55216, 55295),
    r(o, 65441, 65500),
    r(o, 12449, 12538),
    r(o, 12540, 12542),
    r(o, 65382, 65439),
    r(o, 65392, 65392),
    r(o, 65296, 65305),
    r(o, 65313, 65338),
    r(o, 65345, 65370),
    r(o, 12353, 12438),
    r(o, 12441, 12446),
    r(o, 13312, 19903),
    r(o, 19968, 40959),
    r(o, 173824, 177983),
    r(o, 177984, 178207),
    r(o, 194560, 195103),
    r(o, 12293, 12293),
    r(o, 12347, 12347),
    twttr.txt.regexen.nonLatinHashtagChars = t(o.join("")),
    twttr.txt.regexen.latinAccentChars = t("\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\u015f\\303\\277"),
    twttr.txt.regexen.endScreenNameMatch = t(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/),
    twttr.txt.regexen.hashtagBoundary = t(/(?:^|$|#{spaces}|[\u300c\u300d\u3002\u3001.,!\uff01?\uff1f:;"'])/),
    twttr.txt.regexen.hashtagAlpha = t(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i),
    twttr.txt.regexen.hashtagAlphaNumeric = t(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i),
    twttr.txt.regexen.autoLinkHashtags = t(/(#{hashtagBoundary})(#|\uff03)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi),
    twttr.txt.regexen.autoLinkUsernamesOrLists = /(^|[^a-zA-Z0-9_]|RT:?)([@\uff20]+)([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?/g,
    twttr.txt.regexen.autoLinkEmoticon = /(8\-\#|8\-E|\+\-\(|\`\@|\`O|\&lt;\|:~\(|\}:o\{|:\-\[|\&gt;o\&lt;|X\-\/|\[:-\]\-I\-|\/\/\/\/\xd6\\\\\\\\|\(\|:\|\/\)|\u2211:\*\)|\( \| \))/g,
    twttr.txt.regexen.validPrecedingChars = t(/(?:[^-\/"'!=A-Za-z0-9_@\uff20\.#{invalid_chars_group}]|^)/),
    twttr.txt.regexen.invalidDomainChars = e("#{punct}#{spaces_group}#{invalid_chars_group}", twttr.txt.regexen),
    twttr.txt.regexen.validDomainChars = t(/[^#{invalidDomainChars}]/),
    twttr.txt.regexen.validSubdomain = t(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/),
    twttr.txt.regexen.validDomainName = t(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/),
    twttr.txt.regexen.validGTLD = t(/(?:(?:aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)(?=[^a-zA-Z]|$))/),
    twttr.txt.regexen.validCCTLD = t(/(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)(?=[^a-zA-Z]|$))/),
    twttr.txt.regexen.validPunycode = t(/(?:xn--[0-9a-z]+)/),
    twttr.txt.regexen.validDomain = t(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/),
    twttr.txt.regexen.validAsciiDomain = t(/(?:(?:[a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/i),
    twttr.txt.regexen.validShortDomain = t(/^#{validDomainName}#{validCCTLD}$/),
    twttr.txt.regexen.validPortNumber = t(/[0-9]+/),
    twttr.txt.regexen.validGeneralUrlPathChars = t(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~|&#{latinAccentChars}]/i),
    twttr.txt.regexen.validUrlBalancedParens = t(/\(#{validGeneralUrlPathChars}+\)/i),
    twttr.txt.regexen.validUrlPathEndingChars = t(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i),
    twttr.txt.regexen.validUrlPath = t("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", "i"),
    twttr.txt.regexen.validUrlQueryChars = /[a-z0-9!\*'\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i,
    twttr.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i,
    twttr.txt.regexen.extractUrl = t("((#{validPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", "gi"),
    twttr.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i,
    twttr.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i,
    twttr.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i,
    twttr.txt.regexen.validateUrlPchar = t("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", "i"),
    twttr.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i,
    twttr.txt.regexen.validateUrlUserinfo = t("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", "i"),
    twttr.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i,
    twttr.txt.regexen.validateUrlIpv4 = t(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i),
    twttr.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i,
    twttr.txt.regexen.validateUrlIp = t("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", "i"),
    twttr.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i,
    twttr.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i,
    twttr.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i,
    twttr.txt.regexen.validateUrlDomain = t(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i),
    twttr.txt.regexen.validateUrlHost = t("(?:#{validateUrlIp}|#{validateUrlDomain})", "i"),
    twttr.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i,
    twttr.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i,
    twttr.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i,
    twttr.txt.regexen.validateUrlUnicodeDomain = t(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i),
    twttr.txt.regexen.validateUrlUnicodeHost = t("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", "i"),
    twttr.txt.regexen.validateUrlPort = /[0-9]{1,5}/,
    twttr.txt.regexen.validateUrlUnicodeAuthority = t("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", "i"),
    twttr.txt.regexen.validateUrlAuthority = t("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", "i"),
    twttr.txt.regexen.validateUrlPath = t(/(\/#{validateUrlPchar}*)*/i),
    twttr.txt.regexen.validateUrlQuery = t(/(#{validateUrlPchar}|\/|\?)*/i),
    twttr.txt.regexen.validateUrlFragment = t(/(#{validateUrlPchar}|\/|\?)*/i),
    twttr.txt.regexen.validateUrlUnencoded = t("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i");
    var u = "tweet-url"
      , c = "list-slug"
      , d = "username"
      , g = "hashtag"
      , h = ' rel="nofollow"';
    twttr.txt.autoLink = function(t, e) {
        return e = a(e || {}),
        twttr.txt.autoLinkUsernamesOrLists(twttr.txt.autoLinkUrlsCustom(twttr.txt.autoLinkHashtags(t, e), e), e)
    }
    ,
    twttr.txt.autoLinkUsernamesOrLists = function(t, r) {
        if (r = a(r || {}),
        r.urlClass = r.urlClass || u,
        r.listClass = r.listClass || c,
        r.usernameClass = r.usernameClass || d,
        r.usernameUrlBase = r.usernameUrlBase || "http://twitter.com/",
        r.listUrlBase = r.listUrlBase || "http://twitter.com/",
        !r.suppressNoFollow)
            var n = h;
        for (var i = "", l = twttr.txt.splitTags(t), s = 0; s < l.length; s++) {
            var x = l[s];
            0 !== s && (i += s % 2 === 0 ? ">" : "<"),
            i += s % 4 !== 0 ? x : x.replace(twttr.txt.regexen.autoLinkUsernamesOrLists, function(t, a, i, l, s, x, o) {
                var u = o.slice(x + t.length)
                  , c = {
                    before: a,
                    at: i,
                    user: twttr.txt.htmlEscape(l),
                    slashListname: twttr.txt.htmlEscape(s),
                    extraHtml: n,
                    preChunk: "",
                    chunk: twttr.txt.htmlEscape(o),
                    postChunk: ""
                };
                for (var d in r)
                    r.hasOwnProperty(d) && (c[d] = r[d]);
                if (s && !r.suppressLists) {
                    var g = c.chunk = e("#{user}#{slashListname}", c);
                    return c.list = twttr.txt.htmlEscape(g.toLowerCase()),
                    e('#{before}#{at}<a class="#{urlClass} #{listClass}" href="#{listUrlBase}#{list}"#{extraHtml}>#{preChunk}#{chunk}#{postChunk}</a>', c)
                }
                return u && u.match(twttr.txt.regexen.endScreenNameMatch) ? t : (c.chunk = twttr.txt.htmlEscape(l),
                c.dataScreenName = r.suppressDataScreenName ? "" : e('data-screen-name="#{chunk}" ', c),
                e('#{before}#{at}<a class="#{urlClass} #{usernameClass}" #{dataScreenName}href="#{usernameUrlBase}#{chunk}"#{extraHtml}>#{preChunk}#{chunk}#{postChunk}</a>', c))
            })
        }
        return i
    }
    ,
    twttr.txt.autoLinkHashtags = function(t, r) {
        if (r = a(r || {}),
        r.urlClass = r.urlClass || u,
        r.hashtagClass = r.hashtagClass || g,
        r.hashtagUrlBase = r.hashtagUrlBase || "http://twitter.com/search?q=%23",
        !r.suppressNoFollow)
            var n = h;
        return t.replace(twttr.txt.regexen.autoLinkHashtags, function(t, a, i, l) {
            var s = {
                before: a,
                hash: twttr.txt.htmlEscape(i),
                preText: "",
                text: twttr.txt.htmlEscape(l),
                postText: "",
                extraHtml: n
            };
            for (var x in r)
                r.hasOwnProperty(x) && (s[x] = r[x]);
            return e('#{before}<a href="#{hashtagUrlBase}#{text}" title="##{text}" class="#{urlClass} #{hashtagClass}"#{extraHtml}>#{hash}#{preText}#{text}#{postText}</a>', s)
        })
    }
    ,
    twttr.txt.autoLinkUrlsCustom = function(t, r) {
        r = a(r || {}),
        r.suppressNoFollow || (r.rel = "nofollow"),
        r.urlClass && (r["class"] = r.urlClass,
        delete r.urlClass);
        var n, i, l;
        if (r.urlEntities)
            for (n = {},
            i = 0,
            l = r.urlEntities.length; l > i; i++)
                n[r.urlEntities[i].url] = r.urlEntities[i];
        return delete r.suppressNoFollow,
        delete r.suppressDataScreenName,
        delete r.listClass,
        delete r.usernameClass,
        delete r.usernameUrlBase,
        delete r.listUrlBase,
        t.replace(twttr.txt.regexen.extractUrl, function(t, a, i, l, s) {
            if (s) {
                var x = "";
                for (var o in r)
                    x += e(' #{k}="#{v}" ', {
                        k: o,
                        v: r[o].toString().replace(/"/, "&quot;").replace(/</, "&lt;").replace(/>/, "&gt;")
                    });
                var u = {
                    before: i,
                    htmlAttrs: x,
                    url: twttr.txt.htmlEscape(l)
                };
                return u.displayUrl = n && n[l] && n[l].display_url ? twttr.txt.htmlEscape(n[l].display_url) : u.url,
                e('#{before}<a href="#{url}"#{htmlAttrs}>#{displayUrl}</a>', u)
            }
            return a
        })
    }
    ,
    twttr.txt.extractMentions = function(t) {
        for (var e = [], r = twttr.txt.extractMentionsWithIndices(t), a = 0; a < r.length; a++) {
            var n = r[a].screenName;
            e.push(n)
        }
        return e
    }
    ,
    twttr.txt.extractMentionsWithIndices = function(t) {
        if (!t)
            return [];
        var e = []
          , r = 0;
        return t.replace(twttr.txt.regexen.extractMentions, function(a, n, i, l, s) {
            if (!s.match(twttr.txt.regexen.endScreenNameMatch)) {
                var x = t.indexOf(i + l, r);
                r = x + l.length + 1,
                e.push({
                    screenName: l,
                    indices: [x, r]
                })
            }
        }),
        e
    }
    ,
    twttr.txt.extractMentionsOrListsWithIndices = function(t) {
        if (!t)
            return [];
        var e = []
          , r = 0;
        return t.replace(twttr.txt.regexen.extractMentionsOrLists, function(a, n, i, l, s, x) {
            if (!x.match(twttr.txt.regexen.endScreenNameMatch)) {
                s = s || "";
                var o = t.indexOf(i + l + s, r);
                r = o + l.length + s.length + 1,
                e.push({
                    screenName: l,
                    listSlug: s,
                    indices: [o, r]
                })
            }
        }),
        e
    }
    ,
    twttr.txt.extractReplies = function(t) {
        if (!t)
            return null;
        var e = t.match(twttr.txt.regexen.extractReply);
        return e ? e[1] : null
    }
    ,
    twttr.txt.extractUrls = function(t) {
        for (var e = [], r = twttr.txt.extractUrlsWithIndices(t), a = 0; a < r.length; a++)
            e.push(r[a].url);
        return e
    }
    ,
    twttr.txt.extractUrlsWithIndices = function(t) {
        if (!t)
            return [];
        var e = [];
        return t.replace(twttr.txt.regexen.extractUrl, function(r, a, n, i, l, s, x, o) {
            if (!l) {
                if (ascii_domain = s.match(twttr.txt.regexen.validAsciiDomain),
                !ascii_domain)
                    return;
                i = i.replace(s, ascii_domain[0]),
                s = ascii_domain[0]
            }
            if (l || o || !s.match(twttr.txt.regexen.validShortDomain)) {
                var u = t.indexOf(i, c)
                  , c = u + i.length;
                e.push({
                    url: i,
                    indices: [u, c]
                })
            }
        }),
        e
    }
    ,
    twttr.txt.extractHashtags = function(t) {
        for (var e = [], r = twttr.txt.extractHashtagsWithIndices(t), a = 0; a < r.length; a++)
            e.push(r[a].hashtag);
        return e
    }
    ,
    twttr.txt.extractHashtagsWithIndices = function(t) {
        if (!t)
            return [];
        var e = []
          , r = 0;
        return t.replace(twttr.txt.regexen.autoLinkHashtags, function(a, n, i, l) {
            var s = t.indexOf(i + l, r);
            r = s + l.length + 1,
            e.push({
                hashtag: l,
                indices: [s, r]
            })
        }),
        e
    }
    ,
    twttr.txt.splitTags = function(t) {
        for (var e, r, a = t.split("<"), n = [], i = 0; i < a.length; i += 1)
            if (r = a[i]) {
                e = r.split(">");
                for (var l = 0; l < e.length; l += 1)
                    n.push(e[l])
            } else
                n.push("");
        return n
    }
    ,
    twttr.txt.hitHighlight = function(t, e, r) {
        var a = "em";
        if (e = e || [],
        r = r || {},
        0 === e.length)
            return t;
        var n, i, l, s, x, o, u, c = r.tag || a, d = ["<" + c + ">", "</" + c + ">"], g = twttr.txt.splitTags(t), h = "", v = 0, m = g[0], w = 0, f = 0, p = !1, U = m, C = [];
        for (n = 0; n < e.length; n += 1)
            for (i = 0; i < e[n].length; i += 1)
                C.push(e[n][i]);
        for (l = 0; l < C.length; l += 1) {
            for (s = C[l],
            x = d[l % 2],
            o = !1; null != m && s >= w + m.length; )
                h += U.slice(f),
                p && s === w + U.length && (h += x,
                o = !0),
                g[v + 1] && (h += "<" + g[v + 1] + ">"),
                w += U.length,
                f = 0,
                v += 2,
                m = g[v],
                U = m,
                p = !1;
            o || null == m ? o || (o = !0,
            h += x) : (u = s - w,
            h += U.slice(f, u) + x,
            f = u,
            p = l % 2 === 0 ? !0 : !1)
        }
        if (null != m)
            for (f < U.length && (h += U.slice(f)),
            l = v + 1; l < g.length; l += 1)
                h += l % 2 === 0 ? g[l] : "<" + g[l] + ">";
        return h
    }
    ;
    var v = 140
      , m = [l(65534), l(65279), l(65535), l(8234), l(8235), l(8236), l(8237), l(8238)];
    twttr.txt.isInvalidTweet = function(t) {
        if (!t)
            return "empty";
        if (t.length > v)
            return "too_long";
        for (var e = 0; e < m.length; e++)
            if (t.indexOf(m[e]) >= 0)
                return "invalid_characters";
        return !1
    }
    ,
    twttr.txt.isValidTweetText = function(t) {
        return !twttr.txt.isInvalidTweet(t)
    }
    ,
    twttr.txt.isValidUsername = function(t) {
        if (!t)
            return !1;
        var e = twttr.txt.extractMentions(t);
        return 1 === e.length && e[0] === t.slice(1)
    }
    ;
    var w = t(/^#{autoLinkUsernamesOrLists}$/);
    twttr.txt.isValidList = function(t) {
        var e = t.match(w);
        return !(!e || "" != e[1] || !e[4])
    }
    ,
    twttr.txt.isValidHashtag = function(t) {
        if (!t)
            return !1;
        var e = twttr.txt.extractHashtags(t);
        return 1 === e.length && e[0] === t.slice(1)
    }
    ,
    twttr.txt.isValidUrl = function(t, e, r) {
        if (null == e && (e = !0),
        null == r && (r = !0),
        !t)
            return !1;
        var a = t.match(twttr.txt.regexen.validateUrlUnencoded);
        if (!a || a[0] !== t)
            return !1;
        var i = a[1]
          , l = a[2]
          , s = a[3]
          , x = a[4]
          , o = a[5];
        return (!r || n(i, twttr.txt.regexen.validateUrlScheme) && i.match(/^https?$/i)) && n(s, twttr.txt.regexen.validateUrlPath) && n(x, twttr.txt.regexen.validateUrlQuery, !0) && n(o, twttr.txt.regexen.validateUrlFragment, !0) ? e && n(l, twttr.txt.regexen.validateUrlUnicodeAuthority) || !e && n(l, twttr.txt.regexen.validateUrlAuthority) : !1
    }
    ,
    "undefined" != typeof module && module.exports && (module.exports = twttr.txt)
});
