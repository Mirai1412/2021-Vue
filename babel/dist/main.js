(() => {
    var o = {
            985: (o, e) => {
                e.hello = (o = "user") => `Hello, ${o}`
            }
        },
        e = {};
    function r(l) {
        var s = e[l];
        if (void 0 !== s) 
            return s.exports;
        var t = e[l] = {
            exports: {}
        };
        return o[l](t, t.exports, r),
        t.exports
    }(() => {
        "use strict";
        const o = r(985);
        console.log(8),
        console.log(o.hello("ABC"))
    })()
})();