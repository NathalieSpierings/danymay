/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ +o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
! function(t) {
    var e = function(c, R) {
        "use strict";
        if (R.getElementsByClassName) {
            var k, O, B = R.documentElement,
                u = c.Date,
                a = c.HTMLPictureElement,
                I = "addEventListener",
                $ = "getAttribute",
                U = c[I],
                H = c.setTimeout,
                o = c.requestAnimationFrame || H,
                l = c.requestIdleCallback,
                q = /^picture$/i,
                r = ["load", "error", "lazyincluded", "_lazyloaded"],
                i = {},
                D = Array.prototype.forEach,
                X = function(t, e) {
                    return i[e] || (i[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), i[e].test(t[$]("class") || "") && i[e]
                },
                J = function(t, e) {
                    X(t, e) || t.setAttribute("class", (t[$]("class") || "").trim() + " " + e)
                },
                Q = function(t, e) {
                    var i;
                    (i = X(t, e)) && t.setAttribute("class", (t[$]("class") || "").replace(i, " "))
                },
                V = function(e, i, t) {
                    var a = t ? I : "removeEventListener";
                    t && V(e, i), r.forEach(function(t) {
                        e[a](t, i)
                    })
                },
                G = function(t, e, i, a, r) {
                    var n = R.createEvent("Event");
                    return i || (i = {}), i.instance = k, n.initEvent(e, !a, !r), n.detail = i, t.dispatchEvent(n), n
                },
                K = function(t, e) {
                    var i;
                    !a && (i = c.picturefill || O.pf) ? (e && e.src && !t[$]("srcset") && t.setAttribute("srcset", e.src), i({
                        reevaluate: !0,
                        elements: [t]
                    })) : e && e.src && (t.src = e.src)
                },
                Y = function(t, e) {
                    return (getComputedStyle(t, null) || {})[e]
                },
                s = function(t, e, i) {
                    for (i = i || t.offsetWidth; i < O.minSize && e && !t._lazysizesWidth;) i = e.offsetWidth, e = e.parentNode;
                    return i
                },
                Z = function() {
                    var i, a, e = [],
                        r = [],
                        n = e,
                        s = function() {
                            var t = n;
                            for (n = e.length ? r : e, i = !0, a = !1; t.length;) t.shift()();
                            i = !1
                        },
                        t = function(t, e) {
                            i && !e ? t.apply(this, arguments) : (n.push(t), a || (a = !0, (R.hidden ? H : o)(s)))
                        };
                    return t._lsFlush = s, t
                }(),
                tt = function(i, t) {
                    return t ? function() {
                        Z(i)
                    } : function() {
                        var t = this,
                            e = arguments;
                        Z(function() {
                            i.apply(t, e)
                        })
                    }
                },
                et = function(t) {
                    var i, a = 0,
                        r = O.throttleDelay,
                        n = O.ricTimeout,
                        e = function() {
                            i = !1, a = u.now(), t()
                        },
                        s = l && n > 49 ? function() {
                            l(e, {
                                timeout: n
                            }), n !== O.ricTimeout && (n = O.ricTimeout)
                        } : tt(function() {
                            H(e)
                        }, !0);
                    return function(t) {
                        var e;
                        (t = !0 === t) && (n = 33), i || (i = !0, e = r - (u.now() - a), e < 0 && (e = 0), t || e < 9 ? s() : H(s, e))
                    }
                },
                it = function(t) {
                    var e, i, a = 99,
                        r = function() {
                            e = null, t()
                        },
                        n = function() {
                            var t = u.now() - i;
                            t < a ? H(n, a - t) : (l || r)(r)
                        };
                    return function() {
                        i = u.now(), e || (e = H(n, a))
                    }
                };
            ! function() {
                var t, e = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                O = c.lazySizesConfig || c.lazysizesConfig || {};
                for (t in e) t in O || (O[t] = e[t]);
                c.lazySizesConfig = O, H(function() {
                    O.init && n()
                })
            }();
            var t = function() {
                    var y, z, d, p, t, g, m, v, b, h, A, C, n = /^img$/i,
                        f = /^iframe$/i,
                        E = "onscroll" in c && !/(gle|ing)bot/.test(navigator.userAgent),
                        w = 0,
                        _ = 0,
                        S = 0,
                        N = -1,
                        P = function(t) {
                            S--, (!t || S < 0 || !t.target) && (S = 0)
                        },
                        L = function(t) {
                            return null == C && (C = "hidden" == Y(R.body, "visibility")), C || "hidden" != Y(t.parentNode, "visibility") && "hidden" != Y(t, "visibility")
                        },
                        M = function(t, e) {
                            var i, a = t,
                                r = L(t);
                            for (v -= e, A += e, b -= e, h += e; r && (a = a.offsetParent) && a != R.body && a != B;)(r = (Y(a, "opacity") || 1) > 0) && "visible" != Y(a, "overflow") && (i = a.getBoundingClientRect(), r = h > i.left && b < i.right && A > i.top - 1 && v < i.bottom + 1);
                            return r
                        },
                        e = function() {
                            var t, e, i, a, r, n, s, o, l, c, u, d, f = k.elements;
                            if ((p = O.loadMode) && S < 8 && (t = f.length)) {
                                for (e = 0, N++; e < t; e++)
                                    if (f[e] && !f[e]._lazyRace)
                                        if (!E || k.prematureUnveil && k.prematureUnveil(f[e])) W(f[e]);
                                        else if ((o = f[e][$]("data-expand")) && (n = 1 * o) || (n = _), c || (c = !O.expand || O.expand < 1 ? B.clientHeight > 500 && B.clientWidth > 500 ? 500 : 370 : O.expand, k._defEx = c, u = c * O.expFactor, d = O.hFac, C = null, _ < u && S < 1 && N > 2 && p > 2 && !R.hidden ? (_ = u, N = 0) : _ = p > 1 && N > 1 && S < 6 ? c : w), l !== n && (g = innerWidth + n * d, m = innerHeight + n, s = -1 * n, l = n), i = f[e].getBoundingClientRect(), (A = i.bottom) >= s && (v = i.top) <= m && (h = i.right) >= s * d && (b = i.left) <= g && (A || h || b || v) && (O.loadHidden || L(f[e])) && (z && S < 3 && !o && (p < 3 || N < 4) || M(f[e], n))) {
                                    if (W(f[e]), r = !0, S > 9) break
                                } else !r && z && !a && S < 4 && N < 4 && p > 2 && (y[0] || O.preloadAfterLoad) && (y[0] || !o && (A || h || b || v || "auto" != f[e][$](O.sizesAttr))) && (a = y[0] || f[e]);
                                a && !r && W(a)
                            }
                        },
                        i = et(e),
                        F = function(t) {
                            var e = t.target;
                            if (e._lazyCache) return void delete e._lazyCache;
                            P(t), J(e, O.loadedClass), Q(e, O.loadingClass), V(e, x), G(e, "lazyloaded")
                        },
                        a = tt(F),
                        x = function(t) {
                            a({
                                target: t.target
                            })
                        },
                        T = function(e, i) {
                            try {
                                e.contentWindow.location.replace(i)
                            } catch (t) {
                                e.src = i
                            }
                        },
                        j = function(t) {
                            var e, i = t[$](O.srcsetAttr);
                            (e = O.customMedia[t[$]("data-media") || t[$]("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i)
                        },
                        s = tt(function(e, t, i, a, r) {
                            var n, s, o, l, c, u;
                            (c = G(e, "lazybeforeunveil", t)).defaultPrevented || (a && (i ? J(e, O.autosizesClass) : e.setAttribute("sizes", a)), s = e[$](O.srcsetAttr), n = e[$](O.srcAttr), r && (o = e.parentNode, l = o && q.test(o.nodeName || "")), u = t.firesLoad || "src" in e && (s || n || l), c = {
                                target: e
                            }, J(e, O.loadingClass), u && (clearTimeout(d), d = H(P, 2500), V(e, x, !0)), l && D.call(o.getElementsByTagName("source"), j), s ? e.setAttribute("srcset", s) : n && !l && (f.test(e.nodeName) ? T(e, n) : e.src = n), r && (s || l) && K(e, {
                                src: n
                            })), e._lazyRace && delete e._lazyRace, Q(e, O.lazyClass), Z(function() {
                                var t = e.complete && e.naturalWidth > 1;
                                u && !t || (t && J(e, "ls-is-cached"), F(c), e._lazyCache = !0, H(function() {
                                    "_lazyCache" in e && delete e._lazyCache
                                }, 9)), "lazy" == e.loading && S--
                            }, !0)
                        }),
                        W = function(t) {
                            if (!t._lazyRace) {
                                var e, i = n.test(t.nodeName),
                                    a = i && (t[$](O.sizesAttr) || t[$]("sizes")),
                                    r = "auto" == a;
                                (!r && z || !i || !t[$]("src") && !t.srcset || t.complete || X(t, O.errorClass) || !X(t, O.lazyClass)) && (e = G(t, "lazyunveilread").detail, r && at.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, S++, s(t, e, r, a, i))
                            }
                        },
                        r = it(function() {
                            O.loadMode = 3, i()
                        }),
                        o = function() {
                            3 == O.loadMode && (O.loadMode = 2), r()
                        },
                        l = function() {
                            if (!z) {
                                if (u.now() - t < 999) return void H(l, 999);
                                z = !0, O.loadMode = 3, i(), U("scroll", o, !0)
                            }
                        };
                    return {
                        _: function() {
                            t = u.now(), k.elements = R.getElementsByClassName(O.lazyClass), y = R.getElementsByClassName(O.lazyClass + " " + O.preloadClass), U("scroll", i, !0), U("resize", i, !0), c.MutationObserver ? new MutationObserver(i).observe(B, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (B[I]("DOMNodeInserted", i, !0), B[I]("DOMAttrModified", i, !0), setInterval(i, 999)), U("hashchange", i, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                                R[I](t, i, !0)
                            }), /d$|^c/.test(R.readyState) ? l() : (U("load", l), R[I]("DOMContentLoaded", i), H(l, 2e4)), k.elements.length ? (e(), Z._lsFlush()) : i()
                        },
                        checkElems: i,
                        unveil: W,
                        _aLSL: o
                    }
                }(),
                at = function() {
                    var i, n = tt(function(t, e, i, a) {
                            var r, n, s;
                            if (t._lazysizesWidth = a, a += "px", t.setAttribute("sizes", a), q.test(e.nodeName || ""))
                                for (r = e.getElementsByTagName("source"), n = 0, s = r.length; n < s; n++) r[n].setAttribute("sizes", a);
                            i.detail.dataAttr || K(t, i.detail)
                        }),
                        a = function(t, e, i) {
                            var a, r = t.parentNode;
                            r && (i = s(t, r, i), a = G(t, "lazybeforesizes", {
                                width: i,
                                dataAttr: !!e
                            }), a.defaultPrevented || (i = a.detail.width) && i !== t._lazysizesWidth && n(t, r, a, i))
                        },
                        t = function() {
                            var t, e = i.length;
                            if (e)
                                for (t = 0; t < e; t++) a(i[t])
                        },
                        e = it(t);
                    return {
                        _: function() {
                            i = R.getElementsByClassName(O.autosizesClass), U("resize", e)
                        },
                        checkElems: e,
                        updateElem: a
                    }
                }(),
                n = function() {
                    n.i || (n.i = !0, at._(), t._())
                };
            return k = {
                cfg: O,
                autoSizer: at,
                loader: t,
                init: n,
                uP: K,
                aC: J,
                rC: Q,
                hC: X,
                fire: G,
                gW: s,
                rAF: Z
            }
        }
    }(t, t.document);
    t.lazySizes = e, "object" == typeof module && module.exports && (module.exports = e)
}(window),
function(t, e) {
    var i = function() {
        e(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0)
    };
    e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("lazysizes")) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0)
}(window, function(d, c, z) {
    "use strict";

    function p(t, e, i) {
        var n, s, o, a = 0,
            r = 0,
            l = i;
        if (t) {
            if ("container" === e.ratio) {
                for (a = l.scrollWidth, r = l.scrollHeight; !(a && r || l === c);) a = (l = l.parentNode).scrollWidth, r = l.scrollHeight;
                a && r && (e.ratio = r / a)
            }
            n = t, s = e, (o = []).srcset = [], s.absUrl && (E.setAttribute("href", n), n = E.href), n = ((s.prefix || "") + n + (s.postfix || "")).replace(y, function(t, e) {
                return u[typeof s[e]] ? s[e] : t
            }), s.widths.forEach(function(t) {
                var e = s.widthmap[t] || t,
                    i = s.aspectratio || s.ratio,
                    a = !s.aspectratio && b.traditionalRatio,
                    r = {
                        u: n.replace(h, e).replace(f, i ? a ? Math.round(t * i) : Math.round(t / i) : ""),
                        w: t
                    };
                o.push(r), o.srcset.push(r.c = r.u + " " + t + "w")
            }), (t = o).isPicture = e.isPicture, w && "IMG" == i.nodeName.toUpperCase() ? i.removeAttribute(v.srcsetAttr) : i.setAttribute(v.srcsetAttr, t.srcset.join(", ")), Object.defineProperty(i, "_lazyrias", {
                value: t,
                writable: !0
            })
        }
    }

    function g(t, e) {
        var i = function(r, t) {
            var e, n = d.getComputedStyle(r),
                i = r.parentNode,
                s = {
                    isPicture: !(!i || !l.test(i.nodeName || ""))
                },
                a = function(t, e) {
                    var i, a = r.getAttribute("data-" + t);
                    if (a || (i = n.getPropertyValue("--ls-" + t)) && (a = i.trim()), a) {
                        if ("true" == a) a = !0;
                        else if ("false" == a) a = !1;
                        else if (o.test(a)) a = parseFloat(a);
                        else if ("function" == typeof b[t]) a = b[t](r, a);
                        else if (A.test(a)) try {
                            a = JSON.parse(a)
                        } catch (t) {}
                        s[t] = a
                    } else t in b && "function" != typeof b[t] ? s[t] = b[t] : e && "function" == typeof b[t] && (s[t] = b[t](r, a))
                };
            for (e in b) a(e);
            return t.replace(y, function(t, e) {
                e in s || a(e, !0)
            }), s
        }(t, e);
        return b.modifyOptions.call(t, {
            target: t,
            details: i,
            detail: i
        }), z.fire(t, "lazyriasmodifyoptions", i), i
    }

    function m(t) {
        return t.getAttribute(t.getAttribute("data-srcattr") || b.srcAttr) || t.getAttribute(v.srcsetAttr) || t.getAttribute(v.srcAttr) || t.getAttribute("data-pfsrcset") || ""
    }
    var v, b, u = {
            string: 1,
            number: 1
        },
        o = /^\-*\+*\d+\.*\d*$/,
        l = /^picture$/i,
        h = /\s*\{\s*width\s*\}\s*/i,
        f = /\s*\{\s*height\s*\}\s*/i,
        y = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
        A = /^\[.*\]|\{.*\}$/,
        C = /^(?:auto|\d+(px)?)$/,
        E = c.createElement("a"),
        t = c.createElement("img"),
        w = "srcset" in t && !("sizes" in t),
        _ = !!d.HTMLPictureElement && !w;
    ! function() {
        var t, e = {
            prefix: "",
            postfix: "",
            srcAttr: "data-src",
            absUrl: !1,
            modifyOptions: function() {},
            widthmap: {},
            ratio: !1,
            traditionalRatio: !1,
            aspectratio: !1
        };
        for (t in (v = z && z.cfg || d.lazySizesConfig) || (v = {}, d.lazySizesConfig = v), v.supportsType || (v.supportsType = function(t) {
                return !t
            }), v.rias || (v.rias = {}), "widths" in (b = v.rias) || (b.widths = [], function(t) {
                for (var e, i = 0; !e || e < 3e3;) 30 < (i += 5) && (i += 1), e = 36 * i, t.push(e)
            }(b.widths)), e) t in b || (b[t] = e[t])
    }(), addEventListener("lazybeforesizes", function(t) {
        if (t.detail.instance == z) {
            var e, i, a, r, n, s, o, l, c, u, d, f, y = t.target;
            if (t.detail.dataAttr && !t.defaultPrevented && !b.disabled && (l = y.getAttribute(v.sizesAttr) || y.getAttribute("sizes")) && C.test(l)) {
                if (i = g(y, e = m(y)), u = h.test(i.prefix) || h.test(i.postfix), i.isPicture && (a = y.parentNode))
                    for (n = 0, s = (r = a.getElementsByTagName("source")).length; n < s; n++)(u || h.test(o = m(r[n]))) && (p(o, i, r[n]), d = !0);
                u || h.test(e) ? (p(e, i, y), d = !0) : d && ((f = []).srcset = [], f.isPicture = !0, Object.defineProperty(y, "_lazyrias", {
                    value: f,
                    writable: !0
                })), d && (_ ? y.removeAttribute(v.srcAttr) : "auto" != l && (c = {
                    width: parseInt(l, 10)
                }, S({
                    target: y,
                    detail: c
                })))
            }
        }
    }, !0);
    var a, S = (a = function(t) {
        if (t.detail.instance == z) {
            var e, i = t.target;
            if (!w && (d.respimage || d.picturefill || lazySizesConfig.pf)) return void c.removeEventListener("lazybeforesizes", a);
            ("_lazyrias" in i || t.detail.dataAttr && P(i, !0)) && (e = r(i, t.detail.width)) && e.u && i._lazyrias.cur != e.u && (i._lazyrias.cur = e.u, e.cached = !0, z.rAF(function() {
                i.setAttribute(v.srcAttr, e.u), i.setAttribute("src", e.u)
            }))
        }
    }, _ ? a = function() {} : addEventListener("lazybeforesizes", a), a);

    function N(t, e) {
        return t.w - e.w
    }

    function P(t, e) {
        var i;
        return !t._lazyrias && z.pWS && (i = z.pWS(t.getAttribute(v.srcsetAttr || ""))).length && (Object.defineProperty(t, "_lazyrias", {
            value: i,
            writable: !0
        }), e && t.parentNode && (i.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase())), t._lazyrias
    }

    function r(t, e) {
        var i, a, r, n, s, o, l, c, u = t._lazyrias;
        if (u.isPicture && d.matchMedia)
            for (a = 0, r = (i = t.parentNode.getElementsByTagName("source")).length; a < r; a++)
                if (P(i[a]) && !i[a].getAttribute("type") && (!(n = i[a].getAttribute("media")) || (matchMedia(n) || {}).matches)) {
                    u = i[a]._lazyrias;
                    break
                }
        return (!u.w || u.w < e) && (u.w = e, u.d = (o = t, l = d.devicePixelRatio || 1, c = z.getX && z.getX(o), Math.min(c || l, 2.4, l)), s = function(t) {
            for (var e, i, a = t.length, r = t[a - 1], n = 0; n < a; n++)
                if ((r = t[n]).d = r.w / t.w, r.d >= t.d) {
                    !r.cached && (e = t[n - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (i = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * i), e.d + (r.d - t.d) * i > t.d && (r = e));
                    break
                }
            return r
        }(u.sort(N))), s
    }
}),
function(t, e) {
    var i = function() {
        e(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0)
    };
    e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("lazysizes")) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0)
}(window, function(t, d, f) {
    "use strict";
    var y, z, p, a, n, s, g, m;
    t.addEventListener && (y = /\s+/g, z = /\s*\|\s+|\s+\|\s*/g, p = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/, a = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/, n = /\(|\)|'/, s = {
        contain: 1,
        cover: 1
    }, g = function(t, e) {
        var i;
        e && ((i = e.match(a)) && i[1] ? t.setAttribute("type", i[1]) : t.setAttribute("media", lazySizesConfig.customMedia[e] || e))
    }, m = function(t) {
        var e, i, a, r;
        t.target._lazybgset && (i = (e = t.target)._lazybgset, (a = e.currentSrc || e.src) && ((r = f.fire(i, "bgsetproxy", {
            src: a,
            useSrc: n.test(a) ? JSON.stringify(a) : a
        })).defaultPrevented || (i.style.backgroundImage = "url(" + r.detail.useSrc + ")")), e._lazybgsetLoading && (f.fire(i, "_lazyloaded", {}, !1, !0), delete e._lazybgsetLoading))
    }, addEventListener("lazybeforeunveil", function(t) {
        var e, i, a, r, n, s, o, l, c, u;
        !t.defaultPrevented && (e = t.target.getAttribute("data-bgset")) && (a = t.target, (i = d.createElement("img")).alt = "", i._lazybgsetLoading = !0, t.detail.firesLoad = !0, r = e, n = a, s = i, o = d.createElement("picture"), l = n.getAttribute(lazySizesConfig.sizesAttr), c = n.getAttribute("data-ratio"), u = n.getAttribute("data-optimumx"), n._lazybgset && n._lazybgset.parentNode == n && n.removeChild(n._lazybgset), Object.defineProperty(s, "_lazybgset", {
            value: n,
            writable: !0
        }), Object.defineProperty(n, "_lazybgset", {
            value: o,
            writable: !0
        }), r = r.replace(y, " ").split(z), o.style.display = "none", s.className = lazySizesConfig.lazyClass, 1 != r.length || l || (l = "auto"), r.forEach(function(t) {
            var e, i = d.createElement("source");
            l && "auto" != l && i.setAttribute("sizes", l), (e = t.match(p)) ? (i.setAttribute(lazySizesConfig.srcsetAttr, e[1]), g(i, e[2]), g(i, e[3])) : i.setAttribute(lazySizesConfig.srcsetAttr, t), o.appendChild(i)
        }), l && (s.setAttribute(lazySizesConfig.sizesAttr, l), n.removeAttribute(lazySizesConfig.sizesAttr), n.removeAttribute("sizes")), u && s.setAttribute("data-optimumx", u), c && s.setAttribute("data-ratio", c), o.appendChild(s), n.appendChild(o), setTimeout(function() {
            f.loader.unveil(i), f.rAF(function() {
                f.fire(i, "_lazyloaded", {}, !0, !0), i.complete && m({
                    target: i
                })
            })
        }))
    }), d.addEventListener("load", m, !0), t.addEventListener("lazybeforesizes", function(t) {
        var e, i, a, r;
        t.detail.instance == f && t.target._lazybgset && t.detail.dataAttr && (e = t.target._lazybgset, a = e, r = (getComputedStyle(a) || {
            getPropertyValue: function() {}
        }).getPropertyValue("background-size"), !s[r] && s[a.style.backgroundSize] && (r = a.style.backgroundSize), s[i = r] && (t.target._lazysizesParentFit = i, f.rAF(function() {
            t.target.setAttribute("data-parent-fit", i), t.target._lazysizesParentFit && delete t.target._lazysizesParentFit
        })))
    }, !0), d.documentElement.addEventListener("lazybeforesizes", function(t) {
        var e, i;
        !t.defaultPrevented && t.target._lazybgset && t.detail.instance == f && (t.detail.width = (e = t.target._lazybgset, i = f.gW(e, e.parentNode), (!e._lazysizesWidth || i > e._lazysizesWidth) && (e._lazysizesWidth = i), e._lazysizesWidth))
    }))
}),
function(e, i) {
    var a = function(t) {
        i(e.lazySizes, t), e.removeEventListener("lazyunveilread", a, !0)
    };
    i = i.bind(null, e, e.document), "object" == typeof module && module.exports ? i(require("lazysizes")) : e.lazySizes ? a() : e.addEventListener("lazyunveilread", a, !0)
}(window, function(t, e, c, i) {
    "use strict";

    function s(i, a) {
        function r() {
            var t = i.currentSrc || i.src;
            t && n !== t && (n = t, l.backgroundImage = "url(" + (f.test(t) ? JSON.stringify(t) : t) + ")", e || (e = !0, c.rC(o, s.loadingClass), c.aC(o, s.loadedClass)))
        }

        function t() {
            c.rAF(r)
        }
        var e, n, s = c.cfg,
            o = i.cloneNode(!1),
            l = o.style;
        i._lazysizesParentFit = a.fit, i.addEventListener("lazyloaded", t, !0), i.addEventListener("load", t, !0), o.addEventListener("load", function() {
            var t = o.currentSrc || o.src;
            t && t != d && (o.src = d, o.srcset = "")
        }), c.rAF(function() {
            var t = i,
                e = i.parentNode;
            "PICTURE" == e.nodeName.toUpperCase() && (e = (t = e).parentNode), c.rC(o, s.loadedClass), c.rC(o, s.lazyClass), c.aC(o, s.loadingClass), c.aC(o, s.objectFitClass || "lazysizes-display-clone"), o.getAttribute(s.srcsetAttr) && o.setAttribute(s.srcsetAttr, ""), o.getAttribute(s.srcAttr) && o.setAttribute(s.srcAttr, ""), o.src = d, o.srcset = "", l.backgroundRepeat = "no-repeat", l.backgroundPosition = a.position, l.backgroundSize = a.fit, t.style.display = "none", i.setAttribute("data-parent-fit", a.fit), i.setAttribute("data-parent-container", "prev"), e.insertBefore(o, t), i._lazysizesParentFit && delete i._lazysizesParentFit, i.complete && r()
        })
    }
    var a, r = e.createElement("a").style,
        o = "objectFit" in r,
        l = /object-fit["']*\s*:\s*["']*(contain|cover)/,
        u = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
        d = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        f = /\(|\)|'/,
        y = {
            center: "center",
            "50% 50%": "center"
        };
    o && (o && "objectPosition" in r) || (a = function(t) {
        var e, i, a, r, n;
        t.detail.instance == c && (e = t.target, a = (getComputedStyle(e, null) || {}).fontFamily || "", r = a.match(l) || "", n = (n = r && a.match(u) || "") && n[1], !(i = {
            fit: r && r[1] || "",
            position: y[n] || n || "center"
        }).fit || o && "center" == i.position || s(e, i))
    }, t.addEventListener("lazyunveilread", a, !0), i && i.detail && a(i))
}),
function(t, e) {
    var i = function() {
        e(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0)
    };
    e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("lazysizes")) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0)
}(window, function(u, t, i) {
    "use strict";
    var d, s, o, f, l;
    u.addEventListener && (d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, s = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/, o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, f = /^picture$/i, l = {
        getParent: function(t, e) {
            var i = t,
                a = t.parentNode;
            return e && "prev" != e || !a || !f.test(a.nodeName || "") || (a = a.parentNode), "self" != e && (i = "prev" == e ? t.previousElementSibling : e && (a.closest || u.jQuery) && (a.closest ? a.closest(e) : jQuery(a).closest(e)[0]) || a), i
        },
        getFit: function(t) {
            var e, i, a = getComputedStyle(t, null) || {},
                r = a.content || a.fontFamily,
                n = {
                    fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
                };
            return !n.fit && r && (e = r.match(s)) && (n.fit = e[1]), n.fit ? (!(i = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && r && (e = r.match(o)) && (i = e[1]), n.parent = l.getParent(t, i)) : n.fit = a.objectFit, n
        },
        getImageRatio: function(t) {
            for (var e, i, a, r, n, s, o = t.parentNode, l = o && f.test(o.nodeName || "") ? o.querySelectorAll("source, img") : [t], c = 0; c < l.length; c++)
                if (e = (t = l[c]).getAttribute(lazySizesConfig.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || "", i = t._lsMedia || t.getAttribute("media"), i = lazySizesConfig.customMedia[t.getAttribute("data-media") || i] || i, e && (!i || (u.matchMedia && matchMedia(i) || {}).matches)) {
                    (a = parseFloat(t.getAttribute("data-aspectratio"))) || (s = (r = e.match(d)) ? "w" == r[2] ? (n = r[1], r[3]) : (n = r[3], r[1]) : (n = t.getAttribute("width"), t.getAttribute("height")), a = n / s);
                    break
                }
            return a
        },
        calculateSize: function(t, e) {
            var i, a, r, n, s = this.getFit(t),
                o = s.fit,
                l = s.parent;
            return "width" == o || ("contain" == o || "cover" == o) && (r = this.getImageRatio(t)) ? (l ? e = l.clientWidth : l = t, n = e, "width" == o ? n = e : 40 < (a = l.clientHeight) && (i = e / a) && ("cover" == o && i < r || "contain" == o && r < i) && (n = e * (r / i)), n) : e
        }
    }, i.parentFit = l, t.addEventListener("lazybeforesizes", function(t) {
        var e;
        t.defaultPrevented || t.detail.instance != i || (e = t.target, t.detail.width = l.calculateSize(e, t.detail.width))
    }))
}),
function(t, e) {
    var i = function() {
        e(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0)
    };
    e = e.bind(null, t, t.document), "object" == typeof module && module.exports ? e(require("lazysizes")) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0)
}(window, function(d, r, f) {
    "use strict";
    var a, n, s, e, o, i, l, y, c, u, z, p = f && f.cfg,
        t = r.createElement("img"),
        g = "sizes" in t && "srcset" in t,
        m = /\s+\d+h/g,
        v = (n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, s = Array.prototype.forEach, function() {
            function i(t) {
                var e, i, a = t.getAttribute(lazySizesConfig.srcsetAttr);
                a && (i = a.match(n)) && ((e = "w" == i[2] ? i[1] / i[3] : i[3] / i[1]) && t.setAttribute("data-aspectratio", e), t.setAttribute(lazySizesConfig.srcsetAttr, a.replace(m, "")))
            }

            function t(t) {
                var e;
                t.detail.instance == f && ((e = t.target.parentNode) && "PICTURE" == e.nodeName && s.call(e.getElementsByTagName("source"), i), i(t.target))
            }

            function e() {
                a.currentSrc && r.removeEventListener("lazybeforeunveil", t)
            }
            var a = r.createElement("img");
            r.addEventListener("lazybeforeunveil", t), a.onload = e, a.onerror = e, a.srcset = "data:,a 1w 1h", a.complete && e()
        });

    function b(t, e) {
        return t.w - e.w
    }

    function h(t, e) {
        var i, a = t.getAttribute("srcset") || t.getAttribute(p.srcsetAttr);
        !a && e && (a = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(p.srcAttr) || t.getAttribute("src")), t._lazypolyfill && t._lazypolyfill._set == a || (i = c(a || ""), e && t.parentNode && (i.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase(), i.isPicture && d.matchMedia && (f.aC(t, "lazymatchmedia"), u())), i._set = a, Object.defineProperty(t, "_lazypolyfill", {
            value: i,
            writable: !0
        }))
    }

    function A(t) {
        var e, i, a, r, n, s, o, l, c, u = t;
        if (h(u, !0), (r = u._lazypolyfill).isPicture)
            for (i = 0, a = (e = t.parentNode.getElementsByTagName("source")).length; i < a; i++)
                if (p.supportsType(e[i].getAttribute("type"), t) && z(e[i].getAttribute("media"))) {
                    u = e[i], h(u), r = u._lazypolyfill;
                    break
                }
        return 1 < r.length ? (s = u.getAttribute("sizes") || "", s = y.test(s) && parseInt(s, 10) || f.gW(t, t.parentNode), r.d = (o = t, l = d.devicePixelRatio || 1, c = f.getX && f.getX(o), Math.min(c || l, 2.5, l)), !r.src || !r.w || r.w < s ? (r.w = s, n = function(t) {
            for (var e, i, a = t.length, r = t[a - 1], n = 0; n < a; n++)
                if ((r = t[n]).d = r.w / t.w, r.d >= t.d) {
                    !r.cached && (e = t[n - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (i = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * i), e.d + (r.d - t.d) * i > t.d && (r = e));
                    break
                }
            return r
        }(r.sort(b)), r.src = n) : n = r.src) : n = r[0], n
    }

    function C(t) {
        var e;
        g && t.parentNode && "PICTURE" != t.parentNode.nodeName.toUpperCase() || (e = A(t)) && e.u && t._lazypolyfill.cur != e.u && (t._lazypolyfill.cur = e.u, e.cached = !0, t.setAttribute(p.srcAttr, e.u), t.setAttribute("src", e.u))
    }

    function E(t, e, i, a) {
        o.push({
            c: e,
            u: i,
            w: +a
        })
    }
    p.supportsType || (p.supportsType = function(t) {
        return !t
    }), d.HTMLPictureElement && g ? !f.hasHDescriptorFix && r.msElementsFromPoint && (f.hasHDescriptorFix = !0, v()) : d.picturefill || p.pf || (p.pf = function(t) {
        var e, i;
        if (!d.picturefill)
            for (e = 0, i = t.elements.length; e < i; e++) a(t.elements[e])
    }, y = /^\s*\d+\.*\d*px\s*$/, i = /(([^,\s].[^\s]+)\s+(\d+)w)/g, l = /\s/, u = function() {
        function t() {
            for (var t = 0, e = i.length; t < e; t++) a(i[t])
        }
        var e, i;
        u.init || (u.init = !0, addEventListener("resize", (i = r.getElementsByClassName("lazymatchmedia"), function() {
            clearTimeout(e), e = setTimeout(t, 66)
        })))
    }, z = function(t) {
        return d.matchMedia ? (z = function(t) {
            return !t || (matchMedia(t) || {}).matches
        })(t) : !t
    }, C.parse = c = function(t) {
        return o = [], (t = t.trim()).replace(m, "").replace(i, E), o.length || !t || l.test(t) || o.push({
            c: t,
            u: t,
            w: 99
        }), o
    }, a = C, p.loadedClass && p.loadingClass && (e = [], ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(t) {
        e.push(t + p.loadedClass), e.push(t + p.loadingClass)
    }), p.pf({
        elements: r.querySelectorAll(e.join(", "))
    })))
});
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
    "use strict";

    function o(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function b(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function f(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function g(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = b(t),
            n = e.overflow,
            i = e.overflowX,
            r = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? t : g(f(t))
    }

    function m(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }

    function v(t) {
        return 11 === t ? q : 10 !== t && q || W
    }

    function P(t) {
        if (!t) return document.documentElement;
        for (var e = v(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === b(n, "position") ? P(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function u(t) {
        return null === t.parentNode ? t : u(t.parentNode)
    }

    function y(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && P(s.firstElementChild) !== s ? P(l) : l;
        var c = u(t);
        return c.host ? y(c.host, e) : y(t, u(e).host)
    }

    function _(t, e) {
        var n = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" !== i && "HTML" !== i) return t[n];
        var r = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || r)[n]
    }

    function h(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function r(t, e, n, i) {
        return z(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], v(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function w(t) {
        var e = t.body,
            n = t.documentElement,
            i = v(10) && getComputedStyle(n);
        return {
            height: r("Height", e, n, i),
            width: r("Width", e, n, i)
        }
    }

    function S(t) {
        return V({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function N(t) {
        var e, n, i = {};
        try {
            v(10) ? (i = t.getBoundingClientRect(), e = _(t, "top"), n = _(t, "left"), i.top += e, i.left += n, i.bottom += e, i.right += n) : i = t.getBoundingClientRect()
        } catch (t) {}
        var r, o = {
                left: i.left,
                top: i.top,
                width: i.right - i.left,
                height: i.bottom - i.top
            },
            s = "HTML" === t.nodeName ? w(t.ownerDocument) : {},
            a = s.width || t.clientWidth || o.width,
            l = s.height || t.clientHeight || o.height,
            c = t.offsetWidth - a,
            u = t.offsetHeight - l;
        return (c || u) && (c -= h(r = b(t), "x"), u -= h(r, "y"), o.width -= c, o.height -= u), S(o)
    }

    function k(t, e, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            r = v(10),
            o = "HTML" === e.nodeName,
            s = N(t),
            a = N(e),
            l = g(t),
            c = b(e),
            u = parseFloat(c.borderTopWidth, 10),
            h = parseFloat(c.borderLeftWidth, 10);
        i && o && (a.top = z(a.top, 0), a.left = z(a.left, 0));
        var p, d, f = S({
            top: s.top - a.top - u,
            left: s.left - a.left - h,
            width: s.width,
            height: s.height
        });
        return f.marginTop = 0, f.marginLeft = 0, !r && o && (p = parseFloat(c.marginTop, 10), d = parseFloat(c.marginLeft, 10), f.top -= u - p, f.bottom -= u - p, f.left -= h - d, f.right -= h - d, f.marginTop = p, f.marginLeft = d), (r && !i ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (f = function(t, e, n) {
            var i = 2 < arguments.length && !1,
                r = _(e, "top"),
                o = _(e, "left"),
                s = i ? -1 : 1;
            return t.top += r * s, t.bottom += r * s, t.left += o * s, t.right += o * s, t
        }(f, e)), f
    }

    function T(t) {
        if (!t || !t.parentElement || v()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === b(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function d(t, e, n, i, r) {
        var o, s, a, l, c, u = 4 < arguments.length && void 0 !== r && r,
            h = {
                top: 0,
                left: 0
            },
            p = u ? T(t) : y(t, m(e));
        "viewport" === i ? h = function(t, e) {
            var n = 1 < arguments.length && void 0 !== e && e,
                i = t.ownerDocument.documentElement,
                r = k(t, i),
                o = z(i.clientWidth, window.innerWidth || 0),
                s = z(i.clientHeight, window.innerHeight || 0),
                a = n ? 0 : _(i),
                l = n ? 0 : _(i, "left");
            return S({
                top: a - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: s
            })
        }(p, u) : ("scrollParent" === i ? "BODY" === (o = g(f(e))).nodeName && (o = t.ownerDocument.documentElement) : o = "window" === i ? t.ownerDocument.documentElement : i, s = k(o, p, u), "HTML" !== o.nodeName || function t(e) {
            var n = e.nodeName;
            if ("BODY" === n || "HTML" === n) return !1;
            if ("fixed" === b(e, "position")) return !0;
            var i = f(e);
            return !!i && t(i)
        }(p) ? h = s : (l = (a = w(t.ownerDocument)).height, c = a.width, h.top += s.top - s.marginTop, h.bottom = l + s.top, h.left += s.left - s.marginLeft, h.right = c + s.left));
        var d = "number" == typeof(n = n || 0);
        return h.left += d ? n : n.left || 0, h.top += d ? n : n.top || 0, h.right -= d ? n : n.right || 0, h.bottom -= d ? n : n.bottom || 0, h
    }

    function a(t, e, i, n, r, o) {
        var s = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = d(i, n, s, r),
            l = {
                top: {
                    width: a.width,
                    height: e.top - a.top
                },
                right: {
                    width: a.right - e.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - e.bottom
                },
                left: {
                    width: e.left - a.left,
                    height: a.height
                }
            },
            c = Object.keys(l).map(function(t) {
                return V({
                    key: t
                }, l[t], {
                    area: (e = l[t]).width * e.height
                });
                var e
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            u = c.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            h = 0 < u.length ? u[0].key : c[0].key,
            p = t.split("-")[1];
        return h + (p ? "-" + p : "")
    }

    function l(t, e, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return k(n, r ? T(e) : y(e, m(n)), r)
    }

    function x(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function C(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function E(t, e, n) {
        n = n.split("-")[0];
        var i = x(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[C(a)], r
    }

    function j(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function I(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function(t, e) {
            if (Array.prototype.findIndex) return t.findIndex(function(t) {
                return t.name === e
            });
            var n = j(t, function(t) {
                return t.name === e
            });
            return t.indexOf(n)
        }(t, e))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && o(e) && (n.offsets.popper = S(n.offsets.popper), n.offsets.reference = S(n.offsets.reference), n = e(n, t))
        }), n
    }

    function t(t, n) {
        return t.some(function(t) {
            var e = t.name;
            return t.enabled && e === n
        })
    }

    function D(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function s(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function e() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, s(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function c(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function p(n, i) {
        Object.keys(i).forEach(function(t) {
            var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && c(i[t]) && (e = "px"), n.style[t] = i[t] + e
        })
    }

    function A(t, e, n) {
        var i, r = j(t, function(t) {
                return t.name === e
            }),
            o = !!r && t.some(function(t) {
                return t.name === n && t.enabled && t.order < r.order
            });
        return o || (i = "`" + e + "`", console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")), o
    }

    function n(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
            i = K.indexOf(t),
            r = K.slice(i + 1).concat(K.slice(0, i));
        return n ? r.reverse() : r
    }

    function O(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var i, $, L, H = Math.min,
        M = Math.floor,
        F = Math.round,
        z = Math.max,
        R = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        B = function() {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (R && 0 <= navigator.userAgent.indexOf(t[e])) return 1;
            return 0
        }(),
        U = R && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0, window.Promise.resolve().then(function() {
                    e = !1, t()
                }))
            }
        } : function(t) {
            var e = !1;
            return function() {
                e || (e = !0, setTimeout(function() {
                    e = !1, t()
                }, B))
            }
        },
        q = R && !(!window.MSInputMethodContext || !document.documentMode),
        W = R && /MSIE 10/.test(navigator.userAgent),
        V = Object.assign || function(t) {
            for (var e, n = 1; n < arguments.length; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        },
        Q = R && /Firefox/i.test(navigator.userAgent),
        Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        K = Y.slice(3),
        X = (i = Z, ($ = [{
            key: "update",
            value: function() {
                return function() {
                    var t;
                    this.state.isDestroyed || ((t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    }).offsets.reference = l(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = a(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = E(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = I(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)))
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, t(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = function(t, e, n) {
                        e.updateBound = n, s(t).addEventListener("resize", e.updateBound, {
                            passive: !0
                        });
                        var i = g(t);
                        return function t(e, n, i, r) {
                            var o = "BODY" === e.nodeName,
                                s = o ? e.ownerDocument.defaultView : e;
                            s.addEventListener(n, i, {
                                passive: !0
                            }), o || t(g(s.parentNode), n, i, r), r.push(s)
                        }(i, "scroll", e.updateBound, e.scrollParents), e.scrollElement = i, e.eventsEnabled = !0, e
                    }(this.reference, (this.options, this.state), this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return e.call(this)
            }
        }]) && G(i.prototype, $), L && G(i, L), Z);

    function Z(t, e) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (function(t) {
            if (!(t instanceof Z)) throw new TypeError("Cannot call a class as a function")
        })(this), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }, this.update = U(this.update.bind(this)), this.options = V({}, Z.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(V({}, Z.Defaults.modifiers, i.modifiers)).forEach(function(t) {
            n.options.modifiers[t] = V({}, Z.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
            return V({
                name: t
            }, n.options.modifiers[t])
        }).sort(function(t, e) {
            return t.order - e.order
        }), this.modifiers.forEach(function(t) {
            t.enabled && o(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r
    }

    function G(t, e) {
        for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
    return X.Utils = ("undefined" == typeof window ? global : window).PopperUtils, X.placements = Y, X.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e, n, i, r, o, s, a, l = t.placement,
                        c = l.split("-")[0],
                        u = l.split("-")[1];
                    return u && (n = (e = t.offsets).reference, i = e.popper, s = (r = -1 !== ["bottom", "top"].indexOf(c)) ? "width" : "height", a = {
                        start: O({}, o = r ? "left" : "top", n[o]),
                        end: O({}, o, n[o] + n[s] - i[s])
                    }, t.offsets.popper = V({}, i, a[u])), t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.offset,
                        i = t.placement,
                        r = t.offsets,
                        o = r.popper,
                        s = r.reference,
                        a = i.split("-")[0],
                        l = c(+n) ? [+n, 0] : function(t, r, o, e) {
                            var s = [0, 0],
                                a = -1 !== ["right", "left"].indexOf(e),
                                n = t.split(/(\+|\-)/).map(function(t) {
                                    return t.trim()
                                }),
                                i = n.indexOf(j(n, function(t) {
                                    return -1 !== t.search(/,|\s/)
                                }));
                            n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/;
                            return (-1 === i ? [n] : [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))]).map(function(t, e) {
                                var n = (1 === e ? !a : a) ? "height" : "width",
                                    i = !1;
                                return t.reduce(function(t, e) {
                                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e)
                                }, []).map(function(t) {
                                    return function(t, e, n, i) {
                                        var r, o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            s = +o[1],
                                            a = o[2];
                                        if (!s) return t;
                                        if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? s : ("vh" === a ? z(document.documentElement.clientHeight, window.innerHeight || 0) : z(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                                        switch (a) {
                                            case "%p":
                                                r = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                r = i
                                        }
                                        return S(r)[e] / 100 * s
                                    }(t, n, r, o)
                                })
                            }).forEach(function(n, i) {
                                n.forEach(function(t, e) {
                                    c(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1))
                                })
                            }), s
                        }(n, o, s, a);
                    return "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, i) {
                    var e = i.boundariesElement || P(t.instance.popper);
                    t.instance.reference === e && (e = P(e));
                    var n = D("transform"),
                        r = t.instance.popper.style,
                        o = r.top,
                        s = r.left,
                        a = r[n];
                    r.top = "", r.left = "", r[n] = "";
                    var l = d(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                    r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                    var c = i.priority,
                        u = t.offsets.popper,
                        h = {
                            primary: function(t) {
                                var e = u[t];
                                return u[t] < l[t] && !i.escapeWithReference && (e = z(u[t], l[t])), O({}, t, e)
                            },
                            secondary: function(t) {
                                var e = "right" === t ? "left" : "top",
                                    n = u[e];
                                return u[t] > l[t] && !i.escapeWithReference && (n = H(u[e], l[t] - ("right" === t ? u.width : u.height))), O({}, e, n)
                            }
                        };
                    return c.forEach(function(t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        u = V({}, u, h[e](t))
                    }), t.offsets.popper = u, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets,
                        n = e.popper,
                        i = e.reference,
                        r = t.placement.split("-")[0],
                        o = M,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, e) {
                    var n;
                    if (!A(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i))) return t
                    } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var r = t.placement.split("-")[0],
                        o = t.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(r),
                        c = l ? "height" : "width",
                        u = l ? "Top" : "Left",
                        h = u.toLowerCase(),
                        p = l ? "left" : "top",
                        d = l ? "bottom" : "right",
                        f = x(i)[c];
                    a[d] - f < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - f)), a[h] + f > s[d] && (t.offsets.popper[h] += a[h] + f - s[d]), t.offsets.popper = S(t.offsets.popper);
                    var g = a[h] + a[c] / 2 - f / 2,
                        m = b(t.instance.popper),
                        v = parseFloat(m["margin" + u], 10),
                        y = parseFloat(m["border" + u + "Width"], 10),
                        _ = g - t.offsets.popper[h] - v - y,
                        _ = z(H(s[c] - f, _), 0);
                    return t.arrowElement = i, t.offsets.arrow = (O(n = {}, h, F(_)), O(n, p, ""), n), t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(g, m) {
                    if (t(g.instance.modifiers, "inner")) return g;
                    if (g.flipped && g.placement === g.originalPlacement) return g;
                    var v = d(g.instance.popper, g.instance.reference, m.padding, m.boundariesElement, g.positionFixed),
                        y = g.placement.split("-")[0],
                        _ = C(y),
                        b = g.placement.split("-")[1] || "",
                        w = [];
                    switch (m.behavior) {
                        case "flip":
                            w = [y, _];
                            break;
                        case "clockwise":
                            w = n(y);
                            break;
                        case "counterclockwise":
                            w = n(y, !0);
                            break;
                        default:
                            w = m.behavior
                    }
                    return w.forEach(function(t, e) {
                        if (y !== t || w.length === e + 1) return g;
                        y = g.placement.split("-")[0], _ = C(y);
                        var n = g.offsets.popper,
                            i = g.offsets.reference,
                            r = M,
                            o = "left" === y && r(n.right) > r(i.left) || "right" === y && r(n.left) < r(i.right) || "top" === y && r(n.bottom) > r(i.top) || "bottom" === y && r(n.top) < r(i.bottom),
                            s = r(n.left) < r(v.left),
                            a = r(n.right) > r(v.right),
                            l = r(n.top) < r(v.top),
                            c = r(n.bottom) > r(v.bottom),
                            u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c,
                            h = -1 !== ["top", "bottom"].indexOf(y),
                            p = !!m.flipVariations && (h && "start" === b && s || h && "end" === b && a || !h && "start" === b && l || !h && "end" === b && c),
                            d = !!m.flipVariationsByContent && (h && "start" === b && a || h && "end" === b && s || !h && "start" === b && c || !h && "end" === b && l),
                            f = p || d;
                        (o || u || f) && (g.flipped = !0, (o || u) && (y = w[e + 1]), f && (b = "end" === b ? "start" : "start" === b ? "end" : b), g.placement = y + (b ? "-" + b : ""), g.offsets.popper = V({}, g.offsets.popper, E(g.instance.popper, g.offsets.reference, g.placement)), g = I(g.instance.modifiers, g, "flip"))
                    }), g
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        i = t.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = C(e), t.offsets.popper = S(r), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!A(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        n = j(t.instance.modifiers, function(t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.x,
                        i = e.y,
                        r = t.offsets.popper,
                        o = j(t.instance.modifiers, function(t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l, c, u, h, p, d, f, g, m, v, y, _, b, w, S = void 0 === o ? e.gpuAcceleration : o,
                        k = P(t.instance.popper),
                        T = N(k),
                        x = {
                            position: r.position
                        },
                        C = (l = t, c = window.devicePixelRatio < 2 || !Q, u = l.offsets, h = u.popper, p = u.reference, f = (d = F)(p.width), g = d(h.width), m = -1 !== ["left", "right"].indexOf(l.placement), v = -1 !== l.placement.indexOf("-"), _ = c ? d : O, {
                            left: (y = c ? m || v || f % 2 == g % 2 ? d : M : O)(1 == f % 2 && 1 == g % 2 && !v && c ? h.left - 1 : h.left),
                            top: _(h.top),
                            bottom: _(h.bottom),
                            right: y(h.right)
                        }),
                        E = "bottom" === n ? "top" : "bottom",
                        I = "right" === i ? "left" : "right",
                        A = D("transform");

                    function O(t) {
                        return t
                    }
                    a = "bottom" == E ? "HTML" === k.nodeName ? -k.clientHeight + C.bottom : -T.height + C.bottom : C.top, s = "right" == I ? "HTML" === k.nodeName ? -k.clientWidth + C.right : -T.width + C.right : C.left, S && A ? (x[A] = "translate3d(" + s + "px, " + a + "px, 0)", x[E] = 0, x[I] = 0, x.willChange = "transform") : (b = "bottom" == E ? -1 : 1, w = "right" == I ? -1 : 1, x[E] = a * b, x[I] = s * w, x.willChange = E + ", " + I);
                    var $ = {
                        "x-placement": t.placement
                    };
                    return t.attributes = V({}, $, t.attributes), t.styles = V({}, x, t.styles), t.arrowStyles = V({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    return p(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {
                        !1 === n[t] ? e.removeAttribute(t) : e.setAttribute(t, n[t])
                    }), t.arrowElement && Object.keys(t.arrowStyles).length && p(t.arrowElement, t.arrowStyles), t;
                    var e, n
                },
                onLoad: function(t, e, n, i, r) {
                    var o = l(r, e, t, n.positionFixed),
                        s = a(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s), p(e, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, X
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, f, h) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function e(e, t) {
        var n, i = Object.keys(e);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), i.push.apply(i, n)), i
    }

    function s(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(o), !0).forEach(function(t) {
                var e, n = r,
                    i = o[e = t];
                e in n ? Object.defineProperty(n, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
            })
        }
        return r
    }
    f = f && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f, h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e, n = t.getAttribute("data-target");
            n && "#" !== n || (n = (e = t.getAttribute("href")) && "#" !== e ? e.trim() : "");
            try {
                return document.querySelector(n) ? n : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = f(t).css("transition-duration"),
                n = f(t).css("transition-delay"),
                i = parseFloat(e),
                r = parseFloat(n);
            return i || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            f(t).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = e[i],
                        s = o && g.isElement(o) ? "element" : null === o || void 0 === o ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? g.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        },
        jQueryDetection: function() {
            if (void 0 === f) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = f.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    g.jQueryDetection(), f.fn.emulateTransitionEnd = function(t) {
        var e = this,
            n = !1;
        return f(this).one(g.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(e)
        }, t), this
    }, f.event.special[g.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(t) {
            if (f(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var n, r = "alert",
        a = f.fn[r],
        l = ((n = c.prototype).close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }, n.dispose = function() {
            f.removeData(this._element, "bs.alert"), this._element = null
        }, n._getRootElement = function(t) {
            var e = g.getSelectorFromElement(t),
                n = !1;
            return e && (n = document.querySelector(e)), n || f(t).closest(".alert")[0]
        }, n._triggerCloseEvent = function(t) {
            var e = f.Event("close.bs.alert");
            return f(t).trigger(e), e
        }, n._removeElement = function(e) {
            var t, n = this;
            f(e).removeClass("show"), f(e).hasClass("fade") ? (t = g.getTransitionDurationFromElement(e), f(e).one(g.TRANSITION_END, function(t) {
                return n._destroyElement(e, t)
            }).emulateTransitionEnd(t)) : this._destroyElement(e)
        }, n._destroyElement = function(t) {
            f(t).detach().trigger("closed.bs.alert").remove()
        }, c._jQueryInterface = function(n) {
            return this.each(function() {
                var t = f(this),
                    e = t.data("bs.alert");
                e || (e = new c(this), t.data("bs.alert", e)), "close" === n && e[n](this)
            })
        }, c._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(), e.close(this)
            }
        }, o(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }]), c);

    function c(t) {
        this._element = t
    }
    f(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l._handleDismiss(new l)), f.fn[r] = l._jQueryInterface, f.fn[r].Constructor = l, f.fn[r].noConflict = function() {
        return f.fn[r] = a, l._jQueryInterface
    };
    var u, p = f.fn.button,
        d = ((u = m.prototype).toggle = function() {
            var t, e, n = !0,
                i = !0,
                r = f(this._element).closest('[data-toggle="buttons"]')[0];
            !r || (t = this._element.querySelector('input:not([type="hidden"])')) && ("radio" === t.type && (t.checked && this._element.classList.contains("active") ? n = !1 : (e = r.querySelector(".active")) && f(e).removeClass("active")), n && ("checkbox" !== t.type && "radio" !== t.type || (t.checked = !this._element.classList.contains("active")), f(t).trigger("change")), t.focus(), i = !1), this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (i && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), n && f(this._element).toggleClass("active"))
        }, u.dispose = function() {
            f.removeData(this._element, "bs.button"), this._element = null
        }, m._jQueryInterface = function(e) {
            return this.each(function() {
                var t = f(this).data("bs.button");
                t || (t = new m(this), f(this).data("bs.button", t)), "toggle" === e && t[e]()
            })
        }, o(m, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }]), m);

    function m(t) {
        this._element = t
    }
    f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = t.target,
            n = e;
        if (f(e).hasClass("btn") || (e = f(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else {
            var i = e.querySelector('input:not([type="hidden"])');
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
            "LABEL" === n.tagName && i && "checkbox" === i.type && t.preventDefault(), d._jQueryInterface.call(f(e), "toggle")
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = f(t.target).closest(".btn")[0];
        f(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }), f(window).on("load.bs.button.data-api", function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e],
                r = i.querySelector('input:not([type="hidden"])');
            r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var o = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = t[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
        }
    }), f.fn.button = d._jQueryInterface, f.fn.button.Constructor = d, f.fn.button.noConflict = function() {
        return f.fn.button = p, d._jQueryInterface
    };
    var v, y = "carousel",
        _ = f.fn[y],
        b = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        w = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        S = {
            TOUCH: "touch",
            PEN: "pen"
        },
        k = ((v = T.prototype).next = function() {
            this._isSliding || this._slide("next")
        }, v.nextWhenVisible = function() {
            !document.hidden && f(this._element).is(":visible") && "hidden" !== f(this._element).css("visibility") && this.next()
        }, v.prev = function() {
            this._isSliding || this._slide("prev")
        }, v.pause = function(t) {
            t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, v.cycle = function(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, v.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(".active.carousel-item");
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding) f(this._element).one("slid.bs.carousel", function() {
                    return e.to(t)
                });
                else {
                    if (n === t) return this.pause(), void this.cycle();
                    var i = n < t ? "next" : "prev";
                    this._slide(i, this._items[t])
                }
        }, v.dispose = function() {
            f(this._element).off(".bs.carousel"), f.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, v._getConfig = function(t) {
            return t = s(s({}, b), t), g.typeCheckConfig(y, t, w), t
        }, v._handleSwipe = function() {
            var t, e = Math.abs(this.touchDeltaX);
            e <= 40 || (t = e / this.touchDeltaX, (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next())
        }, v._addEventListeners = function() {
            var e = this;
            this._config.keyboard && f(this._element).on("keydown.bs.carousel", function(t) {
                return e._keydown(t)
            }), "hover" === this._config.pause && f(this._element).on("mouseenter.bs.carousel", function(t) {
                return e.pause(t)
            }).on("mouseleave.bs.carousel", function(t) {
                return e.cycle(t)
            }), this._config.touch && this._addTouchEventListeners()
        }, v._addTouchEventListeners = function() {
            var t, e, n = this;
            this._touchSupported && (t = function(t) {
                n._pointerEvent && S[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
            }, e = function(t) {
                n._pointerEvent && S[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                    return n.cycle(t)
                }, 500 + n._config.interval))
            }, f(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(t) {
                return t.preventDefault()
            }), this._pointerEvent ? (f(this._element).on("pointerdown.bs.carousel", t), f(this._element).on("pointerup.bs.carousel", e), this._element.classList.add("pointer-event")) : (f(this._element).on("touchstart.bs.carousel", t), f(this._element).on("touchmove.bs.carousel", function(t) {
                var e;
                (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
            }), f(this._element).on("touchend.bs.carousel", e)))
        }, v._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                case 37:
                    t.preventDefault(), this.prev();
                    break;
                case 39:
                    t.preventDefault(), this.next()
            }
        }, v._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
        }, v._getItemByDirection = function(t, e) {
            var n = "next" === t,
                i = "prev" === t,
                r = this._getItemIndex(e),
                o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
            var s = (r + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }, v._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t),
                i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                r = f.Event("slide.bs.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                });
            return f(this._element).trigger(r), r
        }, v._setActiveIndicatorElement = function(t) {
            var e, n;
            this._indicatorsElement && (e = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), f(e).removeClass("active"), (n = this._indicatorsElement.children[this._getItemIndex(t)]) && f(n).addClass("active"))
        }, v._slide = function(t, e) {
            var n, i, r, o, s, a = this,
                l = this._element.querySelector(".active.carousel-item"),
                c = this._getItemIndex(l),
                u = e || l && this._getItemByDirection(t, l),
                h = this._getItemIndex(u),
                p = Boolean(this._interval),
                d = "next" === t ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right");
            u && f(u).hasClass("active") ? this._isSliding = !1 : !this._triggerSlideEvent(u, d).isDefaultPrevented() && l && u && (this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(u), r = f.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: d,
                from: c,
                to: h
            }), f(this._element).hasClass("slide") ? (f(u).addClass(i), g.reflow(u), f(l).addClass(n), f(u).addClass(n), (o = parseInt(u.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = o) : this._config.interval = this._config.defaultInterval || this._config.interval, s = g.getTransitionDurationFromElement(l), f(l).one(g.TRANSITION_END, function() {
                f(u).removeClass(n + " " + i).addClass("active"), f(l).removeClass("active " + i + " " + n), a._isSliding = !1, setTimeout(function() {
                    return f(a._element).trigger(r)
                }, 0)
            }).emulateTransitionEnd(s)) : (f(l).removeClass("active"), f(u).addClass("active"), this._isSliding = !1, f(this._element).trigger(r)), p && this.cycle())
        }, T._jQueryInterface = function(i) {
            return this.each(function() {
                var t = f(this).data("bs.carousel"),
                    e = s(s({}, b), f(this).data());
                "object" == typeof i && (e = s(s({}, e), i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new T(this, e), f(this).data("bs.carousel", t)), "number" == typeof i) t.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else e.interval && e.ride && (t.pause(), t.cycle())
            })
        }, T._dataApiClickHandler = function(t) {
            var e, n, i, r = g.getSelectorFromElement(this);
            !r || (e = f(r)[0]) && f(e).hasClass("carousel") && (n = s(s({}, f(e).data()), f(this).data()), (i = this.getAttribute("data-slide-to")) && (n.interval = !1), T._jQueryInterface.call(f(e), n), i && f(e).data("bs.carousel").to(i), t.preventDefault())
        }, o(T, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return b
            }
        }]), T);

    function T(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
    }
    f(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", k._dataApiClickHandler), f(window).on("load.bs.carousel.data-api", function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
            var i = f(t[e]);
            k._jQueryInterface.call(i, i.data())
        }
    }), f.fn[y] = k._jQueryInterface, f.fn[y].Constructor = k, f.fn[y].noConflict = function() {
        return f.fn[y] = _, k._jQueryInterface
    };
    var x, C = "collapse",
        E = f.fn[C],
        I = {
            toggle: !0,
            parent: ""
        },
        A = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        O = ((x = $.prototype).toggle = function() {
            f(this._element).hasClass("show") ? this.hide() : this.show()
        }, x.show = function() {
            var t, e, n, i, r, o, s = this;
            this._isTransitioning || f(this._element).hasClass("show") || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t) {
                return "string" == typeof s._config.parent ? t.getAttribute("data-parent") === s._config.parent : t.classList.contains("collapse")
            })).length && (t = null), t && (e = f(t).not(this._selector).data("bs.collapse")) && e._isTransitioning) || (n = f.Event("show.bs.collapse"), f(this._element).trigger(n), n.isDefaultPrevented() || (t && ($._jQueryInterface.call(f(t).not(this._selector), "hide"), e || f(t).data("bs.collapse", null)), i = this._getDimension(), f(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[i] = 0, this._triggerArray.length && f(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0), r = "scroll" + (i[0].toUpperCase() + i.slice(1)), o = g.getTransitionDurationFromElement(this._element), f(this._element).one(g.TRANSITION_END, function() {
                f(s._element).removeClass("collapsing").addClass("collapse show"), s._element.style[i] = "", s.setTransitioning(!1), f(s._element).trigger("shown.bs.collapse")
            }).emulateTransitionEnd(o), this._element.style[i] = this._element[r] + "px"))
        }, x.hide = function() {
            var t = this;
            if (!this._isTransitioning && f(this._element).hasClass("show")) {
                var e = f.Event("hide.bs.collapse");
                if (f(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), f(this._element).addClass("collapsing").removeClass("collapse show");
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r],
                                s = g.getSelectorFromElement(o);
                            null !== s && (f([].slice.call(document.querySelectorAll(s))).hasClass("show") || f(o).addClass("collapsed").attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var a = g.getTransitionDurationFromElement(this._element);
                    f(this._element).one(g.TRANSITION_END, function() {
                        t.setTransitioning(!1), f(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(a)
                }
            }
        }, x.setTransitioning = function(t) {
            this._isTransitioning = t
        }, x.dispose = function() {
            f.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, x._getConfig = function(t) {
            return (t = s(s({}, I), t)).toggle = Boolean(t.toggle), g.typeCheckConfig(C, t, A), t
        }, x._getDimension = function() {
            return f(this._element).hasClass("width") ? "width" : "height"
        }, x._getParent = function() {
            var t, n = this;
            g.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                i = [].slice.call(t.querySelectorAll(e));
            return f(i).each(function(t, e) {
                n._addAriaAndCollapsedClass($._getTargetFromElement(e), [e])
            }), t
        }, x._addAriaAndCollapsedClass = function(t, e) {
            var n = f(t).hasClass("show");
            e.length && f(e).toggleClass("collapsed", !n).attr("aria-expanded", n)
        }, $._getTargetFromElement = function(t) {
            var e = g.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }, $._jQueryInterface = function(i) {
            return this.each(function() {
                var t = f(this),
                    e = t.data("bs.collapse"),
                    n = s(s(s({}, I), t.data()), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && "string" == typeof i && /show|hide/.test(i) && (n.toggle = !1), e || (e = new $(this, n), t.data("bs.collapse", e)), "string" == typeof i) {
                    if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }, o($, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return I
            }
        }]), $);

    function $(e, t) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
                s = g.getSelectorFromElement(o),
                a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
            null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
    f(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = f(this),
            e = g.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        f(i).each(function() {
            var t = f(this),
                e = t.data("bs.collapse") ? "toggle" : n.data();
            O._jQueryInterface.call(t, e)
        })
    }), f.fn[C] = O._jQueryInterface, f.fn[C].Constructor = O, f.fn[C].noConflict = function() {
        return f.fn[C] = E, O._jQueryInterface
    };
    var P, N = "dropdown",
        j = f.fn[N],
        D = new RegExp("38|40|27"),
        L = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        H = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        M = ((P = F.prototype).toggle = function() {
            var t;
            this._element.disabled || f(this._element).hasClass("disabled") || (t = f(this._menu).hasClass("show"), F._clearMenus(), t || this.show(!0))
        }, P.show = function(t) {
            if (void 0 === t && (t = !1), !(this._element.disabled || f(this._element).hasClass("disabled") || f(this._menu).hasClass("show"))) {
                var e = {
                        relatedTarget: this._element
                    },
                    n = f.Event("show.bs.dropdown", e),
                    i = F._getParentFromElement(this._element);
                if (f(i).trigger(n), !n.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if (void 0 === h) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var r = this._element;
                        "parent" === this._config.reference ? r = i : g.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && f(i).addClass("position-static"), this._popper = new h(r, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === f(i).closest(".navbar-nav").length && f(document.body).children().on("mouseover", null, f.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), f(this._menu).toggleClass("show"), f(i).toggleClass("show").trigger(f.Event("shown.bs.dropdown", e))
                }
            }
        }, P.hide = function() {
            var t, e, n;
            this._element.disabled || f(this._element).hasClass("disabled") || !f(this._menu).hasClass("show") || (t = {
                relatedTarget: this._element
            }, e = f.Event("hide.bs.dropdown", t), n = F._getParentFromElement(this._element), f(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), f(this._menu).toggleClass("show"), f(n).toggleClass("show").trigger(f.Event("hidden.bs.dropdown", t))))
        }, P.dispose = function() {
            f.removeData(this._element, "bs.dropdown"), f(this._element).off(".bs.dropdown"), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, P.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, P._addEventListeners = function() {
            var e = this;
            f(this._element).on("click.bs.dropdown", function(t) {
                t.preventDefault(), t.stopPropagation(), e.toggle()
            })
        }, P._getConfig = function(t) {
            return t = s(s(s({}, this.constructor.Default), f(this._element).data()), t), g.typeCheckConfig(N, t, this.constructor.DefaultType), t
        }, P._getMenuElement = function() {
            var t;
            return this._menu || (t = F._getParentFromElement(this._element)) && (this._menu = t.querySelector(".dropdown-menu")), this._menu
        }, P._getPlacement = function() {
            var t = f(this._element.parentNode),
                e = "bottom-start";
            return t.hasClass("dropup") ? e = f(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : f(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e
        }, P._detectNavbar = function() {
            return 0 < f(this._element).closest(".navbar").length
        }, P._getOffset = function() {
            var e = this,
                t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = s(s({}, t.offsets), e._config.offset(t.offsets, e._element) || {}), t
            } : t.offset = this._config.offset, t
        }, P._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }), s(s({}, t), this._config.popperConfig)
        }, F._jQueryInterface = function(e) {
            return this.each(function() {
                var t = f(this).data("bs.dropdown");
                if (t || (t = new F(this, "object" == typeof e ? e : null), f(this).data("bs.dropdown", t)), "string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }, F._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, i = e.length; n < i; n++) {
                    var r, o, s = F._getParentFromElement(e[n]),
                        a = f(e[n]).data("bs.dropdown"),
                        l = {
                            relatedTarget: e[n]
                        };
                    t && "click" === t.type && (l.clickEvent = t), a && (r = a._menu, !f(s).hasClass("show") || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && f.contains(s, t.target) || (o = f.Event("hide.bs.dropdown", l), f(s).trigger(o), o.isDefaultPrevented() || ("ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), e[n].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), f(r).removeClass("show"), f(s).removeClass("show").trigger(f.Event("hidden.bs.dropdown", l)))))
                }
        }, F._getParentFromElement = function(t) {
            var e, n = g.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode
        }, F._dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || f(t.target).closest(".dropdown-menu").length) : !D.test(t.which)) && !this.disabled && !f(this).hasClass("disabled")) {
                var e = F._getParentFromElement(this),
                    n = f(e).hasClass("show");
                if (n || 27 !== t.which) {
                    if (t.preventDefault(), t.stopPropagation(), !n || n && (27 === t.which || 32 === t.which)) return 27 === t.which && f(e.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void f(this).trigger("click");
                    var i, r = [].slice.call(e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(t) {
                        return f(t).is(":visible")
                    });
                    0 !== r.length && (i = r.indexOf(t.target), 38 === t.which && 0 < i && i--, 40 === t.which && i < r.length - 1 && i++, i < 0 && (i = 0), r[i].focus())
                }
            }
        }, o(F, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return L
            }
        }, {
            key: "DefaultType",
            get: function() {
                return H
            }
        }]), F);

    function F(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
    f(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', M._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", M._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", M._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(t) {
        t.preventDefault(), t.stopPropagation(), M._jQueryInterface.call(f(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }), f.fn[N] = M._jQueryInterface, f.fn[N].Constructor = M, f.fn[N].noConflict = function() {
        return f.fn[N] = j, M._jQueryInterface
    };
    var z, R = f.fn.modal,
        B = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        U = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        q = ((z = W.prototype).toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }, z.show = function(t) {
            var e, n = this;
            this._isShown || this._isTransitioning || (f(this._element).hasClass("fade") && (this._isTransitioning = !0), e = f.Event("show.bs.modal", {
                relatedTarget: t
            }), f(this._element).trigger(e), this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), f(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(t) {
                return n.hide(t)
            }), f(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                f(n._element).one("mouseup.dismiss.bs.modal", function(t) {
                    f(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(function() {
                return n._showElement(t)
            })))
        }, z.hide = function(t) {
            var e, n, i, r = this;
            t && t.preventDefault(), this._isShown && !this._isTransitioning && (e = f.Event("hide.bs.modal"), f(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, (n = f(this._element).hasClass("fade")) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), f(document).off("focusin.bs.modal"), f(this._element).removeClass("show"), f(this._element).off("click.dismiss.bs.modal"), f(this._dialog).off("mousedown.dismiss.bs.modal"), n ? (i = g.getTransitionDurationFromElement(this._element), f(this._element).one(g.TRANSITION_END, function(t) {
                return r._hideModal(t)
            }).emulateTransitionEnd(i)) : this._hideModal()))
        }, z.dispose = function() {
            [window, this._element, this._dialog].forEach(function(t) {
                return f(t).off(".bs.modal")
            }), f(document).off("focusin.bs.modal"), f.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, z.handleUpdate = function() {
            this._adjustDialog()
        }, z._getConfig = function(t) {
            return t = s(s({}, B), t), g.typeCheckConfig("modal", t, U), t
        }, z._triggerBackdropTransition = function() {
            var t = this;
            if ("static" === this._config.backdrop) {
                var e = f.Event("hidePrevented.bs.modal");
                if (f(this._element).trigger(e), e.defaultPrevented) return;
                this._element.classList.add("modal-static");
                var n = g.getTransitionDurationFromElement(this._element);
                f(this._element).one(g.TRANSITION_END, function() {
                    t._element.classList.remove("modal-static")
                }).emulateTransitionEnd(n), this._element.focus()
            } else this.hide()
        }, z._showElement = function(t) {
            var e = this,
                n = f(this._element).hasClass("fade"),
                i = this._dialog ? this._dialog.querySelector(".modal-body") : null;

            function r() {
                e._config.focus && e._element.focus(), e._isTransitioning = !1, f(e._element).trigger(s)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), f(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), f(this._element).addClass("show"), this._config.focus && this._enforceFocus();
            var o, s = f.Event("shown.bs.modal", {
                relatedTarget: t
            });
            n ? (o = g.getTransitionDurationFromElement(this._dialog), f(this._dialog).one(g.TRANSITION_END, r).emulateTransitionEnd(o)) : r()
        }, z._enforceFocus = function() {
            var e = this;
            f(document).off("focusin.bs.modal").on("focusin.bs.modal", function(t) {
                document !== t.target && e._element !== t.target && 0 === f(e._element).has(t.target).length && e._element.focus()
            })
        }, z._setEscapeEvent = function() {
            var e = this;
            this._isShown ? f(this._element).on("keydown.dismiss.bs.modal", function(t) {
                e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
            }) : this._isShown || f(this._element).off("keydown.dismiss.bs.modal")
        }, z._setResizeEvent = function() {
            var e = this;
            this._isShown ? f(window).on("resize.bs.modal", function(t) {
                return e.handleUpdate(t)
            }) : f(window).off("resize.bs.modal")
        }, z._hideModal = function() {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                f(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), f(t._element).trigger("hidden.bs.modal")
            })
        }, z._removeBackdrop = function() {
            this._backdrop && (f(this._backdrop).remove(), this._backdrop = null)
        }, z._showBackdrop = function(t) {
            var e, n, i = this,
                r = f(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && this._backdrop.classList.add(r), f(this._backdrop).appendTo(document.body), f(this._element).on("click.dismiss.bs.modal", function(t) {
                        i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && i._triggerBackdropTransition()
                    }), r && g.reflow(this._backdrop), f(this._backdrop).addClass("show"), !t) return;
                if (!r) return void t();
                var o = g.getTransitionDurationFromElement(this._backdrop);
                f(this._backdrop).one(g.TRANSITION_END, t).emulateTransitionEnd(o)
            } else {
                !this._isShown && this._backdrop ? (f(this._backdrop).removeClass("show"), e = function() {
                    i._removeBackdrop(), t && t()
                }, f(this._element).hasClass("fade") ? (n = g.getTransitionDurationFromElement(this._backdrop), f(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(n)) : e()) : t && t()
            }
        }, z._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, z._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, z._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, z._setScrollbar = function() {
            var t, e, n, i, r = this;
            this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), e = [].slice.call(document.querySelectorAll(".sticky-top")), f(t).each(function(t, e) {
                var n = e.style.paddingRight,
                    i = f(e).css("padding-right");
                f(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
            }), f(e).each(function(t, e) {
                var n = e.style.marginRight,
                    i = f(e).css("margin-right");
                f(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
            }), n = document.body.style.paddingRight, i = f(document.body).css("padding-right"), f(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")), f(document.body).addClass("modal-open")
        }, z._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
            f(t).each(function(t, e) {
                var n = f(e).data("padding-right");
                f(e).removeData("padding-right"), e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll(".sticky-top"));
            f(e).each(function(t, e) {
                var n = f(e).data("margin-right");
                void 0 !== n && f(e).css("margin-right", n).removeData("margin-right")
            });
            var n = f(document.body).data("padding-right");
            f(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
        }, z._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }, W._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = f(this).data("bs.modal"),
                    e = s(s(s({}, B), f(this).data()), "object" == typeof n && n ? n : {});
                if (t || (t = new W(this, e), f(this).data("bs.modal", t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else e.show && t.show(i)
            })
        }, o(W, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return B
            }
        }]), W);

    function W(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
    }
    f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e, n = this,
            i = g.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var r = f(e).data("bs.modal") ? "toggle" : s(s({}, f(e).data()), f(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var o = f(e).one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                f(n).is(":visible") && n.focus()
            })
        });
        q._jQueryInterface.call(f(e), r, this)
    }), f.fn.modal = q._jQueryInterface, f.fn.modal.Constructor = q, f.fn.modal.noConflict = function() {
        return f.fn.modal = R, q._jQueryInterface
    };
    var V = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Q = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Y = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function K(t, o, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(o), a = [].slice.call(n.body.querySelectorAll("*")), i = 0, r = a.length; i < r; i++) ! function(t) {
            var e = a[t],
                n = e.nodeName.toLowerCase();
            if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e);
            var i = [].slice.call(e.attributes),
                r = [].concat(o["*"] || [], o[n] || []);
            i.forEach(function(t) {
                ! function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n)) return -1 === V.indexOf(n) || Boolean(t.nodeValue.match(Q) || t.nodeValue.match(Y));
                    for (var i = e.filter(function(t) {
                            return t instanceof RegExp
                        }), r = 0, o = i.length; r < o; r++)
                        if (n.match(i[r])) return 1
                }(t, r) && e.removeAttribute(t.nodeName)
            })
        }(i);
        return n.body.innerHTML
    }
    var X, Z = "tooltip",
        G = f.fn[Z],
        J = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        tt = ["sanitize", "whiteList", "sanitizeFn"],
        et = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        nt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        it = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        rt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        ot = ((X = st.prototype).enable = function() {
            this._isEnabled = !0
        }, X.disable = function() {
            this._isEnabled = !1
        }, X.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, X.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY,
                        n = f(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (f(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, X.dispose = function() {
            clearTimeout(this._timeout), f.removeData(this.element, this.constructor.DATA_KEY), f(this.element).off(this.constructor.EVENT_KEY), f(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && f(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, X.show = function() {
            var e = this;
            if ("none" === f(this.element).css("display")) throw new Error("Please use show on visible elements");
            var t = f.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                f(this.element).trigger(t);
                var n = g.findShadowRoot(this.element),
                    i = f.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(),
                    o = g.getUID(this.constructor.NAME);
                r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && f(r).addClass("fade");
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                    a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                f(r).data(this.constructor.DATA_KEY, this), f.contains(this.element.ownerDocument.documentElement, this.tip) || f(r).appendTo(l), f(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, r, this._getPopperConfig(a)), f(r).addClass("show"), "ontouchstart" in document.documentElement && f(document.body).children().on("mouseover", null, f.noop);
                var c, u = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null, f(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                };
                f(this.tip).hasClass("fade") ? (c = g.getTransitionDurationFromElement(this.tip), f(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c)) : u()
            }
        }, X.hide = function(t) {
            function e() {
                "show" !== i._hoverState && r.parentNode && r.parentNode.removeChild(r), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), f(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
            }
            var n, i = this,
                r = this.getTipElement(),
                o = f.Event(this.constructor.Event.HIDE);
            f(this.element).trigger(o), o.isDefaultPrevented() || (f(r).removeClass("show"), "ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, f(this.tip).hasClass("fade") ? (n = g.getTransitionDurationFromElement(r), f(r).one(g.TRANSITION_END, e).emulateTransitionEnd(n)) : e(), this._hoverState = "")
        }, X.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, X.isWithContent = function() {
            return Boolean(this.getTitle())
        }, X.addAttachmentClass = function(t) {
            f(this.getTipElement()).addClass("bs-tooltip-" + t)
        }, X.getTipElement = function() {
            return this.tip = this.tip || f(this.config.template)[0], this.tip
        }, X.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(f(t.querySelectorAll(".tooltip-inner")), this.getTitle()), f(t).removeClass("fade show")
        }, X.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = K(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? f(e).parent().is(t) || t.empty().append(e) : t.text(f(e).text())
        }, X.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }, X._getPopperConfig = function(t) {
            var e = this;
            return s(s({}, {
                placement: t,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t)
                }
            }), this.config.popperConfig)
        }, X._getOffset = function() {
            var e = this,
                t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = s(s({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
            } : t.offset = this.config.offset, t
        }, X._getContainer = function() {
            return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? f(this.config.container) : f(document).find(this.config.container)
        }, X._getAttachment = function(t) {
            return nt[t.toUpperCase()]
        }, X._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                var e, n;
                "click" === t ? f(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                    return i.toggle(t)
                }) : "manual" !== t && (e = "hover" === t ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = "hover" === t ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT, f(i.element).on(e, i.config.selector, function(t) {
                    return i._enter(t)
                }).on(n, i.config.selector, function(t) {
                    return i._leave(t)
                }))
            }), this._hideModalHandler = function() {
                i.element && i.hide()
            }, f(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s(s({}, this.config), {}, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, X._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, X._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || f(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), f(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                "show" === e._hoverState && e.show()
            }, e.config.delay.show) : e.show())
        }, X._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || f(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                "out" === e._hoverState && e.hide()
            }, e.config.delay.hide) : e.hide())
        }, X._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }, X._getConfig = function(t) {
            var e = f(this.element).data();
            return Object.keys(e).forEach(function(t) {
                -1 !== tt.indexOf(t) && delete e[t]
            }), "number" == typeof(t = s(s(s({}, this.constructor.Default), e), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), g.typeCheckConfig(Z, t, this.constructor.DefaultType), t.sanitize && (t.template = K(t.template, t.whiteList, t.sanitizeFn)), t
        }, X._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }, X._cleanTipClass = function() {
            var t = f(this.getTipElement()),
                e = t.attr("class").match(J);
            null !== e && e.length && t.removeClass(e.join(""))
        }, X._handlePopperPlacementChange = function(t) {
            this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
        }, X._fixTransition = function() {
            var t = this.getTipElement(),
                e = this.config.animation;
            null === t.getAttribute("x-placement") && (f(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
        }, st._jQueryInterface = function(n) {
            return this.each(function() {
                var t = f(this).data("bs.tooltip"),
                    e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new st(this, e), f(this).data("bs.tooltip", t)), "string" == typeof n)) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, o(st, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return it
            }
        }, {
            key: "NAME",
            get: function() {
                return Z
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return rt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return et
            }
        }]), st);

    function st(t, e) {
        if (void 0 === h) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
    }
    f.fn[Z] = ot._jQueryInterface, f.fn[Z].Constructor = ot, f.fn[Z].noConflict = function() {
        return f.fn[Z] = G, ot._jQueryInterface
    };
    var at = "popover",
        lt = f.fn[at],
        ct = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        ut = s(s({}, ot.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        ht = s(s({}, ot.DefaultType), {}, {
            content: "(string|element|function)"
        }),
        pt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        dt = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(t) {
                f(this.getTipElement()).addClass("bs-popover-" + t)
            }, r.getTipElement = function() {
                return this.tip = this.tip || f(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var t = f(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var t = f(this.getTipElement()),
                    e = t.attr("class").match(ct);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = f(this).data("bs.popover"),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), f(this).data("bs.popover", t)), "string" == typeof n)) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ut
                }
            }, {
                key: "NAME",
                get: function() {
                    return at
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return pt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ht
                }
            }]), i
        }(ot);
    f.fn[at] = dt._jQueryInterface, f.fn[at].Constructor = dt, f.fn[at].noConflict = function() {
        return f.fn[at] = lt, dt._jQueryInterface
    };
    var ft, gt = "scrollspy",
        mt = f.fn[gt],
        vt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        yt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        _t = ((ft = bt.prototype).refresh = function() {
            var e = this,
                t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                r = "auto" === this._config.method ? t : this._config.method,
                o = "position" === r ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = g.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)), e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [f(e)[r]().top + o, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1])
            })
        }, ft.dispose = function() {
            f.removeData(this._element, "bs.scrollspy"), f(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, ft._getConfig = function(t) {
            var e;
            return "string" != typeof(t = s(s({}, vt), "object" == typeof t && t ? t : {})).target && g.isElement(t.target) && ((e = f(t.target).attr("id")) || (e = g.getUID(gt), f(t.target).attr("id", e)), t.target = "#" + e), g.typeCheckConfig(gt, t, yt), t
        }, ft._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, ft._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, ft._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, ft._process = function() {
            var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }, ft._activate = function(e) {
            this._activeTarget = e, this._clear();
            var t = this._selector.split(",").map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                }),
                n = f([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), f(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: e
            })
        }, ft._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains("active")
            }).forEach(function(t) {
                return t.classList.remove("active")
            })
        }, bt._jQueryInterface = function(e) {
            return this.each(function() {
                var t = f(this).data("bs.scrollspy");
                if (t || (t = new bt(this, "object" == typeof e && e), f(this).data("bs.scrollspy", t)), "string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }, o(bt, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return vt
            }
        }]), bt);

    function bt(t, e) {
        var n = this;
        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, f(this._scrollElement).on("scroll.bs.scrollspy", function(t) {
            return n._process(t)
        }), this.refresh(), this._process()
    }
    f(window).on("load.bs.scrollspy.data-api", function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
            var n = f(t[e]);
            _t._jQueryInterface.call(n, n.data())
        }
    }), f.fn[gt] = _t._jQueryInterface, f.fn[gt].Constructor = _t, f.fn[gt].noConflict = function() {
        return f.fn[gt] = mt, _t._jQueryInterface
    };
    var wt, St = f.fn.tab,
        kt = ((wt = Tt.prototype).show = function() {
            var t, e, n, i, r, o, s, a, l = this;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && f(this._element).hasClass("active") || f(this._element).hasClass("disabled") || (e = f(this._element).closest(".nav, .list-group")[0], n = g.getSelectorFromElement(this._element), e && (i = "UL" === e.nodeName || "OL" === e.nodeName ? "> li > .active" : ".active", r = (r = f.makeArray(f(e).find(i)))[r.length - 1]), o = f.Event("hide.bs.tab", {
                relatedTarget: this._element
            }), s = f.Event("show.bs.tab", {
                relatedTarget: r
            }), r && f(r).trigger(o), f(this._element).trigger(s), s.isDefaultPrevented() || o.isDefaultPrevented() || (n && (t = document.querySelector(n)), this._activate(this._element, e), a = function() {
                var t = f.Event("hidden.bs.tab", {
                        relatedTarget: l._element
                    }),
                    e = f.Event("shown.bs.tab", {
                        relatedTarget: r
                    });
                f(r).trigger(t), f(l._element).trigger(e)
            }, t ? this._activate(t, t.parentNode, a) : a()))
        }, wt.dispose = function() {
            f.removeData(this._element, "bs.tab"), this._element = null
        }, wt._activate = function(t, e, n) {
            function i() {
                return o._transitionComplete(t, s, n)
            }
            var r, o = this,
                s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? f(e).children(".active") : f(e).find("> li > .active"))[0],
                a = n && s && f(s).hasClass("fade");
            s && a ? (r = g.getTransitionDurationFromElement(s), f(s).removeClass("show").one(g.TRANSITION_END, i).emulateTransitionEnd(r)) : i()
        }, wt._transitionComplete = function(t, e, n) {
            var i, r, o;
            e && (f(e).removeClass("active"), (i = f(e.parentNode).find("> .dropdown-menu .active")[0]) && f(i).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)), f(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), g.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && f(t.parentNode).hasClass("dropdown-menu") && ((r = f(t).closest(".dropdown")[0]) && (o = [].slice.call(r.querySelectorAll(".dropdown-toggle")), f(o).addClass("active")), t.setAttribute("aria-expanded", !0)), n && n()
        }, Tt._jQueryInterface = function(n) {
            return this.each(function() {
                var t = f(this),
                    e = t.data("bs.tab");
                if (e || (e = new Tt(this), t.data("bs.tab", e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, o(Tt, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }]), Tt);

    function Tt(t) {
        this._element = t
    }
    f(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
        t.preventDefault(), kt._jQueryInterface.call(f(this), "show")
    }), f.fn.tab = kt._jQueryInterface, f.fn.tab.Constructor = kt, f.fn.tab.noConflict = function() {
        return f.fn.tab = St, kt._jQueryInterface
    };
    var xt, Ct = f.fn.toast,
        Et = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        It = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        At = ((xt = Ot.prototype).show = function() {
            var t, e, n = this,
                i = f.Event("show.bs.toast");
            f(this._element).trigger(i), i.isDefaultPrevented() || (this._config.animation && this._element.classList.add("fade"), t = function() {
                n._element.classList.remove("showing"), n._element.classList.add("show"), f(n._element).trigger("shown.bs.toast"), n._config.autohide && (n._timeout = setTimeout(function() {
                    n.hide()
                }, n._config.delay))
            }, this._element.classList.remove("hide"), g.reflow(this._element), this._element.classList.add("showing"), this._config.animation ? (e = g.getTransitionDurationFromElement(this._element), f(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(e)) : t())
        }, xt.hide = function() {
            var t;
            this._element.classList.contains("show") && (t = f.Event("hide.bs.toast"), f(this._element).trigger(t), t.isDefaultPrevented() || this._close())
        }, xt.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), f(this._element).off("click.dismiss.bs.toast"), f.removeData(this._element, "bs.toast"), this._element = null, this._config = null
        }, xt._getConfig = function(t) {
            return t = s(s(s({}, It), f(this._element).data()), "object" == typeof t && t ? t : {}), g.typeCheckConfig("toast", t, this.constructor.DefaultType), t
        }, xt._setListeners = function() {
            var t = this;
            f(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                return t.hide()
            })
        }, xt._close = function() {
            function t() {
                n._element.classList.add("hide"), f(n._element).trigger("hidden.bs.toast")
            }
            var e, n = this;
            this._element.classList.remove("show"), this._config.animation ? (e = g.getTransitionDurationFromElement(this._element), f(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(e)) : t()
        }, Ot._jQueryInterface = function(n) {
            return this.each(function() {
                var t = f(this),
                    e = t.data("bs.toast");
                if (e || (e = new Ot(this, "object" == typeof n && n), t.data("bs.toast", e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }, o(Ot, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Et
            }
        }, {
            key: "Default",
            get: function() {
                return It
            }
        }]), Ot);

    function Ot(t, e) {
        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
    }
    f.fn.toast = At._jQueryInterface, f.fn.toast.Constructor = At, f.fn.toast.noConflict = function() {
        return f.fn.toast = Ct, At._jQueryInterface
    }, t.Alert = l, t.Button = d, t.Carousel = k, t.Collapse = O, t.Dropdown = M, t.Modal = q, t.Popover = dt, t.Scrollspy = _t, t.Tab = kt, t.Toast = At, t.Tooltip = ot, t.Util = g, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function() {
    function Zo(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }

    function Go(t, e, n, i) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o;) {
            var s = t[r];
            e(i, s, n(s), t)
        }
        return i
    }

    function Jo(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
        return t
    }

    function ts(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
            if (!e(t[n], n, t)) return !1;
        return !0
    }

    function es(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length, r = 0, o = []; ++n < i;) {
            var s = t[n];
            e(s, n, t) && (o[r++] = s)
        }
        return o
    }

    function ns(t, e) {
        return !(null == t || !t.length) && -1 < hs(t, e, 0)
    }

    function is(t, e, n) {
        for (var i = -1, r = null == t ? 0 : t.length; ++i < r;)
            if (n(e, t[i])) return !0;
        return !1
    }

    function rs(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length, r = Array(i); ++n < i;) r[n] = e(t[n], n, t);
        return r
    }

    function os(t, e) {
        for (var n = -1, i = e.length, r = t.length; ++n < i;) t[r + n] = e[n];
        return t
    }

    function ss(t, e, n, i) {
        var r = -1,
            o = null == t ? 0 : t.length;
        for (i && o && (n = t[++r]); ++r < o;) n = e(n, t[r], r, t);
        return n
    }

    function as(t, e, n, i) {
        var r = null == t ? 0 : t.length;
        for (i && r && (n = t[--r]); r--;) n = e(n, t[r], r, t);
        return n
    }

    function ls(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
            if (e(t[n], n, t)) return !0;
        return !1
    }

    function cs(t, i, e) {
        var r;
        return e(t, function(t, e, n) {
            if (i(t, e, n)) return r = e, !1
        }), r
    }

    function us(t, e, n, i) {
        for (var r = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < r;)
            if (e(t[o], o, t)) return o;
        return -1
    }

    function hs(t, e, r) {
        return e == e ? function(t, e) {
            for (var n = r - 1, i = t.length; ++n < i;)
                if (t[n] === e) return n;
            return -1
        }(t, e) : us(t, ds, r)
    }

    function ps(t, e, n, i) {
        for (var r = n - 1, o = t.length; ++r < o;)
            if (i(t[r], e)) return r;
        return -1
    }

    function ds(t) {
        return t != t
    }

    function fs(t, e) {
        var n = null == t ? 0 : t.length;
        return n ? vs(t, e) / n : Hs
    }

    function gs(e) {
        return function(t) {
            return null == t ? Ps : t[e]
        }
    }

    function t(e) {
        return function(t) {
            return null == e ? Ps : e[t]
        }
    }

    function ms(t, i, r, o, e) {
        return e(t, function(t, e, n) {
            r = o ? (o = !1, t) : i(r, t, e, n)
        }), r
    }

    function vs(t, e) {
        for (var n, i = -1, r = t.length; ++i < r;) {
            var o = e(t[i]);
            o !== Ps && (n = n === Ps ? o : n + o)
        }
        return n
    }

    function ys(t, e) {
        for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
        return i
    }

    function _s(e) {
        return function(t) {
            return e(t)
        }
    }

    function bs(e, t) {
        return rs(t, function(t) {
            return e[t]
        })
    }

    function ws(t, e) {
        return t.has(e)
    }

    function Ss(t, e) {
        for (var n = -1, i = t.length; ++n < i && -1 < hs(e, t[n], 0););
        return n
    }

    function ks(t, e) {
        for (var n = t.length; n-- && -1 < hs(e, t[n], 0););
        return n
    }

    function Ts(t) {
        return "\\" + P[t]
    }

    function xs(t) {
        return $.test(t)
    }

    function Cs(t) {
        var n = -1,
            i = Array(t.size);
        return t.forEach(function(t, e) {
            i[++n] = [e, t]
        }), i
    }

    function Es(e, n) {
        return function(t) {
            return e(n(t))
        }
    }

    function Is(t, e) {
        for (var n = -1, i = t.length, r = 0, o = []; ++n < i;) {
            var s = t[n];
            s !== e && s !== Ds || (t[n] = Ds, o[r++] = n)
        }
        return o
    }

    function As(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }

    function Os(t) {
        return (xs(t) ? function(t) {
            for (var e = O.lastIndex = 0; O.test(t);) ++e;
            return e
        } : F)(t)
    }

    function $s(t) {
        return xs(t) ? t.match(O) || [] : t.split("")
    }
    var Ps, Ns = "Expected a function",
        js = "__lodash_hash_undefined__",
        Ds = "__lodash_placeholder__",
        Ls = 9007199254740991,
        Hs = NaN,
        Ms = 4294967295,
        Fs = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ],
        zs = "[object Arguments]",
        Rs = "[object Array]",
        Bs = "[object Boolean]",
        Us = "[object Date]",
        qs = "[object Error]",
        Ws = "[object Function]",
        Vs = "[object GeneratorFunction]",
        Qs = "[object Map]",
        Ys = "[object Number]",
        Ks = "[object Object]",
        Xs = "[object Promise]",
        Zs = "[object RegExp]",
        Gs = "[object Set]",
        Js = "[object String]",
        ta = "[object Symbol]",
        ea = "[object WeakMap]",
        na = "[object ArrayBuffer]",
        ia = "[object DataView]",
        ra = "[object Float32Array]",
        oa = "[object Float64Array]",
        sa = "[object Int8Array]",
        aa = "[object Int16Array]",
        la = "[object Int32Array]",
        ca = "[object Uint8Array]",
        ua = "[object Uint8ClampedArray]",
        ha = "[object Uint16Array]",
        pa = "[object Uint32Array]",
        da = /\b__p \+= '';/g,
        fa = /\b(__p \+=) '' \+/g,
        ga = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        ma = /&(?:amp|lt|gt|quot|#39);/g,
        va = /[&<>"']/g,
        ya = RegExp(ma.source),
        _a = RegExp(va.source),
        ba = /<%-([\s\S]+?)%>/g,
        wa = /<%([\s\S]+?)%>/g,
        Sa = /<%=([\s\S]+?)%>/g,
        ka = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ta = /^\w*$/,
        xa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ca = /[\\^$.*+?()[\]{}|]/g,
        Ea = RegExp(Ca.source),
        Ia = /^\s+|\s+$/g,
        Aa = /^\s+/,
        Oa = /\s+$/,
        $a = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        Pa = /\{\n\/\* \[wrapped with (.+)\] \*/,
        Na = /,? & /,
        ja = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        Da = /\\(\\)?/g,
        La = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Ha = /\w*$/,
        Ma = /^[-+]0x[0-9a-f]+$/i,
        Fa = /^0b[01]+$/i,
        za = /^\[object .+?Constructor\]$/,
        Ra = /^0o[0-7]+$/i,
        Ba = /^(?:0|[1-9]\d*)$/,
        Ua = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        qa = /($^)/,
        Wa = /['\n\r\u2028\u2029\\]/g,
        e = "\\ud800-\\udfff",
        n = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        i = "\\u2700-\\u27bf",
        r = "a-z\\xdf-\\xf6\\xf8-\\xff",
        o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        s = "\\ufe0e\\ufe0f",
        a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        l = "[" + e + "]",
        c = "[" + a + "]",
        u = "[" + n + "]",
        h = "\\d+",
        p = "[" + i + "]",
        d = "[" + r + "]",
        f = "[^" + e + a + h + i + r + o + "]",
        g = "\\ud83c[\\udffb-\\udfff]",
        m = "[^" + e + "]",
        v = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        y = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        _ = "[" + o + "]",
        b = "\\u200d",
        w = "(?:" + d + "|" + f + ")",
        S = "(?:" + _ + "|" + f + ")",
        k = "(?:['â€™](?:d|ll|m|re|s|t|ve))?",
        T = "(?:['â€™](?:D|LL|M|RE|S|T|VE))?",
        x = "(?:" + u + "|" + g + ")?",
        C = "[" + s + "]?",
        E = C + x + "(?:" + b + "(?:" + [m, v, y].join("|") + ")" + C + x + ")*",
        I = "(?:" + [p, v, y].join("|") + ")" + E,
        A = "(?:" + [m + u + "?", u, v, y, l].join("|") + ")",
        Va = RegExp("['â€™]", "g"),
        Qa = RegExp(u, "g"),
        O = RegExp(g + "(?=" + g + ")|" + A + E, "g"),
        Ya = RegExp([_ + "?" + d + "+" + k + "(?=" + [c, _, "$"].join("|") + ")", S + "+" + T + "(?=" + [c, _ + w, "$"].join("|") + ")", _ + "?" + w + "+" + k, _ + "+" + T, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", h, I].join("|"), "g"),
        $ = RegExp("[" + b + e + n + s + "]"),
        Ka = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Xa = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        Za = -1,
        Ga = {};
    Ga[ra] = Ga[oa] = Ga[sa] = Ga[aa] = Ga[la] = Ga[ca] = Ga[ua] = Ga[ha] = Ga[pa] = !0, Ga[zs] = Ga[Rs] = Ga[na] = Ga[Bs] = Ga[ia] = Ga[Us] = Ga[qs] = Ga[Ws] = Ga[Qs] = Ga[Ys] = Ga[Ks] = Ga[Zs] = Ga[Gs] = Ga[Js] = Ga[ea] = !1;
    var Ja = {};
    Ja[zs] = Ja[Rs] = Ja[na] = Ja[ia] = Ja[Bs] = Ja[Us] = Ja[ra] = Ja[oa] = Ja[sa] = Ja[aa] = Ja[la] = Ja[Qs] = Ja[Ys] = Ja[Ks] = Ja[Zs] = Ja[Gs] = Ja[Js] = Ja[ta] = Ja[ca] = Ja[ua] = Ja[ha] = Ja[pa] = !0, Ja[qs] = Ja[Ws] = Ja[ea] = !1;
    var P = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        tl = parseFloat,
        el = parseInt,
        N = "object" == typeof global && global && global.Object === Object && global,
        j = "object" == typeof self && self && self.Object === Object && self,
        nl = N || j || Function("return this")(),
        D = "object" == typeof exports && exports && !exports.nodeType && exports,
        L = D && "object" == typeof module && module && !module.nodeType && module,
        il = L && L.exports === D,
        H = il && N.process,
        M = function() {
            try {
                return L && L.require && L.require("util").types || H && H.binding && H.binding("util")
            } catch (t) {}
        }(),
        rl = M && M.isArrayBuffer,
        ol = M && M.isDate,
        sl = M && M.isMap,
        al = M && M.isRegExp,
        ll = M && M.isSet,
        cl = M && M.isTypedArray,
        F = gs("length"),
        ul = t({
            "Ã€": "A",
            "Ã": "A",
            "Ã‚": "A",
            "Ãƒ": "A",
            "Ã„": "A",
            "Ã…": "A",
            "Ã ": "a",
            "Ã¡": "a",
            "Ã¢": "a",
            "Ã£": "a",
            "Ã¤": "a",
            "Ã¥": "a",
            "Ã‡": "C",
            "Ã§": "c",
            "Ã": "D",
            "Ã°": "d",
            "Ãˆ": "E",
            "Ã‰": "E",
            "ÃŠ": "E",
            "Ã‹": "E",
            "Ã¨": "e",
            "Ã©": "e",
            "Ãª": "e",
            "Ã«": "e",
            "ÃŒ": "I",
            "Ã": "I",
            "ÃŽ": "I",
            "Ã": "I",
            "Ã¬": "i",
            "Ã­": "i",
            "Ã®": "i",
            "Ã¯": "i",
            "Ã‘": "N",
            "Ã±": "n",
            "Ã’": "O",
            "Ã“": "O",
            "Ã”": "O",
            "Ã•": "O",
            "Ã–": "O",
            "Ã˜": "O",
            "Ã²": "o",
            "Ã³": "o",
            "Ã´": "o",
            "Ãµ": "o",
            "Ã¶": "o",
            "Ã¸": "o",
            "Ã™": "U",
            "Ãš": "U",
            "Ã›": "U",
            "Ãœ": "U",
            "Ã¹": "u",
            "Ãº": "u",
            "Ã»": "u",
            "Ã¼": "u",
            "Ã": "Y",
            "Ã½": "y",
            "Ã¿": "y",
            "Ã†": "Ae",
            "Ã¦": "ae",
            "Ãž": "Th",
            "Ã¾": "th",
            "ÃŸ": "ss",
            "Ä€": "A",
            "Ä‚": "A",
            "Ä„": "A",
            "Ä": "a",
            "Äƒ": "a",
            "Ä…": "a",
            "Ä†": "C",
            "Äˆ": "C",
            "ÄŠ": "C",
            "ÄŒ": "C",
            "Ä‡": "c",
            "Ä‰": "c",
            "Ä‹": "c",
            "Ä": "c",
            "ÄŽ": "D",
            "Ä": "D",
            "Ä": "d",
            "Ä‘": "d",
            "Ä’": "E",
            "Ä”": "E",
            "Ä–": "E",
            "Ä˜": "E",
            "Äš": "E",
            "Ä“": "e",
            "Ä•": "e",
            "Ä—": "e",
            "Ä™": "e",
            "Ä›": "e",
            "Äœ": "G",
            "Äž": "G",
            "Ä ": "G",
            "Ä¢": "G",
            "Ä": "g",
            "ÄŸ": "g",
            "Ä¡": "g",
            "Ä£": "g",
            "Ä¤": "H",
            "Ä¦": "H",
            "Ä¥": "h",
            "Ä§": "h",
            "Ä¨": "I",
            "Äª": "I",
            "Ä¬": "I",
            "Ä®": "I",
            "Ä°": "I",
            "Ä©": "i",
            "Ä«": "i",
            "Ä­": "i",
            "Ä¯": "i",
            "Ä±": "i",
            "Ä´": "J",
            "Äµ": "j",
            "Ä¶": "K",
            "Ä·": "k",
            "Ä¸": "k",
            "Ä¹": "L",
            "Ä»": "L",
            "Ä½": "L",
            "Ä¿": "L",
            "Å": "L",
            "Äº": "l",
            "Ä¼": "l",
            "Ä¾": "l",
            "Å€": "l",
            "Å‚": "l",
            "Åƒ": "N",
            "Å…": "N",
            "Å‡": "N",
            "ÅŠ": "N",
            "Å„": "n",
            "Å†": "n",
            "Åˆ": "n",
            "Å‹": "n",
            "ÅŒ": "O",
            "ÅŽ": "O",
            "Å": "O",
            "Å": "o",
            "Å": "o",
            "Å‘": "o",
            "Å”": "R",
            "Å–": "R",
            "Å˜": "R",
            "Å•": "r",
            "Å—": "r",
            "Å™": "r",
            "Åš": "S",
            "Åœ": "S",
            "Åž": "S",
            "Å ": "S",
            "Å›": "s",
            "Å": "s",
            "ÅŸ": "s",
            "Å¡": "s",
            "Å¢": "T",
            "Å¤": "T",
            "Å¦": "T",
            "Å£": "t",
            "Å¥": "t",
            "Å§": "t",
            "Å¨": "U",
            "Åª": "U",
            "Å¬": "U",
            "Å®": "U",
            "Å°": "U",
            "Å²": "U",
            "Å©": "u",
            "Å«": "u",
            "Å­": "u",
            "Å¯": "u",
            "Å±": "u",
            "Å³": "u",
            "Å´": "W",
            "Åµ": "w",
            "Å¶": "Y",
            "Å·": "y",
            "Å¸": "Y",
            "Å¹": "Z",
            "Å»": "Z",
            "Å½": "Z",
            "Åº": "z",
            "Å¼": "z",
            "Å¾": "z",
            "Ä²": "IJ",
            "Ä³": "ij",
            "Å’": "Oe",
            "Å“": "oe",
            "Å‰": "'n",
            "Å¿": "s"
        }),
        hl = t({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }),
        pl = t({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }),
        dl = function t(e) {
            function m(t) {
                if (rn(t) && !Gr(t) && !(t instanceof y)) {
                    if (t instanceof v) return t;
                    if (Yn.call(t, "__wrapped__")) return Ae(t)
                }
                return new v(t)
            }

            function o() {}

            function v(t, e) {
                this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = Ps
            }

            function y(t) {
                this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ms, this.__views__ = []
            }

            function n(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function r(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function a(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function _(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.__data__ = new a; ++e < n;) this.add(t[e])
            }

            function k(t) {
                this.size = (this.__data__ = new r(t)).size
            }

            function i(t, e) {
                var n = Gr(t),
                    i = !n && Zr(t),
                    r = !n && !i && to(t),
                    o = !n && !i && !r && oo(t),
                    s = n || i || r || o,
                    a = s ? ys(t.length, Rn) : [],
                    l = a.length;
                for (var c in t) !e && !Yn.call(t, c) || s && ("length" == c || r && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || fe(c, l)) || a.push(c);
                return a
            }

            function s(t) {
                var e = t.length;
                return e ? t[nt(0, e - 1)] : Ps
            }

            function g(t, e, n) {
                (n === Ps || Ke(t[e], n)) && (n !== Ps || e in t) || u(t, e, n)
            }

            function T(t, e, n) {
                var i = t[e];
                Yn.call(t, e) && Ke(i, n) && (n !== Ps || e in t) || u(t, e, n)
            }

            function l(t, e) {
                for (var n = t.length; n--;)
                    if (Ke(t[n][0], e)) return n;
                return -1
            }

            function c(t, i, r, o) {
                return Qi(t, function(t, e, n) {
                    i(o, t, r(t), n)
                }), o
            }

            function x(t, e) {
                return t && $t(e, yn(e), t)
            }

            function u(t, e, n) {
                "__proto__" == e && pi ? pi(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            }

            function h(t, e) {
                for (var n = -1, i = e.length, r = jn(i), o = null == t; ++n < i;) r[n] = o ? Ps : mn(t, e[n]);
                return r
            }

            function p(t, e, n) {
                return t == t && (n !== Ps && (t = t <= n ? t : n), e !== Ps && (t = e <= t ? t : e)), t
            }

            function C(n, i, r, t, e, o) {
                var s, a = 1 & i,
                    l = 2 & i,
                    c = 4 & i;
                if (r && (s = e ? r(n, t, e, o) : r(n)), s !== Ps) return s;
                if (!nn(n)) return n;
                var u, h, p, d, f, g, m, v, y = Gr(n);
                if (y) {
                    if (m = (g = n).length, v = new g.constructor(m), m && "string" == typeof g[0] && Yn.call(g, "index") && (v.index = g.index, v.input = g.input), s = v, !a) return Ot(n, s)
                } else {
                    var _ = or(n),
                        b = _ == Ws || _ == Vs;
                    if (to(n)) return Tt(n, a);
                    if (_ == Ks || _ == zs || b && !e) {
                        if (s = l || b ? {} : pe(n), !a) return l ? (p = n, d = (f = s) && $t(n, _n(n), f), $t(p, rr(p), d)) : (h = x(s, u = n), $t(u, ir(u), h))
                    } else {
                        if (!Ja[_]) return e ? n : {};
                        s = function(t, e) {
                            var n, i, r, o = t.constructor;
                            switch (_) {
                                case na:
                                    return xt(t);
                                case Bs:
                                case Us:
                                    return new o(+t);
                                case ia:
                                    return new(r = t).constructor(e ? xt(r.buffer) : r.buffer, r.byteOffset, r.byteLength);
                                case ra:
                                case oa:
                                case sa:
                                case aa:
                                case la:
                                case ca:
                                case ua:
                                case ha:
                                case pa:
                                    return Ct(t, e);
                                case Qs:
                                    return new o;
                                case Ys:
                                case Js:
                                    return new o(t);
                                case Zs:
                                    return (i = new(n = t).constructor(n.source, Ha.exec(n))).lastIndex = n.lastIndex, i;
                                case Gs:
                                    return new o;
                                case ta:
                                    return Ui ? Fn(Ui.call(t)) : {}
                            }
                        }(n, a)
                    }
                }
                var w = (o = o || new k).get(n);
                if (w) return w;
                o.set(n, s), ro(n) ? n.forEach(function(t) {
                    s.add(C(t, i, r, t, n, o))
                }) : no(n) && n.forEach(function(t, e) {
                    s.set(e, C(t, i, r, e, n, o))
                });
                var S = y ? Ps : (c ? l ? re : ie : l ? _n : yn)(n);
                return Jo(S || n, function(t, e) {
                    S && (t = n[e = t]), T(s, e, C(t, i, r, e, n, o))
                }), s
            }

            function d(t, e, n) {
                var i = n.length;
                if (null == t) return !i;
                for (t = Fn(t); i--;) {
                    var r = n[i],
                        o = e[r],
                        s = t[r];
                    if (s === Ps && !(r in t) || !o(s)) return !1
                }
                return !0
            }

            function f(t, e, n) {
                if ("function" != typeof t) throw new Bn(Ns);
                return ur(function() {
                    t.apply(Ps, n)
                }, e)
            }

            function b(t, e, n, i) {
                var r = -1,
                    o = ns,
                    s = !0,
                    a = t.length,
                    l = [],
                    c = e.length;
                if (!a) return l;
                n && (e = rs(e, _s(n))), i ? (o = is, s = !1) : 200 <= e.length && (o = ws, s = !1, e = new _(e));
                t: for (; ++r < a;) {
                    var u = t[r],
                        h = null == n ? u : n(u),
                        u = i || 0 !== u ? u : 0;
                    if (s && h == h) {
                        for (var p = c; p--;)
                            if (e[p] === h) continue t;
                        l.push(u)
                    } else o(e, h, i) || l.push(u)
                }
                return l
            }

            function w(t, i) {
                var r = !0;
                return Qi(t, function(t, e, n) {
                    return r = !!i(t, e, n)
                }), r
            }

            function S(t, e, n) {
                for (var i = -1, r = t.length; ++i < r;) {
                    var o, s, a = t[i],
                        l = e(a);
                    null != l && (o === Ps ? l == l && !ln(l) : n(l, o)) && (o = l, s = a)
                }
                return s
            }

            function E(t, i) {
                var r = [];
                return Qi(t, function(t, e, n) {
                    i(t, e, n) && r.push(t)
                }), r
            }

            function I(t, e, n, i, r) {
                var o = -1,
                    s = t.length;
                for (n = n || de, r = r || []; ++o < s;) {
                    var a = t[o];
                    0 < e && n(a) ? 1 < e ? I(a, e - 1, n, i, r) : os(r, a) : i || (r[r.length] = a)
                }
                return r
            }

            function A(t, e) {
                return t && Ki(t, e, yn)
            }

            function O(t, e) {
                return t && Xi(t, e, yn)
            }

            function $(e, t) {
                return es(t, function(t) {
                    return Je(e[t])
                })
            }

            function P(t, e) {
                for (var n = 0, i = (e = St(e, t)).length; null != t && n < i;) t = t[Ee(e[n++])];
                return n && n == i ? t : Ps
            }

            function N(t, e, n) {
                var i = e(t);
                return Gr(t) ? i : os(i, n(t))
            }

            function j(t) {
                return null == t ? t === Ps ? "[object Undefined]" : "[object Null]" : hi && hi in Fn(t) ? function(t) {
                    var e = Yn.call(t, hi),
                        n = t[hi];
                    try {
                        t[hi] = Ps;
                        var i = !0
                    } catch (t) {}
                    var r = Zn.call(t);
                    return i && (e ? t[hi] = n : delete t[hi]), r
                }(t) : Zn.call(t)
            }

            function D(t, e) {
                return e < t
            }

            function L(t, e) {
                return null != t && Yn.call(t, e)
            }

            function H(t, e) {
                return null != t && e in Fn(t)
            }

            function M(t, e, n) {
                for (var i = n ? is : ns, r = t[0].length, o = t.length, s = o, a = jn(o), l = 1 / 0, c = []; s--;) {
                    var u = t[s];
                    s && e && (u = rs(u, _s(e))), l = Ti(u.length, l), a[s] = !n && (e || 120 <= r && 120 <= u.length) ? new _(s && u) : Ps
                }
                u = t[0];
                var h = -1,
                    p = a[0];
                t: for (; ++h < r && c.length < l;) {
                    var d = u[h],
                        f = e ? e(d) : d,
                        d = n || 0 !== d ? d : 0;
                    if (!(p ? ws(p, f) : i(c, f, n))) {
                        for (s = o; --s;) {
                            var g = a[s];
                            if (!(g ? ws(g, f) : i(t[s], f, n))) continue t
                        }
                        p && p.push(f), c.push(d)
                    }
                }
                return c
            }

            function F(t, e, n) {
                var i = null == (t = Se(t, e = St(e, t))) ? t : t[Ee(je(e))];
                return null == i ? Ps : Zo(i, t, n)
            }

            function z(t) {
                return rn(t) && j(t) == zs
            }

            function R(t, e, n, i, r) {
                return t === e || (null == t || null == e || !rn(t) && !rn(e) ? t != t && e != e : function(t, e, n, i, r, o) {
                    var s = Gr(t),
                        a = Gr(e),
                        u = s ? Rs : or(t),
                        l = a ? Rs : or(e),
                        c = (u = u == zs ? Ks : u) == Ks,
                        h = (l = l == zs ? Ks : l) == Ks,
                        p = u == l;
                    if (p && to(t)) {
                        if (!to(e)) return !1;
                        c = !(s = !0)
                    }
                    if (p && !c) return o = o || new k, (s || oo(t) ? ee : function(t, e, n, i, r, o) {
                        switch (u) {
                            case ia:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                t = t.buffer, e = e.buffer;
                            case na:
                                return !(t.byteLength != e.byteLength || !r(new ii(t), new ii(e)));
                            case Bs:
                            case Us:
                            case Ys:
                                return Ke(+t, +e);
                            case qs:
                                return t.name == e.name && t.message == e.message;
                            case Zs:
                            case Js:
                                return t == e + "";
                            case Qs:
                                var s = Cs;
                            case Gs:
                                var a = 1 & n,
                                    s = s || As;
                                if (t.size != e.size && !a) return !1;
                                var l = o.get(t);
                                if (l) return l == e;
                                n |= 2, o.set(t, e);
                                var c = ee(s(t), s(e), n, i, r, o);
                                return o.delete(t), c;
                            case ta:
                                if (Ui) return Ui.call(t) == Ui.call(e)
                        }
                        return !1
                    })(t, e, n, i, r, o);
                    if (!(1 & n)) {
                        var d = c && Yn.call(t, "__wrapped__"),
                            f = h && Yn.call(e, "__wrapped__");
                        if (d || f) return r(d ? t.value() : t, f ? e.value() : e, n, i, o = o || new k)
                    }
                    return !!p && function(t, e, n, i, r, o) {
                        var s = 1 & n,
                            a = ie(t),
                            l = a.length;
                        if (l != ie(e).length && !s) return !1;
                        for (var c = l; c--;) {
                            var u = a[c];
                            if (!(s ? u in e : Yn.call(e, u))) return !1
                        }
                        var h = o.get(t),
                            p = o.get(e);
                        if (h && p) return h == e && p == t;
                        var d = !0;
                        o.set(t, e), o.set(e, t);
                        for (var f, g, m = s; ++c < l;) {
                            var v, y = t[u = a[c]],
                                _ = e[u];
                            if (i && (v = s ? i(_, y, u, e, t, o) : i(y, _, u, t, e, o)), !(v === Ps ? y === _ || r(y, _, n, i, o) : v)) {
                                d = !1;
                                break
                            }
                            m = m || "constructor" == u
                        }
                        return !d || m || (f = t.constructor) != (g = e.constructor) && "constructor" in t && "constructor" in e && !("function" == typeof f && f instanceof f && "function" == typeof g && g instanceof g) && (d = !1), o.delete(t), o.delete(e), d
                    }(t, e, n, i, r, o = o || new k)
                }(t, e, n, i, R, r))
            }

            function B(t, e, n, i) {
                var r = n.length,
                    o = r,
                    s = !i;
                if (null == t) return !o;
                for (t = Fn(t); r--;) {
                    var a = n[r];
                    if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                }
                for (; ++r < o;) {
                    var l = (a = n[r])[0],
                        c = t[l],
                        u = a[1];
                    if (s && a[2]) {
                        if (c === Ps && !(l in t)) return !1
                    } else {
                        var h, p = new k;
                        if (i && (h = i(c, u, l, t, e, p)), !(h === Ps ? R(u, c, 3, i, p) : h)) return !1
                    }
                }
                return !0
            }

            function U(t) {
                return !(!nn(t) || Xn && Xn in t) && (Je(t) ? ti : za).test(Ie(t))
            }

            function q(t) {
                return "function" == typeof t ? t : null == t ? Cn : "object" == typeof t ? Gr(t) ? K(t[0], t[1]) : Y(t) : On(t)
            }

            function W(t) {
                if (!ye(t)) return Si(t);
                var e = [];
                for (var n in Fn(t)) Yn.call(t, n) && "constructor" != n && e.push(n);
                return e
            }

            function V(t, e) {
                return t < e
            }

            function Q(t, i) {
                var r = -1,
                    o = Xe(t) ? jn(t.length) : [];
                return Qi(t, function(t, e, n) {
                    o[++r] = i(t, e, n)
                }), o
            }

            function Y(e) {
                var n = ce(e);
                return 1 == n.length && n[0][2] ? be(n[0][0], n[0][1]) : function(t) {
                    return t === e || B(t, e, n)
                }
            }

            function K(n, i) {
                return me(n) && _e(i) ? be(Ee(n), i) : function(t) {
                    var e = mn(t, n);
                    return e === Ps && e === i ? vn(t, n) : R(i, e, 3)
                }
            }

            function X(i, r, o, s, a) {
                i !== r && Ki(r, function(t, e) {
                    var n;
                    a = a || new k, nn(t) ? function(t, e, n, i, r, o, s) {
                        var a = ke(t, n),
                            l = ke(e, n),
                            c = s.get(l);
                        if (c) return g(t, n, c);
                        var u, h, p, d = o ? o(a, l, n + "", t, e, s) : Ps,
                            f = d === Ps;
                        f && (h = !(u = Gr(l)) && to(l), p = !u && !h && oo(l), d = l, u || h || p ? d = Gr(a) ? a : Ze(a) ? Ot(a) : h ? Tt(l, !(f = !1)) : p ? Ct(l, !(f = !1)) : [] : sn(l) || Zr(l) ? Zr(d = a) ? d = fn(a) : nn(a) && !Je(a) || (d = pe(l)) : f = !1), f && (s.set(l, d), r(d, l, i, o, s), s.delete(l)), g(t, n, d)
                    }(i, r, e, o, X, s, a) : ((n = s ? s(ke(i, e), t, e + "", i, r, a) : Ps) === Ps && (n = t), g(i, e, n))
                }, _n)
            }

            function Z(t, e) {
                var n = t.length;
                if (n) return fe(e += e < 0 ? n : 0, n) ? t[e] : Ps
            }

            function G(t, i, n) {
                i = i.length ? rs(i, function(e) {
                    return Gr(e) ? function(t) {
                        return P(t, 1 === e.length ? e[0] : e)
                    } : e
                }) : [Cn];
                var r = -1;
                return i = rs(i, _s(ae())),
                    function(t) {
                        var e = t.length;
                        for (t.sort(function(t, e) {
                                return function(t, e, n) {
                                    for (var i = -1, r = t.criteria, o = e.criteria, s = r.length, a = n.length; ++i < s;) {
                                        var l = Et(r[i], o[i]);
                                        if (l) return a <= i ? l : l * ("desc" == n[i] ? -1 : 1)
                                    }
                                    return t.index - e.index
                                }(t, e, n)
                            }); e--;) t[e] = t[e].value;
                        return t
                    }(Q(t, function(e, t, n) {
                        return {
                            criteria: rs(i, function(t) {
                                return t(e)
                            }),
                            index: ++r,
                            value: e
                        }
                    }))
            }

            function J(t, e, n) {
                for (var i = -1, r = e.length, o = {}; ++i < r;) {
                    var s = e[i],
                        a = P(t, s);
                    n(a, s) && ot(o, St(s, t), a)
                }
                return o
            }

            function tt(t, e, n, i) {
                var r = i ? ps : hs,
                    o = -1,
                    s = e.length,
                    a = t;
                for (t === e && (e = Ot(e)), n && (a = rs(t, _s(n))); ++o < s;)
                    for (var l = 0, c = e[o], u = n ? n(c) : c; - 1 < (l = r(a, u, l, i));) a !== t && li.call(a, l, 1), li.call(t, l, 1);
                return t
            }

            function et(t, e) {
                for (var n = t ? e.length : 0, i = n - 1; n--;) {
                    var r, o = e[n];
                    n != i && o === r || (fe(r = o) ? li.call(t, o, 1) : ft(t, o))
                }
                return t
            }

            function nt(t, e) {
                return t + vi(Ei() * (e - t + 1))
            }

            function it(t, e) {
                var n = "";
                if (!t || e < 1 || Ls < e) return n;
                for (; e % 2 && (n += t), (e = vi(e / 2)) && (t += t), e;);
                return n
            }

            function rt(t, e) {
                return hr(we(t, e, Cn), t + "")
            }

            function ot(t, e, n, i) {
                if (!nn(t)) return t;
                for (var r = -1, o = (e = St(e, t)).length, s = o - 1, a = t; null != a && ++r < o;) {
                    var l, c = Ee(e[r]),
                        u = n;
                    if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
                    r != s && (l = a[c], (u = i ? i(l, c, a) : Ps) === Ps && (u = nn(l) ? l : fe(e[r + 1]) ? [] : {})), T(a, c, u), a = a[c]
                }
                return t
            }

            function st(t, e, n) {
                var i = -1,
                    r = t.length;
                e < 0 && (e = r < -e ? 0 : r + e), (n = r < n ? r : n) < 0 && (n += r), r = n < e ? 0 : n - e >>> 0, e >>>= 0;
                for (var o = jn(r); ++i < r;) o[i] = t[i + e];
                return o
            }

            function at(t, i) {
                var r;
                return Qi(t, function(t, e, n) {
                    return !(r = i(t, e, n))
                }), !!r
            }

            function lt(t, e, n) {
                var i = 0,
                    r = null == t ? i : t.length;
                if ("number" == typeof e && e == e && r <= 2147483647) {
                    for (; i < r;) {
                        var o = i + r >>> 1,
                            s = t[o];
                        null !== s && !ln(s) && (n ? s <= e : s < e) ? i = 1 + o : r = o
                    }
                    return r
                }
                return ct(t, e, Cn, n)
            }

            function ct(t, e, n, i) {
                var r = 0,
                    o = null == t ? 0 : t.length;
                if (0 === o) return 0;
                for (var s = (e = n(e)) != e, a = null === e, l = ln(e), c = e === Ps; r < o;) {
                    var u = vi((r + o) / 2),
                        h = n(t[u]),
                        p = h !== Ps,
                        d = null === h,
                        f = h == h,
                        g = ln(h),
                        m = s ? i || f : c ? f && (i || p) : a ? f && p && (i || !d) : l ? f && p && !d && (i || !g) : !d && !g && (i ? h <= e : h < e);
                    m ? r = u + 1 : o = u
                }
                return Ti(o, 4294967294)
            }

            function ut(t, e) {
                for (var n = -1, i = t.length, r = 0, o = []; ++n < i;) {
                    var s, a = t[n],
                        l = e ? e(a) : a;
                    n && Ke(l, s) || (s = l, o[r++] = 0 === a ? 0 : a)
                }
                return o
            }

            function ht(t) {
                return "number" == typeof t ? t : ln(t) ? Hs : +t
            }

            function pt(t) {
                if ("string" == typeof t) return t;
                if (Gr(t)) return rs(t, pt) + "";
                if (ln(t)) return qi ? qi.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
            }

            function dt(t, e, n) {
                var i = -1,
                    r = ns,
                    o = t.length,
                    s = !0,
                    a = [],
                    l = a;
                if (n) s = !1, r = is;
                else if (200 <= o) {
                    var c = e ? null : er(t);
                    if (c) return As(c);
                    s = !1, r = ws, l = new _
                } else l = e ? [] : a;
                t: for (; ++i < o;) {
                    var u = t[i],
                        h = e ? e(u) : u,
                        u = n || 0 !== u ? u : 0;
                    if (s && h == h) {
                        for (var p = l.length; p--;)
                            if (l[p] === h) continue t;
                        e && l.push(h), a.push(u)
                    } else r(l, h, n) || (l !== a && l.push(h), a.push(u))
                }
                return a
            }

            function ft(t, e) {
                return null == (t = Se(t, e = St(e, t))) || delete t[Ee(je(e))]
            }

            function gt(t, e, n, i) {
                return ot(t, e, n(P(t, e)), i)
            }

            function mt(t, e, n, i) {
                for (var r = t.length, o = i ? r : -1;
                    (i ? o-- : ++o < r) && e(t[o], o, t););
                return n ? st(t, i ? 0 : o, i ? o + 1 : r) : st(t, i ? o + 1 : 0, i ? r : o)
            }

            function vt(t, e) {
                var n = t;
                return n instanceof y && (n = n.value()), ss(e, function(t, e) {
                    return e.func.apply(e.thisArg, os([t], e.args))
                }, n)
            }

            function yt(t, e, n) {
                var i = t.length;
                if (i < 2) return i ? dt(t[0]) : [];
                for (var r = -1, o = jn(i); ++r < i;)
                    for (var s = t[r], a = -1; ++a < i;) a != r && (o[r] = b(o[r] || s, t[a], e, n));
                return dt(I(o, 1), e, n)
            }

            function _t(t, e, n) {
                for (var i = -1, r = t.length, o = e.length, s = {}; ++i < r;) n(s, t[i], i < o ? e[i] : Ps);
                return s
            }

            function bt(t) {
                return Ze(t) ? t : []
            }

            function wt(t) {
                return "function" == typeof t ? t : Cn
            }

            function St(t, e) {
                return Gr(t) ? t : me(t, e) ? [t] : pr(gn(t))
            }

            function kt(t, e, n) {
                var i = t.length;
                return n = n === Ps ? i : n, !e && i <= n ? t : st(t, e, n)
            }

            function Tt(t, e) {
                if (e) return t.slice();
                var n = t.length,
                    i = ri ? ri(n) : new t.constructor(n);
                return t.copy(i), i
            }

            function xt(t) {
                var e = new t.constructor(t.byteLength);
                return new ii(e).set(new ii(t)), e
            }

            function Ct(t, e) {
                return new t.constructor(e ? xt(t.buffer) : t.buffer, t.byteOffset, t.length)
            }

            function Et(t, e) {
                if (t !== e) {
                    var n = t !== Ps,
                        i = null === t,
                        r = t == t,
                        o = ln(t),
                        s = e !== Ps,
                        a = null === e,
                        l = e == e,
                        c = ln(e);
                    if (!a && !c && !o && e < t || o && s && l && !a && !c || i && s && l || !n && l || !r) return 1;
                    if (!i && !o && !c && t < e || c && n && r && !i && !o || a && n && r || !s && r || !l) return -1
                }
                return 0
            }

            function It(t, e, n, i) {
                for (var r = -1, o = t.length, s = n.length, a = -1, l = e.length, c = ki(o - s, 0), u = jn(l + c), h = !i; ++a < l;) u[a] = e[a];
                for (; ++r < s;)(h || r < o) && (u[n[r]] = t[r]);
                for (; c--;) u[a++] = t[r++];
                return u
            }

            function At(t, e, n, i) {
                for (var r = -1, o = t.length, s = -1, a = n.length, l = -1, c = e.length, u = ki(o - a, 0), h = jn(u + c), p = !i; ++r < u;) h[r] = t[r];
                for (var d = r; ++l < c;) h[d + l] = e[l];
                for (; ++s < a;)(p || r < o) && (h[d + n[s]] = t[r++]);
                return h
            }

            function Ot(t, e) {
                var n = -1,
                    i = t.length;
                for (e = e || jn(i); ++n < i;) e[n] = t[n];
                return e
            }

            function $t(t, e, n, i) {
                var r = !n;
                n = n || {};
                for (var o = -1, s = e.length; ++o < s;) {
                    var a = e[o],
                        l = i ? i(n[a], t[a], a, n, t) : Ps;
                    l === Ps && (l = t[a]), (r ? u : T)(n, a, l)
                }
                return n
            }

            function Pt(r, o) {
                return function(t, e) {
                    var n = Gr(t) ? Go : c,
                        i = o ? o() : {};
                    return n(t, r, ae(e, 2), i)
                }
            }

            function Nt(a) {
                return rt(function(t, e) {
                    var n = -1,
                        i = e.length,
                        r = 1 < i ? e[i - 1] : Ps,
                        o = 2 < i ? e[2] : Ps,
                        r = 3 < a.length && "function" == typeof r ? (i--, r) : Ps;
                    for (o && ge(e[0], e[1], o) && (r = i < 3 ? Ps : r, i = 1), t = Fn(t); ++n < i;) {
                        var s = e[n];
                        s && a(t, s, n, r)
                    }
                    return t
                })
            }

            function jt(o, s) {
                return function(t, e) {
                    if (null == t) return t;
                    if (!Xe(t)) return o(t, e);
                    for (var n = t.length, i = s ? n : -1, r = Fn(t);
                        (s ? i-- : ++i < n) && !1 !== e(r[i], i, r););
                    return t
                }
            }

            function Dt(l) {
                return function(t, e, n) {
                    for (var i = -1, r = Fn(t), o = n(t), s = o.length; s--;) {
                        var a = o[l ? s : ++i];
                        if (!1 === e(r[a], a, r)) break
                    }
                    return t
                }
            }

            function Lt(r) {
                return function(t) {
                    var e = xs(t = gn(t)) ? $s(t) : Ps,
                        n = e ? e[0] : t.charAt(0),
                        i = e ? kt(e, 1).join("") : t.slice(1);
                    return n[r]() + i
                }
            }

            function Ht(e) {
                return function(t) {
                    return ss(Tn(kn(t).replace(Va, "")), e, "")
                }
            }

            function Mt(i) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new i;
                        case 1:
                            return new i(t[0]);
                        case 2:
                            return new i(t[0], t[1]);
                        case 3:
                            return new i(t[0], t[1], t[2]);
                        case 4:
                            return new i(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new i(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new i(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new i(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var e = Wi(i.prototype),
                        n = i.apply(e, t);
                    return nn(n) ? n : e
                }
            }

            function Ft(s) {
                return function(t, e, n) {
                    var i, r = Fn(t);
                    Xe(t) || (i = ae(e, 3), t = yn(t), e = function(t) {
                        return i(r[t], t, r)
                    });
                    var o = s(t, e, n);
                    return -1 < o ? r[i ? t[o] : o] : Ps
                }
            }

            function zt(l) {
                return ne(function(r) {
                    var o = r.length,
                        t = o,
                        e = v.prototype.thru;
                    for (l && r.reverse(); t--;) {
                        var n = r[t];
                        if ("function" != typeof n) throw new Bn(Ns);
                        e && !a && "wrapper" == oe(n) && (a = new v([], !0))
                    }
                    for (t = a ? t : o; ++t < o;) var i = oe(n = r[t]),
                        s = "wrapper" == i ? nr(n) : Ps,
                        a = s && ve(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9] ? a[oe(s[0])].apply(a, s[3]) : 1 == n.length && ve(n) ? a[i]() : a.thru(n);
                    return function() {
                        var t = arguments,
                            e = t[0];
                        if (a && 1 == t.length && Gr(e)) return a.plant(e).value();
                        for (var n = 0, i = o ? r[n].apply(this, t) : e; ++n < o;) i = r[n].call(this, i);
                        return i
                    }
                })
            }

            function Rt(l, c, u, h, p, d, f, g, m, v) {
                var y = 128 & c,
                    _ = 1 & c,
                    b = 2 & c,
                    w = 24 & c,
                    S = 512 & c,
                    k = b ? Ps : Mt(l);
                return function t() {
                    for (var e, n, i = jn(a = arguments.length), r = a; r--;) i[r] = arguments[r];
                    if (w && (n = function(t, e) {
                            for (var n = t.length, i = 0; n--;) t[n] === e && ++i;
                            return i
                        }(i, e = se(t))), h && (i = It(i, h, p, w)), d && (i = At(i, d, f, w)), a -= n, w && a < v) return Yt(l, c, Rt, t.placeholder, u, i, Is(i, e), g, m, v - a);
                    var o = _ ? u : this,
                        s = b ? o[l] : l,
                        a = i.length;
                    return g ? i = function(t, e) {
                        for (var n = t.length, i = Ti(e.length, n), r = Ot(t); i--;) {
                            var o = e[i];
                            t[i] = fe(o, n) ? r[o] : Ps
                        }
                        return t
                    }(i, g) : S && 1 < a && i.reverse(), y && m < a && (i.length = m), this && this !== nl && this instanceof t && (s = k || Mt(s)), s.apply(o, i)
                }
            }

            function Bt(s, a) {
                return function(t, e) {
                    return n = t, i = s, r = a(e), o = {}, A(n, function(t, e, n) {
                        i(o, r(t), e, n)
                    }), o;
                    var n, i, r, o
                }
            }

            function Ut(i, r) {
                return function(t, e) {
                    var n;
                    if (t === Ps && e === Ps) return r;
                    if (t !== Ps && (n = t), e !== Ps) {
                        if (n === Ps) return e;
                        e = "string" == typeof t || "string" == typeof e ? (t = pt(t), pt(e)) : (t = ht(t), ht(e)), n = i(t, e)
                    }
                    return n
                }
            }

            function qt(i) {
                return ne(function(t) {
                    return t = rs(t, _s(ae())), rt(function(e) {
                        var n = this;
                        return i(t, function(t) {
                            return Zo(t, n, e)
                        })
                    })
                })
            }

            function Wt(t, e) {
                var n = (e = e === Ps ? " " : pt(e)).length;
                if (n < 2) return n ? it(e, t) : e;
                var i = it(e, mi(t / Os(e)));
                return xs(e) ? kt($s(i), 0, t).join("") : i.slice(0, t)
            }

            function Vt(i) {
                return function(t, e, n) {
                    return n && "number" != typeof n && ge(t, e, n) && (e = n = Ps), t = un(t), e === Ps ? (e = t, t = 0) : e = un(e),
                        function(t, e, n, i) {
                            for (var r = -1, o = ki(mi((e - t) / (n || 1)), 0), s = jn(o); o--;) s[i ? o : ++r] = t, t += n;
                            return s
                        }(t, e, n = n === Ps ? t < e ? 1 : -1 : un(n), i)
                }
            }

            function Qt(n) {
                return function(t, e) {
                    return "string" == typeof t && "string" == typeof e || (t = dn(t), e = dn(e)), n(t, e)
                }
            }

            function Yt(t, e, n, i, r, o, s, a, l, c) {
                var u = 8 & e;
                e |= u ? 32 : 64, 4 & (e &= ~(u ? 64 : 32)) || (e &= -4);
                var h = [t, e, r, u ? o : Ps, u ? s : Ps, u ? Ps : o, u ? Ps : s, a, l, c],
                    p = n.apply(Ps, h);
                return ve(t) && cr(p, h), p.placeholder = i, Te(p, t, e)
            }

            function Kt(t) {
                var i = Mn[t];
                return function(t, e) {
                    if (t = dn(t), (e = null == e ? 0 : Ti(hn(e), 292)) && bi(t)) {
                        var n = (gn(t) + "e").split("e");
                        return +((n = (gn(i(n[0] + "e" + (+n[1] + e))) + "e").split("e"))[0] + "e" + (n[1] - e))
                    }
                    return i(t)
                }
            }

            function Xt(s) {
                return function(t) {
                    var e, n, i, r, o = or(t);
                    return o == Qs ? Cs(t) : o == Gs ? (n = t, i = -1, r = Array(n.size), n.forEach(function(t) {
                        r[++i] = [t, t]
                    }), r) : rs(s(e = t), function(t) {
                        return [t, e[t]]
                    })
                }
            }

            function Zt(t, e, n, i, r, o, s, a) {
                var l = 2 & e;
                if (!l && "function" != typeof t) throw new Bn(Ns);
                var c, u, h = i ? i.length : 0;
                h || (e &= -97, i = r = Ps), s = s === Ps ? s : ki(hn(s), 0), a = a === Ps ? a : hn(a), h -= r ? r.length : 0, 64 & e && (c = i, u = r, i = r = Ps);
                var p, d, f, g, m, v, y, _, b, w, S, k, T, x, C, E, I, A, O, $, P, N, j, D = l ? Ps : nr(t),
                    L = [t, e, n, i, r, c, u, o, s, a];
                return D && (E = D, O = (C = L)[1], $ = E[1], N = (P = O | $) < 131, j = 128 == $ && 8 == O || 128 == $ && 256 == O && C[7].length <= E[8] || 384 == $ && E[7].length <= E[8] && 8 == O, (N || j) && (1 & $ && (C[2] = E[2], P |= 1 & O ? 0 : 4), (I = E[3]) && (A = C[3], C[3] = A ? It(A, I, E[4]) : I, C[4] = A ? Is(C[3], Ds) : E[4]), (I = E[5]) && (A = C[5], C[5] = A ? At(A, I, E[6]) : I, C[6] = A ? Is(C[5], Ds) : E[6]), (I = E[7]) && (C[7] = I), 128 & $ && (C[8] = null == C[8] ? E[8] : Ti(C[8], E[8])), null == C[9] && (C[9] = E[9]), C[0] = E[0], C[1] = P)), t = L[0], e = L[1], n = L[2], i = L[3], r = L[4], !(a = L[9] = L[9] === Ps ? l ? 0 : t.length : ki(L[9] - h, 0)) && 24 & e && (e &= -25), p = e && 1 != e ? 8 == e || 16 == e ? (k = e, T = a, x = Mt(S = t), function t() {
                    for (var e = arguments.length, n = jn(e), i = e, r = se(t); i--;) n[i] = arguments[i];
                    var o = e < 3 && n[0] !== r && n[e - 1] !== r ? [] : Is(n, r);
                    return (e -= o.length) < T ? Yt(S, k, Rt, t.placeholder, Ps, n, o, Ps, Ps, T - e) : Zo(this && this !== nl && this instanceof t ? x : S, this, n)
                }) : 32 != e && 33 != e || r.length ? Rt.apply(Ps, L) : (y = n, _ = i, b = 1 & e, w = Mt(v = t), function t() {
                    for (var e = -1, n = arguments.length, i = -1, r = _.length, o = jn(r + n), s = this && this !== nl && this instanceof t ? w : v; ++i < r;) o[i] = _[i];
                    for (; n--;) o[i++] = arguments[++e];
                    return Zo(s, b ? y : this, o)
                }) : (f = n, g = 1 & e, m = Mt(d = t), function t() {
                    return (this && this !== nl && this instanceof t ? m : d).apply(g ? f : this, arguments)
                }), Te((D ? Zi : cr)(p, L), t, e)
            }

            function Gt(t, e, n, i) {
                return t === Ps || Ke(t, Wn[n]) && !Yn.call(i, n) ? e : t
            }

            function Jt(t, e, n, i, r, o) {
                return nn(t) && nn(e) && (o.set(e, t), X(t, e, Ps, Jt, o), o.delete(e)), t
            }

            function te(t) {
                return sn(t) ? Ps : t
            }

            function ee(t, e, n, i, r, o) {
                var s = 1 & n,
                    a = t.length,
                    l = e.length;
                if (a != l && !(s && a < l)) return !1;
                var c = o.get(t),
                    u = o.get(e);
                if (c && u) return c == e && u == t;
                var h = -1,
                    p = !0,
                    d = 2 & n ? new _ : Ps;
                for (o.set(t, e), o.set(e, t); ++h < a;) {
                    var f, g = t[h],
                        m = e[h];
                    if (i && (f = s ? i(m, g, h, e, t, o) : i(g, m, h, t, e, o)), f !== Ps) {
                        if (f) continue;
                        p = !1;
                        break
                    }
                    if (d) {
                        if (!ls(e, function(t, e) {
                                return !ws(d, e) && (g === t || r(g, t, n, i, o)) && d.push(e)
                            })) {
                            p = !1;
                            break
                        }
                    } else if (g !== m && !r(g, m, n, i, o)) {
                        p = !1;
                        break
                    }
                }
                return o.delete(t), o.delete(e), p
            }

            function ne(t) {
                return hr(we(t, Ps, Pe), t + "")
            }

            function ie(t) {
                return N(t, yn, ir)
            }

            function re(t) {
                return N(t, _n, rr)
            }

            function oe(t) {
                for (var e = t.name + "", n = Li[e], i = Yn.call(Li, e) ? n.length : 0; i--;) {
                    var r = n[i],
                        o = r.func;
                    if (null == o || o == t) return r.name
                }
                return e
            }

            function se(t) {
                return (Yn.call(m, "placeholder") ? m : t).placeholder
            }

            function ae() {
                var t = (t = m.iteratee || En) === En ? q : t;
                return arguments.length ? t(arguments[0], arguments[1]) : t
            }

            function le(t, e) {
                var n, i = t.__data__;
                return ("string" == (n = typeof e) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? i["string" == typeof e ? "string" : "hash"] : i.map
            }

            function ce(t) {
                for (var e = yn(t), n = e.length; n--;) {
                    var i = e[n],
                        r = t[i];
                    e[n] = [i, r, _e(r)]
                }
                return e
            }

            function ue(t, e) {
                var n = null == t ? Ps : t[e];
                return U(n) ? n : Ps
            }

            function he(t, e, n) {
                for (var i = -1, r = (e = St(e, t)).length, o = !1; ++i < r;) {
                    var s = Ee(e[i]);
                    if (!(o = null != t && n(t, s))) break;
                    t = t[s]
                }
                return o || ++i != r ? o : !!(r = null == t ? 0 : t.length) && en(r) && fe(s, r) && (Gr(t) || Zr(t))
            }

            function pe(t) {
                return "function" != typeof t.constructor || ye(t) ? {} : Wi(oi(t))
            }

            function de(t) {
                return Gr(t) || Zr(t) || !!(ci && t && t[ci])
            }

            function fe(t, e) {
                var n = typeof t;
                return !!(e = null == e ? Ls : e) && ("number" == n || "symbol" != n && Ba.test(t)) && -1 < t && t % 1 == 0 && t < e
            }

            function ge(t, e, n) {
                if (!nn(n)) return !1;
                var i = typeof e;
                return !!("number" == i ? Xe(n) && fe(e, n.length) : "string" == i && e in n) && Ke(n[e], t)
            }

            function me(t, e) {
                if (!Gr(t)) {
                    var n = typeof t;
                    return "number" == n || "symbol" == n || "boolean" == n || null == t || ln(t) || Ta.test(t) || !ka.test(t) || null != e && t in Fn(e)
                }
            }

            function ve(t) {
                var e = oe(t),
                    n = m[e];
                if ("function" == typeof n && e in y.prototype) {
                    if (t === n) return 1;
                    var i = nr(n);
                    return i && t === i[0]
                }
            }

            function ye(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || Wn)
            }

            function _e(t) {
                return t == t && !nn(t)
            }

            function be(e, n) {
                return function(t) {
                    return null != t && t[e] === n && (n !== Ps || e in Fn(t))
                }
            }

            function we(o, s, a) {
                return s = ki(s === Ps ? o.length - 1 : s, 0),
                    function() {
                        for (var t = arguments, e = -1, n = ki(t.length - s, 0), i = jn(n); ++e < n;) i[e] = t[s + e];
                        e = -1;
                        for (var r = jn(s + 1); ++e < s;) r[e] = t[e];
                        return r[s] = a(i), Zo(o, this, r)
                    }
            }

            function Se(t, e) {
                return e.length < 2 ? t : P(t, st(e, 0, -1))
            }

            function ke(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
            }

            function Te(t, e, n) {
                var i, r, o, s = e + "";
                return hr(t, function(t, e) {
                    var n = e.length;
                    if (!n) return t;
                    var i = n - 1;
                    return e[i] = (1 < n ? "& " : "") + e[i], e = e.join(2 < n ? ", " : " "), t.replace($a, "{\n/* [wrapped with " + e + "] */\n")
                }(s, (o = s.match(Pa), i = o ? o[1].split(Na) : [], r = n, Jo(Fs, function(t) {
                    var e = "_." + t[0];
                    r & t[1] && !ns(i, e) && i.push(e)
                }), i.sort())))
            }

            function xe(n) {
                var i = 0,
                    r = 0;
                return function() {
                    var t = xi(),
                        e = 16 - (t - r);
                    if (r = t, 0 < e) {
                        if (800 <= ++i) return arguments[0]
                    } else i = 0;
                    return n.apply(Ps, arguments)
                }
            }

            function Ce(t, e) {
                var n = -1,
                    i = t.length,
                    r = i - 1;
                for (e = e === Ps ? i : e; ++n < e;) {
                    var o = nt(n, r),
                        s = t[o];
                    t[o] = t[n], t[n] = s
                }
                return t.length = e, t
            }

            function Ee(t) {
                if ("string" == typeof t || ln(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
            }

            function Ie(t) {
                if (null != t) {
                    try {
                        return Qn.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }

            function Ae(t) {
                if (t instanceof y) return t.clone();
                var e = new v(t.__wrapped__, t.__chain__);
                return e.__actions__ = Ot(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
            }

            function Oe(t, e, n) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var r = null == n ? 0 : hn(n);
                return r < 0 && (r = ki(i + r, 0)), us(t, ae(e, 3), r)
            }

            function $e(t, e, n) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var r = i - 1;
                return n !== Ps && (r = hn(n), r = n < 0 ? ki(i + r, 0) : Ti(r, i - 1)), us(t, ae(e, 3), r, !0)
            }

            function Pe(t) {
                return null != t && t.length ? I(t, 1) : []
            }

            function Ne(t) {
                return t && t.length ? t[0] : Ps
            }

            function je(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : Ps
            }

            function De(t, e) {
                return t && t.length && e && e.length ? tt(t, e) : t
            }

            function Le(t) {
                return null == t ? t : Ii.call(t)
            }

            function He(e) {
                if (!e || !e.length) return [];
                var n = 0;
                return e = es(e, function(t) {
                    return Ze(t) && (n = ki(t.length, n), 1)
                }), ys(n, function(t) {
                    return rs(e, gs(t))
                })
            }

            function Me(t, e) {
                if (!t || !t.length) return [];
                var n = He(t);
                return null == e ? n : rs(n, function(t) {
                    return Zo(e, Ps, t)
                })
            }

            function Fe(t) {
                var e = m(t);
                return e.__chain__ = !0, e
            }

            function ze(t, e) {
                return e(t)
            }

            function Re(t, e) {
                return (Gr(t) ? Jo : Qi)(t, ae(e, 3))
            }

            function Be(t, e) {
                return (Gr(t) ? function(t, e) {
                    for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
                    return t
                } : Yi)(t, ae(e, 3))
            }

            function Ue(t, e) {
                return (Gr(t) ? rs : Q)(t, ae(e, 3))
            }

            function qe(t, e, n) {
                return e = n ? Ps : e, e = t && null == e ? t.length : e, Zt(t, 128, Ps, Ps, Ps, Ps, e)
            }

            function We(t, e) {
                var n;
                if ("function" != typeof e) throw new Bn(Ns);
                return t = hn(t),
                    function() {
                        return 0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = Ps), n
                    }
            }

            function Ve(i, r, t) {
                function o(t) {
                    var e = l,
                        n = c;
                    return l = c = Ps, f = t, h = i.apply(n, e)
                }

                function s(t) {
                    var e = t - d;
                    return d === Ps || r <= e || e < 0 || m && u <= t - f
                }

                function a() {
                    var t, e = Fr();
                    return s(e) ? n(e) : (p = ur(a, (t = r - (e - d), m ? Ti(t, u - (e - f)) : t)), Ps)
                }

                function n(t) {
                    return p = Ps, v && l ? o(t) : (l = c = Ps, h)
                }

                function e() {
                    var t, e = Fr(),
                        n = s(e);
                    if (l = arguments, c = this, d = e, n) {
                        if (p === Ps) return f = t = d, p = ur(a, r), g ? o(t) : h;
                        if (m) return tr(p), p = ur(a, r), o(d)
                    }
                    return p === Ps && (p = ur(a, r)), h
                }
                var l, c, u, h, p, d, f = 0,
                    g = !1,
                    m = !1,
                    v = !0;
                if ("function" != typeof i) throw new Bn(Ns);
                return r = dn(r) || 0, nn(t) && (g = !!t.leading, u = (m = "maxWait" in t) ? ki(dn(t.maxWait) || 0, r) : u, v = "trailing" in t ? !!t.trailing : v), e.cancel = function() {
                    p !== Ps && tr(p), f = 0, l = d = c = p = Ps
                }, e.flush = function() {
                    return p === Ps ? h : n(Fr())
                }, e
            }

            function Qe(r, o) {
                if ("function" != typeof r || null != o && "function" != typeof o) throw new Bn(Ns);
                var s = function() {
                    var t = arguments,
                        e = o ? o.apply(this, t) : t[0],
                        n = s.cache;
                    if (n.has(e)) return n.get(e);
                    var i = r.apply(this, t);
                    return s.cache = n.set(e, i) || n, i
                };
                return s.cache = new(Qe.Cache || a), s
            }

            function Ye(e) {
                if ("function" != typeof e) throw new Bn(Ns);
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }

            function Ke(t, e) {
                return t === e || t != t && e != e
            }

            function Xe(t) {
                return null != t && en(t.length) && !Je(t)
            }

            function Ze(t) {
                return rn(t) && Xe(t)
            }

            function Ge(t) {
                if (!rn(t)) return !1;
                var e = j(t);
                return e == qs || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !sn(t)
            }

            function Je(t) {
                if (!nn(t)) return !1;
                var e = j(t);
                return e == Ws || e == Vs || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }

            function tn(t) {
                return "number" == typeof t && t == hn(t)
            }

            function en(t) {
                return "number" == typeof t && -1 < t && t % 1 == 0 && t <= Ls
            }

            function nn(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }

            function rn(t) {
                return null != t && "object" == typeof t
            }

            function on(t) {
                return "number" == typeof t || rn(t) && j(t) == Ys
            }

            function sn(t) {
                if (!rn(t) || j(t) != Ks) return !1;
                var e = oi(t);
                if (null === e) return !0;
                var n = Yn.call(e, "constructor") && e.constructor;
                return "function" == typeof n && n instanceof n && Qn.call(n) == Gn
            }

            function an(t) {
                return "string" == typeof t || !Gr(t) && rn(t) && j(t) == Js
            }

            function ln(t) {
                return "symbol" == typeof t || rn(t) && j(t) == ta
            }

            function cn(t) {
                if (!t) return [];
                if (Xe(t)) return (an(t) ? $s : Ot)(t);
                if (ui && t[ui]) return function(t) {
                    for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                    return n
                }(t[ui]());
                var e = or(t);
                return (e == Qs ? Cs : e == Gs ? As : wn)(t)
            }

            function un(t) {
                return t ? (t = dn(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            }

            function hn(t) {
                var e = un(t),
                    n = e % 1;
                return e == e ? n ? e - n : e : 0
            }

            function pn(t) {
                return t ? p(hn(t), 0, Ms) : 0
            }

            function dn(t) {
                if ("number" == typeof t) return t;
                if (ln(t)) return Hs;
                var e;
                if (nn(t) && (t = nn(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e), "string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(Ia, "");
                var n = Fa.test(t);
                return n || Ra.test(t) ? el(t.slice(2), n ? 2 : 8) : Ma.test(t) ? Hs : +t
            }

            function fn(t) {
                return $t(t, _n(t))
            }

            function gn(t) {
                return null == t ? "" : pt(t)
            }

            function mn(t, e, n) {
                var i = null == t ? Ps : P(t, e);
                return i === Ps ? n : i
            }

            function vn(t, e) {
                return null != t && he(t, e, H)
            }

            function yn(t) {
                return (Xe(t) ? i : W)(t)
            }

            function _n(t) {
                return Xe(t) ? i(t, !0) : function(t) {
                    if (!nn(t)) return function(t) {
                        var e = [];
                        if (null != t)
                            for (var n in Fn(t)) e.push(n);
                        return e
                    }(t);
                    var e = ye(t),
                        n = [];
                    for (var i in t)("constructor" != i || !e && Yn.call(t, i)) && n.push(i);
                    return n
                }(t)
            }

            function bn(t, n) {
                if (null == t) return {};
                var e = rs(re(t), function(t) {
                    return [t]
                });
                return n = ae(n), J(t, e, function(t, e) {
                    return n(t, e[0])
                })
            }

            function wn(t) {
                return null == t ? [] : bs(t, yn(t))
            }

            function Sn(t) {
                return Po(gn(t).toLowerCase())
            }

            function kn(t) {
                return (t = gn(t)) && t.replace(Ua, ul).replace(Qa, "")
            }

            function Tn(t, e, n) {
                return t = gn(t), (e = n ? Ps : e) === Ps ? Ka.test(t) ? t.match(Ya) || [] : t.match(ja) || [] : t.match(e) || []
            }

            function xn(t) {
                return function() {
                    return t
                }
            }

            function Cn(t) {
                return t
            }

            function En(t) {
                return q("function" == typeof t ? t : C(t, 1))
            }

            function In(i, e, t) {
                var n = yn(e),
                    r = $(e, n);
                null != t || nn(e) && (r.length || !n.length) || (t = e, e = i, i = this, r = $(e, yn(e)));
                var o = !(nn(t) && "chain" in t && !t.chain),
                    s = Je(i);
                return Jo(r, function(t) {
                    var n = e[t];
                    i[t] = n, s && (i.prototype[t] = function() {
                        var t = this.__chain__;
                        if (o || t) {
                            var e = i(this.__wrapped__);
                            return (e.__actions__ = Ot(this.__actions__)).push({
                                func: n,
                                args: arguments,
                                thisArg: i
                            }), e.__chain__ = t, e
                        }
                        return n.apply(i, os([this.value()], arguments))
                    })
                }), i
            }

            function An() {}

            function On(t) {
                return me(t) ? gs(Ee(t)) : (e = t, function(t) {
                    return P(t, e)
                });
                var e
            }

            function $n() {
                return []
            }

            function Pn() {
                return !1
            }
            var Nn, jn = (e = null == e ? nl : dl.defaults(nl.Object(), e, dl.pick(nl, Xa))).Array,
                Dn = e.Date,
                Ln = e.Error,
                Hn = e.Function,
                Mn = e.Math,
                Fn = e.Object,
                zn = e.RegExp,
                Rn = e.String,
                Bn = e.TypeError,
                Un = jn.prototype,
                qn = Hn.prototype,
                Wn = Fn.prototype,
                Vn = e["__core-js_shared__"],
                Qn = qn.toString,
                Yn = Wn.hasOwnProperty,
                Kn = 0,
                Xn = (Nn = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Nn : "",
                Zn = Wn.toString,
                Gn = Qn.call(Fn),
                Jn = nl._,
                ti = zn("^" + Qn.call(Yn).replace(Ca, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                ei = il ? e.Buffer : Ps,
                ni = e.Symbol,
                ii = e.Uint8Array,
                ri = ei ? ei.allocUnsafe : Ps,
                oi = Es(Fn.getPrototypeOf, Fn),
                si = Fn.create,
                ai = Wn.propertyIsEnumerable,
                li = Un.splice,
                ci = ni ? ni.isConcatSpreadable : Ps,
                ui = ni ? ni.iterator : Ps,
                hi = ni ? ni.toStringTag : Ps,
                pi = function() {
                    try {
                        var t = ue(Fn, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }(),
                di = e.clearTimeout !== nl.clearTimeout && e.clearTimeout,
                fi = Dn && Dn.now !== nl.Date.now && Dn.now,
                gi = e.setTimeout !== nl.setTimeout && e.setTimeout,
                mi = Mn.ceil,
                vi = Mn.floor,
                yi = Fn.getOwnPropertySymbols,
                _i = ei ? ei.isBuffer : Ps,
                bi = e.isFinite,
                wi = Un.join,
                Si = Es(Fn.keys, Fn),
                ki = Mn.max,
                Ti = Mn.min,
                xi = Dn.now,
                Ci = e.parseInt,
                Ei = Mn.random,
                Ii = Un.reverse,
                Ai = ue(e, "DataView"),
                Oi = ue(e, "Map"),
                $i = ue(e, "Promise"),
                Pi = ue(e, "Set"),
                Ni = ue(e, "WeakMap"),
                ji = ue(Fn, "create"),
                Di = Ni && new Ni,
                Li = {},
                Hi = Ie(Ai),
                Mi = Ie(Oi),
                Fi = Ie($i),
                zi = Ie(Pi),
                Ri = Ie(Ni),
                Bi = ni ? ni.prototype : Ps,
                Ui = Bi ? Bi.valueOf : Ps,
                qi = Bi ? Bi.toString : Ps,
                Wi = function(t) {
                    if (!nn(t)) return {};
                    if (si) return si(t);
                    Vi.prototype = t;
                    var e = new Vi;
                    return Vi.prototype = Ps, e
                };

            function Vi() {}
            m.templateSettings = {
                escape: ba,
                evaluate: wa,
                interpolate: Sa,
                variable: "",
                imports: {
                    _: m
                }
            }, (m.prototype = o.prototype).constructor = m, (v.prototype = Wi(o.prototype)).constructor = v, (y.prototype = Wi(o.prototype)).constructor = y, n.prototype.clear = function() {
                this.__data__ = ji ? ji(null) : {}, this.size = 0
            }, n.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, n.prototype.get = function(t) {
                var e = this.__data__;
                if (ji) {
                    var n = e[t];
                    return n === js ? Ps : n
                }
                return Yn.call(e, t) ? e[t] : Ps
            }, n.prototype.has = function(t) {
                var e = this.__data__;
                return ji ? e[t] !== Ps : Yn.call(e, t)
            }, n.prototype.set = function(t, e) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1, n[t] = ji && e === Ps ? js : e, this
            }, r.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, r.prototype.delete = function(t) {
                var e = this.__data__,
                    n = l(e, t);
                return !(n < 0 || (n == e.length - 1 ? e.pop() : li.call(e, n, 1), --this.size, 0))
            }, r.prototype.get = function(t) {
                var e = this.__data__,
                    n = l(e, t);
                return n < 0 ? Ps : e[n][1]
            }, r.prototype.has = function(t) {
                return -1 < l(this.__data__, t)
            }, r.prototype.set = function(t, e) {
                var n = this.__data__,
                    i = l(n, t);
                return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
            }, a.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new n,
                    map: new(Oi || r),
                    string: new n
                }
            }, a.prototype.delete = function(t) {
                var e = le(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, a.prototype.get = function(t) {
                return le(this, t).get(t)
            }, a.prototype.has = function(t) {
                return le(this, t).has(t)
            }, a.prototype.set = function(t, e) {
                var n = le(this, t),
                    i = n.size;
                return n.set(t, e), this.size += n.size == i ? 0 : 1, this
            }, _.prototype.add = _.prototype.push = function(t) {
                return this.__data__.set(t, js), this
            }, _.prototype.has = function(t) {
                return this.__data__.has(t)
            }, k.prototype.clear = function() {
                this.__data__ = new r, this.size = 0
            }, k.prototype.delete = function(t) {
                var e = this.__data__,
                    n = e.delete(t);
                return this.size = e.size, n
            }, k.prototype.get = function(t) {
                return this.__data__.get(t)
            }, k.prototype.has = function(t) {
                return this.__data__.has(t)
            }, k.prototype.set = function(t, e) {
                var n = this.__data__;
                if (n instanceof r) {
                    var i = n.__data__;
                    if (!Oi || i.length < 199) return i.push([t, e]), this.size = ++n.size, this;
                    n = this.__data__ = new a(i)
                }
                return n.set(t, e), this.size = n.size, this
            };
            var Qi = jt(A),
                Yi = jt(O, !0),
                Ki = Dt(),
                Xi = Dt(!0),
                Zi = Di ? function(t, e) {
                    return Di.set(t, e), t
                } : Cn,
                Gi = pi ? function(t, e) {
                    return pi(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: xn(e),
                        writable: !0
                    })
                } : Cn,
                Ji = rt,
                tr = di || function(t) {
                    return nl.clearTimeout(t)
                },
                er = Pi && 1 / As(new Pi([, -0]))[1] == 1 / 0 ? function(t) {
                    return new Pi(t)
                } : An,
                nr = Di ? function(t) {
                    return Di.get(t)
                } : An,
                ir = yi ? function(e) {
                    return null == e ? [] : (e = Fn(e), es(yi(e), function(t) {
                        return ai.call(e, t)
                    }))
                } : $n,
                rr = yi ? function(t) {
                    for (var e = []; t;) os(e, ir(t)), t = oi(t);
                    return e
                } : $n,
                or = j;
            (Ai && or(new Ai(new ArrayBuffer(1))) != ia || Oi && or(new Oi) != Qs || $i && or($i.resolve()) != Xs || Pi && or(new Pi) != Gs || Ni && or(new Ni) != ea) && (or = function(t) {
                var e = j(t),
                    n = e == Ks ? t.constructor : Ps,
                    i = n ? Ie(n) : "";
                if (i) switch (i) {
                    case Hi:
                        return ia;
                    case Mi:
                        return Qs;
                    case Fi:
                        return Xs;
                    case zi:
                        return Gs;
                    case Ri:
                        return ea
                }
                return e
            });
            var sr, ar, lr = Vn ? Je : Pn,
                cr = xe(Zi),
                ur = gi || function(t, e) {
                    return nl.setTimeout(t, e)
                },
                hr = xe(Gi),
                pr = (ar = (sr = Qe(function(t) {
                    var r = [];
                    return 46 === t.charCodeAt(0) && r.push(""), t.replace(xa, function(t, e, n, i) {
                        r.push(n ? i.replace(Da, "$1") : e || t)
                    }), r
                }, function(t) {
                    return 500 === ar.size && ar.clear(), t
                })).cache, sr),
                dr = rt(function(t, e) {
                    return Ze(t) ? b(t, I(e, 1, Ze, !0)) : []
                }),
                fr = rt(function(t, e) {
                    var n = je(e);
                    return Ze(n) && (n = Ps), Ze(t) ? b(t, I(e, 1, Ze, !0), ae(n, 2)) : []
                }),
                gr = rt(function(t, e) {
                    var n = je(e);
                    return Ze(n) && (n = Ps), Ze(t) ? b(t, I(e, 1, Ze, !0), Ps, n) : []
                }),
                mr = rt(function(t) {
                    var e = rs(t, bt);
                    return e.length && e[0] === t[0] ? M(e) : []
                }),
                vr = rt(function(t) {
                    var e = je(t),
                        n = rs(t, bt);
                    return e === je(n) ? e = Ps : n.pop(), n.length && n[0] === t[0] ? M(n, ae(e, 2)) : []
                }),
                yr = rt(function(t) {
                    var e = je(t),
                        n = rs(t, bt);
                    return (e = "function" == typeof e ? e : Ps) && n.pop(), n.length && n[0] === t[0] ? M(n, Ps, e) : []
                }),
                _r = rt(De),
                br = ne(function(t, e) {
                    var n = null == t ? 0 : t.length,
                        i = h(t, e);
                    return et(t, rs(e, function(t) {
                        return fe(t, n) ? +t : t
                    }).sort(Et)), i
                }),
                wr = rt(function(t) {
                    return dt(I(t, 1, Ze, !0))
                }),
                Sr = rt(function(t) {
                    var e = je(t);
                    return Ze(e) && (e = Ps), dt(I(t, 1, Ze, !0), ae(e, 2))
                }),
                kr = rt(function(t) {
                    var e = "function" == typeof(e = je(t)) ? e : Ps;
                    return dt(I(t, 1, Ze, !0), Ps, e)
                }),
                Tr = rt(function(t, e) {
                    return Ze(t) ? b(t, e) : []
                }),
                xr = rt(function(t) {
                    return yt(es(t, Ze))
                }),
                Cr = rt(function(t) {
                    var e = je(t);
                    return Ze(e) && (e = Ps), yt(es(t, Ze), ae(e, 2))
                }),
                Er = rt(function(t) {
                    var e = "function" == typeof(e = je(t)) ? e : Ps;
                    return yt(es(t, Ze), Ps, e)
                }),
                Ir = rt(He),
                Ar = rt(function(t) {
                    var e = t.length,
                        n = "function" == typeof(n = 1 < e ? t[e - 1] : Ps) ? (t.pop(), n) : Ps;
                    return Me(t, n)
                }),
                Or = ne(function(e) {
                    function t(t) {
                        return h(t, e)
                    }
                    var n = e.length,
                        i = n ? e[0] : 0,
                        r = this.__wrapped__;
                    return !(1 < n || this.__actions__.length) && r instanceof y && fe(i) ? ((r = r.slice(i, +i + (n ? 1 : 0))).__actions__.push({
                        func: ze,
                        args: [t],
                        thisArg: Ps
                    }), new v(r, this.__chain__).thru(function(t) {
                        return n && !t.length && t.push(Ps), t
                    })) : this.thru(t)
                }),
                $r = Pt(function(t, e, n) {
                    Yn.call(t, n) ? ++t[n] : u(t, n, 1)
                }),
                Pr = Ft(Oe),
                Nr = Ft($e),
                jr = Pt(function(t, e, n) {
                    Yn.call(t, n) ? t[n].push(e) : u(t, n, [e])
                }),
                Dr = rt(function(t, e, n) {
                    var i = -1,
                        r = "function" == typeof e,
                        o = Xe(t) ? jn(t.length) : [];
                    return Qi(t, function(t) {
                        o[++i] = r ? Zo(e, t, n) : F(t, e, n)
                    }), o
                }),
                Lr = Pt(function(t, e, n) {
                    u(t, n, e)
                }),
                Hr = Pt(function(t, e, n) {
                    t[n ? 0 : 1].push(e)
                }, function() {
                    return [
                        [],
                        []
                    ]
                }),
                Mr = rt(function(t, e) {
                    if (null == t) return [];
                    var n = e.length;
                    return 1 < n && ge(t, e[0], e[1]) ? e = [] : 2 < n && ge(e[0], e[1], e[2]) && (e = [e[0]]), G(t, I(e, 1), [])
                }),
                Fr = fi || function() {
                    return nl.Date.now()
                },
                zr = rt(function(t, e, n) {
                    var i, r = 1;
                    return n.length && (i = Is(n, se(zr)), r |= 32), Zt(t, r, e, n, i)
                }),
                Rr = rt(function(t, e, n) {
                    var i, r = 3;
                    return n.length && (i = Is(n, se(Rr)), r |= 32), Zt(e, r, t, n, i)
                }),
                Br = rt(function(t, e) {
                    return f(t, 1, e)
                }),
                Ur = rt(function(t, e, n) {
                    return f(t, dn(e) || 0, n)
                });
            Qe.Cache = a;
            var qr, Wr = Ji(function(i, r) {
                    var o = (r = 1 == r.length && Gr(r[0]) ? rs(r[0], _s(ae())) : rs(I(r, 1), _s(ae()))).length;
                    return rt(function(t) {
                        for (var e = -1, n = Ti(t.length, o); ++e < n;) t[e] = r[e].call(this, t[e]);
                        return Zo(i, this, t)
                    })
                }),
                Vr = rt(function(t, e) {
                    return Zt(t, 32, Ps, e, Is(e, se(Vr)))
                }),
                Qr = rt(function(t, e) {
                    return Zt(t, 64, Ps, e, Is(e, se(Qr)))
                }),
                Yr = ne(function(t, e) {
                    return Zt(t, 256, Ps, Ps, Ps, e)
                }),
                Kr = Qt(D),
                Xr = Qt(function(t, e) {
                    return e <= t
                }),
                Zr = z(function() {
                    return arguments
                }()) ? z : function(t) {
                    return rn(t) && Yn.call(t, "callee") && !ai.call(t, "callee")
                },
                Gr = jn.isArray,
                Jr = rl ? _s(rl) : function(t) {
                    return rn(t) && j(t) == na
                },
                to = _i || Pn,
                eo = ol ? _s(ol) : function(t) {
                    return rn(t) && j(t) == Us
                },
                no = sl ? _s(sl) : function(t) {
                    return rn(t) && or(t) == Qs
                },
                io = al ? _s(al) : function(t) {
                    return rn(t) && j(t) == Zs
                },
                ro = ll ? _s(ll) : function(t) {
                    return rn(t) && or(t) == Gs
                },
                oo = cl ? _s(cl) : function(t) {
                    return rn(t) && en(t.length) && !!Ga[j(t)]
                },
                so = Qt(V),
                ao = Qt(function(t, e) {
                    return t <= e
                }),
                lo = Nt(function(t, e) {
                    if (ye(e) || Xe(e)) return $t(e, yn(e), t), Ps;
                    for (var n in e) Yn.call(e, n) && T(t, n, e[n])
                }),
                co = Nt(function(t, e) {
                    $t(e, _n(e), t)
                }),
                uo = Nt(function(t, e, n, i) {
                    $t(e, _n(e), t, i)
                }),
                ho = Nt(function(t, e, n, i) {
                    $t(e, yn(e), t, i)
                }),
                po = ne(h),
                fo = rt(function(t, e) {
                    t = Fn(t);
                    var n = -1,
                        i = e.length,
                        r = 2 < i ? e[2] : Ps;
                    for (r && ge(e[0], e[1], r) && (i = 1); ++n < i;)
                        for (var o = e[n], s = _n(o), a = -1, l = s.length; ++a < l;) {
                            var c = s[a],
                                u = t[c];
                            (u === Ps || Ke(u, Wn[c]) && !Yn.call(t, c)) && (t[c] = o[c])
                        }
                    return t
                }),
                go = rt(function(t) {
                    return t.push(Ps, Jt), Zo(bo, Ps, t)
                }),
                mo = Bt(function(t, e, n) {
                    null != e && "function" != typeof e.toString && (e = Zn.call(e)), t[e] = n
                }, xn(Cn)),
                vo = Bt(function(t, e, n) {
                    null != e && "function" != typeof e.toString && (e = Zn.call(e)), Yn.call(t, e) ? t[e].push(n) : t[e] = [n]
                }, ae),
                yo = rt(F),
                _o = Nt(function(t, e, n) {
                    X(t, e, n)
                }),
                bo = Nt(function(t, e, n, i) {
                    X(t, e, n, i)
                }),
                wo = ne(function(e, t) {
                    var n = {};
                    if (null == e) return n;
                    var i = !1;
                    t = rs(t, function(t) {
                        return t = St(t, e), i = i || 1 < t.length, t
                    }), $t(e, re(e), n), i && (n = C(n, 7, te));
                    for (var r = t.length; r--;) ft(n, t[r]);
                    return n
                }),
                So = ne(function(t, e) {
                    return null == t ? {} : J(n = t, e, function(t, e) {
                        return vn(n, e)
                    });
                    var n
                }),
                ko = Xt(yn),
                To = Xt(_n),
                xo = Ht(function(t, e, n) {
                    return e = e.toLowerCase(), t + (n ? Sn(e) : e)
                }),
                Co = Ht(function(t, e, n) {
                    return t + (n ? "-" : "") + e.toLowerCase()
                }),
                Eo = Ht(function(t, e, n) {
                    return t + (n ? " " : "") + e.toLowerCase()
                }),
                Io = Lt("toLowerCase"),
                Ao = Ht(function(t, e, n) {
                    return t + (n ? "_" : "") + e.toLowerCase()
                }),
                Oo = Ht(function(t, e, n) {
                    return t + (n ? " " : "") + Po(e)
                }),
                $o = Ht(function(t, e, n) {
                    return t + (n ? " " : "") + e.toUpperCase()
                }),
                Po = Lt("toUpperCase"),
                No = rt(function(t, e) {
                    try {
                        return Zo(t, Ps, e)
                    } catch (t) {
                        return Ge(t) ? t : new Ln(t)
                    }
                }),
                jo = ne(function(e, t) {
                    return Jo(t, function(t) {
                        t = Ee(t), u(e, t, zr(e[t], e))
                    }), e
                }),
                Do = zt(),
                Lo = zt(!0),
                Ho = rt(function(e, n) {
                    return function(t) {
                        return F(t, e, n)
                    }
                }),
                Mo = rt(function(e, n) {
                    return function(t) {
                        return F(e, t, n)
                    }
                }),
                Fo = qt(rs),
                zo = qt(ts),
                Ro = qt(ls),
                Bo = Vt(),
                Uo = Vt(!0),
                qo = Ut(function(t, e) {
                    return t + e
                }, 0),
                Wo = Kt("ceil"),
                Vo = Ut(function(t, e) {
                    return t / e
                }, 1),
                Qo = Kt("floor"),
                Yo = Ut(function(t, e) {
                    return t * e
                }, 1),
                Ko = Kt("round"),
                Xo = Ut(function(t, e) {
                    return t - e
                }, 0);
            return m.after = function(t, e) {
                if ("function" != typeof e) throw new Bn(Ns);
                return t = hn(t),
                    function() {
                        if (--t < 1) return e.apply(this, arguments)
                    }
            }, m.ary = qe, m.assign = lo, m.assignIn = co, m.assignInWith = uo, m.assignWith = ho, m.at = po, m.before = We, m.bind = zr, m.bindAll = jo, m.bindKey = Rr, m.castArray = function() {
                if (!arguments.length) return [];
                var t = arguments[0];
                return Gr(t) ? t : [t]
            }, m.chain = Fe, m.chunk = function(t, e, n) {
                e = (n ? ge(t, e, n) : e === Ps) ? 1 : ki(hn(e), 0);
                var i = null == t ? 0 : t.length;
                if (!i || e < 1) return [];
                for (var r = 0, o = 0, s = jn(mi(i / e)); r < i;) s[o++] = st(t, r, r += e);
                return s
            }, m.compact = function(t) {
                for (var e = -1, n = null == t ? 0 : t.length, i = 0, r = []; ++e < n;) {
                    var o = t[e];
                    o && (r[i++] = o)
                }
                return r
            }, m.concat = function() {
                var t = arguments.length;
                if (!t) return [];
                for (var e = jn(t - 1), n = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                return os(Gr(n) ? Ot(n) : [n], I(e, 1))
            }, m.cond = function(i) {
                var r = null == i ? 0 : i.length,
                    e = ae();
                return i = r ? rs(i, function(t) {
                    if ("function" != typeof t[1]) throw new Bn(Ns);
                    return [e(t[0]), t[1]]
                }) : [], rt(function(t) {
                    for (var e = -1; ++e < r;) {
                        var n = i[e];
                        if (Zo(n[0], this, t)) return Zo(n[1], this, t)
                    }
                })
            }, m.conforms = function(t) {
                return e = C(t, 1), n = yn(e),
                    function(t) {
                        return d(t, e, n)
                    };
                var e, n
            }, m.constant = xn, m.countBy = $r, m.create = function(t, e) {
                var n = Wi(t);
                return null == e ? n : x(n, e)
            }, m.curry = function t(e, n, i) {
                var r = Zt(e, 8, Ps, Ps, Ps, Ps, Ps, n = i ? Ps : n);
                return r.placeholder = t.placeholder, r
            }, m.curryRight = function t(e, n, i) {
                var r = Zt(e, 16, Ps, Ps, Ps, Ps, Ps, n = i ? Ps : n);
                return r.placeholder = t.placeholder, r
            }, m.debounce = Ve, m.defaults = fo, m.defaultsDeep = go, m.defer = Br, m.delay = Ur, m.difference = dr, m.differenceBy = fr, m.differenceWith = gr, m.drop = function(t, e, n) {
                var i = null == t ? 0 : t.length;
                return i ? st(t, (e = n || e === Ps ? 1 : hn(e)) < 0 ? 0 : e, i) : []
            }, m.dropRight = function(t, e, n) {
                var i = null == t ? 0 : t.length;
                return i ? st(t, 0, (e = i - (n || e === Ps ? 1 : hn(e))) < 0 ? 0 : e) : []
            }, m.dropRightWhile = function(t, e) {
                return t && t.length ? mt(t, ae(e, 3), !0, !0) : []
            }, m.dropWhile = function(t, e) {
                return t && t.length ? mt(t, ae(e, 3), !0) : []
            }, m.fill = function(t, e, n, i) {
                var r = null == t ? 0 : t.length;
                return r ? (n && "number" != typeof n && ge(t, e, n) && (n = 0, i = r), function(t, e, n, i) {
                    var r = t.length;
                    for ((n = hn(n)) < 0 && (n = r < -n ? 0 : r + n), (i = i === Ps || r < i ? r : hn(i)) < 0 && (i += r), i = i < n ? 0 : pn(i); n < i;) t[n++] = e;
                    return t
                }(t, e, n, i)) : []
            }, m.filter = function(t, e) {
                return (Gr(t) ? es : E)(t, ae(e, 3))
            }, m.flatMap = function(t, e) {
                return I(Ue(t, e), 1)
            }, m.flatMapDeep = function(t, e) {
                return I(Ue(t, e), 1 / 0)
            }, m.flatMapDepth = function(t, e, n) {
                return n = n === Ps ? 1 : hn(n), I(Ue(t, e), n)
            }, m.flatten = Pe, m.flattenDeep = function(t) {
                return null != t && t.length ? I(t, 1 / 0) : []
            }, m.flattenDepth = function(t, e) {
                return null != t && t.length ? I(t, e = e === Ps ? 1 : hn(e)) : []
            }, m.flip = function(t) {
                return Zt(t, 512)
            }, m.flow = Do, m.flowRight = Lo, m.fromPairs = function(t) {
                for (var e = -1, n = null == t ? 0 : t.length, i = {}; ++e < n;) {
                    var r = t[e];
                    i[r[0]] = r[1]
                }
                return i
            }, m.functions = function(t) {
                return null == t ? [] : $(t, yn(t))
            }, m.functionsIn = function(t) {
                return null == t ? [] : $(t, _n(t))
            }, m.groupBy = jr, m.initial = function(t) {
                return null != t && t.length ? st(t, 0, -1) : []
            }, m.intersection = mr, m.intersectionBy = vr, m.intersectionWith = yr, m.invert = mo, m.invertBy = vo, m.invokeMap = Dr, m.iteratee = En, m.keyBy = Lr, m.keys = yn, m.keysIn = _n, m.map = Ue, m.mapKeys = function(t, i) {
                var r = {};
                return i = ae(i, 3), A(t, function(t, e, n) {
                    u(r, i(t, e, n), t)
                }), r
            }, m.mapValues = function(t, i) {
                var r = {};
                return i = ae(i, 3), A(t, function(t, e, n) {
                    u(r, e, i(t, e, n))
                }), r
            }, m.matches = function(t) {
                return Y(C(t, 1))
            }, m.matchesProperty = function(t, e) {
                return K(t, C(e, 1))
            }, m.memoize = Qe, m.merge = _o, m.mergeWith = bo, m.method = Ho, m.methodOf = Mo, m.mixin = In, m.negate = Ye, m.nthArg = function(e) {
                return e = hn(e), rt(function(t) {
                    return Z(t, e)
                })
            }, m.omit = wo, m.omitBy = function(t, e) {
                return bn(t, Ye(ae(e)))
            }, m.once = function(t) {
                return We(2, t)
            }, m.orderBy = function(t, e, n, i) {
                return null == t ? [] : (Gr(e) || (e = null == e ? [] : [e]), Gr(n = i ? Ps : n) || (n = null == n ? [] : [n]), G(t, e, n))
            }, m.over = Fo, m.overArgs = Wr, m.overEvery = zo, m.overSome = Ro, m.partial = Vr, m.partialRight = Qr, m.partition = Hr, m.pick = So, m.pickBy = bn, m.property = On, m.propertyOf = function(e) {
                return function(t) {
                    return null == e ? Ps : P(e, t)
                }
            }, m.pull = _r, m.pullAll = De, m.pullAllBy = function(t, e, n) {
                return t && t.length && e && e.length ? tt(t, e, ae(n, 2)) : t
            }, m.pullAllWith = function(t, e, n) {
                return t && t.length && e && e.length ? tt(t, e, Ps, n) : t
            }, m.pullAt = br, m.range = Bo, m.rangeRight = Uo, m.rearg = Yr, m.reject = function(t, e) {
                return (Gr(t) ? es : E)(t, Ye(ae(e, 3)))
            }, m.remove = function(t, e) {
                var n = [];
                if (!t || !t.length) return n;
                var i = -1,
                    r = [],
                    o = t.length;
                for (e = ae(e, 3); ++i < o;) {
                    var s = t[i];
                    e(s, i, t) && (n.push(s), r.push(i))
                }
                return et(t, r), n
            }, m.rest = function(t, e) {
                if ("function" != typeof t) throw new Bn(Ns);
                return rt(t, e = e === Ps ? e : hn(e))
            }, m.reverse = Le, m.sampleSize = function(t, e, n) {
                return e = (n ? ge(t, e, n) : e === Ps) ? 1 : hn(e), (Gr(t) ? function(t, e) {
                    return Ce(Ot(t), p(e, 0, t.length))
                } : function(t, e) {
                    var n = wn(t);
                    return Ce(n, p(e, 0, n.length))
                })(t, e)
            }, m.set = function(t, e, n) {
                return null == t ? t : ot(t, e, n)
            }, m.setWith = function(t, e, n, i) {
                return i = "function" == typeof i ? i : Ps, null == t ? t : ot(t, e, n, i)
            }, m.shuffle = function(t) {
                return (Gr(t) ? function(t) {
                    return Ce(Ot(t))
                } : function(t) {
                    return Ce(wn(t))
                })(t)
            }, m.slice = function(t, e, n) {
                var i = null == t ? 0 : t.length;
                return i ? (n = n && "number" != typeof n && ge(t, e, n) ? (e = 0, i) : (e = null == e ? 0 : hn(e), n === Ps ? i : hn(n)), st(t, e, n)) : []
            }, m.sortBy = Mr, m.sortedUniq = function(t) {
                return t && t.length ? ut(t) : []
            }, m.sortedUniqBy = function(t, e) {
                return t && t.length ? ut(t, ae(e, 2)) : []
            }, m.split = function(t, e, n) {
                return n && "number" != typeof n && ge(t, e, n) && (e = n = Ps), (n = n === Ps ? Ms : n >>> 0) ? (t = gn(t)) && ("string" == typeof e || null != e && !io(e)) && !(e = pt(e)) && xs(t) ? kt($s(t), 0, n) : t.split(e, n) : []
            }, m.spread = function(i, r) {
                if ("function" != typeof i) throw new Bn(Ns);
                return r = null == r ? 0 : ki(hn(r), 0), rt(function(t) {
                    var e = t[r],
                        n = kt(t, 0, r);
                    return e && os(n, e), Zo(i, this, n)
                })
            }, m.tail = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? st(t, 1, e) : []
            }, m.take = function(t, e, n) {
                return t && t.length ? st(t, 0, (e = n || e === Ps ? 1 : hn(e)) < 0 ? 0 : e) : []
            }, m.takeRight = function(t, e, n) {
                var i = null == t ? 0 : t.length;
                return i ? st(t, (e = i - (n || e === Ps ? 1 : hn(e))) < 0 ? 0 : e, i) : []
            }, m.takeRightWhile = function(t, e) {
                return t && t.length ? mt(t, ae(e, 3), !1, !0) : []
            }, m.takeWhile = function(t, e) {
                return t && t.length ? mt(t, ae(e, 3)) : []
            }, m.tap = function(t, e) {
                return e(t), t
            }, m.throttle = function(t, e, n) {
                var i = !0,
                    r = !0;
                if ("function" != typeof t) throw new Bn(Ns);
                return nn(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), Ve(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: r
                })
            }, m.thru = ze, m.toArray = cn, m.toPairs = ko, m.toPairsIn = To, m.toPath = function(t) {
                return Gr(t) ? rs(t, Ee) : ln(t) ? [t] : Ot(pr(gn(t)))
            }, m.toPlainObject = fn, m.transform = function(t, i, r) {
                var e, n = Gr(t),
                    o = n || to(t) || oo(t);
                return i = ae(i, 4), null == r && (e = t && t.constructor, r = o ? n ? new e : [] : nn(t) && Je(e) ? Wi(oi(t)) : {}), (o ? Jo : A)(t, function(t, e, n) {
                    return i(r, t, e, n)
                }), r
            }, m.unary = function(t) {
                return qe(t, 1)
            }, m.union = wr, m.unionBy = Sr, m.unionWith = kr, m.uniq = function(t) {
                return t && t.length ? dt(t) : []
            }, m.uniqBy = function(t, e) {
                return t && t.length ? dt(t, ae(e, 2)) : []
            }, m.uniqWith = function(t, e) {
                return e = "function" == typeof e ? e : Ps, t && t.length ? dt(t, Ps, e) : []
            }, m.unset = function(t, e) {
                return null == t || ft(t, e)
            }, m.unzip = He, m.unzipWith = Me, m.update = function(t, e, n) {
                return null == t ? t : gt(t, e, wt(n))
            }, m.updateWith = function(t, e, n, i) {
                return i = "function" == typeof i ? i : Ps, null == t ? t : gt(t, e, wt(n), i)
            }, m.values = wn, m.valuesIn = function(t) {
                return null == t ? [] : bs(t, _n(t))
            }, m.without = Tr, m.words = Tn, m.wrap = function(t, e) {
                return Vr(wt(e), t)
            }, m.xor = xr, m.xorBy = Cr, m.xorWith = Er, m.zip = Ir, m.zipObject = function(t, e) {
                return _t(t || [], e || [], T)
            }, m.zipObjectDeep = function(t, e) {
                return _t(t || [], e || [], ot)
            }, m.zipWith = Ar, m.entries = ko, m.entriesIn = To, m.extend = co, m.extendWith = uo, In(m, m), m.add = qo, m.attempt = No, m.camelCase = xo, m.capitalize = Sn, m.ceil = Wo, m.clamp = function(t, e, n) {
                return n === Ps && (n = e, e = Ps), n !== Ps && (n = (n = dn(n)) == n ? n : 0), e !== Ps && (e = (e = dn(e)) == e ? e : 0), p(dn(t), e, n)
            }, m.clone = function(t) {
                return C(t, 4)
            }, m.cloneDeep = function(t) {
                return C(t, 5)
            }, m.cloneDeepWith = function(t, e) {
                return C(t, 5, e = "function" == typeof e ? e : Ps)
            }, m.cloneWith = function(t, e) {
                return C(t, 4, e = "function" == typeof e ? e : Ps)
            }, m.conformsTo = function(t, e) {
                return null == e || d(t, e, yn(e))
            }, m.deburr = kn, m.defaultTo = function(t, e) {
                return null == t || t != t ? e : t
            }, m.divide = Vo, m.endsWith = function(t, e, n) {
                t = gn(t), e = pt(e);
                var i = t.length,
                    r = n = n === Ps ? i : p(hn(n), 0, i);
                return 0 <= (n -= e.length) && t.slice(n, r) == e
            }, m.eq = Ke, m.escape = function(t) {
                return (t = gn(t)) && _a.test(t) ? t.replace(va, hl) : t
            }, m.escapeRegExp = function(t) {
                return (t = gn(t)) && Ea.test(t) ? t.replace(Ca, "\\$&") : t
            }, m.every = function(t, e, n) {
                var i = Gr(t) ? ts : w;
                return n && ge(t, e, n) && (e = Ps), i(t, ae(e, 3))
            }, m.find = Pr, m.findIndex = Oe, m.findKey = function(t, e) {
                return cs(t, ae(e, 3), A)
            }, m.findLast = Nr, m.findLastIndex = $e, m.findLastKey = function(t, e) {
                return cs(t, ae(e, 3), O)
            }, m.floor = Qo, m.forEach = Re, m.forEachRight = Be, m.forIn = function(t, e) {
                return null == t ? t : Ki(t, ae(e, 3), _n)
            }, m.forInRight = function(t, e) {
                return null == t ? t : Xi(t, ae(e, 3), _n)
            }, m.forOwn = function(t, e) {
                return t && A(t, ae(e, 3))
            }, m.forOwnRight = function(t, e) {
                return t && O(t, ae(e, 3))
            }, m.get = mn, m.gt = Kr, m.gte = Xr, m.has = function(t, e) {
                return null != t && he(t, e, L)
            }, m.hasIn = vn, m.head = Ne, m.identity = Cn, m.includes = function(t, e, n, i) {
                t = Xe(t) ? t : wn(t), n = n && !i ? hn(n) : 0;
                var r = t.length;
                return n < 0 && (n = ki(r + n, 0)), an(t) ? n <= r && -1 < t.indexOf(e, n) : !!r && -1 < hs(t, e, n)
            }, m.indexOf = function(t, e, n) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var r = null == n ? 0 : hn(n);
                return r < 0 && (r = ki(i + r, 0)), hs(t, e, r)
            }, m.inRange = function(t, e, n) {
                return e = un(e), n === Ps ? (n = e, e = 0) : n = un(n), (i = t = dn(t)) >= Ti(r = e, o = n) && i < ki(r, o);
                var i, r, o
            }, m.invoke = yo, m.isArguments = Zr, m.isArray = Gr, m.isArrayBuffer = Jr, m.isArrayLike = Xe, m.isArrayLikeObject = Ze, m.isBoolean = function(t) {
                return !0 === t || !1 === t || rn(t) && j(t) == Bs
            }, m.isBuffer = to, m.isDate = eo, m.isElement = function(t) {
                return rn(t) && 1 === t.nodeType && !sn(t)
            }, m.isEmpty = function(t) {
                if (null == t) return !0;
                if (Xe(t) && (Gr(t) || "string" == typeof t || "function" == typeof t.splice || to(t) || oo(t) || Zr(t))) return !t.length;
                var e = or(t);
                if (e == Qs || e == Gs) return !t.size;
                if (ye(t)) return !W(t).length;
                for (var n in t)
                    if (Yn.call(t, n)) return !1;
                return !0
            }, m.isEqual = function(t, e) {
                return R(t, e)
            }, m.isEqualWith = function(t, e, n) {
                var i = (n = "function" == typeof n ? n : Ps) ? n(t, e) : Ps;
                return i === Ps ? R(t, e, Ps, n) : !!i
            }, m.isError = Ge, m.isFinite = function(t) {
                return "number" == typeof t && bi(t)
            }, m.isFunction = Je, m.isInteger = tn, m.isLength = en, m.isMap = no, m.isMatch = function(t, e) {
                return t === e || B(t, e, ce(e))
            }, m.isMatchWith = function(t, e, n) {
                return n = "function" == typeof n ? n : Ps, B(t, e, ce(e), n)
            }, m.isNaN = function(t) {
                return on(t) && t != +t
            }, m.isNative = function(t) {
                if (lr(t)) throw new Ln("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                return U(t)
            }, m.isNil = function(t) {
                return null == t
            }, m.isNull = function(t) {
                return null === t
            }, m.isNumber = on, m.isObject = nn, m.isObjectLike = rn, m.isPlainObject = sn, m.isRegExp = io, m.isSafeInteger = function(t) {
                return tn(t) && -Ls <= t && t <= Ls
            }, m.isSet = ro, m.isString = an, m.isSymbol = ln, m.isTypedArray = oo, m.isUndefined = function(t) {
                return t === Ps
            }, m.isWeakMap = function(t) {
                return rn(t) && or(t) == ea
            }, m.isWeakSet = function(t) {
                return rn(t) && "[object WeakSet]" == j(t)
            }, m.join = function(t, e) {
                return null == t ? "" : wi.call(t, e)
            }, m.kebabCase = Co, m.last = je, m.lastIndexOf = function(t, e, n) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var r = i;
                return n !== Ps && (r = (r = hn(n)) < 0 ? ki(i + r, 0) : Ti(r, i - 1)), e == e ? function(t, e) {
                    for (var n = r + 1; n--;)
                        if (t[n] === e) return n;
                    return n
                }(t, e) : us(t, ds, r, !0)
            }, m.lowerCase = Eo, m.lowerFirst = Io, m.lt = so, m.lte = ao, m.max = function(t) {
                return t && t.length ? S(t, Cn, D) : Ps
            }, m.maxBy = function(t, e) {
                return t && t.length ? S(t, ae(e, 2), D) : Ps
            }, m.mean = function(t) {
                return fs(t, Cn)
            }, m.meanBy = function(t, e) {
                return fs(t, ae(e, 2))
            }, m.min = function(t) {
                return t && t.length ? S(t, Cn, V) : Ps
            }, m.minBy = function(t, e) {
                return t && t.length ? S(t, ae(e, 2), V) : Ps
            }, m.stubArray = $n, m.stubFalse = Pn, m.stubObject = function() {
                return {}
            }, m.stubString = function() {
                return ""
            }, m.stubTrue = function() {
                return !0
            }, m.multiply = Yo, m.nth = function(t, e) {
                return t && t.length ? Z(t, hn(e)) : Ps
            }, m.noConflict = function() {
                return nl._ === this && (nl._ = Jn), this
            }, m.noop = An, m.now = Fr, m.pad = function(t, e, n) {
                t = gn(t);
                var i = (e = hn(e)) ? Os(t) : 0;
                if (!e || e <= i) return t;
                var r = (e - i) / 2;
                return Wt(vi(r), n) + t + Wt(mi(r), n)
            }, m.padEnd = function(t, e, n) {
                t = gn(t);
                var i = (e = hn(e)) ? Os(t) : 0;
                return e && i < e ? t + Wt(e - i, n) : t
            }, m.padStart = function(t, e, n) {
                t = gn(t);
                var i = (e = hn(e)) ? Os(t) : 0;
                return e && i < e ? Wt(e - i, n) + t : t
            }, m.parseInt = function(t, e, n) {
                return e = n || null == e ? 0 : e && +e, Ci(gn(t).replace(Aa, ""), e || 0)
            }, m.random = function(t, e, n) {
                var i;
                if (n && "boolean" != typeof n && ge(t, e, n) && (e = n = Ps), n === Ps && ("boolean" == typeof e ? (n = e, e = Ps) : "boolean" == typeof t && (n = t, t = Ps)), t === Ps && e === Ps ? (t = 0, e = 1) : (t = un(t), e === Ps ? (e = t, t = 0) : e = un(e)), e < t && (i = t, t = e, e = i), n || t % 1 || e % 1) {
                    var r = Ei();
                    return Ti(t + r * (e - t + tl("1e-" + ((r + "").length - 1))), e)
                }
                return nt(t, e)
            }, m.reduce = function(t, e, n) {
                var i = Gr(t) ? ss : ms,
                    r = arguments.length < 3;
                return i(t, ae(e, 4), n, r, Qi)
            }, m.reduceRight = function(t, e, n) {
                var i = Gr(t) ? as : ms,
                    r = arguments.length < 3;
                return i(t, ae(e, 4), n, r, Yi)
            }, m.repeat = function(t, e, n) {
                return e = (n ? ge(t, e, n) : e === Ps) ? 1 : hn(e), it(gn(t), e)
            }, m.replace = function() {
                var t = arguments,
                    e = gn(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2])
            }, m.result = function(t, e, n) {
                var i = -1,
                    r = (e = St(e, t)).length;
                for (r || (r = 1, t = Ps); ++i < r;) {
                    var o = null == t ? Ps : t[Ee(e[i])];
                    o === Ps && (i = r, o = n), t = Je(o) ? o.call(t) : o
                }
                return t
            }, m.round = Ko, m.runInContext = t, m.sample = function(t) {
                return (Gr(t) ? s : function(t) {
                    return s(wn(t))
                })(t)
            }, m.size = function(t) {
                if (null == t) return 0;
                if (Xe(t)) return an(t) ? Os(t) : t.length;
                var e = or(t);
                return e == Qs || e == Gs ? t.size : W(t).length
            }, m.snakeCase = Ao, m.some = function(t, e, n) {
                var i = Gr(t) ? ls : at;
                return n && ge(t, e, n) && (e = Ps), i(t, ae(e, 3))
            }, m.sortedIndex = function(t, e) {
                return lt(t, e)
            }, m.sortedIndexBy = function(t, e, n) {
                return ct(t, e, ae(n, 2))
            }, m.sortedIndexOf = function(t, e) {
                var n = null == t ? 0 : t.length;
                if (n) {
                    var i = lt(t, e);
                    if (i < n && Ke(t[i], e)) return i
                }
                return -1
            }, m.sortedLastIndex = function(t, e) {
                return lt(t, e, !0)
            }, m.sortedLastIndexBy = function(t, e, n) {
                return ct(t, e, ae(n, 2), !0)
            }, m.sortedLastIndexOf = function(t, e) {
                if (null != t && t.length) {
                    var n = lt(t, e, !0) - 1;
                    if (Ke(t[n], e)) return n
                }
                return -1
            }, m.startCase = Oo, m.startsWith = function(t, e, n) {
                return t = gn(t), n = null == n ? 0 : p(hn(n), 0, t.length), e = pt(e), t.slice(n, n + e.length) == e
            }, m.subtract = Xo, m.sum = function(t) {
                return t && t.length ? vs(t, Cn) : 0
            }, m.sumBy = function(t, e) {
                return t && t.length ? vs(t, ae(e, 2)) : 0
            }, m.template = function(s, t, e) {
                var n = m.templateSettings;
                e && ge(s, t, e) && (t = Ps), s = gn(s), t = uo({}, t, n, Gt);
                var a, l, i = uo({}, t.imports, n.imports, Gt),
                    r = yn(i),
                    o = bs(i, r),
                    c = 0,
                    u = t.interpolate || qa,
                    h = "__p += '",
                    p = zn((t.escape || qa).source + "|" + u.source + "|" + (u === Sa ? La : qa).source + "|" + (t.evaluate || qa).source + "|$", "g"),
                    d = "//# sourceURL=" + (Yn.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Za + "]") + "\n";
                s.replace(p, function(t, e, n, i, r, o) {
                    return n = n || i, h += s.slice(c, o).replace(Wa, Ts), e && (a = !0, h += "' +\n__e(" + e + ") +\n'"), r && (l = !0, h += "';\n" + r + ";\n__p += '"), n && (h += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), c = o + t.length, t
                }), h += "';\n";
                var f = Yn.call(t, "variable") && t.variable;
                f || (h = "with (obj) {\n" + h + "\n}\n"), h = (l ? h.replace(da, "") : h).replace(fa, "$1").replace(ga, "$1;"), h = "function(" + (f || "obj") + ") {\n" + (f ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (l ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                var g = No(function() {
                    return Hn(r, d + "return " + h).apply(Ps, o)
                });
                if (g.source = h, Ge(g)) throw g;
                return g
            }, m.times = function(t, e) {
                if ((t = hn(t)) < 1 || Ls < t) return [];
                var n = Ms,
                    i = Ti(t, Ms);
                e = ae(e), t -= Ms;
                for (var r = ys(i, e); ++n < t;) e(n);
                return r
            }, m.toFinite = un, m.toInteger = hn, m.toLength = pn, m.toLower = function(t) {
                return gn(t).toLowerCase()
            }, m.toNumber = dn, m.toSafeInteger = function(t) {
                return t ? p(hn(t), -Ls, Ls) : 0 === t ? t : 0
            }, m.toString = gn, m.toUpper = function(t) {
                return gn(t).toUpperCase()
            }, m.trim = function(t, e, n) {
                if ((t = gn(t)) && (n || e === Ps)) return t.replace(Ia, "");
                if (!t || !(e = pt(e))) return t;
                var i = $s(t),
                    r = $s(e);
                return kt(i, Ss(i, r), ks(i, r) + 1).join("")
            }, m.trimEnd = function(t, e, n) {
                if ((t = gn(t)) && (n || e === Ps)) return t.replace(Oa, "");
                if (!t || !(e = pt(e))) return t;
                var i = $s(t);
                return kt(i, 0, ks(i, $s(e)) + 1).join("")
            }, m.trimStart = function(t, e, n) {
                if ((t = gn(t)) && (n || e === Ps)) return t.replace(Aa, "");
                if (!t || !(e = pt(e))) return t;
                var i = $s(t);
                return kt(i, Ss(i, $s(e))).join("")
            }, m.truncate = function(t, e) {
                var n, i = 30,
                    r = "...";
                nn(e) && (n = "separator" in e ? e.separator : n, i = "length" in e ? hn(e.length) : i, r = "omission" in e ? pt(e.omission) : r);
                var o, s = (t = gn(t)).length;
                if (xs(t) && (s = (o = $s(t)).length), s <= i) return t;
                var a = i - Os(r);
                if (a < 1) return r;
                var l, c = o ? kt(o, 0, a).join("") : t.slice(0, a);
                if (n === Ps) return c + r;
                if (o && (a += c.length - a), io(n)) {
                    if (t.slice(a).search(n)) {
                        var u, h = c;
                        for (n.global || (n = zn(n.source, gn(Ha.exec(n)) + "g")), n.lastIndex = 0; u = n.exec(h);) var p = u.index;
                        c = c.slice(0, p === Ps ? a : p)
                    }
                } else t.indexOf(pt(n), a) == a || -1 < (l = c.lastIndexOf(n)) && (c = c.slice(0, l));
                return c + r
            }, m.unescape = function(t) {
                return (t = gn(t)) && ya.test(t) ? t.replace(ma, pl) : t
            }, m.uniqueId = function(t) {
                var e = ++Kn;
                return gn(t) + e
            }, m.upperCase = $o, m.upperFirst = Po, m.each = Re, m.eachRight = Be, m.first = Ne, In(m, (qr = {}, A(m, function(t, e) {
                Yn.call(m.prototype, e) || (qr[e] = t)
            }), qr), {
                chain: !1
            }), m.VERSION = "4.17.19", Jo(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                m[t].placeholder = m
            }), Jo(["drop", "take"], function(n, i) {
                y.prototype[n] = function(t) {
                    t = t === Ps ? 1 : ki(hn(t), 0);
                    var e = this.__filtered__ && !i ? new y(this) : this.clone();
                    return e.__filtered__ ? e.__takeCount__ = Ti(t, e.__takeCount__) : e.__views__.push({
                        size: Ti(t, Ms),
                        type: n + (e.__dir__ < 0 ? "Right" : "")
                    }), e
                }, y.prototype[n + "Right"] = function(t) {
                    return this.reverse()[n](t).reverse()
                }
            }), Jo(["filter", "map", "takeWhile"], function(t, e) {
                var n = e + 1,
                    i = 1 == n || 3 == n;
                y.prototype[t] = function(t) {
                    var e = this.clone();
                    return e.__iteratees__.push({
                        iteratee: ae(t, 3),
                        type: n
                    }), e.__filtered__ = e.__filtered__ || i, e
                }
            }), Jo(["head", "last"], function(t, e) {
                var n = "take" + (e ? "Right" : "");
                y.prototype[t] = function() {
                    return this[n](1).value()[0]
                }
            }), Jo(["initial", "tail"], function(t, e) {
                var n = "drop" + (e ? "" : "Right");
                y.prototype[t] = function() {
                    return this.__filtered__ ? new y(this) : this[n](1)
                }
            }), y.prototype.compact = function() {
                return this.filter(Cn)
            }, y.prototype.find = function(t) {
                return this.filter(t).head()
            }, y.prototype.findLast = function(t) {
                return this.reverse().find(t)
            }, y.prototype.invokeMap = rt(function(e, n) {
                return "function" == typeof e ? new y(this) : this.map(function(t) {
                    return F(t, e, n)
                })
            }), y.prototype.reject = function(t) {
                return this.filter(Ye(ae(t)))
            }, y.prototype.slice = function(t, e) {
                t = hn(t);
                var n = this;
                return n.__filtered__ && (0 < t || e < 0) ? new y(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== Ps && (n = (e = hn(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), n)
            }, y.prototype.takeRightWhile = function(t) {
                return this.reverse().takeWhile(t).reverse()
            }, y.prototype.toArray = function() {
                return this.take(Ms)
            }, A(y.prototype, function(h, t) {
                var p = /^(?:filter|find|map|reject)|While$/.test(t),
                    d = /^(?:head|last)$/.test(t),
                    f = m[d ? "take" + ("last" == t ? "Right" : "") : t],
                    g = d || /^find/.test(t);
                f && (m.prototype[t] = function() {
                    function t(t) {
                        var e = f.apply(m, os([t], n));
                        return d && s ? e[0] : e
                    }
                    var e = this.__wrapped__,
                        n = d ? [1] : arguments,
                        i = e instanceof y,
                        r = n[0],
                        o = i || Gr(e);
                    o && p && "function" == typeof r && 1 != r.length && (i = o = !1);
                    var s = this.__chain__,
                        a = !!this.__actions__.length,
                        l = g && !s,
                        c = i && !a;
                    if (g || !o) return l && c ? h.apply(this, n) : (u = this.thru(t), l ? d ? u.value()[0] : u.value() : u);
                    e = c ? e : new y(this);
                    var u = h.apply(e, n);
                    return u.__actions__.push({
                        func: ze,
                        args: [t],
                        thisArg: Ps
                    }), new v(u, s)
                })
            }), Jo(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                var n = Un[t],
                    i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                    r = /^(?:pop|shift)$/.test(t);
                m.prototype[t] = function() {
                    var e = arguments;
                    if (!r || this.__chain__) return this[i](function(t) {
                        return n.apply(Gr(t) ? t : [], e)
                    });
                    var t = this.value();
                    return n.apply(Gr(t) ? t : [], e)
                }
            }), A(y.prototype, function(t, e) {
                var n, i = m[e];
                i && (n = i.name + "", Yn.call(Li, n) || (Li[n] = []), Li[n].push({
                    name: e,
                    func: i
                }))
            }), Li[Rt(Ps, 2).name] = [{
                name: "wrapper",
                func: Ps
            }], y.prototype.clone = function() {
                var t = new y(this.__wrapped__);
                return t.__actions__ = Ot(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ot(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ot(this.__views__), t
            }, y.prototype.reverse = function() {
                var t;
                return this.__filtered__ ? ((t = new y(this)).__dir__ = -1, t.__filtered__ = !0) : (t = this.clone()).__dir__ *= -1, t
            }, y.prototype.value = function() {
                var t = this.__wrapped__.value(),
                    e = this.__dir__,
                    n = Gr(t),
                    i = e < 0,
                    r = n ? t.length : 0,
                    o = function(t, e, n) {
                        for (var i = -1, r = n.length; ++i < r;) {
                            var o = n[i],
                                s = o.size;
                            switch (o.type) {
                                case "drop":
                                    t += s;
                                    break;
                                case "dropRight":
                                    e -= s;
                                    break;
                                case "take":
                                    e = Ti(e, t + s);
                                    break;
                                case "takeRight":
                                    t = ki(t, e - s)
                            }
                        }
                        return {
                            start: t,
                            end: e
                        }
                    }(0, r, this.__views__),
                    s = o.start,
                    a = o.end,
                    l = a - s,
                    c = i ? a : s - 1,
                    u = this.__iteratees__,
                    h = u.length,
                    p = 0,
                    d = Ti(l, this.__takeCount__);
                if (!n || !i && r == l && d == l) return vt(t, this.__actions__);
                var f = [];
                t: for (; l-- && p < d;) {
                    for (var g = -1, m = t[c += e]; ++g < h;) {
                        var v = u[g],
                            y = v.iteratee,
                            _ = v.type,
                            b = y(m);
                        if (2 == _) m = b;
                        else if (!b) {
                            if (1 == _) continue t;
                            break t
                        }
                    }
                    f[p++] = m
                }
                return f
            }, m.prototype.at = Or, m.prototype.chain = function() {
                return Fe(this)
            }, m.prototype.commit = function() {
                return new v(this.value(), this.__chain__)
            }, m.prototype.next = function() {
                this.__values__ === Ps && (this.__values__ = cn(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return {
                    done: t,
                    value: t ? Ps : this.__values__[this.__index__++]
                }
            }, m.prototype.plant = function(t) {
                for (var e, n = this; n instanceof o;) {
                    var i = Ae(n);
                    i.__index__ = 0, i.__values__ = Ps, e ? r.__wrapped__ = i : e = i;
                    var r = i,
                        n = n.__wrapped__
                }
                return r.__wrapped__ = t, e
            }, m.prototype.reverse = function() {
                var t = this.__wrapped__;
                if (t instanceof y) {
                    var e = t;
                    return this.__actions__.length && (e = new y(this)), (e = e.reverse()).__actions__.push({
                        func: ze,
                        args: [Le],
                        thisArg: Ps
                    }), new v(e, this.__chain__)
                }
                return this.thru(Le)
            }, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = function() {
                return vt(this.__wrapped__, this.__actions__)
            }, m.prototype.first = m.prototype.head, ui && (m.prototype[ui] = function() {
                return this
            }), m
        }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (nl._ = dl, define(function() {
        return dl
    })) : L ? ((L.exports = dl)._ = dl, D._ = dl) : nl._ = dl
}.call(this),
    function(t) {
        "use strict";
        var e = t.History = t.History || {},
            i = t.jQuery;
        if (void 0 !== e.Adapter) throw new Error("History.js Adapter has already been loaded...");
        e.Adapter = {
            bind: function(t, e, n) {
                i(t).bind(e, n)
            },
            trigger: function(t, e, n) {
                i(t).trigger(e, n)
            },
            extractEventData: function(t, e, n) {
                return e && e.originalEvent && e.originalEvent[t] || n && n[t] || void 0
            },
            onDomLoad: function(t) {
                i(t)
            }
        }, void 0 !== e.init && e.init()
    }(window),
    function(s, n) {
        "use strict";
        var a = s.console || n,
            l = s.document,
            i = s.navigator,
            r = !1,
            o = s.setTimeout,
            c = s.clearTimeout,
            u = s.setInterval,
            h = s.clearInterval,
            p = s.JSON,
            d = s.alert,
            f = s.History = s.History || {},
            g = s.history;
        try {
            (r = s.sessionStorage).setItem("TEST", "1"), r.removeItem("TEST")
        } catch (t) {
            r = !1
        }
        if (p.stringify = p.stringify || p.encode, p.parse = p.parse || p.decode, void 0 !== f.init) throw new Error("History.js Core has already been loaded...");
        f.init = function(t) {
            return void 0 !== f.Adapter && (void 0 !== f.initCore && f.initCore(), void 0 !== f.initHtml4 && f.initHtml4(), !0)
        }, f.initCore = function(t) {
            if (void 0 !== f.initCore.initialized) return !1;
            var e;
            if (f.initCore.initialized = !0, f.options = f.options || {}, f.options.hashChangeInterval = f.options.hashChangeInterval || 100, f.options.safariPollInterval = f.options.safariPollInterval || 500, f.options.doubleCheckInterval = f.options.doubleCheckInterval || 500, f.options.disableSuid = f.options.disableSuid || !1, f.options.storeInterval = f.options.storeInterval || 1e3, f.options.busyDelay = f.options.busyDelay || 250, f.options.debug = f.options.debug || !1, f.options.initialTitle = f.options.initialTitle || l.title, f.options.html4Mode = f.options.html4Mode || !1, f.options.delayInit = f.options.delayInit || !1, f.intervalList = [], f.clearAllIntervals = function() {
                    var t, e = f.intervalList;
                    if (null != e) {
                        for (t = 0; t < e.length; t++) h(e[t]);
                        f.intervalList = null
                    }
                }, f.debug = function() {
                    f.options.debug && f.log.apply(f, arguments)
                }, f.log = function() {
                    var t, e, n, i, r, o = !(void 0 === a || void 0 === a.log || void 0 === a.log.apply),
                        s = l.getElementById("log");
                    for (o ? (t = (i = Array.prototype.slice.call(arguments)).shift(), void 0 !== a.debug ? a.debug.apply(a, [t, i]) : a.log.apply(a, [t, i])) : t = "\n" + arguments[0] + "\n", e = 1, n = arguments.length; e < n; ++e) {
                        if ("object" == typeof(r = arguments[e]) && void 0 !== p) try {
                            r = p.stringify(r)
                        } catch (t) {}
                        t += "\n" + r + "\n"
                    }
                    return s ? (s.value += t + "\n-----\n", s.scrollTop = s.scrollHeight - s.clientHeight) : o || d(t), !0
                }, f.getInternetExplorerMajorVersion = function() {
                    return f.getInternetExplorerMajorVersion.cached = void 0 !== f.getInternetExplorerMajorVersion.cached ? f.getInternetExplorerMajorVersion.cached : function() {
                        for (var t = 3, e = l.createElement("div"), n = e.getElementsByTagName("i");
                            (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && n[0];);
                        return 4 < t && t
                    }()
                }, f.isInternetExplorer = function() {
                    return f.isInternetExplorer.cached = void 0 !== f.isInternetExplorer.cached ? f.isInternetExplorer.cached : Boolean(f.getInternetExplorerMajorVersion())
                }, f.options.html4Mode ? f.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : f.emulated = {
                    pushState: !Boolean(s.history && s.history.pushState && s.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent))),
                    hashChange: Boolean(!("onhashchange" in s || "onhashchange" in l) || f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8)
                }, f.enabled = !f.emulated.pushState, f.bugs = {
                    setHash: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    safariPoll: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    ieDoubleCheck: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 7)
                }, f.isEmptyObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }, f.cloneObject = function(t) {
                    var e;
                    return t ? (e = p.stringify(t), p.parse(e)) : {}
                }, f.getRootUrl = function() {
                    var t = l.location.protocol + "//" + (l.location.hostname || l.location.host);
                    return l.location.port && (t += ":" + l.location.port), t + "/"
                }, f.getBaseHref = function() {
                    var t = l.getElementsByTagName("base"),
                        e = "";
                    return 1 === t.length && (e = t[0].href.replace(/[^\/]+$/, "")), (e = e.replace(/\/+$/, "")) && (e += "/"), e
                }, f.getBaseUrl = function() {
                    return f.getBaseHref() || f.getBasePageUrl() || f.getRootUrl()
                }, f.getPageUrl = function() {
                    return ((f.getState(!1, !1) || {}).url || f.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, n) {
                        return /\./.test(t) ? t : t + "/"
                    })
                }, f.getBasePageUrl = function() {
                    return f.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, n) {
                        return /[^\/]$/.test(t) ? "" : t
                    }).replace(/\/+$/, "") + "/"
                }, f.getFullUrl = function(t, e) {
                    var n = t,
                        i = t.substring(0, 1);
                    return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (n = "/" === i ? f.getRootUrl() + t.replace(/^\/+/, "") : "#" === i ? f.getPageUrl().replace(/#.*/, "") + t : "?" === i ? f.getPageUrl().replace(/[\?#].*/, "") + t : e ? f.getBaseUrl() + t.replace(/^(\.\/)+/, "") : f.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, f.getShortUrl = function(t) {
                    var e = t,
                        n = f.getBaseUrl(),
                        i = f.getRootUrl();
                    return f.emulated.pushState && (e = e.replace(n, "")), e = e.replace(i, "/"), f.isTraditionalAnchor(e) && (e = "./" + e), e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, f.getLocationHref = function(t) {
                    return (t = t || l).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : (!t.location.hash || decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) !== t.location.hash) && (-1 != t.URL.indexOf("#") || -1 == t.location.href.indexOf("#")) && t.URL || t.location.href
                }, f.store = {}, f.idToState = f.idToState || {}, f.stateToId = f.stateToId || {}, f.urlToId = f.urlToId || {}, f.storedStates = f.storedStates || [], f.savedStates = f.savedStates || [], f.normalizeStore = function() {
                    f.store.idToState = f.store.idToState || {}, f.store.urlToId = f.store.urlToId || {}, f.store.stateToId = f.store.stateToId || {}
                }, f.getState = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var n = f.getLastSavedState();
                    return !n && e && (n = f.createStateObject()), t && ((n = f.cloneObject(n)).url = n.cleanUrl || n.url), n
                }, f.getIdByState = function(t) {
                    var e, n = f.extractId(t.url);
                    if (!n)
                        if (e = f.getStateString(t), void 0 !== f.stateToId[e]) n = f.stateToId[e];
                        else if (void 0 !== f.store.stateToId[e]) n = f.store.stateToId[e];
                    else {
                        for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== f.idToState[n] || void 0 !== f.store.idToState[n];);
                        f.stateToId[e] = n, f.idToState[n] = t
                    }
                    return n
                }, f.normalizeState = function(t) {
                    var e, n;
                    return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = {
                        normalized: !0
                    }).title = t.title || "", e.url = f.getFullUrl(t.url ? t.url : f.getLocationHref()), e.hash = f.getShortUrl(e.url), e.data = f.cloneObject(t.data), e.id = f.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, n = !f.isEmptyObject(e.data), (e.title || n) && !0 !== f.options.disableSuid && (e.hash = f.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = f.getFullUrl(e.hash), (f.emulated.pushState || f.bugs.safariPoll) && f.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                }, f.createStateObject = function(t, e, n) {
                    var i = {
                        data: t,
                        title: e,
                        url: n
                    };
                    return f.normalizeState(i)
                }, f.getStateById = function(t) {
                    return t = String(t), f.idToState[t] || f.store.idToState[t] || n
                }, f.getStateString = function(t) {
                    var e = {
                        data: f.normalizeState(t).data,
                        title: t.title,
                        url: t.url
                    };
                    return p.stringify(e)
                }, f.getStateId = function(t) {
                    return f.normalizeState(t).id
                }, f.getHashByState = function(t) {
                    return f.normalizeState(t).hash
                }, f.extractId = function(t) {
                    var e, n = -1 != t.indexOf("#") ? t.split("#")[0] : t;
                    return (e = /(.*)\&_suid=([0-9]+)$/.exec(n)) && e[1], (e ? String(e[2] || "") : "") || !1
                }, f.isTraditionalAnchor = function(t) {
                    return !/[\/\?\.]/.test(t)
                }, f.extractState = function(t, e) {
                    var n, i, r = null;
                    return e = e || !1, (n = f.extractId(t)) && (r = f.getStateById(n)), r || (i = f.getFullUrl(t), (n = f.getIdByUrl(i) || !1) && (r = f.getStateById(n)), r || !e || f.isTraditionalAnchor(t) || (r = f.createStateObject(null, null, i))), r
                }, f.getIdByUrl = function(t) {
                    return f.urlToId[t] || f.store.urlToId[t] || n
                }, f.getLastSavedState = function() {
                    return f.savedStates[f.savedStates.length - 1] || n
                }, f.getLastStoredState = function() {
                    return f.storedStates[f.storedStates.length - 1] || n
                }, f.hasUrlDuplicate = function(t) {
                    var e;
                    return (e = f.extractState(t.url)) && e.id !== t.id
                }, f.storeState = function(t) {
                    return f.urlToId[t.url] = t.id, f.storedStates.push(f.cloneObject(t)), t
                }, f.isLastSavedState = function(t) {
                    var e = !1;
                    return f.savedStates.length && (e = t.id === f.getLastSavedState().id), e
                }, f.saveState = function(t) {
                    return !f.isLastSavedState(t) && (f.savedStates.push(f.cloneObject(t)), !0)
                }, f.getStateByIndex = function(t) {
                    return void 0 === t ? f.savedStates[f.savedStates.length - 1] : t < 0 ? f.savedStates[f.savedStates.length + t] : f.savedStates[t]
                }, f.getCurrentIndex = function() {
                    return f.savedStates.length < 1 ? 0 : f.savedStates.length - 1
                }, f.getHash = function(t) {
                    var e = f.getLocationHref(t);
                    return f.getHashByUrl(e)
                }, f.unescapeHash = function(t) {
                    var e = f.normalizeHash(t);
                    return decodeURIComponent(e)
                }, f.normalizeHash = function(t) {
                    return t.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, f.setHash = function(t, e) {
                    var n, i;
                    return !1 !== e && f.busy() ? (f.pushQueue({
                        scope: f,
                        callback: f.setHash,
                        args: arguments,
                        queue: e
                    }), !1) : (f.busy(!0), (n = f.extractState(t, !0)) && !f.emulated.pushState ? f.pushState(n.data, n.title, n.url, !1) : f.getHash() !== t && (f.bugs.setHash ? (i = f.getPageUrl(), f.pushState(null, null, i + "#" + t, !1)) : l.location.hash = t), f)
                }, f.escapeHash = function(t) {
                    var e = f.normalizeHash(t),
                        e = s.encodeURIComponent(e);
                    return f.bugs.hashEscape || (e = e.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), e
                }, f.getHashByUrl = function(t) {
                    var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return f.unescapeHash(e)
                }, f.setTitle = function(t) {
                    var e, n = t.title;
                    n || (e = f.getStateByIndex(0)) && e.url === t.url && (n = e.title || f.options.initialTitle);
                    try {
                        l.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (t) {}
                    return l.title = n, f
                }, f.queues = [], f.busy = function(t) {
                    var i;
                    return void 0 !== t ? f.busy.flag = t : void 0 === f.busy.flag && (f.busy.flag = !1), f.busy.flag || (c(f.busy.timeout), i = function() {
                        var t, e, n;
                        if (!f.busy.flag)
                            for (t = f.queues.length - 1; 0 <= t; --t) 0 !== (e = f.queues[t]).length && (n = e.shift(), f.fireQueueItem(n), f.busy.timeout = o(i, f.options.busyDelay))
                    }, f.busy.timeout = o(i, f.options.busyDelay)), f.busy.flag
                }, f.busy.flag = !1, f.fireQueueItem = function(t) {
                    return t.callback.apply(t.scope || f, t.args || [])
                }, f.pushQueue = function(t) {
                    return f.queues[t.queue || 0] = f.queues[t.queue || 0] || [], f.queues[t.queue || 0].push(t), f
                }, f.queue = function(t, e) {
                    return "function" == typeof t && (t = {
                        callback: t
                    }), void 0 !== e && (t.queue = e), f.busy() ? f.pushQueue(t) : f.fireQueueItem(t), f
                }, f.clearQueue = function() {
                    return f.busy.flag = !1, f.queues = [], f
                }, f.stateChanged = !1, f.doubleChecker = !1, f.doubleCheckComplete = function() {
                    return f.stateChanged = !0, f.doubleCheckClear(), f
                }, f.doubleCheckClear = function() {
                    return f.doubleChecker && (c(f.doubleChecker), f.doubleChecker = !1), f
                }, f.doubleCheck = function(t) {
                    return f.stateChanged = !1, f.doubleCheckClear(), f.bugs.ieDoubleCheck && (f.doubleChecker = o(function() {
                        return f.doubleCheckClear(), f.stateChanged || t(), !0
                    }, f.options.doubleCheckInterval)), f
                }, f.safariStatePoll = function() {
                    var t = f.extractState(f.getLocationHref());
                    if (!f.isLastSavedState(t)) return t || f.createStateObject(), f.Adapter.trigger(s, "popstate"), f
                }, f.back = function(t) {
                    return !1 !== t && f.busy() ? (f.pushQueue({
                        scope: f,
                        callback: f.back,
                        args: arguments,
                        queue: t
                    }), !1) : (f.busy(!0), f.doubleCheck(function() {
                        f.back(!1)
                    }), g.go(-1), !0)
                }, f.forward = function(t) {
                    return !1 !== t && f.busy() ? (f.pushQueue({
                        scope: f,
                        callback: f.forward,
                        args: arguments,
                        queue: t
                    }), !1) : (f.busy(!0), f.doubleCheck(function() {
                        f.forward(!1)
                    }), g.go(1), !0)
                }, f.go = function(t, e) {
                    var n;
                    if (0 < t)
                        for (n = 1; n <= t; ++n) f.forward(e);
                    else {
                        if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; t <= n; --n) f.back(e)
                    }
                    return f
                }, f.emulated.pushState ? (e = function() {}, f.pushState = f.pushState || e, f.replaceState = f.replaceState || e) : (f.onPopState = function(t, e) {
                    var n, i, r, o = !1;
                    return f.doubleCheckComplete(), (i = f.getHash()) ? ((r = f.extractState(i || f.getLocationHref(), !0)) ? f.replaceState(r.data, r.title, r.url, !1) : (f.Adapter.trigger(s, "anchorchange"), f.busy(!1)), f.expectedStateId = !1) : (o = (o = (n = f.Adapter.extractEventData("state", t, e) || !1) ? f.getStateById(n) : f.expectedStateId ? f.getStateById(f.expectedStateId) : f.extractState(f.getLocationHref())) || f.createStateObject(null, null, f.getLocationHref()), f.expectedStateId = !1, f.isLastSavedState(o) ? (f.busy(!1), !1) : (f.storeState(o), f.saveState(o), f.setTitle(o), f.Adapter.trigger(s, "statechange"), f.busy(!1), !0))
                }, f.Adapter.bind(s, "popstate", f.onPopState), f.pushState = function(t, e, n, i) {
                    if (f.getHashByUrl(n) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (!1 !== i && f.busy()) return f.pushQueue({
                        scope: f,
                        callback: f.pushState,
                        args: arguments,
                        queue: i
                    }), !1;
                    f.busy(!0);
                    var r = f.createStateObject(t, e, n);
                    return f.isLastSavedState(r) ? f.busy(!1) : (f.storeState(r), f.expectedStateId = r.id, g.pushState(r.id, r.title, r.url), f.Adapter.trigger(s, "popstate")), !0
                }, f.replaceState = function(t, e, n, i) {
                    if (f.getHashByUrl(n) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (!1 !== i && f.busy()) return f.pushQueue({
                        scope: f,
                        callback: f.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                    f.busy(!0);
                    var r = f.createStateObject(t, e, n);
                    return f.isLastSavedState(r) ? f.busy(!1) : (f.storeState(r), f.expectedStateId = r.id, g.replaceState(r.id, r.title, r.url), f.Adapter.trigger(s, "popstate")), !0
                }), r) {
                try {
                    f.store = p.parse(r.getItem("History.store")) || {}
                } catch (t) {
                    f.store = {}
                }
                f.normalizeStore()
            } else f.store = {}, f.normalizeStore();
            f.Adapter.bind(s, "unload", f.clearAllIntervals), f.saveState(f.storeState(f.extractState(f.getLocationHref(), !0))), r && (f.onUnload = function() {
                var t, e, n;
                try {
                    t = p.parse(r.getItem("History.store")) || {}
                } catch (e) {
                    t = {}
                }
                for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, f.idToState) f.idToState.hasOwnProperty(e) && (t.idToState[e] = f.idToState[e]);
                for (e in f.urlToId) f.urlToId.hasOwnProperty(e) && (t.urlToId[e] = f.urlToId[e]);
                for (e in f.stateToId) f.stateToId.hasOwnProperty(e) && (t.stateToId[e] = f.stateToId[e]);
                f.store = t, f.normalizeStore(), n = p.stringify(t);
                try {
                    r.setItem("History.store", n)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    r.length && (r.removeItem("History.store"), r.setItem("History.store", n))
                }
            }, f.intervalList.push(u(f.onUnload, f.options.storeInterval)), f.Adapter.bind(s, "beforeunload", f.onUnload), f.Adapter.bind(s, "unload", f.onUnload)), f.emulated.pushState || (f.bugs.safariPoll && f.intervalList.push(u(f.safariStatePoll, f.options.safariPollInterval)), "Apple Computer, Inc." !== i.vendor && "Mozilla" !== (i.appCodeName || "") || (f.Adapter.bind(s, "hashchange", function() {
                f.Adapter.trigger(s, "popstate")
            }), f.getHash() && f.Adapter.onDomLoad(function() {
                f.Adapter.trigger(s, "hashchange")
            })))
        }, f.options && f.options.delayInit || f.init()
    }(window),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(c) {
        "use strict";
        var o = window.Slick || {},
            r = 0;
        (o = function(t, e) {
            var n, i = this;
            i.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(t),
                appendDots: c(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, e) {
                    return c('<button type="button" />').text(e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, i.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(t), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(t).data("slick") || {}, i.options = c.extend({}, i.defaults, e, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = r++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, o.prototype.addSlide = o.prototype.slickAdd = function(t, e, n) {
            var i = this;
            if ("boolean" == typeof e) n = e, e = null;
            else if (e < 0 || e >= i.slideCount) return !1;
            i.unload(), "number" == typeof e ? 0 === e && 0 === i.$slides.length ? c(t).appendTo(i.$slideTrack) : n ? c(t).insertBefore(i.$slides.eq(e)) : c(t).insertAfter(i.$slides.eq(e)) : !0 === n ? c(t).prependTo(i.$slideTrack) : c(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(t, e) {
                c(e).attr("data-slick-index", t)
            }), i.$slidesCache = i.$slides, i.reinit()
        }, o.prototype.animateHeight = function() {
            var t;
            1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (t = this.$slides.eq(this.currentSlide).outerHeight(!0), this.$list.animate({
                height: t
            }, this.options.speed))
        }, o.prototype.animateSlide = function(t, e) {
            var n = {},
                i = this;
            i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
                left: t
            }, i.options.speed, i.options.easing, e) : i.$slideTrack.animate({
                top: t
            }, i.options.speed, i.options.easing, e) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
                animStart: i.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: i.options.speed,
                easing: i.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate(" + t + "px, 0px)" : n[i.animType] = "translate(0px," + t + "px)", i.$slideTrack.css(n)
                },
                complete: function() {
                    e && e.call()
                }
            })) : (i.applyTransition(), t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(n), e && setTimeout(function() {
                i.disableTransition(), e.call()
            }, i.options.speed))
        }, o.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = c(t).not(this.$slider)), t
        }, o.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function() {
                var t = c(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }, o.prototype.applyTransition = function(t) {
            var e = this,
                n = {};
            !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, o.prototype.autoPlay = function() {
            this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
        }, o.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, o.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, o.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, o.prototype.buildDots = function() {
            var t, e, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) e.append(c("<li />").append(n.options.customPaging.call(this, n, t)));
                n.$dots = e.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, o.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, e) {
                c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, o.prototype.buildRows = function() {
            var t, e, n, i = this,
                r = document.createDocumentFragment(),
                o = i.$slider.children();
            if (0 < i.options.rows) {
                for (n = i.options.slidesPerRow * i.options.rows, e = Math.ceil(o.length / n), t = 0; t < e; t++) {
                    for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                        for (var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
                            var u = t * n + (a * i.options.slidesPerRow + c);
                            o.get(u) && l.appendChild(o.get(u))
                        }
                        s.appendChild(l)
                    }
                    r.appendChild(s)
                }
                i.$slider.empty().append(r), i.$slider.children().children().children().css({
                    width: 100 / i.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, o.prototype.checkResponsive = function(t, e) {
            var n, i, r, o = this,
                s = !1,
                a = o.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === o.respondTo ? r = l : "slider" === o.respondTo ? r = a : "min" === o.respondTo && (r = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                for (n in i = null, o.breakpoints) o.breakpoints.hasOwnProperty(n) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[n] && (i = o.breakpoints[n]) : r > o.breakpoints[n] && (i = o.breakpoints[n]));
                null !== i ? null !== o.activeBreakpoint && i === o.activeBreakpoint && !e || (o.activeBreakpoint = i, "unslick" === o.breakpointSettings[i] ? o.unslick(i) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[i]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), s = i) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t), s = i), t || !1 === s || o.$slider.trigger("breakpoint", [o, s])
            }
        }, o.prototype.changeSlide = function(t, e) {
            var n, i, r = this,
                o = c(t.currentTarget);
            switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    i = 0 == n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - i, !1, e);
                    break;
                case "next":
                    i = 0 == n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + i, !1, e);
                    break;
                case "index":
                    var s = 0 === t.data.index ? 0 : t.data.index || o.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(s), !1, e), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, o.prototype.checkNavigable = function(t) {
            var e, n = 0;
            if (t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var i in e) {
                    if (t < e[i]) {
                        t = n;
                        break
                    }
                    n = e[i]
                }
            return t
        }, o.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, o.prototype.cleanUpSlideEvents = function() {
            this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1))
        }, o.prototype.cleanUpRows = function() {
            var t;
            0 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
        }, o.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, o.prototype.destroy = function(t) {
            var e = this;
            e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                c(this).attr("style", c(this).data("originalStyling"))
            }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
        }, o.prototype.disableTransition = function(t) {
            var e = {};
            e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, o.prototype.fadeSlide = function(t, e) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function() {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, o.prototype.fadeSlideOut = function(t) {
            !1 === this.cssTransitions ? this.$slides.eq(t).animate({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }))
        }, o.prototype.filterSlides = o.prototype.slickFilter = function(t) {
            null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit())
        }, o.prototype.focusHandler = function() {
            var n = this;
            n.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(t) {
                var e = c(this);
                setTimeout(function() {
                    n.options.pauseOnFocus && e.is(":focus") && (n.focussed = !0, n.autoPlay())
                }, 0)
            }).on("blur.slick", "*", function(t) {
                c(this), n.options.pauseOnFocus && (n.focussed = !1, n.autoPlay())
            })
        }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, o.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                n = 0,
                i = 0;
            if (!0 === t.options.infinite)
                if (t.slideCount <= t.options.slidesToShow) ++i;
                else
                    for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) i = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return i - 1
        }, o.prototype.getLeft = function(t) {
            var e, n, i, r, o = this,
                s = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = n * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (s = t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (o.$list.width() - i.outerWidth()) / 2)), e
        }, o.prototype.getOption = o.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, o.prototype.getNavigableIndexes = function() {
            for (var t = this, e = 0, n = 0, i = [], r = !1 === t.options.infinite ? t.slideCount : (e = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); e < r;) i.push(e), e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return i
        }, o.prototype.getSlick = function() {
            return this
        }, o.prototype.getSlideCount = function() {
            var r, o = this,
                t = !0 === o.options.centerMode ? Math.floor(o.$list.width() / 2) : 0,
                s = -1 * o.swipeLeft + t;
            return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(t, e) {
                var n = c(e).outerWidth(),
                    i = e.offsetLeft;
                if (!0 !== o.options.centerMode && (i += n / 2), s < i + n) return r = e, !1
            }), Math.abs(c(r).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, o.prototype.goTo = o.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, o.prototype.init = function(t) {
            var e = this;
            c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
        }, o.prototype.initADA = function() {
            var i = this,
                n = Math.ceil(i.slideCount / i.options.slidesToShow),
                r = i.getNavigableIndexes().filter(function(t) {
                    return 0 <= t && t < i.slideCount
                });
            i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) {
                var e, n = r.indexOf(t);
                c(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + i.instanceUid + t,
                    tabindex: -1
                }), -1 !== n && (e = "slick-slide-control" + i.instanceUid + n, c("#" + e).length && c(this).attr({
                    "aria-describedby": e
                }))
            }), i.$dots.attr("role", "tablist").find("li").each(function(t) {
                var e = r[t];
                c(this).attr({
                    role: "presentation"
                }), c(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + i.instanceUid + t,
                    "aria-controls": "slick-slide" + i.instanceUid + e,
                    "aria-label": t + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(i.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++) i.options.focusOnChange ? i.$slides.eq(t).attr({
                tabindex: "0"
            }) : i.$slides.eq(t).removeAttr("tabindex");
            i.activateADA()
        }, o.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
        }, o.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (c("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
        }, o.prototype.initSlideEvents = function() {
            this.options.pauseOnHover && (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)))
        }, o.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(t.setPosition)
        }, o.prototype.initUI = function() {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
        }, o.prototype.keyHandler = function(t) {
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "previous" : "next"
                }
            }))
        }, o.prototype.lazyLoad = function() {
            var t, e, n, o = this;

            function i(t) {
                c("img[data-lazy]", t).each(function() {
                    var t = c(this),
                        e = c(this).attr("data-lazy"),
                        n = c(this).attr("data-srcset"),
                        i = c(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            n && (t.attr("srcset", n), i && t.attr("sizes", i)), t.attr("src", e).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), o.$slider.trigger("lazyLoaded", [o, t, e])
                        })
                    }, r.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, e])
                    }, r.src = e
                })
            }
            if (!0 === o.options.centerMode ? n = !0 === o.options.infinite ? (e = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (e = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (e = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(e + o.options.slidesToShow), !0 === o.options.fade && (0 < e && e--, n <= o.slideCount && n++)), t = o.$slider.find(".slick-slide").slice(e, n), "anticipated" === o.options.lazyLoad)
                for (var r = e - 1, s = n, a = o.$slider.find(".slick-slide"), l = 0; l < o.options.slidesToScroll; l++) r < 0 && (r = o.slideCount - 1), t = (t = t.add(a.eq(r))).add(a.eq(s)), r--, s++;
            i(t), o.slideCount <= o.options.slidesToShow ? i(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? i(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && i(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
        }, o.prototype.loadSlider = function() {
            this.setPosition(), this.$slideTrack.css({
                opacity: 1
            }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
        }, o.prototype.next = o.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, o.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, o.prototype.pause = o.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, o.prototype.play = o.prototype.slickPlay = function() {
            this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
        }, o.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && c(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
        }, o.prototype.prev = o.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, o.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, o.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var e, n, i, r, o, s = this,
                a = c("img[data-lazy]", s.$slider);
            a.length ? (e = a.first(), n = e.attr("data-lazy"), i = e.attr("data-srcset"), r = e.attr("data-sizes") || s.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() {
                i && (e.attr("srcset", i), r && e.attr("sizes", r)), e.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, e, n]), s.progressiveLazyLoad()
            }, o.onerror = function() {
                t < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(t + 1)
                }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, n]), s.progressiveLazyLoad())
            }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
        }, o.prototype.refresh = function(t) {
            var e, n = this,
                i = n.slideCount - n.options.slidesToShow;
            !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), e = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                currentSlide: e
            }), n.init(), t || n.changeSlide({
                data: {
                    message: "index",
                    index: e
                }
            }, !1)
        }, o.prototype.registerBreakpoints = function() {
            var t, e, n, i = this,
                r = i.options.responsive || null;
            if ("array" === c.type(r) && r.length) {
                for (t in i.respondTo = i.options.respondTo || "window", r)
                    if (n = i.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (e = r[t].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === e && i.breakpoints.splice(n, 1), n--;
                        i.breakpoints.push(e), i.breakpointSettings[e] = r[t].settings
                    }
                i.breakpoints.sort(function(t, e) {
                    return i.options.mobileFirst ? t - e : e - t
                })
            }
        }, o.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, o.prototype.resize = function() {
            var t = this;
            c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, o.prototype.removeSlide = o.prototype.slickRemove = function(t, e, n) {
            var i = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, o.prototype.setCSS = function(t) {
            var e, n, i = {};
            !0 === this.options.rtl && (t = -t), e = "left" == this.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == this.positionProp ? Math.ceil(t) + "px" : "0px", i[this.positionProp] = t, !1 === this.transformsEnabled || (!(i = {}) === this.cssTransitions ? i[this.animType] = "translate(" + e + ", " + n + ")" : i[this.animType] = "translate3d(" + e + ", " + n + ", 0px)"), this.$slideTrack.css(i)
        }, o.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, o.prototype.setFade = function() {
            var n, i = this;
            i.$slides.each(function(t, e) {
                n = i.slideWidth * t * -1, !0 === i.options.rtl ? c(e).css({
                    position: "relative",
                    right: n,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : c(e).css({
                    position: "relative",
                    left: n,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, o.prototype.setHeight = function() {
            var t;
            1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (t = this.$slides.eq(this.currentSlide).outerHeight(!0), this.$list.css("height", t))
        }, o.prototype.setOption = o.prototype.slickSetOption = function() {
            var t, e, n, i, r, o = this,
                s = !1;
            if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], r = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[1], s = arguments[2], "responsive" === (n = arguments[0]) && "array" === c.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[n] = i;
            else if ("multiple" === r) c.each(n, function(t, e) {
                o.options[t] = e
            });
            else if ("responsive" === r)
                for (e in i)
                    if ("array" !== c.type(o.options.responsive)) o.options.responsive = [i[e]];
                    else {
                        for (t = o.options.responsive.length - 1; 0 <= t;) o.options.responsive[t].breakpoint === i[e].breakpoint && o.options.responsive.splice(t, 1), t--;
                        o.options.responsive.push(i[e])
                    }
            s && (o.unload(), o.reinit())
        }, o.prototype.setPosition = function() {
            this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
        }, o.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, o.prototype.setSlideClasses = function(t) {
            var e, n, i, r, o = this,
                s = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
            o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode ? (i = o.options.slidesToShow % 2 == 0 ? 1 : 0, r = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (r <= t && t <= o.slideCount - 1 - r ? o.$slides.slice(t - r + i, t + r + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = o.options.slidesToShow + t, s.slice(e - r + 1 + i, e + r + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? s.eq(o.options.slidesToShow + o.slideCount + 1).addClass("slick-center") : t === o.slideCount - 1 && s.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : s.length <= o.options.slidesToShow ? s.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow, e = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? s.slice(e - (o.options.slidesToShow - n), e + n).addClass("slick-active").attr("aria-hidden", "false") : s.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
        }, o.prototype.setupInfinite = function() {
            var t, e, n, i = this;
            if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (e = null, i.slideCount > i.options.slidesToShow)) {
                for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - n; --t) e = t - 1, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < n + i.slideCount; t += 1) e = t, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    c(this).attr("id", "")
                })
            }
        }, o.prototype.interrupt = function(t) {
            t || this.autoPlay(), this.interrupted = t
        }, o.prototype.selectHandler = function(t) {
            var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
                n = (n = parseInt(e.attr("data-slick-index"))) || 0;
            this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
        }, o.prototype.slideHandler = function(t, e, n) {
            var i, r, o, s, a, l, c = this;
            if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
                if (!1 === e && c.asNavFor(t), i = t, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
                c.postSlide(i)
            }) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
                    c.postSlide(r)
                })) : c.postSlide(r), void c.animateHeight();
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function() {
                    c.postSlide(r)
                }) : c.postSlide(r)
            }
        }, o.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, o.prototype.swipeDirection = function() {
            var t, e = this.touchObject.startX - this.touchObject.curX,
                n = this.touchObject.startY - this.touchObject.curY,
                i = Math.atan2(n, e);
            return (t = Math.round(180 * i / Math.PI)) < 0 && (t = 360 - Math.abs(t)), t <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === this.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
        }, o.prototype.swipeEnd = function(t) {
            var e, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
            if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, o.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, o.prototype.swipeMove = function(t) {
            var e, n, i, r, o, s = this,
                a = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
            return !(!s.dragging || s.scrolling || a && 1 !== a.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== a ? a[0].pageX : t.clientX, s.touchObject.curY = void 0 !== a ? a[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && 4 < o ? !(s.scrolling = !0) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = o), n = s.swipeDirection(), void 0 !== t.originalEvent && 4 < s.touchObject.swipeLength && (s.swiping = !0, t.preventDefault()), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, (s.touchObject.edgeHit = !1) === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = e + i * r : s.swipeLeft = e + i * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = e + i * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))))
        }, o.prototype.swipeStart = function(t) {
            var e, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, n.dragging = !0
        }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function() {
            null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
        }, o.prototype.unload = function() {
            var t = this;
            c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, o.prototype.unslick = function(t) {
            this.$slider.trigger("unslick", [this, t]), this.destroy()
        }, o.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, o.prototype.updateDots = function() {
            null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
        }, o.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function() {
            for (var t, e = arguments[0], n = Array.prototype.slice.call(arguments, 1), i = this.length, r = 0; r < i; r++)
                if ("object" == typeof e || void 0 === e ? this[r].slick = new o(this[r], e) : t = this[r].slick[e].apply(this[r].slick, n), void 0 !== t) return t;
            return this
        }
    }),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(r) {
        "use strict";
        var o = [],
            e = [],
            i = {
                precision: 100,
                elapse: !1
            };

        function s(t, e, n) {
            this.el = t, this.$el = r(t), this.interval = null, this.offset = {}, this.options = r.extend({}, i), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = r.extend({}, i, n)), this.setFinalDate(e), this.start()
        }
        e.push(/^[0-9]*$/.source), e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e = new RegExp(e.join("|"));
        var g = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            w: "weeks",
            d: "daysToWeek",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        };
        r.extend(s.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function() {
                    t.update.call(t)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(t) {
                this.finalDate = function(t) {
                    if (t instanceof Date) return t;
                    if (String(t).match(e)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
                    throw new Error("Couldn't cast `" + t + "` to a date object.")
                }(t)
            },
            update: function() {
                var t, e, n;
                0 !== this.$el.closest("html").length ? (t = void 0 !== r._data(this.el, "events"), e = new Date, n = this.finalDate.getTime() - e.getTime(), n = Math.ceil(n / 1e3), n = !this.options.elapse && n < 0 ? 0 : Math.abs(n), this.totalSecsLeft !== n && t && (this.totalSecsLeft = n, this.elapsed = e >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - e.getFullYear())
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))) : this.remove()
            },
            dispatchEvent: function(t) {
                var f, e = r.Event(t + ".countdown");
                e.finalDate = this.finalDate, e.elapsed = this.elapsed, e.offset = r.extend({}, this.offset), e.strftime = (f = this.offset, function(t) {
                    var e, n, i, r, o, s = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                    if (s)
                        for (var a = 0, l = s.length; a < l; ++a) {
                            var c = (o = (d = s[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/))[0].toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(o)),
                                u = d[1] || "",
                                h = d[3] || "",
                                p = null,
                                d = d[2];
                            g.hasOwnProperty(d) && (p = g[d], p = Number(f[p])), null !== p && ("!" === u && (n = p, r = i = void 0, i = "s", r = "", (e = h) && (i = 1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? e[0] : (r = e[0], e[1])), p = 1 === Math.abs(n) ? r : i), "" === u && p < 10 && (p = "0" + p.toString()), t = t.replace(c, p.toString()))
                        }
                    return t.replace(/%%/, "%")
                }), this.$el.trigger(e)
            }
        }), r.fn.countdown = function() {
            var i = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var t, e, n = r(this).data("countdown-instance");
                void 0 !== n ? (t = o[n], e = i[0], s.prototype.hasOwnProperty(e) ? t[e].apply(t, i.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (t.setFinalDate.call(t, e), t.start()) : r.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))) : new s(this, i[0], i[1])
            })
        }
    }),
    function(t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).enquire = t()
    }(function() {
        return function o(s, a, l) {
            function c(e, t) {
                if (!a[e]) {
                    if (!s[e]) {
                        var n = "function" == typeof require && require;
                        if (!t && n) return n(e, !0);
                        if (u) return u(e, !0);
                        var i = new Error("Cannot find module '" + e + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    var r = a[e] = {
                        exports: {}
                    };
                    s[e][0].call(r.exports, function(t) {
                        return c(s[e][1][t] || t)
                    }, r, r.exports, o, s, a, l)
                }
                return a[e].exports
            }
            for (var u = "function" == typeof require && require, t = 0; t < l.length; t++) c(l[t]);
            return c
        }({
            1: [function(t, e, n) {
                function i(t, e) {
                    this.query = t, this.isUnconditional = e, this.handlers = [], this.mql = window.matchMedia(t);
                    var n = this;
                    this.listener = function(t) {
                        n.mql = t.currentTarget || t, n.assess()
                    }, this.mql.addListener(this.listener)
                }
                var r = t(3),
                    o = t(4).each;
                i.prototype = {
                    constuctor: i,
                    addHandler: function(t) {
                        var e = new r(t);
                        this.handlers.push(e), this.matches() && e.on()
                    },
                    removeHandler: function(n) {
                        var i = this.handlers;
                        o(i, function(t, e) {
                            if (t.equals(n)) return t.destroy(), !i.splice(e, 1)
                        })
                    },
                    matches: function() {
                        return this.mql.matches || this.isUnconditional
                    },
                    clear: function() {
                        o(this.handlers, function(t) {
                            t.destroy()
                        }), this.mql.removeListener(this.listener), this.handlers.length = 0
                    },
                    assess: function() {
                        var e = this.matches() ? "on" : "off";
                        o(this.handlers, function(t) {
                            t[e]()
                        })
                    }
                }, e.exports = i
            }, {
                3: 3,
                4: 4
            }],
            2: [function(t, e, n) {
                function i() {
                    if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
                }
                var o = t(1),
                    r = t(4),
                    s = r.each,
                    a = r.isFunction,
                    l = r.isArray;
                i.prototype = {
                    constructor: i,
                    register: function(e, t, n) {
                        var i = this.queries,
                            r = n && this.browserIsIncapable;
                        return i[e] || (i[e] = new o(e, r)), a(t) && (t = {
                            match: t
                        }), l(t) || (t = [t]), s(t, function(t) {
                            a(t) && (t = {
                                match: t
                            }), i[e].addHandler(t)
                        }), this
                    },
                    unregister: function(t, e) {
                        var n = this.queries[t];
                        return n && (e ? n.removeHandler(e) : (n.clear(), delete this.queries[t])), this
                    }
                }, e.exports = i
            }, {
                1: 1,
                4: 4
            }],
            3: [function(t, e, n) {
                function i(t) {
                    (this.options = t).deferSetup || this.setup()
                }
                i.prototype = {
                    constructor: i,
                    setup: function() {
                        this.options.setup && this.options.setup(), this.initialised = !0
                    },
                    on: function() {
                        this.initialised || this.setup(), this.options.match && this.options.match()
                    },
                    off: function() {
                        this.options.unmatch && this.options.unmatch()
                    },
                    destroy: function() {
                        this.options.destroy ? this.options.destroy() : this.off()
                    },
                    equals: function(t) {
                        return this.options === t || this.options.match === t
                    }
                }, e.exports = i
            }, {}],
            4: [function(t, e, n) {
                e.exports = {
                    isFunction: function(t) {
                        return "function" == typeof t
                    },
                    isArray: function(t) {
                        return "[object Array]" === Object.prototype.toString.apply(t)
                    },
                    each: function(t, e) {
                        for (var n = 0, i = t.length; n < i && !1 !== e(t[n], n); n++);
                    }
                }
            }, {}],
            5: [function(t, e, n) {
                var i = t(2);
                e.exports = new i
            }, {
                2: 2
            }]
        }, {}, [5])(5)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(u) {
        function t() {}

        function h(t, e) {
            g.ev.on("mfp" + t + ".mfp", e)
        }

        function p(t, e, n, i) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, n && (r.innerHTML = n), i ? e && e.appendChild(r) : (r = u(r), e && r.appendTo(e)), r
        }

        function d(t, e) {
            g.ev.triggerHandler("mfp" + t, e), g.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), g.st.callbacks[t] && g.st.callbacks[t].apply(g, u.isArray(e) ? e : [e]))
        }

        function f(t) {
            return t === e && g.currTemplate.closeBtn || (g.currTemplate.closeBtn = u(g.st.closeMarkup.replace("%title%", g.st.tClose)), e = t), g.currTemplate.closeBtn
        }

        function o() {
            u.magnificPopup.instance || ((g = new t).init(), u.magnificPopup.instance = g)
        }
        var g, i, m, r, v, e, a = "Close",
            l = "BeforeClose",
            y = "MarkupParse",
            _ = "mfp-ready",
            n = "mfp-removing",
            s = "mfp-prevent-close",
            c = !!window.jQuery,
            b = u(window);

        function w() {
            T && (k.after(T.addClass(S)).detach(), T = null)
        }
        t.prototype = {
            constructor: t,
            init: function() {
                var t = navigator.appVersion;
                g.isLowIE = g.isIE8 = document.all && !document.addEventListener, g.isAndroid = /android/gi.test(t), g.isIOS = /iphone|ipad|ipod/gi.test(t), g.supportsTransition = function() {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), g.probablyMobile = g.isAndroid || g.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), m = u(document), g.popupsCache = {}
            },
            open: function(t) {
                if (!1 === t.isObj) {
                    g.items = t.items.toArray(), g.index = 0;
                    for (var e, n = t.items, i = 0; i < n.length; i++)
                        if ((e = n[i]).parsed && (e = e.el[0]), e === t.el[0]) {
                            g.index = i;
                            break
                        }
                } else g.items = u.isArray(t.items) ? t.items : [t.items], g.index = t.index || 0;
                if (!g.isOpen) {
                    g.types = [], v = "", t.mainEl && t.mainEl.length ? g.ev = t.mainEl.eq(0) : g.ev = m, t.key ? (g.popupsCache[t.key] || (g.popupsCache[t.key] = {}), g.currTemplate = g.popupsCache[t.key]) : g.currTemplate = {}, g.st = u.extend(!0, {}, u.magnificPopup.defaults, t), g.fixedContentPos = "auto" === g.st.fixedContentPos ? !g.probablyMobile : g.st.fixedContentPos, g.st.modal && (g.st.closeOnContentClick = !1, g.st.closeOnBgClick = !1, g.st.showCloseBtn = !1, g.st.enableEscapeKey = !1), g.bgOverlay || (g.bgOverlay = p("bg").on("click.mfp", function() {
                        g.close()
                    }), g.wrap = p("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
                        g._checkIfClose(t.target) && g.close()
                    }), g.container = p("container", g.wrap)), g.contentContainer = p("content"), g.st.preloader && (g.preloader = p("preloader", g.container, g.st.tLoading));
                    var r = u.magnificPopup.modules;
                    for (i = 0; i < r.length; i++) {
                        var o = (o = r[i]).charAt(0).toUpperCase() + o.slice(1);
                        g["init" + o].call(g)
                    }
                    d("BeforeOpen"), g.st.showCloseBtn && (g.st.closeBtnInside ? (h(y, function(t, e, n, i) {
                        n.close_replaceWith = f(i.type)
                    }), v += " mfp-close-btn-in") : g.wrap.append(f())), g.st.alignTop && (v += " mfp-align-top"), g.fixedContentPos ? g.wrap.css({
                        overflow: g.st.overflowY,
                        overflowX: "hidden",
                        overflowY: g.st.overflowY
                    }) : g.wrap.css({
                        top: b.scrollTop(),
                        position: "absolute"
                    }), !1 !== g.st.fixedBgPos && ("auto" !== g.st.fixedBgPos || g.fixedContentPos) || g.bgOverlay.css({
                        height: m.height(),
                        position: "absolute"
                    }), g.st.enableEscapeKey && m.on("keyup.mfp", function(t) {
                        27 === t.keyCode && g.close()
                    }), b.on("resize.mfp", function() {
                        g.updateSize()
                    }), g.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && g.wrap.addClass(v);
                    var s, a = g.wH = b.height(),
                        l = {};
                    g.fixedContentPos && g._hasScrollBar(a) && ((s = g._getScrollbarSize()) && (l.marginRight = s)), g.fixedContentPos && (g.isIE7 ? u("body, html").css("overflow", "hidden") : l.overflow = "hidden");
                    var c = g.st.mainClass;
                    return g.isIE7 && (c += " mfp-ie7"), c && g._addClassToMFP(c), g.updateItemHTML(), d("BuildControls"), u("html").css(l), g.bgOverlay.add(g.wrap).prependTo(g.st.prependTo || u(document.body)), g._lastFocusedEl = document.activeElement, setTimeout(function() {
                        g.content ? (g._addClassToMFP(_), g._setFocus()) : g.bgOverlay.addClass(_), m.on("focusin.mfp", g._onFocusIn)
                    }, 16), g.isOpen = !0, g.updateSize(a), d("Open"), t
                }
                g.updateItemHTML()
            },
            close: function() {
                g.isOpen && (d(l), g.isOpen = !1, g.st.removalDelay && !g.isLowIE && g.supportsTransition ? (g._addClassToMFP(n), setTimeout(function() {
                    g._close()
                }, g.st.removalDelay)) : g._close())
            },
            _close: function() {
                d(a);
                var t, e = n + " " + _ + " ";
                g.bgOverlay.detach(), g.wrap.detach(), g.container.empty(), g.st.mainClass && (e += g.st.mainClass + " "), g._removeClassFromMFP(e), g.fixedContentPos && (t = {
                    marginRight: ""
                }, g.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)), m.off("keyup.mfp focusin.mfp"), g.ev.off(".mfp"), g.wrap.attr("class", "mfp-wrap").removeAttr("style"), g.bgOverlay.attr("class", "mfp-bg"), g.container.attr("class", "mfp-container"), !g.st.showCloseBtn || g.st.closeBtnInside && !0 !== g.currTemplate[g.currItem.type] || g.currTemplate.closeBtn && g.currTemplate.closeBtn.detach(), g.st.autoFocusLast && g._lastFocusedEl && u(g._lastFocusedEl).focus(), g.currItem = null, g.content = null, g.currTemplate = null, g.prevHeight = 0, d("AfterClose")
            },
            updateSize: function(t) {
                var e, n;
                g.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * e, g.wrap.css("height", n), g.wH = n) : g.wH = t || b.height(), g.fixedContentPos || g.wrap.css("height", g.wH), d("Resize")
            },
            updateItemHTML: function() {
                var t = g.items[g.index];
                g.contentContainer.detach(), g.content && g.content.detach(), t.parsed || (t = g.parseEl(g.index));
                var e, n = t.type;
                d("BeforeChange", [g.currItem ? g.currItem.type : "", n]), g.currItem = t, g.currTemplate[n] || (d("FirstMarkupParse", e = !!g.st[n] && g.st[n].markup), g.currTemplate[n] = !e || u(e)), r && r !== t.type && g.container.removeClass("mfp-" + r + "-holder");
                var i = g["get" + n.charAt(0).toUpperCase() + n.slice(1)](t, g.currTemplate[n]);
                g.appendContent(i, n), t.preloaded = !0, d("Change", t), r = t.type, g.container.prepend(g.contentContainer), d("AfterChange")
            },
            appendContent: function(t, e) {
                (g.content = t) ? g.st.showCloseBtn && g.st.closeBtnInside && !0 === g.currTemplate[e] ? g.content.find(".mfp-close").length || g.content.append(f()) : g.content = t: g.content = "", d("BeforeAppend"), g.container.addClass("mfp-" + e + "-holder"), g.contentContainer.append(g.content)
            },
            parseEl: function(t) {
                var e, n = g.items[t];
                if ((n = n.tagName ? {
                        el: u(n)
                    } : (e = n.type, {
                        data: n,
                        src: n.src
                    })).el) {
                    for (var i = g.types, r = 0; r < i.length; r++)
                        if (n.el.hasClass("mfp-" + i[r])) {
                            e = i[r];
                            break
                        }
                    n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = e || g.st.type || "inline", n.index = t, n.parsed = !0, d("ElementParse", g.items[t] = n), g.items[t]
            },
            addGroup: function(e, n) {
                function t(t) {
                    t.mfpEl = this, g._openClick(t, e, n)
                }
                var i = "click.magnificPopup";
                (n = n || {}).mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, t)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, t) : (n.items = e).off(i).on(i, t))
            },
            _openClick: function(t, e, n) {
                if ((void 0 !== n.midClick ? n.midClick : u.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                    var i = void 0 !== n.disableOn ? n.disableOn : u.magnificPopup.defaults.disableOn;
                    if (i)
                        if (u.isFunction(i)) {
                            if (!i.call(g)) return !0
                        } else if (b.width() < i) return !0;
                    t.type && (t.preventDefault(), g.isOpen && t.stopPropagation()), n.el = u(t.mfpEl), n.delegate && (n.items = e.find(n.delegate)), g.open(n)
                }
            },
            updateStatus: function(t, e) {
                var n;
                g.preloader && (i !== t && g.container.removeClass("mfp-s-" + i), e || "loading" !== t || (e = g.st.tLoading), d("UpdateStatus", n = {
                    status: t,
                    text: e
                }), t = n.status, e = n.text, g.preloader.html(e), g.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation()
                }), g.container.addClass("mfp-s-" + t), i = t)
            },
            _checkIfClose: function(t) {
                if (!u(t).hasClass(s)) {
                    var e = g.st.closeOnContentClick,
                        n = g.st.closeOnBgClick;
                    if (e && n) return !0;
                    if (!g.content || u(t).hasClass("mfp-close") || g.preloader && t === g.preloader[0]) return !0;
                    if (t === g.content[0] || u.contains(g.content[0], t)) {
                        if (e) return !0
                    } else if (n && u.contains(document, t)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                g.bgOverlay.addClass(t), g.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), g.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (g.isIE7 ? m.height() : document.body.scrollHeight) > (t || b.height())
            },
            _setFocus: function() {
                (g.st.focus ? g.content.find(g.st.focus).eq(0) : g.wrap).focus()
            },
            _onFocusIn: function(t) {
                return t.target === g.wrap[0] || u.contains(g.wrap[0], t.target) ? void 0 : (g._setFocus(), !1)
            },
            _parseMarkup: function(r, t, e) {
                var o;
                e.data && (t = u.extend(e.data, t)), d(y, [r, t, e]), u.each(t, function(t, e) {
                    return void 0 === e || !1 === e || void(1 < (o = t.split("_")).length ? 0 < (n = r.find(".mfp-" + o[0])).length && ("replaceWith" === (i = o[1]) ? n[0] !== e[0] && n.replaceWith(e) : "img" === i ? n.is("img") ? n.attr("src", e) : n.replaceWith(u("<img>").attr("src", e).attr("class", n.attr("class"))) : n.attr(o[1], e)) : r.find(".mfp-" + t).html(e));
                    var n, i
                })
            },
            _getScrollbarSize: function() {
                var t;
                return void 0 === g.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), g.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), g.scrollbarSize
            }
        }, u.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(t, e) {
                return o(), (t = t ? u.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
            },
            close: function() {
                return u.magnificPopup.instance && u.magnificPopup.instance.close()
            },
            registerModule: function(t, e) {
                e.options && (u.magnificPopup.defaults[t] = e.options), u.extend(this.proto, e.proto), this.modules.push(t)
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
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, u.fn.magnificPopup = function(t) {
            o();
            var e, n, i, r = u(this);
            return "string" == typeof t ? "open" === t ? (e = c ? r.data("magnificPopup") : r[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, i = e.items ? e.items[n] : (i = r, e.delegate && (i = i.find(e.delegate)), i.eq(n)), g._openClick({
                mfpEl: i
            }, r, e)) : g.isOpen && g[t].apply(g, Array.prototype.slice.call(arguments, 1)) : (t = u.extend(!0, {}, t), c ? r.data("magnificPopup", t) : r[0].magnificPopup = t, g.addGroup(r, t)), r
        };
        var S, k, T, x = "inline";

        function C() {
            I && u(document.body).removeClass(I)
        }

        function E() {
            C(), g.req && g.req.abort()
        }
        u.magnificPopup.registerModule(x, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    g.types.push(x), h(a + "." + x, function() {
                        w()
                    })
                },
                getInline: function(t, e) {
                    if (w(), t.src) {
                        var n, i = g.st.inline,
                            r = u(t.src);
                        return r.length ? ((n = r[0].parentNode) && n.tagName && (k || (S = i.hiddenClass, k = p(S), S = "mfp-" + S), T = r.after(k).detach().removeClass(S)), g.updateStatus("ready")) : (g.updateStatus("error", i.tNotFound), r = u("<div>")), t.inlineElement = r
                    }
                    return g.updateStatus("ready"), g._parseMarkup(e, {}, t), e
                }
            }
        });
        var I, A, O, $ = "ajax";

        function P(t) {
            var e;
            !g.currTemplate[N] || (e = g.currTemplate[N].find("iframe")).length && (t || (e[0].src = "//about:blank"), g.isIE8 && e.css("display", t ? "block" : "none"))
        }
        u.magnificPopup.registerModule($, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    g.types.push($), I = g.st.ajax.cursor, h(a + "." + $, E), h("BeforeChange.ajax", E)
                },
                getAjax: function(r) {
                    I && u(document.body).addClass(I), g.updateStatus("loading");
                    var t = u.extend({
                        url: r.src,
                        success: function(t, e, n) {
                            var i = {
                                data: t,
                                xhr: n
                            };
                            d("ParseAjax", i), g.appendContent(u(i.data), $), r.finished = !0, C(), g._setFocus(), setTimeout(function() {
                                g.wrap.addClass(_)
                            }, 16), g.updateStatus("ready"), d("AjaxContentAdded")
                        },
                        error: function() {
                            C(), r.finished = r.loadError = !0, g.updateStatus("error", g.st.ajax.tError.replace("%url%", r.src))
                        }
                    }, g.st.ajax.settings);
                    return g.req = u.ajax(t), ""
                }
            }
        }), u.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var t = g.st.image,
                        e = ".image";
                    g.types.push("image"), h("Open" + e, function() {
                        "image" === g.currItem.type && t.cursor && u(document.body).addClass(t.cursor)
                    }), h(a + e, function() {
                        t.cursor && u(document.body).removeClass(t.cursor), b.off("resize.mfp")
                    }), h("Resize" + e, g.resizeImage), g.isLowIE && h("AfterChange", g.resizeImage)
                },
                resizeImage: function() {
                    var t, e = g.currItem;
                    e && e.img && g.st.image.verticalFit && (t = 0, g.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", g.wH - t))
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, A && clearInterval(A), t.isCheckingImgSize = !1, d("ImageHasSize", t), t.imgHidden && (g.content && g.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var n = 0,
                        i = e.img[0],
                        r = function(t) {
                            A && clearInterval(A), A = setInterval(function() {
                                return 0 < i.naturalWidth ? void g._onImageHasSize(e) : (200 < n && clearInterval(A), void(3 == ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                            }, t)
                        };
                    r(1)
                },
                getImage: function(t, e) {
                    var n, i = 0,
                        r = function() {
                            t && (t.img[0].complete ? (t.img.off(".mfploader"), t === g.currItem && (g._onImageHasSize(t), g.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, d("ImageLoadComplete")) : ++i < 200 ? setTimeout(r, 100) : o())
                        },
                        o = function() {
                            t && (t.img.off(".mfploader"), t === g.currItem && (g._onImageHasSize(t), g.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                        },
                        s = g.st.image,
                        a = e.find(".mfp-img");
                    return a.length && ((n = document.createElement("img")).className = "mfp-img", t.el && t.el.find("img").length && (n.alt = t.el.find("img").attr("alt")), t.img = u(n).on("load.mfploader", r).on("error.mfploader", o), n.src = t.src, a.is("img") && (t.img = t.img.clone()), 0 < (n = t.img[0]).naturalWidth ? t.hasSize = !0 : n.width || (t.hasSize = !1)), g._parseMarkup(e, {
                        title: function(t) {
                            if (t.data && void 0 !== t.data.title) return t.data.title;
                            var e = g.st.image.titleSrc;
                            if (e) {
                                if (u.isFunction(e)) return e.call(g, t);
                                if (t.el) return t.el.attr(e) || ""
                            }
                            return ""
                        }(t),
                        img_replaceWith: t.img
                    }, t), g.resizeImage(), t.hasSize ? (A && clearInterval(A), t.loadError ? (e.addClass("mfp-loading"), g.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), g.updateStatus("ready"))) : (g.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), g.findImageSize(t))), e
                }
            }
        }), u.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, e, n, i, o = g.st.zoom;

                    function r(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            n = "all " + o.duration / 1e3 + "s " + o.easing,
                            i = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            r = "transition";
                        return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = n, e.css(i), e
                    }

                    function s() {
                        g.content.css("visibility", "visible")
                    }
                    o.enabled && g.supportsTransition && (i = o.duration, h("BuildControls.zoom", function() {
                        if (g._allowZoom()) {
                            if (clearTimeout(e), g.content.css("visibility", "hidden"), !(t = g._getItemToZoom())) return void s();
                            (n = r(t)).css(g._getOffset()), g.wrap.append(n), e = setTimeout(function() {
                                n.css(g._getOffset(!0)), e = setTimeout(function() {
                                    s(), setTimeout(function() {
                                        n.remove(), t = n = null, d("ZoomAnimationEnded")
                                    }, 16)
                                }, i)
                            }, 16)
                        }
                    }), h(l + ".zoom", function() {
                        if (g._allowZoom()) {
                            if (clearTimeout(e), g.st.removalDelay = i, !t) {
                                if (!(t = g._getItemToZoom())) return;
                                n = r(t)
                            }
                            n.css(g._getOffset(!0)), g.wrap.append(n), g.content.css("visibility", "hidden"), setTimeout(function() {
                                n.css(g._getOffset())
                            }, 16)
                        }
                    }), h(a + ".zoom", function() {
                        g._allowZoom() && (s(), n && n.remove(), t = null)
                    }))
                },
                _allowZoom: function() {
                    return "image" === g.currItem.type
                },
                _getItemToZoom: function() {
                    return !!g.currItem.hasSize && g.currItem.img
                },
                _getOffset: function(t) {
                    var e, n = (e = t ? g.currItem.img : g.st.zoom.opener(g.currItem.el || g.currItem)).offset(),
                        i = parseInt(e.css("padding-top"), 10),
                        r = parseInt(e.css("padding-bottom"), 10);
                    n.top -= u(window).scrollTop() - i;
                    var o = {
                        width: e.width(),
                        height: (c ? e.innerHeight() : e[0].offsetHeight) - r - i
                    };
                    return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O ? o["-moz-transform"] = o.transform = "translate(" + n.left + "px," + n.top + "px)" : (o.left = n.left, o.top = n.top), o
                }
            }
        });
        var N = "iframe";

        function j(t) {
            var e = g.items.length;
            return e - 1 < t ? t - e : t < 0 ? e + t : t
        }

        function D(t, e, n) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
        }
        
        var L = "retina";
        u.magnificPopup.registerModule(L, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    var n, i;
                    1 < window.devicePixelRatio && (n = g.st.retina, i = n.ratio, 1 < (i = isNaN(i) ? i() : i) && (h("ImageHasSize." + L, function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), h("ElementParse." + L, function(t, e) {
                        e.src = n.replaceSrc(e, i)
                    })))
                }
            }
        }), o()
    }),
    function(E) {
        E.isScrollToFixed = function(t) {
            return !!E(t).data("ScrollToFixed")
        }, E.ScrollToFixed = function(t, e) {
            var r = this;
            r.$el = E(t), r.el = t, r.$el.data("ScrollToFixed", r);
            var o, s, n, i, a = !1,
                l = r.$el,
                c = 0,
                u = 0,
                h = -1,
                p = -1,
                d = null;

            function f() {
                var t = r.options.limit;
                return t ? "function" == typeof t ? t.apply(l) : t : 0
            }

            function g() {
                return "fixed" === o
            }

            function m() {
                return "absolute" === o
            }

            function v() {
                return !g() && !m()
            }

            function y() {
                g() || (d.css({
                    display: l.css("display"),
                    width: l.outerWidth(!0),
                    height: l.outerHeight(!0),
                    float: l.css("float")
                }), cssOptions = {
                    "z-index": r.options.zIndex,
                    position: "fixed",
                    top: -1 == r.options.bottom ? S() : "",
                    bottom: -1 == r.options.bottom ? "" : r.options.bottom,
                    "margin-left": "0px"
                }, r.options.dontSetWidth || (cssOptions.width = l.width()), l.css(cssOptions), l.addClass(r.options.baseClassName), r.options.className && l.addClass(r.options.className), o = "fixed")
            }

            function _() {
                var t = f(),
                    e = u;
                r.options.removeOffsets && (e = "", t -= c), cssOptions = {
                    position: "absolute",
                    top: t,
                    left: e,
                    "margin-left": "0px",
                    bottom: ""
                }, r.options.dontSetWidth || (cssOptions.width = l.width()), l.css(cssOptions), o = "absolute"
            }

            function b() {
                v() || (p = -1, d.css("display", "none"), l.css({
                    "z-index": i,
                    width: "",
                    position: s,
                    left: "",
                    top: n,
                    "margin-left": ""
                }), l.removeClass("scroll-to-fixed-fixed"), r.options.className && l.removeClass(r.options.className), o = null)
            }

            function w(t) {
                t != p && (l.css("left", u - t), p = t)
            }

            function S() {
                var t = r.options.marginTop;
                return t ? "function" == typeof t ? t.apply(l) : t : 0
            }

            function k() {
                var t, e, n, i;
                E.isScrollToFixed(l) && ((t = a) ? v() && (c = l.offset().top, u = l.offset().left) : (l.trigger("preUnfixed.ScrollToFixed"), b(), l.trigger("unfixed.ScrollToFixed"), p = -1, c = l.offset().top, u = l.offset().left, r.options.offsets && (u += l.offset().left - l.position().left), -1 == h && (h = u), o = l.css("position"), a = !0, -1 != r.options.bottom && (l.trigger("preFixed.ScrollToFixed"), y(), l.trigger("fixed.ScrollToFixed"))), e = E(window).scrollLeft(), n = E(window).scrollTop(), i = f(), r.options.minWidth && E(window).width() < r.options.minWidth || r.options.maxWidth && E(window).width() > r.options.maxWidth ? v() && t || (T(), l.trigger("preUnfixed.ScrollToFixed"), b(), l.trigger("unfixed.ScrollToFixed")) : -1 == r.options.bottom ? 0 < i && n >= i - S() ? m() && t || (T(), l.trigger("preAbsolute.ScrollToFixed"), _(), l.trigger("unfixed.ScrollToFixed")) : n >= c - S() ? (g() && t || (T(), l.trigger("preFixed.ScrollToFixed"), y(), p = -1, l.trigger("fixed.ScrollToFixed")), w(e)) : v() && t || (T(), l.trigger("preUnfixed.ScrollToFixed"), b(), l.trigger("unfixed.ScrollToFixed")) : 0 < i ? n + E(window).height() - l.outerHeight(!0) >= i - (S() || -(r.options.bottom ? r.options.bottom : 0)) ? g() && (T(), l.trigger("preUnfixed.ScrollToFixed"), ("absolute" === s ? _ : b)(), l.trigger("unfixed.ScrollToFixed")) : (g() || (T(), l.trigger("preFixed.ScrollToFixed"), y()), w(e), l.trigger("fixed.ScrollToFixed")) : w(e))
            }

            function T() {
                var t = l.css("position");
                "absolute" == t ? l.trigger("postAbsolute.ScrollToFixed") : "fixed" == t ? l.trigger("postFixed.ScrollToFixed") : l.trigger("postUnfixed.ScrollToFixed")
            }

            function x(t) {
                l.is(":visible") && (a = !1, k())
            }

            function C(t) {
                window.requestAnimationFrame ? requestAnimationFrame(k) : k()
            }
            r.init = function() {
                r.options = E.extend({}, E.ScrollToFixed.defaultOptions, e), i = l.css("z-index"), r.$el.css("z-index", r.options.zIndex), d = E("<div />"), o = l.css("position"), s = l.css("position"), n = l.css("top"), v() && r.$el.after(d), E(window).bind("resize.ScrollToFixed", x), E(window).bind("scroll.ScrollToFixed", C), "ontouchmove" in window && E(window).bind("touchmove.ScrollToFixed", k), r.options.preFixed && l.bind("preFixed.ScrollToFixed", r.options.preFixed), r.options.postFixed && l.bind("postFixed.ScrollToFixed", r.options.postFixed), r.options.preUnfixed && l.bind("preUnfixed.ScrollToFixed", r.options.preUnfixed), r.options.postUnfixed && l.bind("postUnfixed.ScrollToFixed", r.options.postUnfixed), r.options.preAbsolute && l.bind("preAbsolute.ScrollToFixed", r.options.preAbsolute), r.options.postAbsolute && l.bind("postAbsolute.ScrollToFixed", r.options.postAbsolute), r.options.fixed && l.bind("fixed.ScrollToFixed", r.options.fixed), r.options.unfixed && l.bind("unfixed.ScrollToFixed", r.options.unfixed), r.options.spacerClass && d.addClass(r.options.spacerClass), l.bind("resize.ScrollToFixed", function() {
                    d.height(l.height())
                }), l.bind("scroll.ScrollToFixed", function() {
                    l.trigger("preUnfixed.ScrollToFixed"), b(), l.trigger("unfixed.ScrollToFixed"), k()
                }), l.bind("detach.ScrollToFixed", function(t) {
                    var e;
                    (e = (e = t) || window.event).preventDefault && e.preventDefault(), e.returnValue = !1, l.trigger("preUnfixed.ScrollToFixed"), b(), l.trigger("unfixed.ScrollToFixed"), E(window).unbind("resize.ScrollToFixed", x), E(window).unbind("scroll.ScrollToFixed", C), l.unbind(".ScrollToFixed"), d.remove(), r.$el.removeData("ScrollToFixed")
                }), x()
            }, r.init()
        }, E.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        }, E.fn.scrollToFixed = function(t) {
            return this.each(function() {
                new E.ScrollToFixed(this, t)
            })
        }
    }(jQuery), wpbingo.debounce = function(i, r, o) {
        var s;
        return function() {
            var t = this,
                e = arguments,
                n = o && !s;
            clearTimeout(s), s = setTimeout(function() {
                s = null, o || i.apply(t, e)
            }, r), n && i.apply(t, e)
        }
    };
var Handlebars = function() {
    var c = function() {
            "use strict";

            function t(t) {
                this.string = t
            }
            return t.prototype.toString = function() {
                return "" + this.string
            }, t
        }(),
        l = function() {
            "use strict";

            function e(t) {
                return i[t] || "&"
            }
            var t = {},
                n = c,
                i = {
                    "&": "&",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                r = /[&<>"'`]/g,
                o = /[&<>"'`]/;
            t.extend = function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            };
            var s, a = Object.prototype.toString;
            t.toString = a, (s = function(t) {
                return "function" == typeof t
            })(/x/) && (s = function(t) {
                return "function" == typeof t && "[object Function]" === a.call(t)
            }), t.isFunction = s;
            var l = Array.isArray || function(t) {
                return !(!t || "object" != typeof t) && "[object Array]" === a.call(t)
            };
            return t.isArray = l, t.escapeExpression = function(t) {
                return t instanceof n ? t.toString() : t || 0 === t ? (t = "" + t, o.test(t) ? t.replace(r, e) : t) : ""
            }, t.isEmpty = function(t) {
                return !t && 0 !== t || !(!l(t) || 0 !== t.length)
            }, t
        }(),
        p = function() {
            "use strict";

            function t(t, e) {
                var n;
                e && e.firstLine && (t += " - " + (n = e.firstLine) + ":" + e.firstColumn);
                for (var i = Error.prototype.constructor.call(this, t), r = 0; r < o.length; r++) this[o[r]] = i[o[r]];
                n && (this.lineNumber = n, this.column = e.firstColumn)
            }
            var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return t.prototype = new Error, t
        }(),
        u = function() {
            "use strict";

            function t(t, e) {
                var r;
                this.helpers = t || {}, this.partials = e || {}, (r = this).registerHelper("helperMissing", function(t) {
                    if (2 !== arguments.length) throw new o("Missing helper: '" + t + "'")
                }), r.registerHelper("blockHelperMissing", function(t, e) {
                    var n = e.inverse || function() {},
                        i = e.fn;
                    return u(t) && (t = t.call(this)), !0 === t ? i(this) : !1 === t || null == t ? n(this) : c(t) ? 0 < t.length ? r.helpers.each(t, e) : n(this) : i(t)
                }), r.registerHelper("each", function(t, e) {
                    var n, i = e.fn,
                        r = e.inverse,
                        o = 0,
                        s = "";
                    if (u(t) && (t = t.call(this)), e.data && (n = h(e.data)), t && "object" == typeof t)
                        if (c(t))
                            for (var a = t.length; o < a; o++) n && (n.index = o, n.first = 0 === o, n.last = o === t.length - 1), s += i(t[o], {
                                data: n
                            });
                        else
                            for (var l in t) t.hasOwnProperty(l) && (n && (n.key = l, n.index = o, n.first = 0 === o), s += i(t[l], {
                                data: n
                            }), o++);
                    return 0 === o && (s = r(this)), s
                }), r.registerHelper("if", function(t, e) {
                    return u(t) && (t = t.call(this)), !e.hash.includeZero && !t || i.isEmpty(t) ? e.inverse(this) : e.fn(this)
                }), r.registerHelper("unless", function(t, e) {
                    return r.helpers.if.call(this, t, {
                        fn: e.inverse,
                        inverse: e.fn,
                        hash: e.hash
                    })
                }), r.registerHelper("with", function(t, e) {
                    if (u(t) && (t = t.call(this)), !i.isEmpty(t)) return e.fn(t)
                }), r.registerHelper("log", function(t, e) {
                    var n = e.data && null != e.data.level ? parseInt(e.data.level, 10) : 1;
                    r.log(n, t)
                })
            }

            function e(t, e) {
                a.log(t, e)
            }
            var n = {},
                i = l,
                o = p;
            n.VERSION = "1.3.0", n.COMPILER_REVISION = 4, n.REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: ">= 1.0.0"
            };
            var c = i.isArray,
                u = i.isFunction,
                r = i.toString,
                s = "[object Object]";
            (n.HandlebarsEnvironment = t).prototype = {
                constructor: t,
                logger: a,
                log: e,
                registerHelper: function(t, e, n) {
                    if (r.call(t) === s) {
                        if (n || e) throw new o("Arg not supported with multiple helpers");
                        i.extend(this.helpers, t)
                    } else n && (e.not = n), this.helpers[t] = e
                },
                registerPartial: function(t, e) {
                    r.call(t) === s ? i.extend(this.partials, t) : this.partials[t] = e
                }
            };
            var a = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(t, e) {
                    var n;
                    a.level <= t && (n = a.methodMap[t], "undefined" != typeof console && console[n] && console[n].call(console, e))
                }
            };
            n.logger = a, n.log = e;
            var h = function(t) {
                var e = {};
                return i.extend(e, t), e
            };
            return n.createFrame = h, n
        }(),
        a = function() {
            "use strict";

            function r(t, n, i) {
                function e(t, e) {
                    return n(t, (e = e || {}).data || i)
                }
                return e.program = t, e.depth = 0, e
            }
            var t = {},
                i = l,
                c = p,
                o = u.COMPILER_REVISION,
                s = u.REVISION_CHANGES;
            return t.checkRevision = function(t) {
                var e = t && t[0] || 1;
                if (e !== o) {
                    if (e < o) {
                        var n = s[o],
                            i = s[e];
                        throw new c("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + i + ").")
                    }
                    throw new c("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                }
            }, t.template = function(s, l) {
                if (!l) throw new c("No environment passed to template");
                var a = {
                    escapeExpression: i.escapeExpression,
                    invokePartial: function(t, e, n, i, r, o) {
                        var s = l.VM.invokePartial.apply(this, arguments);
                        if (null != s) return s;
                        if (l.compile) {
                            var a = {
                                helpers: i,
                                partials: r,
                                data: o
                            };
                            return r[e] = l.compile(t, {
                                data: void 0 !== o
                            }, l), r[e](n, a)
                        }
                        throw new c("The partial " + e + " could not be compiled when running in runtime-only mode")
                    },
                    programs: [],
                    program: function(t, e, n) {
                        var i = this.programs[t];
                        return n ? r(t, e, n) : i || (this.programs[t] = r(t, e))
                    },
                    merge: function(t, e) {
                        var n = t || e;
                        return t && e && t !== e && (n = {}, i.extend(n, e), i.extend(n, t)), n
                    },
                    programWithDepth: l.VM.programWithDepth,
                    noop: l.VM.noop,
                    compilerInfo: null
                };
                return function(t, e) {
                    var n, i, r = (e = e || {}).partial ? e : l;
                    e.partial || (n = e.helpers, i = e.partials);
                    var o = s.call(a, r, t, n, i, e.data);
                    return e.partial || l.VM.checkRevision(a.compilerInfo), o
                }
            }, t.programWithDepth = function(t, n, i) {
                function e(t, e) {
                    return e = e || {}, n.apply(this, [t, e.data || i].concat(r))
                }
                var r = Array.prototype.slice.call(arguments, 3);
                return e.program = t, e.depth = r.length, e
            }, t.program = r, t.invokePartial = function(t, e, n, i, r, o) {
                var s = {
                    partial: !0,
                    helpers: i,
                    partials: r,
                    data: o
                };
                if (void 0 === t) throw new c("The partial " + e + " could not be found");
                if (t instanceof Function) return t(n, s)
            }, t.noop = function() {
                return ""
            }, t
        }(),
        d = function() {
            "use strict";

            function t() {
                var e = new n.HandlebarsEnvironment;
                return o.extend(e, n), e.SafeString = i, e.Exception = r, e.Utils = o, e.VM = s, e.template = function(t) {
                    return s.template(t, e)
                }, e
            }
            var n = u,
                i = c,
                r = p,
                o = l,
                s = a,
                e = t();
            return e.create = t, e
        }(),
        f = function() {
            "use strict";

            function l(t) {
                t = t || {}, this.firstLine = t.first_line, this.firstColumn = t.first_column, this.lastColumn = t.last_column, this.lastLine = t.last_line
            }
            var c = p,
                s = {
                    ProgramNode: function(t, e, n, i) {
                        var r, o;
                        3 === arguments.length ? (i = n, n = null) : 2 === arguments.length && (i = e, e = null), l.call(this, i), this.type = "program", this.statements = t, this.strip = {}, n ? ((o = n[0]) ? (r = {
                            first_line: o.firstLine,
                            last_line: o.lastLine,
                            last_column: o.lastColumn,
                            first_column: o.firstColumn
                        }, this.inverse = new s.ProgramNode(n, e, r)) : this.inverse = new s.ProgramNode(n, e), this.strip.right = e.left) : e && (this.strip.left = e.right)
                    },
                    MustacheNode: function(t, e, n, i, r) {
                        var o;
                        l.call(this, r), this.type = "mustache", this.strip = i, null != n && n.charAt ? (o = n.charAt(3) || n.charAt(2), this.escaped = "{" !== o && "&" !== o) : this.escaped = !!n, t instanceof s.SexprNode ? this.sexpr = t : this.sexpr = new s.SexprNode(t, e), this.sexpr.isRoot = !0, this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
                    },
                    SexprNode: function(t, e, n) {
                        l.call(this, n), this.type = "sexpr", this.hash = e;
                        var i = this.id = t[0],
                            r = this.params = t.slice(1),
                            o = this.eligibleHelper = i.isSimple;
                        this.isHelper = o && (r.length || e)
                    },
                    PartialNode: function(t, e, n, i) {
                        l.call(this, i), this.type = "partial", this.partialName = t, this.context = e, this.strip = n
                    },
                    BlockNode: function(t, e, n, i, r) {
                        if (l.call(this, r), t.sexpr.id.original !== i.path.original) throw new c(t.sexpr.id.original + " doesn't match " + i.path.original, this);
                        this.type = "block", this.mustache = t, this.program = e, this.inverse = n, this.strip = {
                            left: t.strip.left,
                            right: i.strip.right
                        }, (e || n).strip.left = t.strip.right, (n || e).strip.right = i.strip.left, n && !e && (this.isInverse = !0)
                    },
                    ContentNode: function(t, e) {
                        l.call(this, e), this.type = "content", this.string = t
                    },
                    HashNode: function(t, e) {
                        l.call(this, e), this.type = "hash", this.pairs = t
                    },
                    IdNode: function(t, e) {
                        l.call(this, e), this.type = "ID";
                        for (var n = "", i = [], r = 0, o = 0, s = t.length; o < s; o++) {
                            var a = t[o].part;
                            if (n += (t[o].separator || "") + a, ".." === a || "." === a || "this" === a) {
                                if (0 < i.length) throw new c("Invalid path: " + n, this);
                                ".." === a ? r++ : this.isScoped = !0
                            } else i.push(a)
                        }
                        this.original = n, this.parts = i, this.string = i.join("."), this.depth = r, this.isSimple = 1 === t.length && !this.isScoped && 0 === r, this.stringModeValue = this.string
                    },
                    PartialNameNode: function(t, e) {
                        l.call(this, e), this.type = "PARTIAL_NAME", this.name = t.original
                    },
                    DataNode: function(t, e) {
                        l.call(this, e), this.type = "DATA", this.id = t
                    },
                    StringNode: function(t, e) {
                        l.call(this, e), this.type = "STRING", this.original = this.string = this.stringModeValue = t
                    },
                    IntegerNode: function(t, e) {
                        l.call(this, e), this.type = "INTEGER", this.original = this.integer = t, this.stringModeValue = Number(t)
                    },
                    BooleanNode: function(t, e) {
                        l.call(this, e), this.type = "BOOLEAN", this.bool = t, this.stringModeValue = "true" === t
                    },
                    CommentNode: function(t, e) {
                        l.call(this, e), this.type = "comment", this.comment = t
                    }
                };
            return s
        }(),
        i = function() {
            "use strict";
            var t, e;

            function l(t, e) {
                return {
                    left: "~" === t.charAt(2),
                    right: "~" === e.charAt(0) || "~" === e.charAt(1)
                }
            }

            function n() {
                this.yy = {}
            }
            return e = {
                EOF: 1,
                parseError: function(t, e) {
                    if (!this.yy.parser) throw new Error(t);
                    this.yy.parser.parseError(t, e)
                },
                setInput: function(t) {
                    return this._input = t, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                },
                input: function() {
                    var t = this._input[0];
                    return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1] ++, this._input = this._input.slice(1), t
                },
                unput: function(t) {
                    var e = t.length,
                        n = t.split(/(?:\r\n?|\n)/g);
                    this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e - 1), this.offset -= e;
                    var i = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                    var r = this.yylloc.range;
                    return this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
                    }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]), this
                },
                more: function() {
                    return this._more = !0, this
                },
                less: function(t) {
                    this.unput(this.match.slice(t))
                },
                pastInput: function() {
                    var t = this.matched.substr(0, this.matched.length - this.match.length);
                    return (20 < t.length ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var t = this.match;
                    return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (20 < t.length ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var t = this.pastInput(),
                        e = new Array(t.length + 1).join("-");
                    return t + this.upcomingInput() + "\n" + e + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    var t, e, n, i, r;
                    this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                    for (var o = this._currentRules(), s = 0; s < o.length && (!(n = this._input.match(this.rules[o[s]])) || e && !(n[0].length > e[0].length) || (e = n, i = s, this.options.flex)); s++);
                    return e ? ((r = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += r.length), this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                    }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], t = this.performAction.call(this, this.yy, this, o[i], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), t || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function() {
                    var t = this.next();
                    return void 0 !== t ? t : this.lex()
                },
                begin: function(t) {
                    this.conditionStack.push(t)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(t) {
                    this.begin(t)
                },
                options: {},
                performAction: function(t, n, e, i) {
                    function r(t, e) {
                        return n.yytext = n.yytext.substr(t, n.yyleng - e)
                    }
                    switch (e) {
                        case 0:
                            if ("\\\\" === n.yytext.slice(-2) ? (r(0, 1), this.begin("mu")) : "\\" === n.yytext.slice(-1) ? (r(0, 1), this.begin("emu")) : this.begin("mu"), n.yytext) return 14;
                            break;
                        case 1:
                            return 14;
                        case 2:
                            return this.popState(), 14;
                        case 3:
                            return r(0, 4), this.popState(), 15;
                        case 4:
                            return 35;
                        case 5:
                            return 36;
                        case 6:
                            return 25;
                        case 7:
                            return 16;
                        case 8:
                            return 20;
                        case 9:
                        case 10:
                            return 19;
                        case 11:
                            return 23;
                        case 12:
                            return 22;
                        case 13:
                            this.popState(), this.begin("com");
                            break;
                        case 14:
                            return r(3, 5), this.popState(), 15;
                        case 15:
                            return 22;
                        case 16:
                            return 41;
                        case 17:
                        case 18:
                            return 40;
                        case 19:
                            return 44;
                        case 20:
                            break;
                        case 21:
                            return this.popState(), 24;
                        case 22:
                            return this.popState(), 18;
                        case 23:
                            return n.yytext = r(1, 2).replace(/\\"/g, '"'), 32;
                        case 24:
                            return n.yytext = r(1, 2).replace(/\\'/g, "'"), 32;
                        case 25:
                            return 42;
                        case 26:
                        case 27:
                            return 34;
                        case 28:
                            return 33;
                        case 29:
                            return 40;
                        case 30:
                            return n.yytext = r(1, 2), 40;
                        case 31:
                            return "INVALID";
                        case 32:
                            return 5
                    }
                },
                rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
                conditions: {
                    mu: {
                        rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                        inclusive: !(t = {
                            trace: function() {},
                            yy: {},
                            symbols_: {
                                error: 2,
                                root: 3,
                                statements: 4,
                                EOF: 5,
                                program: 6,
                                simpleInverse: 7,
                                statement: 8,
                                openInverse: 9,
                                closeBlock: 10,
                                openBlock: 11,
                                mustache: 12,
                                partial: 13,
                                CONTENT: 14,
                                COMMENT: 15,
                                OPEN_BLOCK: 16,
                                sexpr: 17,
                                CLOSE: 18,
                                OPEN_INVERSE: 19,
                                OPEN_ENDBLOCK: 20,
                                path: 21,
                                OPEN: 22,
                                OPEN_UNESCAPED: 23,
                                CLOSE_UNESCAPED: 24,
                                OPEN_PARTIAL: 25,
                                partialName: 26,
                                partial_option0: 27,
                                sexpr_repetition0: 28,
                                sexpr_option0: 29,
                                dataName: 30,
                                param: 31,
                                STRING: 32,
                                INTEGER: 33,
                                BOOLEAN: 34,
                                OPEN_SEXPR: 35,
                                CLOSE_SEXPR: 36,
                                hash: 37,
                                hash_repetition_plus0: 38,
                                hashSegment: 39,
                                ID: 40,
                                EQUALS: 41,
                                DATA: 42,
                                pathSegments: 43,
                                SEP: 44,
                                $accept: 0,
                                $end: 1
                            },
                            terminals_: {
                                2: "error",
                                5: "EOF",
                                14: "CONTENT",
                                15: "COMMENT",
                                16: "OPEN_BLOCK",
                                18: "CLOSE",
                                19: "OPEN_INVERSE",
                                20: "OPEN_ENDBLOCK",
                                22: "OPEN",
                                23: "OPEN_UNESCAPED",
                                24: "CLOSE_UNESCAPED",
                                25: "OPEN_PARTIAL",
                                32: "STRING",
                                33: "INTEGER",
                                34: "BOOLEAN",
                                35: "OPEN_SEXPR",
                                36: "CLOSE_SEXPR",
                                40: "ID",
                                41: "EQUALS",
                                42: "DATA",
                                44: "SEP"
                            },
                            productions_: [0, [3, 2],
                                [3, 1],
                                [6, 2],
                                [6, 3],
                                [6, 2],
                                [6, 1],
                                [6, 1],
                                [6, 0],
                                [4, 1],
                                [4, 2],
                                [8, 3],
                                [8, 3],
                                [8, 1],
                                [8, 1],
                                [8, 1],
                                [8, 1],
                                [11, 3],
                                [9, 3],
                                [10, 3],
                                [12, 3],
                                [12, 3],
                                [13, 4],
                                [7, 2],
                                [17, 3],
                                [17, 1],
                                [31, 1],
                                [31, 1],
                                [31, 1],
                                [31, 1],
                                [31, 1],
                                [31, 3],
                                [37, 1],
                                [39, 3],
                                [26, 1],
                                [26, 1],
                                [26, 1],
                                [30, 2],
                                [21, 1],
                                [43, 3],
                                [43, 1],
                                [27, 0],
                                [27, 1],
                                [28, 0],
                                [28, 2],
                                [29, 0],
                                [29, 1],
                                [38, 1],
                                [38, 2]
                            ],
                            performAction: function(t, e, n, i, r, o, s) {
                                var a = o.length - 1;
                                switch (r) {
                                    case 1:
                                        return new i.ProgramNode(o[a - 1], this._$);
                                    case 2:
                                        return new i.ProgramNode([], this._$);
                                    case 3:
                                        this.$ = new i.ProgramNode([], o[a - 1], o[a], this._$);
                                        break;
                                    case 4:
                                        this.$ = new i.ProgramNode(o[a - 2], o[a - 1], o[a], this._$);
                                        break;
                                    case 5:
                                        this.$ = new i.ProgramNode(o[a - 1], o[a], [], this._$);
                                        break;
                                    case 6:
                                        this.$ = new i.ProgramNode(o[a], this._$);
                                        break;
                                    case 7:
                                    case 8:
                                        this.$ = new i.ProgramNode([], this._$);
                                        break;
                                    case 9:
                                        this.$ = [o[a]];
                                        break;
                                    case 10:
                                        o[a - 1].push(o[a]), this.$ = o[a - 1];
                                        break;
                                    case 11:
                                        this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a], this._$);
                                        break;
                                    case 12:
                                        this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a], this._$);
                                        break;
                                    case 13:
                                    case 14:
                                        this.$ = o[a];
                                        break;
                                    case 15:
                                        this.$ = new i.ContentNode(o[a], this._$);
                                        break;
                                    case 16:
                                        this.$ = new i.CommentNode(o[a], this._$);
                                        break;
                                    case 17:
                                    case 18:
                                        this.$ = new i.MustacheNode(o[a - 1], null, o[a - 2], l(o[a - 2], o[a]), this._$);
                                        break;
                                    case 19:
                                        this.$ = {
                                            path: o[a - 1],
                                            strip: l(o[a - 2], o[a])
                                        };
                                        break;
                                    case 20:
                                    case 21:
                                        this.$ = new i.MustacheNode(o[a - 1], null, o[a - 2], l(o[a - 2], o[a]), this._$);
                                        break;
                                    case 22:
                                        this.$ = new i.PartialNode(o[a - 2], o[a - 1], l(o[a - 3], o[a]), this._$);
                                        break;
                                    case 23:
                                        this.$ = l(o[a - 1], o[a]);
                                        break;
                                    case 24:
                                        this.$ = new i.SexprNode([o[a - 2]].concat(o[a - 1]), o[a], this._$);
                                        break;
                                    case 25:
                                        this.$ = new i.SexprNode([o[a]], null, this._$);
                                        break;
                                    case 26:
                                        this.$ = o[a];
                                        break;
                                    case 27:
                                        this.$ = new i.StringNode(o[a], this._$);
                                        break;
                                    case 28:
                                        this.$ = new i.IntegerNode(o[a], this._$);
                                        break;
                                    case 29:
                                        this.$ = new i.BooleanNode(o[a], this._$);
                                        break;
                                    case 30:
                                        this.$ = o[a];
                                        break;
                                    case 31:
                                        o[a - 1].isHelper = !0, this.$ = o[a - 1];
                                        break;
                                    case 32:
                                        this.$ = new i.HashNode(o[a], this._$);
                                        break;
                                    case 33:
                                        this.$ = [o[a - 2], o[a]];
                                        break;
                                    case 34:
                                        this.$ = new i.PartialNameNode(o[a], this._$);
                                        break;
                                    case 35:
                                        this.$ = new i.PartialNameNode(new i.StringNode(o[a], this._$), this._$);
                                        break;
                                    case 36:
                                        this.$ = new i.PartialNameNode(new i.IntegerNode(o[a], this._$));
                                        break;
                                    case 37:
                                        this.$ = new i.DataNode(o[a], this._$);
                                        break;
                                    case 38:
                                        this.$ = new i.IdNode(o[a], this._$);
                                        break;
                                    case 39:
                                        o[a - 2].push({
                                            part: o[a],
                                            separator: o[a - 1]
                                        }), this.$ = o[a - 2];
                                        break;
                                    case 40:
                                        this.$ = [{
                                            part: o[a]
                                        }];
                                        break;
                                    case 43:
                                        this.$ = [];
                                        break;
                                    case 44:
                                        o[a - 1].push(o[a]);
                                        break;
                                    case 47:
                                        this.$ = [o[a]];
                                        break;
                                    case 48:
                                        o[a - 1].push(o[a])
                                }
                            },
                            table: [{
                                3: 1,
                                4: 2,
                                5: [1, 3],
                                8: 4,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 11],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                1: [3]
                            }, {
                                5: [1, 16],
                                8: 17,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 11],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                1: [2, 2]
                            }, {
                                5: [2, 9],
                                14: [2, 9],
                                15: [2, 9],
                                16: [2, 9],
                                19: [2, 9],
                                20: [2, 9],
                                22: [2, 9],
                                23: [2, 9],
                                25: [2, 9]
                            }, {
                                4: 20,
                                6: 18,
                                7: 19,
                                8: 4,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 21],
                                20: [2, 8],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                4: 20,
                                6: 22,
                                7: 19,
                                8: 4,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 21],
                                20: [2, 8],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                5: [2, 13],
                                14: [2, 13],
                                15: [2, 13],
                                16: [2, 13],
                                19: [2, 13],
                                20: [2, 13],
                                22: [2, 13],
                                23: [2, 13],
                                25: [2, 13]
                            }, {
                                5: [2, 14],
                                14: [2, 14],
                                15: [2, 14],
                                16: [2, 14],
                                19: [2, 14],
                                20: [2, 14],
                                22: [2, 14],
                                23: [2, 14],
                                25: [2, 14]
                            }, {
                                5: [2, 15],
                                14: [2, 15],
                                15: [2, 15],
                                16: [2, 15],
                                19: [2, 15],
                                20: [2, 15],
                                22: [2, 15],
                                23: [2, 15],
                                25: [2, 15]
                            }, {
                                5: [2, 16],
                                14: [2, 16],
                                15: [2, 16],
                                16: [2, 16],
                                19: [2, 16],
                                20: [2, 16],
                                22: [2, 16],
                                23: [2, 16],
                                25: [2, 16]
                            }, {
                                17: 23,
                                21: 24,
                                30: 25,
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                17: 29,
                                21: 24,
                                30: 25,
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                17: 30,
                                21: 24,
                                30: 25,
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                17: 31,
                                21: 24,
                                30: 25,
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                21: 33,
                                26: 32,
                                32: [1, 34],
                                33: [1, 35],
                                40: [1, 28],
                                43: 26
                            }, {
                                1: [2, 1]
                            }, {
                                5: [2, 10],
                                14: [2, 10],
                                15: [2, 10],
                                16: [2, 10],
                                19: [2, 10],
                                20: [2, 10],
                                22: [2, 10],
                                23: [2, 10],
                                25: [2, 10]
                            }, {
                                10: 36,
                                20: [1, 37]
                            }, {
                                4: 38,
                                8: 4,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 11],
                                20: [2, 7],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                7: 39,
                                8: 17,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 21],
                                20: [2, 6],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                17: 23,
                                18: [1, 40],
                                21: 24,
                                30: 25,
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                10: 41,
                                20: [1, 37]
                            }, {
                                18: [1, 42]
                            }, {
                                18: [2, 43],
                                24: [2, 43],
                                28: 43,
                                32: [2, 43],
                                33: [2, 43],
                                34: [2, 43],
                                35: [2, 43],
                                36: [2, 43],
                                40: [2, 43],
                                42: [2, 43]
                            }, {
                                18: [2, 25],
                                24: [2, 25],
                                36: [2, 25]
                            }, {
                                18: [2, 38],
                                24: [2, 38],
                                32: [2, 38],
                                33: [2, 38],
                                34: [2, 38],
                                35: [2, 38],
                                36: [2, 38],
                                40: [2, 38],
                                42: [2, 38],
                                44: [1, 44]
                            }, {
                                21: 45,
                                40: [1, 28],
                                43: 26
                            }, {
                                18: [2, 40],
                                24: [2, 40],
                                32: [2, 40],
                                33: [2, 40],
                                34: [2, 40],
                                35: [2, 40],
                                36: [2, 40],
                                40: [2, 40],
                                42: [2, 40],
                                44: [2, 40]
                            }, {
                                18: [1, 46]
                            }, {
                                18: [1, 47]
                            }, {
                                24: [1, 48]
                            }, {
                                18: [2, 41],
                                21: 50,
                                27: 49,
                                40: [1, 28],
                                43: 26
                            }, {
                                18: [2, 34],
                                40: [2, 34]
                            }, {
                                18: [2, 35],
                                40: [2, 35]
                            }, {
                                18: [2, 36],
                                40: [2, 36]
                            }, {
                                5: [2, 11],
                                14: [2, 11],
                                15: [2, 11],
                                16: [2, 11],
                                19: [2, 11],
                                20: [2, 11],
                                22: [2, 11],
                                23: [2, 11],
                                25: [2, 11]
                            }, {
                                21: 51,
                                40: [1, 28],
                                43: 26
                            }, {
                                8: 17,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 11],
                                20: [2, 3],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                4: 52,
                                8: 4,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 11],
                                20: [2, 5],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                14: [2, 23],
                                15: [2, 23],
                                16: [2, 23],
                                19: [2, 23],
                                20: [2, 23],
                                22: [2, 23],
                                23: [2, 23],
                                25: [2, 23]
                            }, {
                                5: [2, 12],
                                14: [2, 12],
                                15: [2, 12],
                                16: [2, 12],
                                19: [2, 12],
                                20: [2, 12],
                                22: [2, 12],
                                23: [2, 12],
                                25: [2, 12]
                            }, {
                                14: [2, 18],
                                15: [2, 18],
                                16: [2, 18],
                                19: [2, 18],
                                20: [2, 18],
                                22: [2, 18],
                                23: [2, 18],
                                25: [2, 18]
                            }, {
                                18: [2, 45],
                                21: 56,
                                24: [2, 45],
                                29: 53,
                                30: 60,
                                31: 54,
                                32: [1, 57],
                                33: [1, 58],
                                34: [1, 59],
                                35: [1, 61],
                                36: [2, 45],
                                37: 55,
                                38: 62,
                                39: 63,
                                40: [1, 64],
                                42: [1, 27],
                                43: 26
                            }, {
                                40: [1, 65]
                            }, {
                                18: [2, 37],
                                24: [2, 37],
                                32: [2, 37],
                                33: [2, 37],
                                34: [2, 37],
                                35: [2, 37],
                                36: [2, 37],
                                40: [2, 37],
                                42: [2, 37]
                            }, {
                                14: [2, 17],
                                15: [2, 17],
                                16: [2, 17],
                                19: [2, 17],
                                20: [2, 17],
                                22: [2, 17],
                                23: [2, 17],
                                25: [2, 17]
                            }, {
                                5: [2, 20],
                                14: [2, 20],
                                15: [2, 20],
                                16: [2, 20],
                                19: [2, 20],
                                20: [2, 20],
                                22: [2, 20],
                                23: [2, 20],
                                25: [2, 20]
                            }, {
                                5: [2, 21],
                                14: [2, 21],
                                15: [2, 21],
                                16: [2, 21],
                                19: [2, 21],
                                20: [2, 21],
                                22: [2, 21],
                                23: [2, 21],
                                25: [2, 21]
                            }, {
                                18: [1, 66]
                            }, {
                                18: [2, 42]
                            }, {
                                18: [1, 67]
                            }, {
                                8: 17,
                                9: 5,
                                11: 6,
                                12: 7,
                                13: 8,
                                14: [1, 9],
                                15: [1, 10],
                                16: [1, 12],
                                19: [1, 11],
                                20: [2, 4],
                                22: [1, 13],
                                23: [1, 14],
                                25: [1, 15]
                            }, {
                                18: [2, 24],
                                24: [2, 24],
                                36: [2, 24]
                            }, {
                                18: [2, 44],
                                24: [2, 44],
                                32: [2, 44],
                                33: [2, 44],
                                34: [2, 44],
                                35: [2, 44],
                                36: [2, 44],
                                40: [2, 44],
                                42: [2, 44]
                            }, {
                                18: [2, 46],
                                24: [2, 46],
                                36: [2, 46]
                            }, {
                                18: [2, 26],
                                24: [2, 26],
                                32: [2, 26],
                                33: [2, 26],
                                34: [2, 26],
                                35: [2, 26],
                                36: [2, 26],
                                40: [2, 26],
                                42: [2, 26]
                            }, {
                                18: [2, 27],
                                24: [2, 27],
                                32: [2, 27],
                                33: [2, 27],
                                34: [2, 27],
                                35: [2, 27],
                                36: [2, 27],
                                40: [2, 27],
                                42: [2, 27]
                            }, {
                                18: [2, 28],
                                24: [2, 28],
                                32: [2, 28],
                                33: [2, 28],
                                34: [2, 28],
                                35: [2, 28],
                                36: [2, 28],
                                40: [2, 28],
                                42: [2, 28]
                            }, {
                                18: [2, 29],
                                24: [2, 29],
                                32: [2, 29],
                                33: [2, 29],
                                34: [2, 29],
                                35: [2, 29],
                                36: [2, 29],
                                40: [2, 29],
                                42: [2, 29]
                            }, {
                                18: [2, 30],
                                24: [2, 30],
                                32: [2, 30],
                                33: [2, 30],
                                34: [2, 30],
                                35: [2, 30],
                                36: [2, 30],
                                40: [2, 30],
                                42: [2, 30]
                            }, {
                                17: 68,
                                21: 24,
                                30: 25,
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                18: [2, 32],
                                24: [2, 32],
                                36: [2, 32],
                                39: 69,
                                40: [1, 70]
                            }, {
                                18: [2, 47],
                                24: [2, 47],
                                36: [2, 47],
                                40: [2, 47]
                            }, {
                                18: [2, 40],
                                24: [2, 40],
                                32: [2, 40],
                                33: [2, 40],
                                34: [2, 40],
                                35: [2, 40],
                                36: [2, 40],
                                40: [2, 40],
                                41: [1, 71],
                                42: [2, 40],
                                44: [2, 40]
                            }, {
                                18: [2, 39],
                                24: [2, 39],
                                32: [2, 39],
                                33: [2, 39],
                                34: [2, 39],
                                35: [2, 39],
                                36: [2, 39],
                                40: [2, 39],
                                42: [2, 39],
                                44: [2, 39]
                            }, {
                                5: [2, 22],
                                14: [2, 22],
                                15: [2, 22],
                                16: [2, 22],
                                19: [2, 22],
                                20: [2, 22],
                                22: [2, 22],
                                23: [2, 22],
                                25: [2, 22]
                            }, {
                                5: [2, 19],
                                14: [2, 19],
                                15: [2, 19],
                                16: [2, 19],
                                19: [2, 19],
                                20: [2, 19],
                                22: [2, 19],
                                23: [2, 19],
                                25: [2, 19]
                            }, {
                                36: [1, 72]
                            }, {
                                18: [2, 48],
                                24: [2, 48],
                                36: [2, 48],
                                40: [2, 48]
                            }, {
                                41: [1, 71]
                            }, {
                                21: 56,
                                30: 60,
                                31: 73,
                                32: [1, 57],
                                33: [1, 58],
                                34: [1, 59],
                                35: [1, 61],
                                40: [1, 28],
                                42: [1, 27],
                                43: 26
                            }, {
                                18: [2, 31],
                                24: [2, 31],
                                32: [2, 31],
                                33: [2, 31],
                                34: [2, 31],
                                35: [2, 31],
                                36: [2, 31],
                                40: [2, 31],
                                42: [2, 31]
                            }, {
                                18: [2, 33],
                                24: [2, 33],
                                36: [2, 33],
                                40: [2, 33]
                            }],
                            defaultActions: {
                                3: [2, 2],
                                16: [2, 1],
                                50: [2, 42]
                            },
                            parseError: function(t, e) {
                                throw new Error(t)
                            },
                            parse: function(t) {
                                var e = [0],
                                    n = [null],
                                    i = [],
                                    r = this.table,
                                    o = "",
                                    s = 0,
                                    a = 0,
                                    l = 0;
                                this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, void 0 === (this.yy.parser = this).lexer.yylloc && (this.lexer.yylloc = {});
                                var c = this.lexer.yylloc;
                                i.push(c);
                                var u = this.lexer.options && this.lexer.options.ranges;
                                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                                for (var h, p, d, f, g, m, v, y, _, b, w = {};;) {
                                    if (d = e[e.length - 1], void 0 === (f = this.defaultActions[d] ? this.defaultActions[d] : (null == h && (b = void 0, "number" != typeof(b = this.lexer.lex() || 1) && (b = this.symbols_[b] || b), h = b), r[d] && r[d][h])) || !f.length || !f[0]) {
                                        var S = "";
                                        if (!l) {
                                            for (m in _ = [], r[d]) this.terminals_[m] && 2 < m && _.push("'" + this.terminals_[m] + "'");
                                            S = this.lexer.showPosition ? "Parse error on line " + (s + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + _.join(", ") + ", got '" + (this.terminals_[h] || h) + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (1 == h ? "end of input" : "'" + (this.terminals_[h] || h) + "'"), this.parseError(S, {
                                                text: this.lexer.match,
                                                token: this.terminals_[h] || h,
                                                line: this.lexer.yylineno,
                                                loc: c,
                                                expected: _
                                            })
                                        }
                                    }
                                    if (f[0] instanceof Array && 1 < f.length) throw new Error("Parse Error: multiple actions possible at state: " + d + ", token: " + h);
                                    switch (f[0]) {
                                        case 1:
                                            e.push(h), n.push(this.lexer.yytext), i.push(this.lexer.yylloc), e.push(f[1]), h = null, p ? (h = p, p = null) : (a = this.lexer.yyleng, o = this.lexer.yytext, s = this.lexer.yylineno, c = this.lexer.yylloc, 0 < l && l--);
                                            break;
                                        case 2:
                                            if (v = this.productions_[f[1]][1], w.$ = n[n.length - v], w._$ = {
                                                    first_line: i[i.length - (v || 1)].first_line,
                                                    last_line: i[i.length - 1].last_line,
                                                    first_column: i[i.length - (v || 1)].first_column,
                                                    last_column: i[i.length - 1].last_column
                                                }, u && (w._$.range = [i[i.length - (v || 1)].range[0], i[i.length - 1].range[1]]), void 0 !== (g = this.performAction.call(w, o, a, s, this.yy, f[1], n, i))) return g;
                                            v && (e = e.slice(0, -1 * v * 2), n = n.slice(0, -1 * v), i = i.slice(0, -1 * v)), e.push(this.productions_[f[1]][0]), n.push(w.$), i.push(w._$), y = r[e[e.length - 2]][e[e.length - 1]], e.push(y);
                                            break;
                                        case 3:
                                            return !0
                                    }
                                }
                                return !0
                            }
                        })
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [3],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 32],
                        inclusive: !0
                    }
                }
            }, t.lexer = e, new((n.prototype = t).Parser = n)
        }();
    return function(t, e, n) {
        "use strict";

        function i() {
            var n = p();
            return n.compile = function(t, e) {
                return c(t, e, n)
            }, n.precompile = function(t, e) {
                return u(t, e, n)
            }, n.AST = o, n.Compiler = l, n.JavaScriptCompiler = h, n.Parser = s, n.parse = a, n
        }
        var r = d,
            o = f,
            s = t.parser,
            a = t.parse,
            l = e.Compiler,
            c = e.compile,
            u = e.precompile,
            h = n,
            p = r.create;
        return (r = i()).create = i, r
    }(function() {
        "use strict";
        var t = {},
            e = i,
            n = f;
        return t.parser = e, t.parse = function(t) {
            return t.constructor === n.ProgramNode ? t : (e.yy = n, e.parse(t))
        }, t
    }(), function() {
        "use strict";

        function t() {}
        var e = {},
            c = p;
        return (e.Compiler = t).prototype = {
            compiler: t,
            disassemble: function() {
                for (var t, e, n, i = this.opcodes, r = [], o = 0, s = i.length; o < s; o++)
                    if ("DECLARE" === (t = i[o]).opcode) r.push("DECLARE " + t.name + "=" + t.value);
                    else {
                        e = [];
                        for (var a = 0; a < t.args.length; a++) "string" == typeof(n = t.args[a]) && (n = '"' + n.replace("\n", "\\n") + '"'), e.push(n);
                        r.push(t.opcode + " " + e.join(" "))
                    }
                return r.join("\n")
            },
            equals: function(t) {
                var e = this.opcodes.length;
                if (t.opcodes.length !== e) return !1;
                for (var n = 0; n < e; n++) {
                    var i = this.opcodes[n],
                        r = t.opcodes[n];
                    if (i.opcode !== r.opcode || i.args.length !== r.args.length) return !1;
                    for (var o = 0; o < i.args.length; o++)
                        if (i.args[o] !== r.args[o]) return !1
                }
                if (e = this.children.length, t.children.length !== e) return !1;
                for (n = 0; n < e; n++)
                    if (!this.children[n].equals(t.children[n])) return !1;
                return !0
            },
            guid: 0,
            compile: function(t, e) {
                this.opcodes = [], this.children = [], this.depths = {
                    list: []
                }, this.options = e;
                var n = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        if: !0,
                        unless: !0,
                        with: !0,
                        log: !0
                    }, n)
                    for (var i in n) this.options.knownHelpers[i] = n[i];
                return this.accept(t)
            },
            accept: function(t) {
                var e, n = t.strip || {};
                return n.left && this.opcode("strip"), e = this[t.type](t), n.right && this.opcode("strip"), e
            },
            program: function(t) {
                for (var e = t.statements, n = 0, i = e.length; n < i; n++) this.accept(e[n]);
                return this.isSimple = 1 === i, this.depths.list = this.depths.list.sort(function(t, e) {
                    return t - e
                }), this
            },
            compileProgram: function(t) {
                var e, n = (new this.compiler).compile(t, this.options),
                    i = this.guid++;
                this.usePartial = this.usePartial || n.usePartial;
                for (var r = 0, o = (this.children[i] = n).depths.list.length; r < o; r++)(e = n.depths.list[r]) < 2 || this.addDepth(e - 1);
                return i
            },
            block: function(t) {
                var e = t.mustache,
                    n = t.program,
                    i = t.inverse,
                    n = n && this.compileProgram(n),
                    i = i && this.compileProgram(i),
                    r = e.sexpr,
                    o = this.classifySexpr(r);
                "helper" === o ? this.helperSexpr(r, n, i) : "simple" === o ? (this.simpleSexpr(r), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousSexpr(r, n, i), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            },
            hash: function(t) {
                var e, n, i = t.pairs;
                this.opcode("pushHash");
                for (var r = 0, o = i.length; r < o; r++) n = (e = i[r])[1], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.stringModeValue, n.type), "sexpr" === n.type && this.sexpr(n)) : this.accept(n), this.opcode("assignToHash", e[0]);
                this.opcode("popHash")
            },
            partial: function(t) {
                var e = t.partialName;
                this.usePartial = !0, t.context ? this.ID(t.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", e.name), this.opcode("append")
            },
            content: function(t) {
                this.opcode("appendContent", t.string)
            },
            mustache: function(t) {
                this.sexpr(t.sexpr), t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ambiguousSexpr: function(t, e, n) {
                var i = t.id,
                    r = i.parts[0],
                    o = null != e || null != n;
                this.opcode("getContext", i.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", r, o)
            },
            simpleSexpr: function(t) {
                var e = t.id;
                "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(t, e, n) {
                var i = this.setupFullMustacheParams(t, e, n),
                    r = t.id.parts[0];
                if (this.options.knownHelpers[r]) this.opcode("invokeKnownHelper", i.length, r);
                else {
                    if (this.options.knownHelpersOnly) throw new c("You specified knownHelpersOnly, but used the unknown helper " + r, t);
                    this.opcode("invokeHelper", i.length, r, t.isRoot)
                }
            },
            sexpr: function(t) {
                var e = this.classifySexpr(t);
                "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
            },
            ID: function(t) {
                this.addDepth(t.depth), this.opcode("getContext", t.depth), t.parts[0] ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
                for (var e = 1, n = t.parts.length; e < n; e++) this.opcode("lookup", t.parts[e])
            },
            DATA: function(t) {
                if (this.options.data = !0, t.id.isScoped || t.id.depth) throw new c("Scoped data references are not supported: " + t.original, t);
                this.opcode("lookupData");
                for (var e = t.id.parts, n = 0, i = e.length; n < i; n++) this.opcode("lookup", e[n])
            },
            STRING: function(t) {
                this.opcode("pushString", t.string)
            },
            INTEGER: function(t) {
                this.opcode("pushLiteral", t.integer)
            },
            BOOLEAN: function(t) {
                this.opcode("pushLiteral", t.bool)
            },
            comment: function() {},
            opcode: function(t) {
                this.opcodes.push({
                    opcode: t,
                    args: [].slice.call(arguments, 1)
                })
            },
            declare: function(t, e) {
                this.opcodes.push({
                    opcode: "DECLARE",
                    name: t,
                    value: e
                })
            },
            addDepth: function(t) {
                0 !== t && (this.depths[t] || (this.depths[t] = !0, this.depths.list.push(t)))
            },
            classifySexpr: function(t) {
                var e, n = t.isHelper,
                    i = t.eligibleHelper,
                    r = this.options;
                return i && !n && (e = t.id.parts[0], r.knownHelpers[e] ? n = !0 : r.knownHelpersOnly && (i = !1)), n ? "helper" : i ? "ambiguous" : "simple"
            },
            pushParams: function(t) {
                for (var e, n = t.length; n--;) e = t[n], this.options.stringParams ? (e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.stringModeValue, e.type), "sexpr" === e.type && this.sexpr(e)) : this[e.type](e)
            },
            setupFullMustacheParams: function(t, e, n) {
                var i = t.params;
                return this.pushParams(i), this.opcode("pushProgram", e), this.opcode("pushProgram", n), t.hash ? this.hash(t.hash) : this.opcode("emptyHash"), i
            }
        }, e.precompile = function(t, e, n) {
            if (null == t || "string" != typeof t && t.constructor !== n.AST.ProgramNode) throw new c("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
            "data" in (e = e || {}) || (e.data = !0);
            var i = n.parse(t),
                r = (new n.Compiler).compile(i, e);
            return (new n.JavaScriptCompiler).compile(r, e)
        }, e.compile = function(o, s, a) {
            if (null == o || "string" != typeof o && o.constructor !== a.AST.ProgramNode) throw new c("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + o);
            var l;
            return "data" in (s = s || {}) || (s.data = !0),
                function(t, e) {
                    return (l = l || (n = a.parse(o), i = (new a.Compiler).compile(n, s), r = (new a.JavaScriptCompiler).compile(i, s, void 0, !0), a.template(r))).call(this, t, e);
                    var n, i, r
                }
        }, e
    }(), function() {
        "use strict";

        function c(t) {
            this.value = t
        }

        function r() {}
        var t = u.COMPILER_REVISION,
            e = u.REVISION_CHANGES,
            l = u.log,
            a = p;
        r.prototype = {
            nameLookup: function(t, e) {
                var n, i;
                return 0 === t.indexOf("depth") && (n = !0), i = /^[0-9]+$/.test(e) ? t + "[" + e + "]" : r.isValidJavaScriptVariableName(e) ? t + "." + e : t + "['" + e + "']", n ? "(" + t + " && " + i + ")" : i
            },
            compilerInfo: function() {
                return "this.compilerInfo = [" + t + ",'" + e[t] + "'];\n"
            },
            appendToBuffer: function(t) {
                return this.environment.isSimple ? "return " + t + ";" : {
                    appendToBuffer: !0,
                    content: t,
                    toString: function() {
                        return "buffer += " + t + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(t, e, n, i) {
                this.environment = t, this.options = e || {}, l("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    programs: [],
                    environments: [],
                    aliases: {}
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                    list: []
                }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(t, e);
                var r, o = t.opcodes;
                this.i = 0;
                for (var s = o.length; this.i < s; this.i++) "DECLARE" === (r = o[this.i]).opcode ? this[r.name] = r.value : this[r.opcode].apply(this, r.args), r.opcode !== this.stripNext && (this.stripNext = !1);
                if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new a("Compile completed with content left on stack");
                return this.createFunctionContext(i)
            },
            preamble: function() {
                var t, e, n = [];
                this.isChild ? n.push("") : (e = "helpers = this.merge(helpers, " + (t = this.namespace) + ".helpers);", this.environment.usePartial && (e = e + " partials = this.merge(partials, " + t + ".partials);"), this.options.data && (e += " data = data || {};"), n.push(e)), this.environment.isSimple ? n.push("") : n.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = n
            },
            createFunctionContext: function(t) {
                var e = this.stackVars.concat(this.registers.list);
                if (0 < e.length && (this.source[1] = this.source[1] + ", " + e.join(", ")), !this.isChild)
                    for (var n in this.context.aliases) this.context.aliases.hasOwnProperty(n) && (this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n]);
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;");
                for (var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], r = 0, o = this.environment.depths.list.length; r < o; r++) i.push("depth" + this.environment.depths.list[r]);
                var s = this.mergeSource();
                if (this.isChild || (s = this.compilerInfo() + s), t) return i.push(s), Function.apply(this, i);
                var a = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + s + "}";
                return l("debug", a + "\n\n"), a
            },
            mergeSource: function() {
                for (var t, e = "", n = 0, i = this.source.length; n < i; n++) {
                    var r = this.source[n];
                    r.appendToBuffer ? t = t ? t + "\n    + " + r.content : r.content : (t && (e += "buffer += " + t + ";\n  ", t = void 0), e += r + "\n  ")
                }
                return e
            },
            blockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = ["depth0"];
                this.setupParams(0, e), this.replaceStack(function(t) {
                    return e.splice(1, 0, t), "blockHelperMissing.call(" + e.join(", ") + ")"
                })
            },
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var t = ["depth0"];
                this.setupParams(0, t);
                var e = this.topStack();
                t.splice(1, 0, e), this.pushSource("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
            },
            appendContent: function(t) {
                this.pendingContent && (t = this.pendingContent + t), this.stripNext && (t = t.replace(/^\s+/, "")), this.pendingContent = t
            },
            strip: function() {
                this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip"
            },
            append: function() {
                this.flushInline();
                var t = this.popStack();
                this.pushSource("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(t) {
                this.lastContext !== t && (this.lastContext = t)
            },
            lookupOnContext: function(t) {
                this.push(this.nameLookup("depth" + this.lastContext, t, "context"))
            },
            pushContext: function() {
                this.pushStackLiteral("depth" + this.lastContext)
            },
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"', this.replaceStack(function(t) {
                    return "typeof " + t + " === functionType ? " + t + ".apply(depth0) : " + t
                })
            },
            lookup: function(e) {
                this.replaceStack(function(t) {
                    return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
                })
            },
            lookupData: function() {
                this.pushStackLiteral("data")
            },
            pushStringParam: function(t, e) {
                this.pushStackLiteral("depth" + this.lastContext), this.pushString(e), "sexpr" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"), this.options.stringParams && (this.push("{}"), this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash), this.hash = {
                    values: [],
                    types: [],
                    contexts: []
                }
            },
            popHash: function() {
                var t = this.hash;
                this.hash = this.hashes.pop(), this.options.stringParams && (this.push("{" + t.contexts.join(",") + "}"), this.push("{" + t.types.join(",") + "}")), this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
            },
            pushString: function(t) {
                this.pushStackLiteral(this.quotedString(t))
            },
            push: function(t) {
                return this.inlineStack.push(t), t
            },
            pushLiteral: function(t) {
                this.pushStackLiteral(t)
            },
            pushProgram: function(t) {
                null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
            },
            invokeHelper: function(t, e, n) {
                this.context.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                var i = this.lastHelper = this.setupHelper(t, e, !0),
                    r = this.nameLookup("depth" + this.lastContext, e, "context"),
                    o = "helper = " + i.name + " || " + r;
                i.paramsInit && (o += "," + i.paramsInit), this.push("(" + o + ",helper ? helper.call(" + i.callParams + ") : helperMissing.call(" + i.helperMissingParams + "))"), n || this.flushInline()
            },
            invokeKnownHelper: function(t, e) {
                var n = this.setupHelper(t, e);
                this.push(n.name + ".call(" + n.callParams + ")")
            },
            invokeAmbiguous: function(t, e) {
                this.context.aliases.functionType = '"function"', this.useRegister("helper"), this.emptyHash();
                var n = this.setupHelper(0, t, e),
                    i = this.lastHelper = this.nameLookup("helpers", t, "helper"),
                    r = this.nameLookup("depth" + this.lastContext, t, "context"),
                    o = this.nextStack();
                n.paramsInit && this.pushSource(n.paramsInit), this.pushSource("if (helper = " + i + ") { " + o + " = helper.call(" + n.callParams + "); }"), this.pushSource("else { helper = " + r + "; " + o + " = typeof helper === functionType ? helper.call(" + n.callParams + ") : helper; }")
            },
            invokePartial: function(t) {
                var e = [this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), "helpers", "partials"];
                this.options.data && e.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + e.join(", ") + ")")
            },
            assignToHash: function(t) {
                var e, n, i = this.popStack();
                this.options.stringParams && (n = this.popStack(), e = this.popStack());
                var r = this.hash;
                e && r.contexts.push("'" + t + "': " + e), n && r.types.push("'" + t + "': " + n), r.values.push("'" + t + "': (" + i + ")")
            },
            compiler: r,
            compileChildren: function(t, e) {
                for (var n, i, r = t.children, o = 0, s = r.length; o < s; o++) {
                    n = r[o], i = new this.compiler;
                    var a = this.matchExistingProgram(n);
                    null == a ? (this.context.programs.push(""), a = this.context.programs.length, n.index = a, n.name = "program" + a, this.context.programs[a] = i.compile(n, e, this.context), this.context.environments[a] = n) : (n.index = a, n.name = "program" + a)
                }
            },
            matchExistingProgram: function(t) {
                for (var e = 0, n = this.context.environments.length; e < n; e++) {
                    var i = this.context.environments[e];
                    if (i && i.equals(t)) return e
                }
            },
            programExpression: function(t) {
                if (this.context.aliases.self = "this", null == t) return "self.noop";
                for (var e, n = this.environment.children[t], i = n.depths.list, r = [n.index, n.name, "data"], o = 0, s = i.length; o < s; o++) 1 === (e = i[o]) ? r.push("depth0") : r.push("depth" + (e - 1));
                return (0 === i.length ? "self.program(" : "self.programWithDepth(") + r.join(", ") + ")"
            },
            register: function(t, e) {
                this.useRegister(t), this.pushSource(t + " = " + e + ";")
            },
            useRegister: function(t) {
                this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
            },
            pushStackLiteral: function(t) {
                return this.push(new c(t))
            },
            pushSource: function(t) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), t && this.source.push(t)
            },
            pushStack: function(t) {
                this.flushInline();
                var e = this.incrStack();
                return t && this.pushSource(e + " = " + t + ";"), this.compileStack.push(e), e
            },
            replaceStack: function(t) {
                var e, n, i, r, o, s = "",
                    a = this.isInline();
                a ? (i = this.popStack(!0)) instanceof c ? (o = i.value, n = !0) : (r = (e = !this.stackSlot) ? this.incrStack() : this.topStackName(), s = "(" + this.push(r) + " = " + i + "),", o = this.topStack()) : o = this.topStack();
                var l = t.call(this, o);
                return a ? (n || this.popStack(), e && this.stackSlot--, this.push("(" + s + l + ")")) : (/^stack/.test(o) || (o = this.nextStack()), this.pushSource(o + " = (" + s + l + ");")), o
            },
            nextStack: function() {
                return this.pushStack()
            },
            incrStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var t = this.inlineStack;
                if (t.length) {
                    this.inlineStack = [];
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e];
                        i instanceof c ? this.compileStack.push(i) : this.pushStack(i)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(t) {
                var e = this.isInline(),
                    n = (e ? this.inlineStack : this.compileStack).pop();
                if (!t && n instanceof c) return n.value;
                if (!e) {
                    if (!this.stackSlot) throw new a("Invalid stack pop");
                    this.stackSlot--
                }
                return n
            },
            topStack: function(t) {
                var e = this.isInline() ? this.inlineStack : this.compileStack,
                    n = e[e.length - 1];
                return !t && n instanceof c ? n.value : n
            },
            quotedString: function(t) {
                return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            setupHelper: function(t, e, n) {
                var i = [];
                return {
                    params: i,
                    paramsInit: this.setupParams(t, i, n),
                    name: this.nameLookup("helpers", e, "helper"),
                    callParams: ["depth0"].concat(i).join(", "),
                    helperMissingParams: n && ["depth0", this.quotedString(e)].concat(i).join(", ")
                }
            },
            setupOptions: function(t, e) {
                var n, i, r, o = [],
                    s = [],
                    a = [];
                o.push("hash:" + this.popStack()), this.options.stringParams && (o.push("hashTypes:" + this.popStack()), o.push("hashContexts:" + this.popStack())), i = this.popStack(), ((r = this.popStack()) || i) && (r || (this.context.aliases.self = "this", r = "self.noop"), i || (this.context.aliases.self = "this", i = "self.noop"), o.push("inverse:" + i), o.push("fn:" + r));
                for (var l = 0; l < t; l++) n = this.popStack(), e.push(n), this.options.stringParams && (a.push(this.popStack()), s.push(this.popStack()));
                return this.options.stringParams && (o.push("contexts:[" + s.join(",") + "]"), o.push("types:[" + a.join(",") + "]")), this.options.data && o.push("data:data"), o
            },
            setupParams: function(t, e, n) {
                var i = "{" + this.setupOptions(t, e).join(",") + "}";
                return n ? (this.useRegister("options"), e.push("options"), "options=" + i) : (e.push(i), "")
            }
        };
        for (var n = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), i = r.RESERVED_WORDS = {}, o = 0, s = n.length; o < s; o++) i[n[o]] = !0;
        return r.isValidJavaScriptVariableName = function(t) {
            return !(r.RESERVED_WORDS[t] || !/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t))
        }, r
    }())
}();

function onYouTubeIframeAPIReady() {
    wpbingo.ProductVideo.loadVideos(wpbingo.ProductVideo.hosts.youtube)
}
window.wpbingo = window.wpbingo || {}, wpbingo.Sections = function() {
    this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
}, wpbingo.Sections.prototype = _.assignIn({}, wpbingo.Sections.prototype, {
    _createInstance: function(e, t) {
        var i, a = $(e),
            o = a.attr("data-section-id"),
            n = a.attr("data-section-type");
        t = t || this.constructors[n], _.isUndefined(t) || (i = _.assignIn(new t(e), {
            id: o,
            type: n,
            container: e
        }), this.instances.push(i))
    },
    _onSectionLoad: function(e) {
        var t = $("[data-section-id]", e.target)[0];
        t && this._createInstance(t)
    },
    _onSectionUnload: function(i) {
        this.instances = _.filter(this.instances, function(e) {
            var t = e.id === i.originalEvent.detail.sectionId;
            return t && _.isFunction(e.onUnload) && e.onUnload(i), !t
        })
    },
    _onSelect: function(t) {
        var e = _.find(this.instances, function(e) {
            return e.id === t.originalEvent.detail.sectionId
        });
        !_.isUndefined(e) && _.isFunction(e.onSelect) && e.onSelect(t)
    },
    _onDeselect: function(t) {
        var e = _.find(this.instances, function(e) {
            return e.id === t.originalEvent.detail.sectionId
        });
        !_.isUndefined(e) && _.isFunction(e.onDeselect) && e.onDeselect(t)
    },
    _onBlockSelect: function(t) {
        var e = _.find(this.instances, function(e) {
            return e.id === t.originalEvent.detail.sectionId
        });
        !_.isUndefined(e) && _.isFunction(e.onBlockSelect) && e.onBlockSelect(t)
    },
    _onBlockDeselect: function(t) {
        var e = _.find(this.instances, function(e) {
            return e.id === t.originalEvent.detail.sectionId
        });
        !_.isUndefined(e) && _.isFunction(e.onBlockDeselect) && e.onBlockDeselect(t)
    },
    register: function(e, i) {
        this.constructors[e] = i, $("[data-section-type=" + e + "]").each(function(e, t) {
            this._createInstance(t, i)
        }.bind(this))
    }
}), wpbingo.LibraryLoader = function() {
    var u = "link",
        p = "script",
        h = {
            requested: "requested",
            loaded: "loaded"
        },
        e = "https://cdn.shopify.com/shopifycloud/",
        f = {
            youtubeSdk: {
                tagId: "youtube-sdk",
                src: "https://www.youtube.com/iframe_api",
                type: p
            },
            plyrShopifyStyles: {
                tagId: "plyr-shopify-styles",
                src: e + "shopify-plyr/v1.0/shopify-plyr.css",
                type: u
            },
            modelViewerUiStyles: {
                tagId: "shopify-model-viewer-ui-styles",
                src: e + "model-viewer-ui/assets/v1.0/model-viewer-ui.css",
                type: u
            }
        };
    return {
        load: function(e, t) {
            var i, a, o, n, s, r, c, l = f[e];
            if (l && l.status !== h.requested)
                if (t = t || function() {}, l.status !== h.loaded) {
                    switch (l.status = h.requested, l.type) {
                        case p:
                            s = l, r = t, (c = document.createElement("script")).src = s.src, c.addEventListener("load", function() {
                                s.status = h.loaded, r()
                            }), i = c;
                            break;
                        case u:
                            a = l, o = t, (n = document.createElement("link")).href = a.src, n.rel = "stylesheet", n.type = "text/css", n.addEventListener("load", function() {
                                a.status = h.loaded, o()
                            }), i = n
                    }
                    i.id = l.tagId, l.element = i;
                    var d = document.getElementsByTagName(l.type)[0];
                    d.parentNode.insertBefore(i, d)
                } else t()
        }
    }
}(), wpbingo.Disclosure = function() {
    var e = "[data-disclosure-input]",
        t = "[data-disclosure-option]";

    function i(e) {
        this.$container = e, this.cache = {}, this._cacheSelectors(), this._connectOptions()
    }
    return i.prototype = _.assignIn({}, i.prototype, {
        _cacheSelectors: function() {
            this.cache = {
                $disclosureInput: this.$container.find(e),
                $disclosureOptions: this.$container.find(t)
            }
        },
        _connectOptions: function() {
            this.cache.$disclosureOptions.on("click", function(e) {
                e.preventDefault(), this._submitForm($(e.currentTarget).data("value"))
            }.bind(this))
        },
        _submitForm: function(e) {
            this.cache.$disclosureInput.val(e), this.$container.parents("form").submit()
        },
        unload: function() {
            this.cache.$disclosureOptions.off(), this.$container.off()
        }
    }), i
}(), wpbingo.Currency = {
    formatMoney: function(e, t) {
        "string" == typeof e && (e = e.replace(".", ""));
        var i = "",
            a = /\{\{\s*(\w+)\s*\}\}/,
            o = t || "${{amount}}";

        function n(e, t, i, a) {
            if (i = i || ",", a = a || ".", isNaN(e) || null === e) return 0;
            var o = (e = (e / 100).toFixed(t)).split(".");
            return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (o[1] ? a + o[1] : "")
        }
        switch (o.match(a)[1]) {
            case "amount":
                i = n(e, 2);
                break;
            case "amount_no_decimals":
                i = n(e, 0);
                break;
            case "amount_with_comma_separator":
                i = n(e, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                i = n(e, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                i = n(e, 0, " ");
                break;
            case "amount_with_apostrophe_separator":
                i = n(e, 2, "'")
        }
        return o.replace(a, i)
    }
}, wpbingo.collectionPages = function() {
    var t, i, a, o, n, s = ".js-page-collection",
        r = ".js-page-collection-content",
        c = ".js-change-view",
        l = ".js-sortby",
        d = function() {
            if (Shopify.queryParams = {}, location.search.length)
                for (var e, t = 0, i = location.search.substr(1).split("&"); t < i.length; t++) 1 < (e = i[t].split("=")).length && (Shopify.queryParams[decodeURIComponent(e[0])] = decodeURIComponent(e[1]))
        },
        u = function(e, t) {
            var i = t,
                a = i.indexOf(e);
            if (a < 0) return "";
            var o = -1 < (i = i.slice(a + e.length, i.length)).indexOf("/") ? i.indexOf("/") : i.length;
            return (i = i.slice(0, o).toLowerCase()).replace("=", "")
        },
        p = function(e) {
            var t, i = $.param(Shopify.queryParams).replace(/%2B/g, "+"),
                a = "/collections/" + u("/collections/", location.pathname),
                o = location.pathname.split("/");
            return 4 <= o.length && ("" != (t = o[3].split("?").shift()) && (i = i + "+" + t)), e ? "" != i ? e + "?" + i : e : a + "?" + i
        },
        h = function() {},
        f = function(e) {
            var t = p(e);
            wpbingo.isAjaxFilterClick = !0, History.pushState({
                param: Shopify.queryParams
            }, t, t), $.ajax({
                type: "get",
                url: t,
                beforeSend: function() {
                    $(s).addClass("page-collection--loading"), wpbingo.showLoading()
                },
                success: function(e) {
                    var t = $(e).filter("title").text();
                    document.title = t, $(r).replaceWith($(e).find(r)), m(), n(), $(s).removeClass("page-collection--loading"), wpbingo.hideLoading()
                },
                error: function(e, t) {
                    $(s).removeClass("page-collection--loading"), wpbingo.hideLoading()
                }
            })
        },
        v = function() {
            $(s).on("click", c, function(e) {
                e.preventDefault(), $(this).hasClass("active") || (Shopify.queryParams.view = $(this).data("view"), $(c).removeClass("active"), $(this).addClass("active"), delete Shopify.queryParams.page, f())
            })
        },
        m = function() {
            var e, t;
            Shopify.queryParams.sort_by && (e = Shopify.queryParams.sort_by, $(l).val(e)), Shopify.queryParams.view && (t = Shopify.queryParams.view, $(c).removeClass("active"), $(c).each(function() {
                $(this).data("view") == t && $(this).addClass("active")
            })), $(".ajax-filter").each(function() {
                0 < $(this).find(".ajax-filter__item.active").length && ($(this).find(".wpbingo-filter__clear").show(), $(".wpbingo-filter__clear-all").show())
            })
        };
    return ajaxFilterSortby = function() {
            $(s).on("change", l, function(e) {
                Shopify.queryParams.sort_by = $(this).val(), delete Shopify.queryParams.page, f()
            })
        }, t = function() {
            $(s).on("click", ".ajax-filter__item a", function(e) {
                e.preventDefault();
                var t, i, a = [];
                Shopify.queryParams.constraint && (a = Shopify.queryParams.constraint.split("+")), wpbingo.settings.sidebarMultiChoise || $(this).parent().hasClass("active") || 0 < (t = $(this).parents(".ajax-filter__list").find(".ajax-filter__item.active")).length && ((i = t.data("filter")) && 0 <= (o = a.indexOf(i)) && a.splice(o, 1));
                var o, n = $(this).parent().data("filter");
                n && (0 <= (o = a.indexOf(n)) ? a.splice(o, 1) : a.push(n)), a.length ? Shopify.queryParams.constraint = a.join("+") : delete Shopify.queryParams.constraint, delete Shopify.queryParams.page, f()
            })
        }, i = function() {
            $(s).on("click", ".js-collection-pagination a", function(e) {
                e.preventDefault();
                var t = $(this).attr("href").match(/page=\d+/g);
                t && (Shopify.queryParams.page = parseInt(t[0].match(/\d+/g)), f(), $("body,html").animate({
                    scrollTop: $(".header").height()
                }, 600))
            })
        }, a = function() {
            $(s).on("click", ".wpbingo-filter__clear", function(e) {
                e.preventDefault();
                var i = [],
                    t = $(this).parents(".ajax-filter");
                Shopify.queryParams.constraint && (i = Shopify.queryParams.constraint.split("+")), t.find(".ajax-filter__item.active").each(function() {
                    var e, t = $(this).data("filter");
                    !t || 0 <= (e = i.indexOf(t)) && i.splice(e, 1)
                }), i.length ? Shopify.queryParams.constraint = i.join("+") : delete Shopify.queryParams.constraint, f()
            })
        }, o = function() {
            $(s).on("click", ".wpbingo-filter__clear-all", function(e) {
                e.preventDefault(), delete Shopify.queryParams.constraint, delete Shopify.queryParams.q, f()
            })
        }, n = function() {
            if (window.SPR && wpbingo.settings.enableReview && 0 < $(".shopify-product-reviews-badge").length) return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
        },
        function() {
            var e;
            $(s) && (e = window.History).Adapter.bind(window, "statechange", function() {
                e.getState(), wpbingo.isAjaxFilterClick || (d(), f(), h()), wpbingo.isAjaxFilterClick = !1
            }), d(), v(), ajaxFilterSortby(), t(), i(), a(), o(), m()
        }
}(), wpbingo.Variants = function() {
    function e(e) {
        this.$container = e.$container,
		this.product = e.product,
		this.productSelectOption = e.productSelectOption, 
		this.singleOptionSelector = e.singleOptionSelector,
		this.originalSelectorId = e.originalSelectorId,
		this.enableHistoryState = e.enableHistoryState,
		this.currentVariant = this._getVariantFromOptions(),
		$(this.singleOptionSelector,this.$container).on("change",this._onSelectChange.bind(this))
    }
    return e.prototype = _.assignIn({}, e.prototype, {
        _getCurrentOptions: function() {
            var e = _.map($(this.singleOptionSelector, this.$container), function(e) {
                var t = $(e),
                    i = t.attr("type"),
                    a = {};
                return ("radio" !== i && "checkbox" !== i || !!t[0].checked) && (a.value = t.val(), a.index = t.data("index"), a)
            });
            return e = _.compact(e)
        },
        _getVariantFromOptions: function() {
            var e = this._getCurrentOptions(),
                t = this.product.variants;
            return _.find(t, function(t) {
                return e.every(function(e) {
                    return _.isEqual(t[e.index], e.value)
                })
            })
        },
        _onSelectChange: function() {
            var e = this._getVariantFromOptions();
            !$("[data-single-option-button]", this.$container).length || (this._updateVariantsButton(), e && e.available) ? (this.$container.trigger({
                type: "variantChange",
                variant: e
            }), e && (this._updateMasterSelect(e), this._updateMedia(e), this._updatePrice(e), this._updateSKU(e), this.currentVariant = e, this.enableHistoryState && this._updateHistoryState(e))) : this._updateVariantsButtonDisabed()
        },
        _updateVariantsButtonDisabed: function() {
            for (var i, e = 2; e <= 3; e++) {
                $(this.productSelectOption + e, this.$container).length && (i = !1, $(this.productSelectOption + e + " " + this.singleOptionSelector, this.$container).each(function() {
                    var e = $(this),
                        t = e.attr("type");
                    if (("radio" === t || "checkbox" === t) && this.checked && e.hasClass("disabled")) return e.prop("checked", !1), !(i = !0)
                }), $(this.productSelectOption + e + " " + this.singleOptionSelector, this.$container).each(function() {
                    var e = $(this),
                        t = e.attr("type");
                    if (i && ("radio" === t || "checkbox" === t) && !e.hasClass("disabled")) return e.prop("checked", !0), i = !1, e.trigger("change"), !1
                }))
            }
        },
        _updateVariantsButton: function() {
            for (var a = this._getCurrentOptions(), o = this.product.variants, n = 2; n <= 3; n++) $(this.productSelectOption + n, this.$container).length && $(this.productSelectOption + n + " " + this.singleOptionSelector, this.$container).each(function() {
                var e, t = $(this),
                    i = t.val();
                2 === n ? e = _.findIndex(o, function(e) {
                    return e.option1 === a[0].value && e.option2 === i && !0 === e.available
                }) : 3 === n && (e = _.findIndex(o, function(e) {
                    return e.option1 === a[0].value && e.option2 === a[1].value && e.option3 === i && !0 === e.available
                })), -1 !== e ? (t.removeAttr("disabled", "disabled").removeClass("disabled"), t.next("label").removeClass("disabled")) : (t.attr("disabled", "disabled").addClass("disabled"), t.next("label").addClass("disabled"))
            })
        },
        _updateMedia: function(e) {
            var t = e.featured_media || {},
                i = this.currentVariant.featured_media || {},
                a = !1;
            t.preview_image && i.preview_image && (a = t.preview_image.src === i.preview_image.src), e.featured_media && !a && this.$container.trigger({
                type: "variantMediaChange",
                variant: e
            })
        },
        _updatePrice: function(e) {
            e.price === this.currentVariant.price && e.compare_at_price === this.currentVariant.compare_at_price || this.$container.trigger({
                type: "variantPriceChange",
                variant: e
            })
        },
        _updateSKU: function(e) {
            e.sku !== this.currentVariant.sku && this.$container.trigger({
                type: "variantSKUChange",
                variant: e
            })
        },
        _updateHistoryState: function(e) {
            var t;
            history.replaceState && e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + e.id, window.history.replaceState({
                path: t
            }, "", t))
        },
        _updateMasterSelect: function(e) {
            $(this.originalSelectorId, this.$container).val(e.id)
        }
    }), e
}(), wpbingo.ProductModel = function() {
    var o = {},
        r = {},
        c = {},
        l = {
            productMediaGroup: ".js-product-media-group",
            productMediaGroupWrapper: ".js-product-single-media",
            xrButton: "[data-shopify-xr]",
            xrButtonSingle: "[data-shopify-xr-single]"
        },
        n = {
            viewInSpaceDisabled: "product-single__view-in-space--disabled"
        };

    function d(e) {
        if (!e)
            if (window.ShopifyXR) {
                for (var t in o)
                    if (o.hasOwnProperty(t)) {
                        var i = o[t];
                        if (i.loaded) continue;
                        var a = $("#ModelJson-" + t);
                        window.ShopifyXR.addModels(JSON.parse(a.html())), i.loaded = !0
                    }
                window.ShopifyXR.setupXRElements()
            } else document.addEventListener("shopify_xr_initialized", function(e) {
                e.detail.shopifyXREnabled ? d() : $(l.xrButton).addClass(n.viewInSpaceDisabled)
            })
    }

    function t(e) {
        if (!e)
            for (var t in r) {
                var i;
                r.hasOwnProperty(t) && ((i = r[t]).modelViewerUi || (i.modelViewerUi = new Shopify.ModelViewerUI(i.$element)), function(e) {
                    var t = c[e.sectionId],
                        i = e.$container.closest(l.productMediaGroup);
                    e.$element.on("shopify_model_viewer_ui_toggle_play", function() {
                        wpbingo.updateSlickSwipe(i, !1)
                    }).on("shopify_model_viewer_ui_toggle_pause", function() {
                        wpbingo.updateSlickSwipe(i, !0)
                    }), e.$container.on("mediaVisible", function() {
                        t.$element.attr("data-shopify-model3d-id", e.modelId), e.modelViewerUi.play()
                    }), e.$container.on("mediaHidden", function() {
                        t.$element.attr("data-shopify-model3d-id", t.defaultId), e.modelViewerUi.pause()
                    }).on("xrLaunch", function() {
                        e.modelViewerUi.pause()
                    })
                }(i))
            }
    }
    return {
        init: function(e, s) {
            o[s] = {
                loaded: !1
            }, e.each(function(e) {
                var t, i = $(this),
                    a = i.data("media-id"),
                    o = $(i.find("model-viewer")[0]),
                    n = o.data("model-id");
                0 === e && (t = i.closest(l.productMediaGroupWrapper).find(l.xrButtonSingle), c[s] = {
                    $element: t,
                    defaultId: n
                }), r[a] = {
                    modelId: n,
                    sectionId: s,
                    $container: i,
                    $element: o
                }
            }), window.Shopify.loadFeatures([{
                name: "shopify-xr",
                version: "1.0",
                onLoad: d
            }]), r.length < 1 || (window.Shopify.loadFeatures([{
                name: "model-viewer-ui",
                version: "1.0",
                onLoad: t
            }]), wpbingo.LibraryLoader.load("modelViewerUiStyles"))
        },
        removeSectionModels: function(e) {
            for (var t in r) {
                r.hasOwnProperty(t) && r[t].sectionId === e && (r[t].modelViewerUi.destroy(), delete r[t])
            }
            delete o[e]
        }
    }
}(), wpbingo.ProductVideo = function() {
    var o = {},
        n = {
            html5: "html5",
            youtube: "youtube"
        },
        s = {
            productMediaWrapper: ".js-product-media",
            productMediaGroup: ".js-product-media-group"
        },
        r = {
            enableVideoLooping: "enable-video-looping",
            videoId: "video-id"
        };

    function c(e) {
        e ? function() {
            for (var e in o)
                if (o.hasOwnProperty(e)) {
                    var t = o[e];
                    if (t.nativeVideo) continue;
                    t.host === n.html5 && (t.element.setAttribute("controls", "controls"), t.nativeVideo = !0)
                }
        }() : t(n.html5)
    }

    function t(e) {
        for (var t in o) {
            var i;
            !o.hasOwnProperty(t) || (i = o[t]).host === e && i.ready()
        }
    }
    return {
        init: function(e, t) {
            if (e.length) {
                var i = e.find("iframe, video")[0],
                    a = e.data("mediaId");
                if (i) switch (o[a] = {
                    mediaId: a,
                    sectionId: t,
                    host: function(e) {
                        if ("VIDEO" === e.tagName) return n.html5;
                        if ("IFRAME" === e.tagName && /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e.src)) return n.youtube;
                        return null
                    }(i),
                    container: e,
                    element: i,
                    ready: function() {
                        ! function(e) {
                            if (e.player) return;
                            var t = e.container.closest(s.productMediaWrapper),
                                i = t.data(r.enableVideoLooping);
                            switch (e.host) {
                                case n.html5:
                                    e.player = new Shopify.Plyr(e.element, {
                                        loop: {
                                            active: i
                                        }
                                    });
                                    var a = $(e.container).closest(s.productMediaGroup);
                                    e.player.on("seeking", function() {
                                        wpbingo.updateSlickSwipe(a, !1)
                                    }), e.player.on("seeked", function() {
                                        wpbingo.updateSlickSwipe(a, !0)
                                    });
                                    break;
                                case n.youtube:
                                    var o = t.data(r.videoId);
                                    e.player = new YT.Player(e.element, {
                                        videoId: o,
                                        events: {
                                            onStateChange: function(e) {
                                                0 === e.data && i && e.target.seekTo(0)
                                            }
                                        }
                                    })
                            }
                            t.on("mediaHidden xrLaunch", function() {
                                e.player && (e.host === n.html5 && e.player.pause(), e.host === n.youtube && e.player.pauseVideo && e.player.pauseVideo())
                            }), t.on("mediaVisible", function() {
                                e.player && (e.host === n.html5 && e.player.play(), e.host === n.youtube && e.player.playVideo && e.player.playVideo())
                            })
                        }(this)
                    }
                }, o[a].host) {
                    case n.html5:
                        window.Shopify.loadFeatures([{
                            name: "video-ui",
                            version: "1.1",
                            onLoad: c
                        }]), wpbingo.LibraryLoader.load("plyrShopifyStyles");
                        break;
                    case n.youtube:
                        wpbingo.LibraryLoader.load("youtubeSdk")
                }
            }
        },
        hosts: n,
        loadVideos: t,
        removeSectionVideos: function(e) {
            for (var t in o) {
                var i;
                !o.hasOwnProperty(t) || (i = o[t]).sectionId === e && (i.player && i.player.destroy(), delete o[t])
            }
        }
    }
}(), wpbingo.Product = function() {
    function e(e) {
        var t = $(window),
            i = this.$container = $(e),
            a = i.attr("data-section-id");
        this.settings = {
            productPageLoad: !1,
            preloadImage: !1,
            enableHistoryState: i.data("enable-history-state"),
            namespace: ".productSection",
            sectionId: a
        }, this.selectors = {
            productMediaGroup: ".js-product-media-group",
            productMediaGroupItem: ".js-product-media-item",
            productMediaWrapper: ".js-product-media",
            productMediaTypeModel: "[data-product-media-type-model]",
            productMediaTypeVideo: "[data-product-media-type-video]",
            productThumbnails: ".js-product-thumbnails",
            productThumbnail: "[data-product-thumbnail]",
            productImageZoom: "[data-mfp-src]",
            meta: ".product-single__metas",
            productWrapper: ".product-single",
            productSelectOption: ".js-product-select-option--",
            originalSelectorId: ".js-product-select",
            singleOptionSelector: ".js-single-option-selector",
            slickDots: "[data-slick-dots]",
            slickNext: "[data-slick-next]",
            slickPrevious: "[data-slick-previous]",
            variantColor: "[data-color]"
        }, this.classes = {
            hide: "d-none",
            priceContainerUnitAvailable: "price-container--unit-available",
            productInventoryInStock: "product-avaiable__text--instock",
            productInventoryOutStock: "product-avaiable__text--outstock"
        }, this.slickMediaSettings = {
            slide: this.selectors.productMediaGroupItem,
            rows: 0,
            accessibility: !0,
            arrows: !0,
            appendDots: this.selectors.slickDots,
            prevArrow: this.selectors.slickPrevious,
            nextArrow: this.selectors.slickNext,
            dots: !0,
            infinite: !1,
            adaptiveHeight: !0,
            customPaging: function(e, t) {
                return '<a href="javascript:void(0)" aria-label="' + wpbingo.strings.productSlideLabel.replace("[slide_number]", t + 1).replace("[slide_max]", e.slideCount) + " " + $('[data-slick-index="' + t + '"]', this.$container).data("slick-media-label") + '" aria-controls="slick-slide0' + t + '"' + (0 === t ? ' aria-current="true"' : "") + "></a>"
            }.bind(this)
        }, $("#ProductJson-" + a).html() && (this.productSingleObject = JSON.parse(document.getElementById("ProductJson-" + a).innerHTML), this.zoomType = i.data("image-zoom-type"), this.isStackedLayout = i.data("stacked-layout"), this.focusableElements = ["iframe", "input", "button", "video", '[tabindex="0"]'].join(","), this.slickThumbsSettings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            rows: 0,
            accessibility: !0,
            arrows: !1,
            dots: !1,
            infinite: !1,
            focusOnSelect: !0,
            adaptiveHeight: !0
        }, 
	}
    return e.prototype = _.assignIn({}, e.prototype, {
        initBreakpoints: function() {
            var e = this;
            enquire.register(wpbingo.variables.mediaMobile, {
                match: function() {
                    e.zoomType && $(e.selectors.productImageZoom).length && $(e.selectors.productImageZoom).off()
                },
                unmatch: function() {
                    e.zoomType && e.productMediaZoom()
                }
            }), e.isStackedLayout ? enquire.register(wpbingo.variables.mediaMobile, {
                match: function() {
                    e.createMediaCarousel()
                },
                unmatch: function() {
                    e.destroyMediaCarousel()
                }
            }) : (e.createMediaCarousel(), e.createThumbnailCarousel())
        },
        initProductVariant: function() {
            var e = {
                $container: this.$container,
                enableHistoryState: this.settings.enableHistoryState || !1,
                productSelectOption: this.selectors.productSelectOption,
                singleOptionSelector: this.selectors.singleOptionSelector,
                originalSelectorId: this.selectors.originalSelectorId + "--" + this.settings.sectionId,
                product: this.productSingleObject
            };
            this.variants = new wpbingo.Variants(e), this.$container.on("variantChange" + this.settings.namespace, this.productPage.bind(this)), this.$container.on("variantMediaChange" + this.settings.namespace, this.showVariantMedia.bind(this))
        },
        initModelViewerLibraries: function() {
            var e;
            this.$container.data("has-model") && (e = $(this.selectors.productMediaTypeModel, this.$container), wpbingo.ProductModel.init(e, this.settings.sectionId))
        },
        initShopifyXrLaunch: function() {
            $(document).on("shopify_xr_launch", function() {
                $(this.selectors.productMediaWrapper + ":not(." + this.classes.hide + ")", this.$container).trigger("xrLaunch")
            }.bind(this))
        },
        initProductVideo: function() {
            var t = this.settings.sectionId;
            $(this.selectors.productMediaTypeVideo, this.$container).each(function() {
                var e = $(this);
                wpbingo.ProductVideo.init(e, t)
            })
        },
        trapCarouselFocus: function(e, t) {
            e && (e.find(".slick-slide:not(.slick-active)").find(this.focusableElements).attr("tabindex", t ? "0" : "-1"), e.find(".slick-active").find(this.focusableElements).attr("tabindex", "0"))
        },
        updateCarouselDotsA11y: function(e) {
            $(this.selectors.slickDots).find("a").removeAttr("aria-current").eq(e).attr("aria-current", "true")
        },
        translateCarouselDots: function(e, t, i) {
            var a, o;
            e <= i.max || (a = 0, o = (e - i.max) * i.width, t >= i.max - 1 && (a = o < (a = (t + 2 - i.max) * i.width) ? o : a), $(this.selectors.slickDots).find("ul").css("transform", "translateX(-" + a + "px)"))
        },
        triggerMediaChangeEvent: function(e) {
            $(this.selectors.productMediaWrapper, this.$container).trigger("mediaHidden"), $(this.selectors.productMediaWrapper, this.$container).filter('[data-media-id="' + e + '"]').trigger("mediaVisible")
        },
        showVariantMedia: function(e) {
            var t, i, a = e.variant,
                o = this.settings.sectionId + "-" + a.featured_media.id,
                n = $(this.selectors.productMediaWrapper + '[data-media-id="' + o + '"]');
            if (this.triggerMediaChangeEvent(o), !wpbingo.variables.isMobile && this.isStackedLayout) {
                0 === (i = n.closest(".slick-slide").index()) && !wpbingo.variables.productPageLoad || (wpbingo.variables.productPageSticky ? $("html, body").animate({
                    scrollTop: n.offset().top
                }, 250) : (t = $(document).scrollTop(), n.closest($(this.selectors.productMediaGroupItem, this.$container)).prependTo($(this.selectors.productMediaGroup, this.$container)), $(document).scrollTop(t)))
            } else {
                if (i = n.closest(".slick-slide").data("slick-index"), _.isUndefined(i)) return;
                0 === i && !wpbingo.variables.productPageLoad || $(this.selectors.productMediaGroup, this.$container).slick("slickGoTo", i)
            }
            wpbingo.variables.productPageLoad || (wpbingo.variables.productPageLoad = !0)
        },
        setFeaturedMedia: function() {
            var e = $(this.selectors.productMediaGroup, this.$container).find(".slick-slide.slick-current.slick-active " + this.selectors.productMediaWrapper).attr("data-media-id");
            this.triggerMediaChangeEvent(e)
        },
        createMediaCarousel: function() {
            var o, e;
            $(this.selectors.productMediaGroupItem).length < 2 || !$(this.selectors.productMediaGroup, this.$container) || this.isCarouselActive || (this.isCarouselActive = !0, e = !(o = {
                max: 9,
                width: 20
            }), $(this.selectors.productMediaGroupItem, this.$container).on("focusin", function() {
                e || (this.trapCarouselFocus($(this.selectors.productMediaGroup)), e = !0)
            }.bind(this)), $(this.selectors.productMediaGroup, this.$container).slick(this.slickMediaSettings).on("beforeChange", function(e, t, i, a) {
                this.updateCarouselDotsA11y(a), this.translateCarouselDots(t.slideCount, a, o)
            }.bind(this)).on("afterChange", function(e, t) {
                this.trapCarouselFocus(t.$slider), this.setFeaturedMedia()
            }.bind(this)))
        },
        destroyMediaCarousel: function() {
            $(this.selectors.productMediaGroup, this.$container).length && this.isCarouselActive && (this.trapCarouselFocus($(this.selectors.productMediaGroup, this.$container), !0), $(this.selectors.productMediaGroup, this.$container).slick("unslick"), this.isCarouselActive = !1)
        },
        createThumbnailCarousel: function() {
            $(this.selectors.productMediaGroupItem).length < 2 || !$(this.selectors.productMediaGroup, this.$container) || $(this.selectors.productThumbnails, this.$container).slick(this.slickThumbsSettings)
        },
        initStickyProductMeta: function() {
            var e, t, i, a = $(this.selectors.meta, this.$container),
                o = $(this.selectors.productWrapper, this.$container);
            !a.length || $(this.selectors.productMediaWrapper, this.$container).length < 2 || (a.trigger("detach.ScrollToFixed"), wpbingo.variables.isMobile || (e = a.outerHeight(), t = $(this.selectors.productMediaGroup, this.$container).height(), i = o.offset().top + o.height(), i -= e, e < t && e < $(window).height() ? (wpbingo.variables.productPageSticky = !0, a.scrollToFixed({
                limit: i
            })) : wpbingo.variables.productPageSticky = !1))
        },
        getBaseUnit: function(e) {
            return 1 === e.unit_price_measurement.reference_value ? e.unit_price_measurement.reference_unit : e.unit_price_measurement.reference_value + e.unit_price_measurement.reference_unit
        },
        productPage: function(e) {
            var t, i, a = wpbingo.strings.moneyFormat,
                o = e.variant,
                n = wpbingo.strings,
                s = ".btn--add-to-cart",
                r = ".btn--add-to-cart .btn__text",
                c = ".js-quantity-selector",
                l = ".shopify-payment-button",
                d = "[data-price-container]",
                u = ".js-product-price",
                p = ".js-product-price-a11y",
                h = ".js-product-compare-price",
                f = ".js-product-compare-price-a11y",
                v = ".product-single__price--wrapper",
                m = ".js-product-avaiable",
                g = ".js-product-avaiable-text",
                y = "[data-unit-price]",
                b = "[data-unit-price-base-unit]",
                _ = ".js-variant-sku";
            o ? ($(d, this.$container).removeClass(this.classes.hide), $(m, this.$container).removeClass(this.classes.hide), $(u, this.$container).attr("aria-hidden", "false"), $(p, this.$container).attr("aria-hidden", "false"), o.available ? ($(s, this.$container).removeClass("disabled").prop("disabled", !1), $(r, this.$container).html(n.addToCart), $(g).removeClass(this.classes.productInventoryOutStock).addClass(this.classes.productInventoryInStock).html(wpbingo.strings.inStock), $(c, this.$container).removeClass(this.classes.hide), $(l, this.$container).removeClass(this.classes.hide)) : ($(s, this.$container).addClass("disabled").prop("disabled", !0), $(r, this.$container).html(n.soldOut), $(g).removeClass(this.classes.productInventoryInStock).addClass(this.classes.productInventoryOutStock).html(wpbingo.strings.outStock), $(c, this.$container).addClass(this.classes.hide), $(l, this.$container).addClass(this.classes.hide)), $(u, this.$container).html(wpbingo.Currency.formatMoney(o.price, a)).removeClass(this.classes.hide), o.compare_at_price > o.price ? ($(h, this.$container).html(wpbingo.Currency.formatMoney(o.compare_at_price, a)), $(v, this.$container).removeClass(this.classes.hide), $(u, this.$container).addClass("on-sale"), $(v, this.$container).attr("aria-hidden", "false"), $(f, this.$container).attr("aria-hidden", "false")) : ($(v, this.$container).addClass(this.classes.hide).attr("aria-hidden", "true"), $(u, this.$container).removeClass("on-sale"), $(h, this.$container).html(""), $(f, this.$container).attr("aria-hidden", "true")), o.unit_price && (t = $(y, this.$container), i = $(b, this.$container), t.html(wpbingo.Currency.formatMoney(o.unit_price, a)), i.html(this.getBaseUnit(o)), $(d, this.$container).addClass(this.classes.priceContainerUnitAvailable)), $(_).html("" != o.sku ? o.sku : "N/A")) : ($(s, this.$container).addClass("disabled").prop("disabled", !0), $(r, this.$container).html(n.unavailable), $(c, this.$container).addClass(this.classes.hide), $(l, this.$container).addClass(this.classes.hide), $(d, this.$container).addClass(this.classes.hide), $(m, this.$container).addClass(this.classes.hide), $(u, this.$container).attr("aria-hidden", "true"), $(p, this.$container).attr("aria-hidden", "true"), $(v, this.$container).attr("aria-hidden", "true"), $(f, this.$container).attr("aria-hidden", "true"))
        },
        onUnload: function() {
            this.$container.off(this.settings.namespace), wpbingo.ProductModel.removeSectionModels(this.settings.sectionId), wpbingo.ProductVideo.removeSectionVideos(this.settings.sectionId), this.isStackedLayout && this.destroyMediaCarousel()
        }
    }), e
}(), wpbingo.ProductRecommendations = function(e) {
    this.$container = $(e);
    var i = this,
        t = this.$container.data("baseUrl") + "?section_id=product-recommendations&product_id=" + this.$container.data("productId") + "&limit=4";
    $.get(t).then(function(e) {
        var t = $(e).html();
        "" !== t.trim() && i.$container.html(t)
    })
}, wpbingo.HeaderSection = function() {
    var e = "[data-disclosure-locale]",
        t = "[data-disclosure-currency]",
        i = ".js-header-search-options",
        a = ".js-header-search-toggle",
        o = ".js-menu-mobile",
        n = ".js-mm-nav-item";

    function s(e) {
        this.$container = $(e), this.cache = {}, this.cacheSelectors();
        var t = $("body");
        this.cache.$localeDisclosure.length && (this.localeDisclosure = new wpbingo.Disclosure(this.cache.$localeDisclosure)), this.cache.$currencyDisclosure.length && (this.currencyDisclosure = new wpbingo.Disclosure(this.cache.$currencyDisclosure)), this.cache.$searchOptions.on("click", function(e) {
            e.preventDefault();
            var t = $(this),
                i = t.closest("form");
            i.find(".js-header-search-options").removeClass("active"), t.addClass("active"), i.find(".dropdown-toggle").text(t.text()), i.find(".js-search-type").val(t.data("type"))
        }), this.cache.$searchMobileToggle.on("click", function(e) {
            e.preventDefault(), t.toggleClass("modal-search--open")
        }), this.cache.$menuMobileToggle.on("click", function(e) {
            e.preventDefault(), t.toggleClass("menu-mobile--open")
        }), this.cache.$menuMobileChildToggle.on("click", function(e) {
            e.preventDefault();
            var t = $(this);
            t.hasClass("mm-nav__prev") ? t.closest(".active--hidden").removeClass("active--hidden") : t.parents(".mm-nav__links").addClass("active--hidden"), t.closest(".menu-mobile__nav-item").toggleClass("active")
        })
    }
    return s.prototype = _.assignIn({}, s.prototype, {
        cacheSelectors: function() {
            this.cache = {
                $localeDisclosure: this.$container.find(e),
                $currencyDisclosure: this.$container.find(t),
                $searchOptions: this.$container.find(i),
                $searchMobileToggle: this.$container.find(a),
                $menuMobileToggle: this.$container.find(o),
                $menuMobileChildToggle: this.$container.find(n)
            }
        },
        onUnload: function() {
            this.cache.$localeDisclosure.length && this.localeDisclosure.unload(), this.cache.$currencyDisclosure.length && this.currencyDisclosure.unload()
        }
    }), s
}(), wpbingo.LoginRegister = function() {
    var e = ".js-login-form",
        t = ".js-recover-password",
        i = ".js-forget-password",
        a = ".js-recover-password-success";

    function o(e) {
        this.$container = $(e), this.cache = {}, this.classes = {
            hidden: "d-none"
        }, this.cacheSelectors(), this.initializeEvents(), this.resetPasswordSuccess()
    }
    return o.prototype = _.assignIn({}, o.prototype, {
        cacheSelectors: function() {
            this.cache = {
                $loginForm: this.$container.find(e),
                $recoverPasswordForm: this.$container.find(t),
                $recoverPasswordToggle: this.$container.find(i),
                $recoverPasswordSuccess: this.$container.find(a)
            }
        },
        initializeEvents: function() {
            this.cache.$recoverPasswordToggle.length && this.cache.$recoverPasswordToggle.on("click", function(e) {
                e.preventDefault();
                var t = !this.cache.$loginForm.hasClass(this.classes.hidden);
                this.displayRecoverPasswordForm(t)
            }.bind(this)), "#recover" === window.location.hash && this.displayRecoverPasswordForm(!0)
        },
        displayRecoverPasswordForm: function(e) {
            e ? (this.cache.$loginForm.addClass(this.classes.hidden), this.cache.$recoverPasswordForm.removeClass(this.classes.hidden)) : (this.cache.$loginForm.removeClass(this.classes.hidden), this.cache.$recoverPasswordForm.addClass(this.classes.hidden))
        },
        resetPasswordSuccess: function() {
            void 0 !== window.resetPassword && window.resetPassword && this.cache.$recoverPasswordSuccess.removeClass(this.classes.hidden)
        }
    }), o
}(), wpbingo.Search = function() {
    var s = "[data-search]",
        t = ".search-pagination a";

    function e(e) {
        function n() {
            void 0 !== ajaxCart && ajaxCart.init({
                formSelector: ".search-results [data-product-form]"
            })
        }
        this.$container = $(e), this.cache = {}, this.cacheSelectors(), this.cache.$search.length && this.cache.$search.each(function() {
            var t = $(this);
            $.get(t.data("url"), function(e) {
                t.html(e), n()
            })
        }), this.$container.on("click", t, function(e) {
            e.preventDefault();
            var t, i, a = $(this).parents(s),
                o = $(this).attr("href");
            t = a, i = o, $.get(i, function(e) {
                t.html(e), n()
            })
        })
    }
    return e.prototype = _.assignIn({}, e.prototype, {
        cacheSelectors: function() {
            this.cache = {
                $search: this.$container.find(s)
            }
        }
    }), e
}(), "undefined" == typeof ShopifyAPI && (ShopifyAPI = {}), ShopifyAPI.attributeToString = function(e) {
    return "string" != typeof e && "undefined" === (e += "") && (e = ""), jQuery.trim(e)
}, ShopifyAPI.onCartUpdate = function() {}, ShopifyAPI.updateCartNote = function(e, t) {
    var i = {
        type: "POST",
        url: "/cart/update.js",
        data: "note=" + ShopifyAPI.attributeToString(e),
        dataType: "json",
        success: function(e) {
            "function" == typeof t ? t(e) : ShopifyAPI.onCartUpdate(e)
        },
        error: function(e, t) {
            ShopifyAPI.onError(e, t)
        }
    };
    jQuery.ajax(i)
}, ShopifyAPI.onError = function(XMLHttpRequest) {
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    data.message && alert(data.message + "(" + data.status + "): " + data.description)
}, ShopifyAPI.addItemFromForm = function(t, i, a) {
    var e = {
        type: "POST",
        url: "/cart/add.js",
        data: new FormData(t),
        processData: !1,
        contentType: !1,
        dataType: "json",
        success: function(e) {
            "function" == typeof i ? i(e, t) : ShopifyAPI.onItemAdded(e, t)
        },
        error: function(e, t) {
            "function" == typeof a ? a(e, t) : ShopifyAPI.onError(e, t)
        }
    };
    jQuery.ajax(e)
}, ShopifyAPI.getCart = function(t, i) {
    jQuery.getJSON("/cart.js", function(e) {
        "function" == typeof t ? t(e, i) : ShopifyAPI.onCartUpdate(e)
    })
}, ShopifyAPI.changeItem = function(e, t, i) {
    var a = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=" + t + "&line=" + e,
        dataType: "json",
        success: function(e) {
            "function" == typeof i ? i(e) : ShopifyAPI.onCartUpdate(e)
        },
        error: function(e, t) {
            ShopifyAPI.onError(e, t)
        }
    };
    jQuery.ajax(a)
};
var ajaxCart = function(module, $) {
    "use strict";
    var init, loadCart, settings, isUpdating, $body, $formContainer, $addToCart, $cartCountSelector, $cartCostSelector, $cartContainer, initializeEvents, updateCountPrice, formOverride, itemAddedCallback, itemErrorCallback, cartModalAdded, cartUpdateCallback, buildCart, cartCallback, adjustCart, adjustCartCallback, validateQty, init = function(e) {
            settings = {
                formSelector: "[data-product-form]",
                cartContainer: "[data-cart-container]",
                addToCartSelector: 'button[type="submit"]',
                cartCountSelector: "[data-cart-count]",
                cartCostSelector: "[data-cart-cost]",
                cartRemoveSelector: "[data-cart-remove]",
                headerCartSelector: ".js-header-cart",
                cartModalSelector: ".js-cart-modal",
                cartModalCloseSelector: ".js-cart-modal-close",
                moneyFormat: "${{amount}}",
                disableAjaxCart: !1,
                cartTemplate: "#ajaxcart-template",
                cartModalHeaderTemplate: "#ajaxcart-header-template"
            }, $.extend(settings, e), $formContainer = $(settings.formSelector), $cartContainer = $(settings.cartContainer), $addToCart = $formContainer.find(settings.addToCartSelector), $cartCountSelector = $(settings.cartCountSelector), $cartCostSelector = $(settings.cartCostSelector), $body = $("body"), isUpdating = !1, initializeEvents(), !settings.disableAjaxCart && $addToCart.length && formOverride(), adjustCart()
        },
        initializeEvents = function() {
            $body.on("click", settings.cartModalCloseSelector, function() {
                $(settings.cartModalSelector).fadeOut(400, function() {
                    $(this).remove()
                })
            }), $body.on("click", settings.headerCartSelector, function(e) {
                "modal" == wpbingo.settings.cartType && 767 < $(window).width() && e.preventDefault()
            }), $body.on("click", settings.cartRemoveSelector, function(e) {
                var t;
                isUpdating || (t = $(this).data("line")) && (isUpdating = !0, setTimeout(function() {
                    ShopifyAPI.changeItem(t, 0, adjustCartCallback)
                }, 250))
            }), $body.on("change", ".ajaxcart__note-input", function() {
                var e = $(this).val();
                ShopifyAPI.updateCartNote(e, function() {})
            })
        },
        loadCart = function() {
            $body.addClass("ajaxcart--is-loading"), ShopifyAPI.getCart(cartUpdateCallback)
        },
        updateCountPrice = function(e) {
            $cartCountSelector && $cartCountSelector.html(e.item_count), $cartCostSelector && $cartCostSelector.html(wpbingo.Currency.formatMoney(e.total_price, settings.moneyFormat))
        },
        formOverride = function() {
            $body.on("submit", settings.formSelector, function(e) {
                e.preventDefault(), $addToCart.attr("disabled", "disabled").prepend('<span class="spinner-border spinner-border-sm"></span>'), $addToCart.removeClass("is-added").addClass("is-adding"), $(".ajaxcart-toast").toast("hide"), ShopifyAPI.addItemFromForm(e.target, itemAddedCallback, itemErrorCallback)
            })
        },
        itemAddedCallback = function(e) {
            $addToCart.removeAttr("disabled").find(".spinner-border").remove(), $addToCart.removeClass("is-adding").addClass("is-added"), "modal" == wpbingo.settings.cartType && cartModalAdded(e), ShopifyAPI.getCart(cartUpdateCallback, !0)
        },
        itemErrorCallback = function(XMLHttpRequest) {
            var data = eval("(" + XMLHttpRequest.responseText + ")"),
                $toast;
            $addToCart.removeAttr("disabled").find(".spinner-border").remove(), $addToCart.removeClass("is-adding is-added"), data.message && 422 === data.status && ($toast = $(".ajaxcart-toast"), $toast.find(".toast-body").html(data.description), $toast.toast("show"))
        },
        cartModalAdded = function(e) {
            var t, i = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif",
                a = $(settings.cartModalHeaderTemplate).html(),
                o = Handlebars.compile(a);
            null != e.image && (i = e.image), t = {
                name: e.title,
                image: i
            }, $body.append(o(t)), $(".js-cart-modal").fadeIn(400)
        },
        cartUpdateCallback = function(e, t) {
            updateCountPrice(e), buildCart(e), t && $body.trigger("drawer.open")
        },
        buildCart = function(c) {
            if ($cartContainer.empty(), 0 === c.item_count) return $cartContainer.append('<p class="cart-empty-message">' + wpbingo.strings.cartEmpty + '</p>\n<p class="cookie-message">' + wpbingo.strings.cartCookies + "</p>"), void cartCallback(c);
            var e, l = [],
                d = {},
                t = $(settings.cartTemplate).html(),
                i = Handlebars.compile(t);
            $.each(c.items, function(e, i) {
                var t = null,
                    a = null !== i.image ? i.image.replace(/(\.[^.]*)$/, "_small$1").replace("http:", "") : "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
                if (null !== i.properties && $.each(i.properties, function(e, t) {
                        "_" !== e.charAt(0) && t || delete i.properties[e]
                    }), null !== i.properties && $.each(i.properties, function(e, t) {
                        "_" !== e.charAt(0) && t || delete i.properties[e]
                    }), 0 !== i.line_level_discount_allocations.length)
                    for (var o in i.line_level_discount_allocations) {
                        var n = i.line_level_discount_allocations[o].amount;
                        i.line_level_discount_allocations[o].formattedAmount = wpbingo.Currency.formatMoney(n, settings.moneyFormat)
                    }
                if (0 !== c.cart_level_discount_applications.length)
                    for (var s in c.cart_level_discount_applications) {
                        var r = c.cart_level_discount_applications[s].total_allocated_amount;
                        c.cart_level_discount_applications[s].formattedAmount = wpbingo.Currency.formatMoney(r, settings.moneyFormat)
                    }
                i.unit_price_measurement && (t = {
                    addRefererenceValue: 1 !== i.unit_price_measurement.reference_value,
                    price: wpbingo.Currency.formatMoney(i.unit_price, settings.moneyFormat),
                    reference_value: i.unit_price_measurement.reference_value,
                    reference_unit: i.unit_price_measurement.reference_unit
                }), d = {
                    key: i.key,
                    line: e + 1,
                    url: i.url,
                    img: a,
                    name: i.product_title,
                    variation: i.variant_title,
                    properties: i.properties,
                    itemAdd: i.quantity + 1,
                    itemMinus: i.quantity - 1,
                    itemQty: i.quantity,
                    price: wpbingo.Currency.formatMoney(i.original_line_price, settings.moneyFormat),
                    discountedPrice: wpbingo.Currency.formatMoney(i.final_line_price, settings.moneyFormat),
                    discounts: i.line_level_discount_allocations,
                    discountsApplied: 0 !== i.line_level_discount_allocations.length,
                    vendor: i.vendor,
                    unitPrice: t
                }, l.push(d)
            }), e = {
                items: l,
                note: c.note,
                totalPrice: wpbingo.Currency.formatMoney(c.total_price, settings.moneyFormat),
                cartDiscounts: c.cart_level_discount_applications,
                cartDiscountsApplied: 0 !== c.cart_level_discount_applications.length
            }, $cartContainer.append(i(e)), cartCallback(c)
        },
        cartCallback = function(e) {
            $body.removeClass("ajaxcart--is-loading"), window.Shopify && Shopify.StorefrontExpressButtons && Shopify.StorefrontExpressButtons.initialize(), $body.trigger("drawer.footer")
        },
        adjustCart = function() {
            function o(e, t) {
                isUpdating = !0;
                var i = $('.ajaxcart__product[data-line="' + e + '"]').addClass("is-loading");
                0 === t && i.parent().addClass("is-removed"), setTimeout(function() {
                    ShopifyAPI.changeItem(e, t, adjustCartCallback)
                }, 250)
            }
            $body.on("click", ".ajaxcart__qty-adjust", function() {
                var e, t, i, a;
                isUpdating || (t = (e = $(this)).data("line"), i = e.siblings(".ajaxcart__qty-num"), a = parseInt(i.val().replace(/\D/g, "")), a = validateQty(a), e.hasClass("ajaxcart__qty--plus") ? a += 1 : --a <= 0 && (a = 0), t ? o(t, a) : i.val(a))
            }), $body.on("change", ".ajaxcart__qty-num", function() {
                var e, t, i;
                isUpdating || (t = (e = $(this)).data("line"), i = parseInt(e.val().replace(/\D/g, "")), i = validateQty(i), t && o(t, i))
            }), $body.on("submit", "form.ajaxcart", function(e) {
                isUpdating && e.preventDefault()
            }), $body.on("focus", ".ajaxcart__qty-adjust", function() {
                var e = $(this);
                setTimeout(function() {
                    e.select()
                }, 50)
            })
        },
        adjustCartCallback = function(e) {
            updateCountPrice(e), setTimeout(function() {
                ShopifyAPI.getCart(buildCart), isUpdating = !1
            }, 150)
        },
        validateQty = function(e) {
            return parseFloat(e) === parseInt(e) && !isNaN(e) || (e = 1), e
        };
    return module = {
        init: init,
        load: loadCart
    }, module
}(ajaxCart || {}, jQuery);
wpbingo.drawerCart = function() {
    var t, a, i, o = "drawer--open",
        e = function() {
            t = $("body"), a = $(".js-drawer"), i = !".js-header-cart", t.on("drawer.open", function(e) {
                n(e)
            }), t.on("drawer.close", function(e) {
                s(e)
            }), t.on("drawer.footer", function() {
                r()
            }), t.on("click", ".js-header-cart", function(e) {
                e.preventDefault(), t.trigger("drawer.open", e)
            }), t.on("click", ".js-drawer-close", function(e) {
                e.preventDefault(), t.trigger("drawer.close", e)
            })
        },
        n = function(e) {
            i ? e && e.preventDefault() : (e && e.preventDefault(), t.addClass(o), i = !0)
        },
        s = function(e) {
            i && (27 !== e.keyCode && e.preventDefault(), t.removeClass(o), i = !1)
        },
        r = function() {
            var e, t, i;
            a.hasClass("drawer--has-fixed-footer") && (e = $(".ajaxcart__footer").removeAttr("style"), t = $(".ajaxcart__inner").removeAttr("style"), i = e.outerHeight(), t.css("bottom", i), e.css("height", i))
        };
    return {
        init: e
    }
}(), wpbingo.variables = {
    productPageLoad: !1,
    productPageSticky: !0,
    mediaTablet: "screen and (max-width: 1024px)",
    mediaMobile: "screen and (max-width: 767px)",
    isTablet: !1,
    isMobile: !1
}, wpbingo.initializeEvents = function() {
    var t = $("body"),
        e = ".js-scroll-to-top",
        a = "password-toggle--show";
    $('[data-toggle="tooltip"]').tooltip(), t.on("click", ".js-password-toggle", function(e) {
        e.preventDefault();
        var t = $(this),
            i = t.siblings(".form-control");
        !!t.hasClass(a) ? (t.removeClass(a), i.attr("type", "password")) : (t.addClass(a), i.attr("type", "text"))
    }), t.on("click", e, function(e) {
        e.preventDefault(), $("body, html").stop().animate({
            scrollTop: 0
        }, "500")
    }), t.on("click", ".js-sidebar-toggle", function(e) {
        e.preventDefault(), t.toggleClass("collection-sidebar--open")
    }), $(window).scroll(function() {
        200 <= $(window).scrollTop() ? $(e).fadeIn() : $(e).fadeOut()
    })
}, wpbingo.setBreakpoints = function() {
    enquire.register(wpbingo.variables.mediaTablet, {
        match: function() {
            wpbingo.variables.isTablet = !0
        },
        unmatch: function() {
            wpbingo.variables.isTablet = !1
        }
    }), enquire.register(wpbingo.variables.mediaMobile, {
        match: function() {
            wpbingo.variables.isMobile = !0
        },
        unmatch: function() {
            wpbingo.variables.isMobile = !1
        }
    })
}, wpbingo.updateSlickSwipe = function(e, t) {
    var i;
    e.hasClass("slick-initialized") && (i = {
        accessibility: t,
        draggable: t,
        swipe: t,
        touchMove: t
    }, e.slick("slickSetOption", i, !1))
}, wpbingo.showLoading = function() {
    $("body").append(null != wpbingo.loading && "" != wpbingo.loading ? wpbingo.loading : "")
}, wpbingo.hideLoading = function() {
    $(".wpbingo-loading").remove()
}, wpbingo.cartInit = function() {
    var e = $("body");
    wpbingo.cookiesEnabled() || e.addClass("cart--no-cookies"), "modal" != wpbingo.settings.cartType && "drawer" != wpbingo.settings.cartType || (ajaxCart.init(), ajaxCart.load(), "drawer" == wpbingo.settings.cartType && wpbingo.drawerCart.init())
}, wpbingo.cookiesEnabled = function() {
    var e = navigator.cookieEnabled;
    return e || (document.cookie = "webcookie", e = -1 !== document.cookie.indexOf("webcookie")), e
}, wpbingo.setCookie = function(e, t, i) {
    var a = new Date;
    a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
    var o = "expires=" + a.toGMTString();
    document.cookie = e + "=" + t + ";" + o + ";path=/"
}, wpbingo.getCookie = function(e) {
    for (var t = e + "=", i = decodeURIComponent(document.cookie).split(";"), a = 0; a < i.length; a++) {
        for (var o = i[a];
            " " === o.charAt(0);) o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
    }
    return ""
}, wpbingo.cookieConsent = function() {
    var e = wpbingo.getCookie("cookie_consent"),
        t = $(".cookie-consent");
    "true" == e ? t.remove() : (setTimeout(function() {
        t.addClass("active")
    }, 1500), "" == e && wpbingo.setCookie("cookie_consent", !1, 365)), $("body").on("click", ".cookie-consent-dismiss", function(e) {
        e.preventDefault(), t.remove(), wpbingo.setCookie("cookie_consent", !0, 365)
    })
}, wpbingo.slideshow = function() {
    var e = ".js-wpbingo-slideshow",
        t = $(e).data("fade"),
        i = $(e).data("autoplay"),
        a = $(e).data("autoplayinterval"),
        o = $(e).data("navigation"),
        n = $(e).data("pagination"),
        s = {
            fade: !0,
            rows: 0,
            arrows: o,
            autoplay: i,
            autoplaySpeed: a
        };
    void 0 === t || null == t || (s.fade = t), void 0 === a || null == a || (s.autoplaySpeed = a), s.dots = void 0 !== n && null != n && 1 == n, $(e).slick(s)
}, wpbingo.slickCarousel = function() {
    var t = ".js-carousel";
    $(t).each(function() {
        var e = $(this),
            t = e.data("nav"),
            i = e.data("dots"),
            a = e.data("center"),
            o = e.data("infinite"),
            n = e.data("autoplay"),
            s = e.data("autoplayspeed"),
            r = e.data("columnone"),
            c = e.data("columntwo"),
            l = e.data("columnthree"),
            d = e.data("rows"),
            u = {
                swipeToSlide: !0,
                arrows: t,
                slidesToShow: r,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: c
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: l
                    }
                }]
            };
        u.centerMode = void 0 !== a && null != a && 1 == a, u.dots = void 0 !== i && null != i && 1 == i, u.infinite = void 0 !== o && null != o && 1 == o, n && (u.autoplay = n, u.autoplaySpeed = s), void 0 !== d && null != d && 1 != d ? (u.rows = d, u.slidesPerRow = r, u.slidesToShow = 1, u.responsive = [{
            breakpoint: 1025,
            settings: {
                slidesPerRow: c,
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesPerRow: l,
                slidesToShow: 1
            }
        }]) : u.rows = 0, e.slick(u)
    }), $(".product-tabs__nav-link").on("shown.bs.tab", function() {
        var e = $(this).closest(".product-tabs");
        0 < e.find(t).length && e.find(t).slick("setPosition")
    })
}, wpbingo.countdown = function() {
    $("[data-countdown]").each(function() {
        var i = $(this),
            e = $(this).data("countdown");
        i.countdown(e, function(e) {
            var t = '<div class="countdown__item"><span>%D</span><span>' + wpbingo.strings.countdownDays + '</span></div><div class="countdown__item"><span>%H</span><span>' + wpbingo.strings.countdownHours + '</span></div><div class="countdown__item"><span>%M</span><span>' + wpbingo.strings.countdownMinutes + '</span></div><div class="countdown__item"><span>%S</span><span>' + wpbingo.strings.countdownSeconds + "</span></div>";
            i.html(e.strftime(t))
        }).on("finish.countdown", function() {
            i.html(wpbingo.strings.countdownFinish)
        })
    })
}, wpbingo.newsletter = function() {
    var t;
    $(".js-wpbingo-newsletter").each(function() {
        $form = $(this), $form.on("submit", function(e) {
            e.preventDefault(), $(".js-alert-newsletter").remove(), $.ajax({
                type: $form.attr("method"),
                url: $form.attr("action"),
                data: $form.serialize(),
                cache: !1,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(e) {
                    "success" === e.result ? ($form.prepend(t(wpbingo.strings.newsletterSuccess, "success")), $(".js-input-newsletter").val("")) : $form.prepend(t(e.msg.replace("0 - ", ""), "danger"))
                },
                error: function(e) {
                    $form.prepend(t(e, "danger"))
                }
            })
        })
    }), t = function(e, t) {
        return '<div class="js-alert-newsletter alert alert--mailchimp alert-' + t + '">' + e + "</div>"
    };
    var e, i = ".js-newsletter-popup",
        a = "newsletter-popup--active";
    0 < $(i).find(".js-newsletter-popup-success").length && wpbingo.setCookie("wpbingo_newsletter_popup", 1, 30), 1 == (e = wpbingo.getCookie("wpbingo_newsletter_popup")) && $(i).remove(), 1 == e || 0 < $(".shopify-challenge__container").length || setTimeout(function() {
        $(i).addClass(a)
    }, 5e3), $(".js-newsletter-popup-close").on("click", function() {
        0 < $(i).find(".alert--mailchimp").length ? wpbingo.setCookie("wpbingo_newsletter_popup", 1, 30) : wpbingo.setCookie("wpbingo_newsletter_popup", 1, 1), $(i).removeClass(a)
    }), $(".js-newsletter-popup-submit").on("click", function() {
        wpbingo.setCookie("wpbingo_newsletter_popup", 1, 30)
    })
}, wpbingo.customNumberInput = function() {
    var a, e = $("body"),
        t = ".js-qty-adjust";
    e.on("click", t, function() {
        var e = $(this),
            t = e.siblings(".js-qty-number"),
            i = parseInt(t.val().replace(/\D/g, "")),
            i = a(i);
        e.hasClass("wpbingo-qty__adjust--plus") ? i += 1 : (--i <= 0 && (i = 0), i <= 0 && "1" == t.attr("min") && (i = 1)), t.val(i)
    }), e.on("focus", t, function() {
        var e = $(this);
        setTimeout(function() {
            e.select()
        }, 50)
    }), a = function(e) {
        return parseFloat(e) === parseInt(e) && !isNaN(e) || (e = 1), e
    }
}, wpbingo.preLoading = function() {
    function a() {
        t++;
        var e = Math.round(t / n.length * 100);
        $(o).stop().animate({
            width: e + "%"
        }, 200, "linear"), t >= n.length && (t = n.length, $(o).stop().animate({
            width: "100%"
        }, 200, "linear", function() {
            $(i).fadeOut(200, function() {
                $(i).remove()
            })
        }))
    }
    var t, i, o, n;
    wpbingo.settings.enablePreLoading && (t = 0, i = "#pre-loading", o = ".pre-loading__bar", n = new Array, $(i).css({
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 1)"
    }), $("body").find("*:not(script)").each(function() {
        var e = "";
        "" != $(this).css("background-image") && -1 == $(this).css("background-image").indexOf("none") && -1 == $(this).css("background-image").indexOf("-gradient") ? -1 != (e = $(this).css("background-image")).indexOf("url") && (e = e.match(/url\((.*?)\)/)[1].replace(/\"/g, "")) : "img" == $(this).get(0).nodeName.toLowerCase() && void 0 !== $(this).attr("src") && (e = $(this).attr("src")), 0 < e.length && n.push(e), n.push(e)
    }), function() {
        for (var e, t, i = 0; i < n.length; i++) e = n[i], t = new Image, $(t).on("load", function() {
            a()
        }).on("error", function() {
            a()
        }).attr("src", e)
    }())
}, wpbingo.init = function() {
    wpbingo.preLoading(), wpbingo.initializeEvents(), wpbingo.setBreakpoints(), wpbingo.cartInit(), wpbingo.collectionPages(), wpbingo.slideshow(), wpbingo.slickCarousel(), wpbingo.countdown(), wpbingo.cookieConsent(), wpbingo.newsletter(), wpbingo.customNumberInput()
}, $(document).ready(function() {
    wpbingo.init();
    var e = new wpbingo.Sections;
    e.register("product-template", wpbingo.Product), e.register("header-section", wpbingo.HeaderSection), e.register("product-recommendations", wpbingo.ProductRecommendations), e.register("login-register", wpbingo.LoginRegister), e.register("search", wpbingo.Search)
});