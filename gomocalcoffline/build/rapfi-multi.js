var Rapfi = (()=>{
    var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
    if (typeof __filename != 'undefined')
        _scriptName ||= __filename;
    return (function(moduleArg={}) {
        var moduleRtn;

        function g() {
            n.buffer != aa.buffer && v();
            return aa
        }
        function ba() {
            n.buffer != aa.buffer && v();
            return ca
        }
        function da() {
            n.buffer != aa.buffer && v();
            return ea
        }
        function w() {
            n.buffer != aa.buffer && v();
            return fa
        }
        function x() {
            n.buffer != aa.buffer && v();
            return ha
        }
        function ia() {
            n.buffer != aa.buffer && v();
            return ja
        }
        var y = moduleArg, ka, la, ma = new Promise((a,b)=>{
            ka = a;
            la = b
        }
        ), na = "object" == typeof window, oa = "function" == typeof importScripts, z = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, A = oa && "em-pthread" == self.name;
        if (z) {
            var pa = require("worker_threads");
            global.Worker = pa.Worker;
            A = (oa = !pa.sc) && "em-pthread" == pa.workerData
        }
        y.Db || (y.Db = 0);
        y.Db++;
        (()=>{
            var a = "undefined" != typeof ENVIRONMENT_IS_WASM_WORKER && ENVIRONMENT_IS_WASM_WORKER;
            "undefined" != typeof A && A || a || function(b) {
                function c(l, p, q, B) {
                    if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node)
                        require("fs").readFile(l, function(r, u) {
                            r ? B(r) : q(u.buffer)
                        });
                    else {
                        var t = new XMLHttpRequest;
                        t.open("GET", l, !0);
                        t.responseType = "arraybuffer";
                        t.onprogress = function(r) {
                            var u = p;
                            r.total && (u = r.total);
                            if (r.loaded) {
                                t.mb ? y.wb[l].loaded = r.loaded : (t.mb = !0,
                                y.wb || (y.wb = {}),
                                y.wb[l] = {
                                    loaded: r.loaded,
                                    total: u
                                });
                                var G = u = r = 0, R;
                                for (R in y.wb) {
                                    var Y = y.wb[R];
                                    r += Y.total;
                                    u += Y.loaded;
                                    G++
                                }
                                r = Math.ceil(r * y.Db / G);
                                y.setStatus?.(`Downloading data... (${u}/${r})`)
                            } else
                                y.wb || y.setStatus?.("Downloading data...")
                        }
                        ;
                        t.onerror = function() {
                            throw Error("NetworkError for: " + l);
                        }
                        ;
                        t.onload = function() {
                            if (200 == t.status || 304 == t.status || 206 == t.status || 0 == t.status && t.response)
                                q(t.response);
                            else
                                throw Error(t.statusText + " : " + t.responseURL);
                        }
                        ;
                        t.send(null)
                    }
                }
                function d(l) {
                    console.error("package error:", l)
                }
                function e(l) {
                    function p(r, u, G) {
                        this.start = r;
                        this.end = u;
                        this.audio = G
                    }
                    function q(r) {
                        if (!r)
                            throw "Loading data file failed." + Error().stack;
                        if (r.constructor.name !== ArrayBuffer.name)
                            throw "bad input to processPackageData" + Error().stack;
                        r = new Uint8Array(r);
                        p.prototype.Ab = r;
                        r = b.files;
                        for (var u = 0; u < r.length; ++u)
                            p.prototype.mb[r[u].filename].onload();
                        l.removeRunDependency("datafile_rapfi-multi-simd128-relaxed.data")
                    }
                    p.prototype = {
                        mb: {},
                        open: function(r, u) {
                            this.name = u;
                            this.mb[u] = this;
                            l.addRunDependency(`fp ${this.name}`)
                        },
                        send: function() {},
                        onload: function() {
                            this.zb(this.Ab.subarray(this.start, this.end))
                        },
                        zb: function(r) {
                            l.FS_createDataFile(this.name, null, r, !0, !0, !0);
                            l.removeRunDependency(`fp ${this.name}`);
                            this.mb[this.name] = null
                        }
                    };
                    for (var B = b.files, t = 0; t < B.length; ++t)
                        (new p(B[t].start,B[t].end,B[t].audio || 0)).open("GET", B[t].filename);
                    l.addRunDependency("datafile_rapfi-multi-simd128-relaxed.data");
                    l.Tb || (l.Tb = {});
                    l.Tb["rapfi-multi-simd128-relaxed.data"] = {
                        pc: !1
                    };
                    m ? (q(m),
                    m = null) : k = q
                }
                "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
                "function" !== typeof y.locateFilePackage || y.locateFile || (y.locateFile = y.locateFilePackage,
                C("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
                var f = y.locateFile ? y.locateFile("rapfi-multi-simd128-relaxed.data", "") : "rapfi-multi-simd128-relaxed.data"
                  , h = b.remote_package_size
                  , k = null
                  , m = y.getPreloadedPackage ? y.getPreloadedPackage(f, h) : null;
                m || c(f, h, function(l) {
                    k ? (k(l),
                    k = null) : m = l
                }, d);
                y.calledRun ? e(y) : (y.preRun || (y.preRun = []),
                y.preRun.push(e))
            }({
                files: [{
                    filename: "/classical210901.toml",
                    start: 0,
                    end: 5921
                }, {
                    filename: "/classical220723.toml",
                    start: 5921,
                    end: 11842
                }, {
                    filename: "/config.toml",
                    start: 11842,
                    end: 18560
                }, {
                    filename: "/mix9litefreestyle_bs15.bin.lz4",
                    start: 18560,
                    end: 7638456
                }, {
                    filename: "/mix9litefreestyle_bsmix.bin.lz4",
                    start: 7638456,
                    end: 15175960
                }, {
                    filename: "/mix9literenju_bs15_black.bin.lz4",
                    start: 15175960,
                    end: 22870957
                }, {
                    filename: "/mix9literenju_bs15_white.bin.lz4",
                    start: 22870957,
                    end: 30438160
                }, {
                    filename: "/mix9litestandard_bs15.bin.lz4",
                    start: 30438160,
                    end: 38144900
                }, {
                    filename: "/model210901.bin",
                    start: 38144900,
                    end: 38168104
                }, {
                    filename: "/model220723.bin",
                    start: 38168104,
                    end: 38227834
                }],
                remote_package_size: 38227834
            })
        }
        )();
        y.sendCommand = y.sendCommand || null;
        y.terminate = y.terminate || null;
        y.onReceiveStdout = y.onReceiveStdout || (a=>console.log(a));
        y.onReceiveStderr = y.onReceiveStderr || (a=>console.error(a));
        y.onExit = y.onExit || (a=>console.log("exited with code " + a));
        y.noExitRuntime = !0;
        y.preRun || (y.preRun = []);
        y.preRun.push(function() {
            let a = [];
            var b = ""
              , c = 0;
            let d = ""
              , e = "";
            const f = y.onReceiveStdout
              , h = y.onReceiveStderr;
            qa(function() {
                return c < b.length ? b.charCodeAt(c++) : 0 < a.length ? (b = a.shift(),
                c = 0,
                b.charCodeAt(c++)) : null
            }, function(m) {
                m && 10 != m ? d += String.fromCharCode(m) : (f(d),
                d = "")
            }, function(m) {
                m && 10 != m ? e += String.fromCharCode(m) : (h(e),
                e = "")
            });
            const k = y.cwrap("gomocupLoopOnce", "number", []);
            y.sendCommand = function(m) {
                a.push(m + "\n");
                k()
            }
            ;
            y.terminate = function() {
                y._emscripten_force_exit(0)
            }
        });
        var ra = Object.assign({}, y), sa = [], ta = "./this.program", ua = (a,b)=>{
            throw b;
        }
        , D = "", va, wa;
        if (z) {
            var fs = require("fs")
              , xa = require("path");
            D = __dirname + "/";
            wa = a=>{
                a = ya(a) ? new URL(a) : xa.normalize(a);
                return fs.readFileSync(a)
            }
            ;
            va = a=>{
                a = ya(a) ? new URL(a) : xa.normalize(a);
                return new Promise((b,c)=>{
                    fs.readFile(a, void 0, (d,e)=>{
                        d ? c(d) : b(e.buffer)
                    }
                    )
                }
                )
            }
            ;
            !y.thisProgram && 1 < process.argv.length && (ta = process.argv[1].replace(/\\/g, "/"));
            sa = process.argv.slice(2);
            ua = (a,b)=>{
                process.exitCode = a;
                throw b;
            }
        } else if (na || oa)
            oa ? D = self.location.href : "undefined" != typeof document && document.currentScript && (D = document.currentScript.src),
            _scriptName && (D = _scriptName),
            D.startsWith("blob:") ? D = "" : D = D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1),
            z || (oa && (wa = a=>{
                var b = new XMLHttpRequest;
                b.open("GET", a, !1);
                b.responseType = "arraybuffer";
                b.send(null);
                return new Uint8Array(b.response)
            }
            ),
            va = a=>ya(a) ? new Promise((b,c)=>{
                var d = new XMLHttpRequest;
                d.open("GET", a, !0);
                d.responseType = "arraybuffer";
                d.onload = ()=>{
                    (200 == d.status || 0 == d.status && d.response) && c(d.response);
                    b(d.status)
                }
                ;
                d.onerror = b;
                d.send(null)
            }
            ) : fetch(a, {
                credentials: "same-origin"
            }).then(b=>b.ok ? b.arrayBuffer() : Promise.reject(Error(b.status + " : " + b.url))));
        z && "undefined" == typeof performance && (global.performance = require("perf_hooks").performance);
        var za = console.log.bind(console)
          , Aa = console.error.bind(console);
        z && (za = (...a)=>fs.writeSync(1, a.join(" ") + "\n"),
        Aa = (...a)=>fs.writeSync(2, a.join(" ") + "\n"));
        var Ba = y.print || za
          , C = y.printErr || Aa;
        Object.assign(y, ra);
        ra = null;
        y.arguments && (sa = y.arguments);
        y.thisProgram && (ta = y.thisProgram);
        y.quit && (ua = y.quit);
        if (A) {
            var Ca;
            if (z) {
                var Da = pa.parentPort;
                Da.on("message", c=>onmessage({
                    data: c
                }));
                Object.assign(globalThis, {
                    self: global,
                    importScripts: ()=>{}
                    ,
                    postMessage: c=>Da.postMessage(c),
                    performance: global.performance || {
                        now: Date.now
                    }
                })
            }
            var Ea = !1;
            function a(...c) {
                c = c.join(" ");
                z ? fs.writeSync(2, c + "\n") : console.error(c)
            }
            y.printErr || (C = a);
            self.alert = function(...c) {
                postMessage({
                    Kb: "alert",
                    text: c.join(" "),
                    uc: Fa()
                })
            }
            ;
            y.instantiateWasm = (c,d)=>new Promise(e=>{
                Ca = f=>{
                    f = new WebAssembly.Instance(f,Ga());
                    d(f);
                    e()
                }
            }
            );
            self.onunhandledrejection = c=>{
                throw c.reason || c;
            }
            ;
            function b(c) {
                try {
                    var d = c.data
                      , e = d.cmd;
                    if ("load" === e) {
                        let f = [];
                        self.onmessage = h=>f.push(h);
                        self.startWorker = ()=>{
                            postMessage({
                                cmd: "loaded"
                            });
                            for (let h of f)
                                b(h);
                            self.onmessage = b
                        }
                        ;
                        for (const h of d.handlers)
                            if (!y[h] || y[h].proxy)
                                y[h] = (...k)=>{
                                    postMessage({
                                        Kb: "callHandler",
                                        rc: h,
                                        args: k
                                    })
                                }
                                ,
                                "print" == h && (Ba = y[h]),
                                "printErr" == h && (C = y[h]);
                        n = d.wasmMemory;
                        v();
                        Ca(d.wasmModule)
                    } else if ("run" === e) {
                        Ha(d.pthread_ptr, 0, 0, 1, 0, 0);
                        Ia(d.pthread_ptr);
                        Ja();
                        Ka();
                        Ea ||= !0;
                        try {
                            La(d.start_routine, d.arg)
                        } catch (f) {
                            if ("unwind" != f)
                                throw f;
                        }
                    } else
                        "cancel" === e ? Fa() && Ma(-1) : "setimmediate" !== d.target && ("checkMailbox" === e ? Ea && Na() : e && (C(`worker: received unknown command ${e}`),
                        C(d)))
                } catch (f) {
                    throw Oa(),
                    f;
                }
            }
            self.onmessage = b
        }
        var Pa;
        y.wasmBinary && (Pa = y.wasmBinary);
        var n, Qa, Ra = !1, Sa, aa, ca, ea, fa, ha, ja;
        function v() {
            var a = n.buffer;
            y.HEAP8 = aa = new Int8Array(a);
            y.HEAP16 = ea = new Int16Array(a);
            y.HEAPU8 = ca = new Uint8Array(a);
            y.HEAPU16 = new Uint16Array(a);
            y.HEAP32 = fa = new Int32Array(a);
            y.HEAPU32 = ha = new Uint32Array(a);
            y.HEAPF32 = new Float32Array(a);
            y.HEAPF64 = ja = new Float64Array(a)
        }
        if (!A) {
            if (y.wasmMemory)
                n = y.wasmMemory;
            else if (n = new WebAssembly.Memory({
                initial: (y.INITIAL_MEMORY || 16777216) / 65536,
                maximum: 32768,
                shared: !0
            }),
            !(n.buffer instanceof SharedArrayBuffer))
                throw C("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),
                z && C("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),
                Error("bad memory");
            v()
        }
        var Ta = []
          , Ua = []
          , Va = []
          , Wa = []
          , Xa = []
          , Ya = !1;
        function Za() {
            A || (y.noFSInit || $a || qa(),
            ab = !1,
            bb(Ua))
        }
        var cb = 0
          , db = null
          , eb = null;
        function fb() {
            cb++;
            y.monitorRunDependencies?.(cb)
        }
        function gb() {
            cb--;
            y.monitorRunDependencies?.(cb);
            if (0 == cb && (null !== db && (clearInterval(db),
            db = null),
            eb)) {
                var a = eb;
                eb = null;
                a()
            }
        }
        function hb(a) {
            y.onAbort?.(a);
            a = "Aborted(" + a + ")";
            C(a);
            Ra = !0;
            Sa = 1;
            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
            la(a);
            throw a;
        }
        var ib = a=>a.startsWith("data:application/octet-stream;base64,"), ya = a=>a.startsWith("file://"), jb;
        function kb(a) {
            if (a == jb && Pa)
                return new Uint8Array(Pa);
            if (wa)
                return wa(a);
            throw "both async and sync fetching of the wasm failed";
        }
        function lb(a) {
            return Pa ? Promise.resolve().then(()=>kb(a)) : va(a).then(b=>new Uint8Array(b), ()=>kb(a))
        }
        function mb(a, b, c) {
            return lb(a).then(d=>WebAssembly.instantiate(d, b)).then(c, d=>{
                C(`failed to asynchronously prepare wasm: ${d}`);
                hb(d)
            }
            )
        }
        function nb(a, b) {
            var c = jb;
            return Pa || "function" != typeof WebAssembly.instantiateStreaming || ib(c) || ya(c) || z || "function" != typeof fetch ? mb(c, a, b) : fetch(c, {
                credentials: "same-origin"
            }).then(d=>WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                C(`wasm streaming compile failed: ${e}`);
                C("falling back to ArrayBuffer instantiation");
                return mb(c, a, b)
            }))
        }
        function Ga() {
            ob = {
                n: pb,
                q: qb,
                b: rb,
                f: sb,
                m: tb,
                J: ub,
                t: vb,
                na: wb,
                ta: xb,
                g: yb,
                K: zb,
                ya: Ab,
                ma: Bb,
                oa: Cb,
                da: Db,
                ea: Eb,
                ga: Fb,
                fa: Gb,
                pa: Hb,
                ua: Ib,
                xa: Jb,
                sa: Kb,
                va: Lb,
                M: Mb,
                wa: Ia,
                I: Nb,
                ha: Ob,
                N: Pb,
                O: Qb,
                ia: Rb,
                A: Sb,
                ca: Tb,
                ra: Ub,
                X: Vb,
                ja: Wb,
                ka: Xb,
                G: Yb,
                L: Zb,
                la: $b,
                _: ac,
                qa: bc,
                ba: cc,
                $: dc,
                D: ec,
                e: fc,
                y: gc,
                c: hc,
                d: ic,
                s: jc,
                aa: kc,
                r: lc,
                p: mc,
                x: nc,
                z: oc,
                H: pc,
                F: qc,
                Q: rc,
                R: sc,
                S: tc,
                Z: uc,
                T: vc,
                Y: wc,
                U: xc,
                P: yc,
                j: zc,
                k: Ac,
                h: Bc,
                i: Cc,
                l: Dc,
                o: Ec,
                v: Fc,
                w: Gc,
                C: Hc,
                E: Ic,
                B: Jc,
                W: Kc,
                V: Lc,
                u: Mc,
                a: n
            };
            return {
                a: ob
            }
        }
        var E, F;
        function Nc(a) {
            this.name = "ExitStatus";
            this.message = `Program terminated with exit(${a})`;
            this.status = a
        }
        var Oc = a=>{
            a.terminate();
            a.onmessage = ()=>{}
        }
          , Sc = a=>{
            if (0 == Pc.length) {
                var b = _scriptName;
                y.mainScriptUrlOrBlob && (b = y.mainScriptUrlOrBlob,
                "string" != typeof b && (b = URL.createObjectURL(b)));
                b = new Worker(b,{
                    workerData: "em-pthread",
                    name: "em-pthread"
                });
                Pc.push(b);
                Qc()
            }
            b = Pc.pop();
            if (!b)
                return 6;
            Rc.push(b);
            H[a.vb] = b;
            b.vb = a.vb;
            var c = {
                cmd: "run",
                start_routine: a.dc,
                arg: a.Ub,
                pthread_ptr: a.vb
            };
            z && b.unref();
            b.postMessage(c, a.ec);
            return 0
        }
          , I = 0
          , Vb = ()=>Tc || 0 < I
          , L = (a,b,...c)=>{
            for (var d = c.length, e = J(), f = Uc(8 * d), h = f >> 3, k = 0; k < c.length; k++) {
                var m = c[k];
                ia()[h + k] = m
            }
            a = Vc(a, 0, d, f, b);
            K(e);
            return a
        }
        ;
        function Wc(a) {
            if (A)
                return L(0, 1, a);
            Sa = a;
            Tc || 0 < I || (Xc(),
            y.onExit?.(a),
            Ra = !0);
            ua(a, new Nc(a))
        }
        var Yc = a=>{
            a instanceof Nc || "unwind" == a || ua(1, a)
        }
        ;
        function Zc(a) {
            if (A)
                return L(1, 0, a);
            --I;
            Yb(a)
        }
        var Yb = a=>{
            Sa = a;
            if (A)
                throw Zc(a),
                "unwind";
            if (!(Tc || 0 < I || A)) {
                $c();
                bb(Wa);
                $a = !1;
                ad(0);
                for (var b = 0; b < bd.length; b++) {
                    var c = bd[b];
                    c && cd(c)
                }
                Xc();
                Ya = !0
            }
            Wc(a)
        }
          , Pc = []
          , Rc = []
          , dd = []
          , H = {}
          , Xc = ()=>{
            for (var a of Rc)
                Oc(a);
            for (a of Pc)
                Oc(a);
            Pc = [];
            Rc = [];
            H = []
        }
          , fd = a=>{
            var b = a.vb;
            delete H[b];
            Pc.push(a);
            Rc.splice(Rc.indexOf(a), 1);
            a.vb = 0;
            z && a.unref();
            ed(b)
        }
        ;
        function Ka() {
            dd.forEach(a=>a())
        }
        var Qc = ()=>{
            var a = Pc[0];
            new Promise(b=>{
                a.onmessage = f=>{
                    f = f.data;
                    var h = f.cmd;
                    if (f.targetThread && f.targetThread != Fa()) {
                        var k = H[f.targetThread];
                        k ? k.postMessage(f, f.transferList) : C(`Internal error! Worker sent a message "${h}" to target pthread ${f.targetThread}, but that thread no longer exists!`)
                    } else if ("checkMailbox" === h)
                        Na();
                    else if ("spawnThread" === h)
                        Sc(f);
                    else if ("cleanupThread" === h)
                        fd(H[f.thread]);
                    else if ("killThread" === h)
                        f = f.thread,
                        h = H[f],
                        delete H[f],
                        Oc(h),
                        ed(f),
                        Rc.splice(Rc.indexOf(h), 1),
                        h.vb = 0;
                    else if ("cancelThread" === h)
                        H[f.thread].postMessage({
                            cmd: "cancel"
                        });
                    else if ("loaded" === h)
                        a.loaded = !0,
                        b(a);
                    else if ("alert" === h)
                        alert(`Thread ${f.threadId}: ${f.text}`);
                    else if ("setimmediate" === f.target)
                        a.postMessage(f);
                    else if ("callHandler" === h)
                        y[f.handler](...f.args);
                    else
                        h && C(`worker sent an unknown command ${h}`)
                }
                ;
                a.onerror = f=>{
                    C(`${"worker sent an error!"} ${f.filename}:${f.lineno}: ${f.message}`);
                    throw f;
                }
                ;
                z && (a.on("message", f=>a.onmessage({
                    data: f
                })),
                a.on("error", f=>a.onerror(f)));
                var c = [], d = ["onExit", "onAbort", "print", "printErr"], e;
                for (e of d)
                    y.propertyIsEnumerable(e) && c.push(e);
                a.postMessage({
                    cmd: "load",
                    handlers: c,
                    wasmMemory: n,
                    wasmModule: Qa
                })
            }
            )
        }
        , bb = a=>{
            for (; 0 < a.length; )
                a.shift()(y)
        }
        , Ja = ()=>{
            var a = Fa()
              , b = x()[a + 52 >> 2];
            a = x()[a + 56 >> 2];
            gd(b, b - a);
            K(b)
        }
        , hd = [], jd, M = a=>{
            var b = hd[a];
            b || (a >= hd.length && (hd.length = a + 1),
            hd[a] = b = jd.get(a));
            return b
        }
        , La = (a,b)=>{
            I = 0;
            a = M(a)(b);
            Tc || 0 < I ? Sa = a : Ma(a)
        }
        , Tc = y.noExitRuntime || !1, kd = [], ld = 0, pb = a=>{
            a = new md(a);
            if (0 == g()[a.nb + 12]) {
                var b = 1;
                g()[a.nb + 12] = b;
                ld--
            }
            b = 0;
            g()[a.nb + 13] = b;
            kd.push(a);
            nd(a.yb);
            od(pd(a)) ? a = x()[a.yb >> 2] : (b = x()[a.nb + 16 >> 2],
            a = 0 !== b ? b : a.yb);
            return a
        }
        , qd = 0, qb = ()=>{
            N(0, 0);
            var a = kd.pop();
            rd(a.yb);
            qd = 0
        }
        ;
        function pd(a) {
            return x()[a.nb + 4 >> 2]
        }
        function sd(a, b, c) {
            x()[a.nb + 16 >> 2] = 0;
            x()[a.nb + 4 >> 2] = b;
            x()[a.nb + 8 >> 2] = c
        }
        class md {
            constructor(a) {
                this.yb = a;
                this.nb = a - 24
            }
        }
        var yb = a=>{
            qd ||= a;
            throw qd;
        }
          , vd = a=>{
            var b = qd;
            if (!b)
                return td(0),
                0;
            var c = new md(b);
            x()[c.nb + 16 >> 2] = b;
            var d = pd(c);
            if (!d)
                return td(0),
                b;
            for (var e of a) {
                if (0 === e || e === d)
                    break;
                if (ud(e, d, c.nb + 16))
                    return td(e),
                    b
            }
            td(d);
            return b
        }
          , rb = ()=>vd([])
          , sb = a=>vd([a])
          , tb = (a,b)=>vd([a, b])
          , ub = ()=>{
            var a = kd.pop();
            a || hb("no exception to throw");
            var b = a.yb;
            if (0 == g()[a.nb + 13]) {
                kd.push(a);
                var c = 1;
                g()[a.nb + 13] = c;
                c = 0;
                g()[a.nb + 12] = c;
                ld++
            }
            qd = b;
            throw qd;
        }
          , vb = (a,b,c)=>{
            sd(new md(a), b, c);
            qd = a;
            ld++;
            throw qd;
        }
          , wb = ()=>ld;
        function wd(a, b, c, d) {
            return A ? L(2, 1, a, b, c, d) : xb(a, b, c, d)
        }
        var xb = (a,b,c,d)=>{
            if ("undefined" == typeof SharedArrayBuffer)
                return C("Current environment does not support SharedArrayBuffer, pthreads are not available!"),
                6;
            var e = [];
            if (A && 0 === e.length)
                return wd(a, b, c, d);
            a = {
                dc: c,
                vb: a,
                Ub: d,
                ec: e
            };
            return A ? (a.Kb = "spawnThread",
            postMessage(a, e),
            0) : Sc(a)
        }
        ;
        function O() {
            var a = w()[+xd >> 2];
            xd += 4;
            return a
        }
        var yd = (a,b)=>{
            for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1),
                c++) : c && (a.splice(d, 1),
                c--)
            }
            if (b)
                for (; c; c--)
                    a.unshift("..");
            return a
        }
          , zd = a=>{
            var b = "/" === a.charAt(0)
              , c = "/" === a.substr(-1);
            (a = yd(a.split("/").filter(d=>!!d), !b).join("/")) || b || (a = ".");
            a && c && (a += "/");
            return (b ? "/" : "") + a
        }
          , Ad = a=>{
            var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b)
                return ".";
            b &&= b.substr(0, b.length - 1);
            return a + b
        }
          , Bd = a=>{
            if ("/" === a)
                return "/";
            a = zd(a);
            a = a.replace(/\/$/, "");
            var b = a.lastIndexOf("/");
            return -1 === b ? a : a.substr(b + 1)
        }
          , Cd = ()=>{
            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                return c=>(c.set(crypto.getRandomValues(new Uint8Array(c.byteLength))),
                c);
            if (z)
                try {
                    var a = require("crypto");
                    if (a.randomFillSync)
                        return c=>a.randomFillSync(c);
                    var b = a.randomBytes;
                    return c=>(c.set(b(c.byteLength)),
                    c)
                } catch (c) {}
            hb("initRandomDevice")
        }
          , Dd = a=>(Dd = Cd())(a)
          , Ed = (...a)=>{
            for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
                c = 0 <= d ? a[d] : "/";
                if ("string" != typeof c)
                    throw new TypeError("Arguments to path.resolve must be strings");
                if (!c)
                    return "";
                b = c + "/" + b;
                c = "/" === c.charAt(0)
            }
            b = yd(b.split("/").filter(e=>!!e), !c).join("/");
            return (c ? "/" : "") + b || "."
        }
          , Fd = (a,b)=>{
            function c(h) {
                for (var k = 0; k < h.length && "" === h[k]; k++)
                    ;
                for (var m = h.length - 1; 0 <= m && "" === h[m]; m--)
                    ;
                return k > m ? [] : h.slice(k, m - k + 1)
            }
            a = Ed(a).substr(1);
            b = Ed(b).substr(1);
            a = c(a.split("/"));
            b = c(b.split("/"));
            for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++)
                if (a[f] !== b[f]) {
                    e = f;
                    break
                }
            d = [];
            for (f = e; f < a.length; f++)
                d.push("..");
            d = d.concat(b.slice(e));
            return d.join("/")
        }
          , Gd = (a,b)=>{
            for (var c = b + NaN, d = ""; !(b >= c); ) {
                var e = a[b++];
                if (!e)
                    break;
                if (e & 128) {
                    var f = a[b++] & 63;
                    if (192 == (e & 224))
                        d += String.fromCharCode((e & 31) << 6 | f);
                    else {
                        var h = a[b++] & 63;
                        e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | h : (e & 7) << 18 | f << 12 | h << 6 | a[b++] & 63;
                        65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                        d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
                    }
                } else
                    d += String.fromCharCode(e)
            }
            return d
        }
          , Hd = []
          , Id = a=>{
            for (var b = 0, c = 0; c < a.length; ++c) {
                var d = a.charCodeAt(c);
                127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4,
                ++c) : b += 3
            }
            return b
        }
          , Jd = (a,b,c,d)=>{
            if (!(0 < d))
                return 0;
            var e = c;
            d = c + d - 1;
            for (var f = 0; f < a.length; ++f) {
                var h = a.charCodeAt(f);
                if (55296 <= h && 57343 >= h) {
                    var k = a.charCodeAt(++f);
                    h = 65536 + ((h & 1023) << 10) | k & 1023
                }
                if (127 >= h) {
                    if (c >= d)
                        break;
                    b[c++] = h
                } else {
                    if (2047 >= h) {
                        if (c + 1 >= d)
                            break;
                        b[c++] = 192 | h >> 6
                    } else {
                        if (65535 >= h) {
                            if (c + 2 >= d)
                                break;
                            b[c++] = 224 | h >> 12
                        } else {
                            if (c + 3 >= d)
                                break;
                            b[c++] = 240 | h >> 18;
                            b[c++] = 128 | h >> 12 & 63
                        }
                        b[c++] = 128 | h >> 6 & 63
                    }
                    b[c++] = 128 | h & 63
                }
            }
            b[c] = 0;
            return c - e
        }
        ;
        function Kd(a) {
            var b = Array(Id(a) + 1);
            a = Jd(a, b, 0, b.length);
            b.length = a;
            return b
        }
        var Ld = [];
        function Md(a, b) {
            Ld[a] = {
                input: [],
                output: [],
                sb: b
            };
            Nd(a, Od)
        }
        var Od = {
            open(a) {
                var b = Ld[a.node.rdev];
                if (!b)
                    throw new P(43);
                a.tty = b;
                a.seekable = !1
            },
            close(a) {
                a.tty.sb.fsync(a.tty)
            },
            fsync(a) {
                a.tty.sb.fsync(a.tty)
            },
            read(a, b, c, d) {
                if (!a.tty || !a.tty.sb.Mb)
                    throw new P(60);
                for (var e = 0, f = 0; f < d; f++) {
                    try {
                        var h = a.tty.sb.Mb(a.tty)
                    } catch (k) {
                        throw new P(29);
                    }
                    if (void 0 === h && 0 === e)
                        throw new P(6);
                    if (null === h || void 0 === h)
                        break;
                    e++;
                    b[c + f] = h
                }
                e && (a.node.timestamp = Date.now());
                return e
            },
            write(a, b, c, d) {
                if (!a.tty || !a.tty.sb.Gb)
                    throw new P(60);
                try {
                    for (var e = 0; e < d; e++)
                        a.tty.sb.Gb(a.tty, b[c + e])
                } catch (f) {
                    throw new P(29);
                }
                d && (a.node.timestamp = Date.now());
                return e
            }
        }
          , Pd = {
            Mb() {
                a: {
                    if (!Hd.length) {
                        var a = null;
                        if (z) {
                            var b = Buffer.alloc(256)
                              , c = 0
                              , d = process.stdin.fd;
                            try {
                                c = fs.readSync(d, b, 0, 256)
                            } catch (e) {
                                if (e.toString().includes("EOF"))
                                    c = 0;
                                else
                                    throw e;
                            }
                            0 < c && (a = b.slice(0, c).toString("utf-8"))
                        } else
                            "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "),
                            null !== a && (a += "\n"));
                        if (!a) {
                            a = null;
                            break a
                        }
                        Hd = Kd(a)
                    }
                    a = Hd.shift()
                }
                return a
            },
            Gb(a, b) {
                null === b || 10 === b ? (Ba(Gd(a.output, 0)),
                a.output = []) : 0 != b && a.output.push(b)
            },
            fsync(a) {
                a.output && 0 < a.output.length && (Ba(Gd(a.output, 0)),
                a.output = [])
            },
            Xb() {
                return {
                    lc: 25856,
                    nc: 5,
                    kc: 191,
                    mc: 35387,
                    jc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            },
            Yb() {
                return 0
            },
            Zb() {
                return [24, 80]
            }
        }
          , Qd = {
            Gb(a, b) {
                null === b || 10 === b ? (C(Gd(a.output, 0)),
                a.output = []) : 0 != b && a.output.push(b)
            },
            fsync(a) {
                a.output && 0 < a.output.length && (C(Gd(a.output, 0)),
                a.output = [])
            }
        };
        function Rd(a, b) {
            var c = a.ib ? a.ib.length : 0;
            c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
            0 != c && (b = Math.max(b, 256)),
            c = a.ib,
            a.ib = new Uint8Array(b),
            0 < a.kb && a.ib.set(c.subarray(0, a.kb), 0))
        }
        var S = {
            rb: null,
            pb() {
                return S.createNode(null, "/", 16895, 0)
            },
            createNode(a, b, c, d) {
                if (24576 === (c & 61440) || 4096 === (c & 61440))
                    throw new P(63);
                S.rb || (S.rb = {
                    dir: {
                        node: {
                            qb: S.hb.qb,
                            ob: S.hb.ob,
                            lookup: S.hb.lookup,
                            Cb: S.hb.Cb,
                            rename: S.hb.rename,
                            unlink: S.hb.unlink,
                            rmdir: S.hb.rmdir,
                            readdir: S.hb.readdir,
                            symlink: S.hb.symlink
                        },
                        stream: {
                            ub: S.jb.ub
                        }
                    },
                    file: {
                        node: {
                            qb: S.hb.qb,
                            ob: S.hb.ob
                        },
                        stream: {
                            ub: S.jb.ub,
                            read: S.jb.read,
                            write: S.jb.write,
                            Ib: S.jb.Ib,
                            Fb: S.jb.Fb,
                            Sb: S.jb.Sb
                        }
                    },
                    link: {
                        node: {
                            qb: S.hb.qb,
                            ob: S.hb.ob,
                            readlink: S.hb.readlink
                        },
                        stream: {}
                    },
                    Jb: {
                        node: {
                            qb: S.hb.qb,
                            ob: S.hb.ob
                        },
                        stream: Sd
                    }
                });
                c = Td(a, b, c, d);
                T(c.mode) ? (c.hb = S.rb.dir.node,
                c.jb = S.rb.dir.stream,
                c.ib = {}) : 32768 === (c.mode & 61440) ? (c.hb = S.rb.file.node,
                c.jb = S.rb.file.stream,
                c.kb = 0,
                c.ib = null) : 40960 === (c.mode & 61440) ? (c.hb = S.rb.link.node,
                c.jb = S.rb.link.stream) : 8192 === (c.mode & 61440) && (c.hb = S.rb.Jb.node,
                c.jb = S.rb.Jb.stream);
                c.timestamp = Date.now();
                a && (a.ib[b] = c,
                a.timestamp = c.timestamp);
                return c
            },
            qc(a) {
                return a.ib ? a.ib.subarray ? a.ib.subarray(0, a.kb) : new Uint8Array(a.ib) : new Uint8Array(0)
            },
            hb: {
                qb(a) {
                    var b = {};
                    b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.ino = a.id;
                    b.mode = a.mode;
                    b.nlink = 1;
                    b.uid = 0;
                    b.gid = 0;
                    b.rdev = a.rdev;
                    T(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.kb : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.atime = new Date(a.timestamp);
                    b.mtime = new Date(a.timestamp);
                    b.ctime = new Date(a.timestamp);
                    b.Vb = 4096;
                    b.blocks = Math.ceil(b.size / b.Vb);
                    return b
                },
                ob(a, b) {
                    void 0 !== b.mode && (a.mode = b.mode);
                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                    if (void 0 !== b.size && (b = b.size,
                    a.kb != b))
                        if (0 == b)
                            a.ib = null,
                            a.kb = 0;
                        else {
                            var c = a.ib;
                            a.ib = new Uint8Array(b);
                            c && a.ib.set(c.subarray(0, Math.min(b, a.kb)));
                            a.kb = b
                        }
                },
                lookup() {
                    throw Ud[44];
                },
                Cb(a, b, c, d) {
                    return S.createNode(a, b, c, d)
                },
                rename(a, b, c) {
                    if (T(a.mode)) {
                        try {
                            var d = Vd(b, c)
                        } catch (f) {}
                        if (d)
                            for (var e in d.ib)
                                throw new P(55);
                    }
                    delete a.parent.ib[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.ib[c] = a;
                    b.timestamp = a.parent.timestamp
                },
                unlink(a, b) {
                    delete a.ib[b];
                    a.timestamp = Date.now()
                },
                rmdir(a, b) {
                    var c = Vd(a, b), d;
                    for (d in c.ib)
                        throw new P(55);
                    delete a.ib[b];
                    a.timestamp = Date.now()
                },
                readdir(a) {
                    var b = [".", ".."], c;
                    for (c of Object.keys(a.ib))
                        b.push(c);
                    return b
                },
                symlink(a, b, c) {
                    a = S.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a
                },
                readlink(a) {
                    if (40960 !== (a.mode & 61440))
                        throw new P(28);
                    return a.link
                }
            },
            jb: {
                read(a, b, c, d, e) {
                    var f = a.node.ib;
                    if (e >= a.node.kb)
                        return 0;
                    a = Math.min(a.node.kb - e, d);
                    if (8 < a && f.subarray)
                        b.set(f.subarray(e, e + a), c);
                    else
                        for (d = 0; d < a; d++)
                            b[c + d] = f[e + d];
                    return a
                },
                write(a, b, c, d, e, f) {
                    b.buffer === g().buffer && (f = !1);
                    if (!d)
                        return 0;
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.ib || a.ib.subarray)) {
                        if (f)
                            return a.ib = b.subarray(c, c + d),
                            a.kb = d;
                        if (0 === a.kb && 0 === e)
                            return a.ib = b.slice(c, c + d),
                            a.kb = d;
                        if (e + d <= a.kb)
                            return a.ib.set(b.subarray(c, c + d), e),
                            d
                    }
                    Rd(a, e + d);
                    if (a.ib.subarray && b.subarray)
                        a.ib.set(b.subarray(c, c + d), e);
                    else
                        for (f = 0; f < d; f++)
                            a.ib[e + f] = b[c + f];
                    a.kb = Math.max(a.kb, e + d);
                    return d
                },
                ub(a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.kb);
                    if (0 > b)
                        throw new P(28);
                    return b
                },
                Ib(a, b, c) {
                    Rd(a.node, b + c);
                    a.node.kb = Math.max(a.node.kb, b + c)
                },
                Fb(a, b, c, d, e) {
                    if (32768 !== (a.node.mode & 61440))
                        throw new P(43);
                    a = a.node.ib;
                    if (e & 2 || a.buffer !== g().buffer) {
                        if (0 < c || c + b < a.length)
                            a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                        c = !0;
                        hb();
                        b = void 0;
                        if (!b)
                            throw new P(48);
                        g().set(a, b)
                    } else
                        c = !1,
                        b = a.byteOffset;
                    return {
                        nb: b,
                        ic: c
                    }
                },
                Sb(a, b, c, d) {
                    S.jb.write(a, b, 0, d, c, !1);
                    return 0
                }
            }
        }
          , Wd = (a,b,c)=>{
            var d = `al ${a}`;
            va(a).then(e=>{
                b(new Uint8Array(e));
                d && gb(d)
            }
            , ()=>{
                if (c)
                    c();
                else
                    throw `Loading data file "${a}" failed.`;
            }
            );
            d && fb(d)
        }
          , Xd = y.preloadPlugins || []
          , Yd = (a,b,c,d)=>{
            "undefined" != typeof Browser && sd(Browser);
            var e = !1;
            Xd.forEach(f=>{
                !e && f.canHandle(b) && (f.handle(a, b, c, d),
                e = !0)
            }
            );
            return e
        }
          , $d = (a,b,c,d,e,f,h,k,m,l)=>{
            function p(t) {
                function r(u) {
                    l?.();
                    k || Zd(a, b, u, d, e, m);
                    f?.();
                    gb(B)
                }
                Yd(t, q, r, ()=>{
                    h?.();
                    gb(B)
                }
                ) || r(t)
            }
            var q = b ? Ed(zd(a + "/" + b)) : a
              , B = `cp ${q}`;
            fb(B);
            "string" == typeof c ? Wd(c, p, h) : p(c)
        }
          , ae = (a,b)=>{
            var c = 0;
            a && (c |= 365);
            b && (c |= 146);
            return c
        }
          , be = null
          , ce = {}
          , bd = []
          , de = 1
          , ee = null
          , ab = !0
          , P = class {
            constructor(a) {
                this.name = "ErrnoError";
                this.lb = a
            }
        }
          , Ud = {}
          , fe = class {
            constructor() {
                this.mb = {};
                this.node = null
            }
            get flags() {
                return this.mb.flags
            }
            set flags(a) {
                this.mb.flags = a
            }
            get position() {
                return this.mb.position
            }
            set position(a) {
                this.mb.position = a
            }
        }
          , ge = class {
            constructor(a, b, c, d) {
                a ||= this;
                this.parent = a;
                this.pb = a.pb;
                this.tb = null;
                this.id = de++;
                this.name = b;
                this.mode = c;
                this.hb = {};
                this.jb = {};
                this.rdev = d
            }
            get read() {
                return 365 === (this.mode & 365)
            }
            set read(a) {
                a ? this.mode |= 365 : this.mode &= -366
            }
            get write() {
                return 146 === (this.mode & 146)
            }
            set write(a) {
                a ? this.mode |= 146 : this.mode &= -147
            }
            get ac() {
                return T(this.mode)
            }
            get $b() {
                return 8192 === (this.mode & 61440)
            }
        }
        ;
        function U(a, b={}) {
            a = Ed(a);
            if (!a)
                return {
                    path: "",
                    node: null
                };
            b = Object.assign({
                Lb: !0,
                Hb: 0
            }, b);
            if (8 < b.Hb)
                throw new P(32);
            a = a.split("/").filter(h=>!!h);
            for (var c = be, d = "/", e = 0; e < a.length; e++) {
                var f = e === a.length - 1;
                if (f && b.parent)
                    break;
                c = Vd(c, a[e]);
                d = zd(d + "/" + a[e]);
                c.tb && (!f || f && b.Lb) && (c = c.tb.root);
                if (!f || b.Bb)
                    for (f = 0; 40960 === (c.mode & 61440); )
                        if (c = he(d),
                        d = Ed(Ad(d), c),
                        c = U(d, {
                            Hb: b.Hb + 1
                        }).node,
                        40 < f++)
                            throw new P(32);
            }
            return {
                path: d,
                node: c
            }
        }
        function ie(a) {
            for (var b; ; ) {
                if (a === a.parent)
                    return a = a.pb.Rb,
                    b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                b = b ? `${a.name}/${b}` : a.name;
                a = a.parent
            }
        }
        function je(a, b) {
            for (var c = 0, d = 0; d < b.length; d++)
                c = (c << 5) - c + b.charCodeAt(d) | 0;
            return (a + c >>> 0) % ee.length
        }
        function ke(a) {
            var b = je(a.parent.id, a.name);
            a.xb = ee[b];
            ee[b] = a
        }
        function le(a) {
            var b = je(a.parent.id, a.name);
            if (ee[b] === a)
                ee[b] = a.xb;
            else
                for (b = ee[b]; b; ) {
                    if (b.xb === a) {
                        b.xb = a.xb;
                        break
                    }
                    b = b.xb
                }
        }
        function Vd(a, b) {
            var c = T(a.mode) ? (c = me(a, "x")) ? c : a.hb.lookup ? 0 : 2 : 54;
            if (c)
                throw new P(c);
            for (c = ee[je(a.id, b)]; c; c = c.xb) {
                var d = c.name;
                if (c.parent.id === a.id && d === b)
                    return c
            }
            return a.hb.lookup(a, b)
        }
        function Td(a, b, c, d) {
            a = new ge(a,b,c,d);
            ke(a);
            return a
        }
        function T(a) {
            return 16384 === (a & 61440)
        }
        function ne(a) {
            var b = ["r", "w", "rw"][a & 3];
            a & 512 && (b += "w");
            return b
        }
        function me(a, b) {
            if (ab)
                return 0;
            if (!b.includes("r") || a.mode & 292) {
                if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
                    return 2
            } else
                return 2;
            return 0
        }
        function oe(a, b) {
            try {
                return Vd(a, b),
                20
            } catch (c) {}
            return me(a, "wx")
        }
        function pe(a, b, c) {
            try {
                var d = Vd(a, b)
            } catch (e) {
                return e.lb
            }
            if (a = me(a, "wx"))
                return a;
            if (c) {
                if (!T(d.mode))
                    return 54;
                if (d === d.parent || "/" === ie(d))
                    return 10
            } else if (T(d.mode))
                return 31;
            return 0
        }
        function qe(a) {
            a = bd[a];
            if (!a)
                throw new P(8);
            return a
        }
        function re(a, b=-1) {
            a = Object.assign(new fe, a);
            if (-1 == b)
                a: {
                    for (b = 0; 4096 >= b; b++)
                        if (!bd[b])
                            break a;
                    throw new P(33);
                }
            a.fd = b;
            return bd[b] = a
        }
        function se(a, b=-1) {
            a = re(a, b);
            a.jb?.oc?.(a);
            return a
        }
        var Sd = {
            open(a) {
                a.jb = ce[a.node.rdev].jb;
                a.jb.open?.(a)
            },
            ub() {
                throw new P(70);
            }
        };
        function Nd(a, b) {
            ce[a] = {
                jb: b
            }
        }
        function te(a, b) {
            var c = "/" === b;
            if (c && be)
                throw new P(10);
            if (!c && b) {
                var d = U(b, {
                    Lb: !1
                });
                b = d.path;
                d = d.node;
                if (d.tb)
                    throw new P(10);
                if (!T(d.mode))
                    throw new P(54);
            }
            b = {
                type: a,
                tc: {},
                Rb: b,
                bc: []
            };
            a = a.pb(b);
            a.pb = b;
            b.root = a;
            c ? be = a : d && (d.tb = b,
            d.pb && d.pb.bc.push(b))
        }
        function ue(a, b, c) {
            var d = U(a, {
                parent: !0
            }).node;
            a = Bd(a);
            if (!a || "." === a || ".." === a)
                throw new P(28);
            var e = oe(d, a);
            if (e)
                throw new P(e);
            if (!d.hb.Cb)
                throw new P(63);
            return d.hb.Cb(d, a, b, c)
        }
        function V(a) {
            return ue(a, 16895, 0)
        }
        function ve(a, b, c) {
            "undefined" == typeof c && (c = b,
            b = 438);
            return ue(a, b | 8192, c)
        }
        function we(a, b) {
            if (!Ed(a))
                throw new P(44);
            var c = U(b, {
                parent: !0
            }).node;
            if (!c)
                throw new P(44);
            b = Bd(b);
            var d = oe(c, b);
            if (d)
                throw new P(d);
            if (!c.hb.symlink)
                throw new P(63);
            c.hb.symlink(c, b, a)
        }
        function xe(a) {
            var b = U(a, {
                parent: !0
            }).node;
            a = Bd(a);
            var c = Vd(b, a)
              , d = pe(b, a, !0);
            if (d)
                throw new P(d);
            if (!b.hb.rmdir)
                throw new P(63);
            if (c.tb)
                throw new P(10);
            b.hb.rmdir(b, a);
            le(c)
        }
        function ye(a) {
            var b = U(a, {
                parent: !0
            }).node;
            if (!b)
                throw new P(44);
            a = Bd(a);
            var c = Vd(b, a)
              , d = pe(b, a, !1);
            if (d)
                throw new P(d);
            if (!b.hb.unlink)
                throw new P(63);
            if (c.tb)
                throw new P(10);
            b.hb.unlink(b, a);
            le(c)
        }
        function he(a) {
            a = U(a).node;
            if (!a)
                throw new P(44);
            if (!a.hb.readlink)
                throw new P(28);
            return Ed(ie(a.parent), a.hb.readlink(a))
        }
        function ze(a, b) {
            a = U(a, {
                Bb: !b
            }).node;
            if (!a)
                throw new P(44);
            if (!a.hb.qb)
                throw new P(63);
            return a.hb.qb(a)
        }
        function Ae(a) {
            return ze(a, !0)
        }
        function Be(a, b) {
            a = "string" == typeof a ? U(a, {
                Bb: !0
            }).node : a;
            if (!a.hb.ob)
                throw new P(63);
            a.hb.ob(a, {
                mode: b & 4095 | a.mode & -4096,
                timestamp: Date.now()
            })
        }
        function Ce(a, b, c) {
            if ("" === a)
                throw new P(44);
            if ("string" == typeof b) {
                var d = {
                    r: 0,
                    "r+": 2,
                    w: 577,
                    "w+": 578,
                    a: 1089,
                    "a+": 1090
                }[b];
                if ("undefined" == typeof d)
                    throw Error(`Unknown file open mode: ${b}`);
                b = d
            }
            c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
            if ("object" == typeof a)
                var e = a;
            else {
                a = zd(a);
                try {
                    e = U(a, {
                        Bb: !(b & 131072)
                    }).node
                } catch (f) {}
            }
            d = !1;
            if (b & 64)
                if (e) {
                    if (b & 128)
                        throw new P(20);
                } else
                    e = ue(a, c, 0),
                    d = !0;
            if (!e)
                throw new P(44);
            8192 === (e.mode & 61440) && (b &= -513);
            if (b & 65536 && !T(e.mode))
                throw new P(54);
            if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : T(e.mode) && ("r" !== ne(b) || b & 512) ? 31 : me(e, ne(b)) : 44))
                throw new P(c);
            if (b & 512 && !d) {
                c = e;
                c = "string" == typeof c ? U(c, {
                    Bb: !0
                }).node : c;
                if (!c.hb.ob)
                    throw new P(63);
                if (T(c.mode))
                    throw new P(31);
                if (32768 !== (c.mode & 61440))
                    throw new P(28);
                if (d = me(c, "w"))
                    throw new P(d);
                c.hb.ob(c, {
                    size: 0,
                    timestamp: Date.now()
                })
            }
            b &= -131713;
            e = re({
                node: e,
                path: ie(e),
                flags: b,
                seekable: !0,
                position: 0,
                jb: e.jb,
                fc: [],
                error: !1
            });
            e.jb.open && e.jb.open(e);
            !y.logReadFiles || b & 1 || (De ||= {},
            a in De || (De[a] = 1));
            return e
        }
        function cd(a) {
            if (null === a.fd)
                throw new P(8);
            a.Eb && (a.Eb = null);
            try {
                a.jb.close && a.jb.close(a)
            } catch (b) {
                throw b;
            } finally {
                bd[a.fd] = null
            }
            a.fd = null
        }
        function Ee(a, b, c) {
            if (null === a.fd)
                throw new P(8);
            if (!a.seekable || !a.jb.ub)
                throw new P(70);
            if (0 != c && 1 != c && 2 != c)
                throw new P(28);
            a.position = a.jb.ub(a, b, c);
            a.fc = []
        }
        function Fe(a, b, c, d, e, f) {
            if (0 > d || 0 > e)
                throw new P(28);
            if (null === a.fd)
                throw new P(8);
            if (0 === (a.flags & 2097155))
                throw new P(8);
            if (T(a.node.mode))
                throw new P(31);
            if (!a.jb.write)
                throw new P(28);
            a.seekable && a.flags & 1024 && Ee(a, 0, 2);
            var h = "undefined" != typeof e;
            if (!h)
                e = a.position;
            else if (!a.seekable)
                throw new P(70);
            b = a.jb.write(a, b, c, d, e, f);
            h || (a.position += b);
            return b
        }
        function qa(a, b, c) {
            $a = !0;
            y.stdin = a || y.stdin;
            y.stdout = b || y.stdout;
            y.stderr = c || y.stderr;
            y.stdin ? W("/dev", "stdin", y.stdin) : we("/dev/tty", "/dev/stdin");
            y.stdout ? W("/dev", "stdout", null, y.stdout) : we("/dev/tty", "/dev/stdout");
            y.stderr ? W("/dev", "stderr", null, y.stderr) : we("/dev/tty1", "/dev/stderr");
            Ce("/dev/stdin", 0);
            Ce("/dev/stdout", 1);
            Ce("/dev/stderr", 1)
        }
        var $a;
        function Ge(a, b) {
            a = "string" == typeof a ? a : ie(a);
            for (b = b.split("/").reverse(); b.length; ) {
                var c = b.pop();
                if (c) {
                    var d = zd(a + "/" + c);
                    try {
                        V(d)
                    } catch (e) {}
                    a = d
                }
            }
            return d
        }
        function He(a, b, c, d) {
            a = zd(("string" == typeof a ? a : ie(a)) + "/" + b);
            c = ae(c, d);
            return ue(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
        }
        function Zd(a, b, c, d, e, f) {
            var h = b;
            a && (a = "string" == typeof a ? a : ie(a),
            h = b ? zd(a + "/" + b) : a);
            a = ae(d, e);
            h = ue(h, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
            if (c) {
                if ("string" == typeof c) {
                    b = Array(c.length);
                    d = 0;
                    for (e = c.length; d < e; ++d)
                        b[d] = c.charCodeAt(d);
                    c = b
                }
                Be(h, a | 146);
                b = Ce(h, 577);
                Fe(b, c, 0, c.length, 0, f);
                cd(b);
                Be(h, a)
            }
        }
        function W(a, b, c, d) {
            a = zd(("string" == typeof a ? a : ie(a)) + "/" + b);
            b = ae(!!c, !!d);
            W.Pb || (W.Pb = 64);
            var e = W.Pb++ << 8 | 0;
            Nd(e, {
                open(f) {
                    f.seekable = !1
                },
                close() {
                    d?.buffer?.length && d(10)
                },
                read(f, h, k, m) {
                    for (var l = 0, p = 0; p < m; p++) {
                        try {
                            var q = c()
                        } catch (B) {
                            throw new P(29);
                        }
                        if (void 0 === q && 0 === l)
                            throw new P(6);
                        if (null === q || void 0 === q)
                            break;
                        l++;
                        h[k + p] = q
                    }
                    l && (f.node.timestamp = Date.now());
                    return l
                },
                write(f, h, k, m) {
                    for (var l = 0; l < m; l++)
                        try {
                            d(h[k + l])
                        } catch (p) {
                            throw new P(29);
                        }
                    m && (f.node.timestamp = Date.now());
                    return l
                }
            });
            return ve(a, b, e)
        }
        function Ie(a) {
            if (!(a.$b || a.ac || a.link || a.ib)) {
                if ("undefined" != typeof XMLHttpRequest)
                    throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                try {
                    a.ib = wa(a.url),
                    a.kb = a.ib.length
                } catch (b) {
                    throw new P(29);
                }
            }
        }
        function Je(a, b, c, d, e) {
            class f {
                constructor() {
                    this.Ab = !1;
                    this.mb = [];
                    this.zb = void 0;
                    this.Nb = this.Ob = 0
                }
                get(p) {
                    if (!(p > this.length - 1 || 0 > p)) {
                        var q = p % this.chunkSize;
                        return this.zb(p / this.chunkSize | 0)[q]
                    }
                }
                cc(p) {
                    this.zb = p
                }
                Qb() {
                    var p = new XMLHttpRequest;
                    p.open("HEAD", c, !1);
                    p.send(null);
                    if (!(200 <= p.status && 300 > p.status || 304 === p.status))
                        throw Error("Couldn't load " + c + ". Status: " + p.status);
                    var q = Number(p.getResponseHeader("Content-length")), B, t = (B = p.getResponseHeader("Accept-Ranges")) && "bytes" === B;
                    p = (B = p.getResponseHeader("Content-Encoding")) && "gzip" === B;
                    var r = 1048576;
                    t || (r = q);
                    var u = this;
                    u.cc(G=>{
                        var R = G * r
                          , Y = (G + 1) * r - 1;
                        Y = Math.min(Y, q - 1);
                        if ("undefined" == typeof u.mb[G]) {
                            var kf = u.mb;
                            if (R > Y)
                                throw Error("invalid range (" + R + ", " + Y + ") or no bytes requested!");
                            if (Y > q - 1)
                                throw Error("only " + q + " bytes available! programmer error!");
                            var Q = new XMLHttpRequest;
                            Q.open("GET", c, !1);
                            q !== r && Q.setRequestHeader("Range", "bytes=" + R + "-" + Y);
                            Q.responseType = "arraybuffer";
                            Q.overrideMimeType && Q.overrideMimeType("text/plain; charset=x-user-defined");
                            Q.send(null);
                            if (!(200 <= Q.status && 300 > Q.status || 304 === Q.status))
                                throw Error("Couldn't load " + c + ". Status: " + Q.status);
                            R = void 0 !== Q.response ? new Uint8Array(Q.response || []) : Kd(Q.responseText || "");
                            kf[G] = R
                        }
                        if ("undefined" == typeof u.mb[G])
                            throw Error("doXHR failed!");
                        return u.mb[G]
                    }
                    );
                    if (p || !q)
                        r = q = 1,
                        r = q = this.zb(0).length,
                        Ba("LazyFiles on gzip forces download of the whole file when length is accessed");
                    this.Ob = q;
                    this.Nb = r;
                    this.Ab = !0
                }
                get length() {
                    this.Ab || this.Qb();
                    return this.Ob
                }
                get chunkSize() {
                    this.Ab || this.Qb();
                    return this.Nb
                }
            }
            if ("undefined" != typeof XMLHttpRequest) {
                if (!oa)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                var h = new f;
                var k = void 0
            } else
                k = c,
                h = void 0;
            var m = He(a, b, d, e);
            h ? m.ib = h : k && (m.ib = null,
            m.url = k);
            Object.defineProperties(m, {
                kb: {
                    get: function() {
                        return this.ib.length
                    }
                }
            });
            var l = {};
            Object.keys(m.jb).forEach(p=>{
                var q = m.jb[p];
                l[p] = (...B)=>{
                    Ie(m);
                    return q(...B)
                }
            }
            );
            l.read = (p,q,B,t,r)=>{
                Ie(m);
                p = p.node.ib;
                if (r >= p.length)
                    q = 0;
                else {
                    t = Math.min(p.length - r, t);
                    if (p.slice)
                        for (var u = 0; u < t; u++)
                            q[B + u] = p[r + u];
                    else
                        for (u = 0; u < t; u++)
                            q[B + u] = p.get(r + u);
                    q = t
                }
                return q
            }
            ;
            l.Fb = ()=>{
                Ie(m);
                hb();
                throw new P(48);
            }
            ;
            m.jb = l;
            return m
        }
        var X = {}, De, Ke = a=>a ? Gd(ba(), a) : "";
        function Le(a, b, c) {
            if ("/" === b.charAt(0))
                return b;
            a = -100 === a ? "/" : qe(a).path;
            if (0 == b.length) {
                if (!c)
                    throw new P(44);
                return a
            }
            return zd(a + "/" + b)
        }
        function Me(a, b, c) {
            a = a(b);
            w()[c >> 2] = a.dev;
            w()[c + 4 >> 2] = a.mode;
            x()[c + 8 >> 2] = a.nlink;
            w()[c + 12 >> 2] = a.uid;
            w()[c + 16 >> 2] = a.gid;
            w()[c + 20 >> 2] = a.rdev;
            F = [a.size >>> 0, (E = a.size,
            1 <= +Math.abs(E) ? 0 < E ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
            w()[c + 24 >> 2] = F[0];
            w()[c + 28 >> 2] = F[1];
            w()[c + 32 >> 2] = 4096;
            w()[c + 36 >> 2] = a.blocks;
            b = a.atime.getTime();
            var d = a.mtime.getTime()
              , e = a.ctime.getTime();
            F = [Math.floor(b / 1E3) >>> 0, (E = Math.floor(b / 1E3),
            1 <= +Math.abs(E) ? 0 < E ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
            w()[c + 40 >> 2] = F[0];
            w()[c + 44 >> 2] = F[1];
            x()[c + 48 >> 2] = b % 1E3 * 1E3;
            F = [Math.floor(d / 1E3) >>> 0, (E = Math.floor(d / 1E3),
            1 <= +Math.abs(E) ? 0 < E ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
            w()[c + 56 >> 2] = F[0];
            w()[c + 60 >> 2] = F[1];
            x()[c + 64 >> 2] = d % 1E3 * 1E3;
            F = [Math.floor(e / 1E3) >>> 0, (E = Math.floor(e / 1E3),
            1 <= +Math.abs(E) ? 0 < E ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
            w()[c + 72 >> 2] = F[0];
            w()[c + 76 >> 2] = F[1];
            x()[c + 80 >> 2] = e % 1E3 * 1E3;
            F = [a.ino >>> 0, (E = a.ino,
            1 <= +Math.abs(E) ? 0 < E ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
            w()[c + 88 >> 2] = F[0];
            w()[c + 92 >> 2] = F[1];
            return 0
        }
        var xd = void 0;
        function zb(a, b, c) {
            if (A)
                return L(3, 1, a, b, c);
            xd = c;
            try {
                var d = qe(a);
                switch (b) {
                case 0:
                    var e = O();
                    if (0 > e)
                        break;
                    for (; bd[e]; )
                        e++;
                    return se(d, e).fd;
                case 1:
                case 2:
                    return 0;
                case 3:
                    return d.flags;
                case 4:
                    return e = O(),
                    d.flags |= e,
                    0;
                case 12:
                    return e = O(),
                    da()[e + 0 >> 1] = 2,
                    0;
                case 13:
                case 14:
                    return 0
                }
                return -28
            } catch (f) {
                if ("undefined" == typeof X || "ErrnoError" !== f.name)
                    throw f;
                return -f.lb
            }
        }
        var Ne = (a,b)=>{
            Jd(a, ba(), b, 17)
        }
        ;
        function Ab(a, b) {
            if (A)
                return L(5, 1, a, b);
            try {
                if (0 === b)
                    return -28;
                var c = Id("/") + 1;
                if (b < c)
                    return -68;
                Jd("/", ba(), a, b);
                return c
            } catch (d) {
                if ("undefined" == typeof X || "ErrnoError" !== d.name)
                    throw d;
                return -d.lb
            }
        }
        function Bb(a, b, c) {
            if (A)
                return L(6, 1, a, b, c);
            xd = c;
            try {
                var d = qe(a);
                switch (b) {
                case 21509:
                    return d.tty ? 0 : -59;
                case 21505:
                    if (!d.tty)
                        return -59;
                    if (d.tty.sb.Xb) {
                        a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        var e = O();
                        w()[e >> 2] = 25856;
                        w()[e + 4 >> 2] = 5;
                        w()[e + 8 >> 2] = 191;
                        w()[e + 12 >> 2] = 35387;
                        for (var f = 0; 32 > f; f++)
                            g()[e + f + 17] = a[f] || 0
                    }
                    return 0;
                case 21510:
                case 21511:
                case 21512:
                    return d.tty ? 0 : -59;
                case 21506:
                case 21507:
                case 21508:
                    if (!d.tty)
                        return -59;
                    if (d.tty.sb.Yb)
                        for (e = O(),
                        w(),
                        w(),
                        w(),
                        w(),
                        a = [],
                        f = 0; 32 > f; f++)
                            a.push(g()[e + f + 17]);
                    return 0;
                case 21519:
                    if (!d.tty)
                        return -59;
                    e = O();
                    return w()[e >> 2] = 0;
                case 21520:
                    return d.tty ? -28 : -59;
                case 21531:
                    e = O();
                    if (!d.jb.Wb)
                        throw new P(59);
                    return d.jb.Wb(d, b, e);
                case 21523:
                    if (!d.tty)
                        return -59;
                    d.tty.sb.Zb && (f = [24, 80],
                    e = O(),
                    da()[e >> 1] = f[0],
                    da()[e + 2 >> 1] = f[1]);
                    return 0;
                case 21524:
                    return d.tty ? 0 : -59;
                case 21515:
                    return d.tty ? 0 : -59;
                default:
                    return -28
                }
            } catch (h) {
                if ("undefined" == typeof X || "ErrnoError" !== h.name)
                    throw h;
                return -h.lb
            }
        }
        function Cb(a, b, c, d) {
            if (A)
                return L(9, 1, a, b, c, d);
            xd = d;
            try {
                b = Ke(b);
                b = Le(a, b);
                var e = d ? O() : 0;
                return Ce(b, c, e).fd
            } catch (f) {
                if ("undefined" == typeof X || "ErrnoError" !== f.name)
                    throw f;
                return -f.lb
            }
        }
        function Db(a, b, c, d) {
            if (A)
                return L(10, 1, a, b, c, d);
            try {
                b = Ke(b);
                d = Ke(d);
                b = Le(a, b);
                d = Le(c, d);
                a = b;
                var e = Ad(a)
                  , f = Ad(d)
                  , h = Bd(a)
                  , k = Bd(d);
                var m = U(a, {
                    parent: !0
                });
                var l = m.node;
                m = U(d, {
                    parent: !0
                });
                var p = m.node;
                if (!l || !p)
                    throw new P(44);
                if (l.pb !== p.pb)
                    throw new P(75);
                var q = Vd(l, h)
                  , B = Fd(a, f);
                if ("." !== B.charAt(0))
                    throw new P(28);
                B = Fd(d, e);
                if ("." !== B.charAt(0))
                    throw new P(55);
                try {
                    var t = Vd(p, k)
                } catch (G) {}
                if (q !== t) {
                    var r = T(q.mode)
                      , u = pe(l, h, r);
                    if (u)
                        throw new P(u);
                    if (u = t ? pe(p, k, r) : oe(p, k))
                        throw new P(u);
                    if (!l.hb.rename)
                        throw new P(63);
                    if (q.tb || t && t.tb)
                        throw new P(10);
                    if (p !== l && (u = me(l, "w")))
                        throw new P(u);
                    le(q);
                    try {
                        l.hb.rename(q, p, k),
                        q.parent = p
                    } catch (G) {
                        throw G;
                    } finally {
                        ke(q)
                    }
                }
                return 0
            } catch (G) {
                if ("undefined" == typeof X || "ErrnoError" !== G.name)
                    throw G;
                return -G.lb
            }
        }
        function Eb(a) {
            if (A)
                return L(11, 1, a);
            try {
                return a = Ke(a),
                xe(a),
                0
            } catch (b) {
                if ("undefined" == typeof X || "ErrnoError" !== b.name)
                    throw b;
                return -b.lb
            }
        }
        function Fb(a, b) {
            if (A)
                return L(12, 1, a, b);
            try {
                return a = Ke(a),
                Me(ze, a, b)
            } catch (c) {
                if ("undefined" == typeof X || "ErrnoError" !== c.name)
                    throw c;
                return -c.lb
            }
        }
        function Gb(a, b, c) {
            if (A)
                return L(13, 1, a, b, c);
            try {
                return b = Ke(b),
                b = Le(a, b),
                0 === c ? ye(b) : 512 === c ? xe(b) : hb("Invalid flags passed to unlinkat"),
                0
            } catch (d) {
                if ("undefined" == typeof X || "ErrnoError" !== d.name)
                    throw d;
                return -d.lb
            }
        }
        var Hb = ()=>{
            hb("")
        }
          , Ib = ()=>1
          , Jb = a=>{
            Ha(a, !oa, 1, !na, 2097152, !1);
            Ka()
        }
          , Ia = a=>{
            "function" === typeof Atomics.hc && (Atomics.hc(w(), a >> 2, a).value.then(Na),
            a += 128,
            Atomics.store(w(), a >> 2, 1))
        }
          , Na = ()=>{
            var a = Fa();
            if (a && (Ia(a),
            a = Oe,
            !Ya && !Ra))
                try {
                    if (a(),
                    !(Ya || Tc || 0 < I))
                        try {
                            A ? Ma(Sa) : Yb(Sa)
                        } catch (b) {
                            Yc(b)
                        }
                } catch (b) {
                    Yc(b)
                }
        }
          , Kb = (a,b)=>{
            a == b ? setTimeout(Na) : A ? postMessage({
                targetThread: a,
                cmd: "checkMailbox"
            }) : (a = H[a]) && a.postMessage({
                cmd: "checkMailbox"
            })
        }
          , Pe = []
          , Lb = (a,b,c,d,e)=>{
            Pe.length = d;
            b = e >> 3;
            for (c = 0; c < d; c++)
                Pe[c] = ia()[b + c];
            return (0,
            Qe[a])(...Pe)
        }
          , Mb = a=>{
            A ? postMessage({
                cmd: "cleanupThread",
                thread: a
            }) : fd(H[a])
        }
          , Nb = a=>{
            z && H[a].ref()
        }
          , Ob = (a,b,c,d)=>{
            var e = (new Date).getFullYear()
              , f = new Date(e,0,1)
              , h = new Date(e,6,1);
            e = f.getTimezoneOffset();
            var k = h.getTimezoneOffset()
              , m = Math.max(e, k);
            x()[a >> 2] = 60 * m;
            w()[b >> 2] = Number(e != k);
            a = l=>l.toLocaleTimeString(void 0, {
                hour12: !1,
                timeZoneName: "short"
            }).split(" ")[1];
            f = a(f);
            h = a(h);
            k < e ? (Ne(f, c),
            Ne(h, d)) : (Ne(f, d),
            Ne(h, c))
        }
          , Pb = ()=>{}
          , Qb = ()=>{
            I += 1;
            throw "unwind";
        }
        ;
        function Re() {
            if (A)
                return L(15, 1);
            Tc = !1;
            I = 0
        }
        function Rb(a) {
            if (A)
                return L(14, 1, a);
            Re();
            Yb(a)
        }
        y._emscripten_force_exit = Rb;
        var Sb;
        Sb = ()=>performance.timeOrigin + performance.now();
        var Tb = ()=>z ? require("os").cpus().length : navigator.hardwareConcurrency, Ub = a=>{
            var b = ba().length;
            a >>>= 0;
            if (a <= b || 2147483648 < a)
                return !1;
            for (var c = 1; 4 >= c; c *= 2) {
                var d = b * (1 + .2 / c);
                d = Math.min(d, a + 100663296);
                var e = Math;
                d = Math.max(a, d);
                a: {
                    e = (e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - n.buffer.byteLength + 65535) / 65536;
                    try {
                        n.grow(e);
                        v();
                        var f = 1;
                        break a
                    } catch (h) {}
                    f = void 0
                }
                if (f)
                    return !0
            }
            return !1
        }
        , Se = {}, Ue = ()=>{
            if (!Te) {
                var a = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: ta || "./this.program"
                }, b;
                for (b in Se)
                    void 0 === Se[b] ? delete a[b] : a[b] = Se[b];
                var c = [];
                for (b in a)
                    c.push(`${b}=${a[b]}`);
                Te = c
            }
            return Te
        }
        , Te;
        function Wb(a, b) {
            if (A)
                return L(16, 1, a, b);
            var c = 0;
            Ue().forEach((d,e)=>{
                var f = b + c;
                e = x()[a + 4 * e >> 2] = f;
                for (f = 0; f < d.length; ++f)
                    g()[e++] = d.charCodeAt(f);
                g()[e] = 0;
                c += d.length + 1
            }
            );
            return 0
        }
        function Xb(a, b) {
            if (A)
                return L(17, 1, a, b);
            var c = Ue();
            x()[a >> 2] = c.length;
            var d = 0;
            c.forEach(e=>d += e.length + 1);
            x()[b >> 2] = d;
            return 0
        }
        function Zb(a) {
            if (A)
                return L(18, 1, a);
            try {
                var b = qe(a);
                cd(b);
                return 0
            } catch (c) {
                if ("undefined" == typeof X || "ErrnoError" !== c.name)
                    throw c;
                return c.lb
            }
        }
        function $b(a, b, c, d) {
            if (A)
                return L(19, 1, a, b, c, d);
            try {
                a: {
                    var e = qe(a);
                    a = b;
                    for (var f, h = b = 0; h < c; h++) {
                        var k = x()[a >> 2]
                          , m = x()[a + 4 >> 2];
                        a += 8;
                        var l = e
                          , p = g()
                          , q = f;
                        if (0 > m || 0 > q)
                            throw new P(28);
                        if (null === l.fd)
                            throw new P(8);
                        if (1 === (l.flags & 2097155))
                            throw new P(8);
                        if (T(l.node.mode))
                            throw new P(31);
                        if (!l.jb.read)
                            throw new P(28);
                        var B = "undefined" != typeof q;
                        if (!B)
                            q = l.position;
                        else if (!l.seekable)
                            throw new P(70);
                        var t = l.jb.read(l, p, k, m, q);
                        B || (l.position += t);
                        var r = t;
                        if (0 > r) {
                            var u = -1;
                            break a
                        }
                        b += r;
                        if (r < m)
                            break;
                        "undefined" != typeof f && (f += r)
                    }
                    u = b
                }
                x()[d >> 2] = u;
                return 0
            } catch (G) {
                if ("undefined" == typeof X || "ErrnoError" !== G.name)
                    throw G;
                return G.lb
            }
        }
        function ac(a, b, c, d, e) {
            if (A)
                return L(20, 1, a, b, c, d, e);
            b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
            try {
                if (isNaN(b))
                    return 61;
                var f = qe(a);
                Ee(f, b, d);
                F = [f.position >>> 0, (E = f.position,
                1 <= +Math.abs(E) ? 0 < E ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
                w()[e >> 2] = F[0];
                w()[e + 4 >> 2] = F[1];
                f.Eb && 0 === b && 0 === d && (f.Eb = null);
                return 0
            } catch (h) {
                if ("undefined" == typeof X || "ErrnoError" !== h.name)
                    throw h;
                return h.lb
            }
        }
        function bc(a, b, c, d) {
            if (A)
                return L(21, 1, a, b, c, d);
            try {
                a: {
                    var e = qe(a);
                    a = b;
                    for (var f, h = b = 0; h < c; h++) {
                        var k = x()[a >> 2]
                          , m = x()[a + 4 >> 2];
                        a += 8;
                        var l = Fe(e, g(), k, m, f);
                        if (0 > l) {
                            var p = -1;
                            break a
                        }
                        b += l;
                        "undefined" != typeof f && (f += l)
                    }
                    p = b
                }
                x()[d >> 2] = p;
                return 0
            } catch (q) {
                if ("undefined" == typeof X || "ErrnoError" !== q.name)
                    throw q;
                return q.lb
            }
        }
        var Mc = a=>a
          , Ve = a=>{
            var b = Id(a) + 1
              , c = Uc(b);
            Jd(a, ba(), c, b);
            return c
        }
          , We = (a,b,c,d)=>{
            var e = {
                string: l=>{
                    var p = 0;
                    null !== l && void 0 !== l && 0 !== l && (p = Ve(l));
                    return p
                }
                ,
                array: l=>{
                    var p = Uc(l.length);
                    g().set(l, p);
                    return p
                }
            };
            a = y["_" + a];
            var f = []
              , h = 0;
            if (d)
                for (var k = 0; k < d.length; k++) {
                    var m = e[c[k]];
                    m ? (0 === h && (h = J()),
                    f[k] = m(d[k])) : f[k] = d[k]
                }
            c = a(...f);
            return c = function(l) {
                0 !== h && K(h);
                return "string" === b ? Ke(l) : "boolean" === b ? !!l : l
            }(c)
        }
        ;
        A ? Tc = !1 : Ta.unshift(()=>{
            fb("loading-workers");
            gb("loading-workers")
        }
        );
        [44].forEach(a=>{
            Ud[a] = new P(a);
            Ud[a].stack = "<generic error, no stack>"
        }
        );
        ee = Array(4096);
        te(S, "/");
        V("/tmp");
        V("/home");
        V("/home/web_user");
        (function() {
            V("/dev");
            Nd(259, {
                read: ()=>0,
                write: (d,e,f,h)=>h
            });
            ve("/dev/null", 259);
            Md(1280, Pd);
            Md(1536, Qd);
            ve("/dev/tty", 1280);
            ve("/dev/tty1", 1536);
            var a = new Uint8Array(1024)
              , b = 0
              , c = ()=>{
                0 === b && (b = Dd(a).byteLength);
                return a[--b]
            }
            ;
            W("/dev", "random", c);
            W("/dev", "urandom", c);
            V("/dev/shm");
            V("/dev/shm/tmp")
        }
        )();
        (function() {
            V("/proc");
            var a = V("/proc/self");
            V("/proc/self/fd");
            te({
                pb() {
                    var b = Td(a, "fd", 16895, 73);
                    b.hb = {
                        lookup(c, d) {
                            var e = qe(+d);
                            c = {
                                parent: null,
                                pb: {
                                    Rb: "fake"
                                },
                                hb: {
                                    readlink: ()=>e.path
                                }
                            };
                            return c.parent = c
                        }
                    };
                    return b
                }
            }, "/proc/self/fd")
        }
        )();
        y.FS_createPath = Ge;
        y.FS_createDataFile = Zd;
        y.FS_createPreloadedFile = $d;
        y.FS_unlink = ye;
        y.FS_createLazyFile = Je;
        y.FS_createDevice = W;
        var Qe = [Wc, Zc, wd, zb, function(a, b) {
            if (A)
                return L(4, 1, a, b);
            try {
                var c = qe(a);
                return Me(ze, c.path, b)
            } catch (d) {
                if ("undefined" == typeof X || "ErrnoError" !== d.name)
                    throw d;
                return -d.lb
            }
        }
        , Ab, Bb, function(a, b) {
            if (A)
                return L(7, 1, a, b);
            try {
                return a = Ke(a),
                Me(Ae, a, b)
            } catch (c) {
                if ("undefined" == typeof X || "ErrnoError" !== c.name)
                    throw c;
                return -c.lb
            }
        }
        , function(a, b, c, d) {
            if (A)
                return L(8, 1, a, b, c, d);
            try {
                b = Ke(b);
                var e = d & 256;
                b = Le(a, b, d & 4096);
                return Me(e ? Ae : ze, b, c)
            } catch (f) {
                if ("undefined" == typeof X || "ErrnoError" !== f.name)
                    throw f;
                return -f.lb
            }
        }
        , Cb, Db, Eb, Fb, Gb, Rb, Re, Wb, Xb, Zb, $b, ac, bc], ob, Z = function() {
            function a(c, d) {
                Z = c.exports;
                dd.push(Z.Da);
                jd = Z.Ca;
                Ua.unshift(Z.za);
                Qa = d;
                gb("wasm-instantiate");
                return Z
            }
            var b = Ga();
            fb("wasm-instantiate");
            if (y.instantiateWasm)
                try {
                    return y.instantiateWasm(b, a)
                } catch (c) {
                    C(`Module.instantiateWasm callback failed with error: ${c}`),
                    la(c)
                }
            jb ||= ib("rapfi-multi-simd128-relaxed.wasm") ? "rapfi-multi-simd128-relaxed.wasm" : y.locateFile ? y.locateFile("rapfi-multi-simd128-relaxed.wasm", D) : D + "rapfi-multi-simd128-relaxed.wasm";
            nb(b, function(c) {
                a(c.instance, c.module)
            }).catch(la);
            return {}
        }();
        y._gomocupLoopOnce = ()=>(y._gomocupLoopOnce = Z.Aa)();
        y._main = (a,b)=>(y._main = Z.Ba)(a, b);
        var Fa = ()=>(Fa = Z.Ea)()
          , Xe = y.__emscripten_proxy_main = (a,b)=>(Xe = y.__emscripten_proxy_main = Z.Fa)(a, b)
          , $c = ()=>($c = Z.Ga)()
          , Ha = (a,b,c,d,e,f)=>(Ha = Z.Ha)(a, b, c, d, e, f)
          , Oa = ()=>(Oa = Z.Ia)()
          , ad = a=>(ad = Z.Ja)(a)
          , Vc = (a,b,c,d,e)=>(Vc = Z.Ka)(a, b, c, d, e)
          , ed = a=>(ed = Z.La)(a)
          , Ma = a=>(Ma = Z.Ma)(a)
          , Oe = ()=>(Oe = Z.Na)()
          , N = (a,b)=>(N = Z.Oa)(a, b)
          , td = a=>(td = Z.Pa)(a)
          , gd = (a,b)=>(gd = Z.Qa)(a, b)
          , K = a=>(K = Z.Ra)(a)
          , Uc = a=>(Uc = Z.Sa)(a)
          , J = ()=>(J = Z.Ta)()
          , rd = a=>(rd = Z.Ua)(a)
          , nd = a=>(nd = Z.Va)(a)
          , ud = (a,b,c)=>(ud = Z.Wa)(a, b, c)
          , od = a=>(od = Z.Xa)(a)
          , Ye = y.dynCall_j = a=>(Ye = y.dynCall_j = Z.Ya)(a)
          , Ze = y.dynCall_viiij = (a,b,c,d,e,f)=>(Ze = y.dynCall_viiij = Z.Za)(a, b, c, d, e, f)
          , $e = y.dynCall_viiji = (a,b,c,d,e,f)=>($e = y.dynCall_viiji = Z._a)(a, b, c, d, e, f)
          , af = y.dynCall_iij = (a,b,c,d)=>(af = y.dynCall_iij = Z.$a)(a, b, c, d)
          , bf = y.dynCall_iiiiij = (a,b,c,d,e,f,h)=>(bf = y.dynCall_iiiiij = Z.ab)(a, b, c, d, e, f, h)
          , cf = y.dynCall_ji = (a,b)=>(cf = y.dynCall_ji = Z.bb)(a, b)
          , df = y.dynCall_vij = (a,b,c,d)=>(df = y.dynCall_vij = Z.cb)(a, b, c, d)
          , ef = y.dynCall_jii = (a,b,c)=>(ef = y.dynCall_jii = Z.db)(a, b, c)
          , ff = y.dynCall_jiii = (a,b,c,d)=>(ff = y.dynCall_jiii = Z.eb)(a, b, c, d)
          , gf = y.dynCall_iiij = (a,b,c,d,e)=>(gf = y.dynCall_iiij = Z.fb)(a, b, c, d, e)
          , hf = y.dynCall_iiiij = (a,b,c,d,e,f)=>(hf = y.dynCall_iiiij = Z.gb)(a, b, c, d, e, f);
        function hc(a, b, c) {
            var d = J();
            try {
                return M(a)(b, c)
            } catch (e) {
                K(d);
                if (e !== e + 0)
                    throw e;
                N(1, 0)
            }
        }
        function ic(a, b, c, d) {
            var e = J();
            try {
                return M(a)(b, c, d)
            } catch (f) {
                K(e);
                if (f !== f + 0)
                    throw f;
                N(1, 0)
            }
        }
        function Cc(a, b, c, d) {
            var e = J();
            try {
                M(a)(b, c, d)
            } catch (f) {
                K(e);
                if (f !== f + 0)
                    throw f;
                N(1, 0)
            }
        }
        function Bc(a, b, c) {
            var d = J();
            try {
                M(a)(b, c)
            } catch (e) {
                K(d);
                if (e !== e + 0)
                    throw e;
                N(1, 0)
            }
        }
        function zc(a) {
            var b = J();
            try {
                M(a)()
            } catch (c) {
                K(b);
                if (c !== c + 0)
                    throw c;
                N(1, 0)
            }
        }
        function fc(a, b) {
            var c = J();
            try {
                return M(a)(b)
            } catch (d) {
                K(c);
                if (d !== d + 0)
                    throw d;
                N(1, 0)
            }
        }
        function oc(a, b, c, d, e, f, h) {
            var k = J();
            try {
                return M(a)(b, c, d, e, f, h)
            } catch (m) {
                K(k);
                if (m !== m + 0)
                    throw m;
                N(1, 0)
            }
        }
        function Ac(a, b) {
            var c = J();
            try {
                M(a)(b)
            } catch (d) {
                K(c);
                if (d !== d + 0)
                    throw d;
                N(1, 0)
            }
        }
        function jc(a, b, c, d, e) {
            var f = J();
            try {
                return M(a)(b, c, d, e)
            } catch (h) {
                K(f);
                if (h !== h + 0)
                    throw h;
                N(1, 0)
            }
        }
        function ec(a) {
            var b = J();
            try {
                return M(a)()
            } catch (c) {
                K(b);
                if (c !== c + 0)
                    throw c;
                N(1, 0)
            }
        }
        function Ec(a, b, c, d, e, f) {
            var h = J();
            try {
                M(a)(b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function Dc(a, b, c, d, e) {
            var f = J();
            try {
                M(a)(b, c, d, e)
            } catch (h) {
                K(f);
                if (h !== h + 0)
                    throw h;
                N(1, 0)
            }
        }
        function gc(a, b, c) {
            var d = J();
            try {
                return M(a)(b, c)
            } catch (e) {
                K(d);
                if (e !== e + 0)
                    throw e;
                N(1, 0)
            }
        }
        function nc(a, b, c, d, e, f) {
            var h = J();
            try {
                return M(a)(b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function Fc(a, b, c, d, e, f, h) {
            var k = J();
            try {
                M(a)(b, c, d, e, f, h)
            } catch (m) {
                K(k);
                if (m !== m + 0)
                    throw m;
                N(1, 0)
            }
        }
        function lc(a, b, c, d, e, f) {
            var h = J();
            try {
                return M(a)(b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function mc(a, b, c, d, e, f, h) {
            var k = J();
            try {
                return M(a)(b, c, d, e, f, h)
            } catch (m) {
                K(k);
                if (m !== m + 0)
                    throw m;
                N(1, 0)
            }
        }
        function Gc(a, b, c, d, e, f, h, k) {
            var m = J();
            try {
                M(a)(b, c, d, e, f, h, k)
            } catch (l) {
                K(m);
                if (l !== l + 0)
                    throw l;
                N(1, 0)
            }
        }
        function cc(a, b) {
            var c = J();
            try {
                return M(a)(b)
            } catch (d) {
                K(c);
                if (d !== d + 0)
                    throw d;
                N(1, 0)
            }
        }
        function kc(a, b, c, d, e, f) {
            var h = J();
            try {
                return M(a)(b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function pc(a, b, c, d, e, f, h, k) {
            var m = J();
            try {
                return M(a)(b, c, d, e, f, h, k)
            } catch (l) {
                K(m);
                if (l !== l + 0)
                    throw l;
                N(1, 0)
            }
        }
        function qc(a, b, c, d, e, f, h, k, m, l, p, q) {
            var B = J();
            try {
                return M(a)(b, c, d, e, f, h, k, m, l, p, q)
            } catch (t) {
                K(B);
                if (t !== t + 0)
                    throw t;
                N(1, 0)
            }
        }
        function Hc(a, b, c, d, e, f, h, k, m, l, p) {
            var q = J();
            try {
                M(a)(b, c, d, e, f, h, k, m, l, p)
            } catch (B) {
                K(q);
                if (B !== B + 0)
                    throw B;
                N(1, 0)
            }
        }
        function Ic(a, b, c, d, e, f, h, k, m, l, p, q, B, t, r, u) {
            var G = J();
            try {
                M(a)(b, c, d, e, f, h, k, m, l, p, q, B, t, r, u)
            } catch (R) {
                K(G);
                if (R !== R + 0)
                    throw R;
                N(1, 0)
            }
        }
        function dc(a, b, c) {
            var d = J();
            try {
                return M(a)(b, c)
            } catch (e) {
                K(d);
                if (e !== e + 0)
                    throw e;
                N(1, 0)
            }
        }
        function Jc(a, b, c, d, e, f) {
            var h = J();
            try {
                Ze(a, b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function uc(a, b, c, d) {
            var e = J();
            try {
                return af(a, b, c, d)
            } catch (f) {
                K(e);
                if (f !== f + 0)
                    throw f;
                N(1, 0)
            }
        }
        function wc(a, b) {
            var c = J();
            try {
                return cf(a, b)
            } catch (d) {
                K(c);
                if (d !== d + 0)
                    throw d;
                N(1, 0)
            }
        }
        function Kc(a, b, c, d, e, f) {
            var h = J();
            try {
                $e(a, b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function Lc(a, b, c, d) {
            var e = J();
            try {
                df(a, b, c, d)
            } catch (f) {
                K(e);
                if (f !== f + 0)
                    throw f;
                N(1, 0)
            }
        }
        function xc(a, b, c) {
            var d = J();
            try {
                return ef(a, b, c)
            } catch (e) {
                K(d);
                if (e !== e + 0)
                    throw e;
                N(1, 0)
            }
        }
        function vc(a) {
            var b = J();
            try {
                return Ye(a)
            } catch (c) {
                K(b);
                if (c !== c + 0)
                    throw c;
                N(1, 0)
            }
        }
        function tc(a, b, c, d, e) {
            var f = J();
            try {
                return gf(a, b, c, d, e)
            } catch (h) {
                K(f);
                if (h !== h + 0)
                    throw h;
                N(1, 0)
            }
        }
        function sc(a, b, c, d, e, f) {
            var h = J();
            try {
                return hf(a, b, c, d, e, f)
            } catch (k) {
                K(h);
                if (k !== k + 0)
                    throw k;
                N(1, 0)
            }
        }
        function rc(a, b, c, d, e, f, h) {
            var k = J();
            try {
                return bf(a, b, c, d, e, f, h)
            } catch (m) {
                K(k);
                if (m !== m + 0)
                    throw m;
                N(1, 0)
            }
        }
        function yc(a, b, c, d) {
            var e = J();
            try {
                return ff(a, b, c, d)
            } catch (f) {
                K(e);
                if (f !== f + 0)
                    throw f;
                N(1, 0)
            }
        }
        y.addRunDependency = fb;
        y.removeRunDependency = gb;
        y.cwrap = (a,b,c,d)=>{
            var e = !c || c.every(f=>"number" === f || "boolean" === f);
            return "string" !== b && e && !d ? y["_" + a] : (...f)=>We(a, b, c, f)
        }
        ;
        y.FS_createPreloadedFile = $d;
        y.FS_unlink = a=>ye(a);
        y.FS_createPath = Ge;
        y.FS_createDevice = W;
        y.FS_createDataFile = (a,b,c,d,e,f)=>{
            Zd(a, b, c, d, e, f)
        }
        ;
        y.FS_createLazyFile = Je;
        var jf;
        eb = function lf() {
            jf || mf();
            jf || (eb = lf)
        }
        ;
        function nf(a=[]) {
            var b = Xe;
            I += 1;
            a.unshift(ta);
            var c = a.length
              , d = Uc(4 * (c + 1))
              , e = d;
            a.forEach(h=>{
                x()[e >> 2] = Ve(h);
                e += 4
            }
            );
            x()[e >> 2] = 0;
            try {
                var f = b(c, d);
                Yb(f, !0)
            } catch (h) {
                Yc(h)
            }
        }
        function mf() {
            var a = sa;
            function b() {
                if (!jf && (jf = !0,
                y.calledRun = !0,
                !Ra && (Za(),
                A || bb(Va),
                ka(y),
                y.onRuntimeInitialized?.(),
                of && nf(a),
                !A))) {
                    if (y.postRun)
                        for ("function" == typeof y.postRun && (y.postRun = [y.postRun]); y.postRun.length; ) {
                            var c = y.postRun.shift();
                            Xa.unshift(c)
                        }
                    bb(Xa)
                }
            }
            if (!(0 < cb))
                if (A)
                    ka(y),
                    Za(),
                    startWorker(y);
                else {
                    if (y.preRun)
                        for ("function" == typeof y.preRun && (y.preRun = [y.preRun]); y.preRun.length; )
                            Ta.unshift(y.preRun.shift());
                    bb(Ta);
                    0 < cb || (y.setStatus ? (y.setStatus("Running..."),
                    setTimeout(function() {
                        setTimeout(function() {
                            y.setStatus("")
                        }, 1);
                        b()
                    }, 1)) : b())
                }
        }
        if (y.preInit)
            for ("function" == typeof y.preInit && (y.preInit = [y.preInit]); 0 < y.preInit.length; )
                y.preInit.pop()();
        var of = !0;
        y.noInitialRun && (of = !1);
        mf();
        moduleRtn = ma;

        return moduleRtn;
    }
    );
}
)();
if (typeof exports === 'object' && typeof module === 'object')
    module.exports = Rapfi;
else if (typeof define === 'function' && define['amd'])
    define([], ()=>Rapfi);
var isPthread = globalThis.self?.name === 'em-pthread';
var isNode = typeof globalThis.process?.versions?.node == 'string';
if (isNode)
    isPthread = require('worker_threads').workerData === 'em-pthread'

// When running as a pthread, construct a new instance on startup
isPthread && Rapfi();
