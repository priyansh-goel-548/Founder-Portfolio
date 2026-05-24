(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 71256, 14146, e => {
    "use strict";
    var t = e.i(98452);
    let r = (0, t.default)("code-xml", [
        ["path", {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }],
        ["path", {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }],
        ["path", {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }]
    ]);
    e.s(["Code2", () => r], 71256);
    let a = (0, t.default)("palette", [
        ["path", {
            d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
            key: "e79jfc"
        }],
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }]
    ]);
    e.s(["Palette", () => a], 14146)
}, 71189, e => {
    "use strict";
    let t = (0, e.i(98452).default)("x", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]);
    e.s(["X", () => t], 71189)
}, 9835, e => {
    "use strict";
    var t = e.i(43987),
        r = e.i(61835),
        a = e.i(31034),
        s = e.i(86785),
        i = e.i(10959),
        n = e.i(18906),
        l = e.i(38844),
        o = e.i(99072),
        c = e.i(56296),
        d = e.i(24980);
    let m = (0, e.i(98452).default)("circle-check", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ]);
    var u = e.i(71189);
    s.default.registerPlugin(i.ScrollTrigger);
    let p = [{
        icon: c.Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/yashil_07?igsh=MXVkcXdxNnN2Y2I1aA=="
    }, {
        icon: o.Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yashilpatel07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }];
    e.s(["default", 0, () => {
        let e = (0, r.useRef)(null),
            i = (0, r.useRef)(null),
            o = (0, r.useRef)(null),
            c = (0, r.useRef)(null),
            [x, g] = (0, r.useState)(!1),
            [h, f] = (0, r.useState)(!1),
            [b, y] = (0, r.useState)("");
        (0, r.useEffect)(() => {
            let e = () => {
                y(new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !0
                }))
            };
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t)
        }, []), (0, a.useGSAP)(() => {
            s.default.timeline().from(".hero-line", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: .1,
                ease: "power4.out"
            }).from(".contact-divider", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1,
                ease: "power4.out"
            }, "-=0.8").from(".info-item", {
                y: 20,
                opacity: 0,
                duration: .8,
                stagger: .1,
                ease: "power3.out"
            }, "-=0.6").from(".form-item", {
                y: 30,
                opacity: 0,
                duration: .8,
                stagger: .1,
                ease: "power3.out"
            }, "-=0.8"), s.default.to(o.current, {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                xPercent: -20
            }), s.default.to(c.current, {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                },
                xPercent: 20
            })
        }, {
            scope: e
        });
        let v = async e => {
            if (e.preventDefault(), f(!0), !i.current) return;
            let t = new FormData(i.current);
            try {
                let e = {};
                t.forEach((t, r) => {
                    e[r] = t.toString()
                }), e.date = new Date().toLocaleString(), await fetch("https://script.google.com/macros/s/AKfycbyLcPQC_EeLgco0muDtBDKByTfltCan8niN7B1fhpNZhLhEW47hBskCHPbdawYaRNX61Q/exec", {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }), g(!0), i.current.reset(), console.log("Form submitted successfully")
            } catch (e) {
                console.error("Error:", e), alert("Submission failed! Please try again.")
            } finally {
                f(!1)
            }
        };
        return (0, t.jsxs)("div", {
            id: "contact",
            ref: e,
            className: "relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#efe6d3_0%,#f7f3e8_26%,#f4ecdf_58%,#efe6d3_100%)] pt-32 pb-24 text-foreground selection:bg-primary selection:text-white",
            children: [(0, t.jsxs)("div", {
                className: "pointer-events-none absolute inset-0 z-0",
                children: [(0, t.jsx)("div", {
                    className: "absolute left-[8%] top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
                }), (0, t.jsx)("div", {
                    className: "absolute right-[6%] top-1/3 h-72 w-72 rounded-full bg-accent/12 blur-3xl"
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-white/50 blur-3xl"
                })]
            }), (0, t.jsxs)("div", {
                className: "absolute top-20 left-0 w-full pointer-events-none overflow-hidden opacity-[0.03] select-none z-0 whitespace-nowrap hidden md:block",
                children: [(0, t.jsx)("div", {
                    ref: o,
                    className: "text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-primary",
                    children: "LET'S"
                }), (0, t.jsx)("div", {
                    ref: c,
                    className: "text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-transparent stroke-primary stroke-2 [-webkit-text-stroke:2px_var(--primary)] -mt-[4vw]",
                    children: "TALK"
                })]
            }), (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: [(0, t.jsxs)("div", {
                    className: "mb-12 md:mb-16 overflow-hidden text-center",
                    children: [(0, t.jsxs)("p", {
                        className: "hero-line mb-6 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-primary",
                        children: [(0, t.jsx)("span", {
                            className: "w-8 h-px bg-primary"
                        }), " Contact"]
                    }), (0, t.jsx)("h1", {
                        className: "hero-line text-3xl sm:text-4xl md:text-6xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] text-primary",
                        children: "Let’s Talk"
                    }), (0, t.jsx)("p", {
                        className: "hero-line mt-6 text-lg md:text-xl text-primary/60 max-w-2xl mx-auto font-medium leading-relaxed",
                        children: "Have an idea, project or business to scale? Let’s discuss how we can build, optimize and grow it together."
                    })]
                }), (0, t.jsx)("div", {
                    className: "contact-divider mb-16 h-px w-full bg-primary/10 md:mb-24"
                }), (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24",
                    children: [(0, t.jsx)("div", {
                        className: "lg:col-span-5 flex flex-col justify-between",
                        children: (0, t.jsxs)("div", {
                            className: "space-y-12 rounded-[2rem] border border-primary/10 bg-background/70 p-8 shadow-[0_24px_80px_-40px_rgba(0,34,72,0.35)] backdrop-blur-sm sm:p-10",
                            children: [(0, t.jsxs)("div", {
                                className: "info-item",
                                children: [(0, t.jsx)("h3", {
                                    className: "mb-3 text-xs font-bold uppercase tracking-widest text-primary/45",
                                    children: "Email"
                                }), (0, t.jsxs)("a", {
                                    href: "mailto:connect@yashilpatel.com",
                                    className: "group inline-block text-2xl font-serif leading-tight text-primary transition-colors hover:text-accent sm:text-3xl",
                                    children: ["connect@yashilpatel.com", (0, t.jsx)("div", {
                                        className: "mt-1 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "info-item",
                                children: [(0, t.jsx)("h3", {
                                    className: "mb-3 text-xs font-bold uppercase tracking-widest text-primary/45",
                                    children: "Location & Time"
                                }), (0, t.jsx)("p", {
                                    className: "text-lg font-medium text-primary",
                                    children: "Surat, Gujarat, India"
                                }), (0, t.jsxs)("p", {
                                    className: "font-medium text-primary/60",
                                    children: [b, " (IST)"]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "info-item pt-8",
                                children: [(0, t.jsx)("h3", {
                                    className: "mb-6 text-xs font-bold uppercase tracking-widest text-primary/45",
                                    children: "Socials"
                                }), (0, t.jsx)("div", {
                                    className: "flex gap-4",
                                    children: p.map((e, r) => (0, t.jsx)("a", {
                                        href: e.href,
                                        "aria-label": e.label,
                                        className: "flex h-12 w-12 items-center justify-center rounded-full border border-primary/12 bg-white/55 text-primary/65 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground",
                                        children: (0, t.jsx)(e.icon, {
                                            size: 20
                                        })
                                    }, r))
                                })]
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "lg:col-span-7",
                        children: (0, t.jsxs)("form", {
                            ref: i,
                            onSubmit: v,
                            className: "space-y-8 rounded-[2rem] border border-primary/10 bg-white/65 p-8 shadow-[0_30px_100px_-48px_rgba(0,34,72,0.45)] backdrop-blur-sm sm:p-10 md:p-12",
                            children: [(0, t.jsx)("h2", {
                                className: "text-3xl font-serif text-primary mb-10",
                                children: "Start a Conversation"
                            }), (0, t.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8",
                                children: [(0, t.jsxs)("div", {
                                    className: "form-item group relative rounded-[1.5rem] border border-primary/10 bg-background/85 px-5 pb-5 pt-4 shadow-[0_20px_45px_-35px_rgba(0,34,72,0.45)] transition-colors duration-300 focus-within:border-primary/30",
                                    children: [(0, t.jsx)("label", {
                                        className: "mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/45 transition-colors group-focus-within:text-primary",
                                        children: "Name"
                                    }), (0, t.jsx)("input", {
                                        type: "text",
                                        name: "name",
                                        required: !0,
                                        placeholder: "John Doe",
                                        className: "w-full bg-transparent text-xl font-medium text-primary placeholder:text-primary/25 focus:outline-none"
                                    }), (0, t.jsx)("div", {
                                        className: "absolute inset-x-5 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-focus-within:scale-x-100"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "form-item group relative rounded-[1.5rem] border border-primary/10 bg-background/85 px-5 pb-5 pt-4 shadow-[0_20px_45px_-35px_rgba(0,34,72,0.45)] transition-colors duration-300 focus-within:border-primary/30",
                                    children: [(0, t.jsx)("label", {
                                        className: "mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/45 transition-colors group-focus-within:text-primary",
                                        children: "Email"
                                    }), (0, t.jsx)("input", {
                                        type: "email",
                                        name: "email",
                                        required: !0,
                                        placeholder: "john@example.com",
                                        className: "w-full bg-transparent text-xl font-medium text-primary placeholder:text-primary/25 focus:outline-none"
                                    }), (0, t.jsx)("div", {
                                        className: "absolute inset-x-5 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-focus-within:scale-x-100"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "form-item group relative rounded-[1.5rem] border border-primary/10 bg-background/85 px-5 pb-5 pt-4 shadow-[0_20px_45px_-35px_rgba(0,34,72,0.45)] transition-colors duration-300 focus-within:border-primary/30",
                                    children: [(0, t.jsx)("label", {
                                        className: "mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/45 transition-colors group-focus-within:text-primary",
                                        children: "Phone No"
                                    }), (0, t.jsx)("input", {
                                        type: "tel",
                                        name: "phone",
                                        required: !0,
                                        placeholder: "+91 99799 66965",
                                        className: "w-full bg-transparent text-xl font-medium text-primary placeholder:text-primary/25 focus:outline-none"
                                    }), (0, t.jsx)("div", {
                                        className: "absolute inset-x-5 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-focus-within:scale-x-100"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "form-item group relative rounded-[1.5rem] border border-primary/10 bg-background/85 px-5 pb-5 pt-4 shadow-[0_20px_45px_-35px_rgba(0,34,72,0.45)] transition-colors duration-300 focus-within:border-primary/30",
                                    children: [(0, t.jsx)("label", {
                                        className: "mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/45 transition-colors group-focus-within:text-primary",
                                        children: "Location"
                                    }), (0, t.jsx)("input", {
                                        type: "text",
                                        name: "location",
                                        required: !0,
                                        placeholder: "Surat, India",
                                        className: "w-full bg-transparent text-xl font-medium text-primary placeholder:text-primary/25 focus:outline-none"
                                    }), (0, t.jsx)("div", {
                                        className: "absolute inset-x-5 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-focus-within:scale-x-100"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "form-item group relative rounded-[1.75rem] border border-primary/10 bg-background/85 px-5 pb-5 pt-4 shadow-[0_20px_45px_-35px_rgba(0,34,72,0.45)] transition-colors duration-300 focus-within:border-primary/30",
                                children: [(0, t.jsx)("label", {
                                    className: "mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/45 transition-colors group-focus-within:text-primary",
                                    children: "Vision & Goals"
                                }), (0, t.jsx)("textarea", {
                                    name: "message",
                                    required: !0,
                                    rows: 5,
                                    placeholder: "Tell me about your vision...",
                                    className: "w-full resize-none bg-transparent text-xl font-medium text-primary placeholder:text-primary/25 focus:outline-none"
                                }), (0, t.jsx)("div", {
                                    className: "absolute inset-x-5 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-focus-within:scale-x-100"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "form-item pt-6",
                                children: [(0, t.jsxs)("button", {
                                    type: "submit",
                                    disabled: h,
                                    className: "group flex items-center gap-4 text-primary transition-colors hover:text-accent disabled:opacity-50",
                                    children: [(0, t.jsx)("div", {
                                        className: "flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-background/70 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground",
                                        children: (0, t.jsx)(d.ArrowUpRight, {
                                            size: 24,
                                            className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                        })
                                    }), (0, t.jsx)("span", {
                                        className: "text-sm font-bold uppercase tracking-widest",
                                        children: h ? "Sending..." : "Send Message"
                                    })]
                                }), (0, t.jsx)("p", {
                                    className: "mt-4 text-[10px] font-bold uppercase tracking-widest text-primary/40",
                                    children: "Free 15-min consultation available"
                                })]
                            })]
                        })
                    })]
                })]
            }), (0, t.jsx)(l.AnimatePresence, {
                children: x && (0, t.jsxs)("div", {
                    className: "fixed inset-0 z-[200] flex items-center justify-center px-4",
                    children: [(0, t.jsx)(n.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: () => g(!1),
                        className: "absolute inset-0 bg-background/40 backdrop-blur-sm"
                    }), (0, t.jsxs)(n.motion.div, {
                        initial: {
                            scale: .95,
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            scale: .95,
                            opacity: 0,
                            y: 20
                        },
                        className: "relative w-full max-w-md rounded-[2rem] border border-primary/10 bg-background p-12 text-center shadow-2xl",
                        children: [(0, t.jsx)("button", {
                            onClick: () => g(!1),
                            className: "absolute right-6 top-6 text-primary/40 transition-colors hover:text-primary",
                            children: (0, t.jsx)(u.X, {
                                size: 24
                            })
                        }), (0, t.jsx)("div", {
                            className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10",
                            children: (0, t.jsx)(m, {
                                size: 40,
                                className: "text-primary"
                            })
                        }), (0, t.jsx)("h3", {
                            className: "mb-4 text-3xl font-serif text-primary",
                            children: "Request Sent"
                        }), (0, t.jsx)("p", {
                            className: "mb-8 font-medium text-primary/60",
                            children: "Thank you for your interest. I will review your details and get back to you shortly."
                        }), (0, t.jsx)("button", {
                            onClick: () => g(!1),
                            className: "w-full rounded-full bg-primary py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                            children: "Close"
                        })]
                    })]
                })
            })]
        })
    }], 9835)
}, 19011, e => {
    "use strict";
    var t = e.i(43987),
        r = e.i(31034),
        a = e.i(86785),
        s = e.i(10959),
        i = e.i(61835),
        n = e.i(71256),
        l = e.i(14146),
        o = e.i(98452);
    let c = (0, o.default)("zap", [
            ["path", {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db"
            }]
        ]),
        d = (0, o.default)("sparkles", [
            ["path", {
                d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                key: "1s2grr"
            }],
            ["path", {
                d: "M20 2v4",
                key: "1rf3ol"
            }],
            ["path", {
                d: "M22 4h-4",
                key: "gwowj6"
            }],
            ["circle", {
                cx: "4",
                cy: "20",
                r: "2",
                key: "6kqj1y"
            }]
        ]);
    a.default.registerPlugin(s.ScrollTrigger);
    let m = [{
            title: "System Architecture & Scalability",
            icon: n.Code2,
            description: "Designing scalable, secure and high-performance systems that support business growth and handle real-world demand efficiently.",
            capabilities: ["Backend Architecture Design", "Database Scaling & Optimization", "API Infrastructure & Performance", "Security & Reliability Audits"],
            skills: ["Node.js", "System Design", "APIs", "Cloud Arch"],
            accentColor: "#3B82F6",
            index: "01"
        }, {
            title: "High-Performance Development",
            icon: c,
            description: "Building lightning-fast digital products including mobile apps and SaaS platforms with a focus on core performance and flawless execution.",
            capabilities: ["Mobile App Development", "SaaS Platform Engineering", "Real-time System Integration", "Performance-Driven Development"],
            skills: ["Flutter", "Next.js", "Dart", "SaaS Engineering"],
            accentColor: "#8B5CF6",
            index: "02"
        }, {
            title: "Product Design & Brand Strategy",
            icon: l.Palette,
            description: "Crafting beautiful, user-centric interfaces and international brand identities that define market leaders.",
            capabilities: ["UI/UX Design Systems", "International Brand Expansion", "Conversion-Focused UX", "Product Strategy & Roadmap"],
            skills: ["Figma", "Branding", "UI/UX", "Product Strategy"],
            accentColor: "#F59E0B",
            index: "03"
        }, {
            title: "Growth & Automation Systems",
            icon: d,
            description: "Creating custom CRM solutions and automation workflows that accelerate business growth and streamline operations.",
            capabilities: ["Custom CRM Development", "Workflow Automation", "Growth Marketing Engines", "Operational Intelligence Tools"],
            skills: ["Automation", "CRM", "Growth Strategy", "Internal Tools"],
            accentColor: "#10B981",
            index: "04"
        }],
        u = ({
            service: e,
            index: s
        }) => {
            let n = (0, i.useRef)(null),
                l = (0, i.useRef)(null),
                o = (0, i.useRef)(null),
                c = s % 2 == 0;
            return (0, r.useGSAP)(() => {
                let e = n.current,
                    t = l.current,
                    r = o.current;
                e && t && r && (a.default.to(t, {
                    scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    },
                    y: -80,
                    ease: "none"
                }), a.default.from(r, {
                    scrollTrigger: {
                        trigger: e,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }))
            }, {
                scope: n
            }), (0, t.jsxs)("div", {
                ref: n,
                className: `relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-16 sm:py-20 lg:py-24 border-b border-foreground/10 last:border-0 ${c?"":"lg:flex-row-reverse"}`,
                children: [(0, t.jsx)("div", {
                    className: `lg:col-span-3 relative z-10 ${c?"lg:order-1":"lg:order-2"}`,
                    children: (0, t.jsxs)("div", {
                        className: "flex lg:flex-col items-start gap-6 lg:gap-8",
                        children: [(0, t.jsx)("div", {
                            className: "relative group",
                            children: (0, t.jsxs)("div", {
                                className: "relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border flex items-center justify-center transition-all duration-500 overflow-hidden bg-background",
                                style: {
                                    borderColor: e.accentColor + "40"
                                },
                                children: [(0, t.jsx)("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full",
                                    style: {
                                        backgroundColor: e.accentColor
                                    }
                                }), (0, t.jsx)(e.icon, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:scale-110",
                                    style: {
                                        color: e.accentColor
                                    }
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "space-y-2 lg:space-y-3",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, t.jsx)("span", {
                                    className: "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter",
                                    style: {
                                        color: e.accentColor
                                    },
                                    children: e.index
                                }), (0, t.jsx)("div", {
                                    className: "h-px w-12 lg:w-16 bg-foreground/20"
                                })]
                            })
                        })]
                    })
                }), (0, t.jsxs)("div", {
                    ref: o,
                    className: `lg:col-span-9 space-y-6 sm:space-y-8 relative z-10 ${c?"lg:order-2":"lg:order-1"}`,
                    children: [(0, t.jsxs)("div", {
                        className: "space-y-4",
                        children: [(0, t.jsx)("h3", {
                            className: "text-4xl sm:text-5xl lg:text-7xl font-serif text-foreground tracking-tight leading-[0.9]",
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: "text-lg sm:text-xl lg:text-2xl text-foreground/60 leading-relaxed font-medium max-w-3xl",
                            children: e.description
                        })]
                    }), (0, t.jsx)("div", {
                        className: "grid sm:grid-cols-2 gap-3 sm:gap-4",
                        children: e.capabilities.map((r, a) => (0, t.jsxs)("div", {
                            className: "flex items-start gap-3 group/item",
                            children: [(0, t.jsx)("div", {
                                className: "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300",
                                style: {
                                    backgroundColor: e.accentColor
                                }
                            }), (0, t.jsx)("span", {
                                className: "text-sm sm:text-base text-foreground/80 group-hover/item:text-foreground transition-colors duration-300",
                                children: r
                            })]
                        }, a))
                    }), (0, t.jsx)("div", {
                        className: "flex flex-wrap gap-2 sm:gap-3",
                        children: e.skills.map((e, r) => (0, t.jsx)("span", {
                            className: "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs sm:text-sm font-bold text-foreground/60 hover:text-foreground/90 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 backdrop-blur-sm",
                            children: e
                        }, r))
                    })]
                })]
            })
        };

    function p() {
        let e = (0, i.useRef)(null),
            s = (0, i.useRef)(null);
        return (0, r.useGSAP)(() => {
            s.current && a.default.fromTo(s.current, {
                scaleY: 0
            }, {
                scaleY: 1,
                scrollTrigger: {
                    trigger: e.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1
                },
                transformOrigin: "top",
                ease: "none"
            })
        }, {
            scope: e
        }), (0, t.jsxs)("section", {
            ref: e,
            className: "relative py-12 sm:py-16 lg:py-20",
            children: [(0, t.jsx)("div", {
                ref: s,
                className: "hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent -translate-x-1/2"
            }), (0, t.jsx)("div", {
                className: "absolute top-12 left-1/2 -translate-x-1/2 hidden lg:block",
                children: (0, t.jsx)(d, {
                    className: "w-6 h-6 text-foreground/30"
                })
            }), (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: m.map((e, r) => (0, t.jsx)(u, {
                    service: e,
                    index: r
                }, e.index))
            })]
        })
    }
    var x = e.i(39486);
    a.default.registerPlugin(s.ScrollTrigger);
    let g = [{
        title: "ALIGNSOUL",
        category: "APP",
        desc: "A platform connecting like-minded people for real-world activities.Solves real-world connection gaps, improves meaningful interactions and features interest-based smart matching.",
        tags: ["Flutter", "Node.js", "APIs", "Socket"],
        accent: "#6B9BD1",
        year: "2024"
    }, {
        title: "KOSMIQUA",
        category: "WEBSITE",
        desc: "Premium European skincare e-commerce. International brand expansion, growth through performance marketing and high-converting shopping experience.",
        tags: ["Strategy", "Product Development", "Marketing", "Branding"],
        accent: "#4C89B6",
        year: "2024"
    }, {
        title: "AL ROMAIZAN",
        category: "APP",
        desc: "Luxury jewellery e-commerce for a leading GCC brand. Enhanced digital experience, improved engagement and high-performance scalable platform.",
        tags: ["Luxury Design", "Mobile Dev", "Optimization", "Scalability"],
        accent: "#D4AF37",
        year: "2024"
    }, {
        title: "PATIL PHARMACY",
        category: "WEBSITE",
        desc: "Digital pharmacy with integrated CRM. Complete digital transformation, improved operations and custom CRM for local outlet management.",
        tags: ["Branding", "Product Development", "CRM", "Growth"],
        accent: "#4CAF50",
        year: "2024"
    }, {
        title: "GERMAINE DE CAPUCCINI INDIA",
        category: "WEBSITE",
        desc: "European skincare expansion in India. International brand entry, digital growth strategy and premium e-commerce experience.",
        tags: ["Market Strategy", "E-commerce", "Positioning", "Growth"],
        accent: "#5C6A78",
        year: "2024"
    }, {
        title: "CYBERMATRICKS",
        category: "WEBSITE",
        desc: "Cybersecurity corporate presence.  Strong digital trust,  improved credibility and  clear service positioning for tech brands.",
        tags: ["Web Development", "UX Design", "Performance"],
        accent: "#4CAF9F",
        year: "2024"
    }, {
        title: "EY INVOICE",
        category: "APP",
        desc: "GST-compliant e-invoicing solution. Automated invoicing workflow, improved tracking and seamless business integration.",
        tags: ["Mobile App", "Integration", "Performance"],
        accent: "#FFD700",
        year: "2024"
    }];

    function h({
        projectIndex: e
    }) {
        let r = {
                0: "/images/Black Titanium.webp",
                1: "/images/kosmiqua.svg",
                2: "/images/Al-Romizon.svg",
                3: "/images/patil.svg",
                4: "/images/germain.svg",
                5: "/images/cybermatrix.svg",
                6: "/images/EY.svg"
            },
            a = r[e] || r[0];
        return (0, t.jsx)("div", {
            className: "relative w-full aspect-square",
            children: (0, t.jsx)(x.default, {
                src: a,
                alt: `Project mockup ${e+1}`,
                fill: !0,
                className: "object-contain",
                sizes: "(max-width: 768px) 100vw, 50vw",
                loading: "lazy"
            })
        })
    }
    let f = ({
        project: e,
        index: n
    }) => {
        let l = (0, i.useRef)(null),
            o = g.findIndex(t => t.title === e.title);
        return (0, r.useGSAP)(() => {
            if (!l.current) return;
            let t = l.current.querySelectorAll(".proj-content");
            a.default.from(t, {
                scrollTrigger: {
                    trigger: l.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 40,
                opacity: 0,
                stagger: .1,
                duration: .8,
                ease: "power2.out"
            });
            let r = `#mockup-${n}`,
                i = `#marker-${n}`;
            s.ScrollTrigger.create({
                trigger: l.current,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => {
                    a.default.to(r, {
                        opacity: 1,
                        scale: 1,
                        duration: .5,
                        ease: "power2.out",
                        overwrite: "auto"
                    }), a.default.to(i, {
                        scale: 1.5,
                        backgroundColor: e.accent,
                        borderColor: e.accent,
                        duration: .4
                    })
                },
                onLeave: () => {
                    a.default.to(r, {
                        opacity: 0,
                        scale: .95,
                        duration: .5,
                        ease: "power2.out",
                        overwrite: "auto"
                    }), a.default.to(i, {
                        scale: 1,
                        backgroundColor: "transparent",
                        borderColor: "rgba(0,0,0,0.1)",
                        duration: .4
                    })
                },
                onEnterBack: () => {
                    a.default.to(r, {
                        opacity: 1,
                        scale: 1,
                        duration: .5,
                        ease: "power2.out",
                        overwrite: "auto"
                    }), a.default.to(i, {
                        scale: 1.5,
                        backgroundColor: e.accent,
                        borderColor: e.accent,
                        duration: .4
                    })
                },
                onLeaveBack: () => {
                    a.default.to(r, {
                        opacity: 0,
                        scale: .95,
                        duration: .5,
                        ease: "power2.out",
                        overwrite: "auto"
                    }), a.default.to(i, {
                        scale: 1,
                        backgroundColor: "transparent",
                        borderColor: "rgba(0,0,0,0.1)",
                        duration: .4
                    })
                }
            })
        }), (0, t.jsxs)("div", {
            ref: l,
            className: "min-h-[80vh] flex flex-col justify-center py-20 relative z-20 border-b border-primary/5 last:border-0 w-full pl-0 lg:pl-20",
            children: [(0, t.jsxs)("div", {
                className: "flex flex-col gap-6 w-full max-w-xl relative",
                children: [(0, t.jsx)("span", {
                    className: "proj-content text-[15vw] md:text-[8vw] font-black opacity-[0.03] font-mono tracking-tighter absolute -top-10 -left-10 md:-left-20 pointer-events-none select-none",
                    children: (n + 1).toString().padStart(2, "0")
                }), (0, t.jsx)("div", {
                    className: "proj-content flex flex-col gap-2 relative z-10",
                    children: (0, t.jsxs)("span", {
                        className: "text-xs md:text-sm font-black uppercase tracking-widest",
                        style: {
                            color: e.accent
                        },
                        children: [e.year, " • ", e.category]
                    })
                }), (0, t.jsxs)("div", {
                    className: "proj-content space-y-6 relative z-10",
                    children: [(0, t.jsx)("h3", {
                        className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-foreground transition-all duration-500 hover:text-primary hover:pl-4",
                        children: e.title
                    }), (0, t.jsx)("p", {
                        className: "text-lg md:text-xl text-foreground/75 leading-relaxed font-medium max-w-lg",
                        children: e.desc
                    })]
                }), (0, t.jsx)("div", {
                    className: "proj-content flex flex-wrap gap-3 pt-4 relative z-10",
                    children: e.tags.map((r, a) => (0, t.jsx)("span", {
                        className: "px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest bg-white/5 border backdrop-blur-sm transition-colors hover:bg-white/10",
                        style: {
                            color: e.accent,
                            borderColor: e.accent + "40"
                        },
                        children: r
                    }, a))
                })]
            }), (0, t.jsx)("div", {
                className: "lg:hidden w-full max-w-md mx-auto mt-16 proj-content",
                children: (0, t.jsx)(h, {
                    projectIndex: o
                })
            })]
        })
    };

    function b() {
        let e = (0, i.useRef)(null),
            s = (0, i.useRef)(null),
            n = (0, i.useRef)(null),
            l = (0, i.useRef)(null);
        return (0, r.useGSAP)(() => {
            a.default.to(s.current, {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                xPercent: -20
            }), a.default.to(n.current, {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                },
                xPercent: 20
            }), a.default.fromTo(l.current, {
                scaleY: 0
            }, {
                scaleY: 1,
                scrollTrigger: {
                    trigger: ".works-main-content",
                    start: "top 30%",
                    end: "bottom 80%",
                    scrub: .5
                },
                transformOrigin: "top",
                ease: "none"
            }), a.default.to(".mockup-container", {
                y: 20,
                duration: 2,
                repeat: -1,
                yoyo: !0,
                ease: "power1.inOut",
                stagger: {
                    each: .2,
                    from: "random"
                }
            }), a.default.from(".reveal-item", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: .1,
                ease: "power4.out"
            })
        }, {
            scope: e
        }), (0, t.jsxs)("main", {
            id: "work",
            ref: e,
            className: "dark bg-background text-foreground overflow-clip selection:bg-accent selection:text-primary",
            children: [(0, t.jsxs)("section", {
                className: "relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6",
                children: [(0, t.jsxs)("div", {
                    className: "absolute top-20 left-0 w-full pointer-events-none overflow-hidden opacity-[0.03] select-none z-0 whitespace-nowrap hidden md:block",
                    children: [(0, t.jsx)("div", {
                        ref: s,
                        className: "text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-primary",
                        children: "SELECTED"
                    }), (0, t.jsx)("div", {
                        ref: n,
                        className: "text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-transparent stroke-primary stroke-2 [-webkit-text-stroke:2px_var(--primary)] -mt-[4vw]",
                        children: "PROJECTS"
                    })]
                }), (0, t.jsx)("div", {
                    className: "absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
                }), (0, t.jsxs)("div", {
                    className: "max-w-7xl mx-auto relative z-10 text-center space-y-4 md:space-y-6",
                    children: [(0, t.jsx)("h2", {
                        className: "reveal-item text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-primary leading-[1] uppercase",
                        children: "Selected Work"
                    }), (0, t.jsxs)("p", {
                        className: "reveal-item text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed pt-2",
                        children: ["A collection of scalable digital products built to deliver ", (0, t.jsx)("span", {
                            className: "text-primary italic",
                            children: "performance"
                        }), ", ", (0, t.jsx)("span", {
                            className: "text-primary italic",
                            children: "growth"
                        }), " and real business impact."]
                    })]
                })]
            }), (0, t.jsx)("section", {
                className: "relative z-10 py-16 sm:py-24 md:py-32 lg:py-20 px-4 sm:px-6 md:px-12 bg-secondary rounded-t-[50px] sm:rounded-t-[65px] md:rounded-t-[80px] shadow-[0_-30px_60px_-12px_rgba(0,0,0,0.04)] sm:shadow-[0_-40px_80px_-16px_rgba(0,0,0,0.04)] md:shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.05)]",
                children: (0, t.jsx)("div", {
                    className: "max-w-7xl mx-auto works-main-content",
                    children: (0, t.jsxs)("div", {
                        className: "relative flex flex-col lg:flex-row items-start font-sans lg:pl-24",
                        children: [(0, t.jsx)("div", {
                            className: "hidden lg:block absolute left-4 top-0 bottom-0 w-[2px] z-30 pointer-events-none",
                            children: (0, t.jsxs)("div", {
                                className: "sticky top-[25%] h-[50vh] flex flex-col items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "absolute w-[1px] h-full bg-foreground/10 rounded-full"
                                }), (0, t.jsx)("div", {
                                    ref: l,
                                    className: "absolute w-[2px] h-full bg-primary origin-top shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)]"
                                }), (0, t.jsx)("div", {
                                    className: "relative h-full w-full flex flex-col justify-between py-1",
                                    children: g.map((e, r) => (0, t.jsx)("div", {
                                        id: `marker-${r}`,
                                        className: "relative z-40 w-2 h-2 rounded-full border border-foreground/30 bg-secondary transition-all duration-500 mx-auto group/marker",
                                        "aria-label": `Go to project ${r+1}: ${e.title}`,
                                        children: (0, t.jsxs)("span", {
                                            className: "absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-white shadow-2xl rounded text-[9px] font-black uppercase tracking-widest text-primary opacity-0 group-hover/marker:opacity-100 transition-all scale-75 group-hover/marker:scale-100 whitespace-nowrap pointer-events-none border border-black/5",
                                            children: [r + 1, " — ", e.title]
                                        })
                                    }, r))
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "w-full lg:w-[55%] flex flex-col relative z-20 md:pr-10 lg:pl-16",
                            children: g.map((e, r) => (0, t.jsx)(f, {
                                project: e,
                                index: r
                            }, e.title))
                        }), (0, t.jsx)("div", {
                            className: "hidden lg:flex lg:w-[45%] sticky top-0 h-[100vh] justify-center items-center pointer-events-none z-10",
                            children: g.map((e, r) => {
                                let a = g.findIndex(t => t.title === e.title);
                                return (0, t.jsxs)("div", {
                                    id: `mockup-${r}`,
                                    className: "absolute inset-0 w-full h-full flex justify-center items-center p-12 opacity-0 pl-16 xl:pl-24 scale-95 mockup-container",
                                    children: [(0, t.jsx)("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] blur-[160px] rounded-full opacity-30 transition-all duration-700",
                                        style: {
                                            backgroundColor: e.accent
                                        }
                                    }), (0, t.jsx)("div", {
                                        className: "w-full max-w-lg relative z-10 drop-shadow-[0_35px_50px_rgba(0,0,0,0.3)]",
                                        children: (0, t.jsx)(h, {
                                            projectIndex: a
                                        })
                                    })]
                                }, r)
                            })
                        })]
                    })
                })
            }), (0, t.jsxs)("section", {
                className: "bg-secondary text-secondary-foreground pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 border-t border-border",
                children: [(0, t.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 text-center",
                    children: [(0, t.jsx)("div", {
                        className: "relative overflow-hidden mb-8 sm:mb-12",
                        children: (0, t.jsx)("h2", {
                            className: "text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-black tracking-tighter text-primary leading-[0.8] reveal-line",
                            children: "CAPABILITIES"
                        })
                    }), (0, t.jsx)("p", {
                        className: "text-secondary-foreground/60 text-sm md:text-base font-bold tracking-widest uppercase mt-8 sm:mt-10 md:mt-12 max-w-xl mx-auto",
                        children: "Core strengths that help businesses build, scale and grow through technology and strategy."
                    })]
                }), (0, t.jsx)(p, {})]
            })]
        })
    }
    e.s(["default", () => b], 19011)
}, 65546, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let a = e.r(2945);

    function s({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new a.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 81435, (e, t, r) => {
    "use strict";

    function a(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return a
        }
    })
}, 3922, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let a = e.r(43987),
        s = e.r(33964),
        i = e.r(59952),
        n = e.r(81435),
        l = e.r(29584);

    function o({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = i.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let a = t.reactLoadableManifest;
            for (let t of e) {
                if (!a[t]) continue;
                let e = a[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let o = (0, l.getDeploymentIdQueryOrEmptyString)();
        return (0, a.jsx)(a.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,n.encodeURIPath)(e)}${o}`;
                return e.endsWith(".css") ? (0, a.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, s.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 59091, e => {
    "use strict";
    var t = e.i(43987),
        r = e.i(61835),
        a = e.i(18906),
        s = e.i(39486),
        i = e.i(76424);

    function n() {
        let e = (0, r.useRef)(null),
            n = (0, r.useRef)(null),
            l = (0, i.useLenis)(),
            o = (e, t) => {
                e.preventDefault();
                let r = document.querySelector(t);
                r && l ? .scrollTo(r, {
                    offset: 0
                })
            };
        return (0, r.useEffect)(() => {
            let e, t = n.current;
            if (!t) return;
            let r = t.getContext("2d");
            if (!r) return;
            let a = {
                    x: -1e3,
                    y: -1e3
                },
                s = [],
                i = 56,
                l = 2.6,
                o = 92,
                c = () => {
                    t.width = window.innerWidth, t.height = window.innerHeight;
                    let e = window.innerWidth < 768;
                    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        i = e ? 72 : 56, l = e ? 2 : 2.6, o = e ? 85 : 92, s = [];
                        for (let e = i / 2; e < t.width; e += i)
                            for (let r = i / 2; r < t.height; r += i) s.push({
                                x: e,
                                y: r,
                                originX: e,
                                originY: r
                            })
                    }
                },
                d = e => {
                    a.x = e.clientX, a.y = e.clientY
                },
                m = () => {
                    r.clearRect(0, 0, t.width, t.height), r.fillStyle = "rgba(58, 110, 165, 0.4)", r.strokeStyle = "rgba(58, 110, 165, 0.15)", r.lineWidth = 1, s.forEach((e, t) => {
                        let n = a.x - e.originX,
                            c = a.y - e.originY,
                            d = Math.sqrt(n * n + c * c);
                        if (d < 230) {
                            let t = Math.atan2(c, n),
                                r = (230 - d) / 230;
                            e.x = e.originX + Math.cos(t) * r * (.55 * i), e.y = e.originY + Math.sin(t) * r * (.55 * i)
                        } else e.x += (e.originX - e.x) * .09, e.y += (e.originY - e.y) * .09;
                        r.fillRect(e.x - l / 2, e.y - l / 2, l, l);
                        for (let a = t + 1; a < s.length; a++) {
                            let t = s[a],
                                i = e.x - t.x,
                                n = e.y - t.y,
                                l = Math.sqrt(i * i + n * n);
                            if (l < o) {
                                let a = (1 - l / o) * .2;
                                r.strokeStyle = `rgba(58, 110, 165, ${a})`, r.beginPath(), r.moveTo(e.x, e.y), r.lineTo(t.x, t.y), r.stroke()
                            }
                        }
                    }), e = requestAnimationFrame(m)
                };
            return c(), window.addEventListener("mousemove", d), window.addEventListener("resize", c), m(), () => {
                cancelAnimationFrame(e), window.removeEventListener("mousemove", d), window.removeEventListener("resize", c)
            }
        }, []), (0, t.jsxs)("section", {
            ref: e,
            className: "dark relative w-full min-h-[100dvh] overflow-hidden bg-background text-foreground",
            children: [(0, t.jsxs)("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,34,72,0.05),transparent_70%)]"
                }), (0, t.jsx)("canvas", {
                    ref: n,
                    className: "absolute inset-0 z-[1] opacity-100"
                })]
            }), (0, t.jsx)("div", {
                className: "relative z-10 flex min-h-[100dvh] w-full items-center",
                children: (0, t.jsx)("div", {
                    className: "w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-28 lg:pt-32 pb-10",
                    children: (0, t.jsxs)("div", {
                        className: "max-w-[580px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[740px] space-y-8",
                        children: [(0, t.jsxs)("div", {
                            className: "space-y-5",
                            children: [(0, t.jsxs)(a.motion.h1, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: .2,
                                    ease: "easeOut"
                                },
                                className: "text-[clamp(2.5rem,7.5vw,5.5rem)] font-serif font-light tracking-tight leading-[1.05] text-primary",
                                children: ["Turning Vision ", (0, t.jsx)("br", {}), "Into ", (0, t.jsx)("br", {}), "Scalable Reality"]
                            }), (0, t.jsxs)(a.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .8,
                                    delay: .4,
                                    ease: "easeOut"
                                },
                                className: "space-y-6",
                                children: [(0, t.jsxs)("p", {
                                    className: "max-w-2xl text-base md:text-lg lg:text-xl text-foreground/70 font-sans leading-relaxed",
                                    children: ["Hi, I’m ", (0, t.jsx)("span", {
                                        className: "text-primary font-bold",
                                        children: "Yashil Patel"
                                    }), " — CTO & CO-Founder of ", (0, t.jsx)("span", {
                                        className: "text-primary font-bold italic",
                                        children: "Alignsoul"
                                    }), ". I specialize in scalable system architecture, mobile and SaaS product development and data-driven digital marketing strategies that help businesses build, grow and scale."]
                                }), (0, t.jsx)("p", {
                                    className: "text-sm md:text-base text-foreground/50 font-medium tracking-wide",
                                    children: "Helping startups and businesses launch faster, optimize performance and scale efficiently with the right technology and strategy."
                                })]
                            })]
                        }), (0, t.jsxs)(a.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .6,
                                ease: "easeOut"
                            },
                            className: "flex flex-wrap gap-4 pt-2 items-center",
                            children: [(0, t.jsxs)("a", {
                                href: "#work",
                                onClick: e => o(e, "#work"),
                                className: "group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground shadow-[0_0_20px_rgba(0,34,72,0.6)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(76,137,182,0.8)] active:scale-95",
                                children: [(0, t.jsx)("div", {
                                    className: "absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]",
                                    children: (0, t.jsx)("div", {
                                        className: "relative h-full w-12 bg-white/20"
                                    })
                                }), (0, t.jsxs)("span", {
                                    className: "relative z-10 flex items-center gap-2",
                                    children: ["Explore Work", (0, t.jsx)("svg", {
                                        className: "w-3 h-3 transition-transform duration-500 group-hover:translate-x-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                        })
                                    })]
                                })]
                            }), (0, t.jsx)("a", {
                                href: "#contact",
                                onClick: e => o(e, "#contact"),
                                className: "group relative rounded-full border border-primary/20 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:scale-105 hover:bg-primary/5 hover:border-primary/50 active:scale-95",
                                children: (0, t.jsx)("span", {
                                    className: "relative z-10 flex items-center gap-2",
                                    children: "Schedule a Meeting"
                                })
                            })]
                        })]
                    })
                })
            }), (0, t.jsx)(a.motion.div, {
                className: "absolute right-0 bottom-0 z-20 pointer-events-none hidden sm:block will-change-transform",
                children: (0, t.jsx)("div", {
                    className: "relative w-[180px]  h-[295px] sm:w-[260px] sm:h-[421px] md:w-[350px] md:h-[563px] lg:w-[440px] lg:h-[705px] xl:w-[500px] xl:h-[800px] ",
                    children: (0, t.jsx)(s.default, {
                        src: "/images/memoji-2.webp",
                        alt: "Yashil Patel",
                        fill: !0,
                        className: "object-contain object-bottom",
                        priority: !0,
                        fetchPriority: "high"
                    })
                })
            })]
        })
    }
    e.s(["default", () => n])
}, 57580, e => {
    "use strict";
    var t = e.i(43987),
        r = e.i(31034),
        a = e.i(86785),
        s = e.i(10959),
        i = e.i(61835),
        n = e.i(98452);
    let l = (0, n.default)("arrow-right", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "m12 5 7 7-7 7",
                key: "xquz4c"
            }]
        ]),
        o = (0, n.default)("chevron-left", [
            ["path", {
                d: "m15 18-6-6 6-6",
                key: "1wnfg3"
            }]
        ]),
        c = (0, n.default)("chevron-right", [
            ["path", {
                d: "m9 18 6-6-6-6",
                key: "mthhwq"
            }]
        ]);
    var d = e.i(71189),
        m = e.i(18906),
        u = e.i(38844),
        p = e.i(76424);
    a.default.registerPlugin(s.ScrollTrigger);
    let x = [{
            title: "How Startups Break When They Start Growing",
            category: "System Architecture",
            date: "Mar 11, 2026",
            readTime: "6 min read",
            desc: "What nobody tells you about scaling systems. Growth is where most systems break.",
            image: "/images/A1.png",
            content: "Every startup dreams of growth. More users. More traffic. More revenue.\n\nBut here’s the truth — growth is where most systems break.\n\nI’ve seen apps crash not because they were bad, but because they were never built to handle success. At the beginning, everything works fine. A few users, small data, simple flows.\n\nThen suddenly:\n• APIs slow down\n• Database starts choking\n• Features become harder to add\n\nAnd the team starts fixing instead of building.\n\nThe real mistake? \n They built for now, not for what’s coming.\n\nScalable systems aren’t about expensive tech. They’re about thinking ahead:\n• Can this handle 10x users?\n• Can we add features without breaking things?\n• Can this system evolve?\n\nBecause in the end: \n If your system can’t grow, your business won’t."
        }, {
            title: "From Idea to Product: Where Most People Get Stuck",
            category: "SaaS",
            date: "Feb 18, 2026",
            readTime: "5 min read",
            desc: "It’s not about coding — it’s about clarity. Moving from idea to real product.",
            image: "/images/A2.png",
            content: "Everyone has ideas. A new app. A platform. A startup.\n\nBut very few turn those ideas into real products. Why? Because they jump straight into building. No clarity. No structure. No direction.\n\nThey think: \n“Let’s just start, we’ll figure it out later.”\n\nAnd later becomes:\n• Endless changes\n• Confused features\n• Wasted time & money\n\nThe truth is — building is the easiest part.\n\nThe hard part is:\n• Knowing what to build\n• What to ignore\n• What actually matters\n\nA strong product starts with:\n• Clear problem\n• Simple solution\n• Focused execution\n\nBecause: \n A good product is not built by doing more — but by doing the right things."
        }, {
            title: "Why Good Apps Still Fail",
            category: "Product",
            date: "Jan 30, 2026",
            readTime: "7 min read",
            desc: "Because performance is not just speed. Experience beats features every time.",
            image: "/images/A3.png",
            content: "I’ve seen beautifully designed apps fail. Good UI. Smooth animations. Great idea. Still… they don’t grow. Why? Because users don’t stay.\n\nAnd the reason is simple: \n Experience beats features.\n\nIf your app:\n• Takes time to load\n• Feels laggy\n• Confuses users\n\nThey leave. Instantly. No second chances.\n\nPerformance is not just about speed — it’s about how your product feels.\n• Does it respond instantly?\n• Is it smooth?\n• Is it intuitive?\n\nBecause users don’t care how hard you worked.\n They care how easy it feels."
        }, {
            title: "Technology Alone Doesn’t Grow a Business",
            category: "Growth",
            date: "Jan 12, 2026",
            readTime: "4 min read",
            desc: "The missing piece most founders ignore. Positioning and marketing matter.",
            image: "/images/A4.png",
            content: "Many founders believe: \n “If we build a great product, people will come.”\n\nBut reality is different. Great products fail every day. Not because they’re bad — but because nobody knows they exist.\n\nGrowth doesn’t come from tech alone. It comes from:\n• Positioning\n• Marketing\n• Distribution\n\nTechnology builds the product. Marketing builds the business. The magic happens when both work together.\n\nBecause: \n A great product without visibility is invisible."
        }, {
            title: "Why Every Business Needs a System, Not Just an App",
            category: "Automation",
            date: "Jan 05, 2026",
            readTime: "5 min read",
            desc: "The difference between chaos and growth. Systems as business engines.",
            image: "/images/A5.png",
            content: "Most businesses think they need an app. But what they actually need is a system. An app solves one problem. A system solves the whole flow.\n\nWithout systems:\n• Leads get lost\n• Tasks are manual\n• Growth becomes messy\n\nWith systems:\n• Everything is tracked\n• Everything is automated\n• Everything scales\n\nThis is where CRM and automation come in. Not as tools — but as business engines.\n\nBecause: \n Growth is not about working more — it’s about building systems that work for you."
        }],
        g = ({
            article: e,
            onClose: a
        }) => {
            let s = (0, i.useRef)(null),
                n = (0, p.useLenis)();
            return (0, r.useGSAP)(() => {
                n && n.stop(), document.body.style.overflow = "hidden";
                let e = e => {
                    "Escape" === e.key && a()
                };
                return window.addEventListener("keydown", e), () => {
                    n && n.start(), document.body.style.overflow = "unset", window.removeEventListener("keydown", e)
                }
            }, [n]), (0, t.jsx)(m.motion.div, {
                ref: s,
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    y: "100%",
                    opacity: 0
                },
                transition: {
                    duration: .8,
                    ease: [.16, 1, .3, 1]
                },
                "data-lenis-prevent": !0,
                className: "fixed inset-0 z-[200] bg-white text-black overflow-y-auto",
                children: (0, t.jsxs)("div", {
                    className: "relative w-full min-h-screen bg-white pb-24",
                    children: [(0, t.jsx)("button", {
                        onClick: a,
                        className: "fixed top-8 right-8 z-[210] group flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-primary transition-all duration-300 shadow-2xl",
                        children: (0, t.jsx)(d.X, {
                            size: 20,
                            className: "group-hover:rotate-90 transition-transform duration-500"
                        })
                    }), (0, t.jsxs)(m.motion.div, {
                        initial: {
                            scale: 1.1,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: .2
                        },
                        className: "w-full aspect-[21/9] md:aspect-[21/6] overflow-hidden relative",
                        children: [(0, t.jsx)("img", {
                            src: e.image,
                            alt: e.title,
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                        }), (0, t.jsx)("div", {
                            className: "absolute inset-0 bg-black/10"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-6 relative -mt-32 md:-mt-40 z-10",
                        children: [(0, t.jsxs)(m.motion.div, {
                            initial: {
                                y: 40,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: .8,
                                delay: .4
                            },
                            className: "detail-header bg-white p-8 md:p-16 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-black/5 mb-16",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-wrap items-center gap-4 mb-8",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)("div", {
                                        className: "w-1 h-3 bg-primary rounded-full"
                                    }), (0, t.jsx)("span", {
                                        className: "text-primary text-[10px] font-black tracking-[0.2em] uppercase",
                                        children: e.category
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: "text-[10px] text-black/20 font-black tracking-widest uppercase",
                                    children: "•"
                                }), (0, t.jsx)("span", {
                                    className: "text-[10px] text-black/20 font-black tracking-widest uppercase",
                                    children: e.date
                                })]
                            }), (0, t.jsx)("h2", {
                                className: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-black tracking-tight leading-[1] mb-10",
                                children: e.title
                            }), (0, t.jsx)("hr", {
                                className: "border-black/5 mb-10"
                            }), (0, t.jsx)("p", {
                                className: "text-2xl md:text-3xl text-black/80 font-medium leading-relaxed italic",
                                children: e.desc
                            })]
                        }), (0, t.jsxs)(m.motion.div, {
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: .8,
                                delay: .6
                            },
                            className: "max-w-5xl mx-auto w-full",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-4 mb-16",
                                children: [(0, t.jsx)("div", {
                                    className: "flex-1 h-px bg-black/10"
                                }), (0, t.jsx)("span", {
                                    className: "text-[10px] font-black text-black/30 uppercase tracking-[0.4em]",
                                    children: e.readTime
                                }), (0, t.jsx)("div", {
                                    className: "flex-1 h-px bg-black/10"
                                })]
                            }), (0, t.jsx)("div", {
                                className: "detail-content text-xl md:text-2xl text-black/70 leading-relaxed font-serif space-y-10 whitespace-pre-line mb-24",
                                children: e.content
                            }), (0, t.jsx)("hr", {
                                className: "border-black/5 mb-16"
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col items-center text-center gap-8 pt-8",
                                children: [(0, t.jsx)("p", {
                                    className: "text-[11px] font-black uppercase tracking-[0.4em] text-black/20",
                                    children: "End of Article"
                                }), (0, t.jsxs)("button", {
                                    onClick: a,
                                    className: "group flex items-center gap-4 text-primary hover:text-black transition-colors",
                                    children: [(0, t.jsx)("div", {
                                        className: "w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg",
                                        children: (0, t.jsx)(l, {
                                            className: "rotate-[135deg]",
                                            size: 24
                                        })
                                    }), (0, t.jsx)("span", {
                                        className: "text-sm font-black uppercase tracking-widest",
                                        children: "Back to Insights"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            })
        },
        h = ({
            article: e,
            onClick: r
        }) => (0, t.jsxs)("div", {
            onClick: r,
            className: "group flex flex-col w-[85vw] sm:w-[380px] lg:w-[calc((100%-72px)/4)] shrink-0 bg-white cursor-pointer snap-start rounded-[20px] overflow-hidden select-none border border-black/5 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            }), (0, t.jsx)("div", {
                className: "w-full h-[180px] md:h-[200px] overflow-hidden relative bg-accent/10",
                children: (0, t.jsx)("img", {
                    src: e.image,
                    alt: e.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out",
                    loading: "lazy",
                    onError: t => {
                        let r = t.currentTarget;
                        r.style.display = "none";
                        let a = r.parentElement;
                        if (a && !a.querySelector(".img-fallback")) {
                            let t = document.createElement("div");
                            t.className = "img-fallback absolute inset-0 flex items-center justify-center", t.innerHTML = `<span style="font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:#fff">${e.category}</span>`, a.appendChild(t)
                        }
                    }
                })
            }), (0, t.jsxs)("div", {
                className: "flex flex-col flex-1 p-7 relative",
                children: [(0, t.jsx)("div", {
                    className: "flex items-center justify-between mb-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center gap-2.5",
                        children: [(0, t.jsx)("div", {
                            className: "w-[8px] h-[16px] bg-primary rounded-r-full"
                        }), (0, t.jsx)("span", {
                            className: "text-primary text-[10px] font-black tracking-[0.15em] uppercase",
                            children: e.category
                        })]
                    })
                }), (0, t.jsx)("h3", {
                    className: "text-xl md:text-2xl font-black tracking-tighter text-foreground leading-[1.1] mb-5 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[2.2em]",
                    children: e.title
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-3 text-[9px] font-black tracking-[0.2em] text-foreground/40 uppercase mb-5",
                    children: [(0, t.jsx)("span", {
                        children: e.date
                    }), (0, t.jsx)("span", {
                        className: "w-1 h-1 rounded-full bg-foreground/20"
                    }), (0, t.jsx)("span", {
                        children: e.readTime
                    })]
                }), (0, t.jsx)("p", {
                    className: "text-xs text-foreground/75 leading-relaxed font-medium line-clamp-2 mb-7 lowercase group-hover:text-foreground transition-colors",
                    children: e.desc
                }), (0, t.jsxs)("div", {
                    className: "mt-auto flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-primary",
                    children: [(0, t.jsx)("div", {
                        className: "w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300",
                        children: (0, t.jsx)(l, {
                            size: 13,
                            className: "-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                        })
                    }), (0, t.jsx)("span", {
                        children: "Read Full Article"
                    })]
                })]
            })]
        });

    function f() {
        let e = (0, i.useRef)(null),
            s = (0, i.useRef)(null),
            n = (0, i.useRef)(null),
            l = (0, i.useRef)(null),
            [d, m] = (0, i.useState)(null),
            [p, f] = (0, i.useState)(!1),
            [b, y] = (0, i.useState)(0),
            [v, w] = (0, i.useState)(0);
        return (0, r.useGSAP)(() => {
            a.default.to(s.current, {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                xPercent: -20
            }), a.default.to(n.current, {
                scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                },
                xPercent: 20
            }), a.default.utils.toArray(".reveal-line").forEach(e => {
                a.default.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        start: "top 90%"
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power4.out"
                })
            })
        }, {
            scope: e
        }), (0, t.jsxs)("section", {
            id: "articles",
            ref: e,
            className: `relative py-24 md:py-32 bg-[#f5f1e1] text-foreground overflow-hidden selection:bg-primary selection:text-white ${d?"h-screen":""}`,
            children: [(0, t.jsxs)("div", {
                className: "absolute top-20 left-0 w-full pointer-events-none overflow-hidden opacity-[0.03] select-none z-0 whitespace-nowrap hidden md:block",
                children: [(0, t.jsx)("div", {
                    ref: s,
                    className: "text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-primary",
                    children: "ARTICLES"
                }), (0, t.jsx)("div", {
                    ref: n,
                    className: "text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-transparent stroke-primary stroke-2 [-webkit-text-stroke:2px_var(--primary)] -mt-[4vw]",
                    children: "INSIGHTS"
                })]
            }), (0, t.jsxs)("div", {
                className: "w-full relative z-10 border-t border-black/5 mt-10",
                children: [(0, t.jsxs)("div", {
                    className: "max-w-[95%] mx-auto px-4 md:px-10 w-full relative pt-20",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-12 overflow-hidden",
                        children: [(0, t.jsx)("h2", {
                            className: "reveal-line text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] text-[#002248] uppercase mb-12",
                            children: "ARTICLES"
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col md:flex-row md:items-end justify-between gap-8",
                            children: [(0, t.jsx)("p", {
                                className: "reveal-line text-lg sm:text-xl md:text-2xl text-[#002248]/80 max-w-2xl font-bold leading-tight lowercase",
                                children: "Explore our latest research, insights and case studies."
                            }), (0, t.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, t.jsxs)("button", {
                                    onClick: () => {
                                        l.current && l.current.scrollBy({
                                            left: -l.current.offsetWidth / 2,
                                            behavior: "smooth"
                                        })
                                    },
                                    className: "group/nav relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 active:scale-90 overflow-hidden",
                                    "aria-label": "Scroll articles left",
                                    children: [(0, t.jsx)("div", {
                                        className: "absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 group-hover/nav:from-[#002248] group-hover/nav:via-[#4C89B6] group-hover/nav:to-[#002248] transition-all duration-500",
                                        children: (0, t.jsx)("div", {
                                            className: "w-full h-full rounded-full bg-white group-hover/nav:bg-[#F0F4FF] transition-colors duration-500"
                                        })
                                    }), (0, t.jsx)(o, {
                                        size: 20,
                                        className: "relative z-10 text-gray-400 group-hover/nav:text-[#002248] transition-colors duration-300"
                                    })]
                                }), (0, t.jsxs)("button", {
                                    onClick: () => {
                                        l.current && l.current.scrollBy({
                                            left: l.current.offsetWidth / 2,
                                            behavior: "smooth"
                                        })
                                    },
                                    className: "group/nav relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 active:scale-90 overflow-hidden",
                                    "aria-label": "Scroll articles right",
                                    children: [(0, t.jsx)("div", {
                                        className: "absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-br from-[#002248] via-[#4C89B6] to-[#002248] transition-all duration-500",
                                        children: (0, t.jsx)("div", {
                                            className: "w-full h-full rounded-full bg-[#002248] group-hover/nav:bg-[#002248]/90 transition-colors duration-500"
                                        })
                                    }), (0, t.jsx)(c, {
                                        size: 20,
                                        className: "relative z-10 text-white transition-colors duration-300"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "w-full h-px bg-black/10 mb-16"
                    }), (0, t.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: `
                    .custom-scrollbar::-webkit-scrollbar {
                        display: none;
                        }
                    `
                        }
                    }), (0, t.jsx)("div", {
                        ref: l,
                        onMouseDown: e => {
                            l.current && (f(!0), y(e.pageX - l.current.offsetLeft), w(l.current.scrollLeft))
                        },
                        onMouseLeave: () => {
                            f(!1)
                        },
                        onMouseUp: () => {
                            f(!1)
                        },
                        onMouseMove: e => {
                            if (!p || !l.current) return;
                            e.preventDefault();
                            let t = e.pageX - l.current.offsetLeft;
                            l.current.scrollLeft = v - (t - b) * 2
                        },
                        className: `flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 pt-4 ${p?"cursor-grabbing snap-none":"cursor-grab"} custom-scrollbar scroll-smooth`,
                        style: {
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        },
                        children: x.map((e, r) => (0, t.jsx)(h, {
                            article: e,
                            onClick: () => m(e)
                        }, r))
                    })]
                }), " "]
            }), (0, t.jsx)(u.AnimatePresence, {
                children: d && (0, t.jsx)(g, {
                    article: d,
                    onClose: () => m(null)
                })
            })]
        })
    }
    e.s(["default", () => f], 57580)
}]);