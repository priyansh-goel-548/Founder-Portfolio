(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 89924, e => {
    "use strict";
    var t = e.i(43987),
        r = e.i(89281);
    let a = (0, e.i(98452).default)("arrow-left", [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ]);

    function s() {
        return (0, t.jsx)("main", {
            className: "flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center select-none",
            children: (0, t.jsxs)("div", {
                className: "space-y-8 max-w-2xl",
                children: [(0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [(0, t.jsx)("h1", {
                        className: "text-[clamp(6rem,20vw,12rem)] font-black tracking-tighter text-primary/5 leading-none",
                        children: "404"
                    }), (0, t.jsxs)("h2", {
                        className: "text-4xl md:text-6xl font-serif text-primary -mt-[4vw]",
                        children: ["Lost in ", (0, t.jsx)("span", {
                            className: "italic",
                            children: "Reality"
                        })]
                    })]
                }), (0, t.jsx)("p", {
                    className: "text-lg md:text-xl text-foreground/50 font-medium max-w-md mx-auto leading-relaxed",
                    children: "The page you are looking for has been moved or doesn't exist. Let's get you back to the main journey."
                }), (0, t.jsx)("div", {
                    className: "pt-8",
                    children: (0, t.jsxs)(r.default, {
                        href: "/",
                        className: "group inline-flex items-center gap-4 text-primary hover:text-accent transition-colors",
                        children: [(0, t.jsx)("div", {
                            className: "flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-background transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
                            children: (0, t.jsx)(a, {
                                size: 24,
                                className: "group-hover:-translate-x-1 transition-transform"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-sm font-bold uppercase tracking-widest",
                            children: "Return Home"
                        })]
                    })
                })]
            })
        })
    }
    e.s(["default", () => s], 89924)
}]);