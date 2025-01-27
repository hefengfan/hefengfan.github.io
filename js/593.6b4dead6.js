"use strict";
(self["webpackChunkvue_mmplayer"] = self["webpackChunkvue_mmplayer"] || []).push([[593], {
    3587: function(t, s, e) {
        e.d(s, {
            q: function() {
                return l
            }
        });
        var i = e(8836);
        (0,
        i.Se)(["playing", "currentMusic"]),
        (0,
        i.OI)({
            setPlaying: "SET_PLAYING"
        }),
        (0,
        i.nv)(["selectPlay"]);
        const l = {
            data() {
                return {
                    mmLoadShow: !0
                }
            },
            methods: {
                _hideLoad() {
                    let t;
                    clearTimeout(t),
                    t = setTimeout((()=>{
                        this.mmLoadShow = !1
                    }
                    ), 200)
                }
            }
        }
    },
    651: function(t, s, e) {
        e.d(s, {
            Z: function() {
                return c
            }
        });
        var i = function() {
            var t = this
              , s = t._self._c;
            return s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.value,
                    expression: "value"
                }],
                staticClass: "mm-loading",
                style: {
                    backgroundColor: t.loadingBgColor
                }
            }, [s("div", {
                staticClass: "mm-loading-content"
            }, [s("svg", {
                staticClass: "circular",
                attrs: {
                    viewBox: "25 25 50 50"
                }
            }, [s("circle", {
                staticClass: "path",
                attrs: {
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none"
                }
            })])])])
        }
          , l = []
          , n = {
            name: "MmLoading",
            props: {
                value: {
                    type: Boolean,
                    default: !0
                },
                loadingBgColor: {
                    type: String,
                    default: ""
                }
            }
        }
          , a = n
          , r = e(1068)
          , o = (0,
        r.Z)(a, i, l, !1, null, null, null)
          , c = o.exports
    },
    9622: function(t, s, e) {
        e.d(s, {
            Z: function() {
                return c
            }
        });
        var i = function() {
            var t = this
              , s = t._self._c;
            return s("div", {
                staticClass: "mm-no-result"
            }, [s("p", {
                staticClass: "mm-no-result-text"
            }, [t._v(t._s(t.title))])])
        }
          , l = []
          , n = {
            name: "MmNoResult",
            props: {
                title: {
                    type: String,
                    default: ""
                }
            }
        }
          , a = n
          , r = e(1068)
          , o = (0,
        r.Z)(a, i, l, !1, null, null, null)
          , c = o.exports
    },
    8137: function(t, s, e) {
        e.d(s, {
            Z: function() {
                return g
            }
        });
        var i = function() {
            var t = this
              , s = t._self._c;
            return s("div", {
                staticClass: "music-list flex-col"
            }, [t.list.length > 0 ? [s("div", {
                staticClass: "list-item list-header"
            }, [s("span", {
                staticClass: "list-name"
            }, [t._v("歌曲")]), s("span", {
                staticClass: "list-artist"
            }, [t._v("歌手")]), t.isDuration ? s("span", {
                staticClass: "list-time"
            }, [t._v("时长")]) : s("span", {
                staticClass: "list-album"
            }, [t._v("专辑")])]), s("div", {
                ref: "listContent",
                staticClass: "list-content",
                on: {
                    scroll: function(s) {
                        return t.listScroll(s)
                    }
                }
            }, [t._l(t.list, (function(e, i) {
                return s("div", {
                    key: e.id,
                    staticClass: "list-item",
                    class: {
                        on: t.playing && t.currentMusic.id === e.id
                    },
                    on: {
                        dblclick: function(s) {
                            return t.selectItem(e, i, s)
                        }
                    }
                }, [s("span", {
                    staticClass: "list-num",
                    domProps: {
                        textContent: t._s(i + 1)
                    }
                }), s("div", {
                    staticClass: "list-name"
                }, [s("span", [t._v(t._s(e.name))]), s("div", {
                    staticClass: "list-menu"
                }, [s("mm-icon", {
                    staticClass: "hover",
                    attrs: {
                        type: t.getPlayIconType(e),
                        size: 40
                    },
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            t.selectItem(e, i)
                        }
                    }
                })], 1)]), s("span", {
                    staticClass: "list-artist"
                }, [t._v(t._s(e.singer))]), t.isDuration ? s("span", {
                    staticClass: "list-time"
                }, [t._v(" " + t._s(t._f("format")(e.duration % 3600)) + " "), s("mm-icon", {
                    staticClass: "hover list-menu-icon-del",
                    attrs: {
                        type: "delete-mini",
                        size: 40
                    },
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            t.deleteItem(i)
                        }
                    }
                })], 1) : s("span", {
                    staticClass: "list-album"
                }, [t._v(t._s(e.album))])])
            }
            )), t._t("listBtn")], 2)] : s("mm-no-result", {
                attrs: {
                    title: "弄啥呢，怎么啥也没有！！！"
                }
            })], 2)
        }
          , l = []
          , n = e(8836)
          , a = e(2005)
          , r = e(9622);
        const o = "album"
          , c = "duration"
          , u = "pullup"
          , m = 100;
        var h = {
            name: "MusicList",
            components: {
                MmNoResult: r.Z
            },
            filters: {
                format: a.WU
            },
            props: {
                list: {
                    type: Array,
                    default: ()=>[]
                },
                listType: {
                    type: String,
                    default: o
                }
            },
            data() {
                return {
                    lockUp: !0
                }
            },
            computed: {
                isDuration() {
                    return this.listType === c
                },
                ...(0,
                n.Se)(["playing", "currentMusic"])
            },
            watch: {
                list(t, s) {
                    this.listType === u && (t.length !== s.length || t[t.length - 1].id !== s[s.length - 1].id) && (this.lockUp = !1)
                }
            },
            activated() {
                this.scrollTop && this.$refs.listContent && (this.$refs.listContent.scrollTop = this.scrollTop)
            },
            methods: {
                listScroll(t) {
                    const s = t.target.scrollTop;
                    if (this.scrollTop = s,
                    this.listType !== u || this.lockUp)
                        return;
                    const {scrollHeight: e, offsetHeight: i} = t.target;
                    s + i >= e - m && (this.lockUp = !0,
                    this.$emit("pullUp"))
                },
                scrollTo() {
                    this.$refs.listContent.scrollTop = 0
                },
                selectItem(t, s, e) {
                    e && /list-menu-icon-del/.test(e.target.className) || (this.currentMusic.id && t.id === this.currentMusic.id ? this.setPlaying(!this.playing) : this.$emit("select", t, s))
                },
                getPlayIconType({id: t}) {
                    const {playing: s, currentMusic: {id: e}} = this;
                    return s && e === t ? "pause-mini" : "play-mini"
                },
                deleteItem(t) {
                    this.$emit("del", t)
                },
                ...(0,
                n.OI)({
                    setPlaying: "SET_PLAYING"
                })
            }
        }
          , p = h
          , d = e(1068)
          , f = (0,
        d.Z)(p, i, l, !1, null, "25613a86", null)
          , g = f.exports
    },
    8593: function(t, s, e) {
        e.r(s),
        e.d(s, {
            default: function() {
                return g
            }
        });
        var i = function() {
            var t = this
              , s = t._self._c;
            return s("div", {
                staticClass: "search flex-col"
            }, [s("mm-loading", {
                model: {
                    value: t.mmLoadShow,
                    callback: function(s) {
                        t.mmLoadShow = s
                    },
                    expression: "mmLoadShow"
                }
            }), s("div", {
                staticClass: "search-head"
            }, [t._l(t.Artists, (function(e, i) {
                return s("span", {
                    key: i,
                    on: {
                        click: function(s) {
                            return t.clickHot(e.first)
                        }
                    }
                }, [t._v(" " + t._s(e.first) + " ")])
            }
            )), s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.searchValue,
                    expression: "searchValue",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "search-input",
                attrs: {
                    type: "text",
                    placeholder: "音乐/歌手"
                },
                domProps: {
                    value: t.searchValue
                },
                on: {
                    keyup: function(s) {
                        return !s.type.indexOf("key") && t._k(s.keyCode, "enter", 13, s.key, "Enter") ? null : t.onEnter.apply(null, arguments)
                    },
                    input: function(s) {
                        s.target.composing || (t.searchValue = s.target.value.trim())
                    },
                    blur: function(s) {
                        return t.$forceUpdate()
                    }
                }
            })], 2), s("div", {
                staticClass: "flex-1 overflow-hidden"
            }, [s("music-list", {
                ref: "musicList",
                attrs: {
                    list: t.list,
                    "list-type": "pullup"
                },
                on: {
                    select: t.selectItem,
                    pullUp: t.pullUpLoad
                }
            })], 1)], 1)
        }
          , l = []
          , n = e(8836)
          , a = e(2413)
          , r = e(9921)
          , o = e(651)
          , c = e(8137)
          , u = e(3587)
          , m = e(2005)
          , h = {
            name: "Search",
            components: {
                MmLoading: o.Z,
                MusicList: c.Z
            },
            mixins: [u.q],
            data() {
                return {
                    searchValue: "",
                    Artists: [],
                    list: [],
                    page: 0,
                    lockUp: !0
                }
            },
            computed: {
                ...(0,
                n.Se)(["playing", "currentMusic"])
            },
            watch: {
                list(t, s) {
                    (t.length !== s.length || t[t.length - 1].id !== s[s.length - 1].id) && (this.lockUp = !1)
                }
            },
            created() {
                (0,
                a.wP)().then((({result: t})=>{
                    this.Artists = t.hots.slice(0, 5),
                    this.mmLoadShow = !1
                }
                ))
            },
            methods: {
                clickHot(t) {
                    this.searchValue = t,
                    this.onEnter()
                },
                onEnter() {
                    "" !== this.searchValue.replace(/(^\s+)|(\s+$)/g, "") ? (this.mmLoadShow = !0,
                    this.page = 0,
                    this.list.length > 0 && this.$refs.musicList.scrollTo(),
                    (0,
                    a.yC)(this.searchValue).then((({result: t})=>{
                        this.list = (0,
                        r.sN)(t.songs),
                        this._hideLoad()
                    }
                    ))) : this.$mmToast("搜索内容不能为空！")
                },
                pullUpLoad() {
                    this.page += 1,
                    (0,
                    a.yC)(this.searchValue, this.page).then((({result: t})=>{
                        t.songs ? this.list = [...this.list, ...(0,
                        r.sN)(t.songs)] : this.$mmToast("没有更多歌曲啦！")
                    }
                    ))
                },
                async selectItem(t) {
                    try {
                        const s = await this._getMusicDetail(t.id);
                        t.image = (0,
                        m.Hr)(s),
                        this.selectAddPlay(t)
                    } catch (s) {
                        this.$mmToast("哎呀，出错啦~")
                    }
                },
                _getMusicDetail(t) {
                    return (0,
                    a.XL)(t).then((t=>t.songs[0].al.picUrl))
                },
                ...(0,
                n.OI)({
                    setPlaying: "SET_PLAYING"
                }),
                ...(0,
                n.nv)(["selectAddPlay"])
            }
        }
          , p = h
          , d = e(1068)
          , f = (0,
        d.Z)(p, i, l, !1, null, "1d9f5732", null)
          , g = f.exports
    }
}]);
//# sourceMappingURL=593.6b4dead6.js.map
