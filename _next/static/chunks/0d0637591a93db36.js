(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 98452, e => {
    "use strict";
    var t = e.i(61835);
    let i = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, i) => i ? i.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        r = (...e) => e.filter((e, t, i) => !!e && "" !== e.trim() && i.indexOf(e) === t).join(" ").trim();
    var s = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let n = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: i = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: o,
            className: l = "",
            children: a,
            iconNode: c,
            ...u
        }, d) => (0, t.createElement)("svg", {
            ref: d,
            ...s,
            width: i,
            height: i,
            stroke: e,
            strokeWidth: o ? 24 * Number(n) / Number(i) : n,
            className: r("lucide", l),
            ...!a && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            })(u) && {
                "aria-hidden": "true"
            },
            ...u
        }, [...c.map(([e, i]) => (0, t.createElement)(e, i)), ...Array.isArray(a) ? a : [a]])),
        o = (e, s) => {
            let o = (0, t.forwardRef)(({
                className: o,
                ...l
            }, a) => (0, t.createElement)(n, {
                ref: a,
                iconNode: s,
                className: r(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, o),
                ...l
            }));
            return o.displayName = i(e), o
        };
    e.s(["default", () => o], 98452)
}, 23042, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "warnOnce", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e => {}
}, 21181, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(61835);

    function s(e, t) {
        let i = (0, r.useRef)(null),
            s = (0, r.useRef)(null);
        return (0, r.useCallback)(r => {
            if (null === r) {
                let e = i.current;
                e && (i.current = null, e());
                let t = s.current;
                t && (s.current = null, t())
            } else e && (i.current = n(e, r)), t && (s.current = n(t, r))
        }, [e, t])
    }

    function n(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let i = e(t);
            return "function" == typeof i ? i : () => e(null)
        }
    }("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 98759, (e, t, i) => {
    "use strict";

    function r({
        widthInt: e,
        heightInt: t,
        blurWidth: i,
        blurHeight: r,
        blurDataURL: s,
        objectFit: n
    }) {
        let o = i ? 40 * i : e,
            l = r ? 40 * r : t,
            a = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${a}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${a?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 5489, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        VALID_LOADERS: function() {
            return n
        },
        imageConfigDefault: function() {
            return o
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });
    let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        o = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 29048, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    }), e.r(23042);
    let r = e.r(29584),
        s = e.r(98759),
        n = e.r(5489),
        o = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function a(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function c({
        src: e,
        sizes: t,
        unoptimized: i = !1,
        priority: c = !1,
        preload: u = !1,
        loading: d,
        className: h,
        quality: f,
        width: p,
        height: m,
        fill: g = !1,
        style: v,
        overrideSrc: x,
        onLoad: b,
        onLoadingComplete: y,
        placeholder: w = "empty",
        blurDataURL: S,
        fetchPriority: j,
        decoding: E = "async",
        layout: N,
        objectFit: _,
        objectPosition: k,
        lazyBoundary: P,
        lazyRoot: C,
        ...R
    }, O) {
        var T;
        let L, z, M, {
                imgConf: I,
                showAltText: A,
                blurComplete: $,
                defaultLoader: D
            } = O,
            W = I || n.imageConfigDefault;
        if ("allSizes" in W) L = W;
        else {
            let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
                t = W.deviceSizes.sort((e, t) => e - t),
                i = W.qualities ? .sort((e, t) => e - t);
            L = { ...W,
                allSizes: e,
                deviceSizes: t,
                qualities: i
            }
        }
        if (void 0 === D) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = R.loader || D;
        delete R.loader, delete R.srcSet;
        let H = "__next_img_default" in U;
        if (H) {
            if ("custom" === L.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: i,
                    ...r
                } = t;
                return e(r)
            }
        }
        if (N) {
            "fill" === N && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[N];
            e && (v = { ...v,
                ...e
            });
            let i = {
                responsive: "100vw",
                fill: "100vw"
            }[N];
            i && !t && (t = i)
        }
        let B = "",
            F = a(p),
            q = a(m);
        if ((T = e) && "object" == typeof T && (l(T) || void 0 !== T.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (z = t.blurWidth, M = t.blurHeight, S = S || t.blurDataURL, B = t.src, !g)
                if (F || q) {
                    if (F && !q) {
                        let e = F / t.width;
                        q = Math.round(t.height * e)
                    } else if (!F && q) {
                        let e = q / t.height;
                        F = Math.round(t.width * e)
                    }
                } else F = t.width, q = t.height
        }
        let X = !c && !u && ("lazy" === d || void 0 === d);
        (!(e = "string" == typeof e ? e : B) || e.startsWith("data:") || e.startsWith("blob:")) && (i = !0, X = !1), L.unoptimized && (i = !0), H && !L.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (i = !0);
        let V = a(f),
            Y = Object.assign(g ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: _,
                objectPosition: k
            } : {}, A ? {} : {
                color: "transparent"
            }, v),
            G = $ || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,s.getImageBlurSvg)({widthInt:F,heightInt:q,blurWidth:z,blurHeight:M,blurDataURL:S||"",objectFit:Y.objectFit})}")` : `url("${w}")`,
            K = o.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit,
            J = G ? {
                backgroundSize: K,
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: G
            } : {},
            Q = function({
                config: e,
                src: t,
                unoptimized: i,
                width: s,
                quality: n,
                sizes: o,
                loader: l
            }) {
                if (i) {
                    let e = (0, r.getDeploymentId)();
                    if (t.startsWith("/") && !t.startsWith("//") && e) {
                        let i = t.includes("?") ? "&" : "?";
                        t = `${t}${i}dpl=${e}`
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: a,
                    kind: c
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, i, r) {
                    if (r) {
                        let i = /(^|\s)(1?\d?\d)vw/g,
                            s = [];
                        for (let e; e = i.exec(r);) s.push(parseInt(e[2]));
                        if (s.length) {
                            let i = .01 * Math.min(...s);
                            return {
                                widths: t.filter(t => t >= e[0] * i),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof i ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([i, 2 * i].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, s, o), u = a.length - 1;
                return {
                    sizes: o || "w" !== c ? o : "100vw",
                    srcSet: a.map((i, r) => `${l({config:e,src:t,quality:n,width:i})} ${"w"===c?i:r+1}${c}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: n,
                        width: a[u]
                    })
                }
            }({
                config: L,
                src: e,
                unoptimized: i,
                width: F,
                quality: V,
                sizes: t,
                loader: U
            }),
            Z = X ? "lazy" : d;
        return {
            props: { ...R,
                loading: Z,
                fetchPriority: j,
                width: F,
                height: q,
                decoding: E,
                className: h,
                style: { ...Y,
                    ...J
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: x || Q.src
            },
            meta: {
                unoptimized: i,
                preload: u || c,
                placeholder: w,
                fill: g
            }
        }
    }
}, 30584, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let r = e.r(61835),
        s = "u" < typeof window,
        n = s ? () => {} : r.useLayoutEffect,
        o = s ? () => {} : r.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: i
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(i(e))
            }
        }
        return s && (t ? .mountedInstances ? .add(e.children), l()), n(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), n(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 36, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return d
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });
    let n = e.r(67309),
        o = e.r(3025),
        l = e.r(43987),
        a = o._(e.r(61835)),
        c = n._(e.r(30584)),
        u = e.r(68329);

    function d() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function h(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(23042);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, i, r, s;
        return e.reduce(h, []).reverse().concat(d().reverse()).filter((t = new Set, i = new Set, r = new Set, s = {}, e => {
            let n = !0,
                o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                o = !0;
                let i = e.key.slice(e.key.indexOf("$") + 1);
                t.has(i) ? n = !1 : t.add(i)
            }
            switch (e.type) {
                case "title":
                case "base":
                    i.has(e.type) ? n = !1 : i.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, i = f.length; t < i; t++) {
                        let i = f[t];
                        if (e.props.hasOwnProperty(i))
                            if ("charSet" === i) r.has(i) ? n = !1 : r.add(i);
                            else {
                                let t = e.props[i],
                                    r = s[i] || new Set;
                                ("name" !== i || !o) && r.has(t) ? n = !1 : (r.add(t), s[i] = r)
                            }
                    }
            }
            return n
        })).reverse().map((e, t) => {
            let i = e.key || t;
            return a.default.cloneElement(e, {
                key: i
            })
        })
    }
    let m = function({
        children: e
    }) {
        let t = (0, a.useContext)(u.HeadManagerContext);
        return (0, l.jsx)(c.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 63045, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = e.r(67309)._(e.r(61835)),
        s = e.r(5489),
        n = r.default.createContext(s.imageConfigDefault)
}, 49258, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "RouterContext", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e.r(67309)._(e.r(61835)).default.createContext(null)
}, 32220, (e, t, i) => {
    "use strict";

    function r(e, t) {
        let i = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e, 0) : i
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 79358, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = e.r(32220),
        s = e.r(29584);

    function n({
        config: e,
        src: t,
        width: i,
        quality: n
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let o = (0, r.findClosestQuality)(n, e),
            l = (0, s.getDeploymentId)();
        return `${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    n.__next_img_default = !0;
    let o = n
}, 80563, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "Image", {
        enumerable: !0,
        get: function() {
            return y
        }
    });
    let r = e.r(67309),
        s = e.r(3025),
        n = e.r(43987),
        o = s._(e.r(61835)),
        l = r._(e.r(33964)),
        a = r._(e.r(36)),
        c = e.r(29048),
        u = e.r(5489),
        d = e.r(63045);
    e.r(23042);
    let h = e.r(49258),
        f = r._(e.r(79358)),
        p = e.r(21181),
        m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };

    function g(e, t, i, r, s, n, o) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && s(!0), i ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let r = !1,
                        s = !1;
                    i.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => r,
                        isPropagationStopped: () => s,
                        persist: () => {},
                        preventDefault: () => {
                            r = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            s = !0, t.stopPropagation()
                        }
                    })
                }
                r ? .current && r.current(e)
            }
        }))
    }

    function v(e) {
        return o.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let x = (0, o.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: i,
        height: r,
        width: s,
        decoding: l,
        className: a,
        style: c,
        fetchPriority: u,
        placeholder: d,
        loading: h,
        unoptimized: f,
        fill: m,
        onLoadRef: x,
        onLoadingCompleteRef: b,
        setBlurComplete: y,
        setShowAltText: w,
        sizesInput: S,
        onLoad: j,
        onError: E,
        ...N
    }, _) => {
        let k = (0, o.useCallback)(e => {
                e && (E && (e.src = e.src), e.complete && g(e, d, x, b, y, f, S))
            }, [e, d, x, b, y, E, f, S]),
            P = (0, p.useMergedRef)(_, k);
        return (0, n.jsx)("img", { ...N,
            ...v(u),
            loading: h,
            width: s,
            height: r,
            decoding: l,
            "data-nimg": m ? "fill" : "1",
            className: a,
            style: c,
            sizes: i,
            srcSet: t,
            src: e,
            ref: P,
            onLoad: e => {
                g(e.currentTarget, d, x, b, y, f, S)
            },
            onError: e => {
                w(!0), "empty" !== d && y(!0), E && E(e)
            }
        })
    });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let i = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...v(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, i), null) : (0, n.jsx)(a.default, {
            children: (0, n.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...i
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let y = (0, o.forwardRef)((e, t) => {
        let i = (0, o.useContext)(h.RouterContext),
            r = (0, o.useContext)(d.ImageConfigContext),
            s = (0, o.useMemo)(() => {
                let e = m || r || u.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    i = e.deviceSizes.sort((e, t) => e - t),
                    s = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: i,
                    qualities: s,
                    localPatterns: "u" < typeof window ? r ? .localPatterns : e.localPatterns
                }
            }, [r]),
            {
                onLoad: l,
                onLoadingComplete: a
            } = e,
            p = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
            p.current = l
        }, [l]);
        let g = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
            g.current = a
        }, [a]);
        let [v, y] = (0, o.useState)(!1), [w, S] = (0, o.useState)(!1), {
            props: j,
            meta: E
        } = (0, c.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: s,
            blurComplete: v,
            showAltText: w
        });
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(x, { ...j,
                unoptimized: E.unoptimized,
                placeholder: E.placeholder,
                fill: E.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: y,
                setShowAltText: S,
                sizesInput: e.sizes,
                ref: t
            }), E.preload ? (0, n.jsx)(b, {
                isAppRouter: !i,
                imgAttributes: j
            }) : null]
        })
    });
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 93758, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return u
        },
        getImageProps: function() {
            return c
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });
    let n = e.r(67309),
        o = e.r(29048),
        l = e.r(80563),
        a = n._(e.r(79358));

    function c(e) {
        let {
            props: t
        } = (0, o.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            }
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return {
            props: t
        }
    }
    let u = l.Image
}, 39486, (e, t, i) => {
    t.exports = e.r(93758)
}, 38844, e => {
    "use strict";
    e.i(74016);
    var t = e.i(43987),
        i = e.i(61835),
        r = e.i(98009),
        s = e.i(61614),
        n = e.i(25503),
        o = e.i(47483),
        l = e.i(3173),
        a = i,
        c = e.i(44870);

    function u(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class d extends a.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                let e = t.offsetParent,
                    i = (0, l.isHTMLElement)(e) && e.offsetWidth || 0,
                    r = (0, l.isHTMLElement)(e) && e.offsetHeight || 0,
                    s = this.props.sizeRef.current;
                s.height = t.offsetHeight || 0, s.width = t.offsetWidth || 0, s.top = t.offsetTop, s.left = t.offsetLeft, s.right = i - s.width - s.left, s.bottom = r - s.height - s.top
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function h({
        children: e,
        isPresent: r,
        anchorX: s,
        anchorY: n,
        root: o
    }) {
        let l = (0, a.useId)(),
            h = (0, a.useRef)(null),
            f = (0, a.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }),
            {
                nonce: p
            } = (0, a.useContext)(c.MotionConfigContext),
            m = function(...e) {
                return i.useCallback(function(...e) {
                    return t => {
                        let i = !1,
                            r = e.map(e => {
                                let r = u(e, t);
                                return i || "function" != typeof r || (i = !0), r
                            });
                        if (i) return () => {
                            for (let t = 0; t < r.length; t++) {
                                let i = r[t];
                                "function" == typeof i ? i() : u(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(h, e.props ? .ref ? ? e ? .ref);
        return (0, a.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: i,
                left: a,
                right: c,
                bottom: u
            } = f.current;
            if (r || !h.current || !e || !t) return;
            let d = "left" === s ? `left: ${a}` : `right: ${c}`,
                m = "bottom" === n ? `bottom: ${u}` : `top: ${i}`;
            h.current.dataset.motionPopId = l;
            let g = document.createElement("style");
            p && (g.nonce = p);
            let v = o ? ? document.head;
            return v.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            ${m}px !important;
          }
        `), () => {
                v.contains(g) && v.removeChild(g)
            }
        }, [r]), (0, t.jsx)(d, {
            isPresent: r,
            childRef: h,
            sizeRef: f,
            children: a.cloneElement(e, {
                ref: m
            })
        })
    }
    let f = ({
        children: e,
        initial: r,
        isPresent: n,
        onExitComplete: l,
        custom: a,
        presenceAffectsLayout: c,
        mode: u,
        anchorX: d,
        anchorY: f,
        root: m
    }) => {
        let g = (0, s.useConstant)(p),
            v = (0, i.useId)(),
            x = !0,
            b = (0, i.useMemo)(() => (x = !1, {
                id: v,
                initial: r,
                isPresent: n,
                custom: a,
                onExitComplete: e => {
                    for (let t of (g.set(e, !0), g.values()))
                        if (!t) return;
                    l && l()
                },
                register: e => (g.set(e, !1), () => g.delete(e))
            }), [n, g, l]);
        return c && x && (b = { ...b
        }), (0, i.useMemo)(() => {
            g.forEach((e, t) => g.set(t, !1))
        }, [n]), i.useEffect(() => {
            n || g.size || !l || l()
        }, [n]), "popLayout" === u && (e = (0, t.jsx)(h, {
            isPresent: n,
            anchorX: d,
            anchorY: f,
            root: m,
            children: e
        })), (0, t.jsx)(o.PresenceContext.Provider, {
            value: b,
            children: e
        })
    };

    function p() {
        return new Map
    }
    var m = e.i(18820);
    let g = e => e.key || "";

    function v(e) {
        let t = [];
        return i.Children.forEach(e, e => {
            (0, i.isValidElement)(e) && t.push(e)
        }), t
    }
    let x = ({
        children: e,
        custom: o,
        initial: l = !0,
        onExitComplete: a,
        presenceAffectsLayout: c = !0,
        mode: u = "sync",
        propagate: d = !1,
        anchorX: h = "left",
        anchorY: p = "top",
        root: x
    }) => {
        let [b, y] = (0, m.usePresence)(d), w = (0, i.useMemo)(() => v(e), [e]), S = d && !b ? [] : w.map(g), j = (0, i.useRef)(!0), E = (0, i.useRef)(w), N = (0, s.useConstant)(() => new Map), _ = (0, i.useRef)(new Set), [k, P] = (0, i.useState)(w), [C, R] = (0, i.useState)(w);
        (0, n.useIsomorphicLayoutEffect)(() => {
            j.current = !1, E.current = w;
            for (let e = 0; e < C.length; e++) {
                let t = g(C[e]);
                S.includes(t) ? (N.delete(t), _.current.delete(t)) : !0 !== N.get(t) && N.set(t, !1)
            }
        }, [C, S.length, S.join("-")]);
        let O = [];
        if (w !== k) {
            let e = [...w];
            for (let t = 0; t < C.length; t++) {
                let i = C[t],
                    r = g(i);
                S.includes(r) || (e.splice(t, 0, i), O.push(i))
            }
            return "wait" === u && O.length && (e = O), R(v(e)), P(w), null
        }
        let {
            forceRender: T
        } = (0, i.useContext)(r.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: C.map(e => {
                let i = g(e),
                    r = (!d || !!b) && (w === C || S.includes(i));
                return (0, t.jsx)(f, {
                    isPresent: r,
                    initial: (!j.current || !!l) && void 0,
                    custom: o,
                    presenceAffectsLayout: c,
                    mode: u,
                    root: x,
                    onExitComplete: r ? void 0 : () => {
                        if (_.current.has(i) || (_.current.add(i), !N.has(i))) return;
                        N.set(i, !0);
                        let e = !0;
                        N.forEach(t => {
                            t || (e = !1)
                        }), e && (T ? .(), R(E.current), d && y ? .(), a && a())
                    },
                    anchorX: h,
                    anchorY: p,
                    children: e
                }, i)
            })
        })
    };
    e.s(["AnimatePresence", () => x], 38844)
}, 24980, e => {
    "use strict";
    let t = (0, e.i(98452).default)("arrow-up-right", [
        ["path", {
            d: "M7 7h10v10",
            key: "1tivn9"
        }],
        ["path", {
            d: "M7 17 17 7",
            key: "1vkiza"
        }]
    ]);
    e.s(["ArrowUpRight", () => t], 24980)
}, 99072, 56296, e => {
    "use strict";
    var t = e.i(98452);
    let i = (0, t.default)("linkedin", [
        ["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }],
        ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }],
        ["circle", {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }]
    ]);
    e.s(["Linkedin", () => i], 99072);
    let r = (0, t.default)("instagram", [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }],
        ["path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }],
        ["line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }]
    ]);
    e.s(["Instagram", () => r], 56296)
}, 76424, e => {
    "use strict";

    function t(e, t, i) {
        return Math.max(e, Math.min(t, i))
    }
    var i = class {
            isRunning = !1;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(e) {
                if (!this.isRunning) return;
                let i = !1;
                if (this.duration && this.easing) {
                    this.currentTime += e;
                    let r = t(0, this.currentTime / this.duration, 1),
                        s = (i = r >= 1) ? 1 : this.easing(r);
                    this.value = this.from + (this.to - this.from) * s
                } else if (this.lerp) {
                    var r, s, n, o;
                    this.value = (r = this.value, s = this.to, n = 60 * this.lerp, (1 - (o = 1 - Math.exp(-n * e))) * r + o * s), Math.round(this.value) === this.to && (this.value = this.to, i = !0)
                } else this.value = this.to, i = !0;
                i && this.stop(), this.onUpdate ? .(this.value, i)
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(e, t, {
                lerp: i,
                duration: r,
                easing: s,
                onStart: n,
                onUpdate: o
            }) {
                this.from = this.value = e, this.to = t, this.lerp = i, this.duration = r, this.easing = s, this.currentTime = 0, this.isRunning = !0, n ? .(), this.onUpdate = o
            }
        },
        r = class {
            constructor(e, t, {
                autoResize: i = !0,
                debounce: r = 250
            } = {}) {
                this.wrapper = e, this.content = t, i && (this.debouncedResize = function(e, t) {
                    let i;
                    return function(...r) {
                        let s = this;
                        clearTimeout(i), i = setTimeout(() => {
                            i = void 0, e.apply(s, r)
                        }, t)
                    }
                }(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            width = 0;
            height = 0;
            scrollHeight = 0;
            scrollWidth = 0;
            debouncedResize;
            wrapperResizeObserver;
            contentResizeObserver;
            destroy() {
                this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
            }
            resize = () => {
                this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            };
            onContentResize = () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        },
        s = class {
            events = {};
            emit(e, ...t) {
                let i = this.events[e] || [];
                for (let e = 0, r = i.length; e < r; e++) i[e] ? .(...t)
            }
            on(e, t) {
                return this.events[e] ? .push(t) || (this.events[e] = [t]), () => {
                    this.events[e] = this.events[e] ? .filter(e => t !== e)
                }
            }
            off(e, t) {
                this.events[e] = this.events[e] ? .filter(e => t !== e)
            }
            destroy() {
                this.events = {}
            }
        },
        n = 100 / 6,
        o = {
            passive: !1
        },
        l = class {
            constructor(e, t = {
                wheelMultiplier: 1,
                touchMultiplier: 1
            }) {
                this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, o), this.element.addEventListener("touchstart", this.onTouchStart, o), this.element.addEventListener("touchmove", this.onTouchMove, o), this.element.addEventListener("touchend", this.onTouchEnd, o)
            }
            touchStart = {
                x: 0,
                y: 0
            };
            lastDelta = {
                x: 0,
                y: 0
            };
            window = {
                width: 0,
                height: 0
            };
            emitter = new s;
            on(e, t) {
                return this.emitter.on(e, t)
            }
            destroy() {
                this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, o), this.element.removeEventListener("touchstart", this.onTouchStart, o), this.element.removeEventListener("touchmove", this.onTouchMove, o), this.element.removeEventListener("touchend", this.onTouchEnd, o)
            }
            onTouchStart = e => {
                let {
                    clientX: t,
                    clientY: i
                } = e.targetTouches ? e.targetTouches[0] : e;
                this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: e
                })
            };
            onTouchMove = e => {
                let {
                    clientX: t,
                    clientY: i
                } = e.targetTouches ? e.targetTouches[0] : e, r = -(t - this.touchStart.x) * this.options.touchMultiplier, s = -(i - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                    x: r,
                    y: s
                }, this.emitter.emit("scroll", {
                    deltaX: r,
                    deltaY: s,
                    event: e
                })
            };
            onTouchEnd = e => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: e
                })
            };
            onWheel = e => {
                let {
                    deltaX: t,
                    deltaY: i,
                    deltaMode: r
                } = e, s = 1 === r ? n : 2 === r ? this.window.width : 1, o = 1 === r ? n : 2 === r ? this.window.height : 1;
                t *= s, i *= o, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                    deltaX: t,
                    deltaY: i,
                    event: e
                })
            };
            onWindowResize = () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        },
        a = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
        c = class {
            _isScrolling = !1;
            _isStopped = !1;
            _isLocked = !1;
            _preventNextNativeScrollEvent = !1;
            _resetVelocityTimeout = null;
            _rafId = null;
            isTouching;
            time = 0;
            userData = {};
            lastVelocity = 0;
            velocity = 0;
            direction = 0;
            options;
            targetScroll;
            animatedScroll;
            animate = new i;
            emitter = new s;
            dimensions;
            virtualScroll;
            constructor({
                wrapper: e = window,
                content: t = document.documentElement,
                eventsTarget: i = e,
                smoothWheel: s = !0,
                syncTouch: n = !1,
                syncTouchLerp: o = .075,
                touchInertiaExponent: c = 1.7,
                duration: u,
                easing: d,
                lerp: h = .1,
                infinite: f = !1,
                orientation: p = "vertical",
                gestureOrientation: m = "horizontal" === p ? "both" : "vertical",
                touchMultiplier: g = 1,
                wheelMultiplier: v = 1,
                autoResize: x = !0,
                prevent: b,
                virtualScroll: y,
                overscroll: w = !0,
                autoRaf: S = !1,
                anchors: j = !1,
                autoToggle: E = !1,
                allowNestedScroll: N = !1,
                __experimental__naiveDimensions: _ = !1,
                naiveDimensions: k = _,
                stopInertiaOnNavigate: P = !1
            } = {}) {
                window.lenisVersion = "1.3.17", e && e !== document.documentElement || (e = window), "number" == typeof u && "function" != typeof d ? d = a : "function" == typeof d && "number" != typeof u && (u = 1), this.options = {
                    wrapper: e,
                    content: t,
                    eventsTarget: i,
                    smoothWheel: s,
                    syncTouch: n,
                    syncTouchLerp: o,
                    touchInertiaExponent: c,
                    duration: u,
                    easing: d,
                    lerp: h,
                    infinite: f,
                    gestureOrientation: m,
                    orientation: p,
                    touchMultiplier: g,
                    wheelMultiplier: v,
                    autoResize: x,
                    prevent: b,
                    virtualScroll: y,
                    overscroll: w,
                    autoRaf: S,
                    anchors: j,
                    autoToggle: E,
                    allowNestedScroll: N,
                    naiveDimensions: k,
                    stopInertiaOnNavigate: P
                }, this.dimensions = new r(e, t, {
                    autoResize: x
                }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new l(i, {
                    touchMultiplier: g,
                    wheelMultiplier: v
                }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                    passive: !0
                })), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            }
            destroy() {
                this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId)
            }
            on(e, t) {
                return this.emitter.on(e, t)
            }
            off(e, t) {
                return this.emitter.off(e, t)
            }
            onScrollEnd = e => {
                e instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || e.stopPropagation()
            };
            dispatchScrollendEvent = () => {
                this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                    bubbles: this.options.wrapper === window,
                    detail: {
                        lenisScrollEnd: !0
                    }
                }))
            };
            get overflow() {
                let e = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[e]
            }
            checkOverflow() {
                ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
            }
            onTransitionEnd = e => {
                e.propertyName.includes("overflow") && this.checkOverflow()
            };
            setScroll(e) {
                this.isHorizontal ? this.options.wrapper.scrollTo({
                    left: e,
                    behavior: "instant"
                }) : this.options.wrapper.scrollTo({
                    top: e,
                    behavior: "instant"
                })
            }
            onClick = e => {
                let t = e.composedPath().filter(e => e instanceof HTMLAnchorElement && e.getAttribute("href"));
                if (this.options.anchors) {
                    let e = t.find(e => e.getAttribute("href") ? .includes("#"));
                    if (e) {
                        let t = e.getAttribute("href");
                        if (t) {
                            let e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
                                i = `#${t.split("#")[1]}`;
                            this.scrollTo(i, e)
                        }
                    }
                }
                this.options.stopInertiaOnNavigate && t.find(e => e.host === window.location.host) && this.reset()
            };
            onPointerDown = e => {
                1 === e.button && this.reset()
            };
            onVirtualScroll = e => {
                if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e)) return;
                let {
                    deltaX: t,
                    deltaY: i,
                    event: r
                } = e;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: t,
                        deltaY: i,
                        event: r
                    }), r.ctrlKey || r.lenisStopPropagation) return;
                let s = r.type.includes("touch"),
                    n = r.type.includes("wheel");
                this.isTouching = "touchstart" === r.type || "touchmove" === r.type;
                let o = 0 === t && 0 === i;
                if (this.options.syncTouch && s && "touchstart" === r.type && o && !this.isStopped && !this.isLocked) return void this.reset();
                let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === t;
                if (o || l) return;
                let a = r.composedPath();
                a = a.slice(0, a.indexOf(this.rootElement));
                let c = this.options.prevent;
                if (a.find(e => e instanceof HTMLElement && ("function" == typeof c && c ? .(e) || e.hasAttribute ? .("data-lenis-prevent") || s && e.hasAttribute ? .("data-lenis-prevent-touch") || n && e.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(e, {
                        deltaX: t,
                        deltaY: i
                    })))) return;
                if (this.isStopped || this.isLocked) {
                    r.cancelable && r.preventDefault();
                    return
                }
                if (!(this.options.syncTouch && s || this.options.smoothWheel && n)) {
                    this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
                    return
                }
                let u = i;
                "both" === this.options.gestureOrientation ? u = Math.abs(i) > Math.abs(t) ? i : t : "horizontal" === this.options.gestureOrientation && (u = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
                let d = s && this.options.syncTouch,
                    h = s && "touchend" === r.type;
                h && (u = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + u, {
                    programmatic: !1,
                    ...d ? {
                        lerp: h ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
            };
            resize() {
                this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            onNativeScroll = () => {
                if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = !1;
                    return
                }
                if (!1 === this.isScrolling || "native" === this.isScrolling) {
                    let e = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            };
            reset() {
                this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
            }
            start() {
                if (this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
                    this.internalStart()
                }
            }
            internalStart() {
                this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
            }
            stop() {
                if (!this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
                    this.internalStop()
                }
            }
            internalStop() {
                this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
            }
            raf = e => {
                let t = e - (this.time || e);
                this.time = e, this.animate.advance(.001 * t), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            };
            scrollTo(e, {
                offset: i = 0,
                immediate: r = !1,
                lock: s = !1,
                programmatic: n = !0,
                lerp: o = n ? this.options.lerp : void 0,
                duration: l = n ? this.options.duration : void 0,
                easing: c = n ? this.options.easing : void 0,
                onStart: u,
                onComplete: d,
                force: h = !1,
                userData: f
            } = {}) {
                if (!this.isStopped && !this.isLocked || h) {
                    if ("string" == typeof e && ["top", "left", "start", "#"].includes(e)) e = 0;
                    else if ("string" == typeof e && ["bottom", "right", "end"].includes(e)) e = this.limit;
                    else {
                        let t;
                        if ("string" == typeof e ? (t = document.querySelector(e)) || ("#top" === e ? e = 0 : console.warn("Lenis: Target not found", e)) : e instanceof HTMLElement && e ? .nodeType && (t = e), t) {
                            if (this.options.wrapper !== window) {
                                let e = this.rootElement.getBoundingClientRect();
                                i -= this.isHorizontal ? e.left : e.top
                            }
                            let r = t.getBoundingClientRect();
                            e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
                        }
                    }
                    if ("number" == typeof e) {
                        if (e += i, e = Math.round(e), this.options.infinite) {
                            if (n) {
                                this.targetScroll = this.animatedScroll = this.scroll;
                                let t = e - this.animatedScroll;
                                t > this.limit / 2 ? e -= this.limit : t < -this.limit / 2 && (e += this.limit)
                            }
                        } else e = t(0, e, this.limit);
                        if (e === this.targetScroll) {
                            u ? .(this), d ? .(this);
                            return
                        }
                        if (this.userData = f ? ? {}, r) {
                            this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), d ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                this.dispatchScrollendEvent()
                            });
                            return
                        }
                        n || (this.targetScroll = e), "number" == typeof l && "function" != typeof c ? c = a : "function" == typeof c && "number" != typeof l && (l = 1), this.animate.fromTo(this.animatedScroll, e, {
                            duration: l,
                            easing: c,
                            lerp: o,
                            onStart: () => {
                                s && (this.isLocked = !0), this.isScrolling = "smooth", u ? .(this)
                            },
                            onUpdate: (e, t) => {
                                this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), n && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), d ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                    this.dispatchScrollendEvent()
                                }), this.preventNextNativeScrollEvent())
                            }
                        })
                    }
                }
            }
            preventNextNativeScrollEvent() {
                this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                    this._preventNextNativeScrollEvent = !1
                })
            }
            checkNestedScroll(e, {
                deltaX: t,
                deltaY: i
            }) {
                let r, s, n, o, l, a, c, u, d, h, f, p, m, g, v = Date.now(),
                    x = e._lenis ? ? = {},
                    b = this.options.gestureOrientation;
                if (v - (x.time ? ? 0) > 2e3) {
                    x.time = Date.now();
                    let t = window.getComputedStyle(e);
                    x.computedStyle = t;
                    let i = t.overflowX,
                        d = t.overflowY;
                    if (r = ["auto", "overlay", "scroll"].includes(i), s = ["auto", "overlay", "scroll"].includes(d), x.hasOverflowX = r, x.hasOverflowY = s, !r && !s || "vertical" === b && !s || "horizontal" === b && !r) return !1;
                    l = e.scrollWidth, a = e.scrollHeight, c = e.clientWidth, u = e.clientHeight, n = l > c, o = a > u, x.isScrollableX = n, x.isScrollableY = o, x.scrollWidth = l, x.scrollHeight = a, x.clientWidth = c, x.clientHeight = u
                } else n = x.isScrollableX, o = x.isScrollableY, r = x.hasOverflowX, s = x.hasOverflowY, l = x.scrollWidth, a = x.scrollHeight, c = x.clientWidth, u = x.clientHeight;
                if (!r && !s || !n && !o || "vertical" === b && (!s || !o) || "horizontal" === b && (!r || !n) || ("horizontal" === b ? d = "x" : "vertical" === b ? d = "y" : (0 !== t && r && n && (d = "x"), 0 !== i && s && o && (d = "y")), !d)) return !1;
                if ("x" === d) h = e.scrollLeft, f = l - c, p = t, m = r, g = n;
                else {
                    if ("y" !== d) return !1;
                    h = e.scrollTop, f = a - u, p = i, m = s, g = o
                }
                return (p > 0 ? h < f : h > 0) && m && g
            }
            get rootElement() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
                return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
                return "horizontal" === this.options.orientation
            }
            get actualScroll() {
                let e = this.options.wrapper;
                return this.isHorizontal ? e.scrollX ? ? e.scrollLeft : e.scrollY ? ? e.scrollTop
            }
            get scroll() {
                var e;
                return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
            }
            get progress() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isScrolling() {
                return this._isScrolling
            }
            set isScrolling(e) {
                this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
            }
            get isStopped() {
                return this._isStopped
            }
            set isStopped(e) {
                this._isStopped !== e && (this._isStopped = e, this.updateClassName())
            }
            get isLocked() {
                return this._isLocked
            }
            set isLocked(e) {
                this._isLocked !== e && (this._isLocked = e, this.updateClassName())
            }
            get isSmooth() {
                return "smooth" === this.isScrolling
            }
            get className() {
                let e = "lenis";
                return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), "smooth" === this.isScrolling && (e += " lenis-smooth"), e
            }
            updateClassName() {
                this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
            }
            cleanUpClassName() {
                this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
            }
        },
        u = e.i(61835),
        d = e.i(43987),
        h = (0, u.createContext)(null),
        f = new class {
            constructor(e) {
                this.state = e
            }
            listeners = [];
            set(e) {
                for (let t of (this.state = e, this.listeners)) t(this.state)
            }
            subscribe(e) {
                return this.listeners = [...this.listeners, e], () => {
                    this.listeners = this.listeners.filter(t => t !== e)
                }
            }
            get() {
                return this.state
            }
        }(null),
        p = (0, u.forwardRef)(({
            children: e,
            root: t = !1,
            options: i = {},
            autoRaf: r = !0,
            ...s
        }, n) => {
            let o = (0, u.useRef)(null),
                l = (0, u.useRef)(null),
                [a, p] = (0, u.useState)(void 0);
            (0, u.useImperativeHandle)(n, () => ({
                wrapper: o.current,
                content: l.current,
                lenis: a
            }), [a]), (0, u.useEffect)(() => {
                let e = new c({ ...i,
                    ...o.current && l.current && {
                        wrapper: o.current,
                        content: l.current
                    },
                    autoRaf: i ? .autoRaf ? ? r
                });
                return p(e), () => {
                    e.destroy(), p(void 0)
                }
            }, [t, JSON.stringify({ ...i,
                wrapper: null,
                content: null
            })]);
            let m = (0, u.useRef)([]),
                g = (0, u.useCallback)((e, t) => {
                    m.current.push({
                        callback: e,
                        priority: t
                    }), m.current.sort((e, t) => e.priority - t.priority)
                }, []),
                v = (0, u.useCallback)(e => {
                    m.current = m.current.filter(t => t.callback !== e)
                }, []);
            return ((0, u.useEffect)(() => {
                if (t && a) return f.set({
                    lenis: a,
                    addCallback: g,
                    removeCallback: v
                }), () => f.set(null)
            }, [t, a, g, v]), (0, u.useEffect)(() => {
                if (!a) return;
                let e = e => {
                    for (let t = 0; t < m.current.length; t++) m.current[t] ? .callback(e)
                };
                return a.on("scroll", e), () => {
                    a.off("scroll", e)
                }
            }, [a]), e) ? (0, d.jsx)(h.Provider, {
                value: {
                    lenis: a,
                    addCallback: g,
                    removeCallback: v
                },
                children: t && "asChild" !== t ? e : (0, d.jsx)("div", {
                    ref: o,
                    ...s,
                    children: (0, d.jsx)("div", {
                        ref: l,
                        children: e
                    })
                })
            }) : null
        }),
        m = {};

    function g(e, t = [], i = 0) {
        let r = (0, u.useContext)(h),
            s = function(e) {
                let [t, i] = (0, u.useState)(e.get());
                return (0, u.useEffect)(() => e.subscribe(e => i(e)), [e]), t
            }(f),
            {
                lenis: n,
                addCallback: o,
                removeCallback: l
            } = r ? ? s ? ? m;
        return (0, u.useEffect)(() => {
            if (e && o && l && n) return o(e, i), e(n), () => {
                l(e)
            }
        }, [n, o, l, i, ...t]), n
    }
    e.s(["ReactLenis", () => p, "useLenis", () => g], 76424)
}, 94754, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        assign: function() {
            return a
        },
        searchParamsToUrlQuery: function() {
            return n
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });

    function n(e) {
        let t = {};
        for (let [i, r] of e.entries()) {
            let e = t[i];
            void 0 === e ? t[i] = r : Array.isArray(e) ? e.push(r) : t[i] = [e, r]
        }
        return t
    }

    function o(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function l(e) {
        let t = new URLSearchParams;
        for (let [i, r] of Object.entries(e))
            if (Array.isArray(r))
                for (let e of r) t.append(i, o(e));
            else t.set(i, o(r));
        return t
    }

    function a(e, ...t) {
        for (let i of t) {
            for (let t of i.keys()) e.delete(t);
            for (let [t, r] of i.entries()) e.append(t, r)
        }
        return e
    }
}, 58826, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return a
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });
    let n = e.r(3025)._(e.r(94754)),
        o = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: i
        } = e, r = e.protocol || "", s = e.pathname || "", l = e.hash || "", a = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : i && (c = t + (~i.indexOf(":") ? `[${i}]` : i), e.port && (c += ":" + e.port)), a && "object" == typeof a && (a = String(n.urlQueryToSearchParams(a)));
        let u = e.search || a && `?${a}` || "";
        return r && !r.endsWith(":") && (r += ":"), e.slashes || (!r || o.test(r)) && !1 !== c ? (c = "//" + (c || ""), s && "/" !== s[0] && (s = "/" + s)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), u && "?" !== u[0] && (u = "?" + u), s = s.replace(/[?#]/g, encodeURIComponent), u = u.replace("#", "%23"), `${r}${c}${s}${u}${l}`
    }
    let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return l(e)
    }
}, 65270, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        DecodeError: function() {
            return v
        },
        MiddlewareNotFoundError: function() {
            return w
        },
        MissingStaticPage: function() {
            return y
        },
        NormalizeError: function() {
            return x
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return m
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return n
        },
        execOnce: function() {
            return o
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return c
        },
        getURL: function() {
            return u
        },
        isAbsoluteUrl: function() {
            return a
        },
        isResSent: function() {
            return h
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return f
        },
        stringifyError: function() {
            return S
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });
    let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function o(e) {
        let t, i = !1;
        return (...r) => (i || (i = !0, t = e(...r)), t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = e => l.test(e);

    function c() {
        let {
            protocol: e,
            hostname: t,
            port: i
        } = window.location;
        return `${e}//${t}${i?":"+i:""}`
    }

    function u() {
        let {
            href: e
        } = window.location, t = c();
        return e.substring(t.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function h(e) {
        return e.finished || e.headersSent
    }

    function f(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function p(e, t) {
        let i = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await p(t.Component, t.ctx)
        } : {};
        let r = await e.getInitialProps(t);
        if (i && h(i)) return r;
        if (!r) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return r
    }
    let m = "u" > typeof performance,
        g = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class v extends Error {}
    class x extends Error {}
    class b extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class y extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class w extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function S(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 32089, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = e.r(65270),
        s = e.r(83964);

    function n(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, r.getLocationOrigin)(),
                i = new URL(e, t);
            return i.origin === t && (0, s.hasBasePath)(i.pathname)
        } catch (e) {
            return !1
        }
    }
}, 76596, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "errorOnce", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e => {}
}, 89281, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return v
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var s in r) Object.defineProperty(i, s, {
        enumerable: !0,
        get: r[s]
    });
    let n = e.r(3025),
        o = e.r(43987),
        l = n._(e.r(61835)),
        a = e.r(58826),
        c = e.r(38846),
        u = e.r(21181),
        d = e.r(65270),
        h = e.r(94210);
    e.r(23042);
    let f = e.r(55397),
        p = e.r(32089),
        m = e.r(74127);

    function g(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e)
    }

    function v(t) {
        var i;
        let r, s, n, [a, v] = (0, l.useOptimistic)(f.IDLE_LINK_STATUS),
            b = (0, l.useRef)(null),
            {
                href: y,
                as: w,
                children: S,
                prefetch: j = null,
                passHref: E,
                replace: N,
                shallow: _,
                scroll: k,
                onClick: P,
                onMouseEnter: C,
                onTouchStart: R,
                legacyBehavior: O = !1,
                onNavigate: T,
                ref: L,
                unstable_dynamicOnHover: z,
                ...M
            } = t;
        r = S, O && ("string" == typeof r || "number" == typeof r) && (r = (0, o.jsx)("a", {
            children: r
        }));
        let I = l.default.useContext(c.AppRouterContext),
            A = !1 !== j,
            $ = !1 !== j ? null === (i = j) || "auto" === i ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            {
                href: D,
                as: W
            } = l.default.useMemo(() => {
                let e = g(y);
                return {
                    href: e,
                    as: w ? g(w) : e
                }
            }, [y, w]);
        if (O) {
            if (r ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            s = l.default.Children.only(r)
        }
        let U = O ? s && "object" == typeof s && s.ref : L,
            H = l.default.useCallback(e => (null !== I && (b.current = (0, f.mountLinkInstance)(e, D, I, $, A, v)), () => {
                b.current && ((0, f.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, f.unmountPrefetchableInstance)(e)
            }), [A, D, I, $, v]),
            B = {
                ref: (0, u.useMergedRef)(H, U),
                onClick(t) {
                    O || "function" != typeof P || P(t), O && s.props && "function" == typeof s.props.onClick && s.props.onClick(t), !I || t.defaultPrevented || function(t, i, r, s, n, o, a) {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: u
                            } = t.currentTarget;
                            if ("A" === u.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, p.isLocalURL)(i)) {
                                n && (t.preventDefault(), location.replace(i));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(30532);
                            l.default.startTransition(() => {
                                d(r || i, n ? "replace" : "push", o ? ? !0, s.current)
                            })
                        }
                    }(t, D, W, b, N, k, T)
                },
                onMouseEnter(e) {
                    O || "function" != typeof C || C(e), O && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(e), I && A && (0, f.onNavigationIntent)(e.currentTarget, !0 === z)
                },
                onTouchStart: function(e) {
                    O || "function" != typeof R || R(e), O && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(e), I && A && (0, f.onNavigationIntent)(e.currentTarget, !0 === z)
                }
            };
        return (0, d.isAbsoluteUrl)(W) ? B.href = W : O && !E && ("a" !== s.type || "href" in s.props) || (B.href = (0, h.addBasePath)(W)), n = O ? l.default.cloneElement(s, B) : (0, o.jsx)("a", { ...M,
            ...B,
            children: r
        }), (0, o.jsx)(x.Provider, {
            value: a,
            children: n
        })
    }
    e.r(76596);
    let x = (0, l.createContext)(f.IDLE_LINK_STATUS),
        b = () => (0, l.useContext)(x);
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 47232, e => {
    "use strict";
    var t = e.i(43987),
        i = e.i(61835),
        r = e.i(89281),
        s = e.i(86785),
        n = e.i(99072),
        o = e.i(56296),
        l = e.i(76424),
        a = e.i(18906),
        c = e.i(38844),
        u = e.i(39486);
    let d = [{
            name: "Home",
            href: "/",
            description: "Back to the start"
        }, {
            name: "About",
            href: "#about",
            description: "Learn about my journey"
        }, {
            name: "Work",
            href: "#work",
            description: "Selection of my best work"
        }, {
            name: "Articles",
            href: "#articles",
            description: "Thoughts and perspectives"
        }, {
            name: "Contact",
            href: "#contact",
            description: "Let's build something together"
        }],
        h = [{
            icon: o.Instagram,
            href: "https://www.instagram.com/yashil_07?igsh=MXVkcXdxNnN2Y2I1aA=="
        }, {
            icon: n.Linkedin,
            href: "https://www.linkedin.com/in/yashilpatel07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }];

    function f() {
        let [e, n] = (0, i.useState)(!1), [o, f] = (0, i.useState)(!0), p = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            let e = () => {
                let e = document.getElementById("nav-logo");
                if (!e) return;
                let t = e.getBoundingClientRect(),
                    i = t.top + t.height / 2,
                    r = t.left + t.width / 2,
                    s = document.querySelectorAll('.dark:not(.fixed):not([style*="fixed"])'),
                    n = !1;
                for (let e of Array.from(s)) {
                    let t = e.getBoundingClientRect();
                    if (i >= t.top && i <= t.bottom && r >= t.left && r <= t.right) {
                        n = !0;
                        break
                    }
                }
                f(n)
            };
            window.addEventListener("scroll", e, {
                passive: !0
            }), e();
            let t = new MutationObserver(e);
            return t.observe(document.body, {
                childList: !0,
                subtree: !0
            }), () => {
                window.removeEventListener("scroll", e), t.disconnect()
            }
        }, []);
        let m = (0, l.useLenis)();
        (0, i.useEffect)(() => (e ? (m ? .stop(), document.body.style.overflow = "hidden") : (m ? .start(), document.body.style.overflow = "unset"), () => {
            document.body.style.overflow = "unset", m ? .start()
        }), [e, m]);
        let g = (e, t) => {
            e.preventDefault(), m ? .start(), document.body.style.overflow = "unset", n(!1), setTimeout(() => {
                if ("/" === t || "#" === t) m ? .scrollTo(0);
                else {
                    let e = document.querySelector(t);
                    e && m ? .scrollTo(e, {
                        offset: 0
                    })
                }
            }, 150)
        };
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(r.default, {
                href: "/",
                onClick: e => g(e, "/"),
                className: "fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-[110] transition-transform hover:scale-105 active:scale-95 group",
                id: "nav-logo",
                children: (0, t.jsx)("div", {
                    className: "relative w-20 h-20 p-4",
                    children: (0, t.jsx)(u.default, {
                        src: o ? "/images/PGLOGO-white.png" : "/images/PGLOGO-dark.png",
                        alt: "Yashil Patel Logo",
                        width: 200,
                        height: 50,
                        className: "object-contain w-full h-full transition-opacity duration-300",
                        priority: !0
                    })
                })
            }), (0, t.jsxs)("button", {
                ref: p,
                onClick: () => n(!e),
                onMouseMove: e => {
                    if (!p.current) return;
                    let t = p.current.getBoundingClientRect(),
                        i = e.clientX - t.left - t.width / 2,
                        r = e.clientY - t.top - t.height / 2;
                    s.default.to(p.current, {
                        x: .4 * i,
                        y: .4 * r,
                        duration: .4,
                        ease: "power2.out"
                    })
                },
                onMouseLeave: () => {
                    s.default.to(p.current, {
                        x: 0,
                        y: 0,
                        duration: .6,
                        ease: "elastic.out(1, 0.3)"
                    })
                },
                className: "fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[110] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-background border border-border rounded-full flex flex-col items-center justify-center gap-1 sm:gap-1.5 shadow-xl pointer-events-auto group",
                "aria-label": "Toggle Menu",
                children: [(0, t.jsx)(a.motion.span, {
                    animate: e ? {
                        rotate: 45,
                        y: 3
                    } : {
                        rotate: 0,
                        y: 0
                    },
                    className: "w-6 sm:w-7 md:w-8 h-[2px] bg-primary block origin-center transition-colors"
                }), (0, t.jsx)(a.motion.span, {
                    animate: e ? {
                        rotate: -45,
                        y: -3
                    } : {
                        rotate: 0,
                        y: 0
                    },
                    className: "w-6 sm:w-7 md:w-8 h-[2px] bg-primary block origin-center transition-colors"
                })]
            }), (0, t.jsx)(c.AnimatePresence, {
                children: e && (0, t.jsxs)(a.motion.div, {
                    initial: {
                        y: "-100%"
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: "-100%"
                    },
                    transition: {
                        duration: .8,
                        ease: [.76, 0, .24, 1]
                    },
                    className: "fixed inset-0 z-[100] bg-secondary text-secondary-foreground flex flex-col justify-between p-6 sm:p-12 md:p-20 pointer-events-auto overflow-y-auto",
                    "data-lenis-prevent": !0,
                    children: [(0, t.jsx)("div", {
                        className: "absolute top-0 right-0 p-10 md:p-20 opacity-5 pointer-events-none select-none hidden sm:block",
                        children: (0, t.jsx)("div", {
                            className: "text-[15vw] md:text-[20vw] font-bold leading-none",
                            children: "MENU"
                        })
                    }), (0, t.jsxs)("div", {
                        className: "mt-16 sm:mt-20",
                        children: [(0, t.jsx)("p", {
                            className: "text-secondary-foreground/50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-10 border-b border-border pb-4 max-w-xs",
                            children: "Navigation"
                        }), (0, t.jsx)("nav", {
                            className: "flex flex-col gap-6",
                            children: d.map((e, i) => (0, t.jsx)(a.motion.div, {
                                initial: {
                                    x: -100,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: .3 + .1 * i,
                                    duration: .5
                                },
                                className: "group",
                                children: (0, t.jsxs)("a", {
                                    href: e.href,
                                    onClick: t => g(t, e.href),
                                    className: "flex items-end gap-3 sm:gap-4 md:gap-6",
                                    children: [(0, t.jsxs)("span", {
                                        className: "text-secondary-foreground/40 text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 transition-colors group-hover:text-primary",
                                        children: ["0", i + 1]
                                    }), (0, t.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none transition-all duration-500 group-hover:pl-4 md:group-hover:pl-8 group-hover:text-primary group-hover:italic italic-none text-secondary-foreground",
                                            children: e.name
                                        }), (0, t.jsx)("div", {
                                            className: "absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-[2px] sm:h-[4px] bg-primary transition-all duration-500 group-hover:w-full"
                                        })]
                                    }), (0, t.jsxs)("span", {
                                        className: "text-secondary-foreground/60 text-xs sm:text-sm font-medium mb-2 sm:mb-3 hidden lg:block italic",
                                        children: ["— ", e.description]
                                    })]
                                })
                            }, e.name))
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10",
                        children: [(0, t.jsx)("div", {
                            className: "space-y-3 sm:space-y-4",
                            children: (0, t.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0, t.jsx)("p", {
                                    className: "text-base sm:text-lg md:text-xl font-medium hover:text-accent transition-colors cursor-pointer break-all sm:break-normal",
                                    children: "connect@yashilpatel.com"
                                }), (0, t.jsx)("p", {
                                    className: "text-base sm:text-lg md:text-xl font-medium",
                                    children: "+91 99799 66965"
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "space-y-3 sm:space-y-4 text-left md:text-left",
                            children: [(0, t.jsx)("p", {
                                className: "text-secondary-foreground/50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]",
                                children: "Socials"
                            }), (0, t.jsx)("div", {
                                className: "flex gap-4 sm:gap-6",
                                children: h.map((e, i) => (0, t.jsx)(a.motion.a, {
                                    href: e.href,
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        delay: .8 + .1 * i
                                    },
                                    className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-secondary-foreground",
                                    children: (0, t.jsx)(e.icon, {
                                        size: 18,
                                        className: "sm:w-5 sm:h-5"
                                    })
                                }, i))
                            })]
                        })]
                    })]
                })
            })]
        })
    }
    e.s(["default", () => f])
}, 97117, e => {
    "use strict";
    var t = e.i(43987),
        i = e.i(61835),
        r = e.i(31034),
        s = e.i(86785),
        n = e.i(10959),
        o = e.i(89281),
        l = e.i(24980),
        a = e.i(99072),
        c = e.i(56296),
        u = e.i(76424);
    s.default.registerPlugin(n.ScrollTrigger);
    let d = [{
            label: "Home",
            href: "#"
        }, {
            label: "About",
            href: "#about"
        }, {
            label: "Work",
            href: "#work"
        }, {
            label: "Contact",
            href: "#contact"
        }],
        h = [{
            icon: c.Instagram,
            href: "https://www.instagram.com/yashil_07?igsh=MXVkcXdxNnN2Y2I1aA==",
            label: "Instagram"
        }, {
            icon: a.Linkedin,
            href: "https://www.linkedin.com/in/yashilpatel07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            label: "LinkedIn"
        }];

    function f() {
        let e = (0, i.useRef)(null),
            n = (0, i.useRef)(null),
            [a, c] = (0, i.useState)(""),
            f = (0, u.useLenis)(),
            p = (e, t) => {
                if (e.preventDefault(), "#" === t || "/" === t) return void f ? .scrollTo(0);
                let i = document.querySelector(t);
                i && f ? .scrollTo(i, {
                    offset: 0
                })
            };
        return (0, i.useEffect)(() => {
            let e = () => {
                c(new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !0
                }))
            };
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t)
        }, []), (0, r.useGSAP)(() => {
            s.default.from(".ft-reveal", {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top 90%"
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: .08,
                ease: "power3.out"
            }), n.current && s.default.fromTo(n.current, {
                yPercent: 30,
                opacity: 0
            }, {
                yPercent: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: e.current,
                    start: "top 80%",
                    end: "center center",
                    scrub: 1
                },
                ease: "none"
            }), document.querySelectorAll(".ft-magnetic").forEach(e => {
                e.addEventListener("mousemove", t => {
                    let i = e.getBoundingClientRect(),
                        r = t.clientX - i.left - i.width / 2,
                        n = t.clientY - i.top - i.height / 2;
                    s.default.to(e, {
                        x: .3 * r,
                        y: .3 * n,
                        duration: .3,
                        ease: "power2.out"
                    })
                }), e.addEventListener("mouseleave", () => {
                    s.default.to(e, {
                        x: 0,
                        y: 0,
                        duration: .6,
                        ease: "elastic.out(1, 0.3)"
                    })
                })
            })
        }, {
            scope: e
        }), (0, t.jsxs)("footer", {
            ref: e,
            className: "dark relative bg-background text-foreground overflow-hidden selection:bg-accent selection:text-white",
            children: [(0, t.jsx)("div", {
                className: "w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
            }), (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-32 pb-20 sm:pb-24 md:pb-32",
                children: [(0, t.jsxs)("div", {
                    className: "ft-reveal flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 sm:gap-14 mb-24 sm:mb-32 md:mb-40",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("p", {
                            className: "text-[10px] sm:text-xs uppercase tracking-[0.4em] text-foreground/70 font-bold mb-4 sm:mb-6",
                            children: "Ready to startup?"
                        }), (0, t.jsxs)("h3", {
                            className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-tight leading-[1]",
                            children: ["Let’s Build, Launch ", (0, t.jsx)("br", {}), "& ", (0, t.jsx)("span", {
                                className: "italic text-accent",
                                children: "Scale Together."
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col gap-6 lg:text-right",
                        children: [(0, t.jsxs)("p", {
                            className: "text-sm sm:text-base text-foreground/60 font-medium italic",
                            children: ["Got a project or idea?", (0, t.jsx)("br", {}), "Let’s Build Something That Scales"]
                        }), (0, t.jsxs)("a", {
                            href: "#contact",
                            onClick: e => p(e, "#contact"),
                            className: "ft-magnetic group relative flex items-center lg:justify-end gap-4 sm:gap-6 flex-shrink-0",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-col items-start lg:items-end",
                                children: [(0, t.jsx)("span", {
                                    className: "text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/60 mb-1",
                                    children: "Start a Conversation"
                                }), (0, t.jsx)("span", {
                                    className: "text-base sm:text-lg md:text-xl text-foreground/90 group-hover:text-accent transition-colors duration-300 font-medium",
                                    children: "connect@yashilpatel.com"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-foreground/20 flex items-center justify-center overflow-hidden group-hover:border-accent/40 transition-colors duration-500",
                                children: [(0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-accent scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center"
                                }), (0, t.jsx)(l.ArrowUpRight, {
                                    size: 22,
                                    className: "relative z-10 text-foreground/70 group-hover:text-primary transition-colors duration-300 sm:w-7 sm:h-7"
                                })]
                            })]
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-y-16 gap-x-10 sm:gap-x-12",
                    children: [(0, t.jsxs)("div", {
                        className: "ft-reveal",
                        children: [(0, t.jsx)("h4", {
                            className: "text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-bold mb-6 sm:mb-8 pb-4 border-b border-foreground/10",
                            children: "Sitemap"
                        }), (0, t.jsx)("nav", {
                            className: "flex flex-col gap-4",
                            children: d.map(e => (0, t.jsxs)(o.default, {
                                href: e.href,
                                onClick: t => p(t, e.href),
                                className: "group relative text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-300 w-fit overflow-hidden",
                                children: [(0, t.jsx)("span", {
                                    className: "relative z-10",
                                    children: e.label
                                }), (0, t.jsx)("span", {
                                    className: "absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                                })]
                            }, e.href))
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "ft-reveal",
                        children: [(0, t.jsx)("h4", {
                            className: "text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-bold mb-6 sm:mb-8 pb-4 border-b border-foreground/10",
                            children: "Social"
                        }), (0, t.jsx)("div", {
                            className: "flex flex-col gap-4",
                            children: h.map(e => (0, t.jsxs)("a", {
                                href: e.href,
                                "aria-label": e.label,
                                className: "ft-magnetic group flex items-center gap-3 text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-300 w-fit",
                                children: [(0, t.jsx)(e.icon, {
                                    size: 15,
                                    className: "group-hover:text-accent transition-colors duration-300 sm:w-4 sm:h-4"
                                }), (0, t.jsx)("span", {
                                    children: e.label
                                })]
                            }, e.label))
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "ft-reveal",
                        children: [(0, t.jsx)("h4", {
                            className: "text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-bold mb-6 sm:mb-8 pb-4 border-b border-foreground/10",
                            children: "Based in"
                        }), (0, t.jsxs)("p", {
                            className: "text-sm sm:text-base text-foreground/70 leading-relaxed font-medium",
                            children: ["Surat, Gujarat", (0, t.jsx)("br", {}), "India"]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "ft-reveal",
                        children: [(0, t.jsx)("h4", {
                            className: "text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 font-bold mb-6 sm:mb-8 pb-4 border-b border-foreground/10",
                            children: "Status"
                        }), (0, t.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, t.jsxs)("div", {
                                    className: "relative w-2 h-2",
                                    children: [(0, t.jsx)("div", {
                                        className: "absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"
                                    }), (0, t.jsx)("div", {
                                        className: "relative w-2 h-2 rounded-full bg-green-400"
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: "text-sm sm:text-base text-foreground/70 whitespace-nowrap",
                                    children: "Available for Projects & Consulting"
                                })]
                            }), (0, t.jsx)("div", {
                                className: "text-sm sm:text-base text-foreground/60 font-mono tracking-wider",
                                children: a
                            })]
                        })]
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[200px] bg-accent/[0.02] rounded-full blur-[60px] pointer-events-none"
            })]
        })
    }
    e.s(["default", () => f])
}, 10840, e => {
    "use strict";
    var t = e.i(43987),
        i = e.i(76424);

    function r({
        children: e
    }) {
        return (0, t.jsx)(i.ReactLenis, {
            root: !0,
            options: {
                duration: 1.2,
                smoothWheel: !0
            },
            children: e
        })
    }
    e.s(["default", () => r])
}, 70562, e => {
    "use strict";
    var t = e.i(43987),
        i = e.i(61835),
        r = e.i(18906),
        s = e.i(38844);
    let n = (0, e.i(98452).default)("arrow-up", [
        ["path", {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }],
        ["path", {
            d: "M12 19V5",
            key: "x0mq9r"
        }]
    ]);

    function o() {
        let [e, o] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => {
            let e = () => {
                window.scrollY > 300 ? o(!0) : o(!1)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }, []), (0, t.jsx)(s.AnimatePresence, {
            children: e && (0, t.jsx)(r.motion.button, {
                initial: {
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .8
                },
                onClick: () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                },
                className: "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "aria-label": "Scroll to top",
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: .9
                },
                children: (0, t.jsx)(n, {
                    className: "w-6 h-6"
                })
            })
        })
    }
    e.s(["default", () => o], 70562)
}, 68351, e => {
    "use strict";
    var t = e.i(43987),
        i = e.i(61835),
        r = e.i(18906),
        s = e.i(38844),
        n = e.i(39486);

    function o() {
        let [e, o] = (0, i.useState)(0), [l, a] = (0, i.useState)(!0);
        return ((0, i.useEffect)(() => {
            let t = setInterval(() => {
                o(e => e >= 100 ? 100 : Math.min(e + (e < 50 ? 5 : 8), 100))
            }, 120);
            if (100 === e) {
                clearInterval(t);
                let e = setTimeout(() => a(!1), 500);
                return () => clearTimeout(e)
            }
            return () => clearInterval(t)
        }, [e]), l) ? (0, t.jsx)(s.AnimatePresence, {
            children: l && (0, t.jsx)(r.motion.div, {
                initial: {
                    opacity: 1
                },
                exit: {
                    y: "-100%"
                },
                transition: {
                    duration: .8,
                    ease: [.87, 0, .13, 1]
                },
                className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#001b3b] overflow-hidden will-change-transform",
                children: (0, t.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [(0, t.jsxs)("div", {
                        className: "relative flex items-center justify-center",
                        children: [(0, t.jsx)(r.motion.div, {
                            initial: {
                                x: 40,
                                opacity: 0
                            },
                            animate: {
                                x: e > 30 ? 0 : 40,
                                opacity: .5 * (e > 30)
                            },
                            transition: {
                                duration: .6,
                                ease: "easeOut"
                            },
                            className: "mr-6 sm:mr-10 hidden sm:block will-change-transform",
                            children: (0, t.jsx)("span", {
                                className: "text-[7vw] font-black uppercase tracking-[-0.05em] text-transparent",
                                style: {
                                    WebkitTextStroke: "1px rgba(255,255,255,0.7)"
                                },
                                children: "YASHIL"
                            })
                        }), (0, t.jsxs)(r.motion.div, {
                            initial: {
                                scale: .8,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: .8
                            },
                            className: "relative w-20 h-20 sm:w-28 sm:h-28 z-10 will-change-transform",
                            children: [(0, t.jsx)(n.default, {
                                src: "/images/PGLOGO-white.png",
                                alt: "Logo",
                                fill: !0,
                                className: "object-contain",
                                priority: !0
                            }), (0, t.jsx)("div", {
                                className: "absolute inset-0 bg-[#3A6EA5] blur-[40px] opacity-30 pointer-events-none"
                            })]
                        }), (0, t.jsx)(r.motion.div, {
                            initial: {
                                x: -40,
                                opacity: 0
                            },
                            animate: {
                                x: e > 30 ? 0 : -40,
                                opacity: .5 * (e > 30)
                            },
                            transition: {
                                duration: .6,
                                ease: "easeOut"
                            },
                            className: "ml-6 sm:ml-10 hidden sm:block will-change-transform",
                            children: (0, t.jsx)("span", {
                                className: "text-[7vw] font-black uppercase tracking-[-0.04em] text-transparent",
                                style: {
                                    WebkitTextStroke: "1px rgba(255,255,255,0.7)"
                                },
                                children: "PATEL"
                            })
                        })]
                    }), (0, t.jsx)(r.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: +(e > 30)
                        },
                        className: "block sm:hidden mt-8 text-xl font-bold uppercase tracking-[0.3em] text-white/80 will-change-transform",
                        children: "Yashil Patel"
                    }), (0, t.jsxs)("div", {
                        className: "mt-16 flex flex-col items-center gap-4",
                        children: [(0, t.jsxs)(r.motion.div, {
                            className: "flex flex-col items-center gap-2 will-change-transform",
                            children: [(0, t.jsx)("span", {
                                className: "text-xs font-black uppercase tracking-[0.5em] text-white",
                                children: "Initialising"
                            }), (0, t.jsxs)("span", {
                                className: "text-sm font-mono font-bold text-[#4C89B6]",
                                children: [e.toString().padStart(3, "0"), " %"]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden",
                            children: (0, t.jsx)(r.motion.div, {
                                className: "h-full bg-[#4C89B6] will-change-[width]",
                                initial: {
                                    width: "0%"
                                },
                                animate: {
                                    width: `${e}%`
                                },
                                transition: {
                                    duration: .2
                                }
                            })
                        })]
                    })]
                })
            })
        }) : null
    }
    e.s(["default", () => o])
}]);