(function(t) {
    function e(e) {
        for (var i, s, l = e[0], c = e[1], h = e[2], u = e[3] || [], f = 0, p = []; f < l.length; f++)
            s = l[f],
            Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]),
            o[s] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        d && d(e),
        r.push.apply(r, u);
        while (p.length)
            p.shift()();
        return a.push.apply(a, h || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, c = 1; c < n.length; c++) {
                var h = n[c];
                0 !== o[h] && (i = !1)
            }
            i && (a.splice(e--, 1),
            t = l(l.s = n[0]))
        }
        return 0 === a.length && (r.forEach((function(t) {
            if (void 0 === o[t]) {
                o[t] = null;
                var e = document.createElement("link");
                l.nc && e.setAttribute("nonce", l.nc),
                e.rel = "prefetch",
                e.as = "script",
                e.href = s(t),
                document.head.appendChild(e)
            }
        }
        )),
        r.length = 0),
        t
    }
    var i = {}
      , o = {
        app: 0
    }
      , a = []
      , r = [];
    function s(t) {
        return l.p + "js/" + ({
            about: "about"
        }[t] || t) + "." + {
            about: "a1bb9262"
        }[t] + ".js"
    }
    function l(e) {
        if (i[e])
            return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, l),
        n.l = !0,
        n.exports
    }
    l.e = function(t) {
        var e = []
          , n = o[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var i = new Promise((function(e, i) {
                    n = o[t] = [e, i]
                }
                ));
                e.push(n[2] = i);
                var a, r = document.createElement("script");
                r.charset = "utf-8",
                r.timeout = 120,
                l.nc && r.setAttribute("nonce", l.nc),
                r.src = s(t);
                var c = new Error;
                a = function(e) {
                    r.onerror = r.onload = null,
                    clearTimeout(h);
                    var n = o[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                              , a = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")",
                            c.name = "ChunkLoadError",
                            c.type = i,
                            c.request = a,
                            n[1](c)
                        }
                        o[t] = void 0
                    }
                }
                ;
                var h = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: r
                    })
                }
                ), 12e4);
                r.onerror = r.onload = a,
                document.head.appendChild(r)
            }
        return Promise.all(e)
    }
    ,
    l.m = t,
    l.c = i,
    l.d = function(t, e, n) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    l.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(t, e) {
        if (1 & e && (t = l(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (l.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                l.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    l.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return l.d(e, "a", e),
        e
    }
    ,
    l.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    l.p = "/",
    l.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var c = window["webpackJsonp"] = window["webpackJsonp"] || []
      , h = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var u = 0; u < c.length; u++)
        e(c[u]);
    var d = h
      , f = function() {
        return a.push([0, "chunk-vendors"]),
        n()
    }();
    e([[], {}, 0, ["about"]])
}
)({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "0423": function(t) {
        t.exports = JSON.parse('{"appName":"五目並べ計算機","common":{"confirm":"確認","cancel":"キャンセル"},"tabbar":{"game":"ゲーム盤","settings":"設定","about":"情報"},"game":{"balance1":"1手バランス点を探す","balance2":"2手バランス点を探す","flip":"反転","move":"移動","info":{"depth":"深さ","eval":"評価","speed":"速度","nodes":"ノード数","time":"所要時間","bestline":"最良のルート","nbestIndex":"番号"},"interruptThinking":{"title":"AI思考中","msg":"今すぐ思考を中止しますか？"},"swap":{"title":"交替","msg":"AIが黒白交替を選択しました。","questionTitle":"交替しますか？","questionMsg":"交替を選択しますか？"},"forbid":{"title":"禁手","msg":"この場所は禁手です。"},"shotJpg":"静的スクリーンショット","shotGif":"GIFスクリーンショット","gifDelay":"フレームごとの時間を入力（単位：ミリ秒）","gifStart":"開始番号を入力","gifLoading":"GIFを生成中...","saveScreenshot":"スクリーンショットをローカルに保存","saveScreenshotIOS":"画像を長押ししてローカルに保存","currentPos":"局面コード","evalChart":"評価グラフ","black":"黒石","white":"白石","engineLoading":"エンジンデータをダウンロード中..."},"setting":{"language":"言語","thinking":{"timeTitle":"思考時間","turnTime":"1手の時間（秒）","matchTime":"ゲーム時間（秒）","maxDepth":"最大深さ","maxNode":"最大ノード数（M）","fast":"早指し（1ゲーム約3分）","slow":"長考（1ゲーム約15分）","analysis":"分析モード（時間無制限）","custom":"カスタム","handicap":"棋力制限","nbest":"複数点分析","thinkTitle":"思考","threads":"スレッド数","pondering":"バックグラウンド思考","hashSize":"ハッシュテーブルのサイズ","config":{"210901":"従来型（2021/09/01）","220723":"従来型（2022/07/23）","title":"エンジンの重み付け","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"分析範囲","square2":"2マス","square2line3":"2.5マス","square3":"3マス","square3line4":"3.5マス（推奨）","square4":"4マス","fullboard":"全盤"}},"board":{"title":"ゲーム盤","size":"盤サイズ","rule":{"title":"ルール","gomoku":"禁手なし","standard":"禁手なし・長連不可","renju":"禁手あり","swap1":"禁手なし1手交替"},"aiThinkBlack":"AIが黒石","aiThinkWhite":"AIが白石","clickCheck":{"title":"着手方法","direct":"直接着手","confirm":"確認後着手","slide":"スライド着手"},"showTitle":"ゲーム盤表示","showCoord":"座標を表示","showAnalysis":"分析を表示","showDetail":"詳細を表示","showIndex":"番号を表示","showLastStep":"最後の手を強調表示","showWinline":"勝利ラインを表示","showForbid":"禁手を表示","showPvEval":{"title":"分析評価を表示","none":"表示しない","eval":"評価を表示","winrate":"勝率を表示"},"colorTitle":"色","boardColor":"盤の色","lastStepColor":"最後の手の色","winlineColor":"勝利ラインの色","bestMoveColor":"分析 - 最良の着手","thinkingMoveColor":"分析 - 検索中の着手","thoughtMoveColor":"分析 - 検索済みの着手","lostMoveColor":"分析 - 敗着"},"browser":{"capability":"ブラウザ機能","simd":"SIMD加速","relaxedSimd":"（強化版）","threads":"マルチスレッド","maxthreads":"最大スレッド数"},"reset":"全設定をリセット"}}')
    },
    "1dbf": function(t, e, n) {
        e = t.exports = n("2350")(!1),
        e.push([t.i, "\n.selectable[data-v-51272826] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.game[data-v-51272826] {\n  overflow-x: hidden;\n}\n.button-box[data-v-51272826] {\n  margin: auto;\n  margin-top: min(1vw, 10px);\n}\n.seperator[data-v-51272826] {\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n.screenshot-box[data-v-51272826] {\n  width: 95%;\n  text-align: center;\n  background-color: #fff;\n  height: 95%;\n  margin: 0 auto;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.screenshot-img[data-v-51272826] {\n  -webkit-touch-callout: default;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  max-width: 100%;\n  max-height: calc(100% - 42px);\n}\n@media (min-aspect-ratio: 4/3) and (min-width: 1024px) {\n.seperator[data-v-51272826] {\n    display: none !important;\n}\n.game[data-v-51272826] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n.board-box[data-v-51272826] {\n    margin: 20px 10px;\n}\n.info-box[data-v-51272826] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    margin-top: 20px;\n    margin-left: min(20px, max(30vw - 350px, 0px));\n    margin-right: calc(10px + min(20px, max(30vw - 350px, 0px)));\n    padding-top: 10px;\n    max-width: 600px;\n}\n}\n.loading-circle[data-v-51272826] {\n  width: 100px;\n  height: 100px;\n  margin: 20px auto;\n}\n", ""])
    },
    "249c": function(t, e, n) {
        e = t.exports = n("2350")(!1),
        e.push([t.i, "\n.board[data-v-040cf58d] {\n  width: 100%;\n}\n.board-stage[data-v-040cf58d] {\n  position: relative;\n  margin: 0 auto;\n}\ncanvas[data-v-040cf58d] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -ms-touch-action: none;\n      touch-action: none;\n}\n#board[data-v-040cf58d] {\n  z-index: 1;\n}\n#piece[data-v-040cf58d] {\n  z-index: 2;\n}\n#realtime[data-v-040cf58d] {\n  z-index: 3;\n}\n#shot[data-v-040cf58d] {\n  z-index: -1;\n  display: none;\n}\n", ""])
    },
    "39b6": function(t, e, n) {
        var i = n("249c");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var o = n("499e").default;
        o("13fdc825", i, !0, {})
    },
    "3be9": function(t, e, n) {
        var i = n("c430");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var o = n("499e").default;
        o("01c11d08", i, !0, {})
    },
    "3fbb": function(t, e, n) {
        var i = n("f708");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var o = n("499e").default;
        o("5470eac5", i, !0, {})
    },
    "423e": function(t) {
        t.exports = JSON.parse('{"appName":"五子棋计算器","common":{"confirm":"确认","cancel":"取消"},"tabbar":{"game":"棋盘","settings":"设置","about":"关于"},"game":{"balance1":"找一步平衡点","balance2":"找二步平衡点","flip":"翻转","move":"移动","info":{"depth":"深度","eval":"评估","speed":"速度","nodes":"节点数","time":"用时","bestline":"路线","nbestIndex":"序号"},"interruptThinking":{"title":"AI 正在思考","msg":"要立即停止思考吗?"},"swap":{"title":"交换","msg":"AI 选择黑白交换。","questionTitle":"交换?","questionMsg":"你选择交换吗?"},"forbid":{"title":"禁手","msg":"该位置为禁手。"},"shotJpg":"静态截图","shotGif":"GIF截图","gifDelay":"输入每帧时长（单位：毫秒）","gifStart":"输入起始序号","gifLoading":"生成GIF中...","saveScreenshot":"保存截图到本地","saveScreenshotIOS":"长按图片保存到本地","currentPos":"局面代码","evalChart":"评估曲线","black":"黑棋","white":"白棋","engineLoading":"下载引擎数据中..."},"setting":{"language":"语言","thinking":{"timeTitle":"思考时间","turnTime":"步时(秒)","matchTime":"局时(秒)","maxDepth":"最大深度","maxNode":"最大节点数(M)","fast":"快棋(一局大约 3 分钟)","slow":"慢棋(一局大约 15 分钟)","analysis":"分析模式(不限时)","custom":"自定义","handicap":"棋力限制","nbest":"多点分析","thinkTitle":"思考","threads":"线程数","pondering":"后台思考","hashSize":"置换表大小","config":{"210901":"传统(2021/09/01)","220723":"传统(2022/07/23)","title":"引擎权重","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"选点范围","square2":"两圈","square2line3":"两圈半","square3":"三圈","square3line4":"三圈半 (推荐)","square4":"四圈","fullboard":"全盘"}},"board":{"title":"棋盘","size":"棋盘大小","rule":{"title":"规则","gomoku":"无禁手","standard":"无禁手长连不赢","renju":"有禁手","swap1":"无禁手一手交换"},"aiThinkBlack":"AI执黑","aiThinkWhite":"AI执白","clickCheck":{"title":"落子方式","direct":"直接落子","confirm":"二次确认","slide":"滑动落子"},"showTitle":"棋盘显示","showCoord":"显示坐标","showAnalysis":"显示分析","showDetail":"显示思考细节","showIndex":"显示序号","showLastStep":"高亮最后一步","showWinline":"显示胜利线","showForbid":"显示禁手","showPvEval":{"title":"显示分析估值","none":"不显示","eval":"显示估值","winrate":"显示胜率"},"colorTitle":"颜色","boardColor":"棋盘颜色","lastStepColor":"最后一步颜色","winlineColor":"胜利线颜色","bestMoveColor":"分析 - 最佳着法","thinkingMoveColor":"分析 - 正在搜索着法","thoughtMoveColor":"分析 - 已搜索着法","lostMoveColor":"分析 - 必败着法"},"browser":{"capability":"浏览器能力","simd":"SIMD加速","relaxedSimd":"(增强)","threads":"多线程","maxthreads":"最大线程数"},"reset":"重置所有设置"}}')
    },
    "49f8": function(t, e, n) {
        var i = {
            "./en.json": "edd4",
            "./ja.json": "0423",
            "./ko.json": "dd11",
            "./ru.json": "7704",
            "./vi.json": "aced",
            "./zh-CN.json": "423e",
            "./zh-TW.json": "9ea5"
        };
        function o(t) {
            var e = a(t);
            return n(e)
        }
        function a(t) {
            if (!n.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return i[t]
        }
        o.keys = function() {
            return Object.keys(i)
        }
        ,
        o.resolve = a,
        t.exports = o,
        o.id = "49f8"
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("a481"),
        n("cadf"),
        n("551c"),
        n("f751"),
        n("097d");
        var i = n("2b0e")
          , o = (n("8e6e"),
        n("ac6a"),
        n("456d"),
        n("ade3"))
          , a = n("2ae3")
          , r = n("1481")
          , s = n("bb51")
          , l = n("4e41")
          , c = n("1686")
          , h = n("2f62");
        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        a["a"],
        r["a"],
        s["a"],
        l["a"],
        c["a"],
        d(d(d({}, Object(h["e"])("settings", ["language"])), Object(h["e"])("ai", ["messages"])), {}, {
            route: function() {
                return this.$route
            }
        }),
        d(d(d(d({}, Object(h["d"])("settings", ["setValue"])), Object(h["b"])("settings", ["readCookies"])), Object(h["b"])(["getBrowserCapabilities"])), {}, {
            showMessages: function() {
                this.drawerOpen = !this.drawerOpen
            }
        });
        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var v = {
            components: {
                ViewBox: a["a"],
                XHeader: r["a"],
                Tabbar: s["a"],
                TabbarItem: l["a"],
                Drawer: c["a"]
            },
            data: function() {
                return {
                    showHeader: !0,
                    drawerOpen: !1
                }
            },
            computed: p(p(p({}, Object(h["e"])("settings", ["language"])), Object(h["e"])("ai", ["messages"])), {}, {
                route: function() {
                    return this.$route
                }
            }),
            methods: p(p(p(p({}, Object(h["d"])("settings", ["setValue"])), Object(h["b"])("settings", ["readCookies"])), Object(h["b"])(["getBrowserCapabilities"])), {}, {
                showMessages: function() {
                    this.drawerOpen = !this.drawerOpen
                }
            }),
            watch: {
                language: function(t) {
                    this.$i18n.locale = t
                }
            },
            created: function() {
                this.getBrowserCapabilities(),
                this.readCookies(),
                this.language ? this.$i18n.locale = this.language : this.setValue({
                    key: "language",
                    value: this.$i18n.locale
                })
            },
            mounted: function() {
                var t = this;
                window.onresize = function() {
                    t.$store.commit("setScreenSize", {
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight
                    })
                }
            }
        }
          , g = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticStyle: {
                    height: "100%"
                },
                attrs: {
                    id: "app"
                }
            }, [n("drawer", {
                attrs: {
                    show: t.drawerOpen,
                    "show-mode": "overlay",
                    placement: "right",
                    "drawer-style": {
                        "background-color": "rgba(255,255,255,1.0)",
                        width: "min(75%, 600px)",
                        height: "100%"
                    }
                },
                on: {
                    "update:show": function(e) {
                        t.drawerOpen = e
                    }
                }
            }, [n("div", {
                ref: "drawer",
                staticClass: "drawer",
                attrs: {
                    slot: "drawer"
                },
                slot: "drawer"
            }, [n("div", {
                staticStyle: {
                    padding: "10px"
                }
            }, t._l(t.messages, (function(e, i) {
                return n("p", {
                    key: i
                }, [t._v(t._s(e)), n("br")])
            }
            )), 0)]), t._v(" "), n("view-box", {
                ref: "viewBox",
                attrs: {
                    "body-padding-top": t.showHeader ? "46px" : "0",
                    "body-padding-bottom": "50px"
                }
            }, [t.showHeader ? n("x-header", {
                staticClass: "header-bar",
                attrs: {
                    slot: "header",
                    "left-options": {
                        showBack: !1
                    },
                    "right-options": {
                        showMore: !1
                    }
                },
                on: {
                    "on-click-more": t.showMessages
                },
                slot: "header"
            }, [t._v("\n        " + t._s(t.$t("appName")) + "\n        "), "/settings" !== t.route.path && "/about" !== t.route.path ? n("a", {
                staticClass: "needsclick",
                attrs: {
                    slot: "right"
                },
                on: {
                    click: t.showMessages
                },
                slot: "right"
            }, [n("i", {
                staticClass: "fa fa-list fa-lg",
                staticStyle: {
                    color: "#d6eaf8"
                },
                attrs: {
                    "aria-hidden": "true"
                }
            })]) : t._e()]) : t._e(), t._v(" "), n("keep-alive", [n("router-view", {
                staticClass: "router-view"
            })], 1), t._v(" "), n("tabbar", {
                staticClass: "app-tabber",
                staticStyle: {
                    position: "fixed"
                },
                attrs: {
                    slot: "bottom"
                },
                slot: "bottom"
            }, [n("tabbar-item", {
                attrs: {
                    link: "/",
                    selected: "/settings" !== t.route.path && "/about" !== t.route.path
                }
            }, [n("svg", {
                staticClass: "vux-x-icon vux-x-icon-ios-grid-view-outline",
                attrs: {
                    slot: "icon",
                    type: "ios-grid-view-outline",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                },
                slot: "icon"
            }, [n("path", {
                attrs: {
                    d: "M448 192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192h112zM320 320H192V192h128v128z"
                }
            })]), t._v(" "), n("svg", {
                staticClass: "vux-x-icon vux-x-icon-ios-grid-view-outline tabber-icon-active",
                attrs: {
                    slot: "icon-active",
                    type: "ios-grid-view-outline",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                },
                slot: "icon-active"
            }, [n("path", {
                attrs: {
                    d: "M448 192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192h112zM320 320H192V192h128v128z"
                }
            })]), t._v(" "), n("span", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            }, [t._v(t._s(t.$t("tabbar.game")))])]), t._v(" "), n("tabbar-item", {
                attrs: {
                    link: "/settings",
                    selected: "/settings" === t.route.path
                }
            }, [n("svg", {
                staticClass: "vux-x-icon vux-x-icon-ios-cog-outline",
                attrs: {
                    slot: "icon",
                    type: "ios-cog-outline",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                },
                slot: "icon"
            }, [n("path", {
                attrs: {
                    d: "M448 272.754v-32.008l-33.291-8.703-2.601-13.204 27.594-20.905-12.197-29.608-34.392 4.802-7.498-10.603 17.696-29.708-22.594-22.605-30.192 17.404-10.697-7.302 5.298-35.009-29.492-12.303-21.594 28.308-12.297-2.601L273.045 64h-31.991l-9.197 34.909-12.098 2.4-21.494-29.008-29.592 12.304 4.799 35.709-11.697 7.202-31.292-18.705-22.594 22.606 18.795 31.508-6.698 10.502-35.49-5.001-12.197 29.608 28.893 21.706-2.399 12.203L64 240.846v32.008l34.69 8.903 2.4 12.503-28.394 21.306 12.297 29.508 34.991-5.002 7.099 11.303-17.896 30.608 22.595 22.605 30.192-18.204 11.196 7.302-4.498 34.31 29.592 12.202 20.595-27.807 13.396 2.5L241.054 448h31.991l8.298-33.109 13.597-2.601 20.694 27.107 29.593-12.204-4.998-33.708 10.196-7.401 28.992 16.904 22.595-22.606-16.795-28.907 7.896-11.403 33.791 4.802 12.298-29.508-27.193-20.506 2.7-13.503L448 272.754zm-28.293 48.013l-2.8 6.702-31.891-4.501-18.896 27.807 15.695 27.106-5.198 5.202-27.293-15.904-26.593 18.204 4.799 31.809-6.698 2.802-19.595-25.607-32.892 6.501-7.798 31.209h-7.198l-8.397-31.309-32.592-6.501-19.495 26.406-6.698-2.801 4.399-32.509-27.493-18.304-28.793 17.504-5.099-5.101 16.996-29.108-18.096-27.606-33.191 4.701-2.699-6.603 26.894-20.205-6.199-31.809-32.991-8.502v-7.202l32.991-8.402 6.299-31.608-27.293-20.505 2.699-6.602 33.691 4.801 17.796-26.807-17.996-30.008 4.999-5.001 20.595 12.303 9.197 5.501 27.893-18.205-4.499-33.809 6.699-2.8 20.294 27.407 31.492-6.102 8.798-33.208h7.198l8.298 33.008 31.691 6.301 20.095-26.807 6.598 2.801-4.999 33.108 27.193 18.105 28.292-16.205 5.1 5.102-16.695 28.007 18.396 27.007 32.491-4.601 2.799 6.702-26.193 19.705 6.498 32.508 31.292 8.102v7.202l-31.391 8.103-6.499 32.709 25.993 19.807z"
                }
            }), n("path", {
                attrs: {
                    d: "M256 128c-70.692 0-128 57.308-128 128 0 70.693 57.308 128 128 128s128-57.307 128-128c0-70.692-57.308-128-128-128zM144 256c0-29.916 11.65-58.042 32.804-79.195C197.958 155.65 226.084 144 256 144c7.496 0 14.88.732 22.069 2.161L250.3 250.1l-104.155 27.888A113.183 113.183 0 0 1 144 256zm112 112c-29.917 0-58.042-11.65-79.196-32.804-11.927-11.926-20.831-26.069-26.331-41.499L253.9 266.2l74.935 74.889C308.558 358.501 283.009 368 256 368zm84.154-38.099L265.2 254.9l28.05-104.58c15.604 5.487 29.904 14.443 41.945 26.484C356.35 197.958 368 226.084 368 256c0 27.486-9.841 53.457-27.846 73.901z"
                }
            })]), t._v(" "), n("svg", {
                staticClass: "vux-x-icon vux-x-icon-ios-cog-outline tabber-icon-active",
                attrs: {
                    slot: "icon-active",
                    type: "ios-cog-outline",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                },
                slot: "icon-active"
            }, [n("path", {
                attrs: {
                    d: "M448 272.754v-32.008l-33.291-8.703-2.601-13.204 27.594-20.905-12.197-29.608-34.392 4.802-7.498-10.603 17.696-29.708-22.594-22.605-30.192 17.404-10.697-7.302 5.298-35.009-29.492-12.303-21.594 28.308-12.297-2.601L273.045 64h-31.991l-9.197 34.909-12.098 2.4-21.494-29.008-29.592 12.304 4.799 35.709-11.697 7.202-31.292-18.705-22.594 22.606 18.795 31.508-6.698 10.502-35.49-5.001-12.197 29.608 28.893 21.706-2.399 12.203L64 240.846v32.008l34.69 8.903 2.4 12.503-28.394 21.306 12.297 29.508 34.991-5.002 7.099 11.303-17.896 30.608 22.595 22.605 30.192-18.204 11.196 7.302-4.498 34.31 29.592 12.202 20.595-27.807 13.396 2.5L241.054 448h31.991l8.298-33.109 13.597-2.601 20.694 27.107 29.593-12.204-4.998-33.708 10.196-7.401 28.992 16.904 22.595-22.606-16.795-28.907 7.896-11.403 33.791 4.802 12.298-29.508-27.193-20.506 2.7-13.503L448 272.754zm-28.293 48.013l-2.8 6.702-31.891-4.501-18.896 27.807 15.695 27.106-5.198 5.202-27.293-15.904-26.593 18.204 4.799 31.809-6.698 2.802-19.595-25.607-32.892 6.501-7.798 31.209h-7.198l-8.397-31.309-32.592-6.501-19.495 26.406-6.698-2.801 4.399-32.509-27.493-18.304-28.793 17.504-5.099-5.101 16.996-29.108-18.096-27.606-33.191 4.701-2.699-6.603 26.894-20.205-6.199-31.809-32.991-8.502v-7.202l32.991-8.402 6.299-31.608-27.293-20.505 2.699-6.602 33.691 4.801 17.796-26.807-17.996-30.008 4.999-5.001 20.595 12.303 9.197 5.501 27.893-18.205-4.499-33.809 6.699-2.8 20.294 27.407 31.492-6.102 8.798-33.208h7.198l8.298 33.008 31.691 6.301 20.095-26.807 6.598 2.801-4.999 33.108 27.193 18.105 28.292-16.205 5.1 5.102-16.695 28.007 18.396 27.007 32.491-4.601 2.799 6.702-26.193 19.705 6.498 32.508 31.292 8.102v7.202l-31.391 8.103-6.499 32.709 25.993 19.807z"
                }
            }), n("path", {
                attrs: {
                    d: "M256 128c-70.692 0-128 57.308-128 128 0 70.693 57.308 128 128 128s128-57.307 128-128c0-70.692-57.308-128-128-128zM144 256c0-29.916 11.65-58.042 32.804-79.195C197.958 155.65 226.084 144 256 144c7.496 0 14.88.732 22.069 2.161L250.3 250.1l-104.155 27.888A113.183 113.183 0 0 1 144 256zm112 112c-29.917 0-58.042-11.65-79.196-32.804-11.927-11.926-20.831-26.069-26.331-41.499L253.9 266.2l74.935 74.889C308.558 358.501 283.009 368 256 368zm84.154-38.099L265.2 254.9l28.05-104.58c15.604 5.487 29.904 14.443 41.945 26.484C356.35 197.958 368 226.084 368 256c0 27.486-9.841 53.457-27.846 73.901z"
                }
            })]), t._v(" "), n("span", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            }, [t._v(t._s(t.$t("tabbar.settings")))])]), t._v(" "), n("tabbar-item", {
                attrs: {
                    link: "/about",
                    selected: "/about" === t.route.path
                }
            }, [n("svg", {
                staticClass: "vux-x-icon vux-x-icon-ios-information-outline",
                attrs: {
                    slot: "icon",
                    type: "ios-information-outline",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                },
                slot: "icon"
            }, [n("circle", {
                attrs: {
                    cx: "251.5",
                    cy: "172",
                    r: "20"
                }
            }), n("path", {
                attrs: {
                    d: "M272 344V216h-48v8h16v120h-16v8h64v-8z"
                }
            }), n("path", {
                attrs: {
                    d: "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"
                }
            })]), t._v(" "), n("svg", {
                staticClass: "vux-x-icon vux-x-icon-ios-information-outline tabber-icon-active",
                attrs: {
                    slot: "icon-active",
                    type: "ios-information-outline",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 512 512"
                },
                slot: "icon-active"
            }, [n("circle", {
                attrs: {
                    cx: "251.5",
                    cy: "172",
                    r: "20"
                }
            }), n("path", {
                attrs: {
                    d: "M272 344V216h-48v8h16v120h-16v8h64v-8z"
                }
            }), n("path", {
                attrs: {
                    d: "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"
                }
            })]), t._v(" "), n("span", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            }, [t._v(t._s(t.$t("tabbar.about")))])])], 1), t._v(" "), n("div", {
                staticClass: "footer",
                staticStyle: {
                    position: "relative",
                    "text-align": "center",
                    margin: "10px auto",
                    width: "100vw"
                }
            }, [n("a", {
                staticStyle: {
                    "text-decoration": "none",
                    color: "lightgray",
                    "font-size": "0.8rem",
                    "margin-right": "10px"
                },
                attrs: {
                    href: "https://beian.miit.gov.cn/",
                    target: "_blank"
                }
            }, [t._v("闽ICP备2024061122号-1")])])], 1)], 1)], 1)
        }
          , m = []
          , b = n("2455");
        function w(t) {
            n("3be9")
        }
        var k = !1
          , y = w
          , x = null
          , S = null
          , C = Object(b["a"])(v, g, m, k, y, x, S)
          , T = C.exports
          , O = n("8c4f")
          , M = (n("ac4d"),
        n("8a81"),
        n("5df3"),
        n("1c4c"),
        n("7f7f"),
        n("14b9"),
        n("6b54"),
        n("582b"))
          , P = n("2fa8")
          , z = n("d4bb")
          , _ = n("6a95")
          , $ = n("3c52")
          , j = n("1fc9")
          , V = n("5c66")
          , A = n("ec50")
          , I = n("c22a")
          , N = n("f414")
          , E = n("68bb")
          , B = n("daa4")
          , W = n("614c")
          , L = n("524e")
          , D = n("e4ce")
          , F = n("6e86")
          , R = n("79cc")
          , H = n("aae3")
          , q = n("2b73")
          , G = n("0e44")
          , U = (n("6c7b"),
        n("7a1a"));
        function X(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? X(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function K(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = J(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function J(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Q(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q(t, e) : void 0
            }
        }
        function Q(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var Z = 10
          , tt = 26
          , et = 26;
        function nt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
              , i = t.toLowerCase();
            if (i && n.test(i)) {
                if (4 === i.length) {
                    for (var o = "#", a = 1; a < 4; a += 1)
                        o += i.slice(a, a + 1).concat(i.slice(a, a + 1));
                    i = o
                }
                for (var r = [], s = 1; s < 7; s += 2)
                    r.push(parseInt("0x" + i.slice(s, s + 2)));
                return "rgba(" + r.join(",") + "," + e + ")"
            }
            return i
        }
        function it(t, e, n, i) {
            var o = 2 * Math.PI;
            t.beginPath(),
            t.arc(e, n, i, 0, o),
            t.fill()
        }
        function ot(t, e, n, i, o) {
            t.save(),
            o || (t.shadowOffsetX = t.shadowOffsetY = 2,
            t.shadowBlur = et / 2,
            t.shadowColor = "rgba(0, 0, 0, 0.2)"),
            t.fillStyle = e.boardColor,
            t.fillRect(et, Z, n - 2 * et, i - tt - Z),
            t.restore()
        }
        function at(t, e, n, i, o, a) {
            t.save(),
            t.font = e.coordFontStyle + " " + Math.min(20, .6 * a) + "px " + e.coordFontFamily,
            t.textAlign = "center",
            t.textBaseline = "middle",
            t.fillStyle = e.coordColor,
            t.save(),
            t.translate(et / 2, Z + a / 2);
            for (var r = 0; r < o; r++)
                t.fillText(o - r, 0, a * r, et);
            t.translate(n - et, 0);
            for (var s = 0; s < o; s++)
                t.fillText(o - s, 0, a * s, et);
            t.restore(),
            t.translate(et + a / 2, i - tt / 2);
            for (var l = 0; l < o; l++)
                t.fillText(String.fromCharCode("A".charCodeAt(0) + l), a * l, 0);
            t.restore()
        }
        function rt(t, e, n, i) {
            var o = n - 1;
            t.save(),
            t.strokeStyle = t.fillStyle = e.lineColor,
            t.translate(et + i / 2, Z + i / 2),
            t.scale(i, i),
            t.lineWidth = e.lineWidth,
            t.beginPath();
            for (var a = 1; a < o; a++)
                t.moveTo(a, 0),
                t.lineTo(a, o),
                t.moveTo(0, a),
                t.lineTo(o, a);
            t.stroke(),
            t.lineWidth = 2.5 * e.lineWidth,
            t.beginPath(),
            t.moveTo(0, 0),
            t.lineTo(o, 0),
            t.lineTo(o, o),
            t.lineTo(0, o),
            t.closePath(),
            t.stroke();
            var r = Math.floor(n / 5)
              , s = Math.floor(n / 2)
              , l = e.starRadiusScale;
            it(t, r, r, l),
            it(t, o - r, r, l),
            it(t, r, o - r, l),
            it(t, o - r, o - r, l),
            it(t, s, s, l),
            t.restore()
        }
        function st(t, e, n, i, o) {
            var a = e.pieceScale / 2;
            t.save(),
            t.translate(et + n / 2, Z + n / 2),
            t.scale(n, n),
            t.lineWidth = e.pieceStrokeWidth,
            t.fillStyle = e.pieceBlack,
            t.strokeStyle = e.pieceStrokeBlack,
            o = Math.min(o, i.length);
            for (var r = 0; r < o; r += 2) {
                var s = i[r];
                it(t, s[0], s[1], a),
                e.pieceStrokeWidth > 0 && t.stroke()
            }
            t.fillStyle = e.pieceWhite,
            t.strokeStyle = e.pieceStrokeWhite;
            for (var l = 1; l < o; l += 2) {
                var c = i[l];
                it(t, c[0], c[1], a),
                e.pieceStrokeWidth > 0 && t.stroke()
            }
            t.restore()
        }
        function lt(t, e, n, i, o, a, r) {
            t.save(),
            t.font = e.indexFontStyle + " " + e.indexScale * n + "px " + e.indexFontFamily,
            t.textAlign = "center",
            t.textBaseline = "middle",
            t.translate(et + n / 2, Z + n / 2),
            o = Math.min(o, i.length);
            for (var s = a; s < o - 1; s += 1) {
                var l = i[s]
                  , c = s - a + 1;
                t.fillStyle = s % 2 == 0 ? e.indexColorBlack : e.indexColorWhite,
                t.fillText(c, n * l[0], n * l[1], n)
            }
            if (o > a) {
                var h = i[o - 1];
                t.fillStyle = r ? e.lastStepColor : o % 2 == 1 ? e.indexColorBlack : e.indexColorWhite,
                t.fillText(o - a, n * h[0], n * h[1], n)
            }
            t.restore()
        }
        function ct(t, e, n, i, o) {
            if (o = Math.min(o, i.length),
            !(o <= 0)) {
                t.save(),
                t.fillStyle = e.lastStepColor,
                t.translate(et + n / 2, Z + n / 2),
                t.scale(n, n);
                var a = i[o - 1];
                it(t, a[0], a[1], e.lastStepScale),
                t.restore()
            }
        }
        function ht(t, e, n, i) {
            t.save(),
            t.lineCap = "round",
            t.strokeStyle = e.winlineColor,
            t.lineWidth = e.winlineWidth,
            t.translate(et + n / 2, Z + n / 2),
            t.scale(n, n),
            t.beginPath(),
            t.moveTo(i[0][0], i[0][1]),
            t.lineTo(i[1][0], i[1][1]),
            t.stroke(),
            t.restore()
        }
        function ut(t, e, n, i) {
            t.save(),
            t.translate(et + n / 2, Z + n / 2),
            t.scale(n, n),
            t.fillStyle = e.thoughtMoveColor;
            var o, a = K(i.thought);
            try {
                for (a.s(); !(o = a.n()).done; ) {
                    var r = o.value;
                    it(t, r[0], r[1], e.realtimeMoveScale)
                }
            } catch (g) {
                a.e(g)
            } finally {
                a.f()
            }
            t.fillStyle = e.lostMoveColor;
            var s, l = K(i.lost);
            try {
                for (l.s(); !(s = l.n()).done; ) {
                    var c = s.value;
                    it(t, c[0], c[1], e.realtimeMoveScale)
                }
            } catch (g) {
                l.e(g)
            } finally {
                l.f()
            }
            t.fillStyle = e.thinkingMoveColor;
            var h, u = K(i.thinking);
            try {
                for (u.s(); !(h = u.n()).done; ) {
                    var d = h.value;
                    it(t, d[0], d[1], e.realtimeMoveScale)
                }
            } catch (g) {
                u.e(g)
            } finally {
                u.f()
            }
            t.fillStyle = e.bestMoveColor;
            var f, p = K(i.best);
            try {
                for (p.s(); !(f = p.n()).done; ) {
                    var v = f.value;
                    it(t, v[0], v[1], e.bestMoveScale)
                }
            } catch (g) {
                p.e(g)
            } finally {
                p.f()
            }
            t.restore()
        }
        function dt(t, e, n, i, o) {
            t.textAlign = "center",
            t.textBaseline = "middle";
            var a = i / 2
              , r = nt(n.boardColor, n.pvEvalAlpha);
            t.translate(et + a, Z + a);
            for (var s = o.length - 1; s >= 0; s -= 1)
                if (o[s].bestline && o[s].bestline.length > 0) {
                    var l = o[s].bestline[0]
                      , c = i * l[0]
                      , h = i * l[1];
                    t.fillStyle = r,
                    t.fillRect(c - a, h - a, i, i),
                    t.fillStyle = s > 0 ? n.thoughtMoveColor : n.bestMoveColor,
                    t.font = n.pvEvalFontStyle + " " + n.pvEvalScale * i + "px " + n.pvEvalFontFamily,
                    1 == e ? t.fillText(o[s].eval, c, h, .95 * i) : 2 == e ? 0 == o[s].winrate || 1 == o[s].winrate ? t.fillText(o[s].eval, c, h, .95 * i) : t.fillText((100 * o[s].winrate).toFixed(1), c, h, .95 * i) : (t.fillText(o[s].eval, c, h - .2 * i, .95 * i),
                    t.font = 2 * n.pvEvalFontStyle / 3 + " " + n.pvEvalScale * i * .8 + "px " + n.pvEvalFontFamily,
                    t.fillText(o[s].depth + "-" + o[s].seldepth, c, h + .2 * i, .95 * i))
                }
        }
        function ft(t, e, n, i) {
            t.save(),
            t.strokeStyle = e.selectionStrokeColor,
            t.lineWidth = e.selectionStrokeWidth,
            t.translate(et + n / 2, Z + n / 2),
            t.scale(n, n),
            t.beginPath(),
            t.moveTo(i[0] - .5, i[1] - .5),
            t.lineTo(i[0] + .5, i[1] - .5),
            t.lineTo(i[0] + .5, i[1] + .5),
            t.lineTo(i[0] - .5, i[1] + .5),
            t.closePath(),
            t.stroke(),
            t.restore()
        }
        function pt(t, e, n, i) {
            t.save(),
            t.strokeStyle = e.forbidStrokeColor,
            t.lineWidth = e.forbidStrokeWidth,
            t.lineCap = "round",
            t.translate(et + n / 2, Z + n / 2),
            t.scale(n, n);
            var o, a = .22, r = K(i);
            try {
                for (r.s(); !(o = r.n()).done; ) {
                    var s = o.value;
                    t.beginPath(),
                    t.moveTo(s[0] - a, s[1] - a),
                    t.lineTo(s[0] + a, s[1] + a),
                    t.stroke(),
                    t.beginPath(),
                    t.moveTo(s[0] + a, s[1] - a),
                    t.lineTo(s[0] - a, s[1] + a),
                    t.stroke()
                }
            } catch (l) {
                r.e(l)
            } finally {
                r.f()
            }
            t.restore()
        }
        Boolean,
        Y(Y(Y(Y(Y({}, Object(h["e"])("position", {
            boardSize: "size",
            position: "position",
            winline: "winline"
        })), Object(h["e"])("settings", ["boardStyle", "indexOrigin", "showCoord", "showDetail", "showPvEval", "showWinrate", "showIndex", "showLastStep", "showWinline", "showForbid", "clickCheck"])), Object(h["e"])("ai", {
            realtime: function(t) {
                return t.outputs.realtime
            },
            pv: function(t) {
                return t.outputs.pv
            },
            forbid: function(t) {
                return t.outputs.forbid
            },
            thinking: "thinking"
        })), Object(h["c"])("position", ["isInBoard"])), {}, {
            context: function() {
                var t = this;
                return function(e) {
                    return t.$refs["canvas" + e].getContext("2d")
                }
            },
            canvasWidth: function() {
                return this.$store.getters.boardCanvasWidth
            },
            canvasHeight: function() {
                return this.canvasWidth - 2 * et + tt + Z
            },
            boardWidth: function() {
                return this.canvasWidth - 2 * et
            },
            canvasStyle: function() {
                return {
                    width: this.canvasWidth + "px",
                    height: this.canvasHeight + "px"
                }
            },
            renderRatio: function() {
                return this.ratioOverride || window.devicePixelRatio || 1
            },
            renderWidth: function() {
                return this.canvasWidth * this.renderRatio
            },
            renderHeight: function() {
                return this.canvasHeight * this.renderRatio
            }
        });
        function vt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function gt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vt(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function mt(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = bt(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function bt(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return wt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wt(t, e) : void 0
            }
        }
        function wt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var kt = 10
          , yt = 26
          , xt = 26;
        function St(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
              , i = t.toLowerCase();
            if (i && n.test(i)) {
                if (4 === i.length) {
                    for (var o = "#", a = 1; a < 4; a += 1)
                        o += i.slice(a, a + 1).concat(i.slice(a, a + 1));
                    i = o
                }
                for (var r = [], s = 1; s < 7; s += 2)
                    r.push(parseInt("0x" + i.slice(s, s + 2)));
                return "rgba(" + r.join(",") + "," + e + ")"
            }
            return i
        }
        function Ct(t, e, n, i) {
            var o = 2 * Math.PI;
            t.beginPath(),
            t.arc(e, n, i, 0, o),
            t.fill()
        }
        function Tt(t, e, n, i, o) {
            t.save(),
            o || (t.shadowOffsetX = t.shadowOffsetY = 2,
            t.shadowBlur = xt / 2,
            t.shadowColor = "rgba(0, 0, 0, 0.2)"),
            t.fillStyle = e.boardColor,
            t.fillRect(xt, kt, n - 2 * xt, i - yt - kt),
            t.restore()
        }
        function Ot(t, e, n, i, o, a) {
            t.save(),
            t.font = e.coordFontStyle + " " + Math.min(20, .6 * a) + "px " + e.coordFontFamily,
            t.textAlign = "center",
            t.textBaseline = "middle",
            t.fillStyle = e.coordColor,
            t.save(),
            t.translate(xt / 2, kt + a / 2);
            for (var r = 0; r < o; r++)
                t.fillText(o - r, 0, a * r, xt);
            t.translate(n - xt, 0);
            for (var s = 0; s < o; s++)
                t.fillText(o - s, 0, a * s, xt);
            t.restore(),
            t.translate(xt + a / 2, i - yt / 2);
            for (var l = 0; l < o; l++)
                t.fillText(String.fromCharCode("A".charCodeAt(0) + l), a * l, 0);
            t.restore()
        }
        function Mt(t, e, n, i) {
            var o = n - 1;
            t.save(),
            t.strokeStyle = t.fillStyle = e.lineColor,
            t.translate(xt + i / 2, kt + i / 2),
            t.scale(i, i),
            t.lineWidth = e.lineWidth,
            t.beginPath();
            for (var a = 1; a < o; a++)
                t.moveTo(a, 0),
                t.lineTo(a, o),
                t.moveTo(0, a),
                t.lineTo(o, a);
            t.stroke(),
            t.lineWidth = 2.5 * e.lineWidth,
            t.beginPath(),
            t.moveTo(0, 0),
            t.lineTo(o, 0),
            t.lineTo(o, o),
            t.lineTo(0, o),
            t.closePath(),
            t.stroke();
            var r = Math.floor(n / 5)
              , s = Math.floor(n / 2)
              , l = e.starRadiusScale;
            Ct(t, r, r, l),
            Ct(t, o - r, r, l),
            Ct(t, r, o - r, l),
            Ct(t, o - r, o - r, l),
            Ct(t, s, s, l),
            t.restore()
        }
        function Pt(t, e, n, i, o) {
            var a = e.pieceScale / 2;
            t.save(),
            t.translate(xt + n / 2, kt + n / 2),
            t.scale(n, n),
            t.lineWidth = e.pieceStrokeWidth,
            t.fillStyle = e.pieceBlack,
            t.strokeStyle = e.pieceStrokeBlack,
            o = Math.min(o, i.length);
            for (var r = 0; r < o; r += 2) {
                var s = i[r];
                Ct(t, s[0], s[1], a),
                e.pieceStrokeWidth > 0 && t.stroke()
            }
            t.fillStyle = e.pieceWhite,
            t.strokeStyle = e.pieceStrokeWhite;
            for (var l = 1; l < o; l += 2) {
                var c = i[l];
                Ct(t, c[0], c[1], a),
                e.pieceStrokeWidth > 0 && t.stroke()
            }
            t.restore()
        }
        function zt(t, e, n, i, o, a, r) {
            t.save(),
            t.font = e.indexFontStyle + " " + e.indexScale * n + "px " + e.indexFontFamily,
            t.textAlign = "center",
            t.textBaseline = "middle",
            t.translate(xt + n / 2, kt + n / 2),
            o = Math.min(o, i.length);
            for (var s = a; s < o - 1; s += 1) {
                var l = i[s]
                  , c = s - a + 1;
                t.fillStyle = s % 2 == 0 ? e.indexColorBlack : e.indexColorWhite,
                t.fillText(c, n * l[0], n * l[1], n)
            }
            if (o > a) {
                var h = i[o - 1];
                t.fillStyle = r ? e.lastStepColor : o % 2 == 1 ? e.indexColorBlack : e.indexColorWhite,
                t.fillText(o - a, n * h[0], n * h[1], n)
            }
            t.restore()
        }
        function _t(t, e, n, i, o) {
            if (o = Math.min(o, i.length),
            !(o <= 0)) {
                t.save(),
                t.fillStyle = e.lastStepColor,
                t.translate(xt + n / 2, kt + n / 2),
                t.scale(n, n);
                var a = i[o - 1];
                Ct(t, a[0], a[1], e.lastStepScale),
                t.restore()
            }
        }
        function $t(t, e, n, i) {
            t.save(),
            t.lineCap = "round",
            t.strokeStyle = e.winlineColor,
            t.lineWidth = e.winlineWidth,
            t.translate(xt + n / 2, kt + n / 2),
            t.scale(n, n),
            t.beginPath(),
            t.moveTo(i[0][0], i[0][1]),
            t.lineTo(i[1][0], i[1][1]),
            t.stroke(),
            t.restore()
        }
        function jt(t, e, n, i) {
            t.save(),
            t.translate(xt + n / 2, kt + n / 2),
            t.scale(n, n),
            t.fillStyle = e.thoughtMoveColor;
            var o, a = mt(i.thought);
            try {
                for (a.s(); !(o = a.n()).done; ) {
                    var r = o.value;
                    Ct(t, r[0], r[1], e.realtimeMoveScale)
                }
            } catch (g) {
                a.e(g)
            } finally {
                a.f()
            }
            t.fillStyle = e.lostMoveColor;
            var s, l = mt(i.lost);
            try {
                for (l.s(); !(s = l.n()).done; ) {
                    var c = s.value;
                    Ct(t, c[0], c[1], e.realtimeMoveScale)
                }
            } catch (g) {
                l.e(g)
            } finally {
                l.f()
            }
            t.fillStyle = e.thinkingMoveColor;
            var h, u = mt(i.thinking);
            try {
                for (u.s(); !(h = u.n()).done; ) {
                    var d = h.value;
                    Ct(t, d[0], d[1], e.realtimeMoveScale)
                }
            } catch (g) {
                u.e(g)
            } finally {
                u.f()
            }
            t.fillStyle = e.bestMoveColor;
            var f, p = mt(i.best);
            try {
                for (p.s(); !(f = p.n()).done; ) {
                    var v = f.value;
                    Ct(t, v[0], v[1], e.bestMoveScale)
                }
            } catch (g) {
                p.e(g)
            } finally {
                p.f()
            }
            t.restore()
        }
        function Vt(t, e, n, i, o) {
            t.textAlign = "center",
            t.textBaseline = "middle";
            var a = i / 2
              , r = St(n.boardColor, n.pvEvalAlpha);
            t.translate(xt + a, kt + a);
            for (var s = o.length - 1; s >= 0; s -= 1)
                if (o[s].bestline && o[s].bestline.length > 0) {
                    var l = o[s].bestline[0]
                      , c = i * l[0]
                      , h = i * l[1];
                    t.fillStyle = r,
                    t.fillRect(c - a, h - a, i, i),
                    t.fillStyle = s > 0 ? n.thoughtMoveColor : n.bestMoveColor,
                    t.font = n.pvEvalFontStyle + " " + n.pvEvalScale * i + "px " + n.pvEvalFontFamily,
                    1 == e ? t.fillText(o[s].eval, c, h, .95 * i) : 2 == e ? 0 == o[s].winrate || 1 == o[s].winrate ? t.fillText(o[s].eval, c, h, .95 * i) : t.fillText((100 * o[s].winrate).toFixed(1), c, h, .95 * i) : (t.fillText(o[s].eval, c, h - .2 * i, .95 * i),
                    t.font = 2 * n.pvEvalFontStyle / 3 + " " + n.pvEvalScale * i * .8 + "px " + n.pvEvalFontFamily,
                    t.fillText(o[s].depth + "-" + o[s].seldepth, c, h + .2 * i, .95 * i))
                }
        }
        function At(t, e, n, i) {
            t.save(),
            t.strokeStyle = e.selectionStrokeColor,
            t.lineWidth = e.selectionStrokeWidth,
            t.translate(xt + n / 2, kt + n / 2),
            t.scale(n, n),
            t.beginPath(),
            t.moveTo(i[0] - .5, i[1] - .5),
            t.lineTo(i[0] + .5, i[1] - .5),
            t.lineTo(i[0] + .5, i[1] + .5),
            t.lineTo(i[0] - .5, i[1] + .5),
            t.closePath(),
            t.stroke(),
            t.restore()
        }
        function It(t, e, n, i) {
            t.save(),
            t.strokeStyle = e.forbidStrokeColor,
            t.lineWidth = e.forbidStrokeWidth,
            t.lineCap = "round",
            t.translate(xt + n / 2, kt + n / 2),
            t.scale(n, n);
            var o, a = .22, r = mt(i);
            try {
                for (r.s(); !(o = r.n()).done; ) {
                    var s = o.value;
                    t.beginPath(),
                    t.moveTo(s[0] - a, s[1] - a),
                    t.lineTo(s[0] + a, s[1] + a),
                    t.stroke(),
                    t.beginPath(),
                    t.moveTo(s[0] + a, s[1] - a),
                    t.lineTo(s[0] - a, s[1] + a),
                    t.stroke()
                }
            } catch (l) {
                r.e(l)
            } finally {
                r.f()
            }
            t.restore()
        }
        var Nt = {
            name: "Board",
            props: {
                isAiTurn: Boolean,
                previewPv: Object
            },
            data: function() {
                return {
                    debouncedRedrawAllLayers: Object(U["debounce"])(50, this.redrawAllLayers),
                    throttledDrawRealtimeLayer: Object(U["throttle"])(10, this.drawRealtimeLayer),
                    selecting: !1,
                    selectedCoord: [0, 0],
                    pressed: !1,
                    cancelMouse: !1,
                    ratioOverride: null,
                    end: 1 / 0
                }
            },
            computed: gt(gt(gt(gt(gt({}, Object(h["e"])("position", {
                boardSize: "size",
                position: "position",
                winline: "winline"
            })), Object(h["e"])("settings", ["boardStyle", "indexOrigin", "showCoord", "showDetail", "showPvEval", "showWinrate", "showIndex", "showLastStep", "showWinline", "showForbid", "clickCheck"])), Object(h["e"])("ai", {
                realtime: function(t) {
                    return t.outputs.realtime
                },
                pv: function(t) {
                    return t.outputs.pv
                },
                forbid: function(t) {
                    return t.outputs.forbid
                },
                thinking: "thinking"
            })), Object(h["c"])("position", ["isInBoard"])), {}, {
                context: function() {
                    var t = this;
                    return function(e) {
                        return t.$refs["canvas" + e].getContext("2d")
                    }
                },
                canvasWidth: function() {
                    return this.$store.getters.boardCanvasWidth
                },
                canvasHeight: function() {
                    return this.canvasWidth - 2 * xt + yt + kt
                },
                boardWidth: function() {
                    return this.canvasWidth - 2 * xt
                },
                canvasStyle: function() {
                    return {
                        width: this.canvasWidth + "px",
                        height: this.canvasHeight + "px"
                    }
                },
                renderRatio: function() {
                    return this.ratioOverride || window.devicePixelRatio || 1
                },
                renderWidth: function() {
                    return this.canvasWidth * this.renderRatio
                },
                renderHeight: function() {
                    return this.canvasHeight * this.renderRatio
                }
            }),
            methods: {
                drawBoardLayer: function(t, e) {
                    t = t || this.context("Board");
                    var n = this.canvasWidth
                      , i = this.canvasHeight
                      , o = this.boardWidth / this.boardSize;
                    t.save(),
                    t.scale(this.renderRatio, this.renderRatio),
                    e || t.clearRect(0, 0, n, i),
                    Tt(t, this.boardStyle, n, i, e),
                    this.showCoord && Ot(t, this.boardStyle, n, i, this.boardSize, o),
                    Mt(t, this.boardStyle, this.boardSize, o),
                    t.restore()
                },
                drawPieceLayer: function(t, e) {
                    t = t || this.context("Piece");
                    var n = this.boardWidth / this.boardSize;
                    if (t.save(),
                    t.scale(this.renderRatio, this.renderRatio),
                    e || t.clearRect(0, 0, this.canvasWidth, this.canvasHeight),
                    this.previewPv) {
                        var i = this.previewPv.position.concat(this.previewPv.pv);
                        Pt(t, this.boardStyle, n, i, 1 / 0),
                        zt(t, this.boardStyle, n, i, 1 / 0, this.previewPv.position.length, this.showLastStep)
                    } else
                        Pt(t, this.boardStyle, n, this.position, this.end),
                        this.showWinline && this.winline.length > 0 && this.end >= this.position.length && $t(t, this.boardStyle, n, this.winline),
                        this.showIndex ? zt(t, this.boardStyle, n, this.position, this.end, this.indexOrigin, this.showLastStep) : this.showLastStep && _t(t, this.boardStyle, n, this.position, this.end);
                    t.restore()
                },
                drawRealtimeLayer: function(t, e) {
                    t = t || this.context("Realtime");
                    var n = this.boardWidth / this.boardSize;
                    t.save(),
                    t.scale(this.renderRatio, this.renderRatio),
                    e || t.clearRect(0, 0, this.canvasWidth, this.canvasHeight),
                    !this.showForbid || this.thinking || this.previewPv || It(t, this.boardStyle, n, this.forbid),
                    this.selecting ? At(t, this.boardStyle, n, this.selectedCoord) : this.previewPv || (this.showDetail && jt(t, this.boardStyle, n, this.realtime),
                    this.showPvEval > 0 && this.pv.length > 0 && this.thinking && Vt(t, this.showPvEval, this.boardStyle, n, this.pv)),
                    t.restore()
                },
                redrawAllLayers: function(t, e) {
                    this.drawBoardLayer(t, e),
                    this.drawPieceLayer(t, e),
                    this.drawRealtimeLayer(t, e)
                },
                screenshot: function() {
                    this.ratioOverride = 2048 / this.canvasWidth;
                    var t = this.context("Jpg");
                    return t.save(),
                    t.scale(this.renderRatio, this.renderRatio),
                    t.fillStyle = "#FFFFFF",
                    t.fillRect(0, 0, this.canvasWidth, this.canvasHeight),
                    t.restore(),
                    this.redrawAllLayers(t, !0),
                    this.ratioOverride = null,
                    t.canvas.toDataURL("image/jpeg")
                },
                exportGIF: function(t, e, n) {
                    var i = this.context("Gif");
                    this.ratioOverride = i.canvas.width / this.canvasWidth;
                    var o = new GIF({
                        workers: 8,
                        quality: 2,
                        width: i.canvas.width,
                        height: i.canvas.height,
                        workerScript: "/lib/gif.worker.js"
                    });
                    for (this.end = t; this.end <= this.position.length; this.end++)
                        i.save(),
                        i.fillStyle = "#FFFFFF",
                        i.scale(this.renderRatio, this.renderRatio),
                        i.fillRect(0, 0, this.canvasWidth, this.canvasHeight),
                        i.restore(),
                        this.drawBoardLayer(i, !0),
                        this.drawPieceLayer(i, !0),
                        o.addFrame(i, {
                            copy: !0,
                            delay: (this.end == this.position.length ? 3 : 1) * e
                        });
                    this.end = 1 / 0,
                    this.ratioOverride = null,
                    o.on("finished", n),
                    o.render()
                },
                onMouseDown: function(t) {
                    if (2 == this.clickCheck)
                        if ("touchstart" === t.type)
                            this.cancelMouse = !0,
                            t.button = 0,
                            t.pageX || (t.pageX = t.touches[0].pageX),
                            t.pageY || (t.pageY = t.touches[0].pageY);
                        else if (this.cancelMouse)
                            return void (this.cancelMouse = !1);
                    var e = t.pageX - this.$refs.canvasBoard.getBoundingClientRect().left
                      , n = t.pageY - this.$refs.canvasBoard.getBoundingClientRect().top
                      , i = this.boardWidth / this.boardSize;
                    if (e = Math.floor((e - xt) / i),
                    n = Math.floor((n - kt) / i),
                    0 == t.button) {
                        if (!(this.winline.length > 0))
                            if (0 == this.clickCheck || this.isAiTurn)
                                this.$emit("clicked", {
                                    x: e,
                                    y: n,
                                    button: t.button
                                });
                            else if (1 == this.clickCheck) {
                                if (this.selecting) {
                                    var o = Math.abs(e - this.selectedCoord[0])
                                      , a = Math.abs(n - this.selectedCoord[1]);
                                    Math.max(o, a) <= 1 && this.$emit("clicked", {
                                        x: this.selectedCoord[0],
                                        y: this.selectedCoord[1],
                                        button: t.button
                                    })
                                } else
                                    this.selectedCoord = [e, n];
                                this.selecting = !this.selecting
                            } else
                                2 == this.clickCheck && (this.pressed = !0,
                                this.selectedCoord = [e, n - 2],
                                this.selecting = this.isInBoard(this.selectedCoord))
                    } else
                        this.$emit("clicked", {
                            x: e,
                            y: n,
                            button: t.button
                        })
                },
                onMouseUp: function(t) {
                    this.pressed && ("touchend" === t.type && (t.preventDefault(),
                    t.button = 0),
                    this.$emit("clicked", {
                        x: this.selectedCoord[0],
                        y: this.selectedCoord[1],
                        button: t.button
                    }),
                    this.selecting = !1,
                    this.pressed = !1)
                },
                onMouseMove: function(t) {
                    if (this.pressed) {
                        "touchmove" === t.type && (t.preventDefault(),
                        t.button = 0,
                        t.pageX || (t.pageX = t.touches[0].pageX),
                        t.pageY || (t.pageY = t.touches[0].pageY));
                        var e = t.pageX - this.$refs.canvasBoard.getBoundingClientRect().left
                          , n = t.pageY - this.$refs.canvasBoard.getBoundingClientRect().top
                          , i = this.boardWidth / this.boardSize;
                        e = Math.floor((e - xt) / i),
                        n = Math.floor((n - kt) / i);
                        var o = this.selectedCoord;
                        this.selectedCoord = [e, n - 2],
                        this.selecting = this.isInBoard(this.selectedCoord),
                        !this.selecting || o[0] == this.selectedCoord[0] && o[1] == this.selectedCoord[1] || this.throttledDrawRealtimeLayer()
                    }
                }
            },
            watch: {
                "$store.state.screenWidth": function() {
                    this.debouncedRedrawAllLayers()
                },
                "$store.state.screenHeight": function() {
                    this.debouncedRedrawAllLayers()
                },
                boardSize: function() {
                    this.debouncedRedrawAllLayers()
                },
                position: {
                    handler: function() {
                        this.drawPieceLayer()
                    },
                    deep: !0
                },
                realtime: {
                    handler: function() {
                        this.showDetail && this.throttledDrawRealtimeLayer()
                    },
                    deep: !0
                },
                pv: {
                    handler: function() {
                        this.showPvEval > 0 && this.throttledDrawRealtimeLayer()
                    },
                    deep: !0
                },
                forbid: function() {
                    this.showForbid && this.drawRealtimeLayer()
                },
                previewPv: function() {
                    this.drawPieceLayer(),
                    this.drawRealtimeLayer()
                },
                indexOrigin: function() {
                    this.drawPieceLayer()
                },
                showCoord: function() {
                    this.drawBoardLayer()
                },
                showDetail: function() {
                    this.drawRealtimeLayer()
                },
                showPvEval: function() {
                    this.drawRealtimeLayer()
                },
                showIndex: function() {
                    this.drawPieceLayer()
                },
                showLastStep: function() {
                    this.drawPieceLayer()
                },
                showWinline: function() {
                    this.drawPieceLayer()
                },
                showForbid: function() {
                    this.drawRealtimeLayer()
                },
                selecting: function() {
                    this.throttledDrawRealtimeLayer()
                },
                boardStyle: {
                    handler: function() {
                        this.debouncedRedrawAllLayers()
                    },
                    deep: !0
                }
            },
            mounted: function() {
                this.redrawAllLayers(),
                window.addEventListener("mousemove", Object(U["throttle"])(50, this.onMouseMove)),
                window.addEventListener("mouseup", this.onMouseUp),
                window.addEventListener("touchmove", Object(U["throttle"])(50, this.onMouseMove), {
                    passive: !1
                }),
                window.addEventListener("touchend", this.onMouseUp, {
                    passive: !1
                })
            }
        }
          , Et = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "board"
            }, [n("div", {
                staticClass: "board-stage",
                style: t.canvasStyle
            }, [n("canvas", {
                ref: "canvasBoard",
                attrs: {
                    id: "board",
                    width: t.renderWidth,
                    height: t.renderHeight
                }
            }), t._v(" "), n("canvas", {
                ref: "canvasPiece",
                attrs: {
                    id: "piece",
                    width: t.renderWidth,
                    height: t.renderHeight
                }
            }), t._v(" "), n("canvas", {
                ref: "canvasRealtime",
                staticClass: "needsclick",
                attrs: {
                    id: "realtime",
                    width: t.renderWidth,
                    height: t.renderHeight
                },
                on: {
                    contextmenu: function(t) {
                        t.preventDefault()
                    },
                    mousedown: t.onMouseDown,
                    touchstart: t.onMouseDown
                }
            }), t._v(" "), n("canvas", {
                ref: "canvasJpg",
                attrs: {
                    id: "shot",
                    width: 2048,
                    height: 2048 * t.canvasHeight / t.canvasWidth
                }
            }), t._v(" "), n("canvas", {
                ref: "canvasGif",
                attrs: {
                    id: "shot",
                    width: 1024,
                    height: 1024 * t.canvasHeight / t.canvasWidth
                }
            })])])
        }
          , Bt = [];
        function Wt(t) {
            n("39b6")
        }
        var Lt = !1
          , Dt = Wt
          , Ft = "data-v-040cf58d"
          , Rt = null
          , Ht = Object(b["a"])(Nt, Et, Bt, Lt, Dt, Ft, Rt)
          , qt = Ht.exports
          , Gt = (n("c5f6"),
        {
            name: "Bestline",
            props: {
                bestline: Array,
                boardSize: Number
            },
            data: function() {
                return {
                    selectIndex: null
                }
            },
            methods: {
                getPVResult: function(t) {
                    return {
                        position: this.$store.state.ai.lastThinkPosition,
                        pv: this.bestline.slice(0, t + 1)
                    }
                },
                mouseoverPV: function(t) {
                    this.selectIndex = t,
                    this.$emit("pvPreview", this.getPVResult(t))
                },
                mouseleavePV: function() {
                    this.selectIndex = null,
                    this.$emit("pvPreview", null)
                },
                dblclickPV: function(t) {
                    this.$emit("pvSet", this.getPVResult(t))
                }
            },
            watch: {
                bestline: function(t) {
                    this.selectIndex && (this.selectIndex >= t.length ? (this.selectIndex = null,
                    this.$emit("pvPreview", null)) : this.$emit("pvPreview", this.getPVResult(this.selectIndex)))
                }
            }
        })
          , Ut = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "bestline-box"
            }, t._l(t.bestline, (function(e, i) {
                return n("div", {
                    key: i
                }, [n("div", {
                    staticClass: "move",
                    on: {
                        mouseover: function() {
                            return t.mouseoverPV(i)
                        },
                        mouseleave: t.mouseleavePV,
                        dblclick: function() {
                            return t.dblclickPV(i)
                        }
                    }
                }, [t._v("\n      " + t._s(String.fromCharCode("A".charCodeAt(0) + e[0]) + (t.boardSize - e[1]).toString()) + "\n    ")])])
            }
            )), 0)
        }
          , Xt = [];
        function Yt(t) {
            n("3fbb")
        }
        var Kt = !1
          , Jt = Yt
          , Qt = "data-v-122c8bb0"
          , Zt = null
          , te = Object(b["a"])(Gt, Ut, Xt, Kt, Jt, Qt, Zt)
          , ee = te.exports
          , ne = n("4be7")
          , ie = (n("6762"),
        n("14fe"))
          , oe = n("9224");
        function ae(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = re(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function re(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return se(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? se(t, e) : void 0
            }
        }
        function se(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var le = 0
          , ce = 1
          , he = 2
          , ue = ["config.toml", "classical220723.toml", "classical210901.toml"]
          , de = {
            language: null,
            boardStyle: {
                boardColor: "#F4D03F",
                lineColor: "#000000",
                lineWidth: .03,
                coordColor: "#000000",
                coordFontStyle: "",
                coordFontFamily: "sans-serif",
                starRadiusScale: .1,
                pieceBlack: "#000000",
                pieceWhite: "#FFFFFF",
                pieceStrokeWidth: .021,
                pieceStrokeBlack: "#000000",
                pieceStrokeWhite: "#000000",
                pieceScale: .95,
                indexColorBlack: "#FFFFFF",
                indexColorWhite: "#000000",
                indexFontStyle: "bold",
                indexFontFamily: "sans-serif",
                indexScale: .45,
                lastStepColor: "#E74C3C",
                lastStepScale: .15,
                winlineWidth: .12,
                winlineColor: "#2E86C1",
                bestMoveColor: "#E74C3C",
                thinkingMoveColor: "#3FF476",
                thoughtMoveColor: "#3C5EE7",
                lostMoveColor: "#FDFEFE",
                bestMoveScale: .12,
                realtimeMoveScale: .09,
                selectionStrokeWidth: .08,
                selectionStrokeColor: "#E74C3C",
                forbidStrokeWidth: .12,
                forbidStrokeColor: "#E74C3C",
                pvEvalFontStyle: 600,
                pvEvalFontFamily: "sans-serif",
                pvEvalScale: .45,
                pvEvalAlpha: .9
            },
            boardSize: 15,
            thinkTimeOption: 1,
            turnTime: 5e3,
            matchTime: 9999e3,
            maxDepth: 64,
            maxNodes: 0,
            rule: 0,
            threads: null,
            strength: 100,
            nbest: 1,
            configIndex: 0,
            candRange: 3,
            hashSize: 256,
            pondering: !1,
            clickCheck: 0,
            indexOrigin: 0,
            showCoord: !0,
            showAnalysis: !0,
            showDetail: !0,
            showPvEval: 0,
            showIndex: !0,
            showLastStep: !0,
            showWinline: !0,
            showForbid: !0,
            aiThinkBlack: !1,
            aiThinkWhite: !1
        }
          , fe = ["language", "boardSize", "thinkTimeOption", "turnTime", "matchTime", "maxDepth", "maxNodes", "rule", "threads", "strength", "nbest", "configIndex", "candRange", "hashSize", "pondering", "clickCheck", "showCoord", "showAnalysis", "showDetail", "showPvEval", "showIndex", "showLastStep", "showWinline", "showForbid", "aiThinkBlack", "aiThinkWhite"]
          , pe = ["boardColor", "lastStepColor", "winlineColor", "bestMoveColor", "thinkingMoveColor", "thoughtMoveColor", "lostMoveColor"]
          , ve = {
            turnTime: function(t) {
                var e = [t.turnTime, 7e3, 4e4, -1];
                return e[t.thinkTimeOption]
            },
            matchTime: function(t) {
                var e = [t.matchTime, 18e4, 9e5, -1];
                return e[t.thinkTimeOption]
            },
            depth: function(t) {
                return 0 == t.thinkTimeOption ? t.maxDepth : 100
            },
            nodes: function(t) {
                return 0 == t.thinkTimeOption ? t.maxNodes : 0
            },
            gameRule: function(t) {
                switch (t.rule) {
                case 0:
                case 5:
                    return le;
                case 1:
                    return ce;
                case 2:
                case 4:
                    return he;
                default:
                    throw Error("unknown rule")
                }
            }
        };
        function ge() {
            var t, e = {}, n = ae(fe);
            try {
                for (n.s(); !(t = n.n()).done; ) {
                    var i = t.value;
                    e[i] = de[i]
                }
            } catch (s) {
                n.e(s)
            } finally {
                n.f()
            }
            var o, a = ae(pe);
            try {
                for (a.s(); !(o = a.n()).done; ) {
                    var r = o.value;
                    e[r] = de.boardStyle[r]
                }
            } catch (s) {
                a.e(s)
            } finally {
                a.f()
            }
            ie["a"].set("GMKC_CFG_" + oe["a"], JSON.stringify(e), {
                raw: !0,
                expires: 30
            })
        }
        var me = {
            setValue: function(t, e) {
                t[e.key] = e.value,
                fe.includes(e.key) && ge()
            },
            setValueNoSave: function(t, e) {
                t[e.key] = e.value
            },
            setBoardStyle: function(t, e) {
                t.boardStyle[e.key] = e.value,
                pe.includes(e.key) && ge()
            },
            setBoardStyleNoSave: function(t, e) {
                t.boardStyle[e.key] = e.value
            }
        }
          , be = {
            readCookies: function(t) {
                var e = t.commit
                  , n = ie["a"].get("GMKC_CFG_" + oe["a"]);
                if (n) {
                    var i, o = JSON.parse(n), a = ae(fe);
                    try {
                        for (a.s(); !(i = a.n()).done; ) {
                            var r = i.value;
                            e("setValueNoSave", {
                                key: r,
                                value: o[r]
                            })
                        }
                    } catch (h) {
                        a.e(h)
                    } finally {
                        a.f()
                    }
                    var s, l = ae(pe);
                    try {
                        for (l.s(); !(s = l.n()).done; ) {
                            var c = s.value;
                            e("setBoardStyleNoSave", {
                                key: c,
                                value: o[c]
                            })
                        }
                    } catch (h) {
                        l.e(h)
                    } finally {
                        l.f()
                    }
                }
            },
            clearCookies: function() {
                ie["a"].remove("GMKC_CFG_" + oe["a"])
            }
        }
          , we = {
            namespaced: !0,
            state: de,
            getters: ve,
            actions: be,
            mutations: me
        };
        function ke(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = ye(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function ye(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return xe(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xe(t, e) : void 0
            }
        }
        function xe(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        function Se(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Ce(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Se(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        M["a"],
        P["a"],
        z["a"],
        _["a"],
        $["a"],
        j["a"],
        V["a"],
        A["a"],
        I["a"],
        N["a"],
        E["a"],
        B["a"],
        W["a"],
        L["a"],
        D["a"],
        F["a"],
        R["a"],
        H["a"],
        q["a"],
        Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce({}, Object(h["e"])(["screenWidth", "screenHeight", "isOnIOSBrowser"])), Object(h["e"])("settings", ["boardSize", "indexOrigin", "rule", "nbest", "aiThinkBlack", "aiThinkWhite", "showAnalysis"])), Object(h["e"])("ai", ["outputs", "thinking", "lastThinkTime", "ready", "loadingProgress"])), Object(h["e"])("position", ["position", "lastPosition", "winline", "swaped"])), Object(h["c"])("settings", ["turnTime", "matchTime", "gameRule"])), Object(h["c"])("ai", ["bestlineStr", "bestline"])), Object(h["c"])("position", ["isEmpty", "playerToMove", "moveLeftCount", "posStr"])), {}, {
            buttonBarWidth: function() {
                var t = 620;
                return this.screenWidth >= 1024 ? Math.min(t, t + Math.max(0, this.screenWidth - 1024)) : t
            },
            chartWidth: function() {
                if (this.screenWidth >= 1024 && this.screenWidth / this.screenHeight >= 4 / 3) {
                    var t = 30 + 2 * Math.min(20, Math.max(0, .3 * this.screenWidth - 350))
                      , e = 600;
                    return Math.min(this.screenWidth - Math.max(this.$store.getters.boardCanvasWidth, this.buttonBarWidth) - t, e)
                }
                return this.screenWidth
            },
            bestline: function() {
                return this.bestlineStr(0)
            },
            balanceOptions: function() {
                return [this.$t("game.balance1"), this.$t("game.balance2")]
            },
            flipOptions: function() {
                return [this.$t("game.flip") + " |", this.$t("game.flip") + " -", this.$t("game.flip") + " ╲", this.$t("game.flip") + " ╱"]
            },
            moveOptions: function() {
                return [this.$t("game.move") + " ↑", this.$t("game.move") + " ↓", this.$t("game.move") + " ←", this.$t("game.move") + " →"]
            },
            shotOptions: function() {
                return [this.$t("game.shotJpg"), this.$t("game.shotGif")]
            },
            isAITurn: function() {
                return "BLACK" == this.playerToMove && this.aiThinkBlack || "WHITE" == this.playerToMove && this.aiThinkWhite
            },
            gameEnded: function() {
                return this.winline.length > 0 || 0 == this.moveLeftCount
            }
        }),
        Ce(Ce(Ce(Ce(Ce(Ce({}, Object(h["d"])("position", {
            newBoard: "new",
            setSwaped: "setSwaped"
        })), Object(h["d"])("settings", ["setValue"])), Object(h["d"])("ai", ["clearUsedTime"])), Object(h["b"])("position", ["setPosStr", "makeMove", "backToBegin", "backward", "forward", "forwardToEnd", "rotate", "flip", "moveTowards"])), Object(h["b"])("ai", ["think", "stop", "restart", "initEngine"])), {}, {
            checkThinking: function() {
                var t = this;
                return new ne["Promise"]((function(e) {
                    t.thinking ? t.$vux.confirm.show({
                        title: t.$t("game.interruptThinking.title"),
                        content: t.$t("game.interruptThinking.msg"),
                        confirmText: t.$t("common.confirm"),
                        cancelText: t.$t("common.cancel"),
                        onCancel: function() {},
                        onConfirm: function() {
                            t.thinkingCanceled = !0,
                            t.stop(),
                            e()
                        }
                    }) : e()
                }
                ))
            },
            onFlipOption: function(t) {
                switch (t) {
                case 0:
                    this.flip([1, 0]);
                    break;
                case 1:
                    this.flip([0, 1]);
                    break;
                case 2:
                    this.flip([0, 0]);
                    break;
                case 3:
                    this.flip([1, 1]);
                    break
                }
            },
            onMoveOption: function(t) {
                switch (t) {
                case 0:
                    this.moveTowards([0, -1]);
                    break;
                case 1:
                    this.moveTowards([0, 1]);
                    break;
                case 2:
                    this.moveTowards([-1, 0]);
                    break;
                case 3:
                    this.moveTowards([1, 0]);
                    break
                }
            },
            onScreenshotOption: function(t) {
                var e, n, i = this, o = this.$vux.confirm, a = this.$t("game.gifDelay");
                switch (t) {
                case 0:
                    this.screenshotData = {
                        url: this.$refs.board.screenshot(),
                        ext: "jpg"
                    },
                    this.$refs.screenshot.setAttribute("src", this.screenshotData.url),
                    this.showScreenshot = !0;
                    break;
                case 1:
                    o.prompt("", {
                        title: this.$t("game.gifStart"),
                        inputAttrs: {
                            type: "number",
                            min: 1,
                            max: this.position.length
                        },
                        confirmText: this.$t("common.confirm"),
                        cancelText: this.$t("common.cancel"),
                        onShow: function() {
                            o.setInputValue("1")
                        },
                        onConfirm: function(t) {
                            e = +t,
                            isNaN(e) && (e = 1),
                            e = Math.max(0, Math.min(e - 1, i.position.length)),
                            o.prompt("", {
                                title: a,
                                inputAttrs: {
                                    type: "number",
                                    min: 100
                                },
                                confirmText: i.$t("common.confirm"),
                                cancelText: i.$t("common.cancel"),
                                onShow: function() {
                                    o.setInputValue("1000")
                                },
                                onConfirm: function(t) {
                                    n = +t,
                                    isNaN(n) && (n = 1e3),
                                    n = Math.max(100, n),
                                    i.gifLoading = !0,
                                    i.$refs.screenshot.setAttribute("src", ""),
                                    i.showScreenshot = !0,
                                    i.$refs.board.exportGIF(e, n, (function(t) {
                                        i.gifLoading = !1,
                                        i.screenshotData = {
                                            url: URL.createObjectURL(t),
                                            ext: "gif"
                                        },
                                        i.$refs.screenshot.setAttribute("src", i.screenshotData.url)
                                    }
                                    ))
                                }
                            })
                        }
                    });
                    break
                }
            },
            saveScreenshot: function() {
                function t(t, e) {
                    var n = document.createElement("a");
                    n.href = t,
                    n.download = e,
                    document.body.appendChild(n),
                    n.dispatchEvent(new MouseEvent("click",{
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                    })),
                    document.body.removeChild(n)
                }
                t(this.screenshotData.url, "screenshot-".concat(Object(G["a"])(new Date, "YYYYMMDDHHmmss"), ".").concat(this.screenshotData.ext))
            },
            newGame: function() {
                var t = this;
                this.checkThinking().then((function() {
                    t.newBoard(t.boardSize),
                    t.restart()
                }
                ))
            },
            clicked: function(t) {
                var e = this
                  , n = [t.x, t.y];
                if (!this.thinking)
                    if (0 == t.button) {
                        if (this.isEmpty(n) && 0 == this.winline.length || this.isAITurn) {
                            if (!this.isAITurn) {
                                if (5 == this.rule && !this.swaped && 1 == this.position.length)
                                    return this.$vux.confirm.show({
                                        title: this.$t("game.swap.questionTitle"),
                                        content: this.$t("game.swap.questionMsg"),
                                        confirmText: this.$t("common.confirm"),
                                        cancelText: this.$t("common.cancel"),
                                        onCancel: function() {
                                            e.setSwaped()
                                        },
                                        onConfirm: function() {
                                            e.swapBlackAndWhite(),
                                            e.isAITurn && e.startThink()
                                        }
                                    });
                                if (this.gameRule == he) {
                                    var i, o = !1, a = ke(this.outputs.forbid);
                                    try {
                                        for (a.s(); !(i = a.n()).done; ) {
                                            var r = i.value;
                                            if (n[0] == r[0] && n[1] == r[1]) {
                                                o = !0;
                                                break
                                            }
                                        }
                                    } catch (s) {
                                        a.e(s)
                                    } finally {
                                        a.f()
                                    }
                                    if (o)
                                        return this.$vux.alert.show({
                                            title: this.$t("game.forbid.title"),
                                            content: this.$t("game.forbid.msg")
                                        })
                                }
                                this.makeMove(n)
                            }
                            this.isAITurn && this.startThink()
                        }
                    } else
                        2 == t.button && (this.backward(),
                        this.clearUsedTime())
            },
            startThink: function() {
                var t = this;
                this.gameEnded || this.think().then((function(e) {
                    if (t.thinkingCanceled)
                        t.thinkingCanceled = !1;
                    else if (t.outputs.swap)
                        t.swapBlackAndWhite(),
                        t.$vux.alert.show({
                            title: t.$t("game.swap.title"),
                            content: t.$t("game.swap.msg"),
                            onHide: function() {
                                this.isAITurn && this.startThink()
                            }
                        });
                    else {
                        t.makeMove(e);
                        var n = +t.outputs.pv[0].eval;
                        isNaN(n) || t.evalData.push({
                            index: t.position.length,
                            eval: n,
                            piece: "BLACK" == t.playerToMove ? t.$t("game.white") : t.$t("game.black")
                        }),
                        t.isAITurn && t.startThink()
                    }
                }
                ))
            },
            startThinkBalance: function(t) {
                var e = this;
                this.gameEnded || this.think({
                    balanceMode: t
                }).then((function(n) {
                    if (e.thinkingCanceled)
                        e.thinkingCanceled = !1;
                    else if (2 == t) {
                        var i = e.outputs.pv[0].bestline[1];
                        e.makeMove(n),
                        e.makeMove(i)
                    } else
                        e.makeMove(n)
                }
                ))
            },
            swapBlackAndWhite: function() {
                this.setSwaped();
                var t = this.aiThinkWhite
                  , e = this.aiThinkBlack;
                this.setValue({
                    key: "aiThinkBlack",
                    value: t
                }),
                this.setValue({
                    key: "aiThinkWhite",
                    value: e
                })
            },
            setPvAsPosition: function(t) {
                var e = this;
                this.checkThinking().then((function() {
                    var n = t.position.concat(t.pv);
                    e.newBoard(e.boardSize);
                    var i, o = ke(n);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            var a = i.value;
                            if (!e.makeMove(a))
                                break
                        }
                    } catch (r) {
                        o.e(r)
                    } finally {
                        o.f()
                    }
                }
                ))
            },
            getSpeedText: function(t) {
                return t < 1e5 ? t.toString() : t < 1e8 ? Math.floor(t / 1e3) + "K" : Math.floor(t / 1e6) + "M"
            },
            getNodesText: function(t) {
                return t < 1e4 ? t.toString() : t < 1e7 ? Math.floor(t / 1e3) + "K" : t < 1e11 ? Math.floor(t / 1e6) + "M" : t < 1e14 ? Math.floor(t / 1e9) + "G" : Math.floor(t / 1e12) + "T"
            },
            getTimeText: function(t) {
                return t < 1e6 ? Math.floor(t / 1e3) + "." + Math.floor(t / 100) % 10 + "s" : t < 36e7 ? Math.floor(t / 6e4) + "min" : Math.floor(t / 36e5) + "h"
            }
        });
        function Te(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = Oe(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function Oe(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Me(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Me(t, e) : void 0
            }
        }
        function Me(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        function Pe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function ze(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Pe(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var _e = {
            name: "game",
            directives: {
                TransferDom: M["a"]
            },
            components: {
                Board: qt,
                Bestline: ee,
                Flexbox: P["a"],
                FlexboxItem: z["a"],
                XButton: _["a"],
                Scroller: $["a"],
                LoadMore: j["a"],
                XTable: V["a"],
                XTextarea: A["a"],
                Actionsheet: I["a"],
                XProgress: N["a"],
                Group: E["a"],
                Popup: B["a"],
                VChart: W["a"],
                VPoint: L["a"],
                VLine: D["a"],
                VScale: F["a"],
                VArea: R["a"],
                XDialog: H["a"],
                XCircle: q["a"]
            },
            data: function() {
                return {
                    aiTimeUsed: 0,
                    showLoading: !1,
                    showBalanceOptions: !1,
                    showFlipOptions: !1,
                    showMoveOptions: !1,
                    showScreenshotOptions: !1,
                    showScreenshot: !1,
                    console: console,
                    evalData: [{
                        index: 0,
                        eval: 0,
                        piece: this.$t("game.black")
                    }, {
                        index: 0,
                        eval: 0,
                        piece: this.$t("game.white")
                    }],
                    thinkingCanceled: !1,
                    gifLoading: !1,
                    screenshotData: null,
                    previewPv: null
                }
            },
            computed: ze(ze(ze(ze(ze(ze(ze(ze({}, Object(h["e"])(["screenWidth", "screenHeight", "isOnIOSBrowser"])), Object(h["e"])("settings", ["boardSize", "indexOrigin", "rule", "nbest", "aiThinkBlack", "aiThinkWhite", "showAnalysis"])), Object(h["e"])("ai", ["outputs", "thinking", "lastThinkTime", "ready", "loadingProgress"])), Object(h["e"])("position", ["position", "lastPosition", "winline", "swaped"])), Object(h["c"])("settings", ["turnTime", "matchTime", "gameRule"])), Object(h["c"])("ai", ["bestlineStr", "bestline"])), Object(h["c"])("position", ["isEmpty", "playerToMove", "moveLeftCount", "posStr"])), {}, {
                buttonBarWidth: function() {
                    var t = 620;
                    return this.screenWidth >= 1024 ? Math.min(t, t + Math.max(0, this.screenWidth - 1024)) : t
                },
                chartWidth: function() {
                    if (this.screenWidth >= 1024 && this.screenWidth / this.screenHeight >= 4 / 3) {
                        var t = 30 + 2 * Math.min(20, Math.max(0, .3 * this.screenWidth - 350))
                          , e = 600;
                        return Math.min(this.screenWidth - Math.max(this.$store.getters.boardCanvasWidth, this.buttonBarWidth) - t, e)
                    }
                    return this.screenWidth
                },
                bestline: function() {
                    return this.bestlineStr(0)
                },
                balanceOptions: function() {
                    return [this.$t("game.balance1"), this.$t("game.balance2")]
                },
                flipOptions: function() {
                    return [this.$t("game.flip") + " |", this.$t("game.flip") + " -", this.$t("game.flip") + " ╲", this.$t("game.flip") + " ╱"]
                },
                moveOptions: function() {
                    return [this.$t("game.move") + " ↑", this.$t("game.move") + " ↓", this.$t("game.move") + " ←", this.$t("game.move") + " →"]
                },
                shotOptions: function() {
                    return [this.$t("game.shotJpg"), this.$t("game.shotGif")]
                },
                isAITurn: function() {
                    return "BLACK" == this.playerToMove && this.aiThinkBlack || "WHITE" == this.playerToMove && this.aiThinkWhite
                },
                gameEnded: function() {
                    return this.winline.length > 0 || 0 == this.moveLeftCount
                }
            }),
            methods: ze(ze(ze(ze(ze(ze({}, Object(h["d"])("position", {
                newBoard: "new",
                setSwaped: "setSwaped"
            })), Object(h["d"])("settings", ["setValue"])), Object(h["d"])("ai", ["clearUsedTime"])), Object(h["b"])("position", ["setPosStr", "makeMove", "backToBegin", "backward", "forward", "forwardToEnd", "rotate", "flip", "moveTowards"])), Object(h["b"])("ai", ["think", "stop", "restart", "initEngine"])), {}, {
                checkThinking: function() {
                    var t = this;
                    return new ne["Promise"]((function(e) {
                        t.thinking ? t.$vux.confirm.show({
                            title: t.$t("game.interruptThinking.title"),
                            content: t.$t("game.interruptThinking.msg"),
                            confirmText: t.$t("common.confirm"),
                            cancelText: t.$t("common.cancel"),
                            onCancel: function() {},
                            onConfirm: function() {
                                t.thinkingCanceled = !0,
                                t.stop(),
                                e()
                            }
                        }) : e()
                    }
                    ))
                },
                onFlipOption: function(t) {
                    switch (t) {
                    case 0:
                        this.flip([1, 0]);
                        break;
                    case 1:
                        this.flip([0, 1]);
                        break;
                    case 2:
                        this.flip([0, 0]);
                        break;
                    case 3:
                        this.flip([1, 1]);
                        break
                    }
                },
                onMoveOption: function(t) {
                    switch (t) {
                    case 0:
                        this.moveTowards([0, -1]);
                        break;
                    case 1:
                        this.moveTowards([0, 1]);
                        break;
                    case 2:
                        this.moveTowards([-1, 0]);
                        break;
                    case 3:
                        this.moveTowards([1, 0]);
                        break
                    }
                },
                onScreenshotOption: function(t) {
                    var e, n, i = this, o = this.$vux.confirm, a = this.$t("game.gifDelay");
                    switch (t) {
                    case 0:
                        this.screenshotData = {
                            url: this.$refs.board.screenshot(),
                            ext: "jpg"
                        },
                        this.$refs.screenshot.setAttribute("src", this.screenshotData.url),
                        this.showScreenshot = !0;
                        break;
                    case 1:
                        o.prompt("", {
                            title: this.$t("game.gifStart"),
                            inputAttrs: {
                                type: "number",
                                min: 1,
                                max: this.position.length
                            },
                            confirmText: this.$t("common.confirm"),
                            cancelText: this.$t("common.cancel"),
                            onShow: function() {
                                o.setInputValue("1")
                            },
                            onConfirm: function(t) {
                                e = +t,
                                isNaN(e) && (e = 1),
                                e = Math.max(0, Math.min(e - 1, i.position.length)),
                                o.prompt("", {
                                    title: a,
                                    inputAttrs: {
                                        type: "number",
                                        min: 100
                                    },
                                    confirmText: i.$t("common.confirm"),
                                    cancelText: i.$t("common.cancel"),
                                    onShow: function() {
                                        o.setInputValue("1000")
                                    },
                                    onConfirm: function(t) {
                                        n = +t,
                                        isNaN(n) && (n = 1e3),
                                        n = Math.max(100, n),
                                        i.gifLoading = !0,
                                        i.$refs.screenshot.setAttribute("src", ""),
                                        i.showScreenshot = !0,
                                        i.$refs.board.exportGIF(e, n, (function(t) {
                                            i.gifLoading = !1,
                                            i.screenshotData = {
                                                url: URL.createObjectURL(t),
                                                ext: "gif"
                                            },
                                            i.$refs.screenshot.setAttribute("src", i.screenshotData.url)
                                        }
                                        ))
                                    }
                                })
                            }
                        });
                        break
                    }
                },
                saveScreenshot: function() {
                    function t(t, e) {
                        var n = document.createElement("a");
                        n.href = t,
                        n.download = e,
                        document.body.appendChild(n),
                        n.dispatchEvent(new MouseEvent("click",{
                            bubbles: !0,
                            cancelable: !0,
                            view: window
                        })),
                        document.body.removeChild(n)
                    }
                    t(this.screenshotData.url, "screenshot-".concat(Object(G["a"])(new Date, "YYYYMMDDHHmmss"), ".").concat(this.screenshotData.ext))
                },
                newGame: function() {
                    var t = this;
                    this.checkThinking().then((function() {
                        t.newBoard(t.boardSize),
                        t.restart()
                    }
                    ))
                },
                clicked: function(t) {
                    var e = this
                      , n = [t.x, t.y];
                    if (!this.thinking)
                        if (0 == t.button) {
                            if (this.isEmpty(n) && 0 == this.winline.length || this.isAITurn) {
                                if (!this.isAITurn) {
                                    if (5 == this.rule && !this.swaped && 1 == this.position.length)
                                        return this.$vux.confirm.show({
                                            title: this.$t("game.swap.questionTitle"),
                                            content: this.$t("game.swap.questionMsg"),
                                            confirmText: this.$t("common.confirm"),
                                            cancelText: this.$t("common.cancel"),
                                            onCancel: function() {
                                                e.setSwaped()
                                            },
                                            onConfirm: function() {
                                                e.swapBlackAndWhite(),
                                                e.isAITurn && e.startThink()
                                            }
                                        });
                                    if (this.gameRule == he) {
                                        var i, o = !1, a = Te(this.outputs.forbid);
                                        try {
                                            for (a.s(); !(i = a.n()).done; ) {
                                                var r = i.value;
                                                if (n[0] == r[0] && n[1] == r[1]) {
                                                    o = !0;
                                                    break
                                                }
                                            }
                                        } catch (s) {
                                            a.e(s)
                                        } finally {
                                            a.f()
                                        }
                                        if (o)
                                            return this.$vux.alert.show({
                                                title: this.$t("game.forbid.title"),
                                                content: this.$t("game.forbid.msg")
                                            })
                                    }
                                    this.makeMove(n)
                                }
                                this.isAITurn && this.startThink()
                            }
                        } else
                            2 == t.button && (this.backward(),
                            this.clearUsedTime())
                },
                startThink: function() {
                    var t = this;
                    this.gameEnded || this.think().then((function(e) {
                        if (t.thinkingCanceled)
                            t.thinkingCanceled = !1;
                        else if (t.outputs.swap)
                            t.swapBlackAndWhite(),
                            t.$vux.alert.show({
                                title: t.$t("game.swap.title"),
                                content: t.$t("game.swap.msg"),
                                onHide: function() {
                                    this.isAITurn && this.startThink()
                                }
                            });
                        else {
                            t.makeMove(e);
                            var n = +t.outputs.pv[0].eval;
                            isNaN(n) || t.evalData.push({
                                index: t.position.length,
                                eval: n,
                                piece: "BLACK" == t.playerToMove ? t.$t("game.white") : t.$t("game.black")
                            }),
                            t.isAITurn && t.startThink()
                        }
                    }
                    ))
                },
                startThinkBalance: function(t) {
                    var e = this;
                    this.gameEnded || this.think({
                        balanceMode: t
                    }).then((function(n) {
                        if (e.thinkingCanceled)
                            e.thinkingCanceled = !1;
                        else if (2 == t) {
                            var i = e.outputs.pv[0].bestline[1];
                            e.makeMove(n),
                            e.makeMove(i)
                        } else
                            e.makeMove(n)
                    }
                    ))
                },
                swapBlackAndWhite: function() {
                    this.setSwaped();
                    var t = this.aiThinkWhite
                      , e = this.aiThinkBlack;
                    this.setValue({
                        key: "aiThinkBlack",
                        value: t
                    }),
                    this.setValue({
                        key: "aiThinkWhite",
                        value: e
                    })
                },
                setPvAsPosition: function(t) {
                    var e = this;
                    this.checkThinking().then((function() {
                        var n = t.position.concat(t.pv);
                        e.newBoard(e.boardSize);
                        var i, o = Te(n);
                        try {
                            for (o.s(); !(i = o.n()).done; ) {
                                var a = i.value;
                                if (!e.makeMove(a))
                                    break
                            }
                        } catch (r) {
                            o.e(r)
                        } finally {
                            o.f()
                        }
                    }
                    ))
                },
                getSpeedText: function(t) {
                    return t < 1e5 ? t.toString() : t < 1e8 ? Math.floor(t / 1e3) + "K" : Math.floor(t / 1e6) + "M"
                },
                getNodesText: function(t) {
                    return t < 1e4 ? t.toString() : t < 1e7 ? Math.floor(t / 1e3) + "K" : t < 1e11 ? Math.floor(t / 1e6) + "M" : t < 1e14 ? Math.floor(t / 1e9) + "G" : Math.floor(t / 1e12) + "T"
                },
                getTimeText: function(t) {
                    return t < 1e6 ? Math.floor(t / 1e3) + "." + Math.floor(t / 100) % 10 + "s" : t < 36e7 ? Math.floor(t / 6e4) + "min" : Math.floor(t / 36e5) + "h"
                }
            }),
            watch: {
                bestline: function() {
                    this.$refs.bestlineArea && this.$refs.bestlineArea.updateAutosize()
                },
                posStr: function(t) {
                    this.$refs.curposArea.updateAutosize();
                    var e = this.evalData[this.evalData.length - 1].index
                      , n = Math.max(this.position.length, 1);
                    if (n < e)
                        for (var i = this.evalData.length - 1; i > 0; i--)
                            this.evalData[i].index > n && this.evalData.pop();
                    t.length > 0 ? this.$router.push({
                        name: "game",
                        params: {
                            pos: t
                        }
                    }) : this.$router.push({
                        name: "game"
                    })
                },
                boardSize: function(t) {
                    this.thinking && this.stop(),
                    this.newBoard(t),
                    this.restart()
                },
                loadingProgress: function(t) {
                    1 == t && (this.showLoading = !1)
                }
            },
            mounted: function() {
                var t = this;
                this.newBoard(this.boardSize),
                this.$route.params.pos && this.setPosStr(this.$route.params.pos),
                window.addEventListener("keydown", (function(e) {
                    var n = e.target;
                    if ("INPUT" !== n.tagName && "TEXTAREA" !== n.tagName && !n.isContentEditable && !e.repeat)
                        switch (e.key) {
                        case "ArrowLeft":
                            t.checkThinking().then((function() {
                                return t.backward()
                            }
                            ));
                            break;
                        case "ArrowRight":
                            t.checkThinking().then((function() {
                                return t.forward()
                            }
                            ));
                            break;
                        case "Home":
                            t.checkThinking().then((function() {
                                return t.backToBegin()
                            }
                            ));
                            break;
                        case "End":
                            t.checkThinking().then((function() {
                                return t.forwardToEnd()
                            }
                            ));
                            break;
                        case " ":
                            t.thinking ? t.stop() : t.ready && !t.gameEnded && t.startThink();
                            break;
                        case "b":
                            t.checkThinking().then((function() {
                                return t.startThinkBalance(1)
                            }
                            ));
                            break;
                        case "B":
                            t.checkThinking().then((function() {
                                return t.startThinkBalance(2)
                            }
                            ));
                            break
                        }
                }
                )),
                setInterval((function() {
                    t.aiTimeUsed = t.thinking ? Date.now() - t.lastThinkTime : 0
                }
                ), 100),
                this.initEngine()
            }
        }
          , $e = function() {
            var t = this
              , e = this
              , n = e.$createElement
              , i = e._self._c || n;
            return i("div", {
                staticClass: "game"
            }, [i("div", {
                staticClass: "board-box"
            }, [i("Board", {
                ref: "board",
                attrs: {
                    "is-ai-turn": e.isAITurn,
                    "preview-pv": e.previewPv
                },
                on: {
                    clicked: e.clicked
                }
            }), e._v(" "), i("div", {
                staticClass: "button-box"
            }, [i("scroller", {
                attrs: {
                    "lock-y": "",
                    "scrollbar-x": e.$store.state.screenWidth < e.buttonBarWidth,
                    bounce: !1
                }
            }, [i("div", {
                staticClass: "button-box",
                style: {
                    width: e.buttonBarWidth + "px"
                }
            }, [i("flexbox", {
                attrs: {
                    gutter: 0
                }
            }, [i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        return e.newGame.apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-file-o",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: 0 == e.position.length
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.backToBegin()
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-angle-double-left fa-lg",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: 0 == e.position.length
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.backward(),
                                e.clearUsedTime()
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-angle-left fa-lg",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: e.position.length == e.lastPosition.length
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.forward()
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-angle-right fa-lg",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: e.position.length == e.lastPosition.length
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.forwardToEnd()
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-angle-double-right fa-lg",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", [e.ready ? i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: e.thinking || e.gameEnded
                },
                nativeOn: {
                    click: function(t) {
                        return e.startThink.apply(null, arguments)
                    }
                }
            }, [e.thinking ? i("i", {
                staticClass: "fa fa-cog fa-spin"
            }) : i("i", {
                staticClass: "fa fa-play",
                style: {
                    color: e.gameEnded ? "#145A32" : "#229954"
                }
            })]) : i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        e.showLoading = !0
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-spinner fa-spin"
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: !e.thinking
                },
                nativeOn: {
                    click: function(t) {
                        return e.stop.apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-stop",
                style: {
                    color: e.thinking ? "#E74C3C" : "#78281F"
                }
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    disabled: e.thinking || !e.ready || e.gameEnded
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.showBalanceOptions = !0
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-adjust",
                style: {
                    color: e.thinking || !e.ready || e.gameEnded ? "#1A5276" : "#3498DB"
                }
            })])], 1), e._v(" "), i("flexbox-item", {
                staticStyle: {
                    "min-width": "0px"
                },
                attrs: {
                    span: 1 / 40
                }
            }), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.showScreenshotOptions = !0
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-picture-o",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.setValue({
                                key: "indexOrigin",
                                value: 0 == e.indexOrigin ? e.position.length : 0
                            })
                        }
                        .apply(null, arguments)
                    }
                }
            }, [0 == e.indexOrigin ? i("i", {
                staticClass: "fa fa-info-circle",
                attrs: {
                    "aria-hidden": "true"
                }
            }) : i("i", {
                staticClass: "fa fa-info",
                attrs: {
                    "aria-hidden": "true"
                }
            })])], 1), e._v(" "), i("flexbox-item", {
                staticStyle: {
                    "min-width": "0px"
                },
                attrs: {
                    span: 1 / 40
                }
            }), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.rotate()
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-repeat"
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.showFlipOptions = !0
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-exchange"
            })])], 1), e._v(" "), i("flexbox-item", [i("x-button", {
                staticStyle: {
                    padding: "0"
                },
                nativeOn: {
                    click: function(t) {
                        return function() {
                            e.checkThinking().then((function() {
                                e.showMoveOptions = !0
                            }
                            ))
                        }
                        .apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "fa fa-arrows"
            })])], 1)], 1)], 1)])], 1)], 1), e._v(" "), i("load-more", {
                staticClass: "seperator",
                attrs: {
                    "show-loading": !1,
                    "background-color": "#fbf9fe"
                }
            }), e._v(" "), i("div", {
                staticClass: "info-box",
                style: e.showAnalysis ? {} : {
                    display: "none"
                }
            }, [i("div", [e.thinking && e.aiTimeUsed > 0 && 0 != e.turnTime ? i("x-progress", {
                attrs: {
                    percent: Math.min(100 * e.aiTimeUsed / Math.min(e.turnTime, e.matchTime), 100),
                    "show-cancel": !1
                }
            }) : e._e(), e._v(" "), 1 == e.nbest ? i("x-table", {
                staticStyle: {
                    "background-color": "#fff",
                    "line-height": "210%"
                },
                attrs: {
                    "cell-bordered": !0
                }
            }, [i("thead", [i("tr", {
                staticStyle: {
                    "background-color": "#f7f7f7"
                }
            }, [i("th", [e._v(e._s(e.$t("game.info.depth")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.eval")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.speed")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.nodes")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.time")))])])]), e._v(" "), i("tbody", [i("tr", [i("td", [e._v(e._s(e.outputs.pv[0].depth + "-" + e.outputs.pv[0].seldepth))]), e._v(" "), i("td", {
                staticStyle: {
                    "font-weight": "bold"
                }
            }, [e._v(e._s(e.outputs.pv[0].eval))]), e._v(" "), i("td", [e._v(e._s(e.getSpeedText(e.outputs.speed)))]), e._v(" "), i("td", [e._v(e._s(e.getNodesText(e.outputs.nodes)))]), e._v(" "), i("td", [e._v(e._s(e.getTimeText(e.outputs.time)))])]), e._v(" "), i("tr", [i("td", {
                attrs: {
                    colspan: "5"
                }
            }, [i("flexbox", {
                staticStyle: {
                    padding: "5px"
                },
                attrs: {
                    align: "stretch",
                    gutter: 0
                }
            }, [i("flexbox-item", {
                staticStyle: {
                    padding: "2px 10px 2px 0",
                    width: "initial",
                    "line-height": "initial",
                    flex: "none"
                }
            }, [e._v("\n                  " + e._s(e.$t("game.info.bestline")) + "\n                ")]), e._v(" "), i("flexbox-item", [i("Bestline", {
                attrs: {
                    bestline: e.outputs.pv[0].bestline,
                    boardSize: e.boardSize
                },
                on: {
                    pvPreview: function(t) {
                        return e.previewPv = t
                    },
                    pvSet: e.setPvAsPosition
                }
            })], 1)], 1)], 1)])])]) : i("div", [i("x-table", {
                staticStyle: {
                    "background-color": "#fff",
                    "line-height": "210%"
                },
                attrs: {
                    "cell-bordered": !0
                }
            }, [i("thead", [i("tr", {
                staticStyle: {
                    "background-color": "#f7f7f7"
                }
            }, [i("th", [e._v(e._s(e.$t("game.info.speed")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.nodes")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.time")))])])]), e._v(" "), i("tbody", [i("tr", [i("td", [e._v(e._s(e.getSpeedText(e.outputs.speed)))]), e._v(" "), i("td", [e._v(e._s(e.getNodesText(e.outputs.nodes)))]), e._v(" "), i("td", [e._v(e._s(e.getTimeText(e.outputs.time)))])])])]), e._v(" "), i("x-table", {
                staticStyle: {
                    "background-color": "#fff",
                    "line-height": "210%"
                },
                attrs: {
                    "cell-bordered": !0
                }
            }, [i("thead", [i("tr", {
                staticStyle: {
                    "background-color": "#f7f7f7"
                }
            }, [i("th", [e._v(e._s(e.$t("game.info.nbestIndex")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.depth")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.eval")))]), e._v(" "), i("th", [e._v(e._s(e.$t("game.info.bestline")))])])]), e._v(" "), i("tbody", e._l(Math.min(e.nbest, e.outputs.pv.length), (function(t) {
                return i("tr", {
                    key: t
                }, [i("td", {
                    staticStyle: {
                        "min-width": "40px"
                    }
                }, [e._v(e._s(t))]), e._v(" "), i("td", {
                    staticStyle: {
                        "min-width": "55px"
                    }
                }, [e._v("\n                " + e._s(e.outputs.pv[t - 1].depth + "-" + e.outputs.pv[t - 1].seldepth) + "\n              ")]), e._v(" "), i("td", {
                    staticStyle: {
                        "font-weight": "bold",
                        "min-width": "55px"
                    }
                }, [e._v(e._s(e.outputs.pv[t - 1].eval))]), e._v(" "), i("td", [i("Bestline", {
                    attrs: {
                        bestline: e.outputs.pv[t - 1].bestline,
                        boardSize: e.boardSize
                    },
                    on: {
                        pvPreview: function(t) {
                            return e.previewPv = t
                        },
                        pvSet: e.setPvAsPosition
                    }
                })], 1)])
            }
            )), 0)])], 1)], 1), e._v(" "), i("group", [i("x-textarea", {
                ref: "curposArea",
                staticStyle: {
                    padding: "5px"
                },
                attrs: {
                    title: e.$t("game.currentPos"),
                    "show-counter": !1,
                    rows: 1,
                    value: e.posStr,
                    autosize: ""
                },
                on: {
                    "on-change": function(t) {
                        e.setPosStr(t)
                    }
                }
            })], 1), e._v(" "), i("group", {
                attrs: {
                    title: e.$t("game.evalChart")
                }
            }, [i("div", {
                style: {
                    width: e.chartWidth + "px",
                    height: .6 * e.chartWidth + "px"
                }
            }, [i("v-chart", {
                ref: "chart",
                attrs: {
                    data: e.evalData,
                    width: e.chartWidth,
                    height: .6 * e.chartWidth
                }
            }, [i("v-scale", {
                ref: "chartx",
                attrs: {
                    x: "",
                    "tick-interval": 2
                }
            }), e._v(" "), i("v-scale", {
                attrs: {
                    y: "",
                    alias: "eval",
                    "tick-count": 5
                }
            }), e._v(" "), i("v-point", {
                style: {
                    stroke: "#fff",
                    lineWidth: 1
                },
                attrs: {
                    size: 5,
                    shape: "smooth",
                    "series-field": "piece"
                }
            }), e._v(" "), i("v-line", {
                attrs: {
                    shape: "smooth",
                    "series-field": "piece"
                }
            }), e._v(" "), i("v-area", {
                attrs: {
                    shape: "smooth",
                    "series-field": "piece"
                }
            })], 1)], 1)])], 1), e._v(" "), i("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [i("actionsheet", {
                attrs: {
                    menus: e.balanceOptions,
                    "show-cancel": "",
                    "cancel-text": e.$t("common.cancel")
                },
                on: {
                    "on-click-menu": function(e) {
                        0 != e && 1 != e || t.startThinkBalance(e + 1)
                    }
                },
                model: {
                    value: e.showBalanceOptions,
                    callback: function(t) {
                        e.showBalanceOptions = t
                    },
                    expression: "showBalanceOptions"
                }
            })], 1), e._v(" "), i("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [i("actionsheet", {
                attrs: {
                    menus: e.flipOptions,
                    "show-cancel": "",
                    "cancel-text": e.$t("common.cancel")
                },
                on: {
                    "on-click-menu": e.onFlipOption
                },
                model: {
                    value: e.showFlipOptions,
                    callback: function(t) {
                        e.showFlipOptions = t
                    },
                    expression: "showFlipOptions"
                }
            })], 1), e._v(" "), i("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [i("actionsheet", {
                attrs: {
                    menus: e.moveOptions,
                    "show-cancel": "",
                    "cancel-text": e.$t("common.cancel")
                },
                on: {
                    "on-click-menu": e.onMoveOption
                },
                model: {
                    value: e.showMoveOptions,
                    callback: function(t) {
                        e.showMoveOptions = t
                    },
                    expression: "showMoveOptions"
                }
            })], 1), e._v(" "), i("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [i("actionsheet", {
                attrs: {
                    menus: e.shotOptions,
                    "show-cancel": "",
                    "cancel-text": e.$t("common.cancel")
                },
                on: {
                    "on-click-menu": e.onScreenshotOption
                },
                model: {
                    value: e.showScreenshotOptions,
                    callback: function(t) {
                        e.showScreenshotOptions = t
                    },
                    expression: "showScreenshotOptions"
                }
            })], 1), e._v(" "), i("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [i("popup", {
                staticStyle: {
                    height: "50%"
                },
                attrs: {
                    "is-transparent": ""
                },
                model: {
                    value: e.showScreenshot,
                    callback: function(t) {
                        e.showScreenshot = t
                    },
                    expression: "showScreenshot"
                }
            }, [i("div", {
                staticClass: "screenshot-box"
            }, [e.gifLoading ? i("span", [e._v("\n          " + e._s(e.$t("game.gifLoading")) + "\n          "), i("i", {
                staticClass: "fa fa-spinner fa-pulse fa-lg",
                attrs: {
                    "aria-hidden": "true"
                }
            })]) : e._e(), e._v(" "), i("img", {
                ref: "screenshot",
                staticClass: "screenshot-img"
            }), e._v(" "), e.gifLoading ? e._e() : i("x-button", {
                attrs: {
                    type: "primary",
                    disabled: e.isOnIOSBrowser,
                    plain: e.isOnIOSBrowser,
                    text: e.isOnIOSBrowser ? e.$t("game.saveScreenshotIOS") : e.$t("game.saveScreenshot")
                },
                nativeOn: {
                    click: function(t) {
                        return e.saveScreenshot.apply(null, arguments)
                    }
                }
            })], 1)])], 1), e._v(" "), i("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [i("x-dialog", {
                attrs: {
                    "hide-on-blur": ""
                },
                model: {
                    value: e.showLoading,
                    callback: function(t) {
                        e.showLoading = t
                    },
                    expression: "showLoading"
                }
            }, [i("div", {
                staticStyle: {
                    margin: "20px auto"
                }
            }, [e._v(e._s(e.$t("game.engineLoading")))]), e._v(" "), i("x-circle", {
                staticStyle: {
                    width: "100px",
                    height: "100px",
                    margin: "20px auto"
                },
                attrs: {
                    percent: 100 * e.loadingProgress,
                    "stroke-width": 6,
                    "trail-width": 6
                }
            }, [i("span", {
                staticStyle: {
                    color: "#36D1DC"
                }
            }, [e._v(e._s(Math.floor(1e4 * e.loadingProgress) / 100) + "%")])]), e._v(" "), i("div", {
                staticStyle: {
                    margin: "10px auto"
                },
                on: {
                    click: function(t) {
                        e.showLoading = !1
                    }
                }
            }, [i("span", {
                staticClass: "vux-close"
            })])], 1)], 1)], 1)
        }
          , je = [];
        function Ve(t) {
            n("adde")
        }
        var Ae = !1
          , Ie = Ve
          , Ne = "data-v-51272826"
          , Ee = null
          , Be = Object(b["a"])(_e, $e, je, Ae, Ie, Ne, Ee)
          , We = Be.exports
          , Le = n("3992")
          , De = n("95ac")
          , Fe = n("2144")
          , Re = n("04c3")
          , He = n("2d1c")
          , qe = n("3234")
          , Ge = n("34f4");
        function Ue(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Xe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ue(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        E["a"],
        Le["a"],
        De["a"],
        Fe["a"],
        _["a"],
        Re["a"],
        He["a"],
        qe["a"],
        Ge["a"],
        Xe(Xe(Xe({}, Object(h["e"])(["maxThreads", "supportThreads", "supportSimd", "supportRelaxedSimd"])), Object(h["e"])("settings", ["language", "thinkTimeOption", "turnTime", "matchTime", "maxDepth", "maxNodes", "strength", "nbest", "threads", "pondering", "configIndex", "candRange", "boardSize", "rule", "aiThinkBlack", "aiThinkWhite", "clickCheck", "showCoord", "showAnalysis", "showDetail", "showPvEval", "showIndex", "showLastStep", "showWinline", "showForbid", "boardStyle", "hashSize"])), {}, {
            languageOptions: function() {
                return [{
                    key: "zh-CN",
                    value: "简体中文"
                }, {
                    key: "zh-TW",
                    value: "繁體中文"
                }, {
                    key: "en",
                    value: "English"
                }, {
                    key: "ko",
                    value: "한국어"
                }, {
                    key: "ja",
                    value: "日本語"
                }, {
                    key: "vi",
                    value: "Tiếng Việt"
                }, {
                    key: "ru",
                    value: "Русский"
                }]
            },
            thinkTimeOptions: function() {
                return [{
                    key: 1,
                    value: this.$t("setting.thinking.fast")
                }, {
                    key: 2,
                    value: this.$t("setting.thinking.slow")
                }, {
                    key: 3,
                    value: this.$t("setting.thinking.analysis")
                }, {
                    key: 0,
                    value: this.$t("setting.thinking.custom")
                }]
            },
            configIndexOptions: function() {
                return [{
                    key: 0,
                    value: this.$t("setting.thinking.config.mix9lite")
                }, {
                    key: 1,
                    value: this.$t("setting.thinking.config.220723")
                }, {
                    key: 2,
                    value: this.$t("setting.thinking.config.210901")
                }]
            },
            candRangeOptions: function() {
                return [{
                    key: 0,
                    value: this.$t("setting.thinking.candrange.square2")
                }, {
                    key: 1,
                    value: this.$t("setting.thinking.candrange.square2line3")
                }, {
                    key: 2,
                    value: this.$t("setting.thinking.candrange.square3")
                }, {
                    key: 3,
                    value: this.$t("setting.thinking.candrange.square3line4")
                }, {
                    key: 4,
                    value: this.$t("setting.thinking.candrange.square4")
                }, {
                    key: 5,
                    value: this.$t("setting.thinking.candrange.fullboard")
                }]
            },
            hashSizeOptions: function() {
                return [{
                    key: 256,
                    value: "256MB"
                }, {
                    key: 512,
                    value: "512MB"
                }, {
                    key: 1024,
                    value: "1GB"
                }, {
                    key: 1536,
                    value: "1.5GB"
                }]
            },
            ruleOptions: function() {
                return [{
                    key: 0,
                    value: this.$t("setting.board.rule.gomoku")
                }, {
                    key: 1,
                    value: this.$t("setting.board.rule.standard")
                }, {
                    key: 2,
                    value: this.$t("setting.board.rule.renju")
                }, {
                    key: 5,
                    value: this.$t("setting.board.rule.swap1")
                }]
            },
            clickCheckOptions: function() {
                return [{
                    key: 0,
                    value: this.$t("setting.board.clickCheck.direct")
                }, {
                    key: 1,
                    value: this.$t("setting.board.clickCheck.confirm")
                }, {
                    key: 2,
                    value: this.$t("setting.board.clickCheck.slide")
                }]
            },
            showPvEvalOptions: function() {
                return [{
                    key: 0,
                    value: this.$t("setting.board.showPvEval.none")
                }, {
                    key: 1,
                    value: this.$t("setting.board.showPvEval.eval")
                }, {
                    key: 2,
                    value: this.$t("setting.board.showPvEval.winrate")
                }]
            },
            languageValue: {
                get: function() {
                    return this.language
                },
                set: function(t) {
                    this.setValue({
                        key: "language",
                        value: t
                    })
                }
            },
            thinkTimeSelected: {
                get: function() {
                    return this.thinkTimeOption
                },
                set: function(t) {
                    this.setValue({
                        key: "thinkTimeOption",
                        value: t
                    })
                }
            },
            turnTimeInSecond: {
                get: function() {
                    return Math.floor(this.turnTime / 500) / 2
                },
                set: function(t) {
                    this.setValue({
                        key: "turnTime",
                        value: 1e3 * t
                    })
                }
            },
            matchTimeInSecond: {
                get: function() {
                    return Math.floor(this.matchTime / 1e3)
                },
                set: function(t) {
                    this.setValue({
                        key: "matchTime",
                        value: 1e3 * t
                    })
                }
            },
            maxDepthValue: {
                get: function() {
                    return this.maxDepth
                },
                set: function(t) {
                    this.setValue({
                        key: "maxDepth",
                        value: t
                    })
                }
            },
            maxNodeValue: {
                get: function() {
                    return this.maxNodes / 1e6
                },
                set: function(t) {
                    this.setValue({
                        key: "maxNodes",
                        value: Math.ceil(1e6 * t)
                    })
                }
            },
            handicapValue: {
                get: function() {
                    return 100 - this.strength
                },
                set: function(t) {
                    this.setValue({
                        key: "strength",
                        value: 100 - t
                    })
                }
            },
            nbestValue: {
                get: function() {
                    return this.nbest
                },
                set: function(t) {
                    this.setValue({
                        key: "nbest",
                        value: t
                    })
                }
            },
            threadsValue: {
                get: function() {
                    return this.threads
                },
                set: function(t) {
                    this.setValue({
                        key: "threads",
                        value: t
                    })
                }
            },
            ponderingValue: {
                get: function() {
                    return !!this.supportThreads && this.pondering
                },
                set: function(t) {
                    this.setValue({
                        key: "pondering",
                        value: t
                    })
                }
            },
            configIndexValue: {
                get: function() {
                    return this.configIndex
                },
                set: function(t) {
                    this.setValue({
                        key: "configIndex",
                        value: t
                    })
                }
            },
            candRangeValue: {
                get: function() {
                    return this.candRange
                },
                set: function(t) {
                    this.setValue({
                        key: "candRange",
                        value: t
                    })
                }
            },
            hashSizeValue: {
                get: function() {
                    return this.hashSize
                },
                set: function(t) {
                    this.setValue({
                        key: "hashSize",
                        value: t
                    })
                }
            },
            boardSizeValue: {
                get: function() {
                    return this.boardSize
                },
                set: function(t) {
                    this.setValue({
                        key: "boardSize",
                        value: t
                    })
                }
            },
            ruleValue: {
                get: function() {
                    return this.rule
                },
                set: function(t) {
                    this.setValue({
                        key: "rule",
                        value: t
                    }),
                    this.checkForbid()
                }
            },
            aiThinkBlackValue: {
                get: function() {
                    return this.aiThinkBlack
                },
                set: function(t) {
                    this.setValue({
                        key: "aiThinkBlack",
                        value: t
                    })
                }
            },
            aiThinkWhiteValue: {
                get: function() {
                    return this.aiThinkWhite
                },
                set: function(t) {
                    this.setValue({
                        key: "aiThinkWhite",
                        value: t
                    })
                }
            },
            clickCheckValue: {
                get: function() {
                    return this.clickCheck
                },
                set: function(t) {
                    this.setValue({
                        key: "clickCheck",
                        value: t
                    })
                }
            },
            showCoordValue: {
                get: function() {
                    return this.showCoord
                },
                set: function(t) {
                    this.setValue({
                        key: "showCoord",
                        value: t
                    })
                }
            },
            showAnalysisValue: {
                get: function() {
                    return this.showAnalysis
                },
                set: function(t) {
                    this.setValue({
                        key: "showAnalysis",
                        value: t
                    })
                }
            },
            showDetailValue: {
                get: function() {
                    return this.showDetail
                },
                set: function(t) {
                    this.setValue({
                        key: "showDetail",
                        value: t
                    })
                }
            },
            showPvEvalValue: {
                get: function() {
                    return this.showPvEval
                },
                set: function(t) {
                    this.setValue({
                        key: "showPvEval",
                        value: t
                    })
                }
            },
            showIndexValue: {
                get: function() {
                    return this.showIndex
                },
                set: function(t) {
                    this.setValue({
                        key: "showIndex",
                        value: t
                    })
                }
            },
            showLastStepValue: {
                get: function() {
                    return this.showLastStep
                },
                set: function(t) {
                    this.setValue({
                        key: "showLastStep",
                        value: t
                    })
                }
            },
            showWinlineValue: {
                get: function() {
                    return this.showWinline
                },
                set: function(t) {
                    this.setValue({
                        key: "showWinline",
                        value: t
                    })
                }
            },
            showForbidValue: {
                get: function() {
                    return this.showForbid
                },
                set: function(t) {
                    this.setValue({
                        key: "showForbid",
                        value: t
                    })
                }
            },
            boardColor: {
                get: function() {
                    return this.boardStyle.boardColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "boardColor",
                        value: t
                    })
                }
            },
            lastStepColor: {
                get: function() {
                    return this.boardStyle.lastStepColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "lastStepColor",
                        value: t
                    })
                }
            },
            winlineColor: {
                get: function() {
                    return this.boardStyle.winlineColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "winlineColor",
                        value: t
                    })
                }
            },
            bestMoveColor: {
                get: function() {
                    return this.boardStyle.bestMoveColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "bestMoveColor",
                        value: t
                    })
                }
            },
            thinkingMoveColor: {
                get: function() {
                    return this.boardStyle.thinkingMoveColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "thinkingMoveColor",
                        value: t
                    })
                }
            },
            thoughtMoveColor: {
                get: function() {
                    return this.boardStyle.thoughtMoveColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "thoughtMoveColor",
                        value: t
                    })
                }
            },
            lostMoveColor: {
                get: function() {
                    return this.boardStyle.lostMoveColor
                },
                set: function(t) {
                    this.setBoardStyle({
                        key: "lostMoveColor",
                        value: t
                    })
                }
            }
        }),
        Xe(Xe(Xe(Xe({}, Object(h["d"])("settings", ["setValue", "setBoardStyle"])), Object(h["b"])("settings", ["clearCookies"])), Object(h["b"])("ai", ["checkForbid"])), {}, {
            reset: function() {
                this.clearCookies(),
                location.reload()
            }
        });
        function Ye(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Ke(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ye(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Je = {
            name: "settings",
            components: {
                Group: E["a"],
                GroupTitle: Le["a"],
                XSwitch: De["a"],
                XNumber: Fe["a"],
                XButton: _["a"],
                Radio: Re["a"],
                PopupRadio: He["a"],
                Cell: qe["a"],
                Box: Ge["a"]
            },
            data: function() {
                return {
                    showLanguageOption: !1
                }
            },
            computed: Ke(Ke(Ke({}, Object(h["e"])(["maxThreads", "supportThreads", "supportSimd", "supportRelaxedSimd"])), Object(h["e"])("settings", ["language", "thinkTimeOption", "turnTime", "matchTime", "maxDepth", "maxNodes", "strength", "nbest", "threads", "pondering", "configIndex", "candRange", "boardSize", "rule", "aiThinkBlack", "aiThinkWhite", "clickCheck", "showCoord", "showAnalysis", "showDetail", "showPvEval", "showIndex", "showLastStep", "showWinline", "showForbid", "boardStyle", "hashSize"])), {}, {
                languageOptions: function() {
                    return [{
                        key: "zh-CN",
                        value: "简体中文"
                    }, {
                        key: "zh-TW",
                        value: "繁體中文"
                    }, {
                        key: "en",
                        value: "English"
                    }, {
                        key: "ko",
                        value: "한국어"
                    }, {
                        key: "ja",
                        value: "日本語"
                    }, {
                        key: "vi",
                        value: "Tiếng Việt"
                    }, {
                        key: "ru",
                        value: "Русский"
                    }]
                },
                thinkTimeOptions: function() {
                    return [{
                        key: 1,
                        value: this.$t("setting.thinking.fast")
                    }, {
                        key: 2,
                        value: this.$t("setting.thinking.slow")
                    }, {
                        key: 3,
                        value: this.$t("setting.thinking.analysis")
                    }, {
                        key: 0,
                        value: this.$t("setting.thinking.custom")
                    }]
                },
                configIndexOptions: function() {
                    return [{
                        key: 0,
                        value: this.$t("setting.thinking.config.mix9lite")
                    }, {
                        key: 1,
                        value: this.$t("setting.thinking.config.220723")
                    }, {
                        key: 2,
                        value: this.$t("setting.thinking.config.210901")
                    }]
                },
                candRangeOptions: function() {
                    return [{
                        key: 0,
                        value: this.$t("setting.thinking.candrange.square2")
                    }, {
                        key: 1,
                        value: this.$t("setting.thinking.candrange.square2line3")
                    }, {
                        key: 2,
                        value: this.$t("setting.thinking.candrange.square3")
                    }, {
                        key: 3,
                        value: this.$t("setting.thinking.candrange.square3line4")
                    }, {
                        key: 4,
                        value: this.$t("setting.thinking.candrange.square4")
                    }, {
                        key: 5,
                        value: this.$t("setting.thinking.candrange.fullboard")
                    }]
                },
                hashSizeOptions: function() {
                    return [{
                        key: 256,
                        value: "256MB"
                    }, {
                        key: 512,
                        value: "512MB"
                    }, {
                        key: 1024,
                        value: "1GB"
                    }, {
                        key: 1536,
                        value: "1.5GB"
                    }]
                },
                ruleOptions: function() {
                    return [{
                        key: 0,
                        value: this.$t("setting.board.rule.gomoku")
                    }, {
                        key: 1,
                        value: this.$t("setting.board.rule.standard")
                    }, {
                        key: 2,
                        value: this.$t("setting.board.rule.renju")
                    }, {
                        key: 5,
                        value: this.$t("setting.board.rule.swap1")
                    }]
                },
                clickCheckOptions: function() {
                    return [{
                        key: 0,
                        value: this.$t("setting.board.clickCheck.direct")
                    }, {
                        key: 1,
                        value: this.$t("setting.board.clickCheck.confirm")
                    }, {
                        key: 2,
                        value: this.$t("setting.board.clickCheck.slide")
                    }]
                },
                showPvEvalOptions: function() {
                    return [{
                        key: 0,
                        value: this.$t("setting.board.showPvEval.none")
                    }, {
                        key: 1,
                        value: this.$t("setting.board.showPvEval.eval")
                    }, {
                        key: 2,
                        value: this.$t("setting.board.showPvEval.winrate")
                    }]
                },
                languageValue: {
                    get: function() {
                        return this.language
                    },
                    set: function(t) {
                        this.setValue({
                            key: "language",
                            value: t
                        })
                    }
                },
                thinkTimeSelected: {
                    get: function() {
                        return this.thinkTimeOption
                    },
                    set: function(t) {
                        this.setValue({
                            key: "thinkTimeOption",
                            value: t
                        })
                    }
                },
                turnTimeInSecond: {
                    get: function() {
                        return Math.floor(this.turnTime / 500) / 2
                    },
                    set: function(t) {
                        this.setValue({
                            key: "turnTime",
                            value: 1e3 * t
                        })
                    }
                },
                matchTimeInSecond: {
                    get: function() {
                        return Math.floor(this.matchTime / 1e3)
                    },
                    set: function(t) {
                        this.setValue({
                            key: "matchTime",
                            value: 1e3 * t
                        })
                    }
                },
                maxDepthValue: {
                    get: function() {
                        return this.maxDepth
                    },
                    set: function(t) {
                        this.setValue({
                            key: "maxDepth",
                            value: t
                        })
                    }
                },
                maxNodeValue: {
                    get: function() {
                        return this.maxNodes / 1e6
                    },
                    set: function(t) {
                        this.setValue({
                            key: "maxNodes",
                            value: Math.ceil(1e6 * t)
                        })
                    }
                },
                handicapValue: {
                    get: function() {
                        return 100 - this.strength
                    },
                    set: function(t) {
                        this.setValue({
                            key: "strength",
                            value: 100 - t
                        })
                    }
                },
                nbestValue: {
                    get: function() {
                        return this.nbest
                    },
                    set: function(t) {
                        this.setValue({
                            key: "nbest",
                            value: t
                        })
                    }
                },
                threadsValue: {
                    get: function() {
                        return this.threads
                    },
                    set: function(t) {
                        this.setValue({
                            key: "threads",
                            value: t
                        })
                    }
                },
                ponderingValue: {
                    get: function() {
                        return !!this.supportThreads && this.pondering
                    },
                    set: function(t) {
                        this.setValue({
                            key: "pondering",
                            value: t
                        })
                    }
                },
                configIndexValue: {
                    get: function() {
                        return this.configIndex
                    },
                    set: function(t) {
                        this.setValue({
                            key: "configIndex",
                            value: t
                        })
                    }
                },
                candRangeValue: {
                    get: function() {
                        return this.candRange
                    },
                    set: function(t) {
                        this.setValue({
                            key: "candRange",
                            value: t
                        })
                    }
                },
                hashSizeValue: {
                    get: function() {
                        return this.hashSize
                    },
                    set: function(t) {
                        this.setValue({
                            key: "hashSize",
                            value: t
                        })
                    }
                },
                boardSizeValue: {
                    get: function() {
                        return this.boardSize
                    },
                    set: function(t) {
                        this.setValue({
                            key: "boardSize",
                            value: t
                        })
                    }
                },
                ruleValue: {
                    get: function() {
                        return this.rule
                    },
                    set: function(t) {
                        this.setValue({
                            key: "rule",
                            value: t
                        }),
                        this.checkForbid()
                    }
                },
                aiThinkBlackValue: {
                    get: function() {
                        return this.aiThinkBlack
                    },
                    set: function(t) {
                        this.setValue({
                            key: "aiThinkBlack",
                            value: t
                        })
                    }
                },
                aiThinkWhiteValue: {
                    get: function() {
                        return this.aiThinkWhite
                    },
                    set: function(t) {
                        this.setValue({
                            key: "aiThinkWhite",
                            value: t
                        })
                    }
                },
                clickCheckValue: {
                    get: function() {
                        return this.clickCheck
                    },
                    set: function(t) {
                        this.setValue({
                            key: "clickCheck",
                            value: t
                        })
                    }
                },
                showCoordValue: {
                    get: function() {
                        return this.showCoord
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showCoord",
                            value: t
                        })
                    }
                },
                showAnalysisValue: {
                    get: function() {
                        return this.showAnalysis
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showAnalysis",
                            value: t
                        })
                    }
                },
                showDetailValue: {
                    get: function() {
                        return this.showDetail
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showDetail",
                            value: t
                        })
                    }
                },
                showPvEvalValue: {
                    get: function() {
                        return this.showPvEval
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showPvEval",
                            value: t
                        })
                    }
                },
                showIndexValue: {
                    get: function() {
                        return this.showIndex
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showIndex",
                            value: t
                        })
                    }
                },
                showLastStepValue: {
                    get: function() {
                        return this.showLastStep
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showLastStep",
                            value: t
                        })
                    }
                },
                showWinlineValue: {
                    get: function() {
                        return this.showWinline
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showWinline",
                            value: t
                        })
                    }
                },
                showForbidValue: {
                    get: function() {
                        return this.showForbid
                    },
                    set: function(t) {
                        this.setValue({
                            key: "showForbid",
                            value: t
                        })
                    }
                },
                boardColor: {
                    get: function() {
                        return this.boardStyle.boardColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "boardColor",
                            value: t
                        })
                    }
                },
                lastStepColor: {
                    get: function() {
                        return this.boardStyle.lastStepColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "lastStepColor",
                            value: t
                        })
                    }
                },
                winlineColor: {
                    get: function() {
                        return this.boardStyle.winlineColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "winlineColor",
                            value: t
                        })
                    }
                },
                bestMoveColor: {
                    get: function() {
                        return this.boardStyle.bestMoveColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "bestMoveColor",
                            value: t
                        })
                    }
                },
                thinkingMoveColor: {
                    get: function() {
                        return this.boardStyle.thinkingMoveColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "thinkingMoveColor",
                            value: t
                        })
                    }
                },
                thoughtMoveColor: {
                    get: function() {
                        return this.boardStyle.thoughtMoveColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "thoughtMoveColor",
                            value: t
                        })
                    }
                },
                lostMoveColor: {
                    get: function() {
                        return this.boardStyle.lostMoveColor
                    },
                    set: function(t) {
                        this.setBoardStyle({
                            key: "lostMoveColor",
                            value: t
                        })
                    }
                }
            }),
            methods: Ke(Ke(Ke(Ke({}, Object(h["d"])("settings", ["setValue", "setBoardStyle"])), Object(h["b"])("settings", ["clearCookies"])), Object(h["b"])("ai", ["checkForbid"])), {}, {
                reset: function() {
                    this.clearCookies(),
                    location.reload()
                }
            }),
            watch: {}
        }
          , Qe = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "settings"
            }, [n("group", [n("popup-radio", {
                attrs: {
                    title: t.$t("setting.language"),
                    options: t.languageOptions
                },
                model: {
                    value: t.languageValue,
                    callback: function(e) {
                        t.languageValue = e
                    },
                    expression: "languageValue"
                }
            })], 1), t._v(" "), n("group", [n("group-title", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v(t._s(t.$t("setting.thinking.timeTitle")))]), t._v(" "), n("radio", {
                attrs: {
                    options: t.thinkTimeOptions
                },
                model: {
                    value: t.thinkTimeSelected,
                    callback: function(e) {
                        t.thinkTimeSelected = e
                    },
                    expression: "thinkTimeSelected"
                }
            }), t._v(" "), 0 == t.thinkTimeSelected ? n("div", {
                staticClass: "time-settings"
            }, [n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.turnTime"),
                    "button-style": "round",
                    width: "75px",
                    min: .5,
                    max: 99999,
                    step: t.turnTimeInSecond < 5 ? .5 : 1,
                    fillable: ""
                },
                model: {
                    value: t.turnTimeInSecond,
                    callback: function(e) {
                        t.turnTimeInSecond = e
                    },
                    expression: "turnTimeInSecond"
                }
            }), t._v(" "), n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.matchTime"),
                    "button-style": "round",
                    width: "75px",
                    min: 1,
                    max: 99999,
                    fillable: ""
                },
                model: {
                    value: t.matchTimeInSecond,
                    callback: function(e) {
                        t.matchTimeInSecond = e
                    },
                    expression: "matchTimeInSecond"
                }
            }), t._v(" "), n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.maxDepth"),
                    "button-style": "round",
                    width: "75px",
                    min: 4,
                    max: 64,
                    fillable: ""
                },
                model: {
                    value: t.maxDepthValue,
                    callback: function(e) {
                        t.maxDepthValue = e
                    },
                    expression: "maxDepthValue"
                }
            }), t._v(" "), n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.maxNode"),
                    "button-style": "round",
                    width: "75px",
                    min: 0,
                    max: 99999,
                    step: .1,
                    fillable: ""
                },
                model: {
                    value: t.maxNodeValue,
                    callback: function(e) {
                        t.maxNodeValue = e
                    },
                    expression: "maxNodeValue"
                }
            })], 1) : t._e()], 1), t._v(" "), n("group", [n("group-title", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v(t._s(t.$t("setting.board.title")))]), t._v(" "), n("x-number", {
                attrs: {
                    title: t.$t("setting.board.size"),
                    "button-style": "round",
                    width: "75px",
                    min: 5,
                    max: 22,
                    fillable: ""
                },
                model: {
                    value: t.boardSizeValue,
                    callback: function(e) {
                        t.boardSizeValue = e
                    },
                    expression: "boardSizeValue"
                }
            }), t._v(" "), n("popup-radio", {
                attrs: {
                    title: t.$t("setting.board.rule.title"),
                    options: t.ruleOptions
                },
                model: {
                    value: t.ruleValue,
                    callback: function(e) {
                        t.ruleValue = e
                    },
                    expression: "ruleValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.aiThinkBlack")
                },
                model: {
                    value: t.aiThinkBlackValue,
                    callback: function(e) {
                        t.aiThinkBlackValue = e
                    },
                    expression: "aiThinkBlackValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.aiThinkWhite")
                },
                model: {
                    value: t.aiThinkWhiteValue,
                    callback: function(e) {
                        t.aiThinkWhiteValue = e
                    },
                    expression: "aiThinkWhiteValue"
                }
            })], 1), t._v(" "), n("group", [n("group-title", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v(t._s(t.$t("setting.thinking.thinkTitle")))]), t._v(" "), n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.nbest"),
                    "button-style": "round",
                    width: "75px",
                    min: 1,
                    max: t.boardSizeValue * t.boardSizeValue,
                    fillable: ""
                },
                model: {
                    value: t.nbestValue,
                    callback: function(e) {
                        t.nbestValue = e
                    },
                    expression: "nbestValue"
                }
            }), t._v(" "), n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.handicap"),
                    "button-style": "round",
                    width: "75px",
                    min: 0,
                    max: 100,
                    step: 5,
                    fillable: ""
                },
                model: {
                    value: t.handicapValue,
                    callback: function(e) {
                        t.handicapValue = e
                    },
                    expression: "handicapValue"
                }
            }), t._v(" "), t.supportThreads ? n("x-number", {
                attrs: {
                    title: t.$t("setting.thinking.threads"),
                    "button-style": "round",
                    width: "75px",
                    min: 1,
                    max: t.maxThreads,
                    fillable: ""
                },
                model: {
                    value: t.threadsValue,
                    callback: function(e) {
                        t.threadsValue = e
                    },
                    expression: "threadsValue"
                }
            }) : t._e(), t._v(" "), t.supportThreads ? n("x-switch", {
                attrs: {
                    title: t.$t("setting.thinking.pondering")
                },
                model: {
                    value: t.ponderingValue,
                    callback: function(e) {
                        t.ponderingValue = e
                    },
                    expression: "ponderingValue"
                }
            }) : t._e(), t._v(" "), n("popup-radio", {
                attrs: {
                    title: t.$t("setting.thinking.config.title"),
                    options: t.configIndexOptions
                },
                model: {
                    value: t.configIndexValue,
                    callback: function(e) {
                        t.configIndexValue = e
                    },
                    expression: "configIndexValue"
                }
            }), t._v(" "), n("popup-radio", {
                attrs: {
                    title: t.$t("setting.thinking.candrange.title"),
                    options: t.candRangeOptions
                },
                model: {
                    value: t.candRangeValue,
                    callback: function(e) {
                        t.candRangeValue = e
                    },
                    expression: "candRangeValue"
                }
            }), t._v(" "), n("popup-radio", {
                attrs: {
                    title: t.$t("setting.thinking.hashSize"),
                    options: t.hashSizeOptions
                },
                model: {
                    value: t.hashSizeValue,
                    callback: function(e) {
                        t.hashSizeValue = e
                    },
                    expression: "hashSizeValue"
                }
            })], 1), t._v(" "), n("group", [n("group-title", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v(t._s(t.$t("setting.board.showTitle")))]), t._v(" "), n("popup-radio", {
                attrs: {
                    title: t.$t("setting.board.clickCheck.title"),
                    options: t.clickCheckOptions
                },
                model: {
                    value: t.clickCheckValue,
                    callback: function(e) {
                        t.clickCheckValue = e
                    },
                    expression: "clickCheckValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showCoord")
                },
                model: {
                    value: t.showCoordValue,
                    callback: function(e) {
                        t.showCoordValue = e
                    },
                    expression: "showCoordValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showAnalysis")
                },
                model: {
                    value: t.showAnalysisValue,
                    callback: function(e) {
                        t.showAnalysisValue = e
                    },
                    expression: "showAnalysisValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showDetail")
                },
                model: {
                    value: t.showDetailValue,
                    callback: function(e) {
                        t.showDetailValue = e
                    },
                    expression: "showDetailValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showIndex")
                },
                model: {
                    value: t.showIndexValue,
                    callback: function(e) {
                        t.showIndexValue = e
                    },
                    expression: "showIndexValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showLastStep")
                },
                model: {
                    value: t.showLastStepValue,
                    callback: function(e) {
                        t.showLastStepValue = e
                    },
                    expression: "showLastStepValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showWinline")
                },
                model: {
                    value: t.showWinlineValue,
                    callback: function(e) {
                        t.showWinlineValue = e
                    },
                    expression: "showWinlineValue"
                }
            }), t._v(" "), n("x-switch", {
                attrs: {
                    title: t.$t("setting.board.showForbid")
                },
                model: {
                    value: t.showForbidValue,
                    callback: function(e) {
                        t.showForbidValue = e
                    },
                    expression: "showForbidValue"
                }
            }), t._v(" "), n("popup-radio", {
                attrs: {
                    title: t.$t("setting.board.showPvEval.title"),
                    options: t.showPvEvalOptions
                },
                model: {
                    value: t.showPvEvalValue,
                    callback: function(e) {
                        t.showPvEvalValue = e
                    },
                    expression: "showPvEvalValue"
                }
            })], 1), t._v(" "), n("group", [n("group-title", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v(t._s(t.$t("setting.board.colorTitle")))]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.boardColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.boardColor,
                    expression: "boardColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.boardColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.boardColor = e.target.value)
                    }
                }
            })]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.lastStepColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lastStepColor,
                    expression: "lastStepColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.lastStepColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.lastStepColor = e.target.value)
                    }
                }
            })]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.winlineColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.winlineColor,
                    expression: "winlineColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.winlineColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.winlineColor = e.target.value)
                    }
                }
            })]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.bestMoveColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.bestMoveColor,
                    expression: "bestMoveColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.bestMoveColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.bestMoveColor = e.target.value)
                    }
                }
            })]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.thinkingMoveColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.thinkingMoveColor,
                    expression: "thinkingMoveColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.thinkingMoveColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.thinkingMoveColor = e.target.value)
                    }
                }
            })]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.thoughtMoveColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.thoughtMoveColor,
                    expression: "thoughtMoveColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.thoughtMoveColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.thoughtMoveColor = e.target.value)
                    }
                }
            })]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.board.lostMoveColor")
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lostMoveColor,
                    expression: "lostMoveColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: t.lostMoveColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.lostMoveColor = e.target.value)
                    }
                }
            })])], 1), t._v(" "), n("group", [n("group-title", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v(t._s(t.$t("setting.browser.capability")))]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.browser.simd")
                }
            }, [t.supportSimd ? n("i", {
                staticClass: "fa fa-check",
                attrs: {
                    "aria-hidden": "true"
                }
            }) : n("i", {
                staticClass: "fa fa-times",
                attrs: {
                    "aria-hidden": "true"
                }
            }), t._v(" "), t.supportRelaxedSimd ? n("span", [t._v(t._s(t.$t("setting.browser.relaxedSimd")))]) : t._e()]), t._v(" "), n("cell", {
                attrs: {
                    title: t.$t("setting.browser.threads")
                }
            }, [t.supportThreads ? n("i", {
                staticClass: "fa fa-check",
                attrs: {
                    "aria-hidden": "true"
                }
            }) : n("i", {
                staticClass: "fa fa-times",
                attrs: {
                    "aria-hidden": "true"
                }
            })]), t._v(" "), t.supportThreads ? n("cell", {
                attrs: {
                    title: t.$t("setting.browser.maxthreads")
                }
            }, [t._v("\n      " + t._s(t.maxThreads) + "\n    ")]) : t._e()], 1), t._v(" "), n("box", {
                attrs: {
                    gap: "40px 20px 20px 20px"
                }
            }, [n("x-button", {
                attrs: {
                    type: "warn"
                },
                nativeOn: {
                    click: function(e) {
                        return t.reset.apply(null, arguments)
                    }
                }
            }, [t._v(t._s(t.$t("setting.reset")))])], 1)], 1)
        }
          , Ze = [];
        function tn(t) {
            n("d6af")
        }
        var en = !1
          , nn = tn
          , on = "data-v-7b2e9710"
          , an = null
          , rn = Object(b["a"])(Je, Qe, Ze, en, nn, on, an)
          , sn = rn.exports;
        i["a"].use(O["a"]);
        var ln = new O["a"]({
            routes: [{
                path: "/settings",
                name: "settings",
                component: sn
            }, {
                path: "/about",
                name: "about",
                component: function() {
                    return n.e("about").then(n.bind(null, "f820"))
                }
            }, {
                path: "/:pos?",
                name: "game",
                component: We
            }]
        })
          , cn = (n("28a5"),
        n("4917"),
        n("a925"));
        function hn(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = un(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function un(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return dn(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dn(t, e) : void 0
            }
        }
        function dn(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        i["a"].use(cn["a"]);
        var fn = ["zh-CN", "zh-TW", "en", "ko", "ja", "vi", "ru"];
        function pn() {
            var t = n("49f8")
              , e = {};
            return t.keys().forEach((function(n) {
                var i = n.match(/([A-Za-z0-9-_]+)\./i);
                if (i && i.length > 1) {
                    var o = i[1];
                    e[o] = t(n)
                }
            }
            )),
            e
        }
        function vn() {
            var t, e = hn(navigator.languages);
            try {
                for (e.s(); !(t = e.n()).done; ) {
                    var n = t.value;
                    if (fn.includes(n))
                        return n;
                    var i = n.split("-")[0];
                    if (fn.includes(i))
                        return i
                }
            } catch (o) {
                e.e(o)
            } finally {
                e.f()
            }
            return "en"
        }
        var gn = new cn["a"]({
            locale: vn(),
            fallbackLocale: "en",
            messages: pn()
        })
          , mn = (n("96cf"),
        n("1da1"))
          , bn = n("2909");
        n("55dd"),
        n("f559");
        function wn() {
            return new Worker(n.p + "js/engine-warpper.worker.b5809a32.worker.js")
        }
        var kn, yn, xn, Sn, Cn = n("4a34"), Tn = n("2fe3");
        function On(t, e) {
            return /^rapfi.*\.data$/.test(t) && (t = "rapfi.data"),
            e + t
        }
        function Mn(t) {
            return Pn.apply(this, arguments)
        }
        function Pn() {
            return Pn = Object(mn["a"])(regeneratorRuntime.mark((function t(e) {
                var n, i, o, a, r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return kn = e,
                            Sn = !1,
                            t.prev = 2,
                            t.next = 5,
                            Object(Tn["c"])();
                        case 5:
                            return xn = t.sent,
                            t.next = 8,
                            Object(Tn["b"])();
                        case 8:
                            if (n = t.sent,
                            t.t0 = xn,
                            !t.t0) {
                                t.next = 14;
                                break
                            }
                            return t.next = 13,
                            Object(Tn["a"])();
                        case 13:
                            t.t0 = t.sent;
                        case 14:
                            if (i = t.t0,
                            o = (xn ? "-multi" : "-single") + (n ? "-simd128" : "") + (i ? "-relaxed" : ""),
                            a = "/" + "build/rapfi".concat(o, ".js"),
                            console.log("Loading engine " + a),
                            !xn) {
                                t.next = 29;
                                break
                            }
                            return t.next = 21,
                            Cn["a"].import(a);
                        case 21:
                            return r = a.substring(0, a.lastIndexOf("/") + 1),
                            t.next = 24,
                            self["Rapfi"]({
                                locateFile: function(t) {
                                    return On(t, r)
                                },
                                onReceiveStdout: function(t) {
                                    return $n(t)
                                },
                                onReceiveStderr: function(t) {
                                    return jn(t)
                                },
                                onExit: function(t) {
                                    return Vn(t)
                                },
                                setStatus: function(t) {
                                    return An(t)
                                }
                            });
                        case 24:
                            yn = t.sent,
                            Sn = !0,
                            kn({
                                ok: !0
                            }),
                            t.next = 33;
                            break;
                        case 29:
                            yn = new wn,
                            yn.onmessage = function(t) {
                                var e = t.data
                                  , n = e.type
                                  , i = e.data;
                                "stdout" === n ? $n(i) : "stderr" === n ? jn(i) : "exit" === n ? Vn(i) : "status" === n ? An(i) : "ready" === n ? (Sn = !0,
                                kn({
                                    ok: !0
                                })) : console.error("received unknown message from worker: ", t.data)
                            }
                            ,
                            yn.onerror = function(t) {
                                console.error("worker error: " + t.message + "\nretrying after 0.5s..."),
                                yn.terminate(),
                                setTimeout((function() {
                                    return Mn(kn)
                                }
                                ), 500)
                            }
                            ,
                            yn.postMessage({
                                type: "engineScriptURL",
                                data: a
                            });
                        case 33:
                            t.next = 38;
                            break;
                        case 35:
                            t.prev = 35,
                            t.t1 = t["catch"](2),
                            console.error("Failed to initialize engine: " + t.t1);
                        case 38:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[2, 35]])
            }
            ))),
            Pn.apply(this, arguments)
        }
        function zn() {
            return xn ? (_n("YXSTOP"),
            !1) : (yn.terminate(),
            Mn(kn),
            !0)
        }
        function _n(t) {
            "string" === typeof t && 0 != t.length && (xn ? yn.sendCommand(t) : yn.postMessage({
                type: "command",
                data: t
            }))
        }
        function $n(t) {
            var e = t.indexOf(" ");
            if (-1 != e) {
                var n = t.substring(0, e)
                  , i = t.substring(e + 1);
                if ("MESSAGE" == n)
                    if (i.startsWith("REALTIME")) {
                        var o = i.split(" ");
                        if (o.length < 3)
                            kn({
                                realtime: {
                                    type: o[1]
                                }
                            });
                        else {
                            var a = o[2].split(",");
                            kn({
                                realtime: {
                                    type: o[1],
                                    pos: [+a[0], +a[1]]
                                }
                            })
                        }
                    } else
                        kn({
                            msg: i
                        });
                else
                    "INFO" == n ? (e = i.indexOf(" "),
                    n = i.substring(0, e),
                    i = i.substring(e + 1),
                    "PV" == n ? kn({
                        multipv: i
                    }) : "NUMPV" == n ? kn({
                        numpv: +i
                    }) : "DEPTH" == n ? kn({
                        depth: +i
                    }) : "SELDEPTH" == n ? kn({
                        seldepth: +i
                    }) : "NODES" == n ? kn({
                        nodes: +i
                    }) : "TOTALNODES" == n ? kn({
                        totalnodes: +i
                    }) : "TOTALTIME" == n ? kn({
                        totaltime: +i
                    }) : "SPEED" == n ? kn({
                        speed: +i
                    }) : "EVAL" == n ? kn({
                        eval: i
                    }) : "WINRATE" == n ? kn({
                        winrate: parseFloat(i)
                    }) : "BESTLINE" == n && kn({
                        bestline: i.match(/\d+,\d+/g).map((function(t) {
                            return t.split(",").map(Number)
                        }
                        ))
                    })) : kn("FORBID" == n ? {
                        forbid: (i.match(/.{4}/g) || []).map((function(t) {
                            var e = t.match(/([0-9][0-9])([0-9][0-9])/)
                              , n = +e[1]
                              , i = +e[2];
                            return [n, i]
                        }
                        ))
                    } : "ERROR" == n ? {
                        error: i
                    } : {
                        unknown: i
                    })
            } else {
                if ("OK" == t)
                    return;
                if ("SWAP" == t)
                    kn({
                        swap: !0
                    });
                else {
                    var r = t.split(",");
                    kn({
                        pos: [+r[0], +r[1]]
                    })
                }
            }
        }
        function jn(t) {
            console.error("[Engine Error] " + t)
        }
        function Vn(t) {
            console.log("[Engine Exit] " + t)
        }
        function An(t) {
            if (!Sn) {
                "Running..." !== t && "" !== t || (Sn = !0,
                kn({
                    loading: {
                        progress: 1
                    }
                }));
                var e = t.match(/\((\d+)\/(\d+)\)/);
                if (e) {
                    var n = parseInt(e[1], 10)
                      , i = parseInt(e[2], 10);
                    n == i && (Sn = !0),
                    kn({
                        loading: {
                            progress: n / i,
                            loadedBytes: n,
                            totalBytes: i
                        }
                    })
                }
            }
        }
        function In(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = Nn(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function Nn(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return En(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? En(t, e) : void 0
            }
        }
        function En(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var Bn = {
            loadingProgress: 0,
            ready: !1,
            startSize: 0,
            restart: !1,
            thinking: !1,
            timeUsed: 0,
            lastThinkTime: 0,
            lastThinkPosition: [],
            currentConfig: null,
            hashSize: null,
            outputs: {
                pos: null,
                swap: null,
                currentPV: 0,
                pv: [{
                    depth: 0,
                    seldepth: 0,
                    nodes: 0,
                    eval: "-",
                    winrate: 0,
                    bestline: []
                }],
                nodes: 0,
                speed: 0,
                time: 0,
                msg: null,
                realtime: {
                    best: [],
                    lost: [],
                    thinking: [],
                    thought: []
                },
                forbid: [],
                error: null
            },
            messages: [],
            posCallback: null
        }
          , Wn = {
            bestlineStr: function(t) {
                return function(e) {
                    e || (e = 0);
                    var n, i = [], o = In(t.outputs.pv[e].bestline);
                    try {
                        for (o.s(); !(n = o.n()).done; ) {
                            var a = n.value
                              , r = String.fromCharCode("A".charCodeAt(0) + a[0])
                              , s = (t.startSize - a[1]).toString();
                            i.push(r + s)
                        }
                    } catch (l) {
                        o.e(l)
                    } finally {
                        o.f()
                    }
                    return i.join(" ")
                }
            }
        }
          , Ln = {
            setLoadingProgress: function(t, e) {
                t.loadingProgress = e
            },
            setReady: function(t, e) {
                t.ready = e
            },
            setThinkingState: function(t, e) {
                t.thinking = e
            },
            setStartSize: function(t, e) {
                t.startSize = e
            },
            setRestart: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                t.restart = e
            },
            clearUsedTime: function(t) {
                t.timeUsed = 0
            },
            addUsedTime: function(t) {
                t.timeUsed += Date.now() - t.lastThinkTime
            },
            setThinkStartTime: function(t) {
                t.lastThinkTime = Date.now()
            },
            setCurrentConfig: function(t, e) {
                t.currentConfig = e
            },
            setHashSize: function(t, e) {
                t.hashSize = e
            },
            addMessage: function(t, e) {
                t.messages.push(e)
            },
            clearMessage: function(t) {
                t.messages = []
            },
            setOutput: function(t, e) {
                t.outputs[e.key] = e.value
            },
            setCurrentPV: function(t, e) {
                t.outputs.currentPV = e
            },
            setPVOutput: function(t, e) {
                var n = t.outputs.pv[t.outputs.currentPV];
                n || (t.outputs.pv[t.outputs.currentPV] = {},
                n = t.outputs.pv[t.outputs.currentPV]),
                n[e.key] = e.value
            },
            clearOutput: function(t) {
                t.outputs.pv = [{
                    depth: 0,
                    seldepth: 0,
                    nodes: 0,
                    eval: "-",
                    winrate: 0,
                    bestline: []
                }],
                t.outputs.pos = null,
                t.outputs.nodes = 0,
                t.outputs.speed = 0,
                t.outputs.forbid = []
            },
            addRealtime: function(t, e) {
                t.outputs.realtime[e.type].push(e.pos)
            },
            clearRealtime: function(t, e) {
                t.outputs.realtime[e] = []
            },
            setPosCallback: function(t, e) {
                t.posCallback = e
            },
            sortPV: function(t) {
                var e = function(e) {
                    return !!t.outputs.pos && (e[0] == t.outputs.pos[0] && e[1] == t.outputs.pos[1])
                }
                  , n = function(t) {
                    var e = +t;
                    return isNaN(e) && (e = t.startsWith("+M") ? 4e4 - +t.substring(2) : t.startsWith("-M") ? +t.substring(2) - 4e4 : -8e4),
                    e
                };
                t.outputs.pv.sort((function(t, i) {
                    return e(t.bestline[0]) ? -1 : e(i.bestline[0]) ? 1 : n(i.eval) - n(t.eval)
                }
                ))
            },
            setLastThinkPosition: function(t, e) {
                t.lastThinkPosition = Object(bn["a"])(e)
            }
        }
          , Dn = {
            initEngine: function(t) {
                var e = t.commit
                  , n = t.dispatch
                  , i = t.state;
                e("setLoadingProgress", 0),
                e("setReady", !1),
                Mn((function(t) {
                    if (t.realtime)
                        switch (t.realtime.type) {
                        case "REFRESH":
                            e("clearRealtime", "thinking"),
                            e("clearRealtime", "thought");
                            break;
                        case "POS":
                            e("addRealtime", {
                                type: "thinking",
                                pos: t.realtime.pos
                            });
                            break;
                        case "DONE":
                            e("addRealtime", {
                                type: "thought",
                                pos: t.realtime.pos
                            }),
                            e("clearRealtime", "thinking");
                            break;
                        case "LOST":
                            e("addRealtime", {
                                type: "lost",
                                pos: t.realtime.pos
                            });
                            break;
                        case "BEST":
                            e("clearRealtime", "best"),
                            e("addRealtime", {
                                type: "best",
                                pos: t.realtime.pos
                            });
                            break
                        }
                    else
                        t.msg ? (e("setOutput", {
                            key: "msg",
                            value: t.msg
                        }),
                        e("addMessage", t.msg)) : t.multipv ? "DONE" == t.multipv ? e("setCurrentPV", 0) : e("setCurrentPV", +t.multipv) : t.depth ? e("setPVOutput", {
                            key: "depth",
                            value: t.depth
                        }) : t.seldepth ? e("setPVOutput", {
                            key: "seldepth",
                            value: t.seldepth
                        }) : t.nodes ? e("setPVOutput", {
                            key: "nodes",
                            value: t.nodes
                        }) : t.totalnodes ? e("setOutput", {
                            key: "nodes",
                            value: t.totalnodes
                        }) : t.totaltime ? e("setOutput", {
                            key: "time",
                            value: t.totaltime
                        }) : t.speed ? e("setOutput", {
                            key: "speed",
                            value: t.speed
                        }) : t.eval ? e("setPVOutput", {
                            key: "eval",
                            value: t.eval
                        }) : t.winrate ? e("setPVOutput", {
                            key: "winrate",
                            value: t.winrate
                        }) : t.bestline ? e("setPVOutput", {
                            key: "bestline",
                            value: t.bestline
                        }) : t.pos ? (e("setOutput", {
                            key: "pos",
                            value: t.pos
                        }),
                        e("addUsedTime"),
                        e("clearRealtime", "best"),
                        e("clearRealtime", "lost"),
                        e("sortPV"),
                        e("setThinkingState", !1),
                        i.posCallback && i.posCallback(t.pos)) : t.swap ? e("setOutput", {
                            key: "swap",
                            value: t.swap
                        }) : t.forbid ? e("setOutput", {
                            key: "forbid",
                            value: t.forbid
                        }) : t.error ? (e("setOutput", {
                            key: "error",
                            value: t.error
                        }),
                        e("addMessage", "Error: " + t.error)) : t.ok ? (e("addMessage", "Engine ready."),
                        e("setReady", !0),
                        n("checkForbid")) : t.loading && e("setLoadingProgress", t.loading.progress)
                }
                ))
            },
            sendInfo: function(t) {
                var e = t.rootState
                  , n = t.rootGetters;
                _n("INFO RULE " + e.settings.rule),
                _n("INFO THREAD_NUM " + (e.settings.threads || 1)),
                _n("INFO CAUTION_FACTOR " + e.settings.candRange),
                _n("INFO STRENGTH " + e.settings.strength),
                _n("INFO TIMEOUT_TURN " + n["settings/turnTime"]),
                _n("INFO TIMEOUT_MATCH " + n["settings/matchTime"]),
                _n("INFO MAX_DEPTH " + n["settings/depth"]),
                _n("INFO MAX_NODE " + n["settings/nodes"]),
                _n("INFO SHOW_DETAIL " + (e.settings.showDetail ? 3 : 2)),
                _n("INFO PONDERING " + (e.settings.pondering ? 1 : 0)),
                _n("INFO SWAPABLE " + (e.position.swaped ? 0 : 1))
            },
            sendBoard: function(t, e) {
                var n, i = t.rootState, o = i.position.position, a = e ? "BOARD" : "YXBOARD", r = o.length % 2 == 0 ? 1 : 2, s = In(o);
                try {
                    for (s.s(); !(n = s.n()).done; ) {
                        var l = n.value;
                        a += " " + l[0] + "," + l[1] + "," + r,
                        r = 3 - r
                    }
                } catch (c) {
                    s.e(c)
                } finally {
                    s.f()
                }
                a += " DONE",
                _n(a)
            },
            think: function(t, e) {
                var n = t.commit
                  , i = t.dispatch
                  , o = t.state
                  , a = t.rootState
                  , r = t.rootGetters;
                if (o.ready) {
                    n("setThinkingState", !0),
                    n("setOutput", {
                        key: "swap",
                        value: !1
                    }),
                    n("clearMessage"),
                    i("reloadConfig"),
                    i("updateHashSize"),
                    i("sendInfo"),
                    (o.restart || o.startSize != a.position.size) && (_n("START " + a.position.size),
                    n("setRestart", !1),
                    n("setStartSize", a.position.size),
                    n("clearUsedTime"));
                    var s = Math.max(r["settings/matchTime"] - o.timeUsed, 1);
                    return _n("INFO TIME_LEFT " + s),
                    i("sendBoard", !1),
                    n("setThinkStartTime"),
                    n("setLastThinkPosition", a.position.position),
                    n("clearOutput"),
                    e && e.balanceMode ? _n((2 == e.balanceMode ? "YXBALANCETWO " : "YXBALANCEONE ") + (e.balanceBias || 0)) : _n("YXNBEST " + a.settings.nbest),
                    new Promise((function(t) {
                        n("setPosCallback", t)
                    }
                    ))
                }
                n("addMessage", "Engine is not ready!")
            },
            stop: function(t) {
                var e = t.commit
                  , n = t.state;
                if (n.thinking) {
                    if (zn()) {
                        e("setReady", !1),
                        e("clearRealtime", "best"),
                        e("clearRealtime", "lost"),
                        e("clearRealtime", "thinking"),
                        e("clearRealtime", "thought"),
                        e("addUsedTime"),
                        e("sortPV"),
                        e("setThinkingState", !1);
                        var i = n.outputs.pv[0].bestline[0];
                        return i && (e("setOutput", {
                            key: "pos",
                            value: i
                        }),
                        n.posCallback && n.posCallback(i)),
                        e("setRestart"),
                        e("setCurrentConfig", null),
                        e("setHashSize", null),
                        !0
                    }
                    return !1
                }
            },
            restart: function(t) {
                var e = t.commit;
                e("setRestart"),
                e("clearUsedTime"),
                e("clearOutput")
            },
            reloadConfig: function(t) {
                var e = t.commit
                  , n = t.state
                  , i = t.rootState;
                i.settings.configIndex != n.currentConfig && (e("setCurrentConfig", i.settings.configIndex),
                _n("RELOADCONFIG " + (ue[n.currentConfig] || "")))
            },
            updateHashSize: function(t) {
                var e = t.commit
                  , n = t.state
                  , i = t.rootState;
                i.settings.hashSize != n.hashSize && (e("setHashSize", i.settings.hashSize),
                _n("INFO HASH_SIZE " + 1024 * n.hashSize),
                e("addMessage", "Hash size reset to ".concat(n.hashSize, " MB.")))
            },
            checkForbid: function(t) {
                var e = t.commit
                  , n = t.state
                  , i = t.dispatch
                  , o = t.rootState
                  , a = t.rootGetters;
                e("setOutput", {
                    key: "forbid",
                    value: []
                }),
                n.ready && a["settings/gameRule"] == he && (i("sendInfo"),
                (n.restart || n.startSize != o.position.size) && (_n("START " + o.position.size),
                e("setRestart", !1),
                e("setStartSize", o.position.size)),
                i("sendBoard", !1),
                _n("YXSHOWFORBID"))
            }
        }
          , Fn = {
            namespaced: !0,
            state: Bn,
            getters: Wn,
            actions: Dn,
            mutations: Ln
        };
        n("34ef");
        function Rn(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = Hn(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    a = t
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function Hn(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return qn(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qn(t, e) : void 0
            }
        }
        function qn(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var Gn = 0
          , Un = 1
          , Xn = 2;
        function Yn(t, e) {
            return t[0] < 0 || t[1] < 0 || t[0] >= e || t[1] >= e ? -1 : t[1] * e + t[0]
        }
        function Kn(t, e, n, i) {
            var o, a, r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s = t[Yn(e, i)], l = 1;
            for (o = 1; ; o++) {
                var c = e[0] + n[0] * o
                  , h = e[1] + n[1] * o
                  , u = Yn([c, h], i);
                if (-1 == u)
                    break;
                if (t[u] != s)
                    break;
                l++
            }
            for (a = 1; ; a++) {
                var d = e[0] - n[0] * a
                  , f = e[1] - n[1] * a
                  , p = Yn([d, f], i);
                if (-1 == p)
                    break;
                if (t[p] != s)
                    break;
                l++
            }
            if (r ? 5 == l : l >= 5)
                return [1 - a, o - 1]
        }
        var Jn = {
            size: 15,
            board: null,
            position: [],
            lastPosition: [],
            winline: [],
            swaped: !1
        }
          , Qn = {
            posStr: function(t) {
                var e, n = [], i = Rn(t.position);
                try {
                    for (i.s(); !(e = i.n()).done; ) {
                        var o = e.value;
                        n.push(String.fromCharCode("a".charCodeAt(0) + o[0])),
                        n.push(t.size - o[1])
                    }
                } catch (a) {
                    i.e(a)
                } finally {
                    i.f()
                }
                return n.join("")
            },
            get: function(t) {
                return function(e) {
                    switch (t.board[Yn(e, t.size)]) {
                    case Un:
                        return "BLACK";
                    case Xn:
                        return "WHITE";
                    case Gn:
                        return "EMPTY";
                    default:
                        return "ERROR"
                    }
                }
            },
            isEmpty: function(t) {
                return function(e) {
                    return t.board[Yn(e, t.size)] == Gn
                }
            },
            isInBoard: function(t) {
                return function(e) {
                    return -1 != Yn(e, t.size)
                }
            },
            playerToMove: function(t) {
                return t.position.length % 2 == 0 ? "BLACK" : "WHITE"
            },
            moveLeftCount: function(t) {
                return t.size * t.size - t.position.length
            },
            marchPosition: function(t) {
                return function(e) {
                    for (var n = Math.min(e.length, t.position), i = 0; i < n; i++) {
                        var o = e[i]
                          , a = t.position[i];
                        if (o[0] != a[0] || o[1] != a[1])
                            break
                    }
                    return i
                }
            }
        }
          , Zn = {
            new: function(t, e) {
                t.size = e,
                t.board = new Uint8Array(t.size * t.size).fill(Gn),
                t.lastPosition = [],
                t.position = [],
                t.winline = [],
                t.swaped = !1
            },
            move: function(t, e) {
                t.board[e[1] * t.size + e[0]] = t.position.length % 2 == 0 ? Un : Xn,
                t.position.push(e);
                var n = t.lastPosition[t.position.length - 1];
                n && n[0] == e[0] && n[1] == e[1] || (t.lastPosition = Object(bn["a"])(t.position))
            },
            undo: function(t) {
                var e = t.position.pop();
                t.board[e[1] * t.size + e[0]] = Gn,
                t.winline = []
            },
            checkWin: function(t, e) {
                if (!(t.position.length < 9))
                    for (var n = t.position[t.position.length - 1], i = [[1, 0], [0, 1], [1, 1], [1, -1]], o = 0, a = i; o < a.length; o++) {
                        var r = a[o]
                          , s = Kn(t.board, n, r, t.size, e);
                        if (s)
                            return t.winline = [[n[0] + s[0] * r[0], n[1] + s[0] * r[1]], [n[0] + s[1] * r[0], n[1] + s[1] * r[1]]]
                    }
            },
            setSwaped: function(t) {
                t.swaped = !0
            }
        }
          , ti = {
            setPosStr: function(t, e) {
                var n = t.commit
                  , i = t.dispatch
                  , o = t.getters
                  , a = t.state;
                e = e.trim().toLowerCase();
                var r = e.match(/([a-z])(\d+)/g);
                if (o.posStr != e && (n("new", a.size),
                r)) {
                    var s, l = Rn(r);
                    try {
                        for (l.s(); !(s = l.n()).done; ) {
                            var c = s.value
                              , h = c.match(/[a-z]/)[0].charCodeAt(0) - "a".charCodeAt(0)
                              , u = a.size - +c.match(/\d+/)[0];
                            if (i("makeMove", [h, u]),
                            a.winline.length > 0)
                                break
                        }
                    } catch (d) {
                        l.e(d)
                    } finally {
                        l.f()
                    }
                }
            },
            makeMove: function(t, e) {
                var n = t.commit
                  , i = t.dispatch
                  , o = t.getters
                  , a = t.rootGetters;
                if (!o.isEmpty(e))
                    return !1;
                var r = a["settings/gameRule"] == ce || a["settings/gameRule"] == he && "BLACK" == o.playerToMove;
                return n("move", e),
                n("checkWin", r),
                i("ai/checkForbid", {}, {
                    root: !0
                }),
                !0
            },
            backward: function(t) {
                var e = t.commit
                  , n = t.dispatch;
                0 != Jn.position.length && (e("undo"),
                n("ai/checkForbid", {}, {
                    root: !0
                }))
            },
            forward: function(t) {
                var e = t.commit
                  , n = t.dispatch
                  , i = t.state
                  , o = t.rootGetters;
                if (!(i.lastPosition.length <= i.position.length)) {
                    var a = o["settings/gameRule"] == ce || o["settings/gameRule"] == he && "BLACK" == Qn.playerToMove;
                    e("move", i.lastPosition[i.position.length]),
                    e("checkWin", a),
                    n("ai/checkForbid", {}, {
                        root: !0
                    })
                }
            },
            backToBegin: function(t) {
                var e = t.dispatch
                  , n = t.state;
                while (n.position.length > 0)
                    e("backward")
            },
            forwardToEnd: function(t) {
                var e = t.dispatch
                  , n = t.state;
                while (n.lastPosition.length > n.position.length)
                    e("forward")
            },
            rotate: function(t) {
                var e = t.commit
                  , n = t.dispatch
                  , i = t.state
                  , o = i.position;
                e("new", i.size);
                var a, r = Rn(o);
                try {
                    for (r.s(); !(a = r.n()).done; ) {
                        var s = a.value;
                        n("makeMove", [i.size - 1 - s[1], s[0]])
                    }
                } catch (l) {
                    r.e(l)
                } finally {
                    r.f()
                }
            },
            flip: function(t, e) {
                var n = t.commit
                  , i = t.dispatch
                  , o = t.state
                  , a = o.position;
                n("new", o.size);
                var r, s = Rn(a);
                try {
                    for (s.s(); !(r = s.n()).done; ) {
                        var l = r.value;
                        0 == e[0] && 0 == e[1] ? l = [l[1], l[0]] : 1 == e[0] && 1 == e[1] ? l = [o.size - 1 - l[1], o.size - 1 - l[0]] : 1 == e[0] ? l[0] = o.size - 1 - l[0] : 1 == e[1] && (l[1] = o.size - 1 - l[1]),
                        i("makeMove", l)
                    }
                } catch (c) {
                    s.e(c)
                } finally {
                    s.f()
                }
            },
            moveTowards: function(t, e) {
                var n = t.commit
                  , i = t.dispatch
                  , o = t.state
                  , a = o.position;
                n("new", o.size);
                var r, s = Rn(a);
                try {
                    for (s.s(); !(r = s.n()).done; ) {
                        var l = r.value;
                        i("makeMove", [l[0] + e[0], l[1] + e[1]])
                    }
                } catch (c) {
                    s.e(c)
                } finally {
                    s.f()
                }
            }
        }
          , ei = {
            namespaced: !0,
            state: Jn,
            getters: Qn,
            actions: ti,
            mutations: Zn
        };
        i["a"].use(h["a"]);
        var ni = new h["a"].Store({
            modules: {
                ai: Fn,
                position: ei,
                settings: we
            },
            state: {
                screenWidth: document.documentElement.clientWidth,
                screenHeight: document.documentElement.clientHeight,
                isOnIOSBrowser: (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream,
                maxThreads: 1,
                supportThreads: !1,
                supportSimd: !1,
                supportRelaxedSimd: !1
            },
            getters: {
                boardCanvasWidth: function(t) {
                    var e = 300
                      , n = 200;
                    return Math.max(Math.min(t.screenWidth, t.screenHeight - n), e)
                }
            },
            mutations: {
                setScreenSize: function(t, e) {
                    t.screenWidth = e.width,
                    t.screenHeight = e.height
                },
                setBrowserCapability: function(t, e) {
                    var n = e.maxThreads
                      , i = e.supportThreads
                      , o = e.supportSimd
                      , a = e.supportRelaxedSimd;
                    t.maxThreads = n,
                    t.supportThreads = i,
                    t.supportSimd = o,
                    t.supportRelaxedSimd = a
                }
            },
            actions: {
                getBrowserCapabilities: function() {
                    var t = Object(mn["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, i, o, a, r, s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = e.commit,
                                    i = e.rootState,
                                    t.next = 3,
                                    Object(Tn["c"])();
                                case 3:
                                    return o = t.sent,
                                    t.next = 6,
                                    Object(Tn["b"])();
                                case 6:
                                    return a = t.sent,
                                    t.next = 9,
                                    Object(Tn["a"])();
                                case 9:
                                    r = t.sent,
                                    s = o ? navigator.hardwareConcurrency : 1,
                                    n("setBrowserCapability", {
                                        maxThreads: s,
                                        supportThreads: o,
                                        supportSimd: a,
                                        supportRelaxedSimd: r
                                    }),
                                    null === i.settings.threads && n("settings/setValue", {
                                        key: "threads",
                                        value: Math.max(1, s / 2)
                                    });
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            },
            strict: !1
        })
          , ii = n("0bc3")
          , oi = n("4e46")
          , ai = window.location.href + "";
        0 == ai.indexOf("http://") && (window.location.href = ai.replace("http://", "https://"));
        var ri = ln.push;
        ln.push = function(t) {
            return ri.call(this, t).catch((function(t) {
                return t
            }
            ))
        }
        ,
        n("1368").polyfill(),
        n("fe3c").attach(document.body),
        i["a"].use(ii["a"]),
        i["a"].use(oi["a"]),
        i["a"].config.productionTip = !1,
        new i["a"]({
            router: ln,
            store: ni,
            i18n: gn,
            render: function(t) {
                return t(T)
            }
        }).$mount("#app")
    },
    7704: function(t) {
        t.exports = JSON.parse('{"appName":"Калькулятор Гомоку","common":{"confirm":"Подтвердить","cancel":"Отменить"},"tabbar":{"game":"Игровое поле","settings":"Настройки","about":"О программе"},"game":{"balance1":"Найти точку равновесия за 1 ход","balance2":"Найти точку равновесия за 2 хода","flip":"Перевернуть","move":"Переместить","info":{"depth":"Глубина","eval":"Оценка","speed":"Скорость","nodes":"Количество узлов","time":"Время","bestline":"Лучший ход","nbestIndex":"Номер"},"interruptThinking":{"title":"ИИ размышляет","msg":"Прервать размышление немедленно?"},"swap":{"title":"Обмен","msg":"ИИ выбрал обмен черными и белыми.","questionTitle":"Обмен?","questionMsg":"Вы хотите обменяться?"},"forbid":{"title":"Запрещённый ход","msg":"Эта позиция является запрещённой."},"shotJpg":"Снимок экрана","shotGif":"GIF-снимок","gifDelay":"Введите время на кадр (в миллисекундах)","gifStart":"Введите начальный номер","gifLoading":"Создание GIF...","saveScreenshot":"Сохранить снимок на устройство","saveScreenshotIOS":"Нажмите и удерживайте изображение, чтобы сохранить","currentPos":"Код текущей позиции","evalChart":"График оценки","black":"Чёрные","white":"Белые","engineLoading":"Загрузка данных движка..."},"setting":{"language":"Язык","thinking":{"timeTitle":"Время размышления","turnTime":"Время на ход (секунды)","matchTime":"Время на матч (секунды)","maxDepth":"Максимальная глубина","maxNode":"Максимальное количество узлов (М)","fast":"Быстрая игра (около 3 минут на матч)","slow":"Медленная игра (около 15 минут на матч)","analysis":"Режим анализа (без ограничения времени)","custom":"Настраиваемый","handicap":"Ограничение уровня игры","nbest":"Множественный анализ","thinkTitle":"Размышление","threads":"Количество потоков","pondering":"Фоновое размышление","hashSize":"Размер хеш-таблицы","config":{"210901":"Классический (2021/09/01)","220723":"Классический (2022/07/23)","title":"Весовые коэффициенты движка","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"Диапазон анализа","square2":"2 круга","square2line3":"2,5 круга","square3":"3 круга","square3line4":"3,5 круга (рекомендуется)","square4":"4 круга","fullboard":"Всё поле"}},"board":{"title":"Игровое поле","size":"Размер поля","rule":{"title":"Правила","gomoku":"Без запрещённых ходов","standard":"Без запрещённых ходов и длинные ряды не побеждают","renju":"С запрещёнными ходами","swap1":"Без запрещённых ходов с обменом первого хода"},"aiThinkBlack":"ИИ за чёрных","aiThinkWhite":"ИИ за белых","clickCheck":{"title":"Способ хода","direct":"Прямой ход","confirm":"Подтверждение","slide":"Свайп для хода"},"showTitle":"Отображение на поле","showCoord":"Показать координаты","showAnalysis":"Показать анализ","showDetail":"Показать детали размышлений","showIndex":"Показать номера","showLastStep":"Выделить последний ход","showWinline":"Показать линию победы","showForbid":"Показать запрещённые ходы","showPvEval":{"title":"Показать оценку анализа","none":"Не показывать","eval":"Показать оценку","winrate":"Показать вероятность победы"},"colorTitle":"Цвета","boardColor":"Цвет игрового поля","lastStepColor":"Цвет последнего хода","winlineColor":"Цвет линии победы","bestMoveColor":"Анализ - лучший ход","thinkingMoveColor":"Анализ - ход в процессе","thoughtMoveColor":"Анализ - проанализированный ход","lostMoveColor":"Анализ - проигрышный ход"},"browser":{"capability":"Возможности браузера","simd":"Ускорение SIMD","relaxedSimd":"(Улучшенное)","threads":"Многопоточность","maxthreads":"Максимальное количество потоков"},"reset":"Сбросить все настройки"}}')
    },
    "7cd0": function(t, e, n) {
        e = t.exports = n("2350")(!1),
        e.push([t.i, "\n.settings[data-v-7b2e9710] {\n  max-width: 100%;\n}\n@media (min-width: 800px) {\n.settings[data-v-7b2e9710] {\n    max-width: 800px;\n    margin: 0 auto;\n}\n}\n", ""])
    },
    9224: function(t) {
        t.exports = JSON.parse('{"a":"0.30.0"}')
    },
    "9ea5": function(t) {
        t.exports = JSON.parse('{"appName":"五子棋計算器","common":{"confirm":"確認","cancel":"取消"},"tabbar":{"game":"棋盤","settings":"設定","about":"關於"},"game":{"balance1":"找一步平衡點","balance2":"找兩步平衡點","flip":"翻轉","move":"移動","info":{"depth":"深度","eval":"評估","speed":"速度","nodes":"節點數","time":"用時","bestline":"路線","nbestIndex":"序號"},"interruptThinking":{"title":"AI 正在思考","msg":"是否立即停止思考？"},"swap":{"title":"交換","msg":"AI 選擇黑白交換。","questionTitle":"交換？","questionMsg":"您選擇交換嗎？"},"forbid":{"title":"禁手","msg":"該位置為禁手。"},"shotJpg":"靜態截圖","shotGif":"GIF 截圖","gifDelay":"輸入每幀時長（單位：毫秒）","gifStart":"輸入起始序號","gifLoading":"生成 GIF 中...","saveScreenshot":"保存截圖到本地","saveScreenshotIOS":"長按圖片保存到本地","currentPos":"局面代碼","evalChart":"評估曲線","black":"黑棋","white":"白棋","engineLoading":"下載引擎數據中..."},"setting":{"language":"語言","thinking":{"timeTitle":"思考時間","turnTime":"每步時間（秒）","matchTime":"局時（秒）","maxDepth":"最大深度","maxNode":"最大節點數（M）","fast":"快棋（一局約 3 分鐘）","slow":"慢棋（一局約 15 分鐘）","analysis":"分析模式（不限時）","custom":"自訂","handicap":"棋力限制","nbest":"多點分析","thinkTitle":"思考","threads":"線程數","pondering":"後台思考","hashSize":"置換表大小","config":{"210901":"傳統（2021/09/01）","220723":"傳統（2022/07/23）","title":"引擎權重","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"選點範圍","square2":"兩圈","square2line3":"兩圈半","square3":"三圈","square3line4":"三圈半（推薦）","square4":"四圈","fullboard":"全盤"}},"board":{"title":"棋盤","size":"棋盤大小","rule":{"title":"規則","gomoku":"無禁手","standard":"無禁手長連不贏","renju":"有禁手","swap1":"無禁手一手交換"},"aiThinkBlack":"AI 执黑","aiThinkWhite":"AI 执白","clickCheck":{"title":"落子方式","direct":"直接落子","confirm":"二次確認","slide":"滑動落子"},"showTitle":"棋盤顯示","showCoord":"顯示座標","showAnalysis":"顯示分析","showDetail":"顯示思考細節","showIndex":"顯示序號","showLastStep":"高亮最後一步","showWinline":"顯示勝利線","showForbid":"顯示禁手","showPvEval":{"title":"顯示分析估值","none":"不顯示","eval":"顯示估值","winrate":"顯示勝率"},"colorTitle":"顏色","boardColor":"棋盤顏色","lastStepColor":"最後一步顏色","winlineColor":"勝利線顏色","bestMoveColor":"分析 - 最佳着法","thinkingMoveColor":"分析 - 正在搜索着法","thoughtMoveColor":"分析 - 已搜索着法","lostMoveColor":"分析 - 必敗着法"},"browser":{"capability":"瀏覽器功能","simd":"SIMD 加速","relaxedSimd":"（增強）","threads":"多線程","maxthreads":"最大線程數"},"reset":"重置所有設定"}}')
    },
    aced: function(t) {
        t.exports = JSON.parse('{"appName":"Máy tính cờ Caro","common":{"confirm":"Xác nhận","cancel":"Hủy bỏ"},"tabbar":{"game":"Bàn cờ","settings":"Cài đặt","about":"Giới thiệu"},"game":{"balance1":"Tìm điểm cân bằng một bước","balance2":"Tìm điểm cân bằng hai bước","flip":"Lật","move":"Di chuyển","info":{"depth":"Độ sâu","eval":"Đánh giá","speed":"Tốc độ","nodes":"Số nút","time":"Thời gian","bestline":"Đường đi tốt nhất","nbestIndex":"Chỉ số"},"interruptThinking":{"title":"AI đang suy nghĩ","msg":"Bạn có muốn dừng suy nghĩ ngay lập tức không?"},"swap":{"title":"Đổi bên","msg":"AI chọn đổi bên trắng đen.","questionTitle":"Đổi bên?","questionMsg":"Bạn có muốn đổi bên không?"},"forbid":{"title":"Nước cấm","msg":"Vị trí này là nước cấm."},"shotJpg":"Ảnh chụp tĩnh","shotGif":"Ảnh GIF","gifDelay":"Nhập thời gian mỗi khung (đơn vị: mili giây)","gifStart":"Nhập chỉ số bắt đầu","gifLoading":"Đang tạo GIF...","saveScreenshot":"Lưu ảnh chụp vào máy","saveScreenshotIOS":"Nhấn giữ ảnh để lưu vào máy","currentPos":"Mã cục diện","evalChart":"Biểu đồ đánh giá","black":"Quân đen","white":"Quân trắng","engineLoading":"Đang tải dữ liệu engine..."},"setting":{"language":"Ngôn ngữ","thinking":{"timeTitle":"Thời gian suy nghĩ","turnTime":"Thời gian mỗi lượt (giây)","matchTime":"Thời gian trận đấu (giây)","maxDepth":"Độ sâu tối đa","maxNode":"Số nút tối đa (M)","fast":"Cờ nhanh (mỗi ván khoảng 3 phút)","slow":"Cờ chậm (mỗi ván khoảng 15 phút)","analysis":"Chế độ phân tích (không giới hạn thời gian)","custom":"Tùy chỉnh","handicap":"Hạn chế trình độ","nbest":"Phân tích nhiều điểm","thinkTitle":"Suy nghĩ","threads":"Số luồng","pondering":"Suy nghĩ nền","hashSize":"Kích thước bảng băm","config":{"210901":"Truyền thống (2021/09/01)","220723":"Truyền thống (2022/07/23)","title":"Trọng số engine","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"Phạm vi phân tích","square2":"2 ô","square2line3":"2 ô rưỡi","square3":"3 ô","square3line4":"3 ô rưỡi (khuyến nghị)","square4":"4 ô","fullboard":"Toàn bàn cờ"}},"board":{"title":"Bàn cờ","size":"Kích thước bàn cờ","rule":{"title":"Luật chơi","gomoku":"Không cấm nước","standard":"Không cấm nước, không thắng với chuỗi dài","renju":"Có cấm nước","swap1":"Không cấm nước, đổi lượt đầu tiên"},"aiThinkBlack":"AI cầm quân đen","aiThinkWhite":"AI cầm quân trắng","clickCheck":{"title":"Cách đặt quân","direct":"Đặt quân trực tiếp","confirm":"Xác nhận trước khi đặt","slide":"Kéo thả để đặt quân"},"showTitle":"Hiển thị bàn cờ","showCoord":"Hiển thị tọa độ","showAnalysis":"Hiển thị phân tích","showDetail":"Hiển thị chi tiết","showIndex":"Hiển thị chỉ số","showLastStep":"Làm nổi bật nước đi cuối","showWinline":"Hiển thị đường thắng","showForbid":"Hiển thị nước cấm","showPvEval":{"title":"Hiển thị đánh giá phân tích","none":"Không hiển thị","eval":"Hiển thị đánh giá","winrate":"Hiển thị tỷ lệ thắng"},"colorTitle":"Màu sắc","boardColor":"Màu bàn cờ","lastStepColor":"Màu nước đi cuối","winlineColor":"Màu đường thắng","bestMoveColor":"Phân tích - Nước đi tốt nhất","thinkingMoveColor":"Phân tích - Nước đang suy nghĩ","thoughtMoveColor":"Phân tích - Nước đã suy nghĩ","lostMoveColor":"Phân tích - Nước thua"},"browser":{"capability":"Khả năng trình duyệt","simd":"Tăng tốc SIMD","relaxedSimd":"(Tăng cường)","threads":"Đa luồng","maxthreads":"Số luồng tối đa"},"reset":"Đặt lại tất cả cài đặt"}}')
    },
    adde: function(t, e, n) {
        var i = n("1dbf");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var o = n("499e").default;
        o("210259d6", i, !0, {})
    },
    c430: function(t, e, n) {
        e = t.exports = n("2350")(!1),
        e.push([t.i, '/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text size of content\n* zh-CN: 内容文本大小\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  line-height: 1.6;\n  font-family: -apple-system-font, "Helvetica Neue", sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\na img {\n  border: 0;\n}\na {\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/** env = windows **/\n::-webkit-input-placeholder {\n  font-family: -apple-system-font, "Helvetica Neue", sans-serif;\n}\n/** prevent default menu callout **/\na {\n  -webkit-touch-callout: none;\n}\n.vux-1px,\n.vux-1px-t,\n.vux-1px-b,\n.vux-1px-tb,\n.vux-1px-l,\n.vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-center-v,\n.vux-center-h,\n.vux-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vux-center-v,\n.vux-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vux-center-h,\n.vux-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vux-reddot,\n.vux-reddot-border,\n.vux-reddot-s {\n  position: relative;\n}\n.vux-reddot:after,\n.vux-reddot-border:after,\n.vux-reddot-s:after {\n  content: \'\';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #f74c31;\n  border-radius: 5px;\n  right: -3px;\n  top: -3px;\n  background-clip: padding-box;\n}\n.vux-reddot-border:before {\n  content: \'\';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  right: -4px;\n  top: -4px;\n  background-clip: padding-box;\n  padding: 1px;\n}\n.vux-reddot-s:after {\n  width: 6px;\n  height: 6px;\n  top: -5px;\n  right: -5px;\n}\n.vux-fade-enter-active,\n.vux-fade-leave-active {\n  opacity: 1;\n  -webkit-transition: opacity linear 0.2s;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter,\n.vux-fade-leave-to {\n  opacity: 0;\n}\n.vux-dialog-enter-active {\n  -webkit-animation: vux-dialog-in 0.5s;\n          animation: vux-dialog-in 0.5s;\n}\n.vux-dialog-leave-active {\n  -webkit-animation: vux-dialog-out 0.3s;\n          animation: vux-dialog-out 0.3s;\n}\n@-webkit-keyframes vux-dialog-in {\n0% {\n    -webkit-transform: scale(1.185);\n            transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes vux-dialog-in {\n0% {\n    -webkit-transform: scale(1.185);\n            transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@-webkit-keyframes vux-dialog-out {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    opacity: 0;\n}\n}\n@keyframes vux-dialog-out {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    opacity: 0;\n}\n}\n.vux-mask-enter,\n.vux-mask-leave-active {\n  opacity: 0;\n}\n.vux-mask-leave-active,\n.vux-mask-enter-active {\n  -webkit-transition: opacity 300ms;\n  transition: opacity 300ms;\n}\n.vux-loading {\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: vux-loading;\n          animation-name: vux-loading;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  border-radius: 99em;\n  border: 3px solid #DDD;\n  border-left-color: #666;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  display: table-cell;\n  vertical-align: middle;\n}\n@-webkit-keyframes vux-loading {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes vux-loading {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.vux-close {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  color: #999;\n  width: 24px;\n  height: 24px;\n}\n.vux-close:before,\n.vux-close:after {\n  content: \'\';\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 24px;\n  height: 1px;\n  background-color: currentColor;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.vux-close:after {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  margin: 0px;\n}\nbody {\n  background-color: #f1f2f3;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.header-bar {\n  width: 100%;\n  position: fixed !important;\n  top: 0;\n  z-index: 100;\n}\n.tabber-icon-active {\n  fill: #09BB07;\n}\n.drawer {\n  height: 100%;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  word-wrap: break-word;\n  overflow-y: auto;\n}\n.vux-pop-out-enter-active,\n.vux-pop-out-leave-active,\n.vux-pop-in-enter-active,\n.vux-pop-in-leave-active {\n  will-change: transform;\n  -webkit-transition: all 500ms;\n  transition: all 500ms;\n  height: 100%;\n  top: 46px;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000;\n          perspective: 1000;\n}\n.vux-pop-out-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n.vux-pop-out-leave-active {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.vux-pop-in-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.vux-pop-in-leave-active {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n', ""])
    },
    d6af: function(t, e, n) {
        var i = n("7cd0");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var o = n("499e").default;
        o("471b9e86", i, !0, {})
    },
    dd11: function(t) {
        t.exports = JSON.parse('{"appName":"오목 계산기","common":{"confirm":"확인","cancel":"취소"},"tabbar":{"game":"게임판","settings":"설정","about":"정보"},"game":{"balance1":"한 단계 균형점 찾기","balance2":"두 단계 균형점 찾기","flip":"뒤집기","move":"이동","info":{"depth":"깊이","eval":"평가","speed":"속도","nodes":"노드 수","time":"소요 시간","bestline":"최적 경로","nbestIndex":"번호"},"interruptThinking":{"title":"AI가 생각 중","msg":"즉시 중단하시겠습니까?"},"swap":{"title":"교환","msg":"AI가 흑백 교환을 선택했습니다.","questionTitle":"교환?","questionMsg":"교환을 선택하시겠습니까?"},"forbid":{"title":"금지 수","msg":"해당 위치는 금지 수입니다."},"shotJpg":"정적 스크린샷","shotGif":"GIF 스크린샷","gifDelay":"프레임당 시간 입력 (단위: 밀리초)","gifStart":"시작 번호 입력","gifLoading":"GIF 생성 중...","saveScreenshot":"스크린샷을 로컬에 저장","saveScreenshotIOS":"이미지를 길게 눌러 로컬에 저장","currentPos":"게임 상태 코드","evalChart":"평가 그래프","black":"흑돌","white":"백돌","engineLoading":"엔진 데이터 다운로드 중..."},"setting":{"language":"언어","thinking":{"timeTitle":"생각 시간","turnTime":"한 수당 시간 (초)","matchTime":"게임 시간 (초)","maxDepth":"최대 깊이","maxNode":"최대 노드 수 (M)","fast":"속기 (게임당 약 3분)","slow":"완기 (게임당 약 15분)","analysis":"분석 모드 (시간 제한 없음)","custom":"사용자 정의","handicap":"기력 제한","nbest":"다중 분석","thinkTitle":"생각","threads":"스레드 수","pondering":"백그라운드 생각","hashSize":"해시 테이블 크기","config":{"210901":"전통 (2021/09/01)","220723":"전통 (2022/07/23)","title":"엔진 가중치","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"분석 범위","square2":"2칸","square2line3":"2칸 반","square3":"3칸","square3line4":"3칸 반 (추천)","square4":"4칸","fullboard":"전체 판"}},"board":{"title":"게임판","size":"판 크기","rule":{"title":"규칙","gomoku":"금수 없음","standard":"금수 없음, 5목 이상 승리 불가","renju":"금수 있음","swap1":"금수 없음, 한 수 교환"},"aiThinkBlack":"AI가 흑돌","aiThinkWhite":"AI가 백돌","clickCheck":{"title":"착수 방식","direct":"바로 착수","confirm":"재확인","slide":"슬라이드 착수"},"showTitle":"게임판 표시","showCoord":"좌표 표시","showAnalysis":"분석 표시","showDetail":"세부 사항 표시","showIndex":"번호 표시","showLastStep":"마지막 수 강조","showWinline":"승리선 표시","showForbid":"금수 표시","showPvEval":{"title":"분석 평가 표시","none":"표시 안 함","eval":"평가 표시","winrate":"승률 표시"},"colorTitle":"색상","boardColor":"게임판 색상","lastStepColor":"마지막 수 색상","winlineColor":"승리선 색상","bestMoveColor":"분석 - 최적 수","thinkingMoveColor":"분석 - 탐색 중 수","thoughtMoveColor":"분석 - 탐색 완료 수","lostMoveColor":"분석 - 패착"},"browser":{"capability":"브라우저 기능","simd":"SIMD 가속","relaxedSimd":"(강화됨)","threads":"멀티스레드","maxthreads":"최대 스레드 수"},"reset":"모든 설정 초기화"}}')
    },
    edd4: function(t) {
        t.exports = JSON.parse('{"appName":"Gomoku Calculator","common":{"confirm":"Confirm","cancel":"Cancel"},"tabbar":{"game":"Board","settings":"Settings","about":"About"},"game":{"balance1":"Find One-step Balanced Move","balance2":"Find Two-step Balanced Move","flip":"Flip","move":"Move","info":{"depth":"Depth","eval":"Eval","speed":"Speed","nodes":"Nodes","time":"Time","bestline":"Bestline","nbestIndex":"Idx"},"interruptThinking":{"title":"AI is thinking","msg":"Stop thinking now?"},"swap":{"title":"SWAP","msg":"AI chose to swap.","questionTitle":"SWAP?","questionMsg":"Do you want to swap?"},"forbid":{"title":"Forbid","msg":"This move is forbidden."},"shotJpg":"Take ScreenShot as JPG","shotGif":"Take ScreenShot as GIF","gifDelay":"Enter the delay(ms) of each frame","gifStart":"Enter the start index","gifLoading":"Gif is generating...","saveScreenshot":"Save screenshot to device","saveScreenshotIOS":"Long press to save screenshot","currentPos":"Position","evalChart":"Evaluation Chart","black":"BLACK","white":"WHITE","engineLoading":"Downloading engine data..."},"setting":{"language":"Language","thinking":{"timeTitle":"Thinking Time","turnTime":"Turn time(s)","matchTime":"Match time(s)","maxDepth":"Max Depth","maxNode":"Max Node(M)","fast":"Fast game(~3 min)","slow":"Slow game(~15 min)","analysis":"Analysis(Unlimited Time)","custom":"Custom","handicap":"Handicap","nbest":"Multi PV","thinkTitle":"Thinking","threads":"Thread Num","pondering":"Pondering","hashSize":"Transposition Table Size","config":{"210901":"Classic(2021/09/01)","220723":"Classic(2022/07/23)","title":"Engine Model","mix9lite":"Mix9Lite NNUE"},"candrange":{"title":"Candidate Range","square2":"Square2","square2line3":"Square2 + Line3","square3":"Square3","square3line4":"Square3 + Line4 (Recommended)","square4":"Square4","fullboard":"Full Board"}},"board":{"title":"Board","size":"Board Size","rule":{"title":"Rule","gomoku":"Gomoku","standard":"Standard","renju":"Renju","swap1":"Gomoku - SWAP1"},"aiThinkBlack":"AI Plays Black","aiThinkWhite":"AI Plays White","clickCheck":{"title":"Click Behaviour","direct":"Direct Move","confirm":"Secondary Confirmation","slide":"Slide To Move"},"showTitle":"Board Display","showCoord":"Show Coord","showAnalysis":"Show Analysis","showDetail":"Show Detail","showIndex":"Show Index","showLastStep":"Highlight Last Step","showWinline":"Show Winning Line","showForbid":"Show Forbid","showPvEval":{"title":"Show PV Evaluation","none":"Disable","eval":"Eval","winrate":"Winrate"},"colorTitle":"Color Scheme","boardColor":"Board Color","lastStepColor":"Last Step Color","winlineColor":"Winning Line Color","bestMoveColor":"Analysis - Best Move","thinkingMoveColor":"Analysis - Searching Move","thoughtMoveColor":"Analysis - Searched Move","lostMoveColor":"Analysis - Lost Move"},"browser":{"capability":"Browser Capability","simd":"SIMD","relaxedSimd":"(Enhanced)","threads":"Multi Threading","maxthreads":"Max Number of Threads"},"reset":"Reset all settings"}}')
    },
    f708: function(t, e, n) {
        e = t.exports = n("2350")(!1),
        e.push([t.i, "\n.bestline-box[data-v-122c8bb0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.move[data-v-122c8bb0] {\n  margin: 0px;\n  padding: 2px 4px;\n  line-height: 20px;\n  border: 1px solid transparent;\n  border-radius: 0px;\n}\n.move[data-v-122c8bb0]:hover {\n  background-color: #aed6f1;\n}\n", ""])
    }
});
//# sourceMappingURL=app.ea70c6e3.js.map
