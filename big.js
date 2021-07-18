!function(e) {
    "use strict";
    function n(e) {
        var t, i, s, f = this;
        if (!(f instanceof n))
            return new n(e);
        if (e instanceof n)
            return f.s = e.s,
            f.e = e.e,
            void (f.c = e.c.slice());
        for (0 === e && 0 > 1 / e ? e = "-0" : l.test(e += "") || r(0 / 0),
        f.s = "-" == e.charAt(0) ? (e = e.slice(1),
        -1) : 1,
        (t = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
        (i = e.search(/e/i)) > 0 ? (0 > t && (t = i),
        t += +e.slice(i + 1),
        e = e.substring(0, i)) : 0 > t && (t = e.length),
        i = 0; "0" == e.charAt(i); i++)
            ;
        if (i == (s = e.length))
            f.c = [f.e = 0];
        else {
            for (; "0" == e.charAt(--s); )
                ;
            for (f.e = t - i - 1,
            f.c = [],
            t = 0; s >= i; f.c[t++] = +e.charAt(i++))
                ;
        }
    }
    function t(e, n, t, i) {
        var s = e.c
          , f = e.e + n + 1;
        if (1 === t ? i = s[f] >= 5 : 2 === t ? i = s[f] > 5 || 5 == s[f] && (i || 0 > f || null != s[f + 1] || 1 & s[f - 1]) : 3 === t ? i = i || null != s[f] || 0 > f : (i = !1,
        0 !== t && r("!Big.RM!")),
        1 > f || !s[0])
            e.c = i ? (e.e = -n,
            [1]) : [e.e = 0];
        else {
            if (s.length = f--,
            i)
                for (; ++s[f] > 9; )
                    s[f] = 0,
                    f-- || (++e.e,
                    s.unshift(1));
            for (f = s.length; !s[--f]; s.pop())
                ;
        }
        return e
    }
    function r(e) {
        var n = new Error(e);
        throw n.name = "BigError",
        n
    }
    function i(e, r, i) {
        var s = r - (e = new n(e)).e
          , f = e.c;
        for (f.length > ++r && t(e, s, n.RM),
        s = f[0] ? i ? r : (f = e.c,
        e.e + s + 1) : s + 1; f.length < s; f.push(0))
            ;
        return s = e.e,
        1 == i || 2 == i && (s >= r || o >= s) ? (e.s < 0 && f[0] ? "-" : "") + (f.length > 1 ? (f.splice(1, 0, "."),
        f.join("")) : f[0]) + (0 > s ? "e" : "e+") + s : e.toString()
    }
    /*
   big.js v2.5.2
   A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
   https://github.com/MikeMcl/big.js/
   Copyright (c) 2012 Michael Mclaughlin <M8ch88l@gmail.com>
   MIT Expat Licence
   */
    n.DP = 20,
    n.RM = 1;
    var s = 1e6
      , f = 1e6
      , o = -7
      , u = 21
      , c = n.prototype
      , l = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i
      , h = new n(1);
    c.abs = function() {
        var e = new n(this);
        return e.s = 1,
        e
    }
    ,
    c.cmp = function(e) {
        var t, r = this, i = r.c, s = (e = new n(e)).c, f = r.s, o = e.s, u = r.e, c = e.e;
        if (!i[0] || !s[0])
            return i[0] ? f : s[0] ? -o : 0;
        if (f != o)
            return f;
        if (t = 0 > f,
        u != c)
            return u > c ^ t ? 1 : -1;
        for (f = -1,
        o = (u = i.length) < (c = s.length) ? u : c; ++f < o; )
            if (i[f] != s[f])
                return i[f] > s[f] ^ t ? 1 : -1;
        return u == c ? 0 : u > c ^ t ? 1 : -1
    }
    ,
    c.div = function(e) {
        var i = this
          , f = i.c
          , o = (e = new n(e)).c
          , u = i.s == e.s ? 1 : -1
          , c = n.DP;
        if ((c !== ~~c || 0 > c || c > s) && r("!Big.DP!"),
        !f[0] || !o[0])
            return f[0] == o[0] && r(0 / 0),
            o[0] || r(u / 0),
            new n(0 * u);
        var l, g, a, p, v, w = o.slice(), d = l = o.length, m = f.length, M = f.slice(0, l), P = M.length, R = new n(h), x = R.c = [], D = 0, S = c + (R.e = i.e - e.e) + 1;
        for (R.s = u,
        u = 0 > S ? 0 : S,
        w.unshift(0); P++ < l; M.push(0))
            ;
        do {
            for (a = 0; 10 > a; a++) {
                if (l != (P = M.length))
                    p = l > P ? 1 : -1;
                else
                    for (v = -1,
                    p = 0; ++v < l; )
                        if (o[v] != M[v]) {
                            p = o[v] > M[v] ? 1 : -1;
                            break
                        }
                if (!(0 > p))
                    break;
                for (g = P == l ? o : w; P; ) {
                    if (M[--P] < g[P]) {
                        for (v = P; v && !M[--v]; M[v] = 9)
                            ;
                        --M[v],
                        M[P] += 10
                    }
                    M[P] -= g[P]
                }
                for (; !M[0]; M.shift())
                    ;
            }
            x[D++] = p ? a : ++a,
            M[0] && p ? M[P] = f[d] || 0 : M = [f[d]]
        } while ((d++ < m || null != M[0]) && u--);
        return x[0] || 1 == D || (x.shift(),
        R.e--),
        D > S && t(R, c, n.RM, null != M[0]),
        R
    }
    ,
    c.eq = function(e) {
        return !this.cmp(e)
    }
    ,
    c.gt = function(e) {
        return this.cmp(e) > 0
    }
    ,
    c.gte = function(e) {
        return this.cmp(e) > -1
    }
    ,
    c.lt = function(e) {
        return this.cmp(e) < 0
    }
    ,
    c.lte = function(e) {
        return this.cmp(e) < 1
    }
    ,
    c.minus = function(e) {
        var t, r, i, s, f = this, o = f.s, u = (e = new n(e)).s;
        if (o != u)
            return e.s = -u,
            f.plus(e);
        var c = f.c.slice()
          , l = f.e
          , h = e.c
          , g = e.e;
        if (!c[0] || !h[0])
            return h[0] ? (e.s = -u,
            e) : new n(c[0] ? f : 0);
        if (o = l - g) {
            for (t = (s = 0 > o) ? (o = -o,
            c) : (g = l,
            h),
            t.reverse(),
            u = o; u--; t.push(0))
                ;
            t.reverse()
        } else
            for (i = ((s = c.length < h.length) ? c : h).length,
            o = u = 0; i > u; u++)
                if (c[u] != h[u]) {
                    s = c[u] < h[u];
                    break
                }
        if (s && (t = c,
        c = h,
        h = t,
        e.s = -e.s),
        (u = -((i = c.length) - h.length)) > 0)
            for (; u--; c[i++] = 0)
                ;
        for (u = h.length; u > o; ) {
            if (c[--u] < h[u]) {
                for (r = u; r && !c[--r]; c[r] = 9)
                    ;
                --c[r],
                c[u] += 10
            }
            c[u] -= h[u]
        }
        for (; 0 == c[--i]; c.pop())
            ;
        for (; 0 == c[0]; c.shift(),
        --g)
            ;
        return c[0] || (e.s = 1,
        c = [g = 0]),
        e.c = c,
        e.e = g,
        e
    }
    ,
    c.mod = function(e) {
        e = new n(e);
        var t, i = this, s = i.s, f = e.s;
        return e.c[0] || r(0 / 0),
        i.s = e.s = 1,
        t = 1 == e.cmp(i),
        i.s = s,
        e.s = f,
        t ? new n(i) : (s = n.DP,
        f = n.RM,
        n.DP = n.RM = 0,
        i = i.div(e),
        n.DP = s,
        n.RM = f,
        this.minus(i.times(e)))
    }
    ,
    c.plus = function(e) {
        var t, r = this, i = r.s, s = (e = new n(e)).s;
        if (i != s)
            return e.s = -s,
            r.minus(e);
        var f = r.e
          , o = r.c
          , u = e.e
          , c = e.c;
        if (!o[0] || !c[0])
            return c[0] ? e : new n(o[0] ? r : 0 * i);
        if (o = o.slice(),
        i = f - u) {
            for (t = i > 0 ? (u = f,
            c) : (i = -i,
            o),
            t.reverse(); i--; t.push(0))
                ;
            t.reverse()
        }
        for (o.length - c.length < 0 && (t = c,
        c = o,
        o = t),
        i = c.length,
        s = 0; i; s = (o[--i] = o[i] + c[i] + s) / 10 ^ 0,
        o[i] %= 10)
            ;
        for (s && (o.unshift(s),
        ++u),
        i = o.length; 0 == o[--i]; o.pop())
            ;
        return e.c = o,
        e.e = u,
        e
    }
    ,
    c.pow = function(e) {
        var t = 0 > e
          , i = new n(this)
          , s = h;
        for ((e !== ~~e || -f > e || e > f) && r("!pow!"),
        e = t ? -e : e; 1 & e && (s = s.times(i)),
        e >>= 1,
        e; )
            i = i.times(i);
        return t ? h.div(s) : s
    }
    ,
    c.round = function(e, i) {
        var f = new n(this);
        return null == e ? e = 0 : (e !== ~~e || 0 > e || e > s) && r("!round!"),
        t(f, e, null == i ? n.RM : i),
        f
    }
    ,
    c.sqrt = function() {
        var e, i, s, f = this, o = f.c, u = f.s, c = f.e, l = new n("0.5");
        if (!o[0])
            return new n(f);
        0 > u && r(0 / 0),
        u = Math.sqrt(f.toString()),
        0 == u || u == 1 / 0 ? (e = o.join(""),
        e.length + c & 1 || (e += "0"),
        i = new n(Math.sqrt(e).toString()),
        i.e = ((c + 1) / 2 | 0) - (0 > c || 1 & c)) : i = new n(u.toString()),
        u = i.e + (n.DP += 4);
        do
            s = i,
            i = l.times(s.plus(f.div(s)));
        while (s.c.slice(0, u).join("") !== i.c.slice(0, u).join(""));
        return t(i, n.DP -= 4, n.RM),
        i
    }
    ,
    c.times = function(e) {
        var t, r = this, i = r.c, s = (e = new n(e)).c, f = i.length, o = s.length, u = r.e, c = e.e;
        if (e.s = r.s == e.s ? 1 : -1,
        !i[0] || !s[0])
            return new n(0 * e.s);
        for (e.e = u + c,
        o > f && (t = i,
        i = s,
        s = t,
        c = f,
        f = o,
        o = c),
        c = f + o,
        t = []; c--; t.push(0))
            ;
        for (u = o - 1; u > -1; u--) {
            for (o = 0,
            c = f + u; c > u; o = t[c] + s[u] * i[c - u - 1] + o,
            t[c--] = o % 10 | 0,
            o = o / 10 | 0)
                ;
            o && (t[c] = (t[c] + o) % 10)
        }
        for (o && ++e.e,
        !t[0] && t.shift(),
        c = t.length; !t[--c]; t.pop())
            ;
        return e.c = t,
        e
    }
    ,
    c.toString = c.valueOf = c.toJSON = function() {
        var e = this
          , n = e.e
          , t = e.c.join("")
          , r = t.length;
        if (o >= n || n >= u)
            t = t.charAt(0) + (r > 1 ? "." + t.slice(1) : "") + (0 > n ? "e" : "e+") + n;
        else if (0 > n) {
            for (; ++n; t = "0" + t)
                ;
            t = "0." + t
        } else if (n > 0)
            if (++n > r)
                for (n -= r; n--; t += "0")
                    ;
            else
                r > n && (t = t.slice(0, n) + "." + t.slice(n));
        else
            r > 1 && (t = t.charAt(0) + "." + t.slice(1));
        return e.s < 0 && e.c[0] ? "-" + t : t
    }
    ,
    c.toExponential = function(e) {
        return null == e ? e = this.c.length - 1 : (e !== ~~e || 0 > e || e > s) && r("!toExp!"),
        i(this, e, 1)
    }
    ,
    c.toFixed = function(e) {
        var n, t = this, f = o, c = u;
        return o = -(u = 1 / 0),
        null == e ? n = t.toString() : e === ~~e && e >= 0 && s >= e && (n = i(t, t.e + e),
        t.s < 0 && t.c[0] && n.indexOf("-") < 0 && (n = "-" + n)),
        o = f,
        u = c,
        n || r("!toFix!"),
        n
    }
    ,
    c.toPrecision = function(e) {
        return null == e ? this.toString() : ((e !== ~~e || 1 > e || e > s) && r("!toPre!"),
        i(this, e - 1, 2))
    }
    ,
    "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
        return n
    }) : e.Big = n
}(this);
