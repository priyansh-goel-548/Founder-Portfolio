(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 86785, t => {
    "use strict";

    function e(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var n, i, s, a, o, u, l, c, f, h, p, d, _, g, m, v, y, x, b, w, T, k, M, O, C, E, S, A, P = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        D = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        R = 2 * Math.PI,
        z = R / 4,
        F = 0,
        I = Math.sqrt,
        Y = Math.cos,
        B = Math.sin,
        L = function(t) {
            return "string" == typeof t
        },
        X = function(t) {
            return "function" == typeof t
        },
        N = function(t) {
            return "number" == typeof t
        },
        U = function(t) {
            return void 0 === t
        },
        q = function(t) {
            return "object" == typeof t
        },
        H = function(t) {
            return !1 !== t
        },
        W = function() {
            return "u" > typeof window
        },
        V = function(t) {
            return X(t) || L(t)
        },
        j = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        G = Array.isArray,
        Q = /random\([^)]+\)/g,
        Z = /,\s*/g,
        $ = /(?:-?\.?\d|\.)+/gi,
        K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        te = /[+-]=-?[.\d]+/,
        tr = /[^,'"\[\]\s]+/gi,
        tn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ti = {},
        ts = {},
        ta = function(t) {
            return (ts = tI(t, ti)) && rE
        },
        to = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        tu = function(t, e) {
            return !e && console.warn(t)
        },
        tl = function(t, e) {
            return t && (ti[t] = e) && ts && (ts[t] = e) || ti
        },
        tc = function() {
            return 0
        },
        tf = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        th = {
            suppressEvents: !0,
            kill: !1
        },
        tp = {
            suppressEvents: !0
        },
        td = {},
        t_ = [],
        tg = {},
        tm = {},
        tv = {},
        ty = 30,
        tx = [],
        tb = "",
        tw = function(t) {
            var e, r, n = t[0];
            if (q(n) || X(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (r = tx.length; r-- && !tx[r].targetTest(n););
                e = tx[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new eH(t[r], e))) || t.splice(r, 1);
            return t
        },
        tT = function(t) {
            return t._gsap || tw(ea(t))[0]._gsap
        },
        tk = function(t, e, r) {
            return (r = t[e]) && X(r) ? t[e]() : U(r) && t.getAttribute && t.getAttribute(e) || r
        },
        tM = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        tO = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        tC = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        tE = function(t, e) {
            var r = e.charAt(0),
                n = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
        },
        tS = function(t, e) {
            for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r;);
            return n < r
        },
        tA = function() {
            var t, e, r = t_.length,
                n = t_.slice(0);
            for (t = 0, tg = {}, t_.length = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        tP = function(t) {
            return !!(t._initted || t._startAt || t.add)
        },
        tD = function(t, e, r, n) {
            t_.length && !b && tA(), t.render(e, r, n || !!(b && e < 0 && tP(t))), t_.length && !b && tA()
        },
        tR = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(tr).length < 2 ? e : L(t) ? t.trim() : t
        },
        tz = function(t) {
            return t
        },
        tF = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        tI = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        tY = function t(e, r) {
            for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = q(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e
        },
        tB = function(t, e) {
            var r, n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n
        },
        tL = function(t) {
            var e, r = t.parent || T,
                n = t.keyframes ? (e = G(t.keyframes), function(t, r) {
                    for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
                }) : tF;
            if (H(t.inherit))
                for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
            return t
        },
        tX = function(t, e) {
            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
            return r < 0
        },
        tN = function(t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var s, a = t[n];
            if (i)
                for (s = e[i]; a && a[i] > s;) a = a._prev;
            return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e
        },
        tU = function(t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
                s = e._next;
            i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
        },
        tq = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        tH = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        tW = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        tV = function(t, e, r, n) {
            return t._startAt && (b ? t._startAt.revert(th) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
        },
        tj = function(t) {
            return t._repeat ? tG(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        tG = function(t, e) {
            var r = Math.floor(t = tC(t / e));
            return t && r === t ? r - 1 : r
        },
        tQ = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        tZ = function(t) {
            return t._end = tC(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        t$ = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = tC(r._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))), tZ(t), r._dirty || tH(r, t)), t
        },
        tK = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = tQ(t.rawTime(), e), (!e._dur || er(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), tH(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        tJ = function(t, e, r, n) {
            return e.parent && tq(e), e._start = tC((N(r) ? r : r || t !== T ? t7(t, r, e) : t._time) + e._delay), e._end = tC(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), tN(t, e, "_first", "_last", t._sort ? "_start" : 0), t5(e) || (t._recent = e), n || tK(t, e), t._ts < 0 && t$(t, t._tTime), t
        },
        t0 = function(t, e) {
            return (ti.ScrollTrigger || to("scrollTrigger", e)) && ti.ScrollTrigger.create(e, t)
        },
        t1 = function(t, e, r, n, i) {
            return (e5(t, e, i), t._initted) ? !r && t._pt && !b && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && E !== eS.frame ? (t_.push(t), t._lazy = [i, n], 1) : void 0 : 1
        },
        t2 = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
        },
        t5 = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        t3 = function(t, e, r, n) {
            var i, s, a, o = t.ratio,
                u = e < 0 || !e && (!t._start && t2(t) && !(!t._initted && t5(t)) || (t._ts < 0 || t._dp._ts < 0) && !t5(t)) ? 0 : 1,
                l = t._rDelay,
                c = 0;
            if (l && t._repeat && (s = tG(c = er(0, t._tDur, e), l), t._yoyo && 1 & s && (u = 1 - u), s !== tG(t._tTime, l) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || b || n || 1e-8 === t._zTime || !e && t._zTime) {
                if (!t._initted && t1(t, e, n, r, c)) return;
                for (a = t._zTime, t._zTime = e || 1e-8 * !!r, r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
                e < 0 && tV(t, e, r, !0), t._onUpdate && !r && em(t, "onUpdate"), c && t._repeat && !r && t.parent && em(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && tq(t, 1), r || b || (em(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        },
        t8 = function(t, e, r) {
            var n;
            if (r > e)
                for (n = t._first; n && n._start <= r;) {
                    if ("isPause" === n.data && n._start > e) return n;
                    n = n._next
                } else
                    for (n = t._last; n && n._start >= r;) {
                        if ("isPause" === n.data && n._start < e) return n;
                        n = n._prev
                    }
        },
        t6 = function(t, e, r, n) {
            var i = t._repeat,
                s = tC(e) || 0,
                a = t._tTime / t._tDur;
            return a && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : tC(s * (i + 1) + t._rDelay * i) : s, a > 0 && !n && t$(t, t._tTime = t._tDur * a), t.parent && tZ(t), r || tH(t.parent, t), t
        },
        t4 = function(t) {
            return t instanceof eV ? tH(t) : t6(t, t._dur)
        },
        t9 = {
            _start: 0,
            endTime: tc,
            totalDuration: tc
        },
        t7 = function t(e, r, n) {
            var i, s, a, o = e.labels,
                u = e._recent || t9,
                l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
            return L(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === s || ">" === s) ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in o || (o[r] = l), o[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (s = s / 100 * (G(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s) : null == r ? l : +r
        },
        et = function(t, e, r) {
            var n, i, s = N(e[1]),
                a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[a];
            if (s && (o.duration = e[1]), o.parent = r, t) {
                for (n = o, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = H(i.vars.inherit) && i.parent;
                o.immediateRender = H(n.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new rt(e[0], o, e[a + 1])
        },
        ee = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        er = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        en = function(t, e) {
            return L(t) && (e = tn.exec(t)) ? e[1] : ""
        },
        ei = [].slice,
        es = function(t, e) {
            return t && q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && q(t[0])) && !t.nodeType && t !== k
        },
        ea = function(t, e, r) {
            var n;
            return w && !e && w.selector ? w.selector(t) : L(t) && !r && (M || !eA()) ? ei.call((e || O).querySelectorAll(t), 0) : G(t) ? (void 0 === n && (n = []), t.forEach(function(t) {
                var e;
                return L(t) && !r || es(t, 1) ? (e = n).push.apply(e, ea(t)) : n.push(t)
            }) || n) : es(t) ? ei.call(t, 0) : t ? [t] : []
        },
        eo = function(t) {
            return t = ea(t)[0] || tu("Invalid scope") || {},
                function(e) {
                    var r = t.current || t.nativeElement || t;
                    return ea(e, r.querySelectorAll ? r : r === t ? tu("Invalid scope") || O.createElement("div") : t)
                }
        },
        eu = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        el = function(t) {
            if (X(t)) return t;
            var e = q(t) ? t : {
                    each: t
                },
                r = eL(e.ease),
                n = e.from || 0,
                i = parseFloat(e.base) || 0,
                s = {},
                a = n > 0 && n < 1,
                o = isNaN(n) || a,
                u = e.axis,
                l = n,
                c = n;
            return L(n) ? l = c = ({
                    center: .5,
                    edges: .5,
                    end: 1
                })[n] || 0 : !a && o && (l = n[0], c = n[1]),
                function(t, a, f) {
                    var h, p, d, _, g, m, v, y, x, b = (f || e).length,
                        w = s[b];
                    if (!w) {
                        if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (v = -1e8; v < (v = f[x++].getBoundingClientRect().left) && x < b;);
                            x < b && x--
                        }
                        for (m = 0, w = s[b] = [], h = o ? Math.min(x, b) * l - .5 : n % x, p = 1e8 === x ? 0 : o ? b * c / x - .5 : n / x | 0, v = 0, y = 1e8; m < b; m++) d = m % x - h, _ = p - (m / x | 0), w[m] = g = u ? Math.abs("y" === u ? _ : d) : I(d * d + _ * _), g > v && (v = g), g < y && (y = g);
                        "random" === n && eu(w), w.max = v - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : u ? "y" === u ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === n ? -1 : 1), w.b = b < 0 ? i - b : i, w.u = en(e.amount || e.each) || 0, r = r && b < 0 ? eY(r) : r
                    }
                    return b = (w[t] - w.min) / w.max || 0, tC(w.b + (r ? r(b) : b) * w.v) + w.u
                }
        },
        ec = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var n = tC(Math.round(parseFloat(r) / t) * t * e);
                return (n - n % 1) / e + (N(r) ? 0 : en(r))
            }
        },
        ef = function(t, e) {
            var r, n, i = G(t);
            return !i && q(t) && (r = i = t.radius || 1e8, t.values ? (n = !N((t = ea(t.values))[0])) && (r *= r) : t = ec(t.increment)), ee(e, i ? X(t) ? function(e) {
                return Math.abs((n = t(e)) - e) <= r ? n : e
            } : function(e) {
                for (var i, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), u = 1e8, l = 0, c = t.length; c--;)(i = n ? (i = t[c].x - a) * i + (s = t[c].y - o) * s : Math.abs(t[c] - a)) < u && (u = i, l = c);
                return l = !r || u <= r ? t[l] : e, n || l === e || N(e) ? l : l + en(e)
            } : ec(t))
        },
        eh = function(t, e, r, n) {
            return ee(G(t) ? !e : !0 === r ? (r = 0, !1) : !n, function() {
                return G(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
            })
        },
        ep = function(t, e, r) {
            return ee(r, function(r) {
                return t[~~e(r)]
            })
        },
        ed = function(t) {
            return t.replace(Q, function(t) {
                var e = t.indexOf("[") + 1,
                    r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(Z);
                return eh(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
            })
        },
        e_ = function(t, e, r, n, i) {
            var s = e - t,
                a = n - r;
            return ee(i, function(e) {
                return r + ((e - t) / s * a || 0)
            })
        },
        eg = function(t, e, r) {
            var n, i, s, a = t.labels,
                o = 1e8;
            for (n in a)(i = a[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (s = n, o = i);
            return s
        },
        em = function(t, e, r) {
            var n, i, s, a = t.vars,
                o = a[e],
                u = w,
                l = t._ctx;
            if (o) return n = a[e + "Params"], i = a.callbackScope || t, r && t_.length && tA(), l && (w = l), s = n ? o.apply(i, n) : o.call(i), w = u, s
        },
        ev = function(t) {
            return tq(t), t.scrollTrigger && t.scrollTrigger.kill(!!b), 1 > t.progress() && em(t, "onInterrupt"), t
        },
        ey = [],
        ex = function(t) {
            if (t)
                if (t = !t.name && t.default || t, W() || t.headless) {
                    var e = t.name,
                        r = X(t),
                        n = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        i = {
                            init: tc,
                            render: rl,
                            add: e0,
                            kill: rf,
                            modifier: rc,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: rs,
                            aliases: {},
                            register: 0
                        };
                    if (eA(), t !== n) {
                        if (tm[e]) return;
                        tF(n, tF(tB(t, i), s)), tI(n.prototype, tI(i, tB(t, s))), tm[n.prop = e] = n, t.targetTest && (tx.push(n), td[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    tl(e, n), t.register && t.register(rE, n, rd)
                } else ey.push(t)
        },
        eb = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ew = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
        },
        eT = function(t, e, r) {
            var n, i, s, a, o, u, l, c, f, h, p = t ? N(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : eb.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), eb[t]) p = eb[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), t = "#" + n + n + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = h = t.match($), e) {
                        if (~t.indexOf("=")) return p = t.match(K), r && p.length < 4 && (p[3] = 1), p
                    } else a = p[0] % 360 / 360, o = p[1] / 100, i = (u = p[2] / 100) <= .5 ? u * (o + 1) : u + o - u * o, n = 2 * u - i, p.length > 3 && (p[3] *= 1), p[0] = ew(a + 1 / 3, n, i), p[1] = ew(a, n, i), p[2] = ew(a - 1 / 3, n, i);
                else p = t.match($) || eb.transparent;
                p = p.map(Number)
            }
            return e && !h && (n = p[0] / 255, u = ((l = Math.max(n, i = p[1] / 255, s = p[2] / 255)) + (c = Math.min(n, i, s))) / 2, l === c ? a = o = 0 : (f = l - c, o = u > .5 ? f / (2 - l - c) : f / (l + c), a = (l === n ? (i - s) / f + 6 * (i < s) : l === i ? (s - n) / f + 2 : (n - i) / f + 4) * 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        ek = function(t) {
            var e = [],
                r = [],
                n = -1;
            return t.split(eO).forEach(function(t) {
                var i = t.match(J) || [];
                e.push.apply(e, i), r.push(n += i.length + 1)
            }), e.c = r, e
        },
        eM = function(t, e, r) {
            var n, i, s, a, o = "",
                u = (t + o).match(eO),
                l = e ? "hsla(" : "rgba(",
                c = 0;
            if (!u) return t;
            if (u = u.map(function(t) {
                    return (t = eT(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), r && (s = ek(t), (n = r.c).join(o) !== s.c.join(o)))
                for (a = (i = t.replace(eO, "1").split(J)).length - 1; c < a; c++) o += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
            if (!i)
                for (a = (i = t.split(eO)).length - 1; c < a; c++) o += i[c] + u[c];
            return o + i[a]
        },
        eO = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in eb) e += "|" + t + "\\b";
            return RegExp(e + ")", "gi")
        }(),
        eC = /hsl[a]?\(/,
        eE = function(t) {
            var e, r = t.join(" ");
            if (eO.lastIndex = 0, eO.test(r)) return e = eC.test(r), t[1] = eM(t[1], e), t[0] = eM(t[0], e, ek(t[1])), !0
        },
        eS = (f = Date.now, h = 500, p = 33, _ = d = f(), g = 1e3 / 240, m = 1e3 / 240, v = [], y = function t(e) {
            var r, n, i, o, y = f() - _,
                x = !0 === e;
            if ((y > h || y < 0) && (d += y - p), _ += y, ((r = (i = _ - d) - m) > 0 || x) && (o = ++u.frame, l = i - 1e3 * u.time, u.time = i /= 1e3, m += r + (r >= g ? 4 : g - r), n = 1), x || (s = a(t)), n)
                for (c = 0; c < v.length; c++) v[c](i, l, o, e)
        }, u = {
            time: 0,
            frame: 0,
            tick: function() {
                y(!0)
            },
            deltaRatio: function(t) {
                return l / (1e3 / (t || 60))
            },
            wake: function() {
                C && (!M && W() && (O = (k = M = window).document || {}, ti.gsap = rE, (k.gsapVersions || (k.gsapVersions = [])).push(rE.version), ta(ts || k.GreenSockGlobals || !k.gsap && k || {}), ey.forEach(ex)), o = "u" > typeof requestAnimationFrame && requestAnimationFrame, s && u.sleep(), a = o || function(t) {
                    return setTimeout(t, m - 1e3 * u.time + 1 | 0)
                }, A = 1, y(2))
            },
            sleep: function() {
                (o ? cancelAnimationFrame : clearTimeout)(s), A = 0, a = tc
            },
            lagSmoothing: function(t, e) {
                p = Math.min(e || 33, h = t || 1 / 0)
            },
            fps: function(t) {
                g = 1e3 / (t || 240), m = 1e3 * u.time + g
            },
            add: function(t, e, r) {
                var n = e ? function(e, r, i, s) {
                    t(e, r, i, s), u.remove(n)
                } : t;
                return u.remove(t), v[r ? "unshift" : "push"](n), eA(), n
            },
            remove: function(t, e) {
                ~(e = v.indexOf(t)) && v.splice(e, 1) && c >= e && c--
            },
            _listeners: v
        }),
        eA = function() {
            return !A && eS.wake()
        },
        eP = {},
        eD = /^[\d.\-M][\d.\-,\s]/,
        eR = /["']/g,
        ez = function(t) {
            for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[a] = isNaN(n) ? n.replace(eR, "").trim() : +n, a = r.substr(e + 1).trim();
            return i
        },
        eF = function(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                n = t.indexOf("(", e);
            return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
        },
        eI = function(t) {
            var e = (t + "").split("("),
                r = eP[e[0]];
            return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ez(e[1])] : eF(t).split(",").map(tR)) : eP._CE && eD.test(t) ? eP._CE("", t) : r
        },
        eY = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        eB = function t(e, r) {
            for (var n, i = e._first; i;) i instanceof eV ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
        },
        eL = function(t, e) {
            return t && (X(t) ? t : eP[t] || eI(t)) || e
        },
        eX = function(t, e, r, n) {
            void 0 === r && (r = function(t) {
                return 1 - e(1 - t)
            }), void 0 === n && (n = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
            });
            var i, s = {
                easeIn: e,
                easeOut: r,
                easeInOut: n
            };
            return tM(t, function(t) {
                for (var e in eP[t] = ti[t] = s, eP[i = t.toLowerCase()] = r, s) eP[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eP[t + "." + e] = s[e]
            }), s
        },
        eN = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
            }
        },
        eU = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
                s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                a = s / R * (Math.asin(1 / i) || 0),
                o = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * B((t - a) * s) + 1
                },
                u = "out" === e ? o : "in" === e ? function(t) {
                    return 1 - o(1 - t)
                } : eN(o);
            return s = R / s, u.config = function(r, n) {
                return t(e, r, n)
            }, u
        },
        eq = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function(t) {
                    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                },
                i = "out" === e ? n : "in" === e ? function(t) {
                    return 1 - n(1 - t)
                } : eN(n);
            return i.config = function(r) {
                return t(e, r)
            }, i
        };
    tM("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        eX(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
        })
    }), eP.Linear.easeNone = eP.none = eP.Linear.easeIn, eX("Elastic", eU("in"), eU("out"), eU()), eG = 2 * (ej = 1 / 2.75), eQ = 2.5 * ej, eX("Bounce", function(t) {
        return 1 - eZ(1 - t)
    }, eZ = function(t) {
        return t < ej ? 7.5625 * t * t : t < eG ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < eQ ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }), eX("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), eX("Circ", function(t) {
        return -(I(1 - t * t) - 1)
    }), eX("Sine", function(t) {
        return 1 === t ? 1 : -Y(t * z) + 1
    }), eX("Back", eq("in"), eq("out"), eq()), eP.SteppedEase = eP.steps = ti.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + +!e,
                i = +!!e,
                s = .99999999;
            return function(t) {
                return ((n * er(0, s, t) | 0) + i) * r
            }
        }
    }, D.ease = eP["quad.out"], tM("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return tb += t + "," + t + "Params,"
    });
    var eH = function(t, e) {
            this.id = F++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : tk, this.set = e ? e.getSetter : rs
        },
        eW = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, t6(this, +t.duration, 1, 1), this.data = t.data, w && (this._ctx = w, w.data.push(this)), A || eS.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, t6(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (eA(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (t$(this, t), !r._dp || r.parent || tK(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && tJ(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), tD(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + tj(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + tj(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
            }, e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? tG(this._tTime, r) + 1 : 1
            }, e.timeScale = function(t, e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var r = this.parent && this._ts ? tQ(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(er(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), tZ(this), tW(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (eA(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = tC(t);
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && tJ(e, this, this._start - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (H(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tQ(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = tp);
                var e = b;
                return b = t, tP(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), b = e, this
            }, e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, t4(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, t4(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(t7(this, t), H(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, H(e)), this._dur || (this._zTime = -1e-8), this
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    r = this._start;
                return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8)
            }, e.eventCallback = function(t, e, r) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
            }, e.then = function(t) {
                var e = this,
                    r = e._prom;
                return new Promise(function(n) {
                    var i = X(t) ? t : tz,
                        s = function() {
                            var t = e.then;
                            e.then = null, r && r(), X(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
                })
            }, e.kill = function() {
                ev(this)
            }, t
        }();
    tF(eW.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var eV = function(t) {
        function n(r, n) {
            var i;
            return void 0 === r && (r = {}), (i = t.call(this, r) || this).labels = {}, i.smoothChildTiming = !!r.smoothChildTiming, i.autoRemoveChildren = !!r.autoRemoveChildren, i._sort = H(r.sortChildren), T && tJ(r.parent || T, e(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), r.scrollTrigger && t0(e(i), r.scrollTrigger), i
        }
        r(n, t);
        var i = n.prototype;
        return i.to = function(t, e, r) {
            return et(0, arguments, this), this
        }, i.from = function(t, e, r) {
            return et(1, arguments, this), this
        }, i.fromTo = function(t, e, r, n) {
            return et(2, arguments, this), this
        }, i.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, tL(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rt(t, e, t7(this, r), 1), this
        }, i.call = function(t, e, r) {
            return tJ(this, rt.delayedCall(0, t, e), r)
        }, i.staggerTo = function(t, e, r, n, i, s, a) {
            return r.duration = e, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new rt(t, r, t7(this, i)), this
        }, i.staggerFrom = function(t, e, r, n, i, s, a) {
            return r.runBackwards = 1, tL(r).immediateRender = H(r.immediateRender), this.staggerTo(t, e, r, n, i, s, a)
        }, i.staggerFromTo = function(t, e, r, n, i, s, a, o) {
            return n.startAt = r, tL(n).immediateRender = H(n.immediateRender), this.staggerTo(t, e, n, i, s, a, o)
        }, i.render = function(t, e, r) {
            var n, i, s, a, o, u, l, c, f, h, p, d, _ = this._time,
                g = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = t <= 0 ? 0 : tC(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (this !== T && v > g && t >= 0 && (v = g), v !== this._tTime || r || y) {
                if (_ !== this._time && m && (v += this._time - _, t += this._time - _), n = v, f = this._start, u = !(c = this._ts), y && (m || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, o = m + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (n = tC(v % o), v === g ? (a = this._repeat, n = m) : ((a = ~~(h = tC(v / o))) && a === h && (n = m, a--), n > m && (n = m)), h = tG(this._tTime, o), !_ && this._tTime && h !== a && this._tTime - h * o - this._dur <= 0 && (h = a), p && 1 & a && (n = m - n, d = 1), a !== h && !this._lock) {
                        var x = p && 1 & h,
                            w = x === (p && 1 & a);
                        if (a < h && (x = !x), _ = x ? 0 : v % m ? m : v, this._lock = 1, this.render(_ || (d ? 0 : tC(a * o)), e, !m)._lock = 0, this._tTime = v, !e && this.parent && em(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1, h = a), _ && _ !== this._time || !this._ts !== u || this.vars.onRepeat && !this.parent && !this._act || (m = this._dur, g = this._tDur, w && (this._lock = 2, _ = x ? m : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !u)) return this;
                        eB(this, d)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = t8(this, tC(_), tC(n))) && (v -= n - (n = l._start)), this._tTime = v, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && v && m && !e && !h && (em(this, "onStart"), this._tTime !== v)) return this;
                if (n >= _ && t >= 0)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                                l = 0, s && (v += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = s
                    } else {
                        i = this._last;
                        for (var k = t < 0 ? t : n; i;) {
                            if (s = i._prev, (i._act || k <= i._end) && i._ts && l !== i) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if (i.render(i._ts > 0 ? (k - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (k - i._start) * i._ts, e, r || b && tP(i)), n !== this._time || !this._ts && !u) {
                                    l = 0, s && (v += this._zTime = k ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = s
                        }
                    }
                if (l && !e && (this.pause(), l.render(n >= _ ? 0 : -1e-8)._zTime = n >= _ ? 1 : -1, this._ts)) return this._start = f, tZ(this), this.render(t, e, r);
                this._onUpdate && !e && em(this, "onUpdate", !0), (v === g && this._tTime >= this.totalDuration() || !v && _) && (f === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((t || !m) && (v === g && this._ts > 0 || !v && this._ts < 0) && tq(this, 1), e || t < 0 && !_ || !v && !_ && g || (em(this, v === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < g && this.timeScale() > 0) && this._prom()))
            }
            return this
        }, i.add = function(t, e) {
            var r = this;
            if (N(e) || (e = t7(this, e, t)), !(t instanceof eW)) {
                if (G(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (L(t)) return this.addLabel(t, e);
                if (!X(t)) return this;
                t = rt.delayedCall(0, t)
            }
            return this !== t ? tJ(this, t, e) : this
        }, i.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
            for (var i = [], s = this._first; s;) s._start >= n && (s instanceof rt ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))), s = s._next;
            return i
        }, i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, i.remove = function(t) {
            return L(t) ? this.removeLabel(t) : X(t) ? this.killTweensOf(t) : (t.parent === this && tU(this, t), t === this._recent && (this._recent = this._last), tH(this))
        }, i.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = tC(eS.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, i.addLabel = function(t, e) {
            return this.labels[t] = t7(this, e), this
        }, i.removeLabel = function(t) {
            return delete this.labels[t], this
        }, i.addPause = function(t, e, r) {
            var n = rt.delayedCall(0, e || tc, r);
            return n.data = "isPause", this._hasPause = 1, tJ(this, n, t7(this, t))
        }, i.removePause = function(t) {
            var e = this._first;
            for (t = t7(this, t); e;) e._start === t && "isPause" === e.data && tq(e), e = e._next
        }, i.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--;) e$ !== n[i] && n[i].kill(t, e);
            return this
        }, i.getTweensOf = function(t, e) {
            for (var r, n = [], i = ea(t), s = this._first, a = N(e); s;) s instanceof rt ? tS(s._targets, i) && (a ? (!e$ || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r), s = s._next;
            return n
        }, i.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this,
                i = t7(n, t),
                s = e,
                a = s.startAt,
                o = s.onStart,
                u = s.onStartParams,
                l = s.immediateRender,
                c = rt.to(n, tF({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        if (n.pause(), !r) {
                            var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
                            c._dur !== t && t6(c, t, 0, 1).render(c._time, !0, !0), r = 1
                        }
                        o && o.apply(c, u || [])
                    }
                }, e));
            return l ? c.render(0) : c
        }, i.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, tF({
                startAt: {
                    time: t7(this, t)
                }
            }, r))
        }, i.recent = function() {
            return this._recent
        }, i.nextLabel = function(t) {
            return void 0 === t && (t = this._time), eg(this, t7(this, t))
        }, i.previousLabel = function(t) {
            return void 0 === t && (t = this._time), eg(this, t7(this, t), 1)
        }, i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, i.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var n, i = this._first,
                s = this.labels;
            for (t = tC(t); i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (n in s) s[n] >= r && (s[n] += t);
            return tH(this)
        }, i.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(e), r = r._next;
            return t.prototype.invalidate.call(this, e)
        }, i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), tH(this)
        }, i.totalDuration = function(t) {
            var e, r, n, i = 0,
                s = this._last,
                a = 1e8;
            if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (n = this.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && this._sort && s._ts && !this._lock ? (this._lock = 1, tJ(this, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (i -= r, (!n && !this._dp || n && n.smoothChildTiming) && (this._start += tC(r / this._ts), this._time -= r, this._tTime -= r), this.shiftChildren(-r, !1, -Infinity), a = 0), s._end > i && s._ts && (i = s._end), s = e;
                t6(this, this === T && this._time > i ? this._time : i, 1, 1), this._dirty = 0
            }
            return this._tDur
        }, n.updateRoot = function(t) {
            if (T._ts && (tD(T, tQ(t, T)), E = eS.frame), eS.frame >= ty) {
                ty += P.autoSleep || 120;
                var e = T._first;
                if ((!e || !e._ts) && P.autoSleep && eS._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || eS.sleep()
                }
            }
        }, n
    }(eW);
    tF(eV.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var ej, eG, eQ, eZ, e$, eK, eJ = function(t, e, r, n, i, s, a) {
            var o, u, l, c, f, h, p, d, _ = new rd(this._pt, t, e, 0, 1, ru, null, i),
                g = 0,
                m = 0;
            for (_.b = r, _.e = n, r += "", n += "", (p = ~n.indexOf("random(")) && (n = ed(n)), s && (s(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(tt) || []; o = tt.exec(n);) c = o[0], f = n.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (h = parseFloat(u[m - 1]) || 0, _._pt = {
                _next: _._pt,
                p: f || 1 === m ? f : ",",
                s: h,
                c: "=" === c.charAt(1) ? tE(h, c) - h : parseFloat(c) - h,
                m: l && l < 4 ? Math.round : 0
            }, g = tt.lastIndex);
            return _.c = g < n.length ? n.substring(g, n.length) : "", _.fp = a, (te.test(n) || p) && (_.e = 0), this._pt = _, _
        },
        e0 = function(t, e, r, n, i, s, a, o, u, l) {
            X(n) && (n = n(i || 0, t, s));
            var c, f = t[e],
                h = "get" !== r ? r : X(f) ? u ? t[e.indexOf("set") || !X(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                p = X(f) ? u ? rn : rr : re;
            if (L(n) && (~n.indexOf("random(") && (n = ed(n)), "=" === n.charAt(1) && ((c = tE(h, n) + (en(h) || 0)) || 0 === c) && (n = c)), !l || h !== n || eK) return isNaN(h * n) || "" === n ? (f || e in t || to(e, n), eJ.call(this, t, e, h, n, p, o || P.stringFilter, u)) : (c = new rd(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof f ? ro : ra, 0, p), u && (c.fp = u), a && c.modifier(a, this, t), this._pt = c)
        },
        e1 = function(t, e, r, n, i) {
            if (X(t) && (t = e4(t, i, e, r, n)), !q(t) || t.style && t.nodeType || G(t) || j(t)) return L(t) ? e4(t, i, e, r, n) : t;
            var s, a = {};
            for (s in t) a[s] = e4(t[s], i, e, r, n);
            return a
        },
        e2 = function(t, e, r, n, i, s) {
            var a, o, u, l;
            if (tm[t] && !1 !== (a = new tm[t]).init(i, a.rawVars ? e[t] : e1(e[t], n, i, s, r), r, n, s) && (r._pt = o = new rd(r._pt, i, t, 0, 1, a.render, a, 0, a.priority), r !== S))
                for (u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length; l--;) u[a._props[l]] = o;
            return a
        },
        e5 = function t(e, r, n) {
            var i, s, a, o, u, l, c, f, h, p, d, _, g, m = e.vars,
                v = m.ease,
                y = m.startAt,
                w = m.immediateRender,
                k = m.lazy,
                M = m.onUpdate,
                O = m.runBackwards,
                C = m.yoyoEase,
                E = m.keyframes,
                S = m.autoRevert,
                A = e._dur,
                P = e._startAt,
                R = e._targets,
                z = e.parent,
                F = z && "nested" === z.data ? z.vars.targets : R,
                I = "auto" === e._overwrite && !x,
                Y = e.timeline;
            if (!Y || E && v || (v = "none"), e._ease = eL(v, D.ease), e._yEase = C ? eY(eL(!0 === C ? v : C, D.ease)) : 0, C && e._yoyo && !e._repeat && (C = e._yEase, e._yEase = e._ease, e._ease = C), e._from = !Y && !!m.runBackwards, !Y || E && !m.stagger) {
                if (_ = (f = R[0] ? tT(R[0]).harness : 0) && m[f.prop], i = tB(m, td), P && (P._zTime < 0 && P.progress(1), r < 0 && O && w && !S ? P.render(-1, !0) : P.revert(O && A ? th : tf), P._lazy = 0), y) {
                    if (tq(e._startAt = rt.set(R, tF({
                            data: "isStart",
                            overwrite: !1,
                            parent: z,
                            immediateRender: !0,
                            lazy: !P && H(k),
                            startAt: null,
                            delay: 0,
                            onUpdate: M && function() {
                                return em(e, "onUpdate")
                            },
                            stagger: 0
                        }, y))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (b || !w && !S) && e._startAt.revert(th), w && A && r <= 0 && n <= 0) {
                        r && (e._zTime = r);
                        return
                    }
                } else if (O && A && !P)
                    if (r && (w = !1), a = tF({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: w && !P && H(k),
                            immediateRender: w,
                            stagger: 0,
                            parent: z
                        }, i), _ && (a[f.prop] = _), tq(e._startAt = rt.set(R, a)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (b ? e._startAt.revert(th) : e._startAt.render(-1, !0)), e._zTime = r, w) {
                        if (!r) return
                    } else t(e._startAt, 1e-8, 1e-8);
                for (s = 0, e._pt = e._ptCache = 0, k = A && H(k) || k && !A; s < R.length; s++) {
                    if (c = (u = R[s])._gsap || tw(R)[s]._gsap, e._ptLookup[s] = p = {}, tg[c.id] && t_.length && tA(), d = F === R ? s : F.indexOf(u), f && !1 !== (h = new f).init(u, _ || i, e, d, F) && (e._pt = o = new rd(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority), h._props.forEach(function(t) {
                            p[t] = o
                        }), h.priority && (l = 1)), !f || _)
                        for (a in i) tm[a] && (h = e2(a, i, e, d, u, F)) ? h.priority && (l = 1) : p[a] = o = e0.call(e, u, a, "get", i[a], d, F, 0, m.stringFilter);
                    e._op && e._op[s] && e.kill(u, e._op[s]), I && e._pt && (e$ = e, T.killTweensOf(u, p, e.globalTime(r)), g = !e.parent, e$ = 0), e._pt && k && (tg[c.id] = 1)
                }
                l && rp(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = M, e._initted = (!e._op || e._pt) && !g, E && r <= 0 && Y.render(1e8, !0, !0)
        },
        e3 = function(t, e, r, n, i, s, a, o) {
            var u, l, c, f, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!h)
                for (h = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length; f--;) {
                    if ((u = c[f][e]) && u.d && u.d._pt)
                        for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                    if (!u) return eK = 1, t.vars[e] = "+=0", e5(t, a), eK = 0, o ? tu(e + " not eligible for reset") : 1;
                    h.push(u)
                }
            for (f = h.length; f--;)(u = (l = h[f])._pt || l).s = (n || 0 === n) && !i ? n : u.s + (n || 0) + s * u.c, u.c = r - u.s, l.e && (l.e = tO(r) + en(l.e)), l.b && (l.b = u.s + en(l.b))
        },
        e8 = function(t, e) {
            var r, n, i, s, a = t[0] ? tT(t[0]).harness : 0,
                o = a && a.aliases;
            if (!o) return e;
            for (n in r = tI({}, e), o)
                if (n in r)
                    for (i = (s = o[n].split(",")).length; i--;) r[s[i]] = r[n];
            return r
        },
        e6 = function(t, e, r, n) {
            var i, s, a = e.ease || n || "power1.inOut";
            if (G(e)) s = r[t] || (r[t] = []), e.forEach(function(t, r) {
                return s.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
            else
                for (i in e) s = r[i] || (r[i] = []), "ease" === i || s.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: a
                })
        },
        e4 = function(t, e, r, n, i) {
            return X(t) ? t.call(e, r, n, i) : L(t) && ~t.indexOf("random(") ? ed(t) : t
        },
        e9 = tb + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        e7 = {};
    tM(e9 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return e7[t] = 1
    });
    var rt = function(t) {
        function n(r, n, i, s) {
            "number" == typeof n && (i.duration = n, n = i, i = null);
            var a, o, u, l, c, f, h, p, d = t.call(this, s ? n : tL(n)) || this,
                _ = d.vars,
                g = _.duration,
                m = _.delay,
                v = _.immediateRender,
                y = _.stagger,
                b = _.overwrite,
                w = _.keyframes,
                k = _.defaults,
                M = _.scrollTrigger,
                O = _.yoyoEase,
                C = n.parent || T,
                E = (G(r) || j(r) ? N(r[0]) : "length" in n) ? [r] : ea(r);
            if (d._targets = E.length ? tw(E) : tu("GSAP target " + r + " not found. https://gsap.com", !P.nullTargetWarn) || [], d._ptLookup = [], d._overwrite = b, w || y || V(g) || V(m)) {
                if (n = d.vars, (a = d.timeline = new eV({
                        data: "nested",
                        defaults: k || {},
                        targets: C && "nested" === C.data ? C.vars.targets : E
                    })).kill(), a.parent = a._dp = e(d), a._start = 0, y || V(g) || V(m)) {
                    if (l = E.length, h = y && el(y), q(y))
                        for (c in y) ~e9.indexOf(c) && (p || (p = {}), p[c] = y[c]);
                    for (o = 0; o < l; o++)(u = tB(n, e7)).stagger = 0, O && (u.yoyoEase = O), p && tI(u, p), f = E[o], u.duration = +e4(g, e(d), o, f, E), u.delay = (+e4(m, e(d), o, f, E) || 0) - d._delay, !y && 1 === l && u.delay && (d._delay = m = u.delay, d._start += m, u.delay = 0), a.to(f, u, h ? h(o, f, E) : 0), a._ease = eP.none;
                    a.duration() ? g = m = 0 : d.timeline = 0
                } else if (w) {
                    tL(tF(a.vars.defaults, {
                        ease: "none"
                    })), a._ease = eL(w.ease || n.ease || "none");
                    var S, A, D, R = 0;
                    if (G(w)) w.forEach(function(t) {
                        return a.to(E, t, ">")
                    }), a.duration();
                    else {
                        for (c in u = {}, w) "ease" === c || "easeEach" === c || e6(c, w[c], u, w.easeEach);
                        for (c in u)
                            for (o = 0, S = u[c].sort(function(t, e) {
                                    return t.t - e.t
                                }), R = 0; o < S.length; o++)(D = {
                                ease: (A = S[o]).e,
                                duration: (A.t - (o ? S[o - 1].t : 0)) / 100 * g
                            })[c] = A.v, a.to(E, D, R), R += D.duration;
                        a.duration() < g && a.to({}, {
                            duration: g - a.duration()
                        })
                    }
                }
                g || d.duration(g = a.duration())
            } else d.timeline = 0;
            return !0 !== b || x || (e$ = e(d), T.killTweensOf(E), e$ = 0), tJ(C, e(d), i), n.reversed && d.reverse(), n.paused && d.paused(!0), (v || !g && !w && d._start === tC(C._time) && H(v) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(e(d)) && "nested" !== C.data) && (d._tTime = -1e-8, d.render(Math.max(0, -m) || 0)), M && t0(e(d), M), d
        }
        r(n, t);
        var i = n.prototype;
        return i.render = function(t, e, r) {
            var n, i, s, a, o, u, l, c, f, h = this._time,
                p = this._tDur,
                d = this._dur,
                _ = t < 0,
                g = t > p - 1e-8 && !_ ? p : t < 1e-8 ? 0 : t;
            if (d) {
                if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _ || this._lazy) {
                    if (n = g, c = this.timeline, this._repeat) {
                        if (a = d + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * a + t, e, r);
                        if (n = tC(g % a), g === p ? (s = this._repeat, n = d) : (s = ~~(o = tC(g / a))) && s === o ? (n = d, s--) : n > d && (n = d), (u = this._yoyo && 1 & s) && (f = this._yEase, n = d - n), o = tG(this._tTime, a), n === h && !r && this._initted && s === o) return this._tTime = g, this;
                        s !== o && (c && this._yEase && eB(c, u), this.vars.repeatRefresh && !u && !this._lock && n !== a && this._initted && (this._lock = r = 1, this.render(tC(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (t1(this, _ ? t : n, r, e, g)) return this._tTime = 0, this;
                        if (h !== this._time && !(r && this.vars.repeatRefresh && s !== o)) return this;
                        if (d !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(n / d), this._from && (this.ratio = l = 1 - l), !h && g && !e && !o && (em(this, "onStart"), this._tTime !== g)) return this;
                    for (i = this._pt; i;) i.r(l, i.d), i = i._next;
                    c && c.render(t < 0 ? t : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && tV(this, t, e, r), em(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && em(this, "onRepeat"), (g === this._tDur || !g) && this._tTime === g && (_ && !this._onUpdate && tV(this, t, !0, !0), (t || !d) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && tq(this, 1), !e && !(_ && !h) && (g || h || u) && (em(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
                }
            } else t3(this, t, e, r);
            return this
        }, i.targets = function() {
            return this._targets
        }, i.invalidate = function(e) {
            return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, i.resetTo = function(t, e, r, n, i) {
            A || eS.wake(), this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (this._initted || e5(this, s), e3(this, t, e, r, n, this._ease(s / this._dur), s, i)) ? this.resetTo(t, e, r, n, 1) : (t$(this, 0), this.parent || tN(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, i.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !t && (!e || "all" === e)) return this._lazy = this._pt = 0, this.parent ? ev(this) : this.scrollTrigger && this.scrollTrigger.kill(!!b), this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, e$ && !0 !== e$.vars.overwrite)._first || ev(this), this.parent && r !== this.timeline.totalDuration() && t6(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var n, i, s, a, o, u, l, c = this._targets,
                f = t ? ea(t) : c,
                h = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && tX(c, f)) return "all" === e && (this._pt = 0), ev(this);
            for (n = this._op = this._op || [], "all" !== e && (L(e) && (o = {}, tM(e, function(t) {
                    return o[t] = 1
                }), e = o), e = e8(c, e)), l = c.length; l--;)
                if (~f.indexOf(c[l]))
                    for (o in i = h[l], "all" === e ? (n[l] = e, a = i, s = {}) : (s = n[l] = n[l] || {}, a = e), a)(u = i && i[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || tU(this, u, "_pt"), delete i[o]), "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && p && ev(this), this
        }, n.to = function(t, e) {
            return new n(t, e, arguments[2])
        }, n.from = function(t, e) {
            return et(1, arguments)
        }, n.delayedCall = function(t, e, r, i) {
            return new n(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, n.fromTo = function(t, e, r) {
            return et(2, arguments)
        }, n.set = function(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new n(t, e)
        }, n.killTweensOf = function(t, e, r) {
            return T.killTweensOf(t, e, r)
        }, n
    }(eW);
    tF(rt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), tM("staggerTo,staggerFrom,staggerFromTo", function(t) {
        rt[t] = function() {
            var e = new eV,
                r = ei.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var re = function(t, e, r) {
            return t[e] = r
        },
        rr = function(t, e, r) {
            return t[e](r)
        },
        rn = function(t, e, r, n) {
            return t[e](n.fp, r)
        },
        ri = function(t, e, r) {
            return t.setAttribute(e, r)
        },
        rs = function(t, e) {
            return X(t[e]) ? rr : U(t[e]) && t.setAttribute ? ri : re
        },
        ra = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
        },
        ro = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        ru = function(t, e) {
            var r = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n, r = r._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        rl = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        rc = function(t, e, r, n) {
            for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(t, e, r), s = i
        },
        rf = function(t) {
            for (var e, r, n = this._pt; n;) r = n._next, (n.p !== t || n.op) && n.op !== t ? n.dep || (e = 1) : tU(this, n, "_pt"), n = r;
            return !e
        },
        rh = function(t, e, r, n) {
            n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
        },
        rp = function(t) {
            for (var e, r, n, i, s = t._pt; s;) {
                for (e = s._next, r = n; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : i) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : i = s, s = e
            }
            t._pt = n
        },
        rd = function() {
            function t(t, e, r, n, i, s, a, o, u) {
                this.t = e, this.s = n, this.c = i, this.p = r, this.r = s || ra, this.d = a || this, this.set = o || re, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set, this.set = rh, this.m = t, this.mt = r, this.tween = e
            }, t
        }();
    tM(tb + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return td[t] = 1
    }), ti.TweenMax = ti.TweenLite = rt, ti.TimelineLite = ti.TimelineMax = eV, T = new eV({
        sortChildren: !1,
        defaults: D,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), P.stringFilter = eE;
    var r_ = [],
        rg = {},
        rm = [],
        rv = 0,
        ry = 0,
        rx = function(t) {
            return (rg[t] || rm).map(function(t) {
                return t()
            })
        },
        rb = function() {
            var t = Date.now(),
                e = [];
            t - rv > 2 && (rx("matchMediaInit"), r_.forEach(function(t) {
                var r, n, i, s, a = t.queries,
                    o = t.conditions;
                for (n in a)(r = k.matchMedia(a[n]).matches) && (i = 1), r !== o[n] && (o[n] = r, s = 1);
                s && (t.revert(), i && e.push(t))
            }), rx("matchMediaRevert"), e.forEach(function(t) {
                return t.onMatch(t, function(e) {
                    return t.add(null, e)
                })
            }), rv = t, rx("matchMedia"))
        },
        rw = function() {
            function t(t, e) {
                this.selector = e && eo(e), this.data = [], this._r = [], this.isReverted = !1, this.id = ry++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                X(t) && (r = e, e = t, t = X);
                var n = this,
                    i = function() {
                        var t, i = w,
                            s = n.selector;
                        return i && i !== n && i.data.push(n), r && (n.selector = eo(r)), w = n, t = e.apply(n, arguments), X(t) && n._r.push(t), w = i, n.selector = s, n.isReverted = !1, t
                    };
                return n.last = i, t === X ? i(n, function(t) {
                    return n.add(null, t)
                }) : t ? n[t] = i : i
            }, e.ignore = function(t) {
                var e = w;
                w = null, t(this), w = e
            }, e.getTweens = function() {
                var e = [];
                return this.data.forEach(function(r) {
                    return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof rt && !(r.parent && "nested" === r.parent.data) && e.push(r)
                }), e
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(t, e) {
                var r = this;
                if (t) {
                    for (var n, i = r.getTweens(), s = r.data.length; s--;) "isFlip" === (n = r.data[s]).data && (n.revert(), n.getChildren(!0, !0, !1).forEach(function(t) {
                        return i.splice(i.indexOf(t), 1)
                    }));
                    for (i.map(function(t) {
                            return {
                                g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                t: t
                            }
                        }).sort(function(t, e) {
                            return e.g - t.g || -1 / 0
                        }).forEach(function(e) {
                            return e.t.revert(t)
                        }), s = r.data.length; s--;)(n = r.data[s]) instanceof eV ? "nested" !== n.data && (n.scrollTrigger && n.scrollTrigger.revert(), n.kill()) : n instanceof rt || !n.revert || n.revert(t);
                    r._r.forEach(function(e) {
                        return e(t, r)
                    }), r.isReverted = !0
                } else this.data.forEach(function(t) {
                    return t.kill && t.kill()
                });
                if (this.clear(), e)
                    for (var a = r_.length; a--;) r_[a].id === this.id && r_.splice(a, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        rT = function() {
            function t(t) {
                this.contexts = [], this.scope = t, w && w.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                q(t) || (t = {
                    matches: t
                });
                var n, i, s, a = new rw(0, r || this.scope),
                    o = a.conditions = {};
                for (i in w && !a.selector && (a.selector = w.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === i ? s = 1 : (n = k.matchMedia(t[i])) && (0 > r_.indexOf(a) && r_.push(a), (o[i] = n.matches) && (s = 1), n.addListener ? n.addListener(rb) : n.addEventListener("change", rb));
                return s && e(a, function(t) {
                    return a.add(null, t)
                }), this
            }, e.revert = function(t) {
                this.kill(t || {})
            }, e.kill = function(t) {
                this.contexts.forEach(function(e) {
                    return e.kill(t, !0)
                })
            }, t
        }(),
        rk = {
            registerPlugin: function() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach(function(t) {
                    return ex(t)
                })
            },
            timeline: function(t) {
                return new eV(t)
            },
            getTweensOf: function(t, e) {
                return T.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, n) {
                L(t) && (t = ea(t)[0]);
                var i = tT(t || {}).get,
                    s = r ? tz : tR;
                return "native" === r && (r = ""), t ? e ? s((tm[e] && tm[e].get || i)(t, e, r, n)) : function(e, r, n) {
                    return s((tm[e] && tm[e].get || i)(t, e, r, n))
                } : t
            },
            quickSetter: function(t, e, r) {
                if ((t = ea(t)).length > 1) {
                    var n = t.map(function(t) {
                            return rE.quickSetter(t, e, r)
                        }),
                        i = n.length;
                    return function(t) {
                        for (var e = i; e--;) n[e](t)
                    }
                }
                t = t[0] || {};
                var s = tm[e],
                    a = tT(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    u = s ? function(e) {
                        var n = new s;
                        S._pt = 0, n.init(t, r ? e + r : e, S, 0, [t]), n.render(1, n), S._pt && rl(1, S)
                    } : a.set(t, o);
                return s ? u : function(e) {
                    return u(t, o, r ? e + r : e, a, 1)
                }
            },
            quickTo: function(t, e, r) {
                var n, i = rE.to(t, tF(((n = {})[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
                    s = function(t, r, n) {
                        return i.resetTo(e, t, r, n)
                    };
                return s.tween = i, s
            },
            isTweening: function(t) {
                return T.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = eL(t.ease, D.ease)), tY(D, t || {})
            },
            config: function(t) {
                return tY(P, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    n = t.plugins,
                    i = t.defaults,
                    s = t.extendTimeline;
                (n || "").split(",").forEach(function(t) {
                    return t && !tm[t] && !ti[t] && tu(e + " effect requires " + t + " plugin.")
                }), tv[e] = function(t, e, n) {
                    return r(ea(t), tF(e || {}, i), n)
                }, s && (eV.prototype[e] = function(t, r, n) {
                    return this.add(tv[e](t, q(r) ? r : (n = r) && {}, this), n)
                })
            },
            registerEase: function(t, e) {
                eP[t] = eL(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? eL(t, e) : eP
            },
            getById: function(t) {
                return T.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, n, i = new eV(t);
                for (i.smoothChildTiming = H(t.smoothChildTiming), T.remove(i), i._dp = 0, i._time = i._tTime = T._time, r = T._first; r;) n = r._next, (e || !(!r._dur && r instanceof rt && r.vars.onComplete === r._targets[0])) && tJ(i, r, r._start - r._delay), r = n;
                return tJ(T, i, 0), i
            },
            context: function(t, e) {
                return t ? new rw(t, e) : w
            },
            matchMedia: function(t) {
                return new rT(t)
            },
            matchMediaRefresh: function() {
                return r_.forEach(function(t) {
                    var e, r, n = t.conditions;
                    for (r in n) n[r] && (n[r] = !1, e = 1);
                    e && t.revert()
                }) || rb()
            },
            addEventListener: function(t, e) {
                var r = rg[t] || (rg[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = rg[t],
                    n = r && r.indexOf(e);
                n >= 0 && r.splice(n, 1)
            },
            utils: {
                wrap: function t(e, r, n) {
                    var i = r - e;
                    return G(e) ? ep(e, t(0, e.length), r) : ee(n, function(t) {
                        return (i + (t - e) % i) % i + e
                    })
                },
                wrapYoyo: function t(e, r, n) {
                    var i = r - e,
                        s = 2 * i;
                    return G(e) ? ep(e, t(0, e.length - 1), r) : ee(n, function(t) {
                        return t = (s + (t - e) % s) % s || 0, e + (t > i ? s - t : t)
                    })
                },
                distribute: el,
                random: eh,
                snap: ef,
                normalize: function(t, e, r) {
                    return e_(t, e, 0, 1, r)
                },
                getUnit: en,
                clamp: function(t, e, r) {
                    return ee(r, function(r) {
                        return er(t, e, r)
                    })
                },
                splitColor: eT,
                toArray: ea,
                selector: eo,
                mapRange: e_,
                pipe: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function(t) {
                        return e.reduce(function(t, e) {
                            return e(t)
                        }, t)
                    }
                },
                unitize: function(t, e) {
                    return function(r) {
                        return t(parseFloat(r)) + (e || en(r))
                    }
                },
                interpolate: function t(e, r, n, i) {
                    var s = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    };
                    if (!s) {
                        var a, o, u, l, c, f = L(e),
                            h = {};
                        if (!0 === n && (i = 1) && (n = null), f) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (G(e) && !G(r)) {
                            for (o = 1, u = [], c = (l = e.length) - 2; o < l; o++) u.push(t(e[o - 1], e[o]));
                            l--, s = function(t) {
                                var e = Math.min(c, ~~(t *= l));
                                return u[e](t - e)
                            }, n = r
                        } else i || (e = tI(G(e) ? [] : {}, e));
                        if (!u) {
                            for (a in r) e0.call(h, e, a, "get", r[a]);
                            s = function(t) {
                                return rl(t, h) || (f ? e.p : e)
                            }
                        }
                    }
                    return ee(n, s)
                },
                shuffle: eu
            },
            install: ta,
            effects: tv,
            ticker: eS,
            updateRoot: eV.updateRoot,
            plugins: tm,
            globalTimeline: T,
            core: {
                PropTween: rd,
                globals: tl,
                Tween: rt,
                Timeline: eV,
                Animation: eW,
                getCache: tT,
                _removeLinkedListItem: tU,
                reverting: function() {
                    return b
                },
                context: function(t) {
                    return t && w && (w.data.push(t), t._ctx = w), w
                },
                suppressOverwrites: function(t) {
                    return x = t
                }
            }
        };
    tM("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return rk[t] = rt[t]
    }), eS.add(eV.updateRoot), S = rk.to({}, {
        duration: 0
    });
    var rM = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        rO = function(t, e) {
            var r, n, i, s = t._targets;
            for (r in e)
                for (n = s.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = rM(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r))
        },
        rC = function(t, e) {
            return {
                name: t,
                headless: 1,
                rawVars: 1,
                init: function(t, r, n) {
                    n._onInit = function(t) {
                        var n, i;
                        if (L(r) && (n = {}, tM(r, function(t) {
                                return n[t] = 1
                            }), r = n), e) {
                            for (i in n = {}, r) n[i] = e(r[i]);
                            r = n
                        }
                        rO(t, r)
                    }
                }
            }
        },
        rE = rk.registerPlugin({
            name: "attr",
            init: function(t, e, r, n, i) {
                var s, a, o;
                for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], n, i, 0, 0, s)).op = s, a.b = o, this._props.push(s)
            },
            render: function(t, e) {
                for (var r = e._pt; r;) b ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
            }
        }, {
            name: "endArray",
            headless: 1,
            init: function(t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, rC("roundProps", ec), rC("modifiers"), rC("snap", ef)) || rk;
    rt.version = eV.version = rE.version = "3.14.2", C = 1, W() && eA(), eP.Power0, eP.Power1, eP.Power2, eP.Power3, eP.Power4, eP.Linear, eP.Quad, eP.Cubic, eP.Quart, eP.Quint, eP.Strong, eP.Elastic, eP.Back, eP.SteppedEase, eP.Bounce, eP.Sine, eP.Expo, eP.Circ;
    var rS, rA, rP, rD, rR, rz, rF, rI = {},
        rY = 180 / Math.PI,
        rB = Math.PI / 180,
        rL = Math.atan2,
        rX = /([A-Z])/g,
        rN = /(left|right|width|margin|padding|x)/i,
        rU = /[\s,\(]\S/,
        rq = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        rH = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        },
        rW = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        },
        rV = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        },
        rj = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        },
        rG = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        rQ = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        rZ = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        r$ = function(t, e, r) {
            return t.style[e] = r
        },
        rK = function(t, e, r) {
            return t.style.setProperty(e, r)
        },
        rJ = function(t, e, r) {
            return t._gsap[e] = r
        },
        r0 = function(t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        },
        r1 = function(t, e, r, n, i) {
            var s = t._gsap;
            s.scaleX = s.scaleY = r, s.renderTransform(i, s)
        },
        r2 = function(t, e, r, n, i) {
            var s = t._gsap;
            s[e] = r, s.renderTransform(i, s)
        },
        r5 = "transform",
        r3 = r5 + "Origin",
        r8 = function t(e, r) {
            var n = this,
                i = this.target,
                s = i.style,
                a = i._gsap;
            if (e in rI && s) {
                if (this.tfm = this.tfm || {}, "transform" === e) return rq.transform.split(",").forEach(function(e) {
                    return t.call(n, e, r)
                });
                if (~(e = rq[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                        return n.tfm[t] = np(i, t)
                    }) : this.tfm[e] = a.x ? a[e] : np(i, e), e === r3 && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(r5) >= 0) return;
                a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(r3, r, "")), e = r5
            }(s || r) && this.props.push(e, r, s[e])
        },
        r6 = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        r4 = function() {
            var t, e, r = this.props,
                n = this.target,
                i = n.style,
                s = n._gsap;
            for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(rX, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) s[e] = this.tfm[e];
                s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = rz()) && t.isStart || i[r5] || (r6(i), s.zOrigin && i[r3] && (i[r3] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
            }
        },
        r9 = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: r4,
                save: r8
            };
            return t._gsap || rE.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                return r.save(t)
            }), r
        },
        r7 = function(t, e) {
            var r = rS.createElementNS ? rS.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : rS.createElement(t);
            return r && r.style ? r : rS.createElement(t)
        },
        nt = function t(e, r, n) {
            var i = getComputedStyle(e);
            return i[r] || i.getPropertyValue(r.replace(rX, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, nr(r) || r, 1) || ""
        },
        ne = "O,Moz,ms,Ms,Webkit".split(","),
        nr = function(t, e, r) {
            var n = (e || rD).style,
                i = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ne[i] + t in n););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ne[i] : "") + t
        },
        nn = function() {
            "u" > typeof window && window.document && (rA = (rS = window.document).documentElement, rD = r7("div") || {
                style: {}
            }, r7("div"), r3 = (r5 = nr(r5)) + "Origin", rD.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", rF = !!nr("perspective"), rz = rE.core.reverting, rP = 1)
        },
        ni = function(t) {
            var e, r = t.ownerSVGElement,
                n = r7("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = t.cloneNode(!0);
            i.style.display = "block", n.appendChild(i), rA.appendChild(n);
            try {
                e = i.getBBox()
            } catch (t) {}
            return n.removeChild(i), rA.removeChild(n), e
        },
        ns = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        na = function(t) {
            var e, r;
            try {
                e = t.getBBox()
            } catch (n) {
                e = ni(t), r = 1
            }
            return e && (e.width || e.height) || r || (e = ni(t)), !e || e.width || e.x || e.y ? e : {
                x: +ns(t, ["x", "cx", "x1"]) || 0,
                y: +ns(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        no = function(t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && na(t))
        },
        nu = function(t, e) {
            if (e) {
                var r, n = t.style;
                e in rI && e !== r3 && (e = r5), n.removeProperty ? (("ms" === (r = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) && (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(rX, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        nl = function(t, e, r, n, i, s) {
            var a = new rd(t._pt, e, r, 0, 1, s ? rZ : rQ);
            return t._pt = a, a.b = n, a.e = i, t._props.push(r), a
        },
        nc = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        nf = {
            grid: 1,
            flex: 1
        },
        nh = function t(e, r, n, i) {
            var s, a, o, u, l = parseFloat(n) || 0,
                c = (n + "").trim().substr((l + "").length) || "px",
                f = rD.style,
                h = rN.test(r),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
                _ = "px" === i,
                g = "%" === i;
            if (i === c || !l || nc[i] || nc[c]) return l;
            if ("px" === c || _ || (l = t(e, r, n, "px")), u = e.getCTM && no(e), (g || "%" === c) && (rI[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[h ? "width" : "height"] : e[d], tO(g ? l / s * 100 : l / 100 * s);
            if (f[h ? "width" : "height"] = 100 + (_ ? c : i), a = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== rS && a.appendChild || (a = rS.body), (o = a._gsap) && g && o.width && h && o.time === eS.time && !o.uncache) return tO(l / o.width * 100);
            if (g && ("height" === r || "width" === r)) {
                var m = e.style[r];
                e.style[r] = 100 + i, s = e[d], m ? e.style[r] = m : nu(e, r)
            } else(g || "%" === c) && !nf[nt(a, "display")] && (f.position = nt(e, "position")), a === e && (f.position = "static"), a.appendChild(rD), s = rD[d], a.removeChild(rD), f.position = "absolute";
            return h && g && ((o = tT(a)).time = eS.time, o.width = a[d]), tO(_ ? s * l / 100 : s && l ? 100 / s * l : 0)
        },
        np = function(t, e, r, n) {
            var i;
            return rP || nn(), e in rq && "transform" !== e && ~(e = rq[e]).indexOf(",") && (e = e.split(",")[0]), rI[e] && "transform" !== e ? (i = nM(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : nO(nt(t, r3)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nv[e] && nv[e](t, e, r) || nt(t, e) || tk(t, e) || +("opacity" === e)), r && !~(i + "").trim().indexOf(" ") ? nh(t, e, i, r) + r : i
        },
        nd = function(t, e, r, n) {
            if (!r || "none" === r) {
                var i = nr(e, t, 1),
                    s = i && nt(t, i, 1);
                s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = nt(t, "borderTopColor"))
            }
            var a, o, u, l, c, f, h, p, d, _, g, m = new rd(this._pt, t.style, e, 0, 1, ru),
                v = 0,
                y = 0;
            if (m.b = r, m.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = nt(t, n.substring(4, n.indexOf(")")))), "auto" === n && (f = t.style[e], t.style[e] = n, n = nt(t, e) || n, f ? t.style[e] = f : nu(t, e)), eE(a = [r, n]), r = a[0], n = a[1], u = r.match(J) || [], (n.match(J) || []).length) {
                for (; o = J.exec(n);) h = o[0], d = n.substring(v, o.index), c ? c = (c + 1) % 5 : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) && (c = 1), h !== (f = u[y++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), "=" === h.charAt(1) && (h = tE(l, h) + g), p = parseFloat(h), _ = h.substr((p + "").length), v = J.lastIndex - _.length, _ || (_ = _ || P.units[e] || g, v === n.length && (n += _, m.e += _)), g !== _ && (l = nh(t, e, f, _) || 0), m._pt = {
                    _next: m._pt,
                    p: d || 1 === y ? d : ",",
                    s: l,
                    c: p - l,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
                m.c = v < n.length ? n.substring(v, n.length) : ""
            } else m.r = "display" === e && "none" === n ? rZ : rQ;
            return te.test(n) && (m.e = 0), this._pt = m, m
        },
        n_ = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        ng = function(t) {
            var e = t.split(" "),
                r = e[0],
                n = e[1] || "50%";
            return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (t = r, r = n, n = t), e[0] = n_[r] || r, e[1] = n_[n] || n, e.join(" ")
        },
        nm = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, n, i, s = e.t,
                    a = s.style,
                    o = e.u,
                    u = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", n = 1;
                else
                    for (i = (o = o.split(",")).length; --i > -1;) rI[r = o[i]] && (n = 1, r = "transformOrigin" === r ? r3 : r5), nu(s, r);
                n && (nu(s, r5), u && (u.svg && s.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", nM(s, 1), u.uncache = 1, r6(a)))
            }
        },
        nv = {
            clearProps: function(t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var s = t._pt = new rd(t._pt, e, r, 0, 0, nm);
                    return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1
                }
            }
        },
        ny = [1, 0, 0, 1, 0, 0],
        nx = {},
        nb = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        nw = function(t) {
            var e = nt(t, r5);
            return nb(e) ? ny : e.substr(7).match(K).map(tO)
        },
        nT = function(t, e) {
            var r, n, i, s, a = t._gsap || tT(t),
                o = t.style,
                u = nw(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ny : u : (u !== ny || t.offsetParent || t === rA || a.svg || (i = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1, n = t.nextElementSibling, rA.appendChild(t)), u = nw(t), i ? o.display = i : nu(t, "display"), s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : rA.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        nk = function(t, e, r, n, i, s) {
            var a, o, u, l, c = t._gsap,
                f = i || nT(t, !0),
                h = c.xOrigin || 0,
                p = c.yOrigin || 0,
                d = c.xOffset || 0,
                _ = c.yOffset || 0,
                g = f[0],
                m = f[1],
                v = f[2],
                y = f[3],
                x = f[4],
                b = f[5],
                w = e.split(" "),
                T = parseFloat(w[0]) || 0,
                k = parseFloat(w[1]) || 0;
            r ? f !== ny && (o = g * y - m * v) && (u = y / o * T + -v / o * k + (v * b - y * x) / o, l = -m / o * T + g / o * k - (g * b - m * x) / o, T = u, k = l) : (T = (a = na(t)).x + (~w[0].indexOf("%") ? T / 100 * a.width : T), k = a.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * a.height : k)), n || !1 !== n && c.smooth ? (c.xOffset = d + ((x = T - h) * g + (b = k - p) * v) - x, c.yOffset = _ + (x * m + b * y) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = T, c.yOrigin = k, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[r3] = "0px 0px", s && (nl(s, c, "xOrigin", h, T), nl(s, c, "yOrigin", p, k), nl(s, c, "xOffset", d, c.xOffset), nl(s, c, "yOffset", _, c.yOffset)), t.setAttribute("data-svg-origin", T + " " + k)
        },
        nM = function(t, e) {
            var r = t._gsap || new eH(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, s, a, o, u, l, c, f, h, p, d, _, g, m, v, y, x, b, w, T, k, M, O, C, E, S, A, D, R, z, F, I = t.style,
                Y = r.scaleX < 0,
                B = getComputedStyle(t),
                L = nt(t, r3) || "0";
            return n = i = s = u = l = c = f = h = p = 0, a = o = 1, r.svg = !!(t.getCTM && no(t)), B.translate && (("none" !== B.translate || "none" !== B.scale || "none" !== B.rotate) && (I[r5] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[r5] ? B[r5] : "")), I.scale = I.rotate = I.translate = "none"), g = nT(t, r.svg), r.svg && (r.uncache ? (C = t.getBBox(), L = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px", O = "") : O = !e && t.getAttribute("data-svg-origin"), nk(t, O || L, !!O || r.originIsAbsolute, !1 !== r.smooth, g)), d = r.xOrigin || 0, _ = r.yOrigin || 0, g !== ny && (x = g[0], b = g[1], w = g[2], T = g[3], n = k = g[4], i = M = g[5], 6 === g.length ? (a = Math.sqrt(x * x + b * b), o = Math.sqrt(T * T + w * w), u = x || b ? rL(b, x) * rY : 0, (f = w || T ? rL(w, T) * rY + u : 0) && (o *= Math.abs(Math.cos(f * rB))), r.svg && (n -= d - (d * x + _ * w), i -= _ - (d * b + _ * T))) : (F = g[6], R = g[7], S = g[8], A = g[9], D = g[10], z = g[11], n = g[12], i = g[13], s = g[14], l = (m = rL(F, D)) * rY, m && (O = k * (v = Math.cos(-m)) + S * (y = Math.sin(-m)), C = M * v + A * y, E = F * v + D * y, S = -(k * y) + S * v, A = -(M * y) + A * v, D = -(F * y) + D * v, z = -(R * y) + z * v, k = O, M = C, F = E), c = (m = rL(-w, D)) * rY, m && (O = x * (v = Math.cos(-m)) - S * (y = Math.sin(-m)), C = b * v - A * y, E = w * v - D * y, z = T * y + z * v, x = O, b = C, w = E), u = (m = rL(b, x)) * rY, m && (O = x * (v = Math.cos(m)) + b * (y = Math.sin(m)), C = k * v + M * y, b = b * v - x * y, M = M * v - k * y, x = O, k = C), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), a = tO(Math.sqrt(x * x + b * b + w * w)), o = tO(Math.sqrt(M * M + F * F)), f = Math.abs(m = rL(k, M)) > 2e-4 ? m * rY : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !nb(nt(t, r5)), O && t.setAttribute("transform", O))), Math.abs(f) > 90 && 270 > Math.abs(f) && (Y ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = s + "px", r.scaleX = tO(a), r.scaleY = tO(o), r.rotation = tO(u) + "deg", r.rotationX = tO(l) + "deg", r.rotationY = tO(c) + "deg", r.skewX = f + "deg", r.skewY = h + "deg", r.transformPerspective = p + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || !e && r.zOrigin || 0) && (I[r3] = nO(L)), r.xOffset = r.yOffset = 0, r.force3D = P.force3D, r.renderTransform = r.svg ? nP : rF ? nA : nE, r.uncache = 0, r
        },
        nO = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        nC = function(t, e, r) {
            var n = en(e);
            return tO(parseFloat(e) + parseFloat(nh(t, "x", r + "px", n))) + n
        },
        nE = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nA(t, e)
        },
        nS = "0deg",
        nA = function(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                s = r.x,
                a = r.y,
                o = r.z,
                u = r.rotation,
                l = r.rotationY,
                c = r.rotationX,
                f = r.skewX,
                h = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                _ = r.transformPerspective,
                g = r.force3D,
                m = r.target,
                v = r.zOrigin,
                y = "",
                x = "auto" === g && t && 1 !== t || !0 === g;
            if (v && (c !== nS || l !== nS)) {
                var b, w = parseFloat(l) * rB,
                    T = Math.sin(w),
                    k = Math.cos(w);
                s = nC(m, s, -(T * (b = Math.cos(w = parseFloat(c) * rB)) * v)), a = nC(m, a, -(-Math.sin(w) * v)), o = nC(m, o, -(k * b * v) + v)
            }
            "0px" !== _ && (y += "perspective(" + _ + ") "), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (x || "0px" !== s || "0px" !== a || "0px" !== o) && (y += "0px" !== o || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "), u !== nS && (y += "rotate(" + u + ") "), l !== nS && (y += "rotateY(" + l + ") "), c !== nS && (y += "rotateX(" + c + ") "), (f !== nS || h !== nS) && (y += "skew(" + f + ", " + h + ") "), (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + ") "), m.style[r5] = y || "translate(0, 0)"
        },
        nP = function(t, e) {
            var r, n, i, s, a, o = e || this,
                u = o.xPercent,
                l = o.yPercent,
                c = o.x,
                f = o.y,
                h = o.rotation,
                p = o.skewX,
                d = o.skewY,
                _ = o.scaleX,
                g = o.scaleY,
                m = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                x = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                T = parseFloat(c),
                k = parseFloat(f);
            h = parseFloat(h), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), h += d), h || p ? (h *= rB, p *= rB, r = Math.cos(h) * _, n = Math.sin(h) * _, i = -(Math.sin(h - p) * g), s = Math.cos(h - p) * g, p && (d *= rB, i *= a = Math.sqrt(1 + (a = Math.tan(p - d)) * a), s *= a, d && (r *= a = Math.sqrt(1 + (a = Math.tan(d)) * a), n *= a)), r = tO(r), n = tO(n), i = tO(i), s = tO(s)) : (r = _, s = g, n = i = 0), (T && !~(c + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (T = nh(m, "x", c, "px"), k = nh(m, "y", f, "px")), (v || y || x || b) && (T = tO(T + v - (v * r + y * i) + x), k = tO(k + y - (v * n + y * s) + b)), (u || l) && (T = tO(T + u / 100 * (a = m.getBBox()).width), k = tO(k + l / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + s + "," + T + "," + k + ")", m.setAttribute("transform", a), w && (m.style[r5] = a)
        },
        nD = function(t, e, r, n, i) {
            var s, a, o = L(i),
                u = parseFloat(i) * (o && ~i.indexOf("rad") ? rY : 1) - n,
                l = n + u + "deg";
            return o && ("short" === (s = i.split("_")[1]) && (u %= 360) != u % 180 && (u += u < 0 ? 360 : -360), "cw" === s && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === s && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))), t._pt = a = new rd(t._pt, e, r, n, u, rW), a.e = l, a.u = "deg", t._props.push(r), a
        },
        nR = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        nz = function(t, e, r) {
            var n, i, s, a, o, u, l, c = nR({}, r._gsap),
                f = r.style;
            for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[r5] = e, n = nM(r, 1), nu(r, r5), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[r5], f[r5] = e, n = nM(r, 1), f[r5] = s), rI)(s = c[i]) !== (a = n[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (o = en(s) !== (l = en(a)) ? nh(r, i, s, l) : parseFloat(s), u = parseFloat(a), t._pt = new rd(t._pt, n, i, o, u - o, rH), t._pt.u = l || 0, t._props.push(i));
            nR(n, c)
        };
    tM("padding,margin,Width,Radius", function(t, e) {
        var r = "Right",
            n = "Bottom",
            i = "Left",
            s = (e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(function(r) {
                return e < 2 ? t + r : "border" + r + t
            });
        nv[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var a, o;
            if (arguments.length < 4) return 5 === (o = (a = s.map(function(e) {
                return np(t, e, r)
            })).join(" ")).split(a[0]).length ? a[0] : o;
            a = (n + "").split(" "), o = {}, s.forEach(function(t, e) {
                return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), t.init(e, o, i)
        }
    });
    var nF = {
        name: "css",
        register: nn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var s, a, o, u, l, c, f, h, p, d, _, g, m, v, y, x, b, w = this._props,
                T = t.style,
                k = r.vars.startAt;
            for (f in rP || nn(), this.styles = this.styles || r9(t), x = this.styles.props, this.tween = r, e)
                if ("autoRound" !== f && (a = e[f], !(tm[f] && e2(f, e, r, n, t, i)))) {
                    if (l = typeof a, c = nv[f], "function" === l && (l = typeof(a = a.call(r, n, t, i))), "string" === l && ~a.indexOf("random(") && (a = ed(a)), c) c(this, t, f, a, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", eO.lastIndex = 0, !eO.test(s) && (h = en(s), (p = en(a)) ? h !== p && (s = nh(t, f, s, p) + p) : h && (a += h)), this.add(T, "setProperty", s, a, n, i, 0, 0, f), w.push(f), x.push(f, 0, T[f]);
                    else if ("undefined" !== l) {
                        if (k && f in k ? (L(s = "function" == typeof k[f] ? k[f].call(r, n, t, i) : k[f]) && ~s.indexOf("random(") && (s = ed(s)), en(s + "") || "auto" === s || (s += P.units[f] || en(np(t, f)) || ""), "=" === (s + "").charAt(1) && (s = np(t, f))) : s = np(t, f), u = parseFloat(s), (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), f in rq && ("autoAlpha" === f && (1 === u && "hidden" === np(t, "visibility") && o && (u = 0), x.push("visibility", 0, T.visibility), nl(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = rq[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in rI) {
                            if (this.styles.save(f), b = a, "string" === l && "var(--" === a.substring(0, 6)) {
                                if ("calc(" === (a = nt(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                                    var M = t.style.perspective;
                                    t.style.perspective = a, a = nt(t, "perspective"), M ? t.style.perspective = M : nu(t, "perspective")
                                }
                                o = parseFloat(a)
                            }
                            if (g || ((m = t._gsap).renderTransform && !e.parseTransform || nM(t, e.parseTransform), v = !1 !== e.smoothOrigin && m.smooth, (g = this._pt = new rd(this._pt, T, r5, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === f) this._pt = new rd(this._pt, m, "scaleY", m.scaleY, (d ? tE(m.scaleY, d + o) : o) - m.scaleY || 0, rH), this._pt.u = 0, w.push("scaleY", f), f += "X";
                            else if ("transformOrigin" === f) {
                                x.push(r3, 0, T[r3]), a = ng(a), m.svg ? nk(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== m.zOrigin && nl(this, m, "zOrigin", m.zOrigin, p), nl(this, T, f, nO(s), nO(a)));
                                continue
                            } else if ("svgOrigin" === f) {
                                nk(t, a, 1, v, 0, this);
                                continue
                            } else if (f in nx) {
                                nD(this, m, f, u, d ? tE(u, d + a) : a);
                                continue
                            } else if ("smoothOrigin" === f) {
                                nl(this, m, "smooth", m.smooth, a);
                                continue
                            } else if ("force3D" === f) {
                                m[f] = a;
                                continue
                            } else if ("transform" === f) {
                                nz(this, a, t);
                                continue
                            }
                        } else f in T || (f = nr(f) || f);
                        if (_ || (o || 0 === o) && (u || 0 === u) && !rU.test(a) && f in T) h = (s + "").substr((u + "").length), o || (o = 0), p = en(a) || (f in P.units ? P.units[f] : h), h !== p && (u = nh(t, f, s, p)), this._pt = new rd(this._pt, _ ? m : T, f, u, (d ? tE(u, d + o) : o) - u, !_ && ("px" === p || "zIndex" === f) && !1 !== e.autoRound ? rG : rH), this._pt.u = p || 0, _ && b !== a ? (this._pt.b = s, this._pt.e = b, this._pt.r = rj) : h !== p && "%" !== p && (this._pt.b = s, this._pt.r = rV);
                        else if (f in T) nd.call(this, t, f, s, d ? d + a : a);
                        else if (f in t) this.add(t, f, s || t[f], d ? d + a : a, n, i);
                        else if ("parseTransform" !== f) {
                            to(f, a);
                            continue
                        }
                        _ || (f in T ? x.push(f, 0, T[f]) : "function" == typeof t[f] ? x.push(f, 2, t[f]()) : x.push(f, 1, s || t[f])), w.push(f)
                    }
                }
            y && rp(this)
        },
        render: function(t, e) {
            if (e.tween._time || !rz())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: np,
        aliases: rq,
        getSetter: function(t, e, r) {
            var n = rq[e];
            return n && 0 > n.indexOf(",") && (e = n), e in rI && e !== r3 && (t._gsap.x || np(t, "x")) ? r && rR === r ? "scale" === e ? r0 : rJ : (rR = r || {}, "scale" === e ? r1 : r2) : t.style && !U(t.style[e]) ? r$ : ~e.indexOf("-") ? rK : rs(t, e)
        },
        core: {
            _removeProperty: nu,
            _getMatrix: nT
        }
    };
    rE.utils.checkPrefix = nr, rE.core.getStyleSaver = r9, i = tM("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (n = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        rI[t] = 1
    }), tM(n, function(t) {
        P.units[t] = "deg", nx[t] = 1
    }), rq[i[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + n, tM("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        rq[e[1]] = i[e[0]]
    }), tM("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        P.units[t] = "px"
    }), rE.registerPlugin(nF);
    var nI = rE.registerPlugin(nF) || rE;
    nI.core.Tween, t.s(["default", () => nI], 86785)
}, 31034, 10959, t => {
    "use strict";
    var e = t.i(61835),
        r = t.i(86785);
    let n = "u" > typeof document ? e.useLayoutEffect : e.useEffect,
        i = t => t && !Array.isArray(t) && "object" == typeof t,
        s = [],
        a = {},
        o = r.default,
        u = (t, r = s) => {
            let u = a;
            i(t) ? (u = t, t = null, r = "dependencies" in u ? u.dependencies : s) : i(r) && (r = "dependencies" in (u = r) ? u.dependencies : s), t && "function" != typeof t && console.warn("First parameter must be a function or config object");
            let {
                scope: l,
                revertOnUpdate: c
            } = u, f = (0, e.useRef)(!1), h = (0, e.useRef)(o.context(() => {}, l)), p = (0, e.useRef)(t => h.current.add(null, t)), d = r && r.length && !c;
            return d && n(() => (f.current = !0, () => h.current.revert()), s), n(() => {
                if (t && h.current.add(t, l), !d || !f.current) return () => h.current.revert()
            }, r), {
                context: h.current,
                contextSafe: p.current
            }
        };
    u.register = t => {
        o = t
    }, u.headless = !0, t.s(["useGSAP", 0, u], 31034);
    var l, c, f, h, p, d, _, g, m, v, y, x, b, w = function() {
            return l || "u" > typeof window && (l = window.gsap) && l.registerPlugin && l
        },
        T = 1,
        k = [],
        M = [],
        O = [],
        C = Date.now,
        E = function(t, e) {
            return e
        },
        S = function() {
            var t = m.core,
                e = t.bridge || {},
                r = t._scrollers,
                n = t._proxies;
            r.push.apply(r, M), n.push.apply(n, O), M = r, O = n, E = function(t, r) {
                return e[t](r)
            }
        },
        A = function(t, e) {
            return ~O.indexOf(t) && O[O.indexOf(t) + 1][e]
        },
        P = function(t) {
            return !!~v.indexOf(t)
        },
        D = function(t, e, r, n, i) {
            return t.addEventListener(e, r, {
                passive: !1 !== n,
                capture: !!i
            })
        },
        R = function(t, e, r, n) {
            return t.removeEventListener(e, r, !!n)
        },
        z = "scrollLeft",
        F = "scrollTop",
        I = function() {
            return y && y.isPressed || M.cache++
        },
        Y = function(t, e) {
            var r = function r(n) {
                if (n || 0 === n) {
                    T && (f.history.scrollRestoration = "manual");
                    var i = y && y.isPressed;
                    t(n = r.v = Math.round(n) || (y && y.iOS ? 1 : 0)), r.cacheID = M.cache, i && E("ss", n)
                } else(e || M.cache !== r.cacheID || E("ref")) && (r.cacheID = M.cache, r.v = t());
                return r.v + r.offset
            };
            return r.offset = 0, t && r
        },
        B = {
            s: z,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: Y(function(t) {
                return arguments.length ? f.scrollTo(t, L.sc()) : f.pageXOffset || h[z] || p[z] || d[z] || 0
            })
        },
        L = {
            s: F,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: B,
            sc: Y(function(t) {
                return arguments.length ? f.scrollTo(B.sc(), t) : f.pageYOffset || h[F] || p[F] || d[F] || 0
            })
        },
        X = function(t, e) {
            return (e && e._ctx && e._ctx.selector || l.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== l.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
        },
        N = function(t, e) {
            for (var r = e.length; r--;)
                if (e[r] === t || e[r].contains(t)) return !0;
            return !1
        },
        U = function(t, e) {
            var r = e.s,
                n = e.sc;
            P(t) && (t = h.scrollingElement || p);
            var i = M.indexOf(t),
                s = n === L.sc ? 1 : 2;
            ~i || (i = M.push(t) - 1), M[i + s] || D(t, "scroll", I);
            var a = M[i + s],
                o = a || (M[i + s] = Y(A(t, r), !0) || (P(t) ? n : Y(function(e) {
                    return arguments.length ? t[r] = e : t[r]
                })));
            return o.target = t, a || (o.smooth = "smooth" === l.getProperty(t, "scrollBehavior")), o
        },
        q = function(t, e, r) {
            var n = t,
                i = t,
                s = C(),
                a = s,
                o = e || 50,
                u = Math.max(500, 3 * o),
                l = function(t, e) {
                    var u = C();
                    e || u - s > o ? (i = n, n = t, a = s, s = u) : r ? n += t : n = i + (t - i) / (u - a) * (s - a)
                };
            return {
                update: l,
                reset: function() {
                    i = n = r ? 0 : n, a = s = 0
                },
                getVelocity: function(t) {
                    var e = a,
                        o = i,
                        c = C();
                    return (t || 0 === t) && t !== n && l(t), s === a || c - a > u ? 0 : (n + (r ? o : -o)) / ((r ? c : s) - e) * 1e3
                }
            }
        },
        H = function(t, e) {
            return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        W = function(t) {
            var e = Math.max.apply(Math, t),
                r = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(r) ? e : r
        },
        V = function() {
            (m = l.core.globals().ScrollTrigger) && m.core && S()
        },
        j = function(t) {
            return l = t || w(), !c && l && "u" > typeof document && document.body && (f = window, p = (h = document).documentElement, d = h.body, v = [f, h, p, d], l.utils.clamp, b = l.core.context || function() {}, g = "onpointerenter" in d ? "pointer" : "mouse", _ = G.isTouch = f.matchMedia && f.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart" in f || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), x = G.eventTypes = ("ontouchstart" in p ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in p) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","), setTimeout(function() {
                return T = 0
            }, 500), V(), c = 1), c
        };
    B.op = L, M.cache = 0;
    var G = function() {
        var t;

        function e(t) {
            this.init(t)
        }
        return e.prototype.init = function(t) {
                c || j(l) || console.warn("Please gsap.registerPlugin(Observer)"), m || V();
                var e = t.tolerance,
                    r = t.dragMinimum,
                    n = t.type,
                    i = t.target,
                    s = t.lineHeight,
                    a = t.debounce,
                    o = t.preventDefault,
                    u = t.onStop,
                    v = t.onStopDelay,
                    w = t.ignore,
                    T = t.wheelSpeed,
                    M = t.event,
                    O = t.onDragStart,
                    E = t.onDragEnd,
                    S = t.onDrag,
                    A = t.onPress,
                    z = t.onRelease,
                    F = t.onRight,
                    Y = t.onLeft,
                    G = t.onUp,
                    Q = t.onDown,
                    Z = t.onChangeX,
                    $ = t.onChangeY,
                    K = t.onChange,
                    J = t.onToggleX,
                    tt = t.onToggleY,
                    te = t.onHover,
                    tr = t.onHoverEnd,
                    tn = t.onMove,
                    ti = t.ignoreCheck,
                    ts = t.isNormalizer,
                    ta = t.onGestureStart,
                    to = t.onGestureEnd,
                    tu = t.onWheel,
                    tl = t.onEnable,
                    tc = t.onDisable,
                    tf = t.onClick,
                    th = t.scrollSpeed,
                    tp = t.capture,
                    td = t.allowClicks,
                    t_ = t.lockAxis,
                    tg = t.onLockAxis;
                this.target = i = X(i) || p, this.vars = t, w && (w = l.utils.toArray(w)), e = e || 1e-9, r = r || 0, T = T || 1, th = th || 1, n = n || "wheel,touch,pointer", a = !1 !== a, s || (s = parseFloat(f.getComputedStyle(d).lineHeight) || 22);
                var tm, tv, ty, tx, tb, tw, tT, tk = this,
                    tM = 0,
                    tO = 0,
                    tC = t.passive || !o && !1 !== t.passive,
                    tE = U(i, B),
                    tS = U(i, L),
                    tA = tE(),
                    tP = tS(),
                    tD = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === x[0],
                    tR = P(i),
                    tz = i.ownerDocument || h,
                    tF = [0, 0, 0],
                    tI = [0, 0, 0],
                    tY = 0,
                    tB = function() {
                        return tY = C()
                    },
                    tL = function(t, e) {
                        return (tk.event = t) && w && N(t.target, w) || e && tD && "touch" !== t.pointerType || ti && ti(t, e)
                    },
                    tX = function() {
                        var t = tk.deltaX = W(tF),
                            r = tk.deltaY = W(tI),
                            n = Math.abs(t) >= e,
                            i = Math.abs(r) >= e;
                        K && (n || i) && K(tk, t, r, tF, tI), n && (F && tk.deltaX > 0 && F(tk), Y && tk.deltaX < 0 && Y(tk), Z && Z(tk), J && tk.deltaX < 0 != tM < 0 && J(tk), tM = tk.deltaX, tF[0] = tF[1] = tF[2] = 0), i && (Q && tk.deltaY > 0 && Q(tk), G && tk.deltaY < 0 && G(tk), $ && $(tk), tt && tk.deltaY < 0 != tO < 0 && tt(tk), tO = tk.deltaY, tI[0] = tI[1] = tI[2] = 0), (tx || ty) && (tn && tn(tk), ty && (O && 1 === ty && O(tk), S && S(tk), ty = 0), tx = !1), tw && (tw = !1, 1) && tg && tg(tk), tb && (tu(tk), tb = !1), tm = 0
                    },
                    tN = function(t, e, r) {
                        tF[r] += t, tI[r] += e, tk._vx.update(t), tk._vy.update(e), a ? tm || (tm = requestAnimationFrame(tX)) : tX()
                    },
                    tU = function(t, e) {
                        t_ && !tT && (tk.axis = tT = Math.abs(t) > Math.abs(e) ? "x" : "y", tw = !0), "y" !== tT && (tF[2] += t, tk._vx.update(t, !0)), "x" !== tT && (tI[2] += e, tk._vy.update(e, !0)), a ? tm || (tm = requestAnimationFrame(tX)) : tX()
                    },
                    tq = function(t) {
                        if (!tL(t, 1)) {
                            var e = (t = H(t, o)).clientX,
                                n = t.clientY,
                                i = e - tk.x,
                                s = n - tk.y,
                                a = tk.isDragging;
                            tk.x = e, tk.y = n, (a || (i || s) && (Math.abs(tk.startX - e) >= r || Math.abs(tk.startY - n) >= r)) && (ty || (ty = a ? 2 : 1), a || (tk.isDragging = !0), tU(i, s))
                        }
                    },
                    tH = tk.onPress = function(t) {
                        tL(t, 1) || t && t.button || (tk.axis = tT = null, tv.pause(), tk.isPressed = !0, t = H(t), tM = tO = 0, tk.startX = tk.x = t.clientX, tk.startY = tk.y = t.clientY, tk._vx.reset(), tk._vy.reset(), D(ts ? i : tz, x[1], tq, tC, !0), tk.deltaX = tk.deltaY = 0, A && A(tk))
                    },
                    tW = tk.onRelease = function(t) {
                        if (!tL(t, 1)) {
                            R(ts ? i : tz, x[1], tq, !0);
                            var e = !isNaN(tk.y - tk.startY),
                                r = tk.isDragging,
                                n = r && (Math.abs(tk.x - tk.startX) > 3 || Math.abs(tk.y - tk.startY) > 3),
                                s = H(t);
                            !n && e && (tk._vx.reset(), tk._vy.reset(), o && td && l.delayedCall(.08, function() {
                                if (C() - tY > 300 && !t.defaultPrevented) {
                                    if (t.target.click) t.target.click();
                                    else if (tz.createEvent) {
                                        var e = tz.createEvent("MouseEvents");
                                        e.initMouseEvent("click", !0, !0, f, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                                    }
                                }
                            })), tk.isDragging = tk.isGesturing = tk.isPressed = !1, u && r && !ts && tv.restart(!0), ty && tX(), E && r && E(tk), z && z(tk, n)
                        }
                    },
                    tV = function(t) {
                        return t.touches && t.touches.length > 1 && (tk.isGesturing = !0) && ta(t, tk.isDragging)
                    },
                    tj = function() {
                        return tk.isGesturing = !1, to(tk)
                    },
                    tG = function(t) {
                        if (!tL(t)) {
                            var e = tE(),
                                r = tS();
                            tN((e - tA) * th, (r - tP) * th, 1), tA = e, tP = r, u && tv.restart(!0)
                        }
                    },
                    tQ = function(t) {
                        if (!tL(t)) {
                            t = H(t, o), tu && (tb = !0);
                            var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? f.innerHeight : 1) * T;
                            tN(t.deltaX * e, t.deltaY * e, 0), u && !ts && tv.restart(!0)
                        }
                    },
                    tZ = function(t) {
                        if (!tL(t)) {
                            var e = t.clientX,
                                r = t.clientY,
                                n = e - tk.x,
                                i = r - tk.y;
                            tk.x = e, tk.y = r, tx = !0, u && tv.restart(!0), (n || i) && tU(n, i)
                        }
                    },
                    t$ = function(t) {
                        tk.event = t, te(tk)
                    },
                    tK = function(t) {
                        tk.event = t, tr(tk)
                    },
                    tJ = function(t) {
                        return tL(t) || H(t, o) && tf(tk)
                    };
                tv = tk._dc = l.delayedCall(v || .25, function() {
                    tk._vx.reset(), tk._vy.reset(), tv.pause(), u && u(tk)
                }).pause(), tk.deltaX = tk.deltaY = 0, tk._vx = q(0, 50, !0), tk._vy = q(0, 50, !0), tk.scrollX = tE, tk.scrollY = tS, tk.isDragging = tk.isGesturing = tk.isPressed = !1, b(this), tk.enable = function(t) {
                    return !tk.isEnabled && (D(tR ? tz : i, "scroll", I), n.indexOf("scroll") >= 0 && D(tR ? tz : i, "scroll", tG, tC, tp), n.indexOf("wheel") >= 0 && D(i, "wheel", tQ, tC, tp), (n.indexOf("touch") >= 0 && _ || n.indexOf("pointer") >= 0) && (D(i, x[0], tH, tC, tp), D(tz, x[2], tW), D(tz, x[3], tW), td && D(i, "click", tB, !0, !0), tf && D(i, "click", tJ), ta && D(tz, "gesturestart", tV), to && D(tz, "gestureend", tj), te && D(i, g + "enter", t$), tr && D(i, g + "leave", tK), tn && D(i, g + "move", tZ)), tk.isEnabled = !0, tk.isDragging = tk.isGesturing = tk.isPressed = tx = ty = !1, tk._vx.reset(), tk._vy.reset(), tA = tE(), tP = tS(), t && t.type && tH(t), tl && tl(tk)), tk
                }, tk.disable = function() {
                    tk.isEnabled && (k.filter(function(t) {
                        return t !== tk && P(t.target)
                    }).length || R(tR ? tz : i, "scroll", I), tk.isPressed && (tk._vx.reset(), tk._vy.reset(), R(ts ? i : tz, x[1], tq, !0)), R(tR ? tz : i, "scroll", tG, tp), R(i, "wheel", tQ, tp), R(i, x[0], tH, tp), R(tz, x[2], tW), R(tz, x[3], tW), R(i, "click", tB, !0), R(i, "click", tJ), R(tz, "gesturestart", tV), R(tz, "gestureend", tj), R(i, g + "enter", t$), R(i, g + "leave", tK), R(i, g + "move", tZ), tk.isEnabled = tk.isPressed = tk.isDragging = !1, tc && tc(tk))
                }, tk.kill = tk.revert = function() {
                    tk.disable();
                    var t = k.indexOf(tk);
                    t >= 0 && k.splice(t, 1), y === tk && (y = 0)
                }, k.push(tk), ts && P(i) && (y = tk), tk.enable(M)
            }, t = [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }],
            function(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }(e.prototype, t), e
    }();
    G.version = "3.14.2", G.create = function(t) {
        return new G(t)
    }, G.register = j, G.getAll = function() {
        return k.slice()
    }, G.getById = function(t) {
        return k.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, w() && l.registerPlugin(G);
    var Q, Z, $, K, J, tt, te, tr, tn, ti, ts, ta, to, tu, tl, tc, tf, th, tp, td, t_, tg, tm, tv, ty, tx, tb, tw, tT, tk, tM, tO, tC, tE, tS, tA, tP, tD, tR = 1,
        tz = Date.now,
        tF = tz(),
        tI = 0,
        tY = 0,
        tB = function(t, e, r) {
            var n = tK(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return r["_" + e + "Clamp"] = n, n ? t.substr(6, t.length - 7) : t
        },
        tL = function(t, e) {
            return e && (!tK(t) || "clamp(" !== t.substr(0, 6)) ? "clamp(" + t + ")" : t
        },
        tX = function() {
            return tu = 1
        },
        tN = function() {
            return tu = 0
        },
        tU = function(t) {
            return t
        },
        tq = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        tH = function() {
            return "u" > typeof window
        },
        tW = function() {
            return Q || tH() && (Q = window.gsap) && Q.registerPlugin && Q
        },
        tV = function(t) {
            return !!~te.indexOf(t)
        },
        tj = function(t) {
            return ("Height" === t ? tM : $["inner" + t]) || J["client" + t] || tt["client" + t]
        },
        tG = function(t) {
            return A(t, "getBoundingClientRect") || (tV(t) ? function() {
                return e1.width = $.innerWidth, e1.height = tM, e1
            } : function() {
                return ec(t)
            })
        },
        tQ = function(t, e, r) {
            var n = r.d,
                i = r.d2,
                s = r.a;
            return (s = A(t, "getBoundingClientRect")) ? function() {
                return s()[n]
            } : function() {
                return (e ? tj(i) : t["client" + i]) || 0
            }
        },
        tZ = function(t, e) {
            var r = e.s,
                n = e.d2,
                i = e.d,
                s = e.a;
            return Math.max(0, (s = A(t, r = "scroll" + n)) ? s() - tG(t)()[i] : tV(t) ? (J[r] || tt[r]) - tj(n) : t[r] - t["offset" + n])
        },
        t$ = function(t, e) {
            for (var r = 0; r < tp.length; r += 3)(!e || ~e.indexOf(tp[r + 1])) && t(tp[r], tp[r + 1], tp[r + 2])
        },
        tK = function(t) {
            return "string" == typeof t
        },
        tJ = function(t) {
            return "function" == typeof t
        },
        t0 = function(t) {
            return "number" == typeof t
        },
        t1 = function(t) {
            return "object" == typeof t
        },
        t2 = function(t, e, r) {
            return t && t.progress(+!e) && r && t.pause()
        },
        t5 = function(t, e) {
            if (t.enabled) {
                var r = t._ctx ? t._ctx.add(function() {
                    return e(t)
                }) : e(t);
                r && r.totalTime && (t.callbackAnimation = r)
            }
        },
        t3 = Math.abs,
        t8 = "left",
        t6 = "right",
        t4 = "bottom",
        t9 = "width",
        t7 = "height",
        et = "Right",
        ee = "Left",
        er = "Bottom",
        en = "padding",
        ei = "margin",
        es = "Width",
        ea = "Height",
        eo = function(t) {
            return $.getComputedStyle(t)
        },
        eu = function(t) {
            var e = eo(t).position;
            t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
        },
        el = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        ec = function(t, e) {
            var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== eo(t)[tl] && Q.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = t.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        ef = function(t, e) {
            var r = e.d2;
            return t["offset" + r] || t["client" + r] || 0
        },
        eh = function(t) {
            var e, r = [],
                n = t.labels,
                i = t.duration();
            for (e in n) r.push(n[e] / i);
            return r
        },
        ep = function(t) {
            var e = Q.utils.snap(t),
                r = Array.isArray(t) && t.slice(0).sort(function(t, e) {
                    return t - e
                });
            return r ? function(t, n, i) {
                var s;
                if (void 0 === i && (i = .001), !n) return e(t);
                if (n > 0) {
                    for (t -= i, s = 0; s < r.length; s++)
                        if (r[s] >= t) return r[s];
                    return r[s - 1]
                }
                for (s = r.length, t += i; s--;)
                    if (r[s] <= t) return r[s];
                return r[0]
            } : function(r, n, i) {
                void 0 === i && (i = .001);
                var s = e(r);
                return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
            }
        },
        ed = function(t, e, r, n) {
            return r.split(",").forEach(function(r) {
                return t(e, r, n)
            })
        },
        e_ = function(t, e, r, n, i) {
            return t.addEventListener(e, r, {
                passive: !n,
                capture: !!i
            })
        },
        eg = function(t, e, r, n) {
            return t.removeEventListener(e, r, !!n)
        },
        em = function(t, e, r) {
            (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
        },
        ev = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        ey = {
            toggleActions: "play",
            anticipatePin: 0
        },
        ex = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        eb = function(t, e) {
            if (tK(t)) {
                var r = t.indexOf("="),
                    n = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
                ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in ex ? ex[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        },
        ew = function(t, e, r, n, i, s, a, o) {
            var u = i.startColor,
                l = i.endColor,
                c = i.fontSize,
                f = i.indent,
                h = i.fontWeight,
                p = K.createElement("div"),
                d = tV(r) || "fixed" === A(r, "pinType"),
                _ = -1 !== t.indexOf("scroller"),
                g = d ? tt : r,
                m = -1 !== t.indexOf("start"),
                v = m ? u : l,
                y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return y += "position:" + ((_ || o) && d ? "fixed;" : "absolute;"), (_ || o || !d) && (y += (n === L ? t6 : t4) + ":" + (s + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), p.style.cssText = y, p.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + n.op.d2], eT(p, 0, n, m), p
        },
        eT = function(t, e, r, n) {
            var i = {
                    display: "block"
                },
                s = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + es] = 1, i["border" + a + es] = 0, i[r.p] = e + "px", Q.set(t, i)
        },
        ek = [],
        eM = {},
        eO = function() {
            return tz() - tI > 34 && (tS || (tS = requestAnimationFrame(eV)))
        },
        eC = function() {
            tm && tm.isPressed && !(tm.startX > tt.clientWidth) || (M.cache++, tm ? tS || (tS = requestAnimationFrame(eV)) : eV(), tI || eR("scrollStart"), tI = tz())
        },
        eE = function() {
            tx = $.innerWidth, ty = $.innerHeight
        },
        eS = function(t) {
            M.cache++, (!0 === t || !to && !tg && !K.fullscreenElement && !K.webkitFullscreenElement && (!tv || tx !== $.innerWidth || Math.abs($.innerHeight - ty) > .25 * $.innerHeight)) && tr.restart(!0)
        },
        eA = {},
        eP = [],
        eD = function t() {
            return eg(e9, "scrollEnd", t) || eq(!0)
        },
        eR = function(t) {
            return eA[t] && eA[t].map(function(t) {
                return t()
            }) || eP
        },
        ez = [],
        eF = function(t) {
            for (var e = 0; e < ez.length; e += 5)(!t || ez[e + 4] && ez[e + 4].query === t) && (ez[e].style.cssText = ez[e + 1], ez[e].getBBox && ez[e].setAttribute("transform", ez[e + 2] || ""), ez[e + 3].uncache = 1)
        },
        eI = function() {
            return M.forEach(function(t) {
                return tJ(t) && ++t.cacheID && (t.rec = t())
            })
        },
        eY = function(t, e) {
            var r;
            for (tc = 0; tc < ek.length; tc++)(r = ek[tc]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
            tO = !0, e && eF(e), e || eR("revert")
        },
        eB = function(t, e) {
            M.cache++, (e || !tA) && M.forEach(function(t) {
                return tJ(t) && t.cacheID++ && (t.rec = 0)
            }), tK(t) && ($.history.scrollRestoration = tT = t)
        },
        eL = 0,
        eX = function() {
            if (tP !== eL) {
                var t = tP = eL;
                requestAnimationFrame(function() {
                    return t === eL && eq(!0)
                })
            }
        },
        eN = function() {
            tt.appendChild(tk), tM = !tm && tk.offsetHeight || $.innerHeight, tt.removeChild(tk)
        },
        eU = function(t) {
            return tn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
                return e.style.display = t ? "none" : "block"
            })
        },
        eq = function(t, e) {
            if (J = K.documentElement, tt = K.body, te = [$, K, J, tt], tI && !t && !tO) return void e_(e9, "scrollEnd", eD);
            eN(), tA = e9.isRefreshing = !0, tO || eI();
            var r = eR("refreshInit");
            td && e9.sort(), e || eY(), M.forEach(function(t) {
                tJ(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
            }), ek.slice(0).forEach(function(t) {
                return t.refresh()
            }), tO = !1, ek.forEach(function(t) {
                if (t._subPinOffset && t.pin) {
                    var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        r = t.pin[e];
                    t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                }
            }), tC = 1, eU(!0), ek.forEach(function(t) {
                var e = tZ(t.scroller, t._dir),
                    r = "max" === t.vars.end || t._endClamp && t.end > e,
                    n = t._startClamp && t.start >= e;
                (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
            }), eU(!1), tC = 0, r.forEach(function(t) {
                return t && t.render && t.render(-1)
            }), M.forEach(function(t) {
                tJ(t) && (t.smooth && requestAnimationFrame(function() {
                    return t.target.style.scrollBehavior = "smooth"
                }), t.rec && t(t.rec))
            }), eB(tT, 1), tr.pause(), eL++, tA = 2, eV(2), ek.forEach(function(t) {
                return tJ(t.vars.onRefresh) && t.vars.onRefresh(t)
            }), tA = e9.isRefreshing = !1, eR("refresh")
        },
        eH = 0,
        eW = 1,
        eV = function(t) {
            if (2 === t || !tA && !tO) {
                e9.isUpdating = !0, tD && tD.update(0);
                var e = ek.length,
                    r = tz(),
                    n = r - tF >= 50,
                    i = e && ek[0].scroll();
                if (eW = eH > i ? -1 : 1, tA || (eH = i), n && (tI && !tu && r - tI > 200 && (tI = 0, eR("scrollEnd")), ts = tF, tF = r), eW < 0) {
                    for (tc = e; tc-- > 0;) ek[tc] && ek[tc].update(0, n);
                    eW = 1
                } else
                    for (tc = 0; tc < e; tc++) ek[tc] && ek[tc].update(0, n);
                e9.isUpdating = !1
            }
            tS = 0
        },
        ej = [t8, "top", t4, t6, ei + er, ei + et, ei + "Top", ei + ee, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        eG = ej.concat([t9, t7, "boxSizing", "max" + es, "max" + ea, "position", ei, en, en + "Top", en + et, en + er, en + ee]),
        eQ = function(t, e, r) {
            eK(r);
            var n = t._gsap;
            if (n.spacerIsNative) eK(n.spacerState);
            else if (t._gsap.swappedIn) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e))
            }
            t._gsap.swappedIn = !1
        },
        eZ = function(t, e, r, n) {
            if (!t._gsap.swappedIn) {
                for (var i, s = ej.length, a = e.style, o = t.style; s--;) a[i = ej[s]] = r[i];
                a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), o[t4] = o[t6] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[t9] = ef(t, B) + "px", a[t7] = ef(t, L) + "px", a[en] = o[ei] = o.top = o[t8] = "0", eK(n), o[t9] = o["max" + es] = r[t9], o[t7] = o["max" + ea] = r[t7], o[en] = r[en], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
            }
        },
        e$ = /([A-Z])/g,
        eK = function(t) {
            if (t) {
                var e, r, n = t.t.style,
                    i = t.length,
                    s = 0;
                for ((t.t._gsap || Q.core.getCache(t.t)).uncache = 1; s < i; s += 2) r = t[s + 1], e = t[s], r ? n[e] = r : n[e] && n.removeProperty(e.replace(e$, "-$1").toLowerCase())
            }
        },
        eJ = function(t) {
            for (var e = eG.length, r = t.style, n = [], i = 0; i < e; i++) n.push(eG[i], r[eG[i]]);
            return n.t = t, n
        },
        e0 = function(t, e, r) {
            for (var n, i = [], s = t.length, a = 8 * !!r; a < s; a += 2) n = t[a], i.push(n, n in e ? e[n] : t[a + 1]);
            return i.t = t.t, i
        },
        e1 = {
            left: 0,
            top: 0
        },
        e2 = function(t, e, r, n, i, s, a, o, u, l, c, f, h, p) {
            tJ(t) && (t = t(o)), tK(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? eb("0" + t.substr(3), r) : 0));
            var d, _, g, m = h ? h.time() : 0;
            if (h && h.seek(0), isNaN(t) || (t *= 1), t0(t)) h && (t = Q.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)), a && eT(a, r, n, !0);
            else {
                tJ(e) && (e = e(o));
                var v, y, x, b, w = (t || "0").split(" ");
                (v = ec(g = X(e, o) || tt) || {}).left || v.top || "none" !== eo(g).display || (b = g.style.display, g.style.display = "block", v = ec(g), b ? g.style.display = b : g.style.removeProperty("display")), y = eb(w[0], v[n.d]), x = eb(w[1] || "0", r), t = v[n.p] - u[n.p] - l + y + i - x, a && eT(a, x, n, r - x < 20 || a._isStart && x > 20), r -= r - x
            }
            if (p && (o[p] = t || -.001, t < 0 && (t = 0)), s) {
                var T = t + r,
                    k = s._isStart;
                d = "scroll" + n.d2, eT(s, T, n, k && T > 20 || !k && (c ? Math.max(tt[d], J[d]) : s.parentNode[d]) <= T + 1), c && (u = ec(a), c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + "px"))
            }
            return h && g && (d = ec(g), h.seek(f), _ = ec(g), h._caScrollDist = d[n.p] - _[n.p], t = t / h._caScrollDist * f), h && h.seek(m), h ? t : Math.round(t)
        },
        e5 = /(webkit|moz|length|cssText|inset)/i,
        e3 = function(t, e, r, n) {
            if (t.parentNode !== e) {
                var i, s, a = t.style;
                if (e === tt) {
                    for (i in t._stOrig = a.cssText, s = eo(t)) + i || e5.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
                    a.top = r, a.left = n
                } else a.cssText = t._stOrig;
                Q.core.getCache(t).uncache = 1, e.appendChild(t)
            }
        },
        e8 = function(t, e, r) {
            var n = e,
                i = n;
            return function(e) {
                var s = Math.round(t());
                return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (e = s, r && r()), i = n, n = Math.round(e)
            }
        },
        e6 = function(t, e, r) {
            var n = {};
            n[e.p] = "+=" + r, Q.set(t, n)
        },
        e4 = function(t, e) {
            var r = U(t, e),
                n = "_scroll" + e.p2,
                i = function e(i, s, a, o, u) {
                    var l = e.tween,
                        c = s.onComplete,
                        f = {};
                    a = a || r();
                    var h = e8(r, a, function() {
                        l.kill(), e.tween = 0
                    });
                    return u = o && u || 0, o = o || i - a, l && l.kill(), s[n] = i, s.inherit = !1, s.modifiers = f, f[n] = function() {
                        return h(a + o * l.ratio + u * l.ratio * l.ratio)
                    }, s.onUpdate = function() {
                        M.cache++, e.tween && eV()
                    }, s.onComplete = function() {
                        e.tween = 0, c && c.call(l)
                    }, l = e.tween = Q.to(t, s)
                };
            return t[n] = r, r.wheelHandler = function() {
                return i.tween && i.tween.kill() && (i.tween = 0)
            }, e_(t, "wheel", r.wheelHandler), e9.isTouch && e_(t, "touchmove", r.wheelHandler), i
        },
        e9 = function() {
            function t(e, r) {
                Z || t.register(Q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), tw(this), this.init(e, r)
            }
            return t.prototype.init = function(e, r) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !tY) {
                    this.update = this.refresh = this.kill = tU;
                    return
                }
                var n, i, s, a, o, u, l, c, f, h, p, d, _, g, m, v, y, x, b, w, T, k, C, E, S, P, D, R, z, F, I, Y, N, q, H, W, V, j, G, Z, te, tr = e = el(tK(e) || t0(e) || e.nodeType ? {
                        trigger: e
                    } : e, ey),
                    ta = tr.onUpdate,
                    tl = tr.toggleClass,
                    tf = tr.id,
                    th = tr.onToggle,
                    tp = tr.onRefresh,
                    tg = tr.scrub,
                    tm = tr.trigger,
                    tv = tr.pin,
                    ty = tr.pinSpacing,
                    tx = tr.invalidateOnRefresh,
                    tb = tr.anticipatePin,
                    tw = tr.onScrubComplete,
                    tT = tr.onSnapComplete,
                    tk = tr.once,
                    tM = tr.snap,
                    tO = tr.pinReparent,
                    tS = tr.pinSpacer,
                    tP = tr.containerAnimation,
                    tF = tr.fastScrollEnd,
                    tX = tr.preventOverlaps,
                    tN = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? B : L,
                    tH = !tg && 0 !== tg,
                    tW = X(e.scroller || $),
                    tj = Q.core.getCache(tW),
                    t$ = tV(tW),
                    t8 = ("pinType" in e ? e.pinType : A(tW, "pinType") || t$ && "fixed") === "fixed",
                    t6 = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    t4 = tH && e.toggleActions.split(" "),
                    ed = "markers" in e ? e.markers : ey.markers,
                    em = t$ ? 0 : parseFloat(eo(tW)["border" + tN.p2 + es]) || 0,
                    ex = this,
                    eT = e.onRefreshInit && function() {
                        return e.onRefreshInit(ex)
                    },
                    eO = tQ(tW, t$, tN),
                    eE = !t$ || ~O.indexOf(tW) ? tG(tW) : function() {
                        return e1
                    },
                    eA = 0,
                    eP = 0,
                    eR = 0,
                    ez = U(tW, tN);
                if (ex._startClamp = ex._endClamp = !1, ex._dir = tN, tb *= 45, ex.scroller = tW, ex.scroll = tP ? tP.time.bind(tP) : ez, u = ez(), ex.vars = e, r = r || e.animation, "refreshPriority" in e && (td = 1, -9999 === e.refreshPriority && (tD = ex)), tj.tweenScroll = tj.tweenScroll || {
                        top: e4(tW, L),
                        left: e4(tW, B)
                    }, ex.tweenTo = s = tj.tweenScroll[tN.p], ex.scrubDuration = function(t) {
                        (H = t0(t) && t) ? q ? q.duration(t) : q = Q.to(r, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: H,
                            paused: !0,
                            onComplete: function() {
                                return tw && tw(ex)
                            }
                        }): (q && q.progress(1).kill(), q = 0)
                    }, r && (r.vars.lazy = !1, r._initted && !ex.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), ex.animation = r.pause(), r.scrollTrigger = ex, ex.scrubDuration(tg), Y = 0, tf || (tf = r.vars.id)), tM && ((!t1(tM) || tM.push) && (tM = {
                        snapTo: tM
                    }), "scrollBehavior" in tt.style && Q.set(t$ ? [tt, J] : tW, {
                        scrollBehavior: "auto"
                    }), M.forEach(function(t) {
                        return tJ(t) && t.target === (t$ ? K.scrollingElement || J : tW) && (t.smooth = !1)
                    }), o = tJ(tM.snapTo) ? tM.snapTo : "labels" === tM.snapTo ? (n = r, function(t) {
                        return Q.utils.snap(eh(n), t)
                    }) : "labelsDirectional" === tM.snapTo ? (i = r, function(t, e) {
                        return ep(eh(i))(t, e.direction)
                    }) : !1 !== tM.directional ? function(t, e) {
                        return ep(tM.snapTo)(t, tz() - eP < 500 ? 0 : e.direction)
                    } : Q.utils.snap(tM.snapTo), W = t1(W = tM.duration || {
                        min: .1,
                        max: 2
                    }) ? ti(W.min, W.max) : ti(W, W), V = Q.delayedCall(tM.delay || H / 2 || .1, function() {
                        var t = ez(),
                            e = tz() - eP < 500,
                            n = s.tween;
                        if ((e || 10 > Math.abs(ex.getVelocity())) && !n && !tu && eA !== t) {
                            var i, a, u = (t - c) / v,
                                l = r && !tH ? r.totalProgress() : u,
                                h = e ? 0 : (l - N) / (tz() - ts) * 1e3 || 0,
                                p = Q.utils.clamp(-u, 1 - u, t3(h / 2) * h / .185),
                                d = u + (!1 === tM.inertia ? 0 : p),
                                _ = tM,
                                g = _.onStart,
                                m = _.onInterrupt,
                                y = _.onComplete;
                            if (t0(i = o(d, ex)) || (i = d), a = Math.max(0, Math.round(c + i * v)), t <= f && t >= c && a !== t) {
                                if (n && !n._initted && n.data <= t3(a - t)) return;
                                !1 === tM.inertia && (p = i - u), s(a, {
                                    duration: W(t3(.185 * Math.max(t3(d - l), t3(i - l)) / h / .05 || 0)),
                                    ease: tM.ease || "power3",
                                    data: t3(a - t),
                                    onInterrupt: function() {
                                        return V.restart(!0) && m && m(ex)
                                    },
                                    onComplete: function() {
                                        ex.update(), eA = ez(), r && !tH && (q ? q.resetTo("totalProgress", i, r._tTime / r._tDur) : r.progress(i)), Y = N = r && !tH ? r.totalProgress() : ex.progress, tT && tT(ex), y && y(ex)
                                    }
                                }, t, p * v, a - t - p * v), g && g(ex, s.tween)
                            }
                        } else ex.isActive && eA !== t && V.restart(!0)
                    }).pause()), tf && (eM[tf] = ex), (te = (tm = ex.trigger = X(tm || !0 !== tv && tv)) && tm._gsap && tm._gsap.stRevert) && (te = te(ex)), tv = !0 === tv ? tm : X(tv), tK(tl) && (tl = {
                        targets: tm,
                        className: tl
                    }), tv && (!1 === ty || ty === ei || (ty = (!!ty || !tv.parentNode || !tv.parentNode.style || "flex" !== eo(tv.parentNode).display) && en), ex.pin = tv, (a = Q.core.getCache(tv)).spacer ? y = a.pinState : (tS && ((tS = X(tS)) && !tS.nodeType && (tS = tS.current || tS.nativeElement), a.spacerIsNative = !!tS, tS && (a.spacerState = eJ(tS))), a.spacer = w = tS || K.createElement("div"), w.classList.add("pin-spacer"), tf && w.classList.add("pin-spacer-" + tf), a.pinState = y = eJ(tv)), !1 !== e.force3D && Q.set(tv, {
                        force3D: !0
                    }), ex.spacer = w = a.spacer, P = (I = eo(tv))[ty + tN.os2], k = Q.getProperty(tv), C = Q.quickSetter(tv, tN.a, "px"), eZ(tv, w, I), b = eJ(tv)), ed) {
                    g = t1(ed) ? el(ed, ev) : ev, d = ew("scroller-start", tf, tW, tN, g, 0), _ = ew("scroller-end", tf, tW, tN, g, 0, d), T = d["offset" + tN.op.d2];
                    var eF = X(A(tW, "content") || tW);
                    h = this.markerStart = ew("start", tf, eF, tN, g, T, 0, tP), p = this.markerEnd = ew("end", tf, eF, tN, g, T, 0, tP), tP && (Z = Q.quickSetter([h, p], tN.a, "px")), t8 || O.length && !0 === A(tW, "fixedMarkers") || (eu(t$ ? tt : tW), Q.set([d, _], {
                        force3D: !0
                    }), R = Q.quickSetter(d, tN.a, "px"), F = Q.quickSetter(_, tN.a, "px"))
                }
                if (tP) {
                    var eI = tP.vars.onUpdate,
                        eY = tP.vars.onUpdateParams;
                    tP.eventCallback("onUpdate", function() {
                        ex.update(0, 0, 1), eI && eI.apply(tP, eY || [])
                    })
                }
                if (ex.previous = function() {
                        return ek[ek.indexOf(ex) - 1]
                    }, ex.next = function() {
                        return ek[ek.indexOf(ex) + 1]
                    }, ex.revert = function(t, e) {
                        if (!e) return ex.kill(!0);
                        var n = !1 !== t || !ex.enabled,
                            i = to;
                        n !== ex.isReverted && (n && (j = Math.max(ez(), ex.scroll.rec || 0), eR = ex.progress, G = r && r.progress()), h && [h, p, d, _].forEach(function(t) {
                            return t.style.display = n ? "none" : "block"
                        }), n && (to = ex, ex.update(n)), !tv || tO && ex.isActive || (n ? eQ(tv, w, y) : eZ(tv, w, eo(tv), D)), n || ex.update(n), to = i, ex.isReverted = n)
                    }, ex.refresh = function(n, i, a, o) {
                        if (!to && ex.enabled || i) {
                            if (tv && n && tI) return void e_(t, "scrollEnd", eD);
                            !tA && eT && eT(ex), to = ex, s.tween && !a && (s.tween.kill(), s.tween = 0), q && q.pause(), tx && r && (r.revert({
                                kill: !1
                            }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(t) {
                                return t.vars.immediateRender && t.render(0, !0, !0)
                            }) : r.vars.immediateRender && r.render(0, !0, !0)), ex.isReverted || ex.revert(!0, !0), ex._subPinOffset = !1;
                            var g, T, M, O, C, A, P, R, F, I, Y, N, H, W = eO(),
                                Z = eE(),
                                $ = tP ? tP.duration() : tZ(tW, tN),
                                te = v <= .01 || !v,
                                tr = 0,
                                tn = o || 0,
                                ti = t1(a) ? a.end : e.end,
                                ts = e.endTrigger || tm,
                                ta = t1(a) ? a.start : e.start || (0 !== e.start && tm ? tv ? "0 0" : "0 100%" : 0),
                                tu = ex.pinnedContainer = e.pinnedContainer && X(e.pinnedContainer, ex),
                                tl = tm && Math.max(0, ek.indexOf(ex)) || 0,
                                tc = tl;
                            for (ed && t1(a) && (N = Q.getProperty(d, tN.p), H = Q.getProperty(_, tN.p)); tc-- > 0;)(A = ek[tc]).end || A.refresh(0, 1) || (to = ex), (P = A.pin) && (P === tm || P === tv || P === tu) && !A.isReverted && (I || (I = []), I.unshift(A), A.revert(!0, !0)), A !== ek[tc] && (tl--, tc--);
                            for (tJ(ta) && (ta = ta(ex)), c = e2(ta = tB(ta, "start", ex), tm, W, tN, ez(), h, d, ex, Z, em, t8, $, tP, ex._startClamp && "_startClamp") || (tv ? -.001 : 0), tJ(ti) && (ti = ti(ex)), tK(ti) && !ti.indexOf("+=") && (~ti.indexOf(" ") ? ti = (tK(ta) ? ta.split(" ")[0] : "") + ti : (tr = eb(ti.substr(2), W), ti = tK(ta) ? ta : (tP ? Q.utils.mapRange(0, tP.duration(), tP.scrollTrigger.start, tP.scrollTrigger.end, c) : c) + tr, ts = tm)), ti = tB(ti, "end", ex), f = Math.max(c, e2(ti || (ts ? "100% 0" : $), ts, W, tN, ez() + tr, p, _, ex, Z, em, t8, $, tP, ex._endClamp && "_endClamp")) || -.001, tr = 0, tc = tl; tc--;)(P = (A = ek[tc] || {}).pin) && A.start - A._pinPush <= c && !tP && A.end > 0 && (g = A.end - (ex._startClamp ? Math.max(0, A.start) : A.start), (P === tm && A.start - A._pinPush < c || P === tu) && isNaN(ta) && (tr += g * (1 - A.progress)), P === tv && (tn += g));
                            if (c += tr, f += tr, ex._startClamp && (ex._startClamp += tr), ex._endClamp && !tA && (ex._endClamp = f || -.001, f = Math.min(f, tZ(tW, tN))), v = f - c || (c -= .01) && .001, te && (eR = Q.utils.clamp(0, 1, Q.utils.normalize(c, f, j))), ex._pinPush = tn, h && tr && ((g = {})[tN.a] = "+=" + tr, tu && (g[tN.p] = "-=" + ez()), Q.set([h, p], g)), tv && !(tC && ex.end >= tZ(tW, tN))) g = eo(tv), O = tN === L, M = ez(), E = parseFloat(k(tN.a)) + tn, !$ && f > 1 && (Y = {
                                style: Y = (t$ ? K.scrollingElement || J : tW).style,
                                value: Y["overflow" + tN.a.toUpperCase()]
                            }, t$ && "scroll" !== eo(tt)["overflow" + tN.a.toUpperCase()] && (Y.style["overflow" + tN.a.toUpperCase()] = "scroll")), eZ(tv, w, g), b = eJ(tv), T = ec(tv, !0), R = t8 && U(tW, O ? B : L)(), ty ? ((D = [ty + tN.os2, v + tn + "px"]).t = w, (tc = ty === en ? ef(tv, tN) + v + tn : 0) && (D.push(tN.d, tc + "px"), "auto" !== w.style.flexBasis && (w.style.flexBasis = tc + "px")), eK(D), tu && ek.forEach(function(t) {
                                t.pin === tu && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                            }), t8 && ez(j)) : (tc = ef(tv, tN)) && "auto" !== w.style.flexBasis && (w.style.flexBasis = tc + "px"), t8 && ((C = {
                                top: T.top + (O ? M - c : R) + "px",
                                left: T.left + (O ? R : M - c) + "px",
                                boxSizing: "border-box",
                                position: "fixed"
                            })[t9] = C["max" + es] = Math.ceil(T.width) + "px", C[t7] = C["max" + ea] = Math.ceil(T.height) + "px", C[ei] = C[ei + "Top"] = C[ei + et] = C[ei + er] = C[ei + ee] = "0", C[en] = g[en], C[en + "Top"] = g[en + "Top"], C[en + et] = g[en + et], C[en + er] = g[en + er], C[en + ee] = g[en + ee], x = e0(y, C, tO), tA && ez(0)), r ? (F = r._initted, t_(1), r.render(r.duration(), !0, !0), S = k(tN.a) - E + v + tn, z = Math.abs(v - S) > 1, t8 && z && x.splice(x.length - 2, 2), r.render(0, !0, !0), F || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), t_(0)) : S = v, Y && (Y.value ? Y.style["overflow" + tN.a.toUpperCase()] = Y.value : Y.style.removeProperty("overflow-" + tN.a));
                            else if (tm && ez() && !tP)
                                for (T = tm.parentNode; T && T !== tt;) T._pinOffset && (c -= T._pinOffset, f -= T._pinOffset), T = T.parentNode;
                            I && I.forEach(function(t) {
                                return t.revert(!1, !0)
                            }), ex.start = c, ex.end = f, u = l = tA ? j : ez(), tP || tA || (u < j && ez(j), ex.scroll.rec = 0), ex.revert(!1, !0), eP = tz(), V && (eA = -1, V.restart(!0)), to = 0, r && tH && (r._initted || G) && r.progress() !== G && r.progress(G || 0, !0).render(r.time(), !0, !0), (te || eR !== ex.progress || tP || tx || r && !r._initted) && (r && !tH && (r._initted || eR || !1 !== r.vars.immediateRender) && r.totalProgress(tP && c < -.001 && !eR ? Q.utils.normalize(c, f, 0) : eR, !0), ex.progress = te || (u - c) / v === eR ? 0 : eR), tv && ty && (w._pinOffset = Math.round(ex.progress * S)), q && q.invalidate(), isNaN(N) || (N -= Q.getProperty(d, tN.p), H -= Q.getProperty(_, tN.p), e6(d, tN, N), e6(h, tN, N - (o || 0)), e6(_, tN, H), e6(p, tN, H - (o || 0))), te && !tA && ex.update(), !tp || tA || m || (m = !0, tp(ex), m = !1)
                        }
                    }, ex.getVelocity = function() {
                        return (ez() - l) / (tz() - ts) * 1e3 || 0
                    }, ex.endAnimation = function() {
                        t2(ex.callbackAnimation), r && (q ? q.progress(1) : r.paused() ? tH || t2(r, ex.direction < 0, 1) : t2(r, r.reversed()))
                    }, ex.labelToScroll = function(t) {
                        return r && r.labels && (c || ex.refresh() || c) + r.labels[t] / r.duration() * v || 0
                    }, ex.getTrailing = function(t) {
                        var e = ek.indexOf(ex),
                            r = ex.direction > 0 ? ek.slice(0, e).reverse() : ek.slice(e + 1);
                        return (tK(t) ? r.filter(function(e) {
                            return e.vars.preventOverlaps === t
                        }) : r).filter(function(t) {
                            return ex.direction > 0 ? t.end <= c : t.start >= f
                        })
                    }, ex.update = function(t, e, n) {
                        if (!tP || n || t) {
                            var i, a, o, h, p, _, g, m = !0 === tA ? j : ex.scroll(),
                                y = t ? 0 : (m - c) / v,
                                T = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                                k = ex.progress;
                            if (e && (l = u, u = tP ? ez() : m, tM && (N = Y, Y = r && !tH ? r.totalProgress() : T)), tb && tv && !to && !tR && tI && (!T && c < m + (m - l) / (tz() - ts) * tb ? T = 1e-4 : 1 === T && f > m + (m - l) / (tz() - ts) * tb && (T = .9999)), T !== k && ex.enabled) {
                                if (h = (p = (i = ex.isActive = !!T && T < 1) != (!!k && k < 1)) || !!T != !!k, ex.direction = T > k ? 1 : -1, ex.progress = T, h && !to && (a = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3, tH && (o = !p && "none" !== t4[a + 1] && t4[a + 1] || t4[a], g = r && ("complete" === o || "reset" === o || o in r))), tX && (p || g) && (g || tg || !r) && (tJ(tX) ? tX(ex) : ex.getTrailing(tX).forEach(function(t) {
                                        return t.endAnimation()
                                    })), !tH && (!q || to || tR ? r && r.totalProgress(T, !!(to && (eP || t))) : (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start), q.resetTo ? q.resetTo("totalProgress", T, r._tTime / r._tDur) : (q.vars.totalProgress = T, q.invalidate().restart()))), tv)
                                    if (t && ty && (w.style[ty + tN.os2] = P), t8) {
                                        if (h) {
                                            if (_ = !t && T > k && f + 1 > m && m + 1 >= tZ(tW, tN), tO)
                                                if (!t && (i || _)) {
                                                    var M = ec(tv, !0),
                                                        O = m - c;
                                                    e3(tv, tt, M.top + (tN === L ? O : 0) + "px", M.left + (tN === L ? 0 : O) + "px")
                                                } else e3(tv, w);
                                            eK(i || _ ? x : b), z && T < 1 && i || C(E + (1 !== T || _ ? 0 : S))
                                        }
                                    } else C(tq(E + S * T));
                                !tM || s.tween || to || tR || V.restart(!0), tl && (p || tk && T && (T < 1 || !tE)) && tn(tl.targets).forEach(function(t) {
                                    return t.classList[i || tk ? "add" : "remove"](tl.className)
                                }), !ta || tH || t || ta(ex), h && !to ? (tH && (g && ("complete" === o ? r.pause().totalProgress(1) : "reset" === o ? r.restart(!0).pause() : "restart" === o ? r.restart(!0) : r[o]()), ta && ta(ex)), (p || !tE) && (th && p && t5(ex, th), t6[a] && t5(ex, t6[a]), tk && (1 === T ? ex.kill(!1, 1) : t6[a] = 0), !p && t6[a = 1 === T ? 1 : 3] && t5(ex, t6[a])), tF && !i && Math.abs(ex.getVelocity()) > (t0(tF) ? tF : 2500) && (t2(ex.callbackAnimation), q ? q.progress(1) : t2(r, "reverse" === o ? 1 : !T, 1))) : tH && ta && !to && ta(ex)
                            }
                            if (F) {
                                var A = tP ? m / tP.duration() * (tP._caScrollDist || 0) : m;
                                R(A + +!!d._isFlipped), F(A)
                            }
                            Z && Z(-m / tP.duration() * (tP._caScrollDist || 0))
                        }
                    }, ex.enable = function(e, r) {
                        ex.enabled || (ex.enabled = !0, e_(tW, "resize", eS), t$ || e_(tW, "scroll", eC), eT && e_(t, "refreshInit", eT), !1 !== e && (ex.progress = eR = 0, u = l = eA = ez()), !1 !== r && ex.refresh())
                    }, ex.getTween = function(t) {
                        return t && s ? s.tween : q
                    }, ex.setPositions = function(t, e, r, n) {
                        if (tP) {
                            var i = tP.scrollTrigger,
                                s = tP.duration(),
                                a = i.end - i.start;
                            t = i.start + a * t / s, e = i.start + a * e / s
                        }
                        ex.refresh(!1, !1, {
                            start: tL(t, r && !!ex._startClamp),
                            end: tL(e, r && !!ex._endClamp)
                        }, n), ex.update()
                    }, ex.adjustPinSpacing = function(t) {
                        if (D && t) {
                            var e = D.indexOf(tN.d) + 1;
                            D[e] = parseFloat(D[e]) + t + "px", D[1] = parseFloat(D[1]) + t + "px", eK(D)
                        }
                    }, ex.disable = function(e, r) {
                        if (!1 !== e && ex.revert(!0, !0), ex.enabled && (ex.enabled = ex.isActive = !1, r || q && q.pause(), j = 0, a && (a.uncache = 1), eT && eg(t, "refreshInit", eT), V && (V.pause(), s.tween && s.tween.kill() && (s.tween = 0)), !t$)) {
                            for (var n = ek.length; n--;)
                                if (ek[n].scroller === tW && ek[n] !== ex) return;
                            eg(tW, "resize", eS), t$ || eg(tW, "scroll", eC)
                        }
                    }, ex.kill = function(t, n) {
                        ex.disable(t, n), q && !n && q.kill(), tf && delete eM[tf];
                        var i = ek.indexOf(ex);
                        i >= 0 && ek.splice(i, 1), i === tc && eW > 0 && tc--, i = 0, ek.forEach(function(t) {
                            return t.scroller === ex.scroller && (i = 1)
                        }), i || tA || (ex.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                            kill: !1
                        }), n || r.kill()), h && [h, p, d, _].forEach(function(t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        }), tD === ex && (tD = 0), tv && (a && (a.uncache = 1), i = 0, ek.forEach(function(t) {
                            return t.pin === tv && i++
                        }), i || (a.spacer = 0)), e.onKill && e.onKill(ex)
                    }, ek.push(ex), ex.enable(!1, !1), te && te(ex), r && r.add && !v) {
                    var eB = ex.update;
                    ex.update = function() {
                        ex.update = eB, M.cache++, c || f || ex.refresh()
                    }, Q.delayedCall(.01, ex.update), v = .01, c = f = 0
                } else ex.refresh();
                tv && eX()
            }, t.register = function(e) {
                return Z || (Q = e || tW(), tH() && window.document && t.enable(), Z = tY), Z
            }, t.defaults = function(t) {
                if (t)
                    for (var e in t) ey[e] = t[e];
                return ey
            }, t.disable = function(t, e) {
                tY = 0, ek.forEach(function(r) {
                    return r[e ? "kill" : "disable"](t)
                }), eg($, "wheel", eC), eg(K, "scroll", eC), clearInterval(ta), eg(K, "touchcancel", tU), eg(tt, "touchstart", tU), ed(eg, K, "pointerdown,touchstart,mousedown", tX), ed(eg, K, "pointerup,touchend,mouseup", tN), tr.kill(), t$(eg);
                for (var r = 0; r < M.length; r += 3) em(eg, M[r], M[r + 1]), em(eg, M[r], M[r + 2])
            }, t.enable = function() {
                if ($ = window, J = (K = document).documentElement, tt = K.body, Q && (tn = Q.utils.toArray, ti = Q.utils.clamp, tw = Q.core.context || tU, t_ = Q.core.suppressOverwrites || tU, tT = $.history.scrollRestoration || "auto", eH = $.pageYOffset || 0, Q.core.globals("ScrollTrigger", t), tt)) {
                    tY = 1, (tk = document.createElement("div")).style.height = "100vh", tk.style.position = "absolute", eN(),
                        function t() {
                            return tY && requestAnimationFrame(t)
                        }(), G.register(Q), t.isTouch = G.isTouch, tb = G.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), tv = 1 === G.isTouch, e_($, "wheel", eC), te = [$, K, J, tt], Q.matchMedia ? (t.matchMedia = function(t) {
                            var e, r = Q.matchMedia();
                            for (e in t) r.add(e, t[e]);
                            return r
                        }, Q.addEventListener("matchMediaInit", function() {
                            eI(), eY()
                        }), Q.addEventListener("matchMediaRevert", function() {
                            return eF()
                        }), Q.addEventListener("matchMedia", function() {
                            eq(0, 1), eR("matchMedia")
                        }), Q.matchMedia().add("(orientation: portrait)", function() {
                            return eE(), eE
                        })) : console.warn("Requires GSAP 3.11.0 or later"), eE(), e_(K, "scroll", eC);
                    var e, r, n = tt.hasAttribute("style"),
                        i = tt.style,
                        s = i.borderTopStyle,
                        a = Q.core.Animation.prototype;
                    for (a.revert || Object.defineProperty(a, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }), i.borderTopStyle = "solid", L.m = Math.round((e = ec(tt)).top + L.sc()) || 0, B.m = Math.round(e.left + B.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), n || (tt.setAttribute("style", ""), tt.removeAttribute("style")), ta = setInterval(eO, 250), Q.delayedCall(.5, function() {
                            return tR = 0
                        }), e_(K, "touchcancel", tU), e_(tt, "touchstart", tU), ed(e_, K, "pointerdown,touchstart,mousedown", tX), ed(e_, K, "pointerup,touchend,mouseup", tN), tl = Q.utils.checkPrefix("transform"), eG.push(tl), Z = tz(), tr = Q.delayedCall(.2, eq).pause(), tp = [K, "visibilitychange", function() {
                            var t = $.innerWidth,
                                e = $.innerHeight;
                            K.hidden ? (tf = t, th = e) : (tf !== t || th !== e) && eS()
                        }, K, "DOMContentLoaded", eq, $, "load", eq, $, "resize", eS], t$(e_), ek.forEach(function(t) {
                            return t.enable(0, 1)
                        }), r = 0; r < M.length; r += 3) em(eg, M[r], M[r + 1]), em(eg, M[r], M[r + 2])
                }
            }, t.config = function(e) {
                "limitCallbacks" in e && (tE = !!e.limitCallbacks);
                var r = e.syncInterval;
                r && clearInterval(ta) || (ta = r) && setInterval(eO, r), "ignoreMobileResize" in e && (tv = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (t$(eg) || t$(e_, e.autoRefreshEvents || "none"), tg = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function(t, e) {
                var r = X(t),
                    n = M.indexOf(r),
                    i = tV(r);
                ~n && M.splice(n, i ? 6 : 2), e && (i ? O.unshift($, e, tt, e, J, e) : O.unshift(r, e))
            }, t.clearMatchMedia = function(t) {
                ek.forEach(function(e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                })
            }, t.isInViewport = function(t, e, r) {
                var n = (tK(t) ? X(t) : t).getBoundingClientRect(),
                    i = n[r ? t9 : t7] * e || 0;
                return r ? n.right - i > 0 && n.left + i < $.innerWidth : n.bottom - i > 0 && n.top + i < $.innerHeight
            }, t.positionInViewport = function(t, e, r) {
                tK(t) && (t = X(t));
                var n = t.getBoundingClientRect(),
                    i = n[r ? t9 : t7],
                    s = null == e ? i / 2 : e in ex ? ex[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                return r ? (n.left + s) / $.innerWidth : (n.top + s) / $.innerHeight
            }, t.killAll = function(t) {
                if (ek.slice(0).forEach(function(t) {
                        return "ScrollSmoother" !== t.vars.id && t.kill()
                    }), !0 !== t) {
                    var e = eA.killAll || [];
                    eA = {}, e.forEach(function(t) {
                        return t()
                    })
                }
            }, t
        }();
    e9.version = "3.14.2", e9.saveStyles = function(t) {
        return t ? tn(t).forEach(function(t) {
            if (t && t.style) {
                var e = ez.indexOf(t);
                e >= 0 && ez.splice(e, 5), ez.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Q.core.getCache(t), tw())
            }
        }) : ez
    }, e9.revert = function(t, e) {
        return eY(!t, e)
    }, e9.create = function(t, e) {
        return new e9(t, e)
    }, e9.refresh = function(t) {
        return t ? eS(!0) : (Z || e9.register()) && eq(!0)
    }, e9.update = function(t) {
        return ++M.cache && eV(2 * (!0 === t))
    }, e9.clearScrollMemory = eB, e9.maxScroll = function(t, e) {
        return tZ(t, e ? B : L)
    }, e9.getScrollFunc = function(t, e) {
        return U(X(t), e ? B : L)
    }, e9.getById = function(t) {
        return eM[t]
    }, e9.getAll = function() {
        return ek.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }, e9.isScrolling = function() {
        return !!tI
    }, e9.snapDirectional = ep, e9.addEventListener = function(t, e) {
        var r = eA[t] || (eA[t] = []);
        ~r.indexOf(e) || r.push(e)
    }, e9.removeEventListener = function(t, e) {
        var r = eA[t],
            n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    }, e9.batch = function(t, e) {
        var r, n = [],
            i = {},
            s = e.interval || .016,
            a = e.batchMax || 1e9,
            o = function(t, e) {
                var r = [],
                    n = [],
                    i = Q.delayedCall(s, function() {
                        e(r, n), r = [], n = []
                    }).pause();
                return function(t) {
                    r.length || i.restart(!0), r.push(t.trigger), n.push(t), a <= r.length && i.progress(1)
                }
            };
        for (r in e) i[r] = "on" === r.substr(0, 2) && tJ(e[r]) && "onRefreshInit" !== r ? o(r, e[r]) : e[r];
        return tJ(a) && (a = a(), e_(e9, "refresh", function() {
            return a = e.batchMax()
        })), tn(t).forEach(function(t) {
            var e = {};
            for (r in i) e[r] = i[r];
            e.trigger = t, n.push(e9.create(e))
        }), n
    };
    var e7, rt = function(t, e, r, n) {
            return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
        },
        re = function t(e, r) {
            !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (G.isTouch ? " pinch-zoom" : "") : "none", e === J && t(tt, r)
        },
        rr = {
            auto: 1,
            scroll: 1
        },
        rn = function(t) {
            var e, r = t.event,
                n = t.target,
                i = t.axis,
                s = (r.changedTouches ? r.changedTouches[0] : r).target,
                a = s._gsap || Q.core.getCache(s),
                o = tz();
            if (!a._isScrollT || o - a._isScrollT > 2e3) {
                for (; s && s !== tt && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(rr[(e = eo(s)).overflowY] || rr[e.overflowX]));) s = s.parentNode;
                a._isScroll = s && s !== n && !tV(s) && (rr[(e = eo(s)).overflowY] || rr[e.overflowX]), a._isScrollT = o
            }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        ri = function(t, e, r, n) {
            return G.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: n = n && rn,
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function() {
                    return r && e_(K, G.eventTypes[0], ra, !1, !0)
                },
                onDisable: function() {
                    return eg(K, G.eventTypes[0], ra, !0)
                }
            })
        },
        rs = /(input|label|select|textarea)/i,
        ra = function(t) {
            var e = rs.test(t.target.tagName);
            (e || e7) && (t._gsapAllow = !0, e7 = e)
        },
        ro = function(t) {
            t1(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
            var e, r, n, i, s, a, o, u, l = t,
                c = l.normalizeScrollX,
                f = l.momentum,
                h = l.allowNestedScroll,
                p = l.onRelease,
                d = X(t.target) || J,
                _ = Q.core.globals().ScrollSmoother,
                g = _ && _.get(),
                m = tb && (t.content && X(t.content) || g && !1 !== t.content && !g.smooth() && g.content()),
                v = U(d, L),
                y = U(d, B),
                x = 1,
                b = (G.isTouch && $.visualViewport ? $.visualViewport.scale * $.visualViewport.width : $.outerWidth) / $.innerWidth,
                w = 0,
                T = tJ(f) ? function() {
                    return f(e)
                } : function() {
                    return f || 2.8
                },
                k = ri(d, t.type, !0, h),
                O = function() {
                    return i = !1
                },
                C = tU,
                E = tU,
                S = function() {
                    r = tZ(d, L), E = ti(+!!tb, r), c && (C = ti(0, tZ(d, B))), n = eL
                },
                A = function() {
                    m._gsap.y = tq(parseFloat(m._gsap.y) + v.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
                },
                P = function() {
                    if (i) {
                        requestAnimationFrame(O);
                        var t = tq(e.deltaY / 2),
                            r = E(v.v - t);
                        if (m && r !== v.v + v.offset) {
                            v.offset = r - v.v;
                            var n = tq((parseFloat(m && m._gsap.y) || 0) - v.offset);
                            m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", v.cacheID = M.cache, eV()
                        }
                        return !0
                    }
                    v.offset && A(), i = !0
                },
                D = function() {
                    S(), s.isActive() && s.vars.scrollY > r && (v() > r ? s.progress(1) && v(r) : s.resetTo("scrollY", r))
                };
            return m && Q.set(m, {
                y: "+=0"
            }), t.ignoreCheck = function(t) {
                return tb && "touchmove" === t.type && P(t) || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
            }, t.onPress = function() {
                i = !1;
                var t = x;
                x = tq(($.visualViewport && $.visualViewport.scale || 1) / b), s.pause(), t !== x && re(d, x > 1.01 || !c && "x"), a = y(), o = v(), S(), n = eL
            }, t.onRelease = t.onGestureStart = function(t, e) {
                if (v.offset && A(), e) {
                    M.cache++;
                    var n, i, a = T();
                    c && (i = (n = y()) + -(.05 * a * t.velocityX) / .227, a *= rt(y, n, i, tZ(d, B)), s.vars.scrollX = C(i)), i = (n = v()) + -(.05 * a * t.velocityY) / .227, a *= rt(v, n, i, tZ(d, L)), s.vars.scrollY = E(i), s.invalidate().duration(a).play(.01), (tb && s.vars.scrollY >= r || n >= r - 1) && Q.to({}, {
                        onUpdate: D,
                        duration: a
                    })
                } else u.restart(!0);
                p && p(t)
            }, t.onWheel = function() {
                s._ts && s.pause(), tz() - w > 1e3 && (n = 0, w = tz())
            }, t.onChange = function(t, e, r, i, s) {
                if (eL !== n && S(), e && c && y(C(i[2] === e ? a + (t.startX - t.x) : y() + e - i[1])), r) {
                    v.offset && A();
                    var u = s[2] === r,
                        l = u ? o + t.startY - t.y : v() + r - s[1],
                        f = E(l);
                    u && l !== f && (o += f - l), v(f)
                }(r || e) && eV()
            }, t.onEnable = function() {
                re(d, !c && "x"), e9.addEventListener("refresh", D), e_($, "resize", D), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = y.smooth = !1), k.enable()
            }, t.onDisable = function() {
                re(d, !0), eg($, "resize", D), e9.removeEventListener("refresh", D), k.kill()
            }, t.lockAxis = !1 !== t.lockAxis, (e = new G(t)).iOS = tb, tb && !v() && v(1), tb && Q.ticker.add(tU), u = e._dc, s = Q.to(e, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: e8(v, v(), function() {
                        return s.pause()
                    })
                },
                onUpdate: eV,
                onComplete: u.vars.onComplete
            }), e
        };
    e9.sort = function(t) {
        if (tJ(t)) return ek.sort(t);
        var e = $.pageYOffset || 0;
        return e9.getAll().forEach(function(t) {
            return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + $.innerHeight
        }), ek.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, e9.observe = function(t) {
        return new G(t)
    }, e9.normalizeScroll = function(t) {
        if (void 0 === t) return tm;
        if (!0 === t && tm) return tm.enable();
        if (!1 === t) {
            tm && tm.kill(), tm = t;
            return
        }
        var e = t instanceof G ? t : ro(t);
        return tm && tm.target === e.target && tm.kill(), tV(e.target) && (tm = e), e
    }, e9.core = {
        _getVelocityProp: q,
        _inputObserver: ri,
        _scrollers: M,
        _proxies: O,
        bridge: {
            ss: function() {
                tI || eR("scrollStart"), tI = tz()
            },
            ref: function() {
                return to
            }
        }
    }, tW() && Q.registerPlugin(e9), t.s(["ScrollTrigger", () => e9], 10959)
}]);