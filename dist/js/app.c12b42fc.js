(function(e) {
  function t(t) {
    for (
      var o, r, i = t[0], a = t[1], c = t[2], d = 0, p = [];
      d < i.length;
      d++
    )
      (r = i[d]),
        Object.prototype.hasOwnProperty.call(u, r) && u[r] && p.push(u[r][0]),
        (u[r] = 0);
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    s && s(t);
    while (p.length) p.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], o = !0, i = 1; i < n.length; i++) {
        var a = n[i];
        0 !== u[a] && (o = !1);
      }
      o && (l.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var o = {},
    u = { app: 0 },
    l = [];
  function r(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = o),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    a = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var s = a;
  l.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("cd49");
  },
  "2de8": function(e, t, n) {},
  3847: function(e, t, n) {
    "use strict";
    var o = n("39c7"),
      u = n.n(o);
    u.a;
  },
  "39c7": function(e, t, n) {},
  "5c0b": function(e, t, n) {
    "use strict";
    var o = n("9c0c"),
      u = n.n(o);
    u.a;
  },
  "9c0c": function(e, t, n) {},
  cd49: function(e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("2de8");
    var o = n("2b0e"),
      u = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "m-3" }, [
          n(
            "div",
            {
              staticClass: "custom-table grid mr-6 mb-6",
              style: {
                "grid-template-columns": "repeat( " + e.columns + ", auto )"
              }
            },
            [
              e._l(e.value.body, function(t, o) {
                return e._l(t, function(t, u) {
                  return n(
                    "div",
                    { key: o + "-" + u, staticClass: "td group relative" },
                    [
                      n("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.model,
                            expression: "td.model"
                          }
                        ],
                        staticClass: "resize-none",
                        domProps: { value: t.model },
                        on: {
                          input: function(n) {
                            n.target.composing ||
                              e.$set(t, "model", n.target.value);
                          }
                        }
                      }),
                      n(
                        "div",
                        { staticClass: "tools group-hover:block" },
                        [
                          n("actions", {
                            staticClass: "row center-x",
                            on: {
                              plus: function(t) {
                                return e.addRow(o);
                              },
                              min: function(t) {
                                return e.removeRow(o);
                              }
                            }
                          }),
                          n("actions", {
                            staticClass: "col center-y",
                            on: {
                              plus: function(t) {
                                return e.addCol(u);
                              },
                              min: function(t) {
                                return e.removeCol(u);
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]
                  );
                });
              })
            ],
            2
          )
        ]);
      },
      l = [],
      r = (n("cb29"), n("d81d"), n("a434"), n("159b"), n("d4ec")),
      i = n("bee2"),
      a = n("99de"),
      c = n("7e84"),
      s = n("262e"),
      d = n("9ab4"),
      p = n("60a3"),
      f = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "actions flex" }, [
          n(
            "button",
            {
              staticClass: "mr-2",
              on: {
                click: function(t) {
                  return e.min();
                }
              }
            },
            [e._v("-")]
          ),
          n(
            "button",
            {
              on: {
                click: function(t) {
                  return e.plus();
                }
              }
            },
            [e._v("+")]
          )
        ]);
      },
      v = [],
      b = (function(e) {
        function t() {
          return (
            Object(r["a"])(this, t),
            Object(a["a"])(this, Object(c["a"])(t).apply(this, arguments))
          );
        }
        return (
          Object(s["a"])(t, e),
          Object(i["a"])(t, [
            {
              key: "plus",
              value: function() {
                console.log("plus");
              }
            },
            {
              key: "min",
              value: function() {
                console.log("close");
              }
            }
          ]),
          t
        );
      })(p["c"]);
    d["a"]([Object(p["b"])("plus")], b.prototype, "plus", null),
      d["a"]([Object(p["b"])("min")], b.prototype, "min", null),
      (b = d["a"]([Object(p["a"])({ components: {} })], b));
    var m = b,
      h = m,
      y = (n("3847"), n("2877")),
      g = Object(y["a"])(h, f, v, !1, null, null, null),
      O = g.exports,
      j = n("8d6e"),
      w = (function(e) {
        function t() {
          var e;
          return (
            Object(r["a"])(this, t),
            (e = Object(a["a"])(
              this,
              Object(c["a"])(t).apply(this, arguments)
            )),
            (e.value = { body: [[{ model: "" }]] }),
            (e.input = null),
            (e.plugin = null),
            e
          );
        }
        return (
          Object(s["a"])(t, e),
          Object(i["a"])(t, [
            {
              key: "mounted",
              value: function() {
                var e = this;
                (this.input = this.$refs.input),
                  j.init(function(t) {
                    e.plugin = t;
                    var n = t.getFieldValue(t.fieldPath);
                    n && (console.log(n), (e.value = e.denormalizeValue(n))),
                      t.startAutoResizer();
                  });
              }
            },
            {
              key: "addCol",
              value: function(e) {
                var t = this;
                this.value.head &&
                  this.value.head.splice(e + 1, 0, { model: "" }),
                  this.value.body.forEach(function(n, o) {
                    t.value.body[o].splice(e + 1, 0, { model: "" });
                  });
              }
            },
            {
              key: "removeCol",
              value: function(e) {
                var t = this;
                this.value.head && this.value.head.splice(e, 1),
                  this.value.body.forEach(function(n, o) {
                    t.value.body[o].splice(e, 1);
                  });
              }
            },
            {
              key: "addRow",
              value: function(e) {
                this.value.body.splice(
                  e + 1,
                  0,
                  new Array(this.columns).fill({ model: "" })
                );
              }
            },
            {
              key: "removeRow",
              value: function(e) {
                e && this.value.body.splice(e, 1);
              }
            },
            {
              key: "denormalizeValue",
              value: function(e) {
                var t = e.body.map(function(e) {
                  return e.map(function(e) {
                    return new Object({ model: e });
                  });
                });
                return { body: t };
              }
            },
            {
              key: "valueToPlugin",
              value: function() {
                console.log("Sending to plugin"),
                  this.plugin &&
                    this.plugin.setFieldValue(
                      this.plugin.fieldPath,
                      this.value
                    );
              }
            },
            {
              key: "columns",
              get: function() {
                return this.value.body[0].length;
              }
            },
            {
              key: "normalizedValue",
              get: function() {
                var e = this.value.body.map(function(e) {
                  return e.map(function(e) {
                    return e.model;
                  });
                });
                return { body: e };
              }
            }
          ]),
          t
        );
      })(p["c"]);
    d["a"](
      [Object(p["d"])("normalizedValue")],
      w.prototype,
      "valueToPlugin",
      null
    ),
      (w = d["a"]([Object(p["a"])({ components: { Actions: O } })], w));
    var k = w,
      _ = k,
      C = (n("5c0b"), Object(y["a"])(_, u, l, !1, null, null, null)),
      x = C.exports;
    (o["a"].config.productionTip = !1),
      new o["a"]({
        render: function(e) {
          return e(x);
        }
      }).$mount("#app");
  }
});
//# sourceMappingURL=app.c12b42fc.js.map
