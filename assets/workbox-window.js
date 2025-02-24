try {
    self["workbox:window:6.6.0"] && _()
} catch {}
function S(t, r) {
    return new Promise(function(e) {
        var i = new MessageChannel;
        i.port1.onmessage = function(f) {
            e(f.data)
        }
        ,
        t.postMessage(r, [i.port2])
    }
    )
}
function W(t, r) {
    for (var e = 0; e < r.length; e++) {
        var i = r[e];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i)
    }
}
function E(t, r) {
    (r == null || r > t.length) && (r = t.length);
    for (var e = 0, i = new Array(r); e < r; e++)
        i[e] = t[e];
    return i
}
function k(t, r) {
    var e;
    if (typeof Symbol == "undefined" || t[Symbol.iterator] == null) {
        if (Array.isArray(t) || (e = function(f, d) {
            if (f) {
                if (typeof f == "string")
                    return E(f, d);
                var h = Object.prototype.toString.call(f).slice(8, -1);
                return h === "Object" && f.constructor && (h = f.constructor.name),
                h === "Map" || h === "Set" ? Array.from(f) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? E(f, d) : void 0
            }
        }(t)) || r && t && typeof t.length == "number") {
            e && (t = e);
            var i = 0;
            return function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                }
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    return (e = t[Symbol.iterator]()).next.bind(e)
}
try {
    self["workbox:core:6.6.0"] && _()
} catch {}
var y = function() {
    var t = this;
    this.promise = new Promise(function(r, e) {
        t.resolve = r,
        t.reject = e
    }
    )
};
function b(t, r) {
    var e = location.href;
    return new URL(t,e).href === new URL(r,e).href
}
var g = function(t, r) {
    this.type = t,
    Object.assign(this, r)
};
function p(t, r, e) {
    return e ? r ? r(t) : t : (t && t.then || (t = Promise.resolve(t)),
    r ? t.then(r) : t)
}
function L() {}
var j = {
    type: "SKIP_WAITING"
};
function P(t, r) {
    if (!r)
        return t && t.then ? t.then(L) : Promise.resolve()
}
var x = function(t) {
    var r, e;
    function i(v, c) {
        var n, o;
        return c === void 0 && (c = {}),
        (n = t.call(this) || this).nn = {},
        n.tn = 0,
        n.rn = new y,
        n.en = new y,
        n.on = new y,
        n.un = 0,
        n.an = new Set,
        n.cn = function() {
            var s = n.fn
              , a = s.installing;
            n.tn > 0 || !b(a.scriptURL, n.sn.toString()) || performance.now() > n.un + 6e4 ? (n.vn = a,
            s.removeEventListener("updatefound", n.cn)) : (n.hn = a,
            n.an.add(a),
            n.rn.resolve(a)),
            ++n.tn,
            a.addEventListener("statechange", n.ln)
        }
        ,
        n.ln = function(s) {
            var a = n.fn
              , u = s.target
              , l = u.state
              , m = u === n.vn
              , w = {
                sw: u,
                isExternal: m,
                originalEvent: s
            };
            !m && n.mn && (w.isUpdate = !0),
            n.dispatchEvent(new g(l,w)),
            l === "installed" ? n.wn = self.setTimeout(function() {
                l === "installed" && a.waiting === u && n.dispatchEvent(new g("waiting",w))
            }, 200) : l === "activating" && (clearTimeout(n.wn),
            m || n.en.resolve(u))
        }
        ,
        n.dn = function(s) {
            var a = n.hn
              , u = a !== navigator.serviceWorker.controller;
            n.dispatchEvent(new g("controlling",{
                isExternal: u,
                originalEvent: s,
                sw: a,
                isUpdate: n.mn
            })),
            u || n.on.resolve(a)
        }
        ,
        n.gn = (o = function(s) {
            var a = s.data
              , u = s.ports
              , l = s.source;
            return p(n.getSW(), function() {
                n.an.has(l) && n.dispatchEvent(new g("message",{
                    data: a,
                    originalEvent: s,
                    ports: u,
                    sw: l
                }))
            })
        }
        ,
        function() {
            for (var s = [], a = 0; a < arguments.length; a++)
                s[a] = arguments[a];
            try {
                return Promise.resolve(o.apply(this, s))
            } catch (u) {
                return Promise.reject(u)
            }
        }
        ),
        n.sn = v,
        n.nn = c,
        navigator.serviceWorker.addEventListener("message", n.gn),
        n
    }
    e = t,
    (r = i).prototype = Object.create(e.prototype),
    r.prototype.constructor = r,
    r.__proto__ = e;
    var f, d, h = i.prototype;
    return h.register = function(v) {
        var c = (v === void 0 ? {} : v).immediate
          , n = c !== void 0 && c;
        try {
            var o = this;
            return function(s, a) {
                var u = s();
                return u && u.then ? u.then(a) : a(u)
            }(function() {
                if (!n && document.readyState !== "complete")
                    return P(new Promise(function(s) {
                        return window.addEventListener("load", s)
                    }
                    ))
            }, function() {
                return o.mn = Boolean(navigator.serviceWorker.controller),
                o.yn = o.pn(),
                p(o.bn(), function(s) {
                    o.fn = s,
                    o.yn && (o.hn = o.yn,
                    o.en.resolve(o.yn),
                    o.on.resolve(o.yn),
                    o.yn.addEventListener("statechange", o.ln, {
                        once: !0
                    }));
                    var a = o.fn.waiting;
                    return a && b(a.scriptURL, o.sn.toString()) && (o.hn = a,
                    Promise.resolve().then(function() {
                        o.dispatchEvent(new g("waiting",{
                            sw: a,
                            wasWaitingBeforeRegister: !0
                        }))
                    }).then(function() {})),
                    o.hn && (o.rn.resolve(o.hn),
                    o.an.add(o.hn)),
                    o.fn.addEventListener("updatefound", o.cn),
                    navigator.serviceWorker.addEventListener("controllerchange", o.dn),
                    o.fn
                })
            })
        } catch (s) {
            return Promise.reject(s)
        }
    }
    ,
    h.update = function() {
        try {
            return this.fn ? P(this.fn.update()) : void 0
        } catch (v) {
            return Promise.reject(v)
        }
    }
    ,
    h.getSW = function() {
        return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise
    }
    ,
    h.messageSW = function(v) {
        try {
            return p(this.getSW(), function(c) {
                return S(c, v)
            })
        } catch (c) {
            return Promise.reject(c)
        }
    }
    ,
    h.messageSkipWaiting = function() {
        this.fn && this.fn.waiting && S(this.fn.waiting, j)
    }
    ,
    h.pn = function() {
        var v = navigator.serviceWorker.controller;
        return v && b(v.scriptURL, this.sn.toString()) ? v : void 0
    }
    ,
    h.bn = function() {
        try {
            var v = this;
            return function(c, n) {
                try {
                    var o = c()
                } catch (s) {
                    return n(s)
                }
                return o && o.then ? o.then(void 0, n) : o
            }(function() {
                return p(navigator.serviceWorker.register(v.sn, v.nn), function(c) {
                    return v.un = performance.now(),
                    c
                })
            }, function(c) {
                throw c
            })
        } catch (c) {
            return Promise.reject(c)
        }
    }
    ,
    f = i,
    (d = [{
        key: "active",
        get: function() {
            return this.en.promise
        }
    }, {
        key: "controlling",
        get: function() {
            return this.on.promise
        }
    }]) && W(f.prototype, d),
    i
}(function() {
    function t() {
        this.Pn = new Map
    }
    var r = t.prototype;
    return r.addEventListener = function(e, i) {
        this.Sn(e).add(i)
    }
    ,
    r.removeEventListener = function(e, i) {
        this.Sn(e).delete(i)
    }
    ,
    r.dispatchEvent = function(e) {
        e.target = this;
        for (var i, f = k(this.Sn(e.type)); !(i = f()).done; )
            (0,
            i.value)(e)
    }
    ,
    r.Sn = function(e) {
        return this.Pn.has(e) || this.Pn.set(e, new Set),
        this.Pn.get(e)
    }
    ,
    t
}());
export {x as Workbox, g as WorkboxEvent, S as messageSW};
