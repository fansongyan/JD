/*!
 *description: is to deliver third party ads on imedia platform
 *callback: <script src="cdn/ADcallback.min.js"></script>
 *refer:2.0->imedia2.7, 2.1->imedia2.7.1, 2.2->imedia2.8, 2.2.1->imedia2.8.1
 *date:2014.3.26
 *version:2.2.1
 *email:lei_ding@allyes.com
 */
!function(a) {
    var b = a.document
        , c = "delay.min.js"
        , d = "close.gif"
        , e = function(a) {
        var b = a[a.length - 1];
        return "?" != b && "&" != b && (a += -1 == a.lastIndexOf("?") ? "?" : "&"),
            a
    }
        , f = function(a) {
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    }
    (navigator.userAgent.toLowerCase())
        , g = "msie" === f.browser
        , h = g && "6.0" === f.version
        , i = function(a) {
        return parseInt(a)
    }
        , j = function() {
        var a = !0;
        try {
            a = AllyesDeliver.ins,
                a = a ? a.getAttribute("ads-debug") : null ,
                a = "1" === a || "true" === a
        } catch (b) {}
        return a
    }
        , k = function(b) {
        if (j()) {
            try {
                b = "string" == typeof b ? b : b instanceof Error ? b.message : JSON && JSON.stringify(b)
            } catch (c) {
                b = "JSON undefined!"
            }
            a.console && console.log(b)
        }
    }
        , l = function() {
        return Math.ceil(1e10 * Math.random()).toString(16)
    }
        , m = function(a) {
        var c;
        return a = a || b,
            c = a.getElementsByTagName("script"),
            c.length ? c[c.length - 1] : !1
    }
        , n = function(a, b) {
        var c = null ;
        for (c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
        , o = "js=ie"
        , p = "lsid="
        , q = "sid="
        , r = {
        Head: "javascript",
        Void: "void"
    }
        , s = function(a) {
        k("start callback checking...");
        var b = function() {
            e && (clearInterval(e),
                e = null ),
            f && (clearTimeout(f),
                f = null ),
                k("clear callback checking.")
        }
            , c = 8
            , d = function(a) {
            var e, f, g, h = function() {
                    b(),
                        AllyesDeliver.next("mm")
                }
                ;
            try {
                if (a.frames.length >= c)
                    return void h()
            } catch (i) {}
            for (f = 0,
                     g = a.length; g > f; f++) {
                e = a[f];
                try {
                    if (e.frames.length >= c)
                        return void h();
                    e.frames.length && d(e.frames)
                } catch (i) {}
            }
        }
            , e = setInterval(function() {
                d(a)
            }
            , 50)
            , f = setTimeout(function() {
                b()
            }
            , 5e3);
        return b
    }
        , t = function(a, b) {
        return k("start settimeout..."),
            setTimeout(function(a) {
                var b = u("#" + a)
                    , c = b.getAttribute("ads-tid");
                return function() {
                    k("timeout"),
                        w(c) ? k("has ads.") : AllyesDeliver.next("mm", a)
                }
            }
            (a), b)
    }
        , u = function(a, c) {
        var d = null ;
        return c = c || b,
            0 === a.indexOf("#") ? (a = a.substr(1),
                d = c.getElementById(a)) : (d = c.getElementsByTagName(a),
                d = d.length ? d : null ),
            d
    }
        , v = ["a", "img", "object", "embed", "div", "ins", "span", "iframe", "canvas", "vedio", "svg", "vml"]
        , w = function(a) {
        var b = 0
            , c = v.length
            , d = u("#" + a);
        if (!d)
            return !0;
        for (; c > b; b++)
            if (u(v[b], d))
                return !0;
        return !1
    }
        , x = function(a) {
        return a.parent !== a.self
    }
        , y = function(a) {
        var b;
        try {
            a.document,
                b = !0
        } catch (c) {
            b = !1
        }
        return b
    }
        , z = function() {
        return "undefined" != typeof allyes_wrap_201314 && allyes_wrap_201314
    }
        , A = function(a) {
        return z() ? !1 : x(a) && y(a.parent) && a.parent.AllyesDeliver && a.location.href === a.parent.location.href
    }
        , B = function(a) {
        for (; y(a.parent) && x(a); )
            a = a.parent;
        return {
            win: a
        }
    }
        , C = function() {
        var b, c = "", d = a;
        return x(d) ? (b = B(d),
            c = b.win === d.top ? b.win.location.href : b.win.document.referrer) : c = d.location.href,
            c
    }
        , D = {
        add: function(b, c, d) {
            a.addEventListener ? b.addEventListener(c, d, !1) : a.attachEvent && b.attachEvent("on" + c, d)
        },
        clear: function(b, c, d) {
            a.removeEventListener ? b.removeEventListener(c, d, !1) : a.detachEvent && b.detachEvent("on" + c, d)
        },
        once: function(a, b, c) {
            var d = this
                , e = function() {
                    c.apply(a, arguments),
                        d.clear(a, b, e)
                }
                ;
            d.add(a, b, e)
        }
    }
        , E = function(a, c, d, e) {
        var f;
        if ("string" == typeof a && (a = 0 === a.indexOf("#") ? u(a) : b.createElement(a)),
                !a)
            return null ;
        c = c || {},
            d = d || {};
        for (f in c)
            c.hasOwnProperty(f) && a.setAttribute(f, c[f]);
        if (f = null ,
            "string" == typeof d)
            a.style.cssText = d;
        else
            for (f in d)
                d.hasOwnProperty(f) && (a.style[f] = d[f]);
        return e = e || null ,
        e && (a.innerHTML = e),
            a
    }
        , F = function(a, b) {
        var c, e, f, g = u("#" + a), h = g.getAttribute("ads-outer"), i = g.getAttribute("ads-close"), j = u("#wrap_" + a), k = u("#pos_" + a), l = 19, m = ["margin:0;border:0;padding:0;position:fixed;_position:absolute;z-index:9999;"], n = AllyesDeliver.cdnSrc(d, g), o = "display:block;cursor:pointer;width:34px;height:19px;border:none;margin:0;padding:0;position:absolute;top:0;right:0;z-index:99999;background:transparent url(" + n + ") no-repeat;", p = u("#close_" + a);
        switch (p && p.parentNode.removeChild(p),
            "1" === i ? (e = b[1] + l,
                m.push("width:" + b[0] + "px;height:" + e + "px;"),
                p = E("div", {
                    id: ["close", "_", a].join("")
                }, "position:relative;margin:0;border:0;padding:0;height:" + l + "px;"),
                j.parentNode.insertBefore(p, j),
                f = E("span", null , o),
                p.appendChild(f),
                p = f) : (e = b[1],
                m.push("width:" + b[0] + "px;height:" + b[1] + "px;"),
                p = E("div", {
                    id: ["close", "_", a].join("")
                }, o),
                j.parentNode.insertBefore(p, j)),
            D.add(p, "click", function() {
                    return k.style.display = "none",
                        !1
                }
            ),
        "0" === i && (p.style.display = "none"),
            h) {
            case "1":
                m.push("left:0;top:0;"),
                    m.push("_left:expression(eval(document.documentElement.scrollLeft||document.body.scrollLeft));_top:expression(eval(document.documentElement.scrollTop||document.body.scrollTop));");
                break;
            case "2":
                m.push("right:0;top:0;"),
                    m.push("_left:expression(eval((document.documentElement.scrollLeft||document.body.scrollLeft)+(document.documentElement.clientWidth||document.body.clientWidth)-" + b[0] + "));_top:expression(eval(document.documentElement.scrollTop||document.body.scrollTop));");
                break;
            case "3":
                m.push("right:0;bottom:0;"),
                    m.push("_left:expression(eval((document.documentElement.scrollLeft||document.body.scrollLeft)+(document.documentElement.clientWidth||document.body.clientWidth)-" + b[0] + "));_top:expression(eval((document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)-" + e + "));");
                break;
            case "4":
                m.push("left:0;bottom:0;"),
                    m.push("_left:expression(eval(document.documentElement.scrollLeft||document.body.scrollLeft));_top:expression(eval((document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)-" + e + "));");
                break;
            default:
                c = /^\d+,\d+$/.test(h) ? h.split(",") : [0, 0],
                    m.push("left:" + c[0] + "px;top:" + c[1] + "px;"),
                    m.push("_left:expression(eval((document.documentElement.scrollLeft||document.body.scrollLeft)+" + c[0] + "));_top:expression(eval((document.documentElement.scrollTop||document.body.scrollTop)+" + c[1] + "));")
        }
        m = m.join(""),
            E(k, null , m)
    }
        , G = function(a, b) {
        var c = []
            , d = []
            , e = [];
        if ("0" === a)
            return {
                tdiv: "",
                talign: "",
                body: ""
            };
        switch (b) {
            case "1":
                break;
            case "2":
                c.push("position:absolute;right:0;top:0;"),
                    d.push("text-align:right;"),
                    e.push('align="right"');
                break;
            case "3":
                c.push("position:absolute;right:0;bottom:0;"),
                    d.push("text-align:right;"),
                    e.push('align="right"');
                break;
            case "4":
                c.push("position:absolute;left:0;bottom:0;"),
                    d.push("text-align:left;"),
                    e.push('align="left"');
                break;
            default:
                d.push("text-align:center;"),
                    e.push('align="center"')
        }
        return c = c.join(""),
            d = d.join(""),
            e = e.join(""),
        {
            tdiv: c,
            talign: e,
            body: d
        }
    }
        , H = {
        WIDTH: 300,
        HEIGHT: 250
    };
    "undefined" == typeof a.AllyesGlobal && (a.AllyesGlobal = {}),
        a.AllyesDeliver = {
            _hideForNext: function(a) {
                a = a || null ,
                a && (u("#" + a).style.display = "none")
            },
            _createScript: function() {
                var c, d, e = AllyesDeliver.ins, f = e.getAttribute("id"), h = e.getAttribute("ads-cid"), i = AllyesGlobal[h], j = i.ads, l = function() {
                        A(a) && !g && b.write("</div>")
                    }
                    ;
                if (/google_ad_/i.test(j)) {
                    if (d = C(),
                            k("adx add google_page_url = " + d),
                            i.ads = j.replace(/google_ad_\w+\s*=\s*\S+;/i, function(a) {
                                    return ["google_page_url = ", '"', d, '"', ";", a].join("")
                                }
                            ),
                            k("check adx px..."),
                            c = Math.max(a.screen.width, a.document.body.offsetWidth),
                        c - 2 * i.width < 1024)
                        return l(),
                            k("adx px wrong."),
                            void AllyesDeliver.next("mm");
                    k("adx px right.")
                }
                k(i),
                    b.write(i.ads),
                    l(),
                A(a) && (i._clearCheck = s(a)),
                    e.setAttribute("ads-thandle", t(f, i.levelTimeout))
            },
            _init: function() {
                var d, f, h, j, r, s, t, u, v, w, x, y, z, B = AllyesDeliver.ins ? AllyesDeliver.ins : m();
                if (B) {
                    if (z = B.getAttribute("id") || 0,
                        z || (z = ["allyes_ins_", l()].join(""),
                            B.setAttribute("id", z)),
                            u = B.getAttribute("ads-output"),
                            u = /^[1-2]{1}$/.test(u) ? u : "0",
                            B.setAttribute("ads-output", u),
                        "iframe" === B.getAttribute("ads-type") && "0" === u && (B.setAttribute("ads-output", "1"),
                            B.setAttribute("ads-inner", "1"),
                            B.setAttribute("ads-type", "0"),
                            B.removeAttribute("ads-type")),
                            u = B.getAttribute("ads-output"),
                            v = B.getAttribute("ads-outputs") || "-1",
                        "-1" === v && (B.setAttribute("ads-outputs", u),
                            B.setAttribute("ads-output", 0),
                            B.removeAttribute("ads-output")),
                        "0" !== u)
                        return this._wrapIfm(B),
                            !1;
                    AllyesDeliver.ins = B,
                        j = B.getAttribute("ads-src") || "",
                    j.lastIndexOf(o) < 0 && (j = e(j),
                        j += o),
                        j = j.replace(new RegExp("&" + p + "\\S+"), ""),
                        f = B.getAttribute("ads-sids") || "",
                    f && (j = e(j),
                        f = f.split(","),
                        j += [p, f].join("")),
                        y = B.getAttribute("ads-msid"),
                        y = null  === y ? 0 : y,
                        y = i(y),
                    y > 0 && (j = j.replace(new RegExp("&" + q + "\\S+"), ""),
                        j = e(j),
                        j += [q, y].join("")),
                        d = B.getAttribute("ads-times") || 0,
                        h = [l(), d].join("_"),
                        B.setAttribute("ads-tid", h),
                        w = B.getAttribute("ads-inner") || "5",
                        v = B.getAttribute("ads-outputs"),
                        x = G(v, w),
                        b.write('<div id="' + h + '" ' + x.talign + ' style="padding:0;margin:0;border:0;' + x.tdiv + '">');
                    try {
                        "undefined" != typeof allyes_cid ? (s = parent.AllyesGlobal[allyes_cid],
                            r = AllyesGlobal[allyes_cid] = n({}, s),
                            allyes_cid = void 0,
                            this._createScript()) : b.write('<script type="text/javascript" data-belong="allyes" src="' + j + '"></script>')
                    } catch (C) {
                        k(C)
                    }
                    (!A(a) || g) && (t = this.cdnSrc(c),
                        b.write('<script type="text/javascript" data-belong="allyes" src="' + t + '"></script>'))
                }
            },
            _wrapIfm: function(a) {
                var c, d, e = a.getAttribute("ads-outputs"), f = a.getAttribute("ads-inner"), j = a.getAttribute("ads-outer") || "3", k = a.getAttribute("ads-close") || "1", l = a.getAttribute("id"), m = a.getAttribute("ads-width") || H.WIDTH, n = a.getAttribute("ads-height") || H.HEIGHT, o = b.createElement("iframe"), p = [], q = function() {
                        var b = []
                            , c = a.getAttribute("src")
                            , d = a.getAttribute("ads-src")
                            , g = a.getAttribute("ads-debug") || "0"
                            , h = G(e, f);
                        return b.push("<!DOCTYPE html><html><head>"),
                            b.push('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'),
                            b.push("<style>html,body{padding:0;margin:0;border:0;overflow:hidden;background-color:transparent;" + h.body + "}</style>"),
                            b.push("</head><body>"),
                            b.push('<script type="text/javascript">var allyes_wrap_201314 = true;</script>'),
                            b.push('<script id="' + l + '" ads-debug="' + g + '" ads-outputs="' + e + '" ads-inner="' + f + '" ads-outer="' + j + '" ads-close="' + k + '" type="text/javascript" src="' + c + '" ads-src="' + d + '"></script>'),
                            b.push("</body></html>"),
                            b.join("")
                    }
                    ;
                m = i(m),
                    n = i(n),
                    f = /^[1-5]{1}$/.test(f) ? f : 0,
                f || (f = "2" === e ? "2" : "5"),
                    o.setAttribute("id", ["wrap", "_", l].join("")),
                    a.setAttribute("ads-outer", j),
                    a.setAttribute("ads-inner", f),
                    a.setAttribute("ads-close", k),
                    o.frameBorder = 0,
                    "2" === e ? (h && b.write("<style>*html,*html,body{background-image:url(about:blank);background-attachment:fixed;}</style>"),
                        c = E("div", {
                            id: ["pos", "_", l].join("")
                        }),
                        a.parentNode.insertBefore(c, a),
                        c.appendChild(o)) : a.parentNode.insertBefore(o, a),
                    this._updateOuter(e, l, [m, n]);
                try {
                    d = o.contentWindow,
                        d.document.open(),
                        d.document.write(q())
                } catch (s) {
                    p.push([r.Head, ":", r.Void].join("") + "((function(){"),
                        p.push(" document.open();"),
                        p.push(' document.domain="' + b.domain + '";'),
                        p.push(" document.write('" + q() + "');"),
                        p.push("})())"),
                        o.src = p.join("")
                } finally {
                    g ? setTimeout(function() {
                            try {
                                o.contentWindow.document.close()
                            } catch (a) {}
                        }
                        , 5e3) : d.document.close()
                }
                o.style.cssText = "margin:0;padding:0;border:0;",
                    E(o, {
                        width: m,
                        height: n
                    }),
                    o.scrolling = "no",
                    o.setAttribute("allowtransparency", !0)
            },
            cdnSrc: function(a, b) {
                return "undefined" == typeof AllyesDeliver ? [r.Head, ":", r.Void, "(0)"].join("") : this._cdnSrc(a, b)
            },
            _cdnSrc: function(a, b) {
                var c = AllyesDeliver.ins || b
                    , d = c.getAttribute("src")
                    , e = d.lastIndexOf("/");
                return d = 0 > e ? a : [d.substring(0, e), a].join("/")
            },
            _updateOuter: function(a, b, c) {
                var d, e, f = u("#wrap_" + b);
                E(f, {
                    width: c[0],
                    height: c[1]
                }),
                "1" !== a && (d = u("#pos_" + b),
                    e = d.getAttribute("data-update") || 0,
                    e = i(e),
                e >= 2 || (F(b, c),
                    d.setAttribute("data-update", e + 1)))
            },
            init: function(b) {
                var c, d, e = AllyesDeliver.ins, f = b.cid, g = e.getAttribute("ads-tid");
                b.ads = "string" == typeof b.ads ? b.ads : b.ads.thirdCode,
                    b.maxLevels = i(b.maxLevels),
                    b.levelTimeout = i(b.levelTimeout) || 5,
                    b.levelTimeout *= 1e3,
                    b.width = i(b.width) || H.WIDTH,
                    b.height = i(b.height) || H.HEIGHT,
                    d = e.getAttribute("ads-cid") || 0,
                d || e.setAttribute("ads-cid", f),
                    b = a.AllyesGlobal[f] = n({}, b),
                    c = b.type,
                    "script" === c ? this._createScript() : A(a) ? this._createScript() : (this._hideForNext(g),
                        this._createMM())
            },
            _createMM: function(a) {
                var c, d, e = a && u("#" + a) || AllyesDeliver.ins, f = !!a, h = e.getAttribute("ads-cid"), i = AllyesGlobal[h], j = i.width || H.WIDTH, k = i.height || H.HEIGHT, l = b.createElement("iframe"), m = e.getAttribute("ads-times") || 0, n = [], o = function() {
                        var b = []
                            , d = e.getAttribute("src")
                            , g = e.getAttribute("ads-src")
                            , i = e.getAttribute("ads-sids") || ""
                            , j = e.getAttribute("ads-outputs") || "0"
                            , k = e.getAttribute("ads-debug") || "0"
                            , l = e.getAttribute("ads-inner") || "5"
                            , n = e.getAttribute("ads-outer") || "3"
                            , o = e.getAttribute("ads-close") || "1"
                            , p = G(j, l);
                        return b.push("<!DOCTYPE html><html><head>"),
                            b.push('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'),
                            b.push("<style>html,body{padding:0;margin:0;border:0;overflow:hidden;background-color:transparent;" + p.body + "}</style>"),
                            b.push("</head><body>"),
                        f || b.push('<script type="text/javascript">var allyes_cid = "' + h + '";</script>'),
                            b.push('<script id="' + a + '" ads-msid="' + c + '" ads-debug="' + k + '" ads-outputs="' + j + '" ads-inner="' + l + '" ads-outer="' + n + '" ads-close="' + o + '" ads-cid="' + h + '" type="text/javascript" src="' + d + '" ads-times="' + m + '" ads-sids="' + i + '" ads-src="' + g + '"></script>'),
                            b.push("</body></html>"),
                            b.join("")
                    }
                    ;
                c = e.getAttribute("ads-msid"),
                    c = null  === c ? 0 : c,
                    l.frameBorder = 0,
                    a = e.getAttribute("id"),
                    e.parentNode.insertBefore(l, e),
                    l.setAttribute("id", ["ifm", "_", m, "_", a].join(""));
                try {
                    d = l.contentWindow,
                        d.document.open(),
                        d.document.write(o())
                } catch (p) {
                    n.push([r.Head, ":", r.Void].join("") + "((function(){"),
                        n.push(" document.open();"),
                        n.push(' document.domain="' + b.domain + '";'),
                        n.push(" document.write('" + o() + "');"),
                        n.push("})())"),
                        l.src = n.join("")
                } finally {
                    g ? setTimeout(function() {
                            try {
                                l.contentWindow.document.close()
                            } catch (a) {}
                        }
                        , 5e3) : d.document.close()
                }
                l.style.cssText = "margin:0;padding:0;border:0;width:" + j + "px;height:" + k + "px;",
                    l.scrolling = "no",
                    l.setAttribute("allowtransparency", !0)
            },
            checking: function() {
                var a, b = AllyesDeliver.ins, c = b.getAttribute("ads-cid"), d = AllyesGlobal[c];
                d && (a = d.back,
                a && (d.back = !1,
                    this._init()))
            },
            next: function(b, c) {
                var d, e, f, g, h, l, m, n = c && u("#" + c) || AllyesDeliver.ins, o = n.getAttribute("ads-cid"), p = n.getAttribute("ads-tid"), q = AllyesGlobal[o], r = n.getAttribute("ads-thandle") || 0;
                return c = n.getAttribute("id"),
                    f = n.getAttribute("ads-times") || 0,
                    f = i(f),
                    g = f,
                r && (clearTimeout(i(r)),
                    n.removeAttribute("ads-thandle"),
                    r = null ,
                    k("cancel timeout.")),
                q._clearCheck && (q._clearCheck(),
                    delete q._clearCheck),
                    f > q.maxLevels ? void k("to max levels:" + q.maxLevels) : (this._hideForNext(p),
                        f += 1,
                        n.setAttribute("ads-times", f),
                        l = q.sid,
                        h = n.getAttribute("ads-sids") || "",
                        h = h ? h.split(",").concat(l) : [l],
                        h = h.join(","),
                        n.setAttribute("ads-sids", h),
                        m = "undefined" == typeof q.mm_sid ? 0 : q.mm_sid,
                        n.setAttribute("ads-msid", m),
                        k("next..."),
                        void (A(a) ? (e = parent.document.getElementById(c),
                            e.setAttribute("ads-times", f),
                            e.setAttribute("ads-sids", h),
                            e.setAttribute("ads-msid", m),
                            q.back = !1,
                            d = ["ifm", "_", g, "_", c].join(""),
                            parent.AllyesDeliver._hideForNext(d),
                            parent.AllyesDeliver._createMM(c),
                        j() || parent.AllyesDeliver._clearLast(d)) : "script" === b ? q.back = !0 : (q.back = !1,
                            AllyesDeliver._createMM(c))))
            },
            _clearLast: function(a) {
                var b, c = u("#" + a);
                try {
                    c.src = "about:blank",
                        b = c.contentDocument || c.contentWindow.document,
                        b.write(""),
                        b.close(),
                        c.parentNode.removeChild(c),
                    g && "function" == typeof CollectGarbage && CollectGarbage()
                } catch (d) {
                    k("relase last iframe error...")
                }
            }
        },
        AllyesDeliver._init()
}
(window);
