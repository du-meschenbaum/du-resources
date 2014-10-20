/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ;
! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = a.document,
        n = "2.1.0",
        o = function(a, b) {
            return new o.fn.init(a, b)
        },
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    o.fn = o.prototype = {
        jquery: n,
        constructor: o,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = o.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return o.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(o.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, o.extend = o.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) {
                for (b in a) {
                    c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d))
                }
            }
        }
        return g
    }, o.extend({
        expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === o.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : k.call(a)
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d]
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || o.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = o.type(a);
        return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0
            },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++) {
                    if (this[b] === a) {
                        return b
                    }
                }
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) {
                return d
            }
            if (1 !== (i = b.nodeType) && 9 !== i) {
                return []
            }
            if (n && !e) {
                if (f = Z.exec(a)) {
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) {
                                return d
                            }
                            if (g.id === h) {
                                return d.push(g), d
                            }
                        } else {
                            if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) {
                                return d.push(g), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return G.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return G.apply(d, b.getElementsByClassName(h)), d
                        }
                    }
                }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) {
                            m[j] = q + pb(m[j])
                        }
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) {
                        try {
                            return G.apply(d, u.querySelectorAll(v)), d
                        } catch (w) {} finally {
                            p || b.removeAttribute("id")
                        }
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, z = b ? function(a, b) {
                if (a === b) {
                    return j = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return j = !0, 0
                }
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) {
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0
                }
                if (f === g) {
                    return ib(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    k.unshift(c)
                }
                while (h[d] === k[d]) {
                    d++
                }
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) {
                try {
                    var d = q.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) {
                                    m = j[1]
                                } else {
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            d.pseudos[b] = jb(b)
        }
        for (b in {
            submit: !0,
            reset: !0
        }) {
            d.pseudos[b] = kb(b)
        }

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
                }
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                return a === b
            }, i, !0), l = qb(function(a) {
                return I.call(b, a) > -1
            }, i, !0), m = [
                function(a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }
            ]; f > j; j++) {
                if (c = d.relative[a[j].type]) {
                    m = [qb(rb(m), c)]
                } else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || 0.1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++]) {
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) {
                            o(r, s, g, i)
                        }
                        if (f) {
                            if (p > 0) {
                                while (q--) {
                                    r[q] || s[q] || (s[q] = E.call(j))
                                }
                            }
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) {
                    f = ub(b[c]), f[s] ? d.push(f) : e.push(f)
                }
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                db(a, b[d], c)
            }
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) {
                        return e
                    }
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) {
                        break
                    }
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) {
                            return G.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains;
    var u = o.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (o.isFunction(b)) {
            return o.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return o.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (w.test(b)) {
                return o.filter(b, a, c)
            }
            b = o.filter(b, a)
        }
        return o.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    o.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, o.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) {
                return this.pushStack(o(a).filter(function() {
                    for (b = 0; c > b; b++) {
                        if (o.contains(e[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; c > b; b++) {
                o.find(a, e[b], d)
            }
            return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = o.fn.init = function(a, b) {
            var c, d;
            if (!a) {
                return this
            }
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a)
                }
                if (c[1]) {
                    if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b)) {
                        for (c in b) {
                            o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                        }
                    }
                    return this
                }
                return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(o) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this))
        };
    A.prototype = o.fn, y = o(m);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    o.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && o(a).is(c)) {
                        break
                    }
                    d.push(a)
                }
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), o.fn.extend({
        has: function(a) {
            var b = o(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) {
                    if (o.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? o(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? o.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(o.unique(o.merge(this.get(), o(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}
        return a
    }
    o.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return o.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return o.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return o.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return o.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return o.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return o.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return o.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return o.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || o.merge([], a.childNodes)
        }
    }, function(a, b) {
        o.fn[a] = function(c, d) {
            var e = o.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return o.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    o.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            o.each(b, function(b, c) {
                                var d = o.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && o.each(arguments, function(a, b) {
                        var c;
                        while ((c = o.inArray(b, h, c)) > -1) {
                            h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                        }
                    }), this
                },
                has: function(a) {
                    return a ? o.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, o.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", o.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", o.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", o.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return o.Deferred(function(c) {
                            o.each(b, function(b, f) {
                                var g = o.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? o.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, o.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && o.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : o.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    o.fn.ready = function(a) {
        return o.ready.promise().done(a), this
    }, o.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? o.readyWait++ : o.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready")))
        }
    });

    function I() {
        m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready()
    }
    o.ready.promise = function(b) {
        return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, o.ready.promise();
    var J = o.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === o.type(c)) {
            e = !0;
            for (h in c) {
                o.access(a, b, h, c[h], !0, f, g)
            }
        } else {
            if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(o(a), c)
            })), b)) {
                for (; i > h; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                }
            }
        }
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    o.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = o.expando + Math.random()
    }
    K.uid = 1, K.accepts = o.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) {
                return 0
            }
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, o.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) {
                f[b] = c
            } else {
                if (o.isEmptyObject(f)) {
                    o.extend(this.cache[e], b)
                } else {
                    for (d in b) {
                        f[d] = b[d]
                    }
                }
            }
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) {
                this.cache[f] = {}
            } else {
                o.isArray(b) ? d = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) {
                    delete g[d[c]]
                }
            }
        },
        hasData: function(a) {
            return !o.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) {
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? o.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }
    o.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), o.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) {
                        d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), P(f, d, e[d]))
                    }
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = o.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) {
                        return c
                    }
                    if (c = M.get(f, d), void 0 !== c) {
                        return c
                    }
                    if (c = P(f, d, void 0), void 0 !== c) {
                        return c
                    }
                } else {
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
                }
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), o.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || o.isArray(c) ? d = L.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = o.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = o._queueHooks(a, b),
                g = function() {
                    o.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: o.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), o.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = o.queue(this, a, b);
                o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                o.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = o.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = m.createDocumentFragment(),
            b = a.appendChild(m.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    l.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return m.activeElement
        } catch (a) {}
    }
    o.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof o !== U && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({
                        type: n,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && o.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0)
                }
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    if (h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) {
                        l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) {
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k))
                        }
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n])
                    } else {
                        for (n in i) {
                            o.event.remove(a, n + b[j], c, d, !0)
                        }
                    }
                }
                o.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, p = [d || m],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || m, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + o.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, e || !n.trigger || n.trigger.apply(d, c) !== !1)) {
                if (!e && !n.noBubble && !o.isWindow(d)) {
                    for (i = n.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
                        p.push(g), h = g
                    }
                    h === (d.ownerDocument || m) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) {
                    b.type = f > 1 ? i : n.bindType || q, l = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), l && l.apply(g, c), l = k && g[k], l && l.apply && o.acceptData(g) && (b.result = l.apply(g, c), b.result === !1 && b.preventDefault())
                }
                return b.type = q, e || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !o.acceptData(d) || k && o.isFunction(d[q]) && !o.isWindow(d) && (h = d[k], h && (d[k] = null), o.event.triggered = q, d[q](), o.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = o.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = o.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = o.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i !== this; i = i.parentNode || this) {
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) {
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) >= 0 : o.find(e, this, null, [i]).length), d[e] && d.push(f)
                        }
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || m, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[o.expando]) {
                return a
            }
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = m), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return o.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = o.extend(new o.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? o.event.trigger(e, null, b) : o.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, o.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, o.Event = function(a, b) {
        return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? Z : $) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void(this[o.expando] = !0)) : new o.Event(a, b)
    }, o.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Z, this.stopPropagation()
        }
    }, o.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        o.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.focusinBubbles || o.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            o.event.simulate(b, a.target, o.event.fix(a), !0)
        };
        o.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), o.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) {
                    this.on(g, b, c, a[g], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                d = $
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (f = d, d = function(a) {
                return o().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = o.guid++)), this.each(function() {
                o.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                o.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                o.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? o.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

    function jb(a, b) {
        return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
        }
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        o.event.add(b, e, j[e][c])
                    }
                }
            }
            M.hasData(a) && (h = M.access(a), i = o.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    o.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = o.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a))) {
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) {
                    pb(f[d], g[d])
                }
            }
            if (b) {
                if (c) {
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) {
                        nb(f[d], g[d])
                    }
                } else {
                    nb(a, h)
                }
            }
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) {
                if (e = a[m], e || 0 === e) {
                    if ("object" === o.type(e)) {
                        o.merge(l, e.nodeType ? [e] : e)
                    } else {
                        if (cb.test(e)) {
                            f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                            while (j--) {
                                f = f.lastChild
                            }
                            o.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                        } else {
                            l.push(b.createTextNode(e))
                        }
                    }
                }
            }
            k.textContent = "", m = 0;
            while (e = l[m++]) {
                if ((!d || -1 === o.inArray(e, d)) && (i = o.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++]) {
                        fb.test(e.type || "") && c.push(e)
                    }
                }
            }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f, g, h = o.event.special, i = 0; void 0 !== (c = a[i]); i++) {
                if (o.acceptData(c) && (f = c[L.expando], f && (b = L.cache[f]))) {
                    if (d = Object.keys(b.events || {}), d.length) {
                        for (g = 0; void 0 !== (e = d[g]); g++) {
                            h[e] ? o.event.remove(c, e) : o.removeEvent(c, e, b.handle)
                        }
                    }
                    L.cache[f] && delete L.cache[f]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), o.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? o.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? o.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || o.cleanData(ob(c)), c.parentNode && (b && o.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (o.cleanData(ob(a, !1)), a.textContent = "")
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return o.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) {
                    return b.innerHTML
                }
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ob(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, o.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                n = k - 1,
                p = a[0],
                q = o.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && eb.test(p)) {
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (k && (c = o.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = o.map(ob(c, "script"), kb), g = f.length; k > j; j++) {
                    h = c, j !== n && (h = o.clone(h, !0, !0), g && o.merge(f, ob(h, "script"))), b.call(this[j], h, j)
                }
                if (g) {
                    for (i = f[f.length - 1].ownerDocument, o.map(f, lb), j = 0; g > j; j++) {
                        h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && o.contains(i, h) && (h.src ? o._evalUrl && o._evalUrl(h.src) : o.globalEval(h.textContent.replace(hb, "")))
                    }
                }
            }
            return this
        }
    }), o.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        o.fn[a] = function(a) {
            for (var c, d = [], e = o(a), g = e.length - 1, h = 0; g >= h; h++) {
                c = h === g ? this : this.clone(!0), o(e[h])[b](c), f.apply(d, c.get())
            }
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d = o(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : o.css(d[0], "display");
        return d.detach(), e
    }

    function tb(a) {
        var b = m,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            e = m.documentElement,
            f = m.createElement("div"),
            g = m.createElement("div");
        g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(g);

        function h() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.appendChild(f);
            var d = a.getComputedStyle(g, null);
            b = "1%" !== d.top, c = "4px" === d.width, e.removeChild(f)
        }
        a.getComputedStyle && o.extend(l, {
            pixelPosition: function() {
                return h(), b
            },
            boxSizingReliable: function() {
                return null == c && h(), c
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(m.createElement("div"));
                return c.style.cssText = g.style.cssText = d, c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.innerHTML = "", b
            }
        })
    }(), o.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Db = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a) {
            return b
        }
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Eb.length;
        while (e--) {
            if (b = Eb[e] + c, b in a) {
                return b
            }
        }
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += o.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e))) : (g += o.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += o.css(a, "border" + R[f] + "Width", !0, e)))
        }
        return g
    }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === o.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) {
                return e
            }
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : f[g] || (e = S(d), (c && "none" !== c || !e) && L.set(d, "olddisplay", e ? c : o.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }
    o.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = o.camelCase(b),
                    i = a.style;
                return b = o.cssProps[h] || (o.cssProps[h] = Fb(i, h)), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(o.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || o.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = o.camelCase(b);
            return b = o.cssProps[h] || (o.cssProps[h] = Fb(a.style, h)), g = o.cssHooks[b] || o.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || o.isNumeric(f) ? f || 0 : e) : e
        }
    }), o.each(["height", "width"], function(a, b) {
        o.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && zb.test(o.css(a, "display")) ? o.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === o.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), o.cssHooks.marginRight = yb(l.reliableMarginRight, function(a, b) {
        return b ? o.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), o.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        o.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, ub.test(a) || (o.cssHooks[a + b].set = Gb)
    }), o.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (o.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) {
                        f[b[g]] = o.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? o.style(a, b, c) : o.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? o(this).show() : o(this).hide()
            })
        }
    });

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    o.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (o.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? o.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = o.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                o.fx.step[a.prop] ? o.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop]) ? o.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, o.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, o.fx = Kb.prototype.init, o.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = Ob.exec(b),
                        f = e && e[3] || (o.cssNumber[a] ? "" : "px"),
                        g = (o.cssNumber[a] || "px" !== f && +d) && Ob.exec(o.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do {
                            h = h || ".5", g /= h, o.style(c.elem, a, g + f)
                        } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };

    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = o.now()
    }

    function Tb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = R[d], e["margin" + c] = e["padding" + c] = a
        }
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && S(a),
            p = L.get(a, "fxshow");
        c.queue || (h = o._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, k.always(function() {
            k.always(function() {
                h.unqueued--, o.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = o.css(a, "display"), "none" === j && (j = tb(a.nodeName)), "inline" === j && "none" === o.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) {
                        continue
                    }
                    n = !0
                }
                l[d] = p && p[d] || o.style(a, d)
            }
        }
        if (!o.isEmptyObject(l)) {
            p ? "hidden" in p && (n = p.hidden) : p = L.access(a, "fxshow", {}), f && (p.hidden = !n), n ? o(a).show() : k.done(function() {
                o(a).hide()
            }), k.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in l) {
                    o.style(a, b, l[b])
                }
            });
            for (d in l) {
                g = Ub(n ? p[d] : 0, d, k), d in p || (p[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = o.camelCase(c), e = b[d], f = a[c], o.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = o.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = o.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: o.extend({}, b),
                opts: o.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = o.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++) {
            if (d = Qb[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return o.map(k, Ub, j), o.isFunction(j.opts.start) && j.opts.start.call(a, j), o.fx.timer(o.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    o.Animation = o.extend(Xb, {
        tweener: function(a, b) {
            o.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
            }
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), o.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? o.extend({}, a) : {
            complete: c || !c && b || o.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !o.isFunction(b) && b
        };
        return d.duration = o.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in o.fx.speeds ? o.fx.speeds[d.duration] : o.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            o.isFunction(d.old) && d.old.call(this), d.queue && o.dequeue(this, d.queue)
        }, d
    }, o.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = o.isEmptyObject(a),
                f = o.speed(b, c, d),
                g = function() {
                    var b = Xb(this, o.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = o.timers,
                    g = L.get(this);
                if (e) {
                    g[e] && g[e].stop && d(g[e])
                } else {
                    for (e in g) {
                        g[e] && g[e].stop && Pb.test(e) && d(g[e])
                    }
                }
                for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                }(b || !c) && o.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = o.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, o.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                }
                for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this)
                }
                delete c.finish
            })
        }
    }), o.each(["toggle", "show", "hide"], function(a, b) {
        var c = o.fn[b];
        o.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), o.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        o.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), o.timers = [], o.fx.tick = function() {
        var a, b = 0,
            c = o.timers;
        for (Lb = o.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1)
        }
        c.length || o.fx.stop(), Lb = void 0
    }, o.fx.timer = function(a) {
        o.timers.push(a), a() ? o.fx.start() : o.timers.pop()
    }, o.fx.interval = 13, o.fx.start = function() {
        Mb || (Mb = setInterval(o.fx.tick, o.fx.interval))
    }, o.fx.stop = function() {
        clearInterval(Mb), Mb = null
    }, o.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, o.fn.delay = function(a, b) {
        return a = o.fx ? o.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
        function() {
            var a = m.createElement("input"),
                b = m.createElement("select"),
                c = b.appendChild(m.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = m.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = o.expr.attrHandle;
    o.fn.extend({
        attr: function(a, b) {
            return J(this, o.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                o.removeAttr(this, a)
            })
        }
    }), o.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === U ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.toLowerCase(), d = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = o.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void o.removeAttr(a, b))
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = o.propFix[c] || c, o.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, o.each(o.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || o.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    o.fn.extend({
        prop: function(a, b) {
            return J(this, o.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[o.propFix[a] || a]
            })
        }
    }), o.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g || !o.isXMLDoc(a), f && (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), l.optSelected || (o.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        o.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    o.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (o.isFunction(a)) {
                return this.each(function(b) {
                    o(this).addClass(a.call(this, b, this.className))
                })
            }
            if (h) {
                for (b = (a || "").match(E) || []; j > i; i++) {
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = o.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (o.isFunction(a)) {
                return this.each(function(b) {
                    o(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (h) {
                for (b = (a || "").match(E) || []; j > i; i++) {
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? o.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(o.isFunction(a) ? function(c) {
                o(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = o(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                }
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    });
    var bc = /\r/g;
    o.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = o.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), o.extend({
        valHooks: {
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && o.nodeName(c.parentNode, "optgroup"))) {
                            if (b = o(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = o.makeArray(b),
                        g = e.length;
                    while (g--) {
                        d = e[g], (d.selected = o.inArray(o(d).val(), f) >= 0) && (c = !0)
                    }
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), o.each(["radio", "checkbox"], function() {
        o.valHooks[this] = {
            set: function(a, b) {
                return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (o.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        o.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), o.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = o.now(),
        dc = /\?/;
    o.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, o.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) {
            return null
        }
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = m.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];

    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (o.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function sc(a, b, c, d) {
        var e = {},
            f = a === oc;

        function g(h) {
            var i;
            return e[h] = !0, o.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) {
        var c, d, e = o.ajaxSettings.flatOptions || {};
        for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
        }
        return d && o.extend(!0, a, d), a
    }

    function uc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (d) {
            for (e in h) {
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    o.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": o.parseJSON,
                "text xml": o.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = o.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? o(l) : o.event,
                n = o.Deferred(),
                p = o.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = ic.exec(e)) {
                                    f[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > t) {
                                for (b in a) {
                                    q[b] = [q[b], a[b]]
                                }
                            } else {
                                v.always(a[v.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (n.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = o.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = o.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) {
                return v
            }
            i = k.global, i && 0 === o.active++ && o.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (o.lastModified[d] && v.setRequestHeader("If-Modified-Since", o.lastModified[d]), o.etag[d] && v.setRequestHeader("If-None-Match", o.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) {
                v.setRequestHeader(j, k.headers[j])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[j](k[j])
            }
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x(-1, w)
                }
            } else {
                x(-1, "No Transport")
            }

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (o.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (o.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? n.resolveWith(l, [r, x, v]) : n.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --o.active || o.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return o.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return o.get(a, void 0, b, "script")
        }
    }), o.each(["get", "post"], function(a, b) {
        o[b] = function(a, c, d, e) {
            return o.isFunction(c) && (e = e || d, d = c, c = void 0), o.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        o.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), o._evalUrl = function(a) {
        return o.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, o.fn.extend({
        wrapAll: function(a) {
            var b;
            return o.isFunction(a) ? this.each(function(b) {
                o(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) {
                    a = a.firstElementChild
                }
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(o.isFunction(a) ? function(b) {
                o(this).wrapInner(a.call(this, b))
            } : function() {
                var b = o(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = o.isFunction(a);
            return this.each(function(c) {
                o(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                o.nodeName(this, "body") || o(this).replaceWith(this.childNodes)
            }).end()
        }
    }), o.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, o.expr.filters.visible = function(a) {
        return !o.expr.filters.hidden(a)
    };
    var wc = /%20/g,
        xc = /\[\]$/,
        yc = /\r?\n/g,
        zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;

    function Bc(a, b, c, d) {
        var e;
        if (o.isArray(b)) {
            o.each(b, function(b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== o.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Bc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    o.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a)) {
            o.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Bc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(wc, "+")
    }, o.fn.extend({
        serialize: function() {
            return o.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = o.prop(this, "elements");
                return a ? o.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = o(this).val();
                return null == c ? null : o.isArray(c) ? o.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                }
            }).get()
        }
    }), o.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cc = 0,
        Dc = {},
        Ec = {
            0: 200,
            1223: 204
        },
        Fc = o.ajaxSettings.xhr();
    a.ActiveXObject && o(a).on("unload", function() {
        for (var a in Dc) {
            Dc[a]()
        }
    }), l.cors = !!Fc && "withCredentials" in Fc, l.ajax = Fc = !!Fc, o.ajaxTransport(function(a) {
        var b;
        return l.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                    for (e in a.xhrFields) {
                        f[e] = a.xhrFields[e]
                    }
                }
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) {
                    f.setRequestHeader(e, c[e])
                }
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort"), f.send(a.hasContent && a.data || null)
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), o.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return o.globalEval(a), a
            }
        }
    }), o.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), o.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = o("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), m.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || o.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), o.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = o.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || o.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && o.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), o.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || m;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = o.buildFragment([a], b, e), e && e.length && o(e).remove(), o.merge([], d.childNodes))
    };
    var Ic = o.fn.load;
    o.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic) {
            return Ic.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), o.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && o.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? o("<div>").append(o.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, o.expr.filters.animated = function(a) {
        return o.grep(o.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;

    function Kc(a) {
        return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    o.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = o.css(a, "position"),
                l = o(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, o.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    o.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) {
                return b = f.documentElement, o.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0), d.left += o.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - o.css(c, "marginTop", !0),
                    left: b.left - d.left - o.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Jc;
                while (a && !o.nodeName(a, "html") && "static" === o.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || Jc
            })
        }
    }), o.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        o.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), o.each(["top", "left"], function(a, b) {
        o.cssHooks[b] = yb(l.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? o(a).position()[b] + "px" : c) : void 0
        })
    }), o.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        o.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            o.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return o.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? o.css(b, c, g) : o.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), o.fn.size = function() {
        return this.length
    }, o.fn.andSelf = o.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return o
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return o.noConflict = function(b) {
        return a.$ === o && (a.$ = Mc), b && a.jQuery === o && (a.jQuery = Lc), o
    }, typeof b === U && (a.jQuery = a.$ = o), o
});
var swfobject = function() {
    var aq = "undefined",
        aD = "object",
        ab = "Shockwave Flash",
        X = "ShockwaveFlash.ShockwaveFlash",
        aE = "application/x-shockwave-flash",
        ac = "SWFObjectExprInst",
        ax = "onreadystatechange",
        af = window,
        aL = document,
        aB = navigator,
        aa = false,
        Z = [aN],
        aG = [],
        ag = [],
        al = [],
        aJ, ad, ap, at, ak = false,
        aU = false,
        aH, an, aI = true,
        ah = function() {
            var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq,
                e = aB.userAgent.toLowerCase(),
                c = aB.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(e),
                j = c ? /mac/.test(c) : /mac/.test(e),
                g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                d = !+"\v1",
                f = [0, 0, 0],
                k = null;
            if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
                k = aB.plugins[ab].description;
                if (k && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                    aa = true;
                    d = false;
                    k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
                    f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof af.ActiveXObject != aq) {
                    try {
                        var i = new ActiveXObject(X);
                        if (i) {
                            k = i.GetVariable("$version");
                            if (k) {
                                d = true;
                                k = k.split(" ")[1].split(",");
                                f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)]
                            }
                        }
                    } catch (b) {}
                }
            }
            return {
                w3: a,
                pv: f,
                wk: g,
                ie: d,
                win: h,
                mac: j
            }
        }(),
        aK = function() {
            if (!ah.w3) {
                return
            }
            if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
                aP()
            }
            if (!ak) {
                if (typeof aL.addEventListener != aq) {
                    aL.addEventListener("DOMContentLoaded", aP, false)
                }
                if (ah.ie && ah.win) {
                    aL.attachEvent(ax, function() {
                        if (aL.readyState == "complete") {
                            aL.detachEvent(ax, arguments.callee);
                            aP()
                        }
                    });
                    if (af == top) {
                        (function() {
                            if (ak) {
                                return
                            }
                            try {
                                aL.documentElement.doScroll("left")
                            } catch (a) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            aP()
                        })()
                    }
                }
                if (ah.wk) {
                    (function() {
                        if (ak) {
                            return
                        }
                        if (!/loaded|complete/.test(aL.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        aP()
                    })()
                }
                aC(aP)
            }
        }();

    function aP() {
        if (ak) {
            return
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b)
        } catch (a) {
            return
        }
        ak = true;
        var d = Z.length;
        for (var c = 0; c < d; c++) {
            Z[c]()
        }
    }

    function aj(a) {
        if (ak) {
            a()
        } else {
            Z[Z.length] = a
        }
    }

    function aC(a) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", a, false)
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", a, false)
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", a)
                } else {
                    if (typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function() {
                            b();
                            a()
                        }
                    } else {
                        af.onload = a
                    }
                }
            }
        }
    }

    function aN() {
        if (aa) {
            Y()
        } else {
            am()
        }
    }

    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type", aE);
        var a = d.appendChild(b);
        if (a) {
            var c = 0;
            (function() {
                if (typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if (e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]
                    }
                } else {
                    if (c < 10) {
                        c++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                d.removeChild(b);
                a = null;
                am()
            })()
        } else {
            am()
        }
    }

    function am() {
        var g = aG.length;
        if (g > 0) {
            for (var h = 0; h < g; h++) {
                var c = aG[h].id;
                var l = aG[h].callbackFn;
                var a = {
                    success: false,
                    id: c
                };
                if (ah.pv[0] > 0) {
                    var i = aS(c);
                    if (i) {
                        if (ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(c, true);
                            if (l) {
                                a.success = true;
                                a.ref = av(c);
                                l(a)
                            }
                        } else {
                            if (aG[h].expressInstall && au()) {
                                var e = {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if (i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class")
                                }
                                if (i.getAttribute("align")) {
                                    e.align = i.getAttribute("align")
                                }
                                var f = {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for (var j = 0; j < k; j++) {
                                    if (d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value")
                                    }
                                }
                                ae(e, f, c, l)
                            } else {
                                aF(i);
                                if (l) {
                                    l(a)
                                }
                            }
                        }
                    }
                } else {
                    ay(c, true);
                    if (l) {
                        var b = av(c);
                        if (b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b
                        }
                        l(a)
                    }
                }
            }
        }
    }

    function av(b) {
        var d = null;
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (typeof c.SetVariable != aq) {
                d = c
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if (a) {
                    d = a
                }
            }
        }
        return d
    }

    function au() {
        return !aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312)
    }

    function ae(f, d, h, e) {
        aU = true;
        ap = e || null;
        at = {
            success: false,
            id: h
        };
        var a = aS(h);
        if (a) {
            if (a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null
            } else {
                aJ = a;
                ad = h
            }
            f.id = ac;
            if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                f.width = "310"
            }
            if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                f.height = "137"
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var b = ah.ie && ah.win ? "ActiveX" : "PlugIn",
                c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if (typeof d.flashvars != aq) {
                d.flashvars += "&" + c
            } else {
                d.flashvars = c
            } if (ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id", h);
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                (function() {
                    if (a.readyState == 4) {
                        a.parentNode.removeChild(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            aA(f, d, h)
        }
    }

    function aF(a) {
        if (ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(aO(a), b);
            a.style.display = "none";
            (function() {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            a.parentNode.replaceChild(aO(a), a)
        }
    }

    function aO(b) {
        var d = ar("div");
        if (ah.win && ah.ie) {
            d.innerHTML = b.innerHTML
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if (e) {
                var a = e.childNodes;
                if (a) {
                    var f = a.length;
                    for (var c = 0; c < f; c++) {
                        if (!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true))
                        }
                    }
                }
            }
        }
        return d
    }

    function aA(e, g, c) {
        var d, a = aS(c);
        if (ah.wk && ah.wk < 312) {
            return d
        }
        if (a) {
            if (typeof e.id == aq) {
                e.id = c
            }
            if (ah.ie && ah.win) {
                var f = "";
                for (var i in e) {
                    if (e[i] != Object.prototype[i]) {
                        if (i.toLowerCase() == "data") {
                            g.movie = e[i]
                        } else {
                            if (i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"'
                            } else {
                                if (i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"'
                                }
                            }
                        }
                    }
                }
                var h = "";
                for (var j in g) {
                    if (g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />'
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id)
            } else {
                var b = ar(aD);
                b.setAttribute("type", aE);
                for (var k in e) {
                    if (e[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "styleclass") {
                            b.setAttribute("class", e[k])
                        } else {
                            if (k.toLowerCase() != "classid") {
                                b.setAttribute(k, e[k])
                            }
                        }
                    }
                }
                for (var l in g) {
                    if (g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                        aQ(b, l, g[l])
                    }
                }
                a.parentNode.replaceChild(b, a);
                d = b
            }
        }
        return d
    }

    function aQ(b, d, c) {
        var a = ar("param");
        a.setAttribute("name", d);
        a.setAttribute("value", c);
        b.appendChild(a)
    }

    function aw(a) {
        var b = aS(a);
        if (b && b.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                b.style.display = "none";
                (function() {
                    if (b.readyState == 4) {
                        aT(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                b.parentNode.removeChild(b)
            }
        }
    }

    function aT(a) {
        var b = aS(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null
                }
            }
            b.parentNode.removeChild(b)
        }
    }

    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a)
        } catch (b) {}
        return c
    }

    function ar(a) {
        return aL.createElement(a)
    }

    function aM(a, c, b) {
        a.attachEvent(c, b);
        al[al.length] = [a, c, b]
    }

    function ao(a) {
        var b = ah.pv,
            c = a.split(".");
        c[0] = parseInt(c[0], 10);
        c[1] = parseInt(c[1], 10) || 0;
        c[2] = parseInt(c[2], 10) || 0;
        return (b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true : false
    }

    function az(b, f, a, c) {
        if (ah.ie && ah.mac) {
            return
        }
        var e = aL.getElementsByTagName("head")[0];
        if (!e) {
            return
        }
        var g = (a && typeof a == "string") ? a : "screen";
        if (c) {
            aH = null;
            an = null
        }
        if (!aH || an != g) {
            var d = ar("style");
            d.setAttribute("type", "text/css");
            d.setAttribute("media", g);
            aH = e.appendChild(d);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1]
            }
            an = g
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(b, f)
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"))
            }
        }
    }

    function ay(a, c) {
        if (!aI) {
            return
        }
        var b = c ? "visible" : "hidden";
        if (ak && aS(a)) {
            aS(a).style.visibility = b
        } else {
            az("#" + a, "visibility:" + b)
        }
    }

    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b
    }
    var aR = function() {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function() {
                var a = al.length;
                for (var b = 0; b < a; b++) {
                    al[b][0].detachEvent(al[b][1], al[b][2])
                }
                var d = ag.length;
                for (var c = 0; c < d; c++) {
                    aw(ag[c])
                }
                for (var e in ah) {
                    ah[e] = null
                }
                ah = null;
                for (var f in swfobject) {
                    swfobject[f] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(a, e, c, b) {
            if (ah.w3 && a && e) {
                var d = {};
                d.id = a;
                d.swfVersion = e;
                d.expressInstall = c;
                d.callbackFn = b;
                aG[aG.length] = d;
                ay(a, false)
            } else {
                if (b) {
                    b({
                        success: false,
                        id: a
                    })
                }
            }
        },
        getObjectById: function(a) {
            if (ah.w3) {
                return av(a)
            }
        },
        embedSWF: function(k, e, h, f, c, a, b, i, g, j) {
            var d = {
                success: false,
                id: e
            };
            if (ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {
                ay(e, false);
                aj(function() {
                    h += "";
                    f += "";
                    var q = {};
                    if (g && typeof g === aD) {
                        for (var o in g) {
                            q[o] = g[o]
                        }
                    }
                    q.data = k;
                    q.width = h;
                    q.height = f;
                    var n = {};
                    if (i && typeof i === aD) {
                        for (var p in i) {
                            n[p] = i[p]
                        }
                    }
                    if (b && typeof b === aD) {
                        for (var l in b) {
                            if (typeof n.flashvars != aq) {
                                n.flashvars += "&" + l + "=" + b[l]
                            } else {
                                n.flashvars = l + "=" + b[l]
                            }
                        }
                    }
                    if (ao(c)) {
                        var m = aA(q, n, e);
                        if (q.id == e) {
                            ay(e, true)
                        }
                        d.success = true;
                        d.ref = m
                    } else {
                        if (a && au()) {
                            q.data = a;
                            ae(q, n, e, j);
                            return
                        } else {
                            ay(e, true)
                        }
                    } if (j) {
                        j(d)
                    }
                })
            } else {
                if (j) {
                    j(d)
                }
            }
        },
        switchOffAutoHideShow: function() {
            aI = false
        },
        ua: ah,
        getFlashPlayerVersion: function() {
            return {
                major: ah.pv[0],
                minor: ah.pv[1],
                release: ah.pv[2]
            }
        },
        hasFlashPlayerVersion: ao,
        createSWF: function(a, b, c) {
            if (ah.w3) {
                return aA(a, b, c)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(b, a, d, c) {
            if (ah.w3 && au()) {
                ae(b, a, d, c)
            }
        },
        removeSWF: function(a) {
            if (ah.w3) {
                aw(a)
            }
        },
        createCSS: function(b, a, c, d) {
            if (ah.w3) {
                az(b, a, c, d)
            }
        },
        addDomLoadEvent: aj,
        addLoadEvent: aC,
        getQueryParamValue: function(b) {
            var a = aL.location.search || aL.location.hash;
            if (a) {
                if (/\?/.test(a)) {
                    a = a.split("?")[1]
                }
                if (b == null) {
                    return ai(a)
                }
                var c = a.split("&");
                for (var d = 0; d < c.length; d++) {
                    if (c[d].substring(0, c[d].indexOf("=")) == b) {
                        return ai(c[d].substring((c[d].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (aU) {
                var a = aS(ac);
                if (a && aJ) {
                    a.parentNode.replaceChild(aJ, a);
                    if (ad) {
                        ay(ad, true);
                        if (ah.ie && ah.win) {
                            aJ.style.display = "block"
                        }
                    }
                    if (ap) {
                        ap(at)
                    }
                }
                aU = false
            }
        }
    }
}();
window.Modernizr = function(ad, ac, ab) {
    function F(b) {
        U.cssText = b
    }

    function E(d, c) {
        return F(R.join(d + ";") + (c || ""))
    }

    function D(d, c) {
        return typeof d === c
    }

    function C(d, c) {
        return !!~("" + d).indexOf(c)
    }

    function O(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== ab) {
                return j === !1 ? g[i] : D(h, "function") ? h.bind(j || c) : h
            }
        }
        return !1
    }
    var aa = "2.7.1",
        Z = {},
        Y = !0,
        X = ac.documentElement,
        W = "modernizr",
        V = ac.createElement(W),
        U = V.style,
        T, S = {}.toString,
        R = " -webkit- -moz- -o- -ms- ".split(" "),
        Q = {},
        P = {},
        N = {},
        M = [],
        K = M.slice,
        J, I = function(v, u, t, s) {
            var r, q, p, o, h = ac.createElement("div"),
                g = ac.body,
                b = g || ac.createElement("body");
            if (parseInt(t, 10)) {
                while (t--) {
                    p = ac.createElement("div"), p.id = s ? s[t] : W + (t + 1), h.appendChild(p)
                }
            }
            return r = ["&#173;", '<style id="s', W, '">', v, "</style>"].join(""), h.id = W, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = X.style.overflow, X.style.overflow = "hidden", X.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), X.style.overflow = o), !!q
        },
        H = {}.hasOwnProperty,
        G;
    !D(H, "undefined") && !D(H.call, "undefined") ? G = function(d, c) {
        return H.call(d, c)
    } : G = function(d, c) {
        return c in d && D(d.constructor.prototype[c], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError
        }
        var g = K.call(arguments, 1),
            f = function() {
                if (this instanceof f) {
                    var b = function() {};
                    b.prototype = h.prototype;
                    var d = new b,
                        c = h.apply(d, g.concat(K.call(arguments)));
                    return Object(c) === c ? c : d
                }
                return h.apply(a, g.concat(K.call(arguments)))
            };
        return f
    }), Q.touch = function() {
        var a;
        return "ontouchstart" in ad || ad.DocumentTouch && ac instanceof DocumentTouch ? a = !0 : I(["@media (", R.join("touch-enabled),("), W, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
            a = b.offsetTop === 9
        }), a
    };
    for (var L in Q) {
        G(Q, L) && (J = L.toLowerCase(), Z[J] = Q[L](), M.push((Z[J] ? "" : "no-") + J))
    }
    return Z.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                G(e, f) && Z.addTest(f, e[f])
            }
        } else {
            e = e.toLowerCase();
            if (Z[e] !== ab) {
                return Z
            }
            c = typeof c == "function" ? c() : c, typeof Y != "undefined" && Y && (X.className += " " + (c ? "" : "no-") + e), Z[e] = c
        }
        return Z
    }, F(""), V = T = null,
        function(an, am) {
            function A(f, e) {
                var h = f.createElement("p"),
                    g = f.getElementsByTagName("head")[0] || f.documentElement;
                return h.innerHTML = "x<style>" + e + "</style>", g.insertBefore(h.lastChild, g.firstChild)
            }

            function z() {
                var b = t.elements;
                return typeof b == "string" ? b.split(" ") : b
            }

            function y(d) {
                var c = ae[d[ag]];
                return c || (c = {}, af++, d[ag] = af, ae[af] = c), c
            }

            function x(b, h, f) {
                h || (h = am);
                if (B) {
                    return h.createElement(b)
                }
                f || (f = y(h));
                var e;
                return f.cache[b] ? e = f.cache[b].cloneNode() : ai.test(b) ? e = (f.cache[b] = f.createElem(b)).cloneNode() : e = f.createElem(b), e.canHaveChildren && !aj.test(b) && !e.tagUrn ? f.frag.appendChild(e) : e
            }

            function w(b, l) {
                b || (b = am);
                if (B) {
                    return b.createDocumentFragment()
                }
                l = l || y(b);
                var k = l.frag.cloneNode(),
                    j = 0,
                    i = z(),
                    h = i.length;
                for (; j < h; j++) {
                    k.createElement(i[j])
                }
                return k
            }

            function v(d, c) {
                c.cache || (c.cache = {}, c.createElem = d.createElement, c.createFrag = d.createDocumentFragment, c.frag = c.createFrag()), d.createElement = function(a) {
                    return t.shivMethods ? x(a, d, c) : c.createElem(a)
                }, d.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + z().join().replace(/[\w\-]+/g, function(b) {
                    return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
                }) + ");return n}")(t, c.frag)
            }

            function u(b) {
                b || (b = am);
                var d = y(b);
                return t.shivCSS && !ah && !d.hasCSS && (d.hasCSS = !!A(b, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), B || v(b, d), b
            }
            var al = "3.7.0",
                ak = an.html5 || {},
                aj = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                ai = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                ah, ag = "_html5shiv",
                af = 0,
                ae = {},
                B;
            (function() {
                try {
                    var b = am.createElement("a");
                    b.innerHTML = "<xyz></xyz>", ah = "hidden" in b, B = b.childNodes.length == 1 || function() {
                        am.createElement("a");
                        var c = am.createDocumentFragment();
                        return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                    }()
                } catch (d) {
                    ah = !0, B = !0
                }
            })();
            var t = {
                elements: ak.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: al,
                shivCSS: ak.shivCSS !== !1,
                supportsUnknownElements: B,
                shivMethods: ak.shivMethods !== !1,
                type: "default",
                shivDocument: u,
                createElement: x,
                createDocumentFragment: w
            };
            an.html5 = t, u(am)
        }(this, ac), Z._version = aa, Z._prefixes = R, Z.testStyles = I, X.className = X.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (Y ? " js " + M.join(" ") : ""), Z
}(this, this.document),
    function(ad, ac, ab) {
        function aa(b) {
            return "[object Function]" == P.call(b)
        }

        function Z(b) {
            return "string" == typeof b
        }

        function Y() {}

        function X(b) {
            return !b || "loaded" == b || "complete" == b || "uninitialized" == b
        }

        function W() {
            var b = O.shift();
            M = 1, b ? b.t ? R(function() {
                ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
            }, 0) : (b(), W()) : M = 0
        }

        function V(w, v, t, s, q, p, n) {
            function m(a) {
                if (!g && X(h.readyState) && (x.r = g = 1, !M && W(), h.onload = h.onreadystatechange = null, a)) {
                    "img" != w && R(function() {
                        I.removeChild(h)
                    }, 50);
                    for (var c in D[v]) {
                        D[v].hasOwnProperty(c) && D[v][c].onload()
                    }
                }
            }
            var n = n || L.errorTimeout,
                h = ac.createElement(w),
                g = 0,
                b = 0,
                x = {
                    t: t,
                    s: v,
                    e: q,
                    a: p,
                    x: n
                };
            1 === D[v] && (b = 1, D[v] = []), "object" == w ? h.data = v : (h.src = v, h.type = w), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                m.call(this, b)
            }, O.splice(s, 0, x), "img" != w && (b || 2 === D[v] ? (I.insertBefore(h, J ? null : Q), R(m, n)) : D[v].push(h))
        }

        function U(g, e, j, i, h) {
            return M = 0, e = e || "j", Z(g) ? V("c" == e ? G : H, g, e, this.i++, j, i, h) : (O.splice(this.i++, 0, g), 1 == O.length && W()), this
        }

        function T() {
            var b = L;
            return b.loader = {
                load: U,
                i: 0
            }, b
        }
        var S = ac.documentElement,
            R = ad.setTimeout,
            Q = ac.getElementsByTagName("script")[0],
            P = {}.toString,
            O = [],
            M = 0,
            K = "MozAppearance" in S.style,
            J = K && !!ac.createRange().compareNode,
            I = J ? S : Q.parentNode,
            S = ad.opera && "[object Opera]" == P.call(ad.opera),
            S = !!ac.attachEvent && !S,
            H = K ? "object" : S ? "script" : "img",
            G = S ? "script" : H,
            F = Array.isArray || function(b) {
                return "[object Array]" == P.call(b)
            },
            E = [],
            D = {},
            C = {
                timeout: function(d, c) {
                    return c.length && (d.timeout = c[0]), d
                }
            },
            N, L;
        L = function(e) {
            function c(i) {
                var i = i.split("!"),
                    h = E.length,
                    q = i.pop(),
                    p = i.length,
                    q = {
                        url: q,
                        origUrl: q,
                        prefixes: i
                    },
                    o, l, j;
                for (l = 0; l < p; l++) {
                    j = i[l].split("="), (o = C[j.shift()]) && (q = o(q, j))
                }
                for (l = 0; l < h; l++) {
                    q = E[l](q)
                }
                return q
            }

            function n(b, s, r, q, p) {
                var o = c(b),
                    l = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (s && (s = aa(s) ? s : s[b] || s[q] || s[b.split("/").pop().split("?")[0]]), o.instead ? o.instead(b, s, r, q, p) : (D[o.url] ? o.noexec = !0 : D[o.url] = 1, r.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : ab, o.noexec, o.attrs, o.timeout), (aa(s) || aa(l)) && r.load(function() {
                    T(), s && s(o.origUrl, p, q), l && l(o.origUrl, p, q), D[o.url] = 2
                })))
            }

            function m(w, v) {
                function u(b, h) {
                    if (b) {
                        if (Z(b)) {
                            h || (r = function() {
                                var i = [].slice.call(arguments);
                                q.apply(this, i), p()
                            }), n(b, r, v, 0, t)
                        } else {
                            if (Object(b) === b) {
                                for (g in o = function() {
                                    var a = 0,
                                        i;
                                    for (i in b) {
                                        b.hasOwnProperty(i) && a++
                                    }
                                    return a
                                }(), b) {
                                    b.hasOwnProperty(g) && (!h && !--o && (aa(r) ? r = function() {
                                        var i = [].slice.call(arguments);
                                        q.apply(this, i), p()
                                    } : r[g] = function(i) {
                                        return function() {
                                            var a = [].slice.call(arguments);
                                            i && i.apply(this, a), p()
                                        }
                                    }(q[g])), n(b[g], r, v, g, t))
                                }
                            }
                        }
                    } else {
                        !h && p()
                    }
                }
                var t = !!w.test,
                    s = w.load || w.both,
                    r = w.callback || Y,
                    q = r,
                    p = w.complete || Y,
                    o, g;
                u(t ? w.yep : w.nope, !!s), s && u(s)
            }
            var k, f, d = this.yepnope.loader;
            if (Z(e)) {
                n(e, 0, d, 0)
            } else {
                if (F(e)) {
                    for (k = 0; k < e.length; k++) {
                        f = e[k], Z(f) ? n(f, 0, d, 0) : F(f) ? L(f) : Object(f) === f && m(f, d)
                    }
                } else {
                    Object(e) === e && m(e, d)
                }
            }
        }, L.addPrefix = function(d, c) {
            C[d] = c
        }, L.addFilter = function(b) {
            E.push(b)
        }, L.errorTimeout = 10000, null == ac.readyState && ac.addEventListener && (ac.readyState = "loading", ac.addEventListener("DOMContentLoaded", N = function() {
            ac.removeEventListener("DOMContentLoaded", N, 0), ac.readyState = "complete"
        }, 0)), ad.yepnope = T(), ad.yepnope.executeStack = W, ad.yepnope.injectJs = function(r, q, p, n, m, h) {
            var g = ac.createElement("script"),
                f, b, n = n || L.errorTimeout;
            g.src = r;
            for (b in p) {
                g.setAttribute(b, p[b])
            }
            q = h ? W : q || Y, g.onreadystatechange = g.onload = function() {
                !f && X(g.readyState) && (f = 1, q(), g.onload = g.onreadystatechange = null)
            }, R(function() {
                f || (f = 1, q(1))
            }, n), m ? g.onload() : Q.parentNode.insertBefore(g, Q)
        }, ad.yepnope.injectCss = function(b, n, m, l, k, h) {
            var l = ac.createElement("link"),
                f, n = h ? W : n || Y;
            l.href = b, l.rel = "stylesheet", l.type = "text/css";
            for (f in m) {
                l.setAttribute(f, m[f])
            }
            k || (Q.parentNode.insertBefore(l, Q), R(n, 0))
        }
    }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
! function(v, u, t, s) {
    function r(b) {
        return ("string" == typeof b || b instanceof String) && (b = b.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), b
    }
    var q = function(a) {
        for (var f = a.length, e = v("head"); f--;) {
            0 === e.has("." + a[f]).length && e.append('<meta class="' + a[f] + '" />')
        }
    };
    q(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), v(function() {
        "undefined" != typeof FastClick && "undefined" != typeof t.body && FastClick.attach(t.body)
    });
    var p = function(a, f) {
            if ("string" == typeof a) {
                if (f) {
                    var c;
                    if (f.jquery) {
                        if (c = f[0], !c) {
                            return f
                        }
                    } else {
                        c = f
                    }
                    return v(c.querySelectorAll(a))
                }
                return v(t.querySelectorAll(a))
            }
            return v(a, f)
        },
        o = function(d) {
            var c = [];
            return d || c.push("data"), this.namespace.length > 0 && c.push(this.namespace), c.push(this.name), c.join("-")
        },
        n = function(f) {
            for (var e = f.split("-"), h = e.length, g = []; h--;) {
                0 !== h ? g.push(e[h]) : this.namespace.length > 0 ? g.push(this.namespace, e[h]) : g.push(e[h])
            }
            return g.reverse().join("-")
        },
        m = function(a, h) {
            var g = this,
                f = !p(this).data(this.attr_name(!0));
            return p(this.scope).is("[" + this.attr_name() + "]") ? (p(this.scope).data(this.attr_name(!0) + "-init", v.extend({}, this.settings, h || a, this.data_options(p(this.scope)))), f && this.events(this.scope)) : p("[" + this.attr_name() + "]", this.scope).each(function() {
                var b = !p(this).data(g.attr_name(!0) + "-init");
                p(this).data(g.attr_name(!0) + "-init", v.extend({}, g.settings, h || a, g.data_options(p(this)))), b && g.events(this)
            }), "string" == typeof a ? this[a].call(this, h) : void 0
        },
        l = function(f, e) {
            function h() {
                e(f[0])
            }

            function g() {
                if (this.one("load", h), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var d = this.attr("src"),
                        c = d.match(/\?/) ? "&" : "?";
                    c += "random=" + (new Date).getTime(), this.attr("src", d + c)
                }
            }
            return f.attr("src") ? void(f[0].complete || 4 === f[0].readyState ? h() : g.call(f)) : void h()
        };
    u.matchMedia = u.matchMedia || function(h) {
        var g, w = h.documentElement,
            k = w.firstElementChild || w.firstChild,
            j = h.createElement("body"),
            i = h.createElement("div");
        return i.id = "mq-test-1", i.style.cssText = "position:absolute;top:-100em", j.style.background = "none", j.appendChild(i),
            function(b) {
                return i.innerHTML = '&shy;<style media="' + b + '"> #mq-test-1 { width: 42px; }</style>', w.insertBefore(j, k), g = 42 === i.offsetWidth, w.removeChild(j), {
                    matches: g,
                    media: b
                }
            }
    }(t),
        function() {
            function b() {
                y && (k(b), i && jQuery.fx.tick())
            }
            for (var y, x = 0, w = ["webkit", "moz"], k = u.requestAnimationFrame, j = u.cancelAnimationFrame, i = "undefined" != typeof jQuery.fx; x < w.length && !k; x++) {
                k = u[w[x] + "RequestAnimationFrame"], j = j || u[w[x] + "CancelAnimationFrame"] || u[w[x] + "CancelRequestAnimationFrame"]
            }
            k ? (u.requestAnimationFrame = k, u.cancelAnimationFrame = j, i && (jQuery.fx.timer = function(a) {
                a() && jQuery.timers.push(a) && !y && (y = !0, b())
            }, jQuery.fx.stop = function() {
                y = !1
            })) : (u.requestAnimationFrame = function(d) {
                var z = (new Date).getTime(),
                    h = Math.max(0, 16 - (z - x)),
                    g = u.setTimeout(function() {
                        d(z + h)
                    }, h);
                return x = z + h, g
            }, u.cancelAnimationFrame = function(c) {
                clearTimeout(c)
            })
        }(jQuery), u.Foundation = {
        name: "Foundation",
        version: "5.3.1",
        media_queries: {
            small: p(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: p(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: p(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: p(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: p(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: v("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: s
        },
        init: function(j, g, A, z, y) {
            var x = [j, A, z, y],
                w = [];
            if (this.rtl = /rtl/i.test(p("html").attr("dir")), this.scope = j || this.scope, this.set_namespace(), g && "string" == typeof g && !/reflow/i.test(g)) {
                this.libs.hasOwnProperty(g) && w.push(this.init_lib(g, x))
            } else {
                for (var k in this.libs) {
                    w.push(this.init_lib(k, g))
                }
            }
            return j
        },
        init_lib: function(a, d) {
            return this.libs.hasOwnProperty(a) ? (this.patch(this.libs[a]), d && d.hasOwnProperty(a) ? ("undefined" != typeof this.libs[a].settings ? v.extend(!0, this.libs[a].settings, d[a]) : "undefined" != typeof this.libs[a].defaults && v.extend(!0, this.libs[a].defaults, d[a]), this.libs[a].init.apply(this.libs[a], [this.scope, d[a]])) : (d = d instanceof Array ? d : new Array(d), this.libs[a].init.apply(this.libs[a], d))) : function() {}
        },
        patch: function(b) {
            b.scope = this.scope, b.namespace = this.global.namespace, b.rtl = this.rtl, b.data_options = this.utils.data_options, b.attr_name = o, b.add_namespace = n, b.bindings = m, b.S = this.utils.S
        },
        inherit: function(f, e) {
            for (var h = e.split(" "), g = h.length; g--;) {
                this.utils.hasOwnProperty(h[g]) && (f[h[g]] = this.utils[h[g]])
            }
        },
        set_namespace: function() {
            var a = this.global.namespace === s ? v(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = a === s || /false/i.test(a) ? "" : a
        },
        libs: {},
        utils: {
            S: p,
            throttle: function(e, d) {
                var f = null;
                return function() {
                    var b = this,
                        a = arguments;
                    null == f && (f = setTimeout(function() {
                        e.apply(b, a), f = null
                    }, d))
                }
            },
            debounce: function(g, f, j) {
                var i, h;
                return function() {
                    var d = this,
                        c = arguments,
                        b = function() {
                            i = null, j || (h = g.apply(d, c))
                        },
                        a = j && !i;
                    return clearTimeout(i), i = setTimeout(b, f), a && (h = g.apply(d, c)), h
                }
            },
            data_options: function(E, D) {
                function C(b) {
                    return !isNaN(b - 0) && null !== b && "" !== b && b !== !1 && b !== !0
                }

                function B(c) {
                    return "string" == typeof c ? v.trim(c) : c
                }
                D = D || "options";
                var A, z, y, x = {},
                    w = function(d) {
                        var c = Foundation.global.namespace;
                        return d.data(c.length > 0 ? c + "-" + D : D)
                    },
                    a = w(E);
                if ("object" == typeof a) {
                    return a
                }
                for (y = (a || ":").split(";"), A = y.length; A--;) {
                    z = y[A].split(":"), z = [z[0], z.slice(1).join(":")], /true/i.test(z[1]) && (z[1] = !0), /false/i.test(z[1]) && (z[1] = !1), C(z[1]) && (z[1] = -1 === z[1].indexOf(".") ? parseInt(z[1], 10) : parseFloat(z[1])), 2 === z.length && z[0].length > 0 && (x[B(z[0])] = B(z[1]))
                }
                return x
            },
            register_media: function(a, d) {
                Foundation.media_queries[a] === s && (v("head").append('<meta class="' + d + '"/>'), Foundation.media_queries[a] = r(v("." + d).css("font-family")))
            },
            add_custom_rule: function(e, d) {
                if (d === s && Foundation.stylesheet) {
                    Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length)
                } else {
                    var f = Foundation.media_queries[d];
                    f !== s && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[d] + "{ " + e + " }")
                }
            },
            image_loaded: function(f, e) {
                var h = this,
                    g = f.length;
                0 === g && e(f), f.each(function() {
                    l(h.S(this), function() {
                        g -= 1, 0 === g && e(f)
                    })
                })
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            }
        }
    }, v.fn.foundation = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [this].concat(b)), this
        })
    }
}(jQuery, window, window.document),
    function(e, d, f) {
        Foundation.libs.abide = {
            name: "abide",
            version: "5.3.1",
            settings: {
                live_validate: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                timeout: 1000,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function(g) {
                        var c = f.getElementById(g.getAttribute(this.add_namespace("data-equalto"))).value,
                            i = g.value,
                            h = c === i;
                        return h
                    }
                }
            },
            timer: null,
            init: function(h, g, i) {
                this.bindings(g, i)
            },
            events: function(a) {
                var i = this,
                    h = i.S(a).attr("novalidate", "novalidate"),
                    g = h.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), h.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(j) {
                    var c = /ajax/i.test(i.S(this).attr(i.attr_name()));
                    return i.validate(i.S(this).find("input, textarea, select").get(), j, c)
                }).on("reset", function() {
                    return i.reset(e(this))
                }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(b) {
                    i.validate([this], b)
                }).on("keydown.fndtn.abide", function(b) {
                    g.live_validate === !0 && (clearTimeout(i.timer), i.timer = setTimeout(function() {
                        i.validate([this], b)
                    }.bind(this), g.timeout))
                })
            },
            reset: function(a) {
                a.removeAttr(this.invalid_attr), e(this.invalid_attr, a).removeAttr(this.invalid_attr), e(".error", a).not("small").removeClass("error")
            },
            validate: function(r, q, p) {
                var o = this.parse_patterns(r),
                    n = o.length,
                    m = this.S(r[0]).closest("[data-" + this.attr_name(!0) + "]"),
                    l = m.data(this.attr_name(!0) + "-init") || {},
                    k = /submit/.test(q.type);
                m.trigger("validated").trigger("validated.fndtn.abide");
                for (var j = 0; n > j; j++) {
                    if (!o[j] && (k || p)) {
                        return l.focus_on_invalid && r[j].focus(), m.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(r[j]).closest("[data-" + this.attr_name(!0) + "]").attr(this.invalid_attr, ""), !1
                    }
                }
                return (k || p) && m.trigger("valid").trigger("valid.fndtn.abide"), m.removeAttr(this.invalid_attr), p ? !1 : !0
            },
            parse_patterns: function(h) {
                for (var g = h.length, i = []; g--;) {
                    i.push(this.pattern(h[g]))
                }
                return this.check_validation_and_apply_styles(i)
            },
            pattern: function(h) {
                var g = h.getAttribute("type"),
                    j = "string" == typeof h.getAttribute("required"),
                    i = h.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(i) && i.length > 0 ? [h, this.settings.patterns[i], j] : i.length > 0 ? [h, new RegExp("^" + i + "$"), j] : this.settings.patterns.hasOwnProperty(g) ? [h, this.settings.patterns[g], j] : (i = /.*/, [h, i, j])
            },
            check_validation_and_apply_styles: function(F) {
                for (var E = F.length, D = [], C = this.S(F[0][0]).closest("[data-" + this.attr_name(!0) + "]"), B = C.data(this.attr_name(!0) + "-init") || {}; E--;) {
                    var A, z, y = F[E][0],
                        x = F[E][2],
                        w = y.value.trim(),
                        v = this.S(y).parent(),
                        u = y.getAttribute(this.add_namespace("data-abide-validator")),
                        t = "radio" === y.type,
                        s = "checkbox" === y.type,
                        r = this.S('label[for="' + y.getAttribute("id") + '"]'),
                        a = x ? y.value.length > 0 : !0;
                    y.getAttribute(this.add_namespace("data-equalto")) && (u = "equalTo"), A = v.is("label") ? v.parent() : v, t && x ? D.push(this.valid_radio(y, x)) : s && x ? D.push(this.valid_checkbox(y, x)) : u ? (z = this.settings.validators[u].apply(this, [y, x, A]), D.push(z), z ? (this.S(y).removeAttr(this.invalid_attr), A.removeClass("error")) : (this.S(y).attr(this.invalid_attr, ""), A.addClass("error"))) : F[E][1].test(w) && a || !x && y.value.length < 1 || e(y).attr("disabled") ? (this.S(y).removeAttr(this.invalid_attr), A.removeClass("error"), r.length > 0 && B.error_labels && r.removeClass("error"), D.push(!0), e(y).triggerHandler("valid")) : (this.S(y).attr(this.invalid_attr, ""), A.addClass("error"), r.length > 0 && B.error_labels && r.addClass("error"), D.push(!1), e(y).triggerHandler("invalid"))
                }
                return D
            },
            valid_checkbox: function(h, g) {
                var h = this.S(h),
                    i = h.is(":checked") || !g;
                return i ? h.removeAttr(this.invalid_attr).parent().removeClass("error") : h.attr(this.invalid_attr, "").parent().addClass("error"), i
            },
            valid_radio: function(h) {
                for (var g = h.getAttribute("name"), l = this.S(h).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + g + "']"), k = l.length, j = !1, i = 0; k > i; i++) {
                    l[i].checked && (j = !0)
                }
                for (var i = 0; k > i; i++) {
                    j ? this.S(l[i]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(l[i]).attr(this.invalid_attr, "").parent().addClass("error")
                }
                return j
            },
            valid_equal: function(h, c, l) {
                var k = f.getElementById(h.getAttribute(this.add_namespace("data-equalto"))).value,
                    j = h.value,
                    i = k === j;
                return i ? (this.S(h).removeAttr(this.invalid_attr), l.removeClass("error")) : (this.S(h).attr(this.invalid_attr, ""), l.addClass("error")), i
            },
            valid_oneof: function(i, h, n, m) {
                var i = this.S(i),
                    l = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    k = l.filter(":checked").length > 0;
                if (k ? i.removeAttr(this.invalid_attr).parent().removeClass("error") : i.attr(this.invalid_attr, "").parent().addClass("error"), !m) {
                    var j = this;
                    l.each(function() {
                        j.valid_oneof.call(j, this, null, null, !0)
                    })
                }
                return k
            }
        }
    }(jQuery, window, window.document),
    function(b) {
        Foundation.libs.accordion = {
            name: "accordion",
            version: "5.3.1",
            settings: {
                active_class: "active",
                multi_expand: !1,
                toggleable: !0,
                callback: function() {}
            },
            init: function(e, d, f) {
                this.bindings(d, f)
            },
            events: function() {
                var a = this,
                    d = this.S;
                d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(r) {
                    var q = d(this).closest("[" + a.attr_name() + "]"),
                        p = d("#" + this.href.split("#")[1]),
                        o = d("dd > .content", q),
                        n = b(">dd", q),
                        m = a.attr_name() + "=" + q.attr(a.attr_name()),
                        l = q.data(a.attr_name(!0) + "-init"),
                        c = d("dd > .content." + l.active_class, q);
                    return r.preventDefault(), q.attr(a.attr_name()) && (o = o.add("[" + m + "] dd > .content"), n = n.add("[" + m + "] dd")), l.toggleable && p.is(c) ? (p.parent("dd").toggleClass(l.active_class, !1), p.toggleClass(l.active_class, !1), l.callback(p), p.triggerHandler("toggled", [q]), void q.triggerHandler("toggled", [p])) : (l.multi_expand || (o.removeClass(l.active_class), n.removeClass(l.active_class)), p.addClass(l.active_class).parent().addClass(l.active_class), l.callback(p), p.triggerHandler("toggled", [q]), void q.triggerHandler("toggled", [p]))
                })
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(b) {
        Foundation.libs.alert = {
            name: "alert",
            version: "5.3.1",
            settings: {
                callback: function() {}
            },
            init: function(e, d, f) {
                this.bindings(d, f)
            },
            events: function() {
                var a = this,
                    d = this.S;
                b(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function(c) {
                    var g = d(this).closest("[" + a.attr_name() + "]"),
                        f = g.data(a.attr_name(!0) + "-init") || a.settings;
                    c.preventDefault(), Modernizr.csstransitions ? (g.addClass("alert-close"), g.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        d(this).trigger("close").trigger("close.fndtn.alert").remove(), f.callback()
                    })) : g.fadeOut(300, function() {
                        d(this).trigger("close").trigger("close.fndtn.alert").remove(), f.callback()
                    })
                })
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(f, e, h, g) {
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.3.1",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
                },
                close_selectors: ".clearing-close, div.clearing-blackout",
                open_selectors: "",
                touch_label: "",
                init: !1,
                locked: !1
            },
            init: function(j, i, l) {
                var k = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(i, l), k.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(k.S("li", this.scope)) : k.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    k.assemble(k.S("li", this))
                })
            },
            events: function(i) {
                var c = this,
                    b = c.S,
                    a = f(".scroll-container");
                a.length > 0 && (this.scope = a), b(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(k, j, o) {
                    var j = j || b(this),
                        o = o || j,
                        n = j.next("li"),
                        m = j.closest("[" + c.attr_name() + "]").data(c.attr_name(!0) + "-init"),
                        l = b(k.target);
                    k.preventDefault(), m || (c.init(), m = j.closest("[" + c.attr_name() + "]").data(c.attr_name(!0) + "-init")), o.hasClass("visible") && j[0] === o[0] && n.length > 0 && c.is_open(j) && (o = n, l = b("img", o)), c.open(l, j, o), c.update_paddles(o)
                }).on("click.fndtn.clearing", ".clearing-main-next", function(d) {
                    c.nav(d, "next")
                }).on("click.fndtn.clearing", ".clearing-main-prev", function(d) {
                    c.nav(d, "prev")
                }).on("click.fndtn.clearing", this.settings.close_selectors, function(d) {
                    Foundation.libs.clearing.close(d, this)
                }), f(h).on("keydown.fndtn.clearing", function(d) {
                    c.keydown(d)
                }), b(e).off(".clearing").on("resize.fndtn.clearing", function() {
                    c.resize()
                }), this.swipe_events(i)
            },
            swipe_events: function() {
                var d = this,
                    c = d.S;
                c(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(b) {
                    b.touches || (b = b.originalEvent);
                    var i = {
                        start_page_x: b.touches[0].pageX,
                        start_page_y: b.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: g
                    };
                    c(this).data("swipe-transition", i), b.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function(i) {
                    if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                        var b = c(this).data("swipe-transition");
                        if ("undefined" == typeof b && (b = {}), b.delta_x = i.touches[0].pageX - b.start_page_x, Foundation.rtl && (b.delta_x = -b.delta_x), "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(i.touches[0].pageY - b.start_page_y))), !b.is_scrolling && !b.active) {
                            i.preventDefault();
                            var a = b.delta_x < 0 ? "next" : "prev";
                            b.active = !0, d.nav(i, a)
                        }
                    }
                }).on("touchend.fndtn.clearing", ".visible-img", function(b) {
                    c(this).data("swipe-transition", {}), b.stopPropagation()
                })
            },
            assemble: function(r) {
                var q = r.parent();
                if (!q.parent().hasClass("carousel")) {
                    q.after('<div id="foundationClearingHolder"></div>');
                    var p = q.detach(),
                        o = "";
                    if (null != p[0]) {
                        o = p[0].outerHTML;
                        var n = this.S("#foundationClearingHolder"),
                            m = q.data(this.attr_name(!0) + "-init"),
                            l = {
                                grid: '<div class="carousel">' + o + "</div>",
                                viewing: m.templates.viewing
                            },
                            k = '<div class="clearing-assembled"><div>' + l.viewing + l.grid + "</div></div>",
                            a = this.settings.touch_label;
                        Modernizr.touch && (k = f(k).find(".clearing-touch-label").html(a).end()), n.after(k).remove()
                    }
                }
            },
            open: function(z, y, x) {
                function w() {
                    setTimeout(function() {
                        this.image_loaded(p, function() {
                            1 !== p.outerWidth() || a ? v.call(this, p) : w.call(this)
                        }.bind(this))
                    }.bind(this), 100)
                }

                function v(d) {
                    var i = f(d);
                    i.css("visibility", "visible"), t.css("overflow", "hidden"), s.addClass("clearing-blackout"), r.addClass("clearing-container"), q.show(), this.fix_height(x).caption(u.S(".clearing-caption", q), u.S("img", x)).center_and_label(d, c).shift(y, x, function() {
                        x.closest("li").siblings().removeClass("visible"), x.closest("li").addClass("visible")
                    }), q.trigger("opened.fndtn.clearing")
                }
                var u = this,
                    t = f(h.body),
                    s = x.closest(".clearing-assembled"),
                    r = u.S("div", s).first(),
                    q = u.S(".visible-img", r),
                    p = u.S("img", q).not(z),
                    c = u.S(".clearing-touch-label", r),
                    a = !1;
                f("body").on("touchmove", function(b) {
                    b.preventDefault()
                }), p.error(function() {
                    a = !0
                }), this.locked() || (q.trigger("open.fndtn.clearing"), p.attr("src", this.load(z)).css("visibility", "hidden"), w.call(this))
            },
            close: function(a, l) {
                a.preventDefault();
                var k, j, i = function(b) {
                        return /blackout/.test(b.selector) ? b : b.closest(".clearing-blackout")
                    }(f(l)),
                    c = f(h.body);
                return l === a.target && i && (c.css("overflow", ""), k = f("div", i).first(), j = f(".visible-img", k), j.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, f("ul[" + this.attr_name() + "]", i).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), k.removeClass("clearing-container"), j.hide(), j.trigger("closed.fndtn.clearing")), f("body").off("touchmove"), !1
            },
            is_open: function(b) {
                return b.parent().prop("style").length > 0
            },
            keydown: function(a) {
                var l = f(".clearing-blackout ul[" + this.attr_name() + "]"),
                    k = this.rtl ? 37 : 39,
                    j = this.rtl ? 39 : 37,
                    i = 27;
                a.which === k && this.go(l, "next"), a.which === j && this.go(l, "prev"), a.which === i && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
            },
            nav: function(a, j) {
                var i = f("ul[" + this.attr_name() + "]", ".clearing-blackout");
                a.preventDefault(), this.go(i, j)
            },
            resize: function() {
                var a = f("img", ".clearing-blackout .visible-img"),
                    d = f(".clearing-touch-label", ".clearing-blackout");
                a.length && (this.center_and_label(a, d), a.trigger("resized.fndtn.clearing"))
            },
            fix_height: function(i) {
                var d = i.parent().children(),
                    j = this;
                return d.each(function() {
                    var k = j.S(this),
                        c = k.find("img");
                    k.height() > c.outerHeight() && k.addClass("fix-height")
                }).closest("ul").width(100 * d.length + "%"), this
            },
            update_paddles: function(d) {
                d = d.closest("li");
                var c = d.closest(".carousel").siblings(".visible-img");
                d.next().length > 0 ? this.S(".clearing-main-next", c).removeClass("disabled") : this.S(".clearing-main-next", c).addClass("disabled"), d.prev().length > 0 ? this.S(".clearing-main-prev", c).removeClass("disabled") : this.S(".clearing-main-prev", c).addClass("disabled")
            },
            center_and_label: function(d, c) {
                return this.rtl ? (d.css({
                    marginRight: -(d.outerWidth() / 2),
                    marginTop: -(d.outerHeight() / 2),
                    left: "auto",
                    right: "50%"
                }), c.length > 0 && c.css({
                    marginRight: -(c.outerWidth() / 2),
                    marginTop: -(d.outerHeight() / 2) - c.outerHeight() - 10,
                    left: "auto",
                    right: "50%"
                })) : (d.css({
                    marginLeft: -(d.outerWidth() / 2),
                    marginTop: -(d.outerHeight() / 2)
                }), c.length > 0 && c.css({
                    marginLeft: -(c.outerWidth() / 2),
                    marginTop: -(d.outerHeight() / 2) - c.outerHeight() - 10
                })), this
            },
            load: function(d) {
                var c;
                return c = "A" === d[0].nodeName ? d.attr("href") : d.parent().attr("href"), this.preload(d), c ? c : d.attr("src")
            },
            preload: function(b) {
                this.img(b.closest("li").next()).img(b.closest("li").prev())
            },
            img: function(i) {
                if (i.length) {
                    var d = new Image,
                        j = this.S("a", i);
                    d.src = j.length ? j.attr("href") : this.S("img", i).attr("src")
                }
                return this
            },
            caption: function(i, d) {
                var j = d.attr("data-caption");
                return j ? i.html(j).show() : i.text("").hide(), this
            },
            go: function(j, i) {
                var l = this.S(".visible", j),
                    k = l[i]();
                k.length && this.S("img", k).trigger("click", [l, k]).trigger("click.fndtn.clearing", [l, k]).trigger("change.fndtn.clearing")
            },
            shift: function(v, u, t) {
                var s, r = u.parent(),
                    q = this.settings.prev_index || u.index(),
                    p = this.direction(r, v, u),
                    o = this.rtl ? "right" : "left",
                    n = parseInt(r.css("left"), 10),
                    m = u.outerWidth(),
                    l = {};
                u.index() === q || /skip/.test(p) ? /skip/.test(p) && (s = u.index() - this.settings.up_count, this.lock(), s > 0 ? (l[o] = -(s * m), r.animate(l, 300, this.unlock())) : (l[o] = 0, r.animate(l, 300, this.unlock()))) : /left/.test(p) ? (this.lock(), l[o] = n + m, r.animate(l, 300, this.unlock())) : /right/.test(p) && (this.lock(), l[o] = n - m, r.animate(l, 300, this.unlock())), t()
            },
            direction: function(j, i, p) {
                var o, n = this.S("li", j),
                    m = n.outerWidth() + n.outerWidth() / 4,
                    l = Math.floor(this.S(".clearing-container").outerWidth() / m) - 1,
                    k = n.index(p);
                return this.settings.up_count = l, o = this.adjacent(this.settings.prev_index, k) ? k > l && k > this.settings.prev_index ? "right" : k > l - 1 && k <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = k, o
            },
            adjacent: function(i, d) {
                for (var j = d + 1; j >= d - 1; j--) {
                    if (j === i) {
                        return !0
                    }
                }
                return !1
            },
            lock: function() {
                this.settings.locked = !0
            },
            unlock: function() {
                this.settings.locked = !1
            },
            locked: function() {
                return this.settings.locked
            },
            off: function() {
                this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
            },
            reflow: function() {
                this.init()
            }
        }
    }(jQuery, window, window.document),
    function(d, c) {
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.3.1",
            settings: {
                active_class: "open",
                align: "bottom",
                is_hover: !1,
                opened: function() {},
                closed: function() {}
            },
            init: function(f, e, g) {
                Foundation.inherit(this, "throttle"), this.bindings(e, g)
            },
            events: function() {
                var b = this,
                    a = b.S;
                a(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(f) {
                    var g = a(this).data(b.attr_name(!0) + "-init") || b.settings;
                    (!g.is_hover || Modernizr.touch) && (f.preventDefault(), b.toggle(d(this)))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(i) {
                    var h, l, k = a(this);
                    clearTimeout(b.timeout), k.data(b.data_attr()) ? (h = a("#" + k.data(b.data_attr())), l = k) : (h = k, l = a("[" + b.attr_name() + "='" + h.attr("id") + "']"));
                    var j = l.data(b.attr_name(!0) + "-init") || b.settings;
                    a(i.target).data(b.data_attr()) && j.is_hover && b.closeall.call(b), j.is_hover && b.open.apply(b, [h, l])
                }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                    var e = a(this);
                    b.timeout = setTimeout(function() {
                        if (e.data(b.data_attr())) {
                            var f = e.data(b.data_attr(!0) + "-init") || b.settings;
                            f.is_hover && b.close.call(b, a("#" + e.data(b.data_attr())))
                        } else {
                            var g = a("[" + b.attr_name() + '="' + a(this).attr("id") + '"]'),
                                f = g.data(b.attr_name(!0) + "-init") || b.settings;
                            f.is_hover && b.close.call(b, e)
                        }
                    }.bind(this), 150)
                }).on("click.fndtn.dropdown", function(f) {
                    var g = a(f.target).closest("[" + b.attr_name() + "-content]");
                    if (!a(f.target).data(b.data_attr()) && !a(f.target).parent().data(b.data_attr())) {
                        return !a(f.target).data("revealId") && g.length > 0 && (a(f.target).is("[" + b.attr_name() + "-content]") || d.contains(g.first()[0], f.target)) ? void f.stopPropagation() : void b.close.call(b, a("[" + b.attr_name() + "-content]"))
                    }
                }).on("opened.fndtn.dropdown", "[" + b.attr_name() + "-content]", function() {
                    b.settings.opened.call(this)
                }).on("closed.fndtn.dropdown", "[" + b.attr_name() + "-content]", function() {
                    b.settings.closed.call(this)
                }), a(c).off(".dropdown").on("resize.fndtn.dropdown", b.throttle(function() {
                    b.resize.call(b)
                }, 50)), this.resize()
            },
            close: function(f) {
                var e = this;
                f.each(function() {
                    e.S(this).hasClass(e.settings.active_class) && (e.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(e.settings.active_class).prev("[" + e.attr_name() + "]").removeClass(e.settings.active_class).removeData("target"), e.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [f]))
                })
            },
            closeall: function() {
                var a = this;
                d.each(a.S("[" + this.attr_name() + "-content]"), function() {
                    a.close.call(a, a.S(this))
                })
            },
            open: function(f, e) {
                this.css(f.addClass(this.settings.active_class), e), f.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), f.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [f, e])
            },
            data_attr: function() {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function(f) {
                var e = this.S("#" + f.data(this.data_attr()));
                0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== f.get(0) && this.open.call(this, e, f)) : this.open.call(this, e, f))
            },
            resize: function() {
                var f = this.S("[" + this.attr_name() + "-content].open"),
                    e = this.S("[" + this.attr_name() + "='" + f.attr("id") + "']");
                f.length && e.length && this.css(f, e)
            },
            css: function(g, f) {
                var j = Math.max((f.width() - g.width()) / 2, 8);
                if (this.clear_idx(), this.small()) {
                    var i = this.dirs.bottom.call(g, f);
                    g.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: i.top
                    }), g.css(Foundation.rtl ? "right" : "left", j)
                } else {
                    var h = f.data(this.attr_name(!0) + "-init") || this.settings;
                    this.style(g, f, h)
                }
                return g
            },
            style: function(a, h, g) {
                var f = d.extend({
                    position: "absolute"
                }, this.dirs[g.align].call(a, h, g));
                a.attr("style", "").css(f)
            },
            dirs: {
                _base: function(f) {
                    var e = this.offsetParent(),
                        h = e.offset(),
                        g = f.offset();
                    return g.top -= h.top, g.left -= h.left, g
                },
                top: function(f) {
                    var e = Foundation.libs.dropdown,
                        h = e.dirs._base.call(this, f),
                        g = 8;
                    return this.addClass("drop-top"), (f.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(g, h), Foundation.rtl ? {
                        left: h.left - this.outerWidth() + f.outerWidth(),
                        top: h.top - this.outerHeight()
                    } : {
                        left: h.left,
                        top: h.top - this.outerHeight()
                    }
                },
                bottom: function(f) {
                    var e = Foundation.libs.dropdown,
                        h = e.dirs._base.call(this, f),
                        g = 8;
                    return (f.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(g, h), e.rtl ? {
                        left: h.left - this.outerWidth() + f.outerWidth(),
                        top: h.top + f.outerHeight()
                    } : {
                        left: h.left,
                        top: h.top + f.outerHeight()
                    }
                },
                left: function(f) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, f);
                    return this.addClass("drop-left"), {
                        left: e.left - this.outerWidth(),
                        top: e.top
                    }
                },
                right: function(f) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, f);
                    return this.addClass("drop-right"), {
                        left: e.left + f.outerWidth(),
                        top: e.top
                    }
                }
            },
            adjust_pip: function(i, h) {
                var n = Foundation.stylesheet;
                this.small() && (i += h.left - 8), this.rule_idx = n.cssRules.length;
                var m = ".f-dropdown.open:before",
                    l = ".f-dropdown.open:after",
                    k = "left: " + i + "px;",
                    j = "left: " + (i - 1) + "px;";
                n.insertRule ? (n.insertRule([m, "{", k, "}"].join(" "), this.rule_idx), n.insertRule([l, "{", j, "}"].join(" "), this.rule_idx + 1)) : (n.addRule(m, k, this.rule_idx), n.addRule(l, j, this.rule_idx + 1))
            },
            clear_idx: function() {
                var b = Foundation.stylesheet;
                this.rule_idx && (b.deleteRule(this.rule_idx), b.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function() {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(c).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(d, c) {
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.3.1",
            settings: {
                use_tallest: !0,
                before_height_change: d.noop,
                after_height_change: d.noop,
                equalize_on_stack: !1
            },
            init: function(f, e, g) {
                Foundation.inherit(this, "image_loaded"), this.bindings(e, g), this.reflow()
            },
            events: function() {
                this.S(c).off(".equalizer").on("resize.fndtn.equalizer", function() {
                    this.reflow()
                }.bind(this))
            },
            equalize: function(a) {
                var p = !1,
                    o = a.find("[" + this.attr_name() + "-watch]:visible"),
                    n = a.data(this.attr_name(!0) + "-init");
                if (0 !== o.length) {
                    var m = o.first().offset().top;
                    if (n.before_height_change(), a.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), o.height("inherit"), o.each(function() {
                        var e = d(this);
                        e.offset().top !== m && (p = !0)
                    }), n.equalize_on_stack !== !1 || !p) {
                        var l = o.map(function() {
                            return d(this).outerHeight(!1)
                        }).get();
                        if (n.use_tallest) {
                            var k = Math.max.apply(null, l);
                            o.css("height", k)
                        } else {
                            var j = Math.min.apply(null, l);
                            o.css("height", j)
                        }
                        n.after_height_change(), a.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                    }
                }
            },
            reflow: function() {
                var a = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var b = d(this);
                    a.image_loaded(a.S("img", this), function() {
                        a.equalize(b)
                    })
                })
            }
        }
    }(jQuery, window, window.document),
    function(d, c) {
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.3.1",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    small: Foundation.media_queries.small,
                    medium: Foundation.media_queries.medium,
                    large: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function(a, l, k) {
                        if (/IMG/.test(a[0].nodeName)) {
                            var j = a[0].src;
                            if (new RegExp(l, "i").test(j)) {
                                return
                            }
                            return a[0].src = l, k(a[0].src)
                        }
                        var i = a.data(this.data_attr + "-last-path"),
                            h = this;
                        if (i != l) {
                            return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(l) ? (d(a).css("background-image", "url(" + l + ")"), a.data("interchange-last-path", l), k(l)) : d.get(l, function(b) {
                                a.html(b), a.data(h.data_attr + "-last-path", l), k()
                            })
                        }
                    }
                }
            },
            init: function(a, f, e) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), d.extend(!0, this.settings, f, e), this.bindings(f, e), this.load("images"), this.load("nodes")
            },
            get_media_hash: function() {
                var f = "";
                for (var e in this.settings.named_queries) {
                    f += matchMedia(this.settings.named_queries[e]).matches.toString()
                }
                return f
            },
            events: function() {
                var b, a = this;
                return d(c).off(".interchange").on("resize.fndtn.interchange", a.throttle(function() {
                    var e = a.get_media_hash();
                    e !== b && a.resize(), b = e
                }, 50)), this
            },
            resize: function() {
                var a = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) {
                    return void setTimeout(d.proxy(this.resize, this), 50)
                }
                for (var f in a) {
                    if (a.hasOwnProperty(f)) {
                        var e = this.results(f, a[f]);
                        e && this.settings.directives[e.scenario[1]].call(this, e.el, e.scenario[0], function() {
                            if (arguments[0] instanceof Array) {
                                var b = arguments[0]
                            } else {
                                var b = Array.prototype.slice.call(arguments, 0)
                            }
                            e.el.trigger(e.scenario[1], b)
                        })
                    }
                }
            },
            results: function(h, g) {
                var l = g.length;
                if (l > 0) {
                    for (var k = this.S("[" + this.add_namespace("data-uuid") + '="' + h + '"]'); l--;) {
                        var j, i = g[l][2];
                        if (j = matchMedia(this.settings.named_queries.hasOwnProperty(i) ? this.settings.named_queries[i] : i), j.matches) {
                            return {
                                el: k,
                                scenario: g[l]
                            }
                        }
                    }
                }
                return !1
            },
            load: function(f, e) {
                return ("undefined" == typeof this["cached_" + f] || e) && this["update_" + f](), this["cached_" + f]
            },
            update_images: function() {
                var h = this.S("img[" + this.data_attr + "]"),
                    g = h.length,
                    l = g,
                    k = 0,
                    j = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === g; l--;) {
                    if (k++, h[l]) {
                        var i = h[l].getAttribute(j) || "";
                        i.length > 0 && this.cached_images.push(h[l])
                    }
                    k === g && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function() {
                var h = this.S("[" + this.data_attr + "]").not("img"),
                    g = h.length,
                    l = g,
                    k = 0,
                    j = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === g; l--;) {
                    k++;
                    var i = h[l].getAttribute(j) || "";
                    i.length > 0 && this.cached_nodes.push(h[l]), k === g && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function(b) {
                for (var a = this["cached_" + b].length; a--;) {
                    this.object(d(this["cached_" + b][a]))
                }
                return d(c).trigger("resize").trigger("resize.fndtn.interchange")
            },
            convert_directive: function(f) {
                var e = this.trim(f);
                return e.length > 0 ? e : "replace"
            },
            parse_scenario: function(h) {
                var g = h[0].match(/(.+),\s*(\w+)\s*$/),
                    l = h[1];
                if (g) {
                    var k = g[1],
                        j = g[2]
                } else {
                    var i = h[0].split(/,\s*$/),
                        k = i[0],
                        j = ""
                }
                return [this.trim(k), this.convert_directive(j), this.trim(l)]
            },
            object: function(h) {
                var g = this.parse_data_attr(h),
                    l = [],
                    k = g.length;
                if (k > 0) {
                    for (; k--;) {
                        var j = g[k].split(/\((.*?)(\))$/);
                        if (j.length > 1) {
                            var i = this.parse_scenario(j);
                            l.push(i)
                        }
                    }
                }
                return this.store(h, l)
            },
            store: function(f, e) {
                var h = this.random_str(),
                    g = f.data(this.add_namespace("uuid", !0));
                return this.cache[g] ? this.cache[g] : (f.attr(this.add_namespace("data-uuid"), h), this.cache[h] = e)
            },
            trim: function(a) {
                return "string" == typeof a ? d.trim(a) : a
            },
            set_data_attr: function(b) {
                return b ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function(f) {
                for (var e = f.attr(this.attr_name()).split(/\[(.*?)\]/), h = e.length, g = []; h--;) {
                    e[h].replace(/[\W\d]+/, "").length > 4 && g.push(e[h])
                }
                return g
            },
            reflow: function() {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, window, window.document),
    function(f, e, h, g) {
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.3.1",
            defaults: {
                expose: !1,
                modal: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                abort_on_close: !0,
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function() {},
                post_step_callback: function() {},
                pre_step_callback: function() {},
                pre_ride_callback: function() {},
                post_expose_callback: function() {},
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function(a, j, i) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || f.extend({}, this.defaults, i || j), this.bindings(j, i)
            },
            events: function() {
                var a = this;
                f(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(b) {
                        b.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
                    }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(b) {
                        b.preventDefault(), this.end(this.settings.abort_on_close)
                    }.bind(this)), f(e).off(".joyride").on("resize.fndtn.joyride", a.throttle(function() {
                    if (f("[" + a.attr_name() + "]").length > 0 && a.settings.$next_tip) {
                        if (a.settings.exposed.length > 0) {
                            var c = f(a.settings.exposed);
                            c.each(function() {
                                var d = f(this);
                                a.un_expose(d), a.expose(d)
                            })
                        }
                        a.is_phone() ? a.pos_phone() : a.pos_default(!1)
                    }
                }, 100))
            },
            start: function() {
                var a = this,
                    k = f("[" + this.attr_name() + "]", this.scope),
                    j = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    i = j.length;
                !k.length > 0 || (this.settings.init || this.events(), this.settings = k.data(this.attr_name(!0) + "-init"), this.settings.$content_el = k, this.settings.$body = f(this.settings.tip_container), this.settings.body_offset = f(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof f.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !f.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(l) {
                    var d = f(this);
                    this.settings = f.extend({}, a.defaults, a.data_options(d));
                    for (var b = i; b--;) {
                        a.settings[j[b]] = parseInt(a.settings[j[b]], 10)
                    }
                    a.create({
                        $li: d,
                        index: l
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
            },
            resume: function() {
                this.set_li(), this.show()
            },
            tip_template: function(a) {
                var j, i;
                return a.tip_class = a.tip_class || "", j = f(this.settings.template.tip).addClass(a.tip_class), i = f.trim(f(a.li).html()) + this.button_text(a.button_text) + this.settings.template.link + this.timer_instance(a.index), j.append(f(this.settings.template.wrapper)), j.first().attr(this.add_namespace("data-index"), a.index), f(".joyride-content-wrapper", j).append(i), j[0]
            },
            timer_instance: function(a) {
                var d;
                return d = 0 === a && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : f(this.settings.template.timer)[0].outerHTML
            },
            button_text: function(a) {
                return this.settings.tip_settings.next_button ? (a = f.trim(a) || "Next", a = f(this.settings.template.button).append(a)[0].outerHTML) : a = "", a
            },
            create: function(a) {
                this.settings.tip_settings = f.extend({}, this.settings, this.data_options(a.$li));
                var k = a.$li.attr(this.add_namespace("data-button")) || a.$li.attr(this.add_namespace("data-text")),
                    j = a.$li.attr("class"),
                    i = f(this.tip_template({
                        tip_class: j,
                        index: a.index,
                        button_text: k,
                        li: a.$li
                    }));
                f(this.settings.tip_container).append(i)
            },
            show: function(a) {
                var d = null;
                this.settings.$li === g || -1 === f.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(a), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (a && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = f.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), d = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (d.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                    d.animate({
                        width: d.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (d.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                    d.animate({
                        width: d.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
            },
            is_phone: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function() {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || f(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(f.proxy(function() {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function(b) {
                b ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function() {
                this.settings.$next_tip = f(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function() {
                var a = this.settings.$li.attr(this.add_namespace("data-class")),
                    i = this.settings.$li.attr(this.add_namespace("data-id")),
                    c = function() {
                        return i ? f(h.getElementById(i)) : a ? f("." + a).first() : f("body")
                    };
                this.settings.$target = c()
            },
            scroll_to: function() {
                var b, a;
                b = f(e).height() / 2, a = Math.ceil(this.settings.$target.offset().top - b + this.settings.$next_tip.outerHeight()), 0 != a && f("html, body").stop().animate({
                    scrollTop: a
                }, this.settings.scroll_speed, "swing")
            },
            paused: function() {
                return -1 === f.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
            },
            restart: function() {
                this.hide(), this.settings.$li = g, this.show("init")
            },
            pos_default: function(j) {
                var i = this.settings.$next_tip.find(".joyride-nub"),
                    o = Math.ceil(i.outerWidth() / 2),
                    n = Math.ceil(i.outerHeight() / 2),
                    m = j || !1;
                if (m && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) {
                    this.settings.$li.length && this.pos_modal(i)
                } else {
                    var l = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                        k = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                    this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + l,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + k
                    } : {
                        top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + l,
                        left: this.settings.$target.offset().left + k
                    }), this.nub_position(i, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + l,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                    } : {
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + l,
                        left: this.settings.$target.offset().left + k
                    }), this.nub_position(i, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + l,
                        left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + o + k
                    }), this.nub_position(i, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + l,
                        left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - o + k
                    }), this.nub_position(i, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
                }
                m && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function(a) {
                var m = this.settings.$next_tip.outerHeight(),
                    l = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                    k = f(".joyride-nub", this.settings.$next_tip),
                    j = Math.ceil(k.outerHeight() / 2),
                    i = a || !1;
                k.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), i && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(k) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - m - j
                }), k.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + l + j
                }), k.addClass("top")), i && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function(b) {
                this.center(), b.hide(), this.show_modal()
            },
            show_modal: function() {
                if (!this.settings.$next_tip.data("closed")) {
                    var a = f(".joyride-modal-bg");
                    a.length < 1 && f("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? a.show() : a.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function() {
                var l, k, j, i, b, a = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof f) {
                    j = arguments[0]
                } else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) {
                        return !1
                    }
                    j = this.settings.$target
                }
                return j.length < 1 ? (e.console && console.error("element not valid", j), !1) : (l = f(this.settings.template.expose), this.settings.$body.append(l), l.css({
                    top: j.offset().top,
                    left: j.offset().left,
                    width: j.outerWidth(!0),
                    height: j.outerHeight(!0)
                }), k = f(this.settings.template.expose_cover), i = {
                    zIndex: j.css("z-index"),
                    position: j.css("position")
                }, b = null == j.attr("class") ? "" : j.attr("class"), j.css("z-index", parseInt(l.css("z-index")) + 1), "static" == i.position && j.css("position", "relative"), j.data("expose-css", i), j.data("orig-class", b), j.attr("class", b + " " + this.settings.expose_add_class), k.css({
                    top: j.offset().top,
                    left: j.offset().left,
                    width: j.outerWidth(!0),
                    height: j.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(k), l.addClass(a), k.addClass(a), j.data("expose", a), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, j), void this.add_exposed(j))
            },
            un_expose: function() {
                var l, k, j, i, b, a = !1;
                if (arguments.length > 0 && arguments[0] instanceof f) {
                    k = arguments[0]
                } else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) {
                        return !1
                    }
                    k = this.settings.$target
                }
                return k.length < 1 ? (e.console && console.error("element not valid", k), !1) : (l = k.data("expose"), j = f("." + l), arguments.length > 1 && (a = arguments[1]), a === !0 ? f(".joyride-expose-wrapper,.joyride-expose-cover").remove() : j.remove(), i = k.data("expose-css"), "auto" == i.zIndex ? k.css("z-index", "") : k.css("z-index", i.zIndex), i.position != k.css("position") && ("static" == i.position ? k.css("position", "") : k.css("position", i.position)), b = k.data("orig-class"), k.attr("class", b), k.removeData("orig-classes"), k.removeData("expose"), k.removeData("expose-z-index"), void this.remove_exposed(k))
            },
            add_exposed: function(a) {
                this.settings.exposed = this.settings.exposed || [], a instanceof f || "object" == typeof a ? this.settings.exposed.push(a[0]) : "string" == typeof a && this.settings.exposed.push(a)
            },
            remove_exposed: function(a) {
                var j, i;
                for (a instanceof f ? j = a[0] : "string" == typeof a && (j = a), this.settings.exposed = this.settings.exposed || [], i = this.settings.exposed.length; i--;) {
                    if (this.settings.exposed[i] == j) {
                        return void this.settings.exposed.splice(i, 1)
                    }
                }
            },
            center: function() {
                var a = f(e);
                return this.settings.$next_tip.css({
                    top: (a.height() - this.settings.$next_tip.outerHeight()) / 2 + a.scrollTop(),
                    left: (a.width() - this.settings.$next_tip.outerWidth()) / 2 + a.scrollLeft()
                }), !0
            },
            bottom: function() {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function() {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function() {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function() {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function(p) {
                var o = f(e),
                    n = o.height() / 2,
                    m = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()),
                    l = o.width() + o.scrollLeft(),
                    k = o.height() + m,
                    b = o.height() + o.scrollTop(),
                    a = o.scrollTop();
                return a > m && (a = 0 > m ? 0 : m), k > b && (b = k), [p.offset().top < a, l < p.offset().left + p.outerWidth(), b < p.offset().top + p.outerHeight(), o.scrollLeft() > p.offset().left]
            },
            visible: function(d) {
                for (var c = d.length; c--;) {
                    if (d[c]) {
                        return !1
                    }
                }
                return !0
            },
            nub_position: function(i, d, j) {
                i.addClass("auto" === d ? j : d)
            },
            startTimer: function() {
                this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function(a) {
                this.settings.cookie_monster && f.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), f(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof a || a === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), f(".joyride-tip-guide").remove()
            },
            off: function() {
                f(this.scope).off(".joyride"), f(e).off(".joyride"), f(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), f(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(d, c) {
        Foundation.libs["magellan-expedition"] = {
            name: "magellan-expedition",
            version: "5.3.1",
            settings: {
                active_class: "active",
                threshold: 0,
                destination_threshold: 20,
                throttle_delay: 30,
                fixed_top: 0
            },
            init: function(f, e, g) {
                Foundation.inherit(this, "throttle"), this.bindings(e, g)
            },
            events: function() {
                var f = this,
                    b = f.S,
                    a = f.settings;
                f.set_expedition_position(), b(f.scope).off(".magellan").on("click.fndtn.magellan", "[" + f.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(i) {
                    i.preventDefault();
                    var n = d(this).closest("[" + f.attr_name() + "]"),
                        m = n.data("magellan-expedition-init"),
                        l = this.hash.split("#").join(""),
                        k = d("a[name='" + l + "']");
                    0 === k.length && (k = d("#" + l));
                    var j = k.offset().top - m.destination_threshold + 1;
                    j -= n.outerHeight(), d("html, body").stop().animate({
                        scrollTop: j
                    }, 700, "swing", function() {
                        history.pushState ? history.pushState(null, null, "#" + l) : location.hash = "#" + l
                    })
                }).on("scroll.fndtn.magellan", f.throttle(this.check_for_arrivals.bind(this), a.throttle_delay)), d(c).on("resize.fndtn.magellan", f.throttle(this.set_expedition_position.bind(this), a.throttle_delay))
            },
            check_for_arrivals: function() {
                var b = this;
                b.update_arrivals(), b.update_expedition_positions()
            },
            set_expedition_position: function() {
                var a = this;
                d("[" + this.attr_name() + "=fixed]", a.scope).each(function() {
                    var i, h = d(this),
                        g = h.data("magellan-expedition-init"),
                        b = h.attr("styles");
                    h.attr("style", ""), i = h.offset().top + g.threshold, h.data(a.data_attr("magellan-top-offset"), i), h.attr("style", b)
                })
            },
            update_expedition_positions: function() {
                var b = this,
                    a = d(c).scrollTop();
                d("[" + this.attr_name() + "=fixed]", b.scope).each(function() {
                    var h = d(this),
                        k = h.data("magellan-expedition-init"),
                        j = h.data("magellan-top-offset");
                    if (a >= j) {
                        var i = h.prev("[" + b.add_namespace("data-magellan-expedition-clone") + "]");
                        0 === i.length && (i = h.clone(), i.removeAttr(b.attr_name()), i.attr(b.add_namespace("data-magellan-expedition-clone"), ""), h.before(i)), h.css({
                            position: "fixed",
                            top: k.fixed_top
                        })
                    } else {
                        h.prev("[" + b.add_namespace("data-magellan-expedition-clone") + "]").remove(), h.attr("style", "").removeClass("fixed")
                    }
                })
            },
            update_arrivals: function() {
                var b = this,
                    a = d(c).scrollTop();
                d("[" + this.attr_name() + "]", b.scope).each(function() {
                    var i = d(this),
                        m = i.data(b.attr_name(!0) + "-init"),
                        l = b.offsets(i, a),
                        k = i.find("[" + b.add_namespace("data-magellan-arrival") + "]"),
                        j = !1;
                    l.each(function(e, h) {
                        if (h.viewport_offset >= h.top_offset) {
                            var g = i.find("[" + b.add_namespace("data-magellan-arrival") + "]");
                            return g.not(h.arrival).removeClass(m.active_class), h.arrival.addClass(m.active_class), j = !0, !0
                        }
                    }), j || k.removeClass(m.active_class)
                })
            },
            offsets: function(a, j) {
                var i = this,
                    h = a.data(i.attr_name(!0) + "-init"),
                    g = j;
                return a.find("[" + i.add_namespace("data-magellan-arrival") + "]").map(function() {
                    var f = d(this).data(i.data_attr("magellan-arrival")),
                        e = d("[" + i.add_namespace("data-magellan-destination") + "=" + f + "]");
                    if (e.length > 0) {
                        var b = e.offset().top - h.destination_threshold - a.outerHeight();
                        return {
                            destination: e,
                            arrival: d(this),
                            top_offset: b,
                            viewport_offset: g
                        }
                    }
                }).sort(function(f, e) {
                    return f.top_offset < e.top_offset ? -1 : f.top_offset > e.top_offset ? 1 : 0
                })
            },
            data_attr: function(b) {
                return this.namespace.length > 0 ? this.namespace + "-" + b : b
            },
            off: function() {
                this.S(this.scope).off(".magellan"), this.S(c).off(".magellan")
            },
            reflow: function() {
                var a = this;
                d("[" + a.add_namespace("data-magellan-expedition-clone") + "]", a.scope).remove()
            }
        }
    }(jQuery, window, window.document),
    function() {
        Foundation.libs.offcanvas = {
            name: "offcanvas",
            version: "5.3.1",
            settings: {
                open_method: "move",
                close_on_click: !0
            },
            init: function(e, d, f) {
                this.bindings(d, f)
            },
            events: function() {
                var g = this,
                    f = g.S,
                    j = "",
                    i = "",
                    h = "";
                "move" === this.settings.open_method ? (j = "move-", i = "right", h = "left") : "overlap" === this.settings.open_method && (j = "offcanvas-overlap"), f(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(a) {
                    g.click_toggle_class(a, j + i)
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(a) {
                    var c = g.get_settings(a);
                    c.close_on_click && g.hide.call(g, j + i, g.get_wrapper(a))
                }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(a) {
                    g.click_toggle_class(a, j + h)
                }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(a) {
                    var c = g.get_settings(a);
                    c.close_on_click && g.hide.call(g, j + h, g.get_wrapper(a))
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(a) {
                    g.click_remove_class(a, j + h), i && g.click_remove_class(a, j + i)
                })
            },
            toggle: function(d, c) {
                c = c || this.get_wrapper(), c.is("." + d) ? this.hide(d, c) : this.show(d, c)
            },
            show: function(d, c) {
                c = c || this.get_wrapper(), c.trigger("open").trigger("open.fndtn.offcanvas"), c.addClass(d)
            },
            hide: function(d, c) {
                c = c || this.get_wrapper(), c.trigger("close").trigger("close.fndtn.offcanvas"), c.removeClass(d)
            },
            click_toggle_class: function(e, d) {
                e.preventDefault();
                var f = this.get_wrapper(e);
                this.toggle(d, f)
            },
            click_remove_class: function(e, d) {
                e.preventDefault();
                var f = this.get_wrapper(e);
                this.hide(d, f)
            },
            get_settings: function(d) {
                var c = this.S(d.target).closest("[" + this.attr_name() + "]");
                return c.data(this.attr_name(!0) + "-init") || this.settings
            },
            get_wrapper: function(d) {
                var c = this.S(d ? d.target : this.scope).closest(".off-canvas-wrap");
                return 0 === c.length && (c = this.S(".off-canvas-wrap")), c
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(r, q, p, o) {
        var n = function() {},
            m = function(w, v) {
                if (w.hasClass(v.slides_container_class)) {
                    return this
                }
                var u, t, i, h, g, d, c = this,
                    b = w,
                    a = 0,
                    x = !1;
                c.slides = function() {
                    return b.children(v.slide_selector)
                }, c.slides().first().addClass(v.active_slide_class), c.update_slide_number = function(e) {
                    v.slide_number && (t.find("span:first").text(parseInt(e) + 1), t.find("span:last").text(c.slides().length)), v.bullets && (i.children().removeClass(v.bullets_active_class), r(i.children().get(e)).addClass(v.bullets_active_class))
                }, c.update_active_link = function(e) {
                    var f = r('[data-orbit-link="' + c.slides().eq(e).attr("data-orbit-slide") + '"]');
                    f.siblings().removeClass(v.bullets_active_class), f.addClass(v.bullets_active_class)
                }, c.build_markup = function() {
                    b.wrap('<div class="' + v.container_class + '"></div>'), u = b.parent(), b.addClass(v.slides_container_class), v.stack_on_small && u.addClass(v.stack_on_small_class), v.navigation_arrows && (u.append(r('<a href="#"><span></span></a>').addClass(v.prev_class)), u.append(r('<a href="#"><span></span></a>').addClass(v.next_class))), v.timer && (h = r("<div>").addClass(v.timer_container_class), h.append("<span>"), h.append(r("<div>").addClass(v.timer_progress_class)), h.addClass(v.timer_paused_class), u.append(h)), v.slide_number && (t = r("<div>").addClass(v.slide_number_class), t.append("<span></span> " + v.slide_number_text + " <span></span>"), u.append(t)), v.bullets && (i = r("<ol>").addClass(v.bullets_container_class), u.append(i), i.wrap('<div class="orbit-bullets-container"></div>'), c.slides().each(function(e) {
                        var f = r("<li>").attr("data-orbit-slide", e).on("click", c.link_bullet);
                        i.append(f)
                    }))
                }, c._goto = function(f, D) {
                    if (f === a) {
                        return !1
                    }
                    "object" == typeof d && d.restart();
                    var C = c.slides(),
                        B = "next";
                    if (x = !0, a > f && (B = "prev"), f >= C.length) {
                        if (!v.circular) {
                            return !1
                        }
                        f = 0
                    } else {
                        if (0 > f) {
                            if (!v.circular) {
                                return !1
                            }
                            f = C.length - 1
                        }
                    }
                    var A = r(C.get(a)),
                        z = r(C.get(f));
                    A.css("zIndex", 2), A.removeClass(v.active_slide_class), z.css("zIndex", 4).addClass(v.active_slide_class), b.trigger("before-slide-change.fndtn.orbit"), v.before_slide_change(), c.update_active_link(f);
                    var y = function() {
                        var e = function() {
                            a = f, x = !1, D === !0 && (d = c.create_timer(), d.start()), c.update_slide_number(a), b.trigger("after-slide-change.fndtn.orbit", [{
                                slide_number: a,
                                total_slides: C.length
                            }]), v.after_slide_change(a, C.length)
                        };
                        b.height() != z.height() && v.variable_height ? b.animate({
                            height: z.height()
                        }, 250, "linear", e) : e()
                    };
                    if (1 === C.length) {
                        return y(), !1
                    }
                    var s = function() {
                        "next" === B && g.next(A, z, y), "prev" === B && g.prev(A, z, y)
                    };
                    z.height() > b.height() && v.variable_height ? b.animate({
                        height: z.height()
                    }, 250, "linear", s) : s()
                }, c.next = function(e) {
                    e.stopImmediatePropagation(), e.preventDefault(), c._goto(a + 1)
                }, c.prev = function(e) {
                    e.stopImmediatePropagation(), e.preventDefault(), c._goto(a - 1)
                }, c.link_custom = function(e) {
                    e.preventDefault();
                    var s = r(this).attr("data-orbit-link");
                    if ("string" == typeof s && "" != (s = r.trim(s))) {
                        var f = u.find("[data-orbit-slide=" + s + "]"); - 1 != f.index() && c._goto(f.index())
                    }
                }, c.link_bullet = function() {
                    var e = r(this).attr("data-orbit-slide");
                    if ("string" == typeof e && "" != (e = r.trim(e))) {
                        if (isNaN(parseInt(e))) {
                            var f = u.find("[data-orbit-slide=" + e + "]"); - 1 != f.index() && c._goto(f.index() + 1)
                        } else {
                            c._goto(parseInt(e))
                        }
                    }
                }, c.timer_callback = function() {
                    c._goto(a + 1, !0)
                }, c.compute_dimensions = function() {
                    var e = r(c.slides().get(a)),
                        f = e.height();
                    v.variable_height || c.slides().each(function() {
                        r(this).height() > f && (f = r(this).height())
                    }), b.height(f)
                }, c.create_timer = function() {
                    var e = new l(u.find("." + v.timer_container_class), v, c.timer_callback);
                    return e
                }, c.stop_timer = function() {
                    "object" == typeof d && d.stop()
                }, c.toggle_timer = function() {
                    var e = u.find("." + v.timer_container_class);
                    e.hasClass(v.timer_paused_class) ? ("undefined" == typeof d && (d = c.create_timer()), d.start()) : "object" == typeof d && d.stop()
                }, c.init = function() {
                    c.build_markup(), v.timer && (d = c.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), d.start)), g = new j(v, b), "slide" === v.animation && (g = new k(v, b)), u.on("click", "." + v.next_class, c.next), u.on("click", "." + v.prev_class, c.prev), v.next_on_click && u.on("click", "." + v.slides_container_class + " [data-orbit-slide]", c.link_bullet), u.on("click", c.toggle_timer), v.swipe && u.on("touchstart.fndtn.orbit", function(f) {
                        f.touches || (f = f.originalEvent);
                        var e = {
                            start_page_x: f.touches[0].pageX,
                            start_page_y: f.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: o
                        };
                        u.data("swipe-transition", e), f.stopPropagation()
                    }).on("touchmove.fndtn.orbit", function(f) {
                        if (f.touches || (f = f.originalEvent), !(f.touches.length > 1 || f.scale && 1 !== f.scale)) {
                            var e = u.data("swipe-transition");
                            if ("undefined" == typeof e && (e = {}), e.delta_x = f.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(f.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                                f.preventDefault();
                                var s = e.delta_x < 0 ? a + 1 : a - 1;
                                e.active = !0, c._goto(s)
                            }
                        }
                    }).on("touchend.fndtn.orbit", function(e) {
                        u.data("swipe-transition", {}), e.stopPropagation()
                    }), u.on("mouseenter.fndtn.orbit", function() {
                        v.timer && v.pause_on_hover && c.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function() {
                        v.timer && v.resume_on_mouseout && d.start()
                    }), r(p).on("click", "[data-orbit-link]", c.link_custom), r(q).on("load resize", c.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), c.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                        u.prev("." + v.preloader_class).css("display", "none"), c.update_slide_number(0), c.update_active_link(0), b.trigger("ready.fndtn.orbit")
                    })
                }, c.init()
            },
            l = function(A, z, y) {
                var x, w, v = this,
                    u = z.timer_speed,
                    t = A.find("." + z.timer_progress_class),
                    s = -1;
                this.update_progress = function(d) {
                    var c = t.clone();
                    c.attr("style", ""), c.css("width", d + "%"), t.replaceWith(c), t = c
                }, this.restart = function() {
                    clearTimeout(w), A.addClass(z.timer_paused_class), s = -1, v.update_progress(0)
                }, this.start = function() {
                    return A.hasClass(z.timer_paused_class) ? (s = -1 === s ? u : s, A.removeClass(z.timer_paused_class), x = (new Date).getTime(), t.animate({
                        width: "100%"
                    }, s, "linear"), w = setTimeout(function() {
                        v.restart(), y()
                    }, s), void A.trigger("timer-started.fndtn.orbit")) : !0
                }, this.stop = function() {
                    if (A.hasClass(z.timer_paused_class)) {
                        return !0
                    }
                    clearTimeout(w), A.addClass(z.timer_paused_class);
                    var b = (new Date).getTime();
                    s -= b - x;
                    var a = 100 - s / u * 100;
                    v.update_progress(a), A.trigger("timer-stopped.fndtn.orbit")
                }
            },
            k = function(a) {
                var s = a.animation_speed,
                    i = 1 === r("html[dir=rtl]").length,
                    h = i ? "marginRight" : "marginLeft",
                    g = {};
                g[h] = "0%", this.next = function(e, c, f) {
                    e.animate({
                        marginLeft: "-100%"
                    }, s), c.animate(g, s, function() {
                        e.css(h, "100%"), f()
                    })
                }, this.prev = function(e, c, f) {
                    e.animate({
                        marginLeft: "100%"
                    }, s), c.css(h, "-100%"), c.animate(g, s, function() {
                        e.css(h, "100%"), f()
                    })
                }
            },
            j = function(a) {
                var d = a.animation_speed;
                1 === r("html[dir=rtl]").length;
                this.next = function(e, c, f) {
                    c.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), c.animate({
                        opacity: "1"
                    }, d, "linear", function() {
                        e.css("margin", "100%"), f()
                    })
                }, this.prev = function(e, c, f) {
                    c.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), c.animate({
                        opacity: "1"
                    }, d, "linear", function() {
                        e.css("margin", "100%"), f()
                    })
                }
            };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.3.1",
            settings: {
                animation: "slide",
                timer_speed: 10000,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                next_on_click: !0,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                preloader_class: "preloader",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: n,
                after_slide_change: n
            },
            init: function(e, d, f) {
                this.bindings(d, f)
            },
            events: function(d) {
                var c = new m(this.S(d), this.S(d).data("orbit-init"));
                this.S(d).data(self.name + "-instance", c)
            },
            reflow: function() {
                var e = this;
                if (e.S(e.scope).is("[data-orbit]")) {
                    var d = e.S(e.scope),
                        f = d.data(e.name + "-instance");
                    f.compute_dimensions()
                } else {
                    e.S("[data-orbit]", e.scope).each(function(a, i) {
                        var h = e.S(i),
                            g = (e.data_options(h), h.data(e.name + "-instance"));
                        g.compute_dimensions()
                    })
                }
            }
        }
    }(jQuery, window, window.document),
    function(g, f, j, i) {
        function h(e) {
            var d = /fade/i.test(e),
                k = /pop/i.test(e);
            return {
                animate: d || k,
                pop: k,
                fade: d
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.3.1",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                root_element: "body",
                open: function() {},
                opened: function() {},
                close: function() {},
                closed: function() {},
                bg: g(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function(a, k, e) {
                g.extend(!0, this.settings, k, e), this.bindings(k, e)
            },
            events: function() {
                var d = this,
                    c = d.S;
                return c(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(l) {
                    if (l.preventDefault(), !d.locked) {
                        var k = c(this),
                            b = k.data(d.data_attr("reveal-ajax"));
                        if (d.locked = !0, "undefined" == typeof b) {
                            d.open.call(d, k)
                        } else {
                            var a = b === !0 ? k.attr("href") : b;
                            d.open.call(d, k, {
                                url: a
                            })
                        }
                    }
                }), c(j).on("touchend.fndtn.reveal click.fndtn.reveal", this.close_targets(), function(k) {
                    if (k.preventDefault(), !d.locked) {
                        var b = c("[" + d.attr_name() + "].open").data(d.attr_name(!0) + "-init"),
                            a = c(k.target)[0] === c("." + b.bg_class)[0];
                        if (a) {
                            if (!b.close_on_background_click) {
                                return
                            }
                            k.stopPropagation()
                        }
                        d.locked = !0, d.close.call(d, a ? c("[" + d.attr_name() + "].open") : c(this).closest("[" + d.attr_name() + "]"))
                    }
                }), c("[" + d.attr_name() + "]", this.scope).length > 0 ? c(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : c(this.scope).on("open.fndtn.reveal", "[" + d.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + d.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + d.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + d.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + d.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + d.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function() {
                var b = this;
                return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
                    var k = b.S("[" + b.attr_name() + "].open"),
                        e = k.data(b.attr_name(!0) + "-init");
                    e && 27 === a.which && e.close_on_esc && !b.locked && b.close.call(b, k)
                }), !0
            },
            key_up_off: function() {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function(a, p) {
                var o, n = this;
                a ? "undefined" != typeof a.selector ? o = n.S("#" + a.data(n.data_attr("reveal-id"))).first() : (o = n.S(this.scope), p = a) : o = n.S(this.scope);
                var m = o.data(n.attr_name(!0) + "-init");
                if (m = m || this.settings, o.hasClass("open") && a.attr("data-reveal-id") == o.attr("id")) {
                    return n.close(o)
                }
                if (!o.hasClass("open")) {
                    var l = n.S("[" + n.attr_name() + "].open");
                    if ("undefined" == typeof o.data("css-top") && o.data("css-top", parseInt(o.css("top"), 10)).data("offset", this.cache_offset(o)), this.key_up_on(o), o.trigger("open").trigger("open.fndtn.reveal"), l.length < 1 && this.toggle_bg(o, !0), "string" == typeof p && (p = {
                        url: p
                    }), "undefined" != typeof p && p.url) {
                        var k = "undefined" != typeof p.success ? p.success : null;
                        g.extend(p, {
                            success: function(d, q, e) {
                                g.isFunction(k) && k(d, q, e), o.html(d), n.S(o).foundation("section", "reflow"), n.S(o).children().foundation(), l.length > 0 && n.hide(l, m.css.close), n.show(o, m.css.open)
                            }
                        }), g.ajax(p)
                    } else {
                        l.length > 0 && this.hide(l, m.css.close), this.show(o, m.css.open)
                    }
                }
            },
            close: function(e) {
                var e = e && e.length ? e : this.S(this.scope),
                    d = this.S("[" + this.attr_name() + "].open"),
                    k = e.data(this.attr_name(!0) + "-init") || this.settings;
                d.length > 0 && (this.locked = !0, this.key_up_off(e), e.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(e, !1), this.hide(d, k.css.close, k))
            },
            close_targets: function() {
                var b = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? b + ", ." + this.settings.bg_class : b
            },
            toggle_bg: function(a, k) {
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = g("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide());
                var d = this.settings.bg.filter(":visible").length > 0;
                k != d && ((k == i ? d : !k) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
            },
            show: function(n, m) {
                if (m) {
                    var l = n.data(this.attr_name(!0) + "-init") || this.settings,
                        k = l.root_element;
                    if (0 === n.parent(k).length) {
                        var e = n.wrap('<div style="display: none;" />').parent();
                        n.on("closed.fndtn.reveal.wrapped", function() {
                            n.detach().appendTo(e), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), n.detach().appendTo(k)
                    }
                    var b = h(l.animation);
                    if (b.animate || (this.locked = !1), b.pop) {
                        m.top = g(f).scrollTop() - n.data("offset") + "px";
                        var a = {
                            top: g(f).scrollTop() + n.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return n.css(m).animate(a, l.animation_speed, "linear", function() {
                                this.locked = !1, n.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), l.animation_speed / 2)
                    }
                    if (b.fade) {
                        m.top = g(f).scrollTop() + n.data("css-top") + "px";
                        var a = {
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return n.css(m).animate(a, l.animation_speed, "linear", function() {
                                this.locked = !1, n.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), l.animation_speed / 2)
                    }
                    return n.css(m).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
                }
                var l = this.settings;
                return h(l.animation).fade ? n.fadeIn(l.animation_speed / 2) : (this.locked = !1, n.show())
            },
            hide: function(l, k) {
                if (k) {
                    var e = l.data(this.attr_name(!0) + "-init");
                    e = e || this.settings;
                    var b = h(e.animation);
                    if (b.animate || (this.locked = !1), b.pop) {
                        var a = {
                            top: -g(f).scrollTop() - l.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return l.animate(a, e.animation_speed, "linear", function() {
                                this.locked = !1, l.css(k).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), e.animation_speed / 2)
                    }
                    if (b.fade) {
                        var a = {
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return l.animate(a, e.animation_speed, "linear", function() {
                                this.locked = !1, l.css(k).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), e.animation_speed / 2)
                    }
                    return l.hide().css(k).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
                }
                var e = this.settings;
                return h(e.animation).fade ? l.fadeOut(e.animation_speed / 2) : l.hide()
            },
            close_video: function(a) {
                var k = g(".flex-video", a.target),
                    e = g("iframe", k);
                e.length > 0 && (e.attr("data-src", e[0].src), e.attr("src", e.attr("src")), k.hide())
            },
            open_video: function(a) {
                var m = g(".flex-video", a.target),
                    l = m.find("iframe");
                if (l.length > 0) {
                    var k = l.attr("data-src");
                    if ("string" == typeof k) {
                        l[0].src = l.attr("data-src")
                    } else {
                        var d = l[0].src;
                        l[0].src = i, l[0].src = d
                    }
                    m.show()
                }
            },
            data_attr: function(b) {
                return this.namespace.length > 0 ? this.namespace + "-" + b : b
            },
            cache_offset: function(d) {
                var c = d.show().height() + parseInt(d.css("top"), 10);
                return d.hide(), c
            },
            off: function() {
                g(this.scope).off(".fndtn.reveal")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(d, c) {
        Foundation.libs.slider = {
            name: "slider",
            version: "5.3.1",
            settings: {
                start: 0,
                end: 100,
                step: 1,
                initial: null,
                display_selector: "",
                vertical: !1,
                on_change: function() {}
            },
            cache: {},
            init: function(f, e, g) {
                Foundation.inherit(this, "throttle"), this.bindings(e, g), this.reflow()
            },
            events: function() {
                var a = this;
                d(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + a.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(e) {
                    a.cache.active || (e.preventDefault(), a.set_active_slider(d(e.target)))
                }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(f) {
                    if (a.cache.active) {
                        if (f.preventDefault(), d.data(a.cache.active[0], "settings").vertical) {
                            var b = 0;
                            f.pageY || (b = c.scrollY), a.calculate_position(a.cache.active, (f.pageY || f.originalEvent.clientY || f.originalEvent.touches[0].clientY || f.currentPoint.y) + b)
                        } else {
                            a.calculate_position(a.cache.active, f.pageX || f.originalEvent.clientX || f.originalEvent.touches[0].clientX || f.currentPoint.x)
                        }
                    }
                }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                    a.remove_active_slider()
                }).on("change.fndtn.slider", function() {
                    a.settings.on_change()
                }), a.S(c).on("resize.fndtn.slider", a.throttle(function() {
                    a.reflow()
                }, 300))
            },
            set_active_slider: function(b) {
                this.cache.active = b
            },
            remove_active_slider: function() {
                this.cache.active = null
            },
            calculate_position: function(a, l) {
                var k = this,
                    j = d.data(a[0], "settings"),
                    i = (d.data(a[0], "handle_l"), d.data(a[0], "handle_o"), d.data(a[0], "bar_l")),
                    h = d.data(a[0], "bar_o");
                requestAnimationFrame(function() {
                    var b;
                    b = Foundation.rtl && !j.vertical ? k.limit_to((h + i - l) / i, 0, 1) : k.limit_to((l - h) / i, 0, 1), b = j.vertical ? 1 - b : b;
                    var e = k.normalized_value(b, j.start, j.end, j.step);
                    k.set_ui(a, e)
                })
            },
            set_ui: function(a, p) {
                var o = d.data(a[0], "settings"),
                    n = d.data(a[0], "handle_l"),
                    m = d.data(a[0], "bar_l"),
                    l = this.normalized_percentage(p, o.start, o.end),
                    k = l * (m - n) - 1,
                    j = 100 * l;
                Foundation.rtl && !o.vertical && (k = -k), k = o.vertical ? -k + m - n + 1 : k, this.set_translate(a, k, o.vertical), o.vertical ? a.siblings(".range-slider-active-segment").css("height", j + "%") : a.siblings(".range-slider-active-segment").css("width", j + "%"), a.parent().attr(this.attr_name(), p).trigger("change").trigger("change.fndtn.slider"), a.parent().children("input[type=hidden]").val(p), "" != o.input_id && d(o.display_selector).each(function() {
                    this.hasOwnProperty("value") ? d(this).val(p) : d(this).text(p)
                })
            },
            normalized_percentage: function(f, e, g) {
                return (f - e) / (g - e)
            },
            normalized_value: function(r, q, p, o) {
                var n = p - q,
                    m = r * n,
                    l = (m - m % o) / o,
                    k = m % o,
                    j = k >= 0.5 * o ? o : 0;
                return l * o + j + q
            },
            set_translate: function(a, f, e) {
                e ? d(a).css("-webkit-transform", "translateY(" + f + "px)").css("-moz-transform", "translateY(" + f + "px)").css("-ms-transform", "translateY(" + f + "px)").css("-o-transform", "translateY(" + f + "px)").css("transform", "translateY(" + f + "px)") : d(a).css("-webkit-transform", "translateX(" + f + "px)").css("-moz-transform", "translateX(" + f + "px)").css("-ms-transform", "translateX(" + f + "px)").css("-o-transform", "translateX(" + f + "px)").css("transform", "translateX(" + f + "px)")
            },
            limit_to: function(f, e, g) {
                return Math.min(Math.max(f, e), g)
            },
            initialize_settings: function(a) {
                var e = d.extend({}, this.settings, this.data_options(d(a).parent()));
                e.vertical ? (d.data(a, "bar_o", d(a).parent().offset().top), d.data(a, "bar_l", d(a).parent().outerHeight()), d.data(a, "handle_o", d(a).offset().top), d.data(a, "handle_l", d(a).outerHeight())) : (d.data(a, "bar_o", d(a).parent().offset().left), d.data(a, "bar_l", d(a).parent().outerWidth()), d.data(a, "handle_o", d(a).offset().left), d.data(a, "handle_l", d(a).outerWidth())), d.data(a, "bar", d(a).parent()), d.data(a, "settings", e)
            },
            set_initial_position: function(a) {
                var h = d.data(a.children(".range-slider-handle")[0], "settings"),
                    g = h.initial ? h.initial : Math.floor(0.5 * (h.end - h.start) / h.step) * h.step + h.start,
                    f = a.children(".range-slider-handle");
                this.set_ui(f, g)
            },
            set_value: function(a) {
                var e = this;
                d("[" + e.attr_name() + "]", this.scope).each(function() {
                    d(this).attr(e.attr_name(), a)
                }), d(this.scope).attr(e.attr_name()) && d(this.scope).attr(e.attr_name(), a), e.reflow()
            },
            reflow: function() {
                var a = this;
                a.S("[" + this.attr_name() + "]").each(function() {
                    var e = d(this).children(".range-slider-handle")[0],
                        b = d(this).attr(a.attr_name());
                    a.initialize_settings(e), b ? a.set_ui(d(e), parseFloat(b)) : a.set_initial_position(d(this))
                })
            }
        }
    }(jQuery, window, window.document),
    function(f, e, h, g) {
        Foundation.libs.tab = {
            name: "tab",
            version: "5.3.1",
            settings: {
                active_class: "active",
                callback: function() {},
                deep_linking: !1,
                scroll_to_content: !0,
                is_hover: !1
            },
            default_tab_hashes: [],
            init: function(j, i, m) {
                var l = this,
                    k = this.S;
                this.bindings(i, m), this.handle_location_hash_change(), k("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                    l.default_tab_hashes.push(this.hash)
                })
            },
            events: function() {
                var b = this,
                    d = this.S;
                d(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
                    var c = d(this).closest("[" + b.attr_name() + "]").data(b.attr_name(!0) + "-init");
                    (!c.is_hover || Modernizr.touch) && (a.preventDefault(), a.stopPropagation(), b.toggle_active_tab(d(this).parent()))
                }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                    var a = d(this).closest("[" + b.attr_name() + "]").data(b.attr_name(!0) + "-init");
                    a.is_hover && b.toggle_active_tab(d(this).parent())
                }), d(e).on("hashchange.fndtn.tab", function(a) {
                    a.preventDefault(), b.handle_location_hash_change()
                })
            },
            handle_location_hash_change: function() {
                var a = this,
                    d = this.S;
                d("[" + this.attr_name() + "]", this.scope).each(function() {
                    var l = d(this).data(a.attr_name(!0) + "-init");
                    if (l.deep_linking) {
                        var k = a.scope.location.hash;
                        if ("" != k) {
                            var j = d(k);
                            if (j.hasClass("content") && j.parent().hasClass("tab-content")) {
                                a.toggle_active_tab(f("[" + a.attr_name() + "] > * > a[href=" + k + "]").parent())
                            } else {
                                var c = j.closest(".content").attr("id");
                                c != g && a.toggle_active_tab(f("[" + a.attr_name() + "] > * > a[href=#" + c + "]").parent(), k)
                            }
                        } else {
                            for (var b in a.default_tab_hashes) {
                                a.toggle_active_tab(f("[" + a.attr_name() + "] > * > a[href=" + a.default_tab_hashes[b] + "]").parent())
                            }
                        }
                    }
                })
            },
            toggle_active_tab: function(t, s) {
                var r = this.S,
                    q = t.closest("[" + this.attr_name() + "]"),
                    p = t.children("a").first(),
                    o = "#" + p.attr("href").split("#")[1],
                    n = r(o),
                    d = t.siblings(),
                    b = q.data(this.attr_name(!0) + "-init");
                if (r(this).data(this.data_attr("tab-content")) && (o = "#" + r(this).data(this.data_attr("tab-content")).split("#")[1], n = r(o)), b.deep_linking) {
                    var a = f("body,html").scrollTop();
                    e.location.hash = s != g ? s : o, b.scroll_to_content ? s == g || s == o ? t.parent()[0].scrollIntoView() : r(o)[0].scrollIntoView() : (s == g || s == o) && f("body,html").scrollTop(a)
                }
                t.addClass(b.active_class).triggerHandler("opened"), d.removeClass(b.active_class), n.siblings().removeClass(b.active_class).end().addClass(b.active_class), b.callback(t), n.triggerHandler("toggled", [t]), q.triggerHandler("toggled", [n])
            },
            data_attr: function(b) {
                return this.namespace.length > 0 ? this.namespace + "-" + b : b
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(d, c) {
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.3.1",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                show_on: "all",
                tip_template: function(f, e) {
                    return '<span data-selector="' + f + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + e + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function(f, e, g) {
                Foundation.inherit(this, "random_str"), this.bindings(e, g)
            },
            should_show: function(a) {
                var e = d.extend({}, this.settings, this.data_options(a));
                return "all" === e.show_on ? !0 : this.small() && "small" === e.show_on ? !0 : this.medium() && "medium" === e.show_on ? !0 : this.large() && "large" === e.show_on ? !0 : !1
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            events: function(a) {
                var f = this,
                    e = f.S;
                f.create(this.S(a)), d(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(h) {
                    var k = e(this),
                        j = d.extend({}, f.settings, f.data_options(k)),
                        i = !1;
                    if (Modernizr.touch && /touchstart|MSPointerDown/i.test(h.type) && e(h.target).is("a")) {
                        return !1
                    }
                    if (/mouse/i.test(h.type) && f.ie_touch(h)) {
                        return !1
                    }
                    if (k.hasClass("open")) {
                        Modernizr.touch && /touchstart|MSPointerDown/i.test(h.type) && h.preventDefault(), f.hide(k)
                    } else {
                        if (j.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(h.type)) {
                            return
                        }!j.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(h.type) && (h.preventDefault(), e(j.tooltip_class + ".open").hide(), i = !0), /enter|over/i.test(h.type) ? this.timer = setTimeout(function() {
                            f.showTip(k)
                        }.bind(this), f.settings.hover_delay) : "mouseout" === h.type || "mouseleave" === h.type ? (clearTimeout(this.timer), f.hide(k)) : f.showTip(k)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(g) {
                    return /mouse/i.test(g.type) && f.ie_touch(g) ? !1 : void(("touch" != d(this).data("tooltip-open-event-type") || "mouseleave" != g.type) && ("mouse" == d(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(g.type) ? f.convert_to_touch(d(this)) : f.hide(d(this))))
                }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                    f.hide(e(this))
                })
            },
            ie_touch: function() {
                return !1
            },
            showTip: function(f) {
                var e = this.getTip(f);
                return this.should_show(f, e) ? this.show(f) : void 0
            },
            getTip: function(a) {
                var h = this.selector(a),
                    g = d.extend({}, this.settings, this.data_options(a)),
                    f = null;
                return h && (f = this.S('span[data-selector="' + h + '"]' + g.tooltip_class)), "object" == typeof f ? f : !1
            },
            selector: function(f) {
                var e = f.attr("id"),
                    g = f.attr(this.attr_name()) || f.attr("data-selector");
                return (e && e.length < 1 || !e) && "string" != typeof g && (g = this.random_str(6), f.attr("data-selector", g)), e && e.length > 0 ? e : g
            },
            create: function(l) {
                var k = this,
                    j = d.extend({}, this.settings, this.data_options(l)),
                    i = this.settings.tip_template;
                "string" == typeof j.tip_template && c.hasOwnProperty(j.tip_template) && (i = c[j.tip_template]);
                var b = d(i(this.selector(l), d("<div></div>").html(l.attr("title")).html())),
                    a = this.inheritable_classes(l);
                b.addClass(a).appendTo(j.append_to), Modernizr.touch && (b.append('<span class="tap-to-close">' + j.touch_close_text + "</span>"), b.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                    k.hide(l)
                })), l.removeAttr("title").attr("title", "")
            },
            reposition: function(r, q, p) {
                var o, n, m, l, k;
                if (q.css("visibility", "hidden").show(), o = r.data("width"), n = q.children(".nub"), m = n.outerHeight(), l = n.outerHeight(), q.css(this.small() ? {
                    width: "100%"
                } : {
                    width: o ? o : "auto"
                }), k = function(g, f, j, i, h) {
                    return g.css({
                        top: f ? f : "auto",
                        bottom: i ? i : "auto",
                        left: h ? h : "auto",
                        right: j ? j : "auto"
                    }).end()
                }, k(q, r.offset().top + r.outerHeight() + 10, "auto", "auto", r.offset().left), this.small()) {
                    k(q, r.offset().top + r.outerHeight() + 10, "auto", "auto", 12.5, d(this.scope).width()), q.addClass("tip-override"), k(n, -m, "auto", "auto", r.offset().left)
                } else {
                    var a = r.offset().left;
                    Foundation.rtl && (n.addClass("rtl"), a = r.offset().left + r.outerWidth() - q.outerWidth()), k(q, r.offset().top + r.outerHeight() + 10, "auto", "auto", a), q.removeClass("tip-override"), p && p.indexOf("tip-top") > -1 ? (Foundation.rtl && n.addClass("rtl"), k(q, r.offset().top - q.outerHeight(), "auto", "auto", a).removeClass("tip-override")) : p && p.indexOf("tip-left") > -1 ? (k(q, r.offset().top + r.outerHeight() / 2 - q.outerHeight() / 2, "auto", "auto", r.offset().left - q.outerWidth() - m).removeClass("tip-override"), n.removeClass("rtl")) : p && p.indexOf("tip-right") > -1 && (k(q, r.offset().top + r.outerHeight() / 2 - q.outerHeight() / 2, "auto", "auto", r.offset().left + r.outerWidth() + m).removeClass("tip-override"), n.removeClass("rtl"))
                }
                q.css("visibility", "visible").hide()
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            inheritable_classes: function(a) {
                var j = d.extend({}, this.settings, this.data_options(a)),
                    i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(j.additional_inheritable_classes),
                    h = a.attr("class"),
                    g = h ? d.map(h.split(" "), function(e) {
                        return -1 !== d.inArray(e, i) ? e : void 0
                    }).join(" ") : "";
                return d.trim(g)
            },
            convert_to_touch: function(a) {
                var h = this,
                    g = h.getTip(a),
                    f = d.extend({}, h.settings, h.data_options(a));
                0 === g.find(".tap-to-close").length && (g.append('<span class="tap-to-close">' + f.touch_close_text + "</span>"), g.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                    h.hide(a)
                })), a.data("tooltip-open-event-type", "touch")
            },
            show: function(f) {
                var e = this.getTip(f);
                "touch" == f.data("tooltip-open-event-type") && this.convert_to_touch(f), this.reposition(f, e, f.attr("class")), f.addClass("open"), e.fadeIn(150)
            },
            hide: function(f) {
                var e = this.getTip(f);
                e.fadeOut(150, function() {
                    e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), f.removeClass("open")
                })
            },
            off: function() {
                var a = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(b) {
                    d("[" + a.attr_name() + "]").eq(b).attr("title", d(this).text())
                }).remove()
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(e, d, f) {
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.3.1",
            settings: {
                index: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                is_hover: !0,
                scrolltop: !0,
                sticky_on: "all"
            },
            init: function(a, i, h) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var g = this;
                g.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, h), g.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var j = e(this),
                        l = j.data(g.attr_name(!0) + "-init");
                    g.S("section", this);
                    j.data("index", 0);
                    var k = j.parent();
                    k.hasClass("fixed") || g.is_sticky(j, k, l) ? (g.settings.sticky_class = l.sticky_class, g.settings.sticky_topbar = j, j.data("height", k.outerHeight()), j.data("stickyoffset", k.offset().top)) : j.data("height", j.outerHeight()), l.assembled || g.assemble(j), l.is_hover ? g.S(".has-dropdown", j).addClass("not-click") : g.S(".has-dropdown", j).removeClass("not-click"), g.add_custom_rule(".f-topbar-fixed { padding-top: " + j.data("height") + "px }"), k.hasClass("fixed") && g.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function(h, g, j) {
                var i = g.hasClass(j.sticky_class);
                return i && "all" === j.sticky_on ? !0 : i && this.small() && "small" === j.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : i && this.medium() && "medium" === j.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : i && this.large() && "large" === j.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
            },
            toggle: function(j) {
                var i, h = this;
                i = j ? h.S(j).closest("[" + this.attr_name() + "]") : h.S("[" + this.attr_name() + "]");
                var b = i.data(this.attr_name(!0) + "-init"),
                    a = h.S("section, .section", i);
                h.breakpoint() && (h.rtl ? (a.css({
                    right: "0%"
                }), e(">.name", a).css({
                    right: "100%"
                })) : (a.css({
                    left: "0%"
                }), e(">.name", a).css({
                    left: "100%"
                })), h.S("li.moved", a).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), b.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (b.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), h.S("body").removeClass("f-topbar-fixed"), d.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), h.S("body").addClass("f-topbar-fixed")) : (h.is_sticky(i, i.parent(), b) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), h.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), h.update_sticky_positioning())))
            },
            timer: null,
            events: function() {
                var b = this,
                    a = this.S;
                a(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(c) {
                    c.preventDefault(), b.toggle(this)
                }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                    var c = e(this).closest("li");
                    !b.breakpoint() || c.hasClass("back") || c.hasClass("has-dropdown") || b.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(c) {
                    var l = a(this),
                        k = a(c.target),
                        j = l.closest("[" + b.attr_name() + "]"),
                        i = j.data(b.attr_name(!0) + "-init");
                    return k.data("revealId") ? void b.toggle() : void(b.breakpoint() || (!i.is_hover || Modernizr.touch) && (c.stopImmediatePropagation(), l.hasClass("hover") ? (l.removeClass("hover").find("li").removeClass("hover"), l.parents("li.hover").removeClass("hover")) : (l.addClass("hover"), e(l).siblings().removeClass("hover"), "A" === k[0].nodeName && k.parent().hasClass("has-dropdown") && c.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(h) {
                    if (b.breakpoint()) {
                        h.preventDefault();
                        var c = a(this),
                            k = c.closest("[" + b.attr_name() + "]"),
                            j = k.find("section, .section"),
                            i = (c.next(".dropdown").outerHeight(), c.closest("li"));
                        k.data("index", k.data("index") + 1), i.addClass("moved"), b.rtl ? (j.css({
                            right: -(100 * k.data("index")) + "%"
                        }), j.find(">.name").css({
                            right: 100 * k.data("index") + "%"
                        })) : (j.css({
                            left: -(100 * k.data("index")) + "%"
                        }), j.find(">.name").css({
                            left: 100 * k.data("index") + "%"
                        })), k.css("height", c.siblings("ul").outerHeight(!0) + k.data("height"))
                    }
                }), a(d).off(".topbar").on("resize.fndtn.topbar", b.throttle(function() {
                    b.resize.call(b)
                }, 50)).trigger("resize").trigger("resize.fndtn.topbar"), a("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function(g) {
                    var c = a(g.target).closest("li").closest("li.hover");
                    c.length > 0 || a("[" + b.attr_name() + "] li.hover").removeClass("hover")
                }), a(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(i) {
                    i.preventDefault();
                    var c = a(this),
                        m = c.closest("[" + b.attr_name() + "]"),
                        l = m.find("section, .section"),
                        k = (m.data(b.attr_name(!0) + "-init"), c.closest("li.moved")),
                        j = k.parent();
                    m.data("index", m.data("index") - 1), b.rtl ? (l.css({
                        right: -(100 * m.data("index")) + "%"
                    }), l.find(">.name").css({
                        right: 100 * m.data("index") + "%"
                    })) : (l.css({
                        left: -(100 * m.data("index")) + "%"
                    }), l.find(">.name").css({
                        left: 100 * m.data("index") + "%"
                    })), 0 === m.data("index") ? m.css("height", "") : m.css("height", j.outerHeight(!0) + m.data("height")), setTimeout(function() {
                        k.removeClass("moved")
                    }, 300)
                })
            },
            resize: function() {
                var b = this;
                b.S("[" + this.attr_name() + "]").each(function() {
                    var a, j = b.S(this),
                        i = j.data(b.attr_name(!0) + "-init"),
                        h = j.parent("." + b.settings.sticky_class);
                    if (!b.breakpoint()) {
                        var c = j.hasClass("expanded");
                        j.css("height", "").removeClass("expanded").find("li").removeClass("hover"), c && b.toggle(j)
                    }
                    b.is_sticky(j, h, i) && (h.hasClass("fixed") ? (h.removeClass("fixed"), a = h.offset().top, b.S(f.body).hasClass("f-topbar-fixed") && (a -= j.data("height")), j.data("stickyoffset", a), h.addClass("fixed")) : (a = h.offset().top, j.data("stickyoffset", a)))
                })
            },
            breakpoint: function() {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function(a) {
                var i = this,
                    h = a.data(this.attr_name(!0) + "-init"),
                    g = i.S("section", a);
                g.detach(), i.S(".has-dropdown>a", g).each(function() {
                    var c, k = i.S(this),
                        j = k.siblings(".dropdown");
                    k.attr("href");
                    j.find(".title.back").length || (c = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>'), e("h5>a", c).html(1 == h.custom_back_text ? h.back_text : "&laquo; " + k.html()), j.prepend(c))
                }), g.appendTo(a), this.sticky(), this.assembled(a)
            },
            assembled: function(a) {
                a.data(this.attr_name(!0), e.extend({}, a.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function(a) {
                var h = 0,
                    g = this;
                return e("> li", a).each(function() {
                    h += g.S(this).outerHeight(!0)
                }), h
            },
            sticky: function() {
                var b = this;
                this.S(d).on("scroll", function() {
                    b.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function() {
                var b = "." + this.settings.sticky_class,
                    i = this.S(d),
                    h = this;
                if (h.settings.sticky_topbar && h.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var g = this.settings.sticky_topbar.data("stickyoffset");
                    h.S(b).hasClass("expanded") || (i.scrollTop() > g ? h.S(b).hasClass("fixed") || (h.S(b).addClass("fixed"), h.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= g && h.S(b).hasClass("fixed") && (h.S(b).removeClass("fixed"), h.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function() {
                this.S(this.scope).off(".fndtn.topbar"), this.S(d).off(".fndtn.topbar")
            },
            reflow: function() {}
        }
    }(jQuery, this, this.document);



function highlightState(d) {
    d = d || {};
    d.touch = d.touch || {};
    d.hover = d.hover || {};
    var h = d.touch.selector || "a, button";
    var a = d.touch.className || "is-touched";
    var b = d.touch.waitSecond || 0.1;
    var e = d.hover.selector || "a, button";
    var c = d.hover.className || "is-hovered";
    var g = $(document);
    var f = 0;
    g.on("touchstart", h, function(k) {
        k.stopPropagation();
        f = Date.now();
        var m = $(k.currentTarget);
        var l = setTimeout(function() {
            m.addClass(a)
        }, 50);

        function j() {
            clearTimeout(l);
            m.removeClass(a);
            g.off("touchmove", j);
            g.off("touchend touchcancel", i)
        }

        function i() {
            setTimeout(j, b * 1000)
        }
        g.one("touchmove", j);
        g.one("touchend touchcancel", i)
    });
    g.on("mouseenter", e, function(i) {
        if (Date.now() - f < 600) {
            return
        }
        var j = $(i.currentTarget);
        j.addClass(c)
    });
    g.on("mouseleave", e, function(i) {
        var j = $(i.currentTarget);
        j.removeClass(c)
    })
};




(function($) {
    function swatchBeat() {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var tzoff = 60 + d.getTimezoneOffset();
        var time = ("000" + Math.floor((h * 3600 + (m + tzoff) * 60 + s) / 86.4) % 1000).slice(-3);
        $(".nav-secondary .beats span").html(time)
    }
    swatchBeat();
    var myVar = setInterval(function() {
        swatchBeat()
    }, 60000);
    var swatchRWD = {
        init: function() {
            $(".flashreplace").each(function(index) {
                var id = $(this).attr("id").replace(/flashreplace_/g, "");
                swatchRWD.replaceFlash(id)
            })
        },
        replaceFlash: function(activeIndex) {
            var currentSWFSetup = "";
            currentSWFSetup = eval("swfSetup['" + activeIndex + "']");
            if (($(window).width() >= currentSWFSetup.movieW) && (swfobject.getFlashPlayerVersion().major >= parseInt(currentSWFSetup.playerVersion))) {
                swfobject.embedSWF(currentSWFSetup.movie, currentSWFSetup.container, currentSWFSetup.movieW, currentSWFSetup.movieH, currentSWFSetup.playerVersion, null, {
                    locales: currentSWFSetup.locales,
                    assetPath: currentSWFSetup.assetPath
                }, {
                    bgcolor: currentSWFSetup.bgcolor,
                    play: currentSWFSetup.play,
                    loop: currentSWFSetup.loop,
                    quality: currentSWFSetup.quality,
                    wmode: currentSWFSetup.wmode,
                    "scale ": currentSWFSetup.scale,
                    menu: currentSWFSetup.menu,
                    devicefont: currentSWFSetup.devicefont,
                    salign: currentSWFSetup.salign,
                    allowScriptAccess: currentSWFSetup.allowScriptAccess
                }, {}, swatchRWD.outputStatus)
            } else {
                $("#" + currentSWFSetup.container).html('<img class="stageImg" src="' + currentSWFSetup.imageDefault + '" alt="Fallback-img" data-interchange="[' + currentSWFSetup.imageDefault + ", (default)], [" + currentSWFSetup.imageLarge + ', (large)]" />')
            }
        },
        outputStatus: function(e) {
            if (e.success === false) {}
        }
    };
    swatchRWD.init()
})(jQuery);



jQuery(function(a) {
    a.fn.swatchMainNavSmall = function(c) {
        var d = {};
        c = a.extend({}, d, c);
        obj = a(this);
        var b = "";
        var f = "init";
        var e = a(document).height();
        doNavResize = function(i) {
            startY = a("#navhead").height();
            winH = a(window).height();
            var h = a("#mainNavWrapper").offset();
            var g = a("#nav-overlay");
            if (g.length) {
                a("#nav-overlay").height(winH - startY - h.top);
                docH = a(document).height();
                a("#nav-overlay").height(docH - startY - h.top)
            }
        };
        setNavView = function() {
            if (a("#mainNavToggle").is(":visible")) {
                b = "S";
                a(".megaFlyOut").css({
                    top: "auto"
                });
                if (b != f) {
                    undelegateHandlers();
                    delegateHandlers(b);
                    a("#mainNav, .megaFlyOut, #nav-overlay").css({
                        display: "none"
                    });
                    var g = a(".megaFlyOut .dividedList ul").eq(0);
                    var h = a(".megaFlyOut .dividedList").eq(1);
                    h.hide();
                    h.find("li").addClass("movethis");
                    g.append(h.find("li"));
                    f = "S"
                }
            } else {
                b = "L";
                if (b != f) {
                    undelegateHandlers();
                    delegateHandlers(b);
                    a("#mainNav,.megaFlyOut, #nav-overlay").removeAttr("style");
                    a(".subList ul").show();
                    var g = a(".megaFlyOut .dividedList ul").eq(0);
                    var h = a(".megaFlyOut .dividedList").eq(1);
                    h.show();
                    h.find("ul").append(g.find(".movethis"));
                    f = "L"
                }
                flyoutTop = a("#mainNavWrapper").height();
                a(".megaFlyOut").css({
                    top: flyoutTop
                })
            }
        };
        focusMe = function(k, j) {
            if (!j) {
                j = "top"
            }
            var m = k.offset().top;
            var l = 0;
            switch (j) {
                case "top":
                    var i = k.closest("li").prevAll().find(" > .expanded");
                    var l = i.outerHeight();
                    break;
                case "mid":
                    var g = k.closest(".subList");
                    var h = k.closest(".row").find(".subList").index(g);
                    var i = k.closest(".row").find(".subList").slice(0, h).find(".expanded");
                    var l = i.outerHeight();
                    break
            }
            if (i.length > 0) {
                m = m - l
            }
            a("html, body").animate({
                scrollTop: m
            }, "100", "swing", function() {});
            doNavResize()
        };
        toggleButton = a(this);
        toggleButton.on("click", "a", function(h) {
            h.preventDefault();
            doNavResize();
            var g = a("#mainNav");
            if (g.is(":visible")) {
                a("#nav-overlay").fadeOut();
                g.slideUp(function() {
                    doNavResize()
                });
                g.find(".mainItem > .expanded").removeClass("expanded").slideUp();
                g.find(".mainItem .active").removeClass("active");
                g.find(".subList .expanded").removeClass("expanded").parent().slideUp()
            } else {
                a("#nav-overlay").css({
                    display: "block"
                });
                g.slideDown(function() {
                    doNavResize()
                })
            }
        });
        a("#nav-overlay").on("click", function() {
            a("#mainNav").slideUp();
            a(".megaFlyOut.expanded").removeClass("expanded").slideUp();
            a(".subList .expanded").removeClass("expanded").parent().slideUp();
            a("#mainNav .active").removeClass("active");
            a(this).fadeOut()
        });
        delegateHandlers = function(g) {
            if (g == "L") {
                a("#mainNav .mainLink.is-touched").on("click", "a", function(h) {
                    console.log(this);
                    var i = a(this).closest("mainItem").find(".megaFlyOut");
                    if (i.is(":visible")) {
                        i.hide();
                        a(this).blur()
                    }
                })
            } else {
                a("#mainNav").delegate(".mainLink a", "click", function(k) {
                    k.preventDefault();
                    doNavResize();
                    var i = a(this);
                    var j = a(this).closest("li").find(".megaFlyOut");
                    if (j.is(":visible")) {
                        a(".subList .expanded").removeClass("expanded").slideUp();
                        j.removeClass("expanded").slideUp();
                        i.removeClass("active");
                        a(".subList h4").removeClass("active")
                    } else {
                        focusMe(i, "top");
                        j.addClass("expanded").slideDown(function() {});
                        a(".mainLink a").removeClass("active");
                        i.addClass("active");
                        a(".subList h4").removeClass("active");
                        var h = a(this).closest(".mainItem").siblings().find(".megaFlyOut");
                        if (h.is(":visible")) {
                            h.find(".subList ul").slideUp();
                            a(".subList h4").removeClass("active");
                            h.slideUp().removeClass("expanded")
                        }
                    }
                });
                a("#mainNav .subList").delegate("h4", "click", function(k) {
                    k.preventDefault();
                    doNavResize();
                    var h = a(this).closest(".subList").find("ul");
                    var j = a(this).closest(".subList").find("h4");
                    if (h.is(":visible")) {
                        h.removeClass("expanded").slideUp();
                        j.removeClass("active")
                    } else {
                        focusMe(a(this), "mid");
                        h.slideDown().addClass("expanded");
                        var i = a(this).closest(".row").find(".subList ul.expanded").not(h);
                        if (i.is(":visible")) {
                            a(".subList h4").removeClass("active");
                            i.removeClass("expanded").slideUp()
                        }
                        j.addClass("active")
                    }
                    doNavResize()
                })
            }
        };
        undelegateHandlers = function() {
            a("#mainNav").undelegate(".mainLink a", "click");
            a("#mainNav .subList").undelegate("h4", "click")
        };
        a(window).resize(function() {
            doNavResize("wresize");
            setNavView()
        });
        setNavView()
    };
    a("#mainNavToggle").swatchMainNavSmall();
    a(".mainItem a").off("mouseover", function() {});
    a("select[name=quickselect]").on("change", function() {
        var b = a(this).find("option:selected").val();
        window.location = b
    });
    highlightState({
        touch: {
            selector: ".mainLink",
            waitSecond: 0.3
        },
        hover: {
            selector: ".mainLink"
        }
    })
});




(function(a) {
    a.flexslider = function(E, j) {
        var b = a(E);
        b.vars = a.extend({}, a.flexslider.defaults, j);
        var w = b.vars.namespace,
            F = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            g = ("ontouchstart" in window || F || window.DocumentTouch && document instanceof DocumentTouch) && b.vars.touch,
            D = "click touchend MSPointerUp",
            B = "",
            y, q = b.vars.direction === "vertical",
            A = b.vars.reverse,
            x = b.vars.itemWidth > 0,
            e = b.vars.animation === "fade",
            z = b.vars.asNavFor !== "",
            C = {},
            k = true;
        a.data(E, "flexslider", b);
        C = {
            init: function() {
                b.animating = false;
                b.currentSlide = parseInt(b.vars.startAt ? b.vars.startAt : 0);
                if (isNaN(b.currentSlide)) {
                    b.currentSlide = 0
                }
                b.animatingTo = b.currentSlide;
                b.atEnd = b.currentSlide === 0 || b.currentSlide === b.last;
                b.containerSelector = b.vars.selector.substr(0, b.vars.selector.search(" "));
                b.slides = a(b.vars.selector, b);
                b.container = a(b.containerSelector, b);
                b.count = b.slides.length;
                b.syncExists = a(b.vars.sync).length > 0;
                if (b.vars.animation === "slide") {
                    b.vars.animation = "swing"
                }
                b.prop = q ? "top" : "marginLeft";
                b.args = {};
                b.manualPause = false;
                b.stopped = false;
                b.started = false;
                b.startTimeout = null;
                b.transitions = !b.vars.video && !e && b.vars.useCSS && function() {
                    var d = document.createElement("div"),
                        c = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var f in c) {
                        if (d.style[c[f]] !== undefined) {
                            b.pfx = c[f].replace("Perspective", "").toLowerCase();
                            b.prop = "-" + b.pfx + "-transform";
                            return true
                        }
                    }
                    return false
                }();
                if (b.vars.controlsContainer !== "") {
                    b.controlsContainer = a(b.vars.controlsContainer).length > 0 && a(b.vars.controlsContainer)
                }
                if (b.vars.manualControls !== "") {
                    b.manualControls = a(b.vars.manualControls).length > 0 && a(b.vars.manualControls)
                }
                if (b.vars.randomize) {
                    b.slides.sort(function() {
                        return Math.round(Math.random()) - 0.5
                    });
                    b.container.empty().append(b.slides)
                }
                b.doMath();
                b.setup("init");
                if (b.vars.controlNav) {
                    C.controlNav.setup()
                }
                if (b.vars.directionNav) {
                    C.directionNav.setup()
                }
                if (b.vars.keyboard && (a(b.containerSelector).length === 1 || b.vars.multipleKeyboard)) {
                    a(document).bind("keyup", function(d) {
                        var c = d.keyCode;
                        if (!b.animating && (c === 39 || c === 37)) {
                            var f = c === 39 ? b.getTarget("next") : c === 37 ? b.getTarget("prev") : false;
                            b.flexAnimate(f, b.vars.pauseOnAction)
                        }
                    })
                }
                if (b.vars.mousewheel) {
                    b.bind("mousewheel", function(h, d, l, c) {
                        h.preventDefault();
                        var f = d < 0 ? b.getTarget("next") : b.getTarget("prev");
                        b.flexAnimate(f, b.vars.pauseOnAction)
                    })
                }
                if (b.vars.pausePlay) {
                    C.pausePlay.setup()
                }
                if (b.vars.slideshow && b.vars.pauseInvisible) {
                    C.pauseInvisible.init()
                }
                if (b.vars.slideshow) {
                    if (b.vars.pauseOnHover) {
                        b.hover(function() {
                            if (!b.manualPlay && !b.manualPause) {
                                b.pause()
                            }
                        }, function() {
                            if (!b.manualPause && !b.manualPlay && !b.stopped) {
                                b.play()
                            }
                        })
                    }
                    if (!b.vars.pauseInvisible || !C.pauseInvisible.isHidden()) {
                        b.vars.initDelay > 0 ? b.startTimeout = setTimeout(b.play, b.vars.initDelay) : b.play()
                    }
                }
                if (z) {
                    C.asNav.setup()
                }
                if (g && b.vars.touch) {
                    C.touch()
                }
                if (!e || e && b.vars.smoothHeight) {
                    a(window).bind("resize orientationchange focus", C.resize)
                }
                b.find("img").attr("draggable", "false");
                setTimeout(function() {
                    b.vars.start(b)
                }, 200)
            },
            asNav: {
                setup: function() {
                    b.asNav = true;
                    b.animatingTo = Math.floor(b.currentSlide / b.move);
                    b.currentItem = b.currentSlide;
                    b.slides.removeClass(w + "active-slide").eq(b.currentItem).addClass(w + "active-slide");
                    if (!F) {
                        b.slides.click(function(c) {
                            c.preventDefault();
                            var h = a(this),
                                d = h.index();
                            var f = h.offset().left - a(b).scrollLeft();
                            if (f <= 0 && h.hasClass(w + "active-slide")) {
                                b.flexAnimate(b.getTarget("prev"), true)
                            } else {
                                if (!a(b.vars.asNavFor).data("flexslider").animating && !h.hasClass(w + "active-slide")) {
                                    b.direction = b.currentItem < d ? "next" : "prev";
                                    b.flexAnimate(d, b.vars.pauseOnAction, false, true, true)
                                }
                            }
                        })
                    } else {
                        E._slider = b;
                        b.slides.each(function() {
                            var c = this;
                            c._gesture = new MSGesture;
                            c._gesture.target = c;
                            c.addEventListener("MSPointerDown", function(d) {
                                d.preventDefault();
                                if (d.currentTarget._gesture) {
                                    d.currentTarget._gesture.addPointer(d.pointerId)
                                }
                            }, false);
                            c.addEventListener("MSGestureTap", function(f) {
                                f.preventDefault();
                                var h = a(this),
                                    d = h.index();
                                if (!a(b.vars.asNavFor).data("flexslider").animating && !h.hasClass("active")) {
                                    b.direction = b.currentItem < d ? "next" : "prev";
                                    b.flexAnimate(d, b.vars.pauseOnAction, false, true, true)
                                }
                            })
                        })
                    }
                }
            },
            controlNav: {
                setup: function() {
                    if (!b.manualControls) {
                        C.controlNav.setupPaging()
                    } else {
                        C.controlNav.setupManual()
                    }
                },
                setupPaging: function() {
                    var d = b.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        p = 1,
                        h, m;
                    b.controlNavScaffold = a('<ol class="' + w + "control-nav " + w + d + '"></ol>');
                    if (b.pagingCount > 1) {
                        for (var i = 0; i < b.pagingCount; i++) {
                            m = b.slides.eq(i);
                            h = b.vars.controlNav === "thumbnails" ? '<img src="' + m.attr("data-thumb") + '"/>' : "<a>" + p + "</a>";
                            if ("thumbnails" === b.vars.controlNav && true === b.vars.thumbCaptions) {
                                var c = m.attr("data-thumbcaption");
                                if ("" != c && undefined != c) {
                                    h += '<span class="' + w + 'caption">' + c + "</span>"
                                }
                            }
                            b.controlNavScaffold.append("<li>" + h + "</li>");
                            p++
                        }
                    }
                    b.controlsContainer ? a(b.controlsContainer).append(b.controlNavScaffold) : b.append(b.controlNavScaffold);
                    C.controlNav.set();
                    C.controlNav.active();
                    b.controlNavScaffold.delegate("a, img", D, function(f) {
                        f.preventDefault();
                        if (B === "" || B === f.type) {
                            var o = a(this),
                                l = b.controlNav.index(o);
                            if (!o.hasClass(w + "active")) {
                                b.direction = l > b.currentSlide ? "next" : "prev";
                                b.flexAnimate(l, b.vars.pauseOnAction)
                            }
                        }
                        if (B === "") {
                            B = f.type
                        }
                        C.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    b.controlNav = b.manualControls;
                    C.controlNav.active();
                    b.controlNav.bind(D, function(c) {
                        c.preventDefault();
                        if (B === "" || B === c.type) {
                            var f = a(this),
                                d = b.controlNav.index(f);
                            if (!f.hasClass(w + "active")) {
                                d > b.currentSlide ? b.direction = "next" : b.direction = "prev";
                                b.flexAnimate(d, b.vars.pauseOnAction)
                            }
                        }
                        if (B === "") {
                            B = c.type
                        }
                        C.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var c = b.vars.controlNav === "thumbnails" ? "img" : "a";
                    b.controlNav = a("." + w + "control-nav li " + c, b.controlsContainer ? b.controlsContainer : b)
                },
                active: function() {
                    b.controlNav.removeClass(w + "active").eq(b.animatingTo).addClass(w + "active")
                },
                update: function(c, d) {
                    if (b.pagingCount > 1 && c === "add") {
                        b.controlNavScaffold.append(a("<li><a>" + b.count + "</a></li>"))
                    } else {
                        if (b.pagingCount === 1) {
                            b.controlNavScaffold.find("li").remove()
                        } else {
                            b.controlNav.eq(d).closest("li").remove()
                        }
                    }
                    C.controlNav.set();
                    b.pagingCount > 1 && b.pagingCount !== b.controlNav.length ? b.update(d, c) : C.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var c = a('<ul class="' + w + 'direction-nav"><li><a class="' + w + 'prev" href="#">' + b.vars.prevText + '</a></li><li><a class="' + w + 'next" href="#">' + b.vars.nextText + "</a></li></ul>");
                    if (b.controlsContainer) {
                        a(b.controlsContainer).append(c);
                        b.directionNav = a("." + w + "direction-nav li a", b.controlsContainer)
                    } else {
                        b.append(c);
                        b.directionNav = a("." + w + "direction-nav li a", b)
                    }
                    C.directionNav.update();
                    b.directionNav.bind(D, function(d) {
                        d.preventDefault();
                        var f;
                        if (B === "" || B === d.type) {
                            f = a(this).hasClass(w + "next") ? b.getTarget("next") : b.getTarget("prev");
                            b.flexAnimate(f, b.vars.pauseOnAction)
                        }
                        if (B === "") {
                            B = d.type
                        }
                        C.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var c = w + "disabled";
                    if (b.pagingCount === 1) {
                        b.directionNav.addClass(c).attr("tabindex", "-1")
                    } else {
                        if (!b.vars.animationLoop) {
                            if (b.animatingTo === 0) {
                                b.directionNav.removeClass(c).filter("." + w + "prev").addClass(c).attr("tabindex", "-1")
                            } else {
                                if (b.animatingTo === b.last) {
                                    b.directionNav.removeClass(c).filter("." + w + "next").addClass(c).attr("tabindex", "-1")
                                } else {
                                    b.directionNav.removeClass(c).removeAttr("tabindex")
                                }
                            }
                        } else {
                            b.directionNav.removeClass(c).removeAttr("tabindex")
                        }
                    }
                }
            },
            pausePlay: {
                setup: function() {
                    var c = a('<div class="' + w + 'pauseplay"><a></a></div>');
                    if (b.controlsContainer) {
                        b.controlsContainer.append(c);
                        b.pausePlay = a("." + w + "pauseplay a", b.controlsContainer)
                    } else {
                        b.append(c);
                        b.pausePlay = a("." + w + "pauseplay a", b)
                    }
                    C.pausePlay.update(b.vars.slideshow ? w + "pause" : w + "play");
                    b.pausePlay.bind(D, function(d) {
                        d.preventDefault();
                        if (B === "" || B === d.type) {
                            if (a(this).hasClass(w + "pause")) {
                                b.manualPause = true;
                                b.manualPlay = false;
                                b.pause()
                            } else {
                                b.manualPause = false;
                                b.manualPlay = true;
                                b.play()
                            }
                        }
                        if (B === "") {
                            B = d.type
                        }
                        C.setToClearWatchedEvent()
                    })
                },
                update: function(c) {
                    c === "play" ? b.pausePlay.removeClass(w + "pause").addClass(w + "play").html(b.vars.playText) : b.pausePlay.removeClass(w + "play").addClass(w + "pause").html(b.vars.pauseText)
                }
            },
            touch: function() {
                var G, h, r, c, N, K, t = false,
                    H = 0,
                    M = 0,
                    l = 0;
                if (!F) {
                    E.addEventListener("touchstart", s, false);

                    function s(d) {
                        if (b.animating) {
                            d.preventDefault()
                        } else {
                            if (window.navigator.msPointerEnabled || d.touches.length === 1) {
                                b.pause();
                                c = q ? b.h : b.w;
                                K = Number(new Date);
                                H = d.touches[0].pageX;
                                M = d.touches[0].pageY;
                                r = x && A && b.animatingTo === b.last ? 0 : x && A ? b.limit - (b.itemW + b.vars.itemMargin) * b.move * b.animatingTo : x && b.currentSlide === b.last ? b.limit : x ? (b.itemW + b.vars.itemMargin) * b.move * b.currentSlide : A ? (b.last - b.currentSlide + b.cloneOffset) * c : (b.currentSlide + b.cloneOffset) * c;
                                G = q ? M : H;
                                h = q ? H : M;
                                E.addEventListener("touchmove", J, false);
                                E.addEventListener("touchend", I, false)
                            }
                        }
                    }

                    function J(d) {
                        H = d.touches[0].pageX;
                        M = d.touches[0].pageY;
                        N = q ? G - M : G - H;
                        t = q ? Math.abs(N) < Math.abs(H - h) : Math.abs(N) < Math.abs(M - h);
                        var f = 500;
                        if (!t || Number(new Date) - K > f) {
                            d.preventDefault();
                            if (!e && b.transitions) {
                                if (!b.vars.animationLoop) {
                                    N = N / (b.currentSlide === 0 && N < 0 || b.currentSlide === b.last && N > 0 ? Math.abs(N) / c + 2 : 1)
                                }
                                b.setProps(r + N, "setTouch")
                            }
                        }
                    }

                    function I(i) {
                        E.removeEventListener("touchmove", J, false);
                        if (b.animatingTo === b.currentSlide && !t && !(N === null)) {
                            var d = A ? -N : N,
                                f = d > 0 ? b.getTarget("next") : b.getTarget("prev");
                            if (b.canAdvance(f) && (Number(new Date) - K < 550 && Math.abs(d) > 50 || Math.abs(d) > c / 2)) {
                                b.flexAnimate(f, b.vars.pauseOnAction)
                            } else {
                                if (!e) {
                                    b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, true)
                                }
                            }
                        }
                        E.removeEventListener("touchend", I, false);
                        G = null;
                        h = null;
                        N = null;
                        r = null
                    }
                } else {
                    E.style.msTouchAction = "none";
                    E._gesture = new MSGesture;
                    E._gesture.target = E;
                    E.addEventListener("MSPointerDown", L, false);
                    E._slider = b;
                    E.addEventListener("MSGestureChange", O, false);
                    E.addEventListener("MSGestureEnd", p, false);

                    function L(d) {
                        d.stopPropagation();
                        if (b.animating) {
                            d.preventDefault()
                        } else {
                            b.pause();
                            E._gesture.addPointer(d.pointerId);
                            l = 0;
                            c = q ? b.h : b.w;
                            K = Number(new Date);
                            r = x && A && b.animatingTo === b.last ? 0 : x && A ? b.limit - (b.itemW + b.vars.itemMargin) * b.move * b.animatingTo : x && b.currentSlide === b.last ? b.limit : x ? (b.itemW + b.vars.itemMargin) * b.move * b.currentSlide : A ? (b.last - b.currentSlide + b.cloneOffset) * c : (b.currentSlide + b.cloneOffset) * c
                        }
                    }

                    function O(i) {
                        i.stopPropagation();
                        var m = i.target._slider;
                        if (!m) {
                            return
                        }
                        var f = -i.translationX,
                            d = -i.translationY;
                        l = l + (q ? d : f);
                        N = l;
                        t = q ? Math.abs(l) < Math.abs(-f) : Math.abs(l) < Math.abs(-d);
                        if (i.detail === i.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                E._gesture.stop()
                            });
                            return
                        }
                        if (!t || Number(new Date) - K > 500) {
                            i.preventDefault();
                            if (!e && m.transitions) {
                                if (!m.vars.animationLoop) {
                                    N = l / (m.currentSlide === 0 && l < 0 || m.currentSlide === m.last && l > 0 ? Math.abs(l) / c + 2 : 1)
                                }
                                m.setProps(r + N, "setTouch")
                            }
                        }
                    }

                    function p(f) {
                        f.stopPropagation();
                        var m = f.target._slider;
                        if (!m) {
                            return
                        }
                        if (m.animatingTo === m.currentSlide && !t && !(N === null)) {
                            var i = A ? -N : N,
                                d = i > 0 ? m.getTarget("next") : m.getTarget("prev");
                            if (m.canAdvance(d) && (Number(new Date) - K < 550 && Math.abs(i) > 50 || Math.abs(i) > c / 2)) {
                                m.flexAnimate(d, m.vars.pauseOnAction)
                            } else {
                                if (!e) {
                                    m.flexAnimate(m.currentSlide, m.vars.pauseOnAction, true)
                                }
                            }
                        }
                        G = null;
                        h = null;
                        N = null;
                        r = null;
                        l = 0
                    }
                }
            },
            resize: function() {
                if (!b.animating && b.is(":visible")) {
                    if (!x) {
                        b.doMath()
                    }
                    if (e) {
                        C.smoothHeight()
                    } else {
                        if (x) {
                            b.slides.width(b.computedW);
                            b.update(b.pagingCount);
                            b.setProps()
                        } else {
                            if (q) {
                                b.viewport.height(b.h);
                                b.setProps(b.h, "setTotal")
                            } else {
                                if (b.vars.smoothHeight) {
                                    C.smoothHeight()
                                }
                                b.newSlides.width(b.computedW);
                                b.setProps(b.computedW, "setTotal")
                            }
                        }
                    }
                }
            },
            smoothHeight: function(d) {
                if (!q || e) {
                    var c = e ? b : b.viewport;
                    d ? c.animate({
                        height: b.slides.eq(b.animatingTo).height()
                    }, d) : c.height(b.slides.eq(b.animatingTo).height())
                }
            },
            sync: function(d) {
                var f = a(b.vars.sync).data("flexslider"),
                    c = b.animatingTo;
                switch (d) {
                    case "animate":
                        f.flexAnimate(c, b.vars.pauseOnAction, false, true);
                        break;
                    case "play":
                        if (!f.playing && !f.asNav) {
                            f.play()
                        }
                        break;
                    case "pause":
                        f.pause();
                        break
                }
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var d = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) {
                        return "hidden"
                    }
                    for (var c = 0; c < d.length; c++) {
                        if (d[c] + "Hidden" in document) {
                            C.pauseInvisible.visProp = d[c] + "Hidden"
                        }
                    }
                    if (C.pauseInvisible.visProp) {
                        var f = C.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(f, function() {
                            if (C.pauseInvisible.isHidden()) {
                                if (b.startTimeout) {
                                    clearTimeout(b.startTimeout)
                                } else {
                                    b.pause()
                                }
                            } else {
                                if (b.started) {
                                    b.play()
                                } else {
                                    b.vars.initDelay > 0 ? setTimeout(b.play, b.vars.initDelay) : b.play()
                                }
                            }
                        })
                    }
                },
                isHidden: function() {
                    return document[C.pauseInvisible.visProp] || false
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(y);
                y = setTimeout(function() {
                    B = ""
                }, 3000)
            }
        };
        b.flexAnimate = function(v, c, G, r, p) {
            if (!b.vars.animationLoop && v !== b.currentSlide) {
                b.direction = v > b.currentSlide ? "next" : "prev"
            }
            if (z && b.pagingCount === 1) {
                b.direction = b.currentItem < v ? "next" : "prev"
            }
            if (!b.animating && (b.canAdvance(v, p) || G) && b.is(":visible")) {
                if (z && r) {
                    var i = a(b.vars.asNavFor).data("flexslider");
                    b.atEnd = v === 0 || v === b.count - 1;
                    i.flexAnimate(v, true, false, true, p);
                    b.direction = b.currentItem < v ? "next" : "prev";
                    i.direction = b.direction;
                    if (Math.ceil((v + 1) / b.visible) - 1 !== b.currentSlide && v !== 0) {
                        b.currentItem = v;
                        b.slides.removeClass(w + "active-slide").eq(v).addClass(w + "active-slide");
                        v = Math.floor(v / b.visible)
                    } else {
                        b.currentItem = v;
                        b.slides.removeClass(w + "active-slide").eq(v).addClass(w + "active-slide");
                        return false
                    }
                }
                b.animating = true;
                b.animatingTo = v;
                if (c) {
                    b.pause()
                }
                b.vars.before(b);
                if (b.syncExists && !p) {
                    C.sync("animate")
                }
                if (b.vars.controlNav) {
                    C.controlNav.active()
                }
                if (!x) {
                    b.slides.removeClass(w + "active-slide").eq(v).addClass(w + "active-slide")
                }
                b.atEnd = v === 0 || v === b.last;
                if (b.vars.directionNav) {
                    C.directionNav.update()
                }
                if (v === b.last) {
                    b.vars.end(b);
                    if (!b.vars.animationLoop) {
                        b.pause()
                    }
                }
                if (!e) {
                    var d = q ? b.slides.filter(":first").height() : b.computedW,
                        h, o, l;
                    if (x) {
                        h = b.vars.itemMargin;
                        l = (b.itemW + h) * b.move * b.animatingTo;
                        o = l > b.limit && b.visible !== 1 ? b.limit : l
                    } else {
                        if (b.currentSlide === 0 && v === b.count - 1 && b.vars.animationLoop && b.direction !== "next") {
                            o = A ? (b.count + b.cloneOffset) * d : 0
                        } else {
                            if (b.currentSlide === b.last && v === 0 && b.vars.animationLoop && b.direction !== "prev") {
                                o = A ? 0 : (b.count + 1) * d
                            } else {
                                o = A ? (b.count - 1 - v + b.cloneOffset) * d : (v + b.cloneOffset) * d
                            }
                        }
                    }
                    b.setProps(o, "", b.vars.animationSpeed);
                    if (b.transitions) {
                        if (!b.vars.animationLoop || !b.atEnd) {
                            b.animating = false;
                            b.currentSlide = b.animatingTo
                        }
                        b.container.unbind("webkitTransitionEnd transitionend");
                        b.container.bind("webkitTransitionEnd transitionend", function() {
                            b.wrapup(d)
                        })
                    } else {
                        b.container.animate(b.args, b.vars.animationSpeed, b.vars.easing, function() {
                            b.wrapup(d)
                        })
                    }
                } else {
                    if (!g) {
                        b.slides.eq(b.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        }, b.vars.animationSpeed, b.vars.easing);
                        b.slides.eq(v).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        }, b.vars.animationSpeed, b.vars.easing, b.wrapup)
                    } else {
                        b.slides.eq(b.currentSlide).css({
                            opacity: 0,
                            zIndex: 1
                        });
                        b.slides.eq(v).css({
                            opacity: 1,
                            zIndex: 2
                        });
                        b.wrapup(d)
                    }
                } if (b.vars.smoothHeight) {
                    C.smoothHeight(b.vars.animationSpeed)
                }
            }
        };
        b.wrapup = function(c) {
            if (!e && !x) {
                if (b.currentSlide === 0 && b.animatingTo === b.last && b.vars.animationLoop) {
                    b.setProps(c, "jumpEnd")
                } else {
                    if (b.currentSlide === b.last && b.animatingTo === 0 && b.vars.animationLoop) {
                        b.setProps(c, "jumpStart")
                    }
                }
            }
            b.animating = false;
            b.currentSlide = b.animatingTo;
            b.vars.after(b)
        };
        b.animateSlides = function() {
            if (!b.animating && k) {
                b.flexAnimate(b.getTarget("next"))
            }
        };
        b.pause = function() {
            clearInterval(b.animatedSlides);
            b.animatedSlides = null;
            b.playing = false;
            if (b.vars.pausePlay) {
                C.pausePlay.update("play")
            }
            if (b.syncExists) {
                C.sync("pause")
            }
        };
        b.play = function() {
            if (b.playing) {
                clearInterval(b.animatedSlides)
            }
            b.animatedSlides = b.animatedSlides || setInterval(b.animateSlides, b.vars.slideshowSpeed);
            b.started = b.playing = true;
            if (b.vars.pausePlay) {
                C.pausePlay.update("pause")
            }
            if (b.syncExists) {
                C.sync("play")
            }
        };
        b.stop = function() {
            b.pause();
            b.stopped = true
        };
        b.canAdvance = function(d, c) {
            var f = z ? b.pagingCount - 1 : b.last;
            return c ? true : z && b.currentItem === b.count - 1 && d === 0 && b.direction === "prev" ? true : z && b.currentItem === 0 && d === b.pagingCount - 1 && b.direction !== "next" ? false : d === b.currentSlide && !z ? false : b.vars.animationLoop ? true : b.atEnd && b.currentSlide === 0 && d === f && b.direction !== "next" ? false : b.atEnd && b.currentSlide === f && d === 0 && b.direction === "next" ? false : true
        };
        b.getTarget = function(c) {
            b.direction = c;
            if (c === "next") {
                return b.currentSlide === b.last ? 0 : b.currentSlide + 1
            } else {
                return b.currentSlide === 0 ? b.last : b.currentSlide - 1
            }
        };
        b.setProps = function(f, d, h) {
            var c = function() {
                var m = f ? f : (b.itemW + b.vars.itemMargin) * b.move * b.animatingTo,
                    l = function() {
                        if (x) {
                            return d === "setTouch" ? f : A && b.animatingTo === b.last ? 0 : A ? b.limit - (b.itemW + b.vars.itemMargin) * b.move * b.animatingTo : b.animatingTo === b.last ? b.limit : m
                        } else {
                            switch (d) {
                                case "setTotal":
                                    return A ? (b.count - 1 - b.currentSlide + b.cloneOffset) * f : (b.currentSlide + b.cloneOffset) * f;
                                case "setTouch":
                                    return A ? f : f;
                                case "jumpEnd":
                                    return A ? f : b.count * f;
                                case "jumpStart":
                                    return A ? b.count * f : f;
                                default:
                                    return f
                            }
                        }
                    }();
                return l * -1 + "px"
            }();
            if (b.transitions) {
                c = q ? "translate3d(0," + c + ",0)" : "translate3d(" + c + ",0,0)";
                h = h !== undefined ? h / 1000 + "s" : "0s";
                b.container.css("-" + b.pfx + "-transition-duration", h)
            }
            b.args[b.prop] = c;
            if (b.transitions || h === undefined) {
                b.container.css(b.args)
            }
        };
        b.setup = function(c) {
            if (!e) {
                var f, d;
                if (c === "init") {
                    b.viewport = a('<div class="' + w + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(b).append(b.container);
                    b.cloneCount = 0;
                    b.cloneOffset = 0;
                    if (A) {
                        d = a.makeArray(b.slides).reverse();
                        b.slides = a(d);
                        b.container.empty().append(b.slides)
                    }
                }
                if (b.vars.animationLoop && !x) {
                    b.cloneCount = 2;
                    b.cloneOffset = 1;
                    if (c !== "init") {
                        b.container.find(".clone").remove()
                    }
                    b.container.append(b.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(b.slides.last().clone().addClass("clone").attr("aria-hidden", "true"))
                }
                b.newSlides = a(b.vars.selector, b);
                f = A ? b.count - 1 - b.currentSlide + b.cloneOffset : b.currentSlide + b.cloneOffset;
                if (q && !x) {
                    b.container.height((b.count + b.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        b.newSlides.css({
                            display: "block"
                        });
                        b.doMath();
                        b.viewport.height(b.h);
                        b.setProps(f * b.h, "init")
                    }, c === "init" ? 100 : 0)
                } else {
                    b.container.width((b.count + b.cloneCount) * 200 + "%");
                    b.setProps(f * b.computedW, "init");
                    setTimeout(function() {
                        b.doMath();
                        b.newSlides.css({
                            width: b.computedW,
                            "float": "left",
                            display: "block"
                        });
                        if (b.vars.smoothHeight) {
                            C.smoothHeight()
                        }
                    }, c === "init" ? 100 : 0)
                }
            } else {
                b.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                if (c === "init") {
                    if (!g) {
                        b.slides.css({
                            opacity: 0,
                            display: "block",
                            zIndex: 1
                        }).eq(b.currentSlide).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        }, b.vars.animationSpeed, b.vars.easing)
                    } else {
                        b.slides.css({
                            opacity: 0,
                            display: "block",
                            webkitTransition: "opacity " + b.vars.animationSpeed / 1000 + "s ease",
                            zIndex: 1
                        }).eq(b.currentSlide).css({
                            opacity: 1,
                            zIndex: 2
                        })
                    }
                }
                if (b.vars.smoothHeight) {
                    C.smoothHeight()
                }
            } if (!x) {
                b.slides.removeClass(w + "active-slide").eq(b.currentSlide).addClass(w + "active-slide")
            }
        };
        b.doMath = function() {
            var f = b.slides.first(),
                d = b.vars.itemMargin,
                h = b.vars.minItems,
                c = b.vars.maxItems;
            b.w = b.viewport === undefined ? b.width() : b.viewport.width();
            b.h = f.height();
            b.boxPadding = f.outerWidth() - f.width();
            if (x) {
                b.itemT = b.vars.itemWidth + d;
                b.minW = h ? h * b.itemT : b.w;
                b.maxW = c ? c * b.itemT - d : b.w;
                b.itemW = b.minW > b.w ? (b.w - d * (h - 1)) / h : b.maxW < b.w ? (b.w - d * (c - 1)) / c : b.vars.itemWidth > b.w ? b.w : b.vars.itemWidth;
                b.visible = Math.floor(b.w / b.itemW);
                b.move = b.vars.move > 0 && b.vars.move < b.visible ? b.vars.move : b.visible;
                b.pagingCount = Math.ceil((b.count - b.visible) / b.move + 1);
                b.last = b.pagingCount - 1;
                b.limit = b.pagingCount === 1 ? 0 : b.vars.itemWidth > b.w ? b.itemW * (b.count - 1) + d * (b.count - 1) : (b.itemW + d) * b.count - b.w - d
            } else {
                b.itemW = b.w;
                b.pagingCount = b.count;
                b.last = b.count - 1
            }
            b.computedW = b.itemW - b.boxPadding
        };
        b.update = function(d, c) {
            b.doMath();
            if (!x) {
                if (d < b.currentSlide) {
                    b.currentSlide += 1
                } else {
                    if (d <= b.currentSlide && d !== 0) {
                        b.currentSlide -= 1
                    }
                }
                b.animatingTo = b.currentSlide
            }
            if (b.vars.controlNav && !b.manualControls) {
                if (c === "add" && !x || b.pagingCount > b.controlNav.length) {
                    C.controlNav.update("add")
                } else {
                    if (c === "remove" && !x || b.pagingCount < b.controlNav.length) {
                        if (x && b.currentSlide > b.last) {
                            b.currentSlide -= 1;
                            b.animatingTo -= 1
                        }
                        C.controlNav.update("remove", b.last)
                    }
                }
            }
            if (b.vars.directionNav) {
                C.directionNav.update()
            }
        };
        b.addSlide = function(d, f) {
            var c = a(d);
            b.count += 1;
            b.last = b.count - 1;
            if (q && A) {
                f !== undefined ? b.slides.eq(b.count - f).after(c) : b.container.prepend(c)
            } else {
                f !== undefined ? b.slides.eq(f).before(c) : b.container.append(c)
            }
            b.update(f, "add");
            b.slides = a(b.vars.selector + ":not(.clone)", b);
            b.setup();
            b.vars.added(b)
        };
        b.removeSlide = function(c) {
            var d = isNaN(c) ? b.slides.index(a(c)) : c;
            b.count -= 1;
            b.last = b.count - 1;
            if (isNaN(c)) {
                a(c, b.slides).remove()
            } else {
                q && A ? b.slides.eq(b.last).remove() : b.slides.eq(c).remove()
            }
            b.doMath();
            b.update(d, "remove");
            b.slides = a(b.vars.selector + ":not(.clone)", b);
            b.setup();
            b.vars.removed(b)
        };
        C.init()
    };
    a(window).blur(function(b) {
        focused = false
    }).focus(function(b) {
        focused = true
    });
    a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: false,
        thumbCaptions: false,
        pauseOnAction: true,
        pauseOnHover: false,
        pauseInvisible: true,
        useCSS: true,
        touch: true,
        video: false,
        controlNav: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: true,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    a.fn.flexslider = function(b) {
        if (b === undefined) {
            b = {}
        }
        if (typeof b === "object") {
            return this.each(function() {
                var f = a(this),
                    e = b.selector ? b.selector : ".slides > li",
                    d = f.find(e);
                if (d.length === 1 && b.allowOneSlide === true || d.length === 0) {
                    d.fadeIn(400);
                    if (b.start) {
                        b.start(f)
                    }
                } else {
                    if (f.data("flexslider") === undefined) {
                        new a.flexslider(this, b)
                    }
                }
            })
        } else {
            var c = a(this).data("flexslider");
            switch (b) {
                case "play":
                    c.play();
                    break;
                case "pause":
                    c.pause();
                    break;
                case "stop":
                    c.stop();
                    break;
                case "next":
                    c.flexAnimate(c.getTarget("next"), true);
                    break;
                case "prev":
                case "previous":
                    c.flexAnimate(c.getTarget("prev"), true);
                    break;
                default:
                    if (typeof b === "number") {
                        c.flexAnimate(b, true)
                    }
            }
        }
    }
})(jQuery);
(function(aS) {
    var aR = "Close",
        aQ = "BeforeClose",
        aP = "AfterClose",
        aO = "BeforeAppend",
        aN = "MarkupParse",
        aM = "Open",
        aL = "Change",
        aK = "mfp",
        aJ = "." + aK,
        aI = "mfp-ready",
        aH = "mfp-removing",
        aG = "mfp-prevent-close",
        aF, aE = function() {},
        aD = !!window.jQuery,
        aC, aB = aS(window),
        aA, az, ay, ax, aw, av = function(d, c) {
            aF.ev.on(aK + d + aJ, c)
        },
        au = function(a, j, i, h) {
            var g = document.createElement("div");
            return g.className = "mfp-" + a, i && (g.innerHTML = i), h ? j && j.appendChild(g) : (g = aS(g), j && g.appendTo(j)), g
        },
        at = function(a, d) {
            aF.ev.triggerHandler(aK + a, d), aF.st.callbacks && (a = a.charAt(0).toLowerCase() + a.slice(1), aF.st.callbacks[a] && aF.st.callbacks[a].apply(aF, aS.isArray(d) ? d : [d]))
        },
        ar = function(a) {
            if (a !== aw || !aF.currTemplate.closeBtn) {
                aF.currTemplate.closeBtn = aS(aF.st.closeMarkup.replace("%title%", aF.st.tClose)), aw = a
            }
            return aF.currTemplate.closeBtn
        },
        aq = function() {
            aS.magnificPopup.instance || (aF = new aE, aF.init(), aS.magnificPopup.instance = aF)
        },
        ap = function() {
            var d = document.createElement("p").style,
                c = ["ms", "O", "Moz", "Webkit"];
            if (d.transition !== undefined) {
                return !0
            }
            while (c.length) {
                if (c.pop() + "Transition" in d) {
                    return !0
                }
            }
            return !1
        };
    aE.prototype = {
        constructor: aE,
        init: function() {
            var a = navigator.appVersion;
            aF.isIE7 = a.indexOf("MSIE 7.") !== -1, aF.isIE8 = a.indexOf("MSIE 8.") !== -1, aF.isLowIE = aF.isIE7 || aF.isIE8, aF.isAndroid = /android/gi.test(a), aF.isIOS = /iphone|ipad|ipod/gi.test(a), aF.supportsTransition = ap(), aF.probablyMobile = aF.isAndroid || aF.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), az = aS(document), aF.popupsCache = {}
        },
        open: function(t) {
            aA || (aA = aS(document.body));
            var s;
            if (t.isObj === !1) {
                aF.items = t.items.toArray(), aF.index = 0;
                var r = t.items,
                    q;
                for (s = 0; s < r.length; s++) {
                    q = r[s], q.parsed && (q = q.el[0]);
                    if (q === t.el[0]) {
                        aF.index = s;
                        break
                    }
                }
            } else {
                aF.items = aS.isArray(t.items) ? t.items : [t.items], aF.index = t.index || 0
            } if (aF.isOpen) {
                aF.updateItemHTML();
                return
            }
            aF.types = [], ax = "", t.mainEl && t.mainEl.length ? aF.ev = t.mainEl.eq(0) : aF.ev = az, t.key ? (aF.popupsCache[t.key] || (aF.popupsCache[t.key] = {}), aF.currTemplate = aF.popupsCache[t.key]) : aF.currTemplate = {}, aF.st = aS.extend(!0, {}, aS.magnificPopup.defaults, t), aF.fixedContentPos = aF.st.fixedContentPos === "auto" ? !aF.probablyMobile : aF.st.fixedContentPos, aF.st.modal && (aF.st.closeOnContentClick = !1, aF.st.closeOnBgClick = !1, aF.st.showCloseBtn = !1, aF.st.enableEscapeKey = !1), aF.bgOverlay || (aF.bgOverlay = au("bg").on("click" + aJ, function() {
                aF.close()
            }), aF.wrap = au("wrap").attr("tabindex", -1).on("click" + aJ, function(b) {
                aF._checkIfClose(b.target) && aF.close()
            }), aF.container = au("container", aF.wrap)), aF.contentContainer = au("content"), aF.st.preloader && (aF.preloader = au("preloader", aF.container, aF.st.tLoading));
            var n = aS.magnificPopup.modules;
            for (s = 0; s < n.length; s++) {
                var k = n[s];
                k = k.charAt(0).toUpperCase() + k.slice(1), aF["init" + k].call(aF)
            }
            at("BeforeOpen"), aF.st.showCloseBtn && (aF.st.closeBtnInside ? (av(aN, function(h, e, l, i) {
                l.close_replaceWith = ar(i.type)
            }), ax += " mfp-close-btn-in") : aF.wrap.append(ar())), aF.st.alignTop && (ax += " mfp-align-top"), aF.fixedContentPos ? aF.wrap.css({
                overflow: aF.st.overflowY,
                overflowX: "hidden",
                overflowY: aF.st.overflowY
            }) : aF.wrap.css({
                top: aB.scrollTop(),
                position: "absolute"
            }), (aF.st.fixedBgPos === !1 || aF.st.fixedBgPos === "auto" && !aF.fixedContentPos) && aF.bgOverlay.css({
                height: az.height(),
                position: "absolute"
            }), aF.st.enableEscapeKey && az.on("keyup" + aJ, function(b) {
                b.keyCode === 27 && aF.close()
            }), aB.on("resize" + aJ, function() {
                aF.updateSize()
            }), aF.st.closeOnContentClick || (ax += " mfp-auto-cursor"), ax && aF.wrap.addClass(ax);
            var j = aF.wH = aB.height(),
                g = {};
            if (aF.fixedContentPos && aF._hasScrollBar(j)) {
                var f = aF._getScrollbarSize();
                f && (g.marginRight = f)
            }
            aF.fixedContentPos && (aF.isIE7 ? aS("body, html").css("overflow", "hidden") : g.overflow = "hidden");
            var a = aF.st.mainClass;
            return aF.isIE7 && (a += " mfp-ie7"), a && aF._addClassToMFP(a), aF.updateItemHTML(), at("BuildControls"), aS("html").css(g), aF.bgOverlay.add(aF.wrap).prependTo(aF.st.prependTo || aA), aF._lastFocusedEl = document.activeElement, setTimeout(function() {
                aF.content ? (aF._addClassToMFP(aI), aF._setFocus()) : aF.bgOverlay.addClass(aI), az.on("focusin" + aJ, aF._onFocusIn)
            }, 16), aF.isOpen = !0, aF.updateSize(j), at(aM), t
        },
        close: function() {
            if (!aF.isOpen) {
                return
            }
            at(aQ), aF.isOpen = !1, aF.st.removalDelay && !aF.isLowIE && aF.supportsTransition ? (aF._addClassToMFP(aH), setTimeout(function() {
                aF._close()
            }, aF.st.removalDelay)) : aF._close()
        },
        _close: function() {
            at(aR);
            var b = aH + " " + aI + " ";
            aF.bgOverlay.detach(), aF.wrap.detach(), aF.container.empty(), aF.st.mainClass && (b += aF.st.mainClass + " "), aF._removeClassFromMFP(b);
            if (aF.fixedContentPos) {
                var a = {
                    marginRight: ""
                };
                aF.isIE7 ? aS("body, html").css("overflow", "") : a.overflow = "", aS("html").css(a)
            }
            az.off("keyup" + aJ + " focusin" + aJ), aF.ev.off(aJ), aF.wrap.attr("class", "mfp-wrap").removeAttr("style"), aF.bgOverlay.attr("class", "mfp-bg"), aF.container.attr("class", "mfp-container"), aF.st.showCloseBtn && (!aF.st.closeBtnInside || aF.currTemplate[aF.currItem.type] === !0) && aF.currTemplate.closeBtn && aF.currTemplate.closeBtn.detach(), aF._lastFocusedEl && aS(aF._lastFocusedEl).focus(), aF.currItem = null, aF.content = null, aF.currTemplate = null, aF.prevHeight = 0, at(aP)
        },
        updateSize: function(e) {
            if (aF.isIOS) {
                var d = document.documentElement.clientWidth / window.innerWidth,
                    f = window.innerHeight * d;
                aF.wrap.css("height", f), aF.wH = f
            } else {
                aF.wH = e || aB.height()
            }
            aF.fixedContentPos || aF.wrap.css("height", aF.wH), at("Resize")
        },
        updateItemHTML: function() {
            var a = aF.items[aF.index];
            aF.contentContainer.detach(), aF.content && aF.content.detach(), a.parsed || (a = aF.parseEl(aF.index));
            var h = a.type;
            at("BeforeChange", [aF.currItem ? aF.currItem.type : "", h]), aF.currItem = a;
            if (!aF.currTemplate[h]) {
                var g = aF.st[h] ? aF.st[h].markup : !1;
                at("FirstMarkupParse", g), g ? aF.currTemplate[h] = aS(g) : aF.currTemplate[h] = !0
            }
            ay && ay !== a.type && aF.container.removeClass("mfp-" + ay + "-holder");
            var f = aF["get" + h.charAt(0).toUpperCase() + h.slice(1)](a, aF.currTemplate[h]);
            aF.appendContent(f, h), a.preloaded = !0, at(aL, a), ay = a.type, aF.container.prepend(aF.contentContainer), at("AfterChange")
        },
        appendContent: function(d, c) {
            aF.content = d, d ? aF.st.showCloseBtn && aF.st.closeBtnInside && aF.currTemplate[c] === !0 ? aF.content.find(".mfp-close").length || aF.content.append(ar()) : aF.content = d : aF.content = "", at(aO), aF.container.addClass("mfp-" + c + "-holder"), aF.contentContainer.append(aF.content)
        },
        parseEl: function(a) {
            var j = aF.items[a],
                i;
            j.tagName ? j = {
                el: aS(j)
            } : (i = j.type, j = {
                data: j,
                src: j.src
            });
            if (j.el) {
                var h = aF.types;
                for (var g = 0; g < h.length; g++) {
                    if (j.el.hasClass("mfp-" + h[g])) {
                        i = h[g];
                        break
                    }
                }
                j.src = j.el.attr("data-mfp-src"), j.src || (j.src = j.el.attr("href"))
            }
            return j.type = i || aF.st.type || "inline", j.index = a, j.parsed = !0, aF.items[a] = j, at("ElementParse", j), aF.items[a]
        },
        addGroup: function(f, e) {
            var h = function(a) {
                a.mfpEl = this, aF._openClick(a, f, e)
            };
            e || (e = {});
            var g = "click.magnificPopup";
            e.mainEl = f, e.items ? (e.isObj = !0, f.off(g).on(g, h)) : (e.isObj = !1, e.delegate ? f.off(g).on(g, e.delegate, h) : (e.items = f, f.off(g).on(g, h)))
        },
        _openClick: function(a, j, i) {
            var h = i.midClick !== undefined ? i.midClick : aS.magnificPopup.defaults.midClick;
            if (!h && (a.which === 2 || a.ctrlKey || a.metaKey)) {
                return
            }
            var g = i.disableOn !== undefined ? i.disableOn : aS.magnificPopup.defaults.disableOn;
            if (g) {
                if (aS.isFunction(g)) {
                    if (!g.call(aF)) {
                        return !0
                    }
                } else {
                    if (aB.width() < g) {
                        return !0
                    }
                }
            }
            a.type && (a.preventDefault(), aF.isOpen && a.stopPropagation()), i.el = aS(a.mfpEl), i.delegate && (i.items = j.find(i.delegate)), aF.open(i)
        },
        updateStatus: function(e, d) {
            if (aF.preloader) {
                aC !== e && aF.container.removeClass("mfp-s-" + aC), !d && e === "loading" && (d = aF.st.tLoading);
                var f = {
                    status: e,
                    text: d
                };
                at("UpdateStatus", f), e = f.status, d = f.text, aF.preloader.html(d), aF.preloader.find("a").on("click", function(b) {
                    b.stopImmediatePropagation()
                }), aF.container.addClass("mfp-s-" + e), aC = e
            }
        },
        _checkIfClose: function(a) {
            if (aS(a).hasClass(aG)) {
                return
            }
            var f = aF.st.closeOnContentClick,
                e = aF.st.closeOnBgClick;
            if (f && e) {
                return !0
            }
            if (!aF.content || aS(a).hasClass("mfp-close") || aF.preloader && a === aF.preloader[0]) {
                return !0
            }
            if (a !== aF.content[0] && !aS.contains(aF.content[0], a)) {
                if (e && aS.contains(document, a)) {
                    return !0
                }
            } else {
                if (f) {
                    return !0
                }
            }
            return !1
        },
        _addClassToMFP: function(b) {
            aF.bgOverlay.addClass(b), aF.wrap.addClass(b)
        },
        _removeClassFromMFP: function(b) {
            this.bgOverlay.removeClass(b), aF.wrap.removeClass(b)
        },
        _hasScrollBar: function(b) {
            return (aF.isIE7 ? az.height() : document.body.scrollHeight) > (b || aB.height())
        },
        _setFocus: function() {
            (aF.st.focus ? aF.content.find(aF.st.focus).eq(0) : aF.wrap).focus()
        },
        _onFocusIn: function(a) {
            if (a.target !== aF.wrap[0] && !aS.contains(aF.wrap[0], a.target)) {
                return aF._setFocus(), !1
            }
        },
        _parseMarkup: function(a, h, g) {
            var f;
            g.data && (h = aS.extend(g.data, h)), at(aN, [a, h, g]), aS.each(h, function(b, j) {
                if (j === undefined || j === !1) {
                    return !0
                }
                f = b.split("_");
                if (f.length > 1) {
                    var i = a.find(aJ + "-" + f[0]);
                    if (i.length > 0) {
                        var e = f[1];
                        e === "replaceWith" ? i[0] !== j[0] && i.replaceWith(j) : e === "img" ? i.is("img") ? i.attr("src", j) : i.replaceWith('<img src="' + j + '" class="' + i.attr("class") + '" />') : i.attr(f[1], j)
                    }
                } else {
                    a.find(aJ + "-" + b).html(j)
                }
            })
        },
        _getScrollbarSize: function() {
            if (aF.scrollbarSize === undefined) {
                var b = document.createElement("div");
                b.id = "mfp-sbm", b.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(b), aF.scrollbarSize = b.offsetWidth - b.clientWidth, document.body.removeChild(b)
            }
            return aF.scrollbarSize
        }
    }, aS.magnificPopup = {
        instance: null,
        proto: aE.prototype,
        modules: [],
        open: function(a, d) {
            return aq(), a ? a = aS.extend(!0, {}, a) : a = {}, a.isObj = !0, a.index = d || 0, this.instance.open(a)
        },
        close: function() {
            return aS.magnificPopup.instance && aS.magnificPopup.instance.close()
        },
        registerModule: function(a, d) {
            d.options && (aS.magnificPopup.defaults[a] = d.options), aS.extend(this.proto, d.proto), this.modules.push(a)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, aS.fn.magnificPopup = function(a) {
        aq();
        var j = aS(this);
        if (typeof a == "string") {
            if (a === "open") {
                var i, h = aD ? j.data("magnificPopup") : j[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                h.items ? i = h.items[g] : (i = j, h.delegate && (i = i.find(h.delegate)), i = i.eq(g)), aF._openClick({
                    mfpEl: i
                }, j, h)
            } else {
                aF.isOpen && aF[a].apply(aF, Array.prototype.slice.call(arguments, 1))
            }
        } else {
            a = aS.extend(!0, {}, a), aD ? j.data("magnificPopup", a) : j[0].magnificPopup = a, aF.addGroup(j, a)
        }
        return j
    };
    var ao = "inline",
        an, am, al, ak = function() {
            al && (am.after(al.addClass(an)).detach(), al = null)
        };
    aS.magnificPopup.registerModule(ao, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                aF.types.push(ao), av(aR + "." + ao, function() {
                    ak()
                })
            },
            getInline: function(a, j) {
                ak();
                if (a.src) {
                    var i = aF.st.inline,
                        h = aS(a.src);
                    if (h.length) {
                        var g = h[0].parentNode;
                        g && g.tagName && (am || (an = i.hiddenClass, am = au(an), an = "mfp-" + an), al = h.after(am).detach().removeClass(an)), aF.updateStatus("ready")
                    } else {
                        aF.updateStatus("error", i.tNotFound), h = aS("<div>")
                    }
                    return a.inlineElement = h, h
                }
                return aF.updateStatus("ready"), aF._parseMarkup(j, {}, a), j
            }
        }
    });
    var aj = "ajax",
        ai, ah = function() {
            ai && aA.removeClass(ai)
        },
        ag = function() {
            ah(), aF.req && aF.req.abort()
        };
    aS.magnificPopup.registerModule(aj, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                aF.types.push(aj), ai = aF.st.ajax.cursor, av(aR + "." + aj, ag), av("BeforeChange." + aj, ag)
            },
            getAjax: function(a) {
                ai && aA.addClass(ai), aF.updateStatus("loading");
                var d = aS.extend({
                    url: a.src,
                    success: function(i, h, g) {
                        var b = {
                            data: i,
                            xhr: g
                        };
                        at("ParseAjax", b), aF.appendContent(aS(b.data), aj), a.finished = !0, ah(), aF._setFocus(), setTimeout(function() {
                            aF.wrap.addClass(aI)
                        }, 16), aF.updateStatus("ready"), at("AjaxContentAdded")
                    },
                    error: function() {
                        ah(), a.finished = a.loadError = !0, aF.updateStatus("error", aF.st.ajax.tError.replace("%url%", a.src))
                    }
                }, aF.st.ajax.settings);
                return aF.req = aS.ajax(d), ""
            }
        }
    });
    var af, ae = function(a) {
        if (a.data && a.data.title !== undefined) {
            return a.data.title
        }
        var d = aF.st.image.titleSrc;
        if (d) {
            if (aS.isFunction(d)) {
                return d.call(aF, a)
            }
            if (a.el) {
                return a.el.attr(d) || ""
            }
        }
        return ""
    };
    aS.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var b = aF.st.image,
                    d = ".image";
                aF.types.push("image"), av(aM + d, function() {
                    aF.currItem.type === "image" && b.cursor && aA.addClass(b.cursor)
                }), av(aR + d, function() {
                    b.cursor && aA.removeClass(b.cursor), aB.off("resize" + aJ)
                }), av("Resize" + d, aF.resizeImage), aF.isLowIE && av("AfterChange", aF.resizeImage)
            },
            resizeImage: function() {
                var d = aF.currItem;
                if (!d || !d.img) {
                    return
                }
                if (aF.st.image.verticalFit) {
                    var c = 0;
                    aF.isLowIE && (c = parseInt(d.img.css("padding-top"), 10) + parseInt(d.img.css("padding-bottom"), 10)), d.img.css("max-height", aF.wH - c)
                }
            },
            _onImageHasSize: function(b) {
                b.img && (b.hasSize = !0, af && clearInterval(af), b.isCheckingImgSize = !1, at("ImageHasSize", b), b.imgHidden && (aF.content && aF.content.removeClass("mfp-loading"), b.imgHidden = !1))
            },
            findImageSize: function(f) {
                var e = 0,
                    h = f.img[0],
                    g = function(a) {
                        af && clearInterval(af), af = setInterval(function() {
                            if (h.naturalWidth > 0) {
                                aF._onImageHasSize(f);
                                return
                            }
                            e > 200 && clearInterval(af), e++, e === 3 ? g(10) : e === 40 ? g(50) : e === 100 && g(500)
                        }, a)
                    };
                g(1)
            },
            getImage: function(a, p) {
                var o = 0,
                    n = function() {
                        a && (a.img[0].complete ? (a.img.off(".mfploader"), a === aF.currItem && (aF._onImageHasSize(a), aF.updateStatus("ready")), a.hasSize = !0, a.loaded = !0, at("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(n, 100) : m()))
                    },
                    m = function() {
                        a && (a.img.off(".mfploader"), a === aF.currItem && (aF._onImageHasSize(a), aF.updateStatus("error", l.tError.replace("%url%", a.src))), a.hasSize = !0, a.loaded = !0, a.loadError = !0)
                    },
                    l = aF.st.image,
                    k = p.find(".mfp-img");
                if (k.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", a.img = aS(j).on("load.mfploader", n).on("error.mfploader", m), j.src = a.src, k.is("img") && (a.img = a.img.clone()), j = a.img[0], j.naturalWidth > 0 ? a.hasSize = !0 : j.width || (a.hasSize = !1)
                }
                return aF._parseMarkup(p, {
                    title: ae(a),
                    img_replaceWith: a.img
                }, a), aF.resizeImage(), a.hasSize ? (af && clearInterval(af), a.loadError ? (p.addClass("mfp-loading"), aF.updateStatus("error", l.tError.replace("%url%", a.src))) : (p.removeClass("mfp-loading"), aF.updateStatus("ready")), p) : (aF.updateStatus("loading"), a.loading = !0, a.hasSize || (a.imgHidden = !0, p.addClass("mfp-loading"), aF.findImageSize(a)), p)
            }
        }
    });
    var ad, ac = function() {
        return ad === undefined && (ad = document.createElement("p").style.MozTransform !== undefined), ad
    };
    aS.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(b) {
                return b.is("img") ? b : b.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var b = aF.st.zoom,
                    p = ".zoom",
                    o;
                if (!b.enabled || !aF.supportsTransition) {
                    return
                }
                var n = b.duration,
                    m = function(a) {
                        var j = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + b.duration / 1000 + "s " + b.easing,
                            h = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            g = "transition";
                        return h["-webkit-" + g] = h["-moz-" + g] = h["-o-" + g] = h[g] = i, j.css(h), j
                    },
                    l = function() {
                        aF.content.css("visibility", "visible")
                    },
                    k, c;
                av("BuildControls" + p, function() {
                    if (aF._allowZoom()) {
                        clearTimeout(k), aF.content.css("visibility", "hidden"), o = aF._getItemToZoom();
                        if (!o) {
                            l();
                            return
                        }
                        c = m(o), c.css(aF._getOffset()), aF.wrap.append(c), k = setTimeout(function() {
                            c.css(aF._getOffset(!0)), k = setTimeout(function() {
                                l(), setTimeout(function() {
                                    c.remove(), o = c = null, at("ZoomAnimationEnded")
                                }, 16)
                            }, n)
                        }, 16)
                    }
                }), av(aQ + p, function() {
                    if (aF._allowZoom()) {
                        clearTimeout(k), aF.st.removalDelay = n;
                        if (!o) {
                            o = aF._getItemToZoom();
                            if (!o) {
                                return
                            }
                            c = m(o)
                        }
                        c.css(aF._getOffset(!0)), aF.wrap.append(c), aF.content.css("visibility", "hidden"), setTimeout(function() {
                            c.css(aF._getOffset())
                        }, 16)
                    }
                }), av(aR + p, function() {
                    aF._allowZoom() && (l(), c && c.remove(), o = null)
                })
            },
            _allowZoom: function() {
                return aF.currItem.type === "image"
            },
            _getItemToZoom: function() {
                return aF.currItem.hasSize ? aF.currItem.img : !1
            },
            _getOffset: function(a) {
                var l;
                a ? l = aF.currItem.img : l = aF.st.zoom.opener(aF.currItem.el || aF.currItem);
                var k = l.offset(),
                    j = parseInt(l.css("padding-top"), 10),
                    i = parseInt(l.css("padding-bottom"), 10);
                k.top -= aS(window).scrollTop() - j;
                var h = {
                    width: l.width(),
                    height: (aD ? l.innerHeight() : l[0].offsetHeight) - i - j
                };
                return ac() ? h["-moz-transform"] = h.transform = "translate(" + k.left + "px," + k.top + "px)" : (h.left = k.left, h.top = k.top), h
            }
        }
    });
    var ab = "iframe",
        aa = "//about:blank",
        Z = function(d) {
            if (aF.currTemplate[ab]) {
                var c = aF.currTemplate[ab].find("iframe");
                c.length && (d || (c[0].src = aa), aF.isIE8 && c.css("display", d ? "block" : "none"))
            }
        };
    aS.magnificPopup.registerModule(ab, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                aF.types.push(ab), av("BeforeChange", function(e, d, f) {
                    d !== f && (d === ab ? Z() : f === ab && Z(!0))
                }), av(aR + "." + ab, function() {
                    Z()
                })
            },
            getIframe: function(a, j) {
                var i = a.src,
                    h = aF.st.iframe;
                aS.each(h.patterns, function() {
                    if (i.indexOf(this.index) > -1) {
                        return this.id && (typeof this.id == "string" ? i = i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : i = this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                    }
                });
                var g = {};
                return h.srcAction && (g[h.srcAction] = i), aF._parseMarkup(j, g, a), aF.updateStatus("ready"), j
            }
        }
    });
    var Y = function(d) {
            var c = aF.items.length;
            return d > c - 1 ? d - c : d < 0 ? c + d : d
        },
        X = function(e, d, f) {
            return e.replace(/%curr%/gi, d + 1).replace(/%total%/gi, f)
        };
    aS.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var f = aF.st.gallery,
                    b = ".mfp-gallery",
                    a = Boolean(aS.fn.mfpFastClick);
                aF.direction = !0;
                if (!f || !f.enabled) {
                    return !1
                }
                ax += " mfp-gallery", av(aM + b, function() {
                    f.navigateByImgClick && aF.wrap.on("click" + b, ".mfp-img", function() {
                        if (aF.items.length > 1) {
                            return aF.next(), !1
                        }
                    }), az.on("keydown" + b, function(c) {
                        c.keyCode === 37 ? aF.prev() : c.keyCode === 39 && aF.next()
                    })
                }), av("UpdateStatus" + b, function(d, c) {
                    c.text && (c.text = X(c.text, aF.currItem.index, aF.items.length))
                }), av(aN + b, function(g, c, j, i) {
                    var h = aF.items.length;
                    j.counter = h > 1 ? X(f.tCounter, i.index, h) : ""
                }), av("BuildControls" + b, function() {
                    if (aF.items.length > 1 && f.arrows && !aF.arrowLeft) {
                        var c = f.arrowMarkup,
                            i = aF.arrowLeft = aS(c.replace(/%title%/gi, f.tPrev).replace(/%dir%/gi, "left")).addClass(aG),
                            h = aF.arrowRight = aS(c.replace(/%title%/gi, f.tNext).replace(/%dir%/gi, "right")).addClass(aG),
                            e = a ? "mfpFastClick" : "click";
                        i[e](function() {
                            aF.prev()
                        }), h[e](function() {
                            aF.next()
                        }), aF.isIE7 && (au("b", i[0], !1, !0), au("a", i[0], !1, !0), au("b", h[0], !1, !0), au("a", h[0], !1, !0)), aF.container.append(i.add(h))
                    }
                }), av(aL + b, function() {
                    aF._preloadTimeout && clearTimeout(aF._preloadTimeout), aF._preloadTimeout = setTimeout(function() {
                        aF.preloadNearbyImages(), aF._preloadTimeout = null
                    }, 16)
                }), av(aR + b, function() {
                    az.off(b), aF.wrap.off("click" + b), aF.arrowLeft && a && aF.arrowLeft.add(aF.arrowRight).destroyMfpFastClick(), aF.arrowRight = aF.arrowLeft = null
                })
            },
            next: function() {
                aF.direction = !0, aF.index = Y(aF.index + 1), aF.updateItemHTML()
            },
            prev: function() {
                aF.direction = !1, aF.index = Y(aF.index - 1), aF.updateItemHTML()
            },
            goTo: function(b) {
                aF.direction = b >= aF.index, aF.index = b, aF.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var f = aF.st.gallery.preload,
                    e = Math.min(f[0], aF.items.length),
                    h = Math.min(f[1], aF.items.length),
                    g;
                for (g = 1; g <= (aF.direction ? h : e); g++) {
                    aF._preloadItem(aF.index + g)
                }
                for (g = 1; g <= (aF.direction ? e : h); g++) {
                    aF._preloadItem(aF.index - g)
                }
            },
            _preloadItem: function(a) {
                a = Y(a);
                if (aF.items[a].preloaded) {
                    return
                }
                var d = aF.items[a];
                d.parsed || (d = aF.parseEl(a)), at("LazyLoad", d), d.type === "image" && (d.img = aS('<img class="mfp-img" />').on("load.mfploader", function() {
                    d.hasSize = !0
                }).on("error.mfploader", function() {
                    d.hasSize = !0, d.loadError = !0, at("LazyLoadError", d)
                }).attr("src", d.src)), d.preloaded = !0
            }
        }
    });
    var W = "retina";
    aS.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function(b) {
                return b.src.replace(/\.\w+$/, function(c) {
                    return "@2x" + c
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var d = aF.st.retina,
                        c = d.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (av("ImageHasSize." + W, function(b, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), av("ElementParse." + W, function(b, a) {
                        a.src = d.replaceSrc(a, c)
                    }))
                }
            }
        }
    }),
        function() {
            var a = 1000,
                j = "ontouchstart" in window,
                i = function() {
                    aB.off("touchmove" + g + " touchend" + g)
                },
                h = "mfpFastClick",
                g = "." + h;
            aS.fn.mfpFastClick = function(b) {
                return aS(this).each(function() {
                    var q = aS(this),
                        p;
                    if (j) {
                        var o, f, e, d, c, r;
                        q.on("touchstart" + g, function(k) {
                            d = !1, r = 1, c = k.originalEvent ? k.originalEvent.touches[0] : k.touches[0], f = c.clientX, e = c.clientY, aB.on("touchmove" + g, function(l) {
                                c = l.originalEvent ? l.originalEvent.touches : l.touches, r = c.length, c = c[0];
                                if (Math.abs(c.clientX - f) > 10 || Math.abs(c.clientY - e) > 10) {
                                    d = !0, i()
                                }
                            }).on("touchend" + g, function(l) {
                                i();
                                if (d || r > 1) {
                                    return
                                }
                                p = !0, l.preventDefault(), clearTimeout(o), o = setTimeout(function() {
                                    p = !1
                                }, a), b()
                            })
                        })
                    }
                    q.on("click" + g, function() {
                        p || b()
                    })
                })
            }, aS.fn.destroyMfpFastClick = function() {
                aS(this).off("touchstart" + g + " click" + g), j && aB.off("touchmove" + g + " touchend" + g)
            }
        }(), aq()
})(window.jQuery || window.Zepto);

(function() {
    function a() {
        return (window.innerWidth < 641) ? 2 : (window.innerWidth > 640) ? 3 : 4
    }
    $(window).load(function() {
        $(".without-thumb").flexslider({
            animation: "slide",
            animationLoop: true,
            slideshow: false
        });
        $(".without-thumb").magnificPopup({
            delegate: "a.without-thumb",
            type: "image",
            tLoading: "Loading image #%curr% …",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a class="without-thumb" href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(b) {
                    return b.el.attr("title")
                }
            }
        });
        if ($(window).width() < 769) {
            $(".product").flexslider({
                animation: "slide",
                controlNav: true,
                directionNav: true,
                animationLoop: true,
                slideshow: false
            });
            $(".product-thumbs").hide()
        } else {
            $(".product-thumbs").flexslider({
                animation: "slide",
                direction: "vertical",
                controlNav: false,
                animationLoop: true,
                slideshow: false,
                itemWidth: 200,
                itemMargin: 8,
                asNavFor: ".product",
                minItems: 3,
                maxItems: 4
            });
            $(".product").flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: true,
                slideshow: false,
                sync: ".product-thumbs"
            })
        }
    });
    
    
    
    $(document).ready(function() {
        $(".popup-with-form").magnificPopup({
            type: "inline",
            preloader: false,
            focus: "#name",
            callbacks: {
                beforeOpen: function() {
                    if ($(window).width() < 641) {
                        this.st.focus = false
                    } else {
                        this.st.focus = "#name"
                    }
                }
            }
        });
        $(".toggle").click(function(b) {
            b.preventDefault();
            $(this).toggleClass("is-active");
            $(this).closest(".has-toggle").find(".toggled").toggleClass("transition")
        });
        $(".m-related-products .toggle").toggleClass("is-active");
        $(".m-related-products .toggled").toggleClass("transition");
        $(".m-related-items .toggle").toggleClass("is-active");
        $(".m-related-items .toggled").toggleClass("transition");
        if ($(".buy-online").length) {
            $.ajax({
                url: "/en/watches/buy-online/geo",
                method: "post",
                cache: false
            }).done(function(c) {
                if (c) {
                    var b = $(".buy-online").find("ul.select-shop li.shop-link." + c);
                    if (b.length) {
                        $(".buy-online-button").removeClass("hidden-for-small-up");
                        b.removeClass("hide")
                    }
                }
            })
        }
    });
    $(".zoom").magnificPopup({
        type: "image",
        callbacks: {
            beforeOpen: function() {
                var b = ($(".product").data("flexslider").currentSlide || 0);
                var c = $('.product .slides li:not(".clone")').eq(b).find("img").attr("data-zoom");
                $(".zoom").attr("data-mfp-src", c)
            }
        }
    });
    $(".popup-iframe").magnificPopup({
        type: "iframe",
        iframe: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" scrolling="no" allowfullscreen></iframe></div>'
        },
        alignTop: false,
        mainClass: "addfav-popup"
    });
    $("main").magnificPopup({
        delegate: ".popup-iframe-auto",
        type: "iframe",
        alignTop: true,
        iframe: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" scrolling="auto" allowfullscreen></iframe></div>'
        },
        mainClass: "addfav-popup"
    })
}());