! function (t) {
    var e = {};

    function o(l) {
        if (e[l]) return e[l].exports;
        var r = e[l] = {
            i: l,
            l: !1,
            exports: {}
        };
        return t[l].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = t, o.c = e, o.d = function (t, e, l) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: l
        })
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var l = Object.create(null);
        if (o.r(l), Object.defineProperty(l, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(l, r, function (e) {
                return t[e]
            }.bind(null, r));
        return l
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 0)
}([function (t, e, o) {
    o(1), t.exports = o(2)
}, function (t, e, o) {
    "use strict";
    o.r(e);
    o(3)
}, function (t, e) {
    const o = document.getElementById("canvas"),
        l = o.getContext("2d"),
        r = document.querySelector(".table-choose-list"),
        s = document.querySelector(".color-choose-list"),
        a = document.querySelector(".table__item_rnd_curr"),
        n = document.querySelector(".table__item_rnd_prev"),
        c = document.querySelector(".paint-bucket"),
        i = document.querySelector(".choose-color"),
        u = document.querySelector(".pensil"),
        g = document.querySelector(".input-color"),
        d = document.querySelector(".label-color"),
        m = r.querySelectorAll(".table__item"),
        {
            body: f
        } = document,
        h = 1,
        v = 8;
    let S, b, p = !1,
        L = !1,
        y = [],
        $ = [];

    function I(t, e) {
        return !(t > +o.width || t < 0 || e > +o.height || e < 0)
    }

    function _(t) {
        if (p) {
            const e = Math.floor(t.offsetX / v),
                o = Math.floor(t.offsetY / v);
            y = localStorage.getItem("color").split(","), l.fillStyle = `rgb(${y[0]}, ${y[1]}, ${y[2]})`;
            const r = Math.abs(e - S),
                s = Math.abs(o - b),
                a = S < e ? 1 : -1,
                n = b < o ? 1 : -1;
            let c = r - s;
            for (; S !== e || b !== o;) {
                l.fillRect(S, b, h, h);
                const t = 2 * c;
                t > -s && (c -= s, S += a), t < r && (c += r, b += n)
            }
        }
    }

    function C(t) {
        p = !0;
        const e = Math.floor(t.offsetX / v),
            o = Math.floor(t.offsetY / v);
        l.beginPath(), y = localStorage.getItem("color").split(","), l.fillStyle = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, l.fillRect(e, o, h, h), S = e, b = o
    }

    function k(t) {
        if (L) {
            const e = Math.floor(t.offsetX / v),
                o = Math.floor(t.offsetY / v),
                r = l.getImageData(e, o, 1, 1);
            r.data.toString() !== localStorage.getItem("color") && (localStorage.setItem("prevColor", localStorage.getItem("color")), localStorage.setItem("color", r.data), y = localStorage.getItem("color").split(","), $ = localStorage.getItem("prevColor").split(","), "0" === y[3] && (y.splice(0, 4, "255", "255", "255", "255"), localStorage.setItem("color", y)), a.style.backgroundColor = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, n.style.backgroundColor = `rgb(${$[0]}, ${$[1]}, ${$[2]})`)
        }
    }

    function E() {
        localStorage.setItem("prevColor", localStorage.getItem("color")), localStorage.setItem("color", y), $ = localStorage.getItem("prevColor").split(","), a.style.backgroundColor = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, n.style.backgroundColor = `rgb(${$[0]}, ${$[1]}, ${$[2]})`
    }

    function w(t) {
        const e = Math.floor(t.offsetX / v),
            o = Math.floor(t.offsetY / v),
            r = l.getImageData(e, o, 1, 1);
        y = localStorage.getItem("color").split(","), l.fillStyle = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, l.strokeStyle = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, l.fillStyle = `rgb(${y[0]},${y[1]},${y[2]})`,
            function (t, e, o) {
                const r = [];
                for (r.push([t, e]); 0 !== r.length;) {
                    const t = r[0];
                    l.getImageData(t[0], t[1], 1, 1).data.toString() === o && I(t[0], t[1]) && l.fillRect(t[0], t[1], 1, 1), r.shift(), l.getImageData(t[0] + 1, t[1], 1, 1).data.toString() === o && I(t[0] + 1, t[1]) && (l.fillRect(t[0] + 1, t[1], 1, 1), r.push([t[0] + 1, t[1]])), l.getImageData(t[0] - 1, t[1], 1, 1).data.toString() === o && I(t[0] - 1, t[1]) && (l.fillRect(t[0] - 1, t[1], 1, 1), r.push([t[0] - 1, t[1]])), l.getImageData(t[0], t[1] + 1, 1, 1).data.toString() === o && I(t[0], t[1] + 1) && (l.fillRect(t[0], t[1] + 1, 1, 1), r.push([t[0], t[1] + 1])), l.getImageData(t[0], t[1] - 1, 1, 1).data.toString() === o && I(t[0], t[1] - 1) && (l.fillRect(t[0], t[1] - 1, 1, 1), r.push([t[0], t[1] - 1]))
                }
            }(e, o, r.data.toString())
    }

    function M() {
        const t = parseInt(g.value[1] + g.value[2], 16),
            e = parseInt(g.value[3] + g.value[4], 16),
            o = parseInt(g.value[5] + g.value[6], 16);
        localStorage.getItem("color") !== `${t},${e},${o},255` && (y[0] = t, y[1] = e, y[2] = o, y[3] = "255", E(), d.style.backgroundColor = `rgb(${t},${e},${o})`)
    }

    function P() {
        f.classList.remove("cursorPensil"), f.classList.remove("cursorChooseColor"), f.classList.add("cursorPaintBucket"), o.removeEventListener("mousemove", _), o.removeEventListener("mousedown", C), o.addEventListener("mousedown", w)
    }

    function j() {
        f.classList.remove("cursorPensil"), f.classList.remove("cursorPaintBucket"), f.classList.add("cursorChooseColor"), o.removeEventListener("mousemove", _), o.removeEventListener("mousedown", C), o.removeEventListener("mousedown", w), f.addEventListener("mousedown", k)
    }

    function q() {
        null === localStorage.getItem("color") ? (localStorage.setItem("color", "0,0,0,255"), localStorage.setItem("prevColor", "255,255,255,0"), l.fillStyle = "rgb(0, 0, 0)", l.strokeStyle = "rgb(0, 0, 0)", a.style.backgroundColor = "rgb(0, 0, 0)") : (y = localStorage.getItem("color").split(","), $ = localStorage.getItem("prevColor").split(","), l.fillStyle = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, l.strokeStyle = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, a.style.backgroundColor = `rgb(${y[0]}, ${y[1]}, ${y[2]})`, n.style.backgroundColor = `rgb(${$[0]}, ${$[1]}, ${$[2]})`), f.classList.remove("cursorPaintBucket"), f.classList.remove("cursorChooseColor"), f.classList.add("cursorPensil"), l.lineWidth = h, o.removeEventListener("mousedown", w), o.addEventListener("mousemove", _), o.addEventListener("mousedown", C), o.addEventListener("mouseout", () => {
            p = !1, L = !1
        }), o.addEventListener("mousemove", () => {
            L = !0
        }), f.addEventListener("mouseup", () => {
            p = !1
        })
    }
    o.width = "64", o.height = "64", q(),
        function () {
            if (null === localStorage.getItem("canvas")) return;
            const t = localStorage.getItem("canvas"),
                e = new Image;
            e.src = t, e.onload = () => {
                l.drawImage(e, 0, 0)
            }
        }(), d.style.backgroundColor = "rgb(0, 0, 0)", r.addEventListener("click", t => {
            const {
                target: e
            } = t, r = e.closest(".table__item");
            if (!r.classList.contains("table__item_no-use")) {
                if (r.classList.contains("clear-canvas")) return l.fillStyle = "white", l.fillRect(0, 0, o.width, o.height), void localStorage.setItem("canvas", o.toDataURL());
                for (let t = 0; t < m.length; t += 1) m[t].classList.remove("highlight");
                r.classList.add("highlight"), r.classList.contains("paint-bucket") && P(), r.classList.contains("choose-color") && j(), r.classList.contains("pensil") && q()
            }
        }), s.addEventListener("click", t => {
            const {
                target: e
            } = t, o = e.closest(".table__item");
            if (!o.classList.contains("table__item_rnd_curr")) {
                if (o.classList.contains("js-list-input") && M(), o.classList.contains("js-list-prev")) {
                    const t = localStorage.getItem("prevColor");
                    y = t.split(","), E()
                }
                o.classList.contains("js-list-red") && y.toString() !== ["255", "0", "0", "255"].toString() && (y = ["255", "0", "0", "255"], E()), o.classList.contains("js-list-blue") && y.toString() !== ["0", "0", "255", "255"].toString() && (y = ["0", "0", "255", "255"], E())
            }
        }), o.addEventListener("mouseup", () => {
            localStorage.setItem("canvas", o.toDataURL())
        }), document.addEventListener("keydown", t => {
            "KeyP" === t.code && (c.classList.remove("highlight"), i.classList.remove("highlight"), u.classList.add("highlight"), q()), "KeyB" === t.code && (u.classList.remove("highlight"), i.classList.remove("highlight"), c.classList.add("highlight"), P()), "KeyC" === t.code && (c.classList.remove("highlight"), u.classList.remove("highlight"), i.classList.add("highlight"), j())
        }), g.addEventListener("change", () => {
            M()
        })
}, function (t, e) {}]);