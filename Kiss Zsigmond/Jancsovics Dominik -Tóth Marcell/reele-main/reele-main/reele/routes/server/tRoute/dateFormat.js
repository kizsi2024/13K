async function dateFormat(g, c, k) {
    function l(a, b) { a.setHours(a.getHours() + parseFloat(b)); return a } function m(a, b) { var c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "); return b ? c[a.getDay()].substr(0, 3) : c[a.getDay()] } function n(a, b) { var c = "January February March April May June July August September October November December".split(" "); return b ? c[a.getMonth()].substr(0, 3) : c[a.getMonth()] } var d = {
        d: function () { var a = this.getDate(); return 9 < a ? a : "0" + a }, D: function () { return m(this, !0) }, j: function () { return this.getDate() },
        l: function () { return m(this) }, N: function () { return this.getDay() + 1 }, S: function () { var a = this.getDate(); return /^1[0-9]$/.test(a) ? "th" : /1$/.test(a) ? "st" : /2$/.test(a) ? "nd" : /3$/.test(a) ? "rd" : "th" }, w: function () { return this.getDay() }, z: function () { return Math.round(Math.abs((this.getTime() - (new Date("1/1/" + this.getFullYear())).getTime()) / 864E5)) }, W: function () { var a = new Date(this.getFullYear(), 0, 1); return Math.ceil(((this - a) / 864E5 + a.getDay() + 1) / 7) }, F: function () { return n(this) }, m: function () {
            var a = this.getMonth() +
                1; return 9 < a ? a : "0" + a
        }, M: function () { return n(this, !0) }, n: function () { return this.getMonth() + 1 }, t: function () { return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getDate() }, L: function () { var a = this.getFullYear(); return 0 == a % 4 && 0 != a % 100 || 0 == a % 400 }, o: function () { return parseInt(this.getFullYear()) }, Y: function () { return parseInt(this.getFullYear()) }, y: function () { return parseInt((this.getFullYear() + "").substr(-2)) }, a: function () { return 12 <= this.getHours() ? "pm" : "am" }, A: function () {
            return 12 <= this.getHours() ?
                "PM" : "AM"
        }, B: function () { return "@" + ("00" + Math.floor((60 * ((this.getHours() + 1) % 24 * 60 + this.getMinutes()) + this.getSeconds() + .001 * this.getMilliseconds()) / 86.4)).slice(-3) }, g: function () { var a = this.getHours(); return 0 == a ? 12 : 12 >= a ? a : a - 12 }, G: function () { return this.getHours() }, h: function () { var a = this.getHours(), a = 12 >= a ? a : a - 12; return 0 == a ? 12 : 9 < a ? a : "0" + a }, H: function () { var a = this.getHours(); return 9 < a ? a : "0" + a }, i: function () { var a = this.getMinutes(); return 9 < a ? a : "0" + a }, s: function () {
            var a = this.getSeconds(); return 9 <
                a ? a : "0" + a
        }, u: function () { return this.getMilliseconds() }, e: function () { var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return 1 < a.length ? a[1] : "" }, I: function () { var a = new Date(this.getFullYear(), 0, 1), b = new Date(this.getFullYear(), 6, 1), a = Math.max(a.getTimezoneOffset(), b.getTimezoneOffset()); return this.getTimezoneOffset() < a ? 1 : 0 }, O: function () { var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return 2 < a.length ? a[2] : "" }, P: function () {
            var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);
            return 2 < a.length ? a[2].substr(0, 3) + ":" + a[2].substr(3, 2) : ""
        }, T: function () { return this.toLocaleString("en", { timeZoneName: "short" }).split(" ").pop() }, Z: function () { return 60 * this.getTimezoneOffset() }, c: function () { return l(new Date(this), -(this.getTimezoneOffset() / 60)).toISOString() }, r: function () { return l(new Date(this), -(this.getTimezoneOffset() / 60)).toISOString() }, U: function () { return this.getTime() / 1E3 | 0 }
    }, e = {
        commonLogFormat: "d/M/Y:G:i:s", exif: "Y:m:d G:i:s", isoYearWeek: "Y\\WW", isoYearWeek2: "Y-\\WW",
        isoYearWeekDay: "Y\\WWj", isoYearWeekDay2: "Y-\\WW-j", mySQL: "Y-m-d h:i:s", postgreSQL: "Y.z", postgreSQL2: "Yz", soap: "Y-m-d\\TH:i:s.u", soap2: "Y-m-d\\TH:i:s.uP", unixTimestamp: "@U", xmlrpc: "Ymd\\TG:i:s", xmlrpcCompact: "Ymd\\tGis", wddx: "Y-n-j\\TG:i:s"
    }, h = {
        AMERICAN: "F j, Y", AMERICANSHORT: "m/d/Y", AMERICANSHORTWTIME: "m/d/Y h:i:sA", ATOM: "Y-m-d\\TH:i:sP", COOKIE: "l, d-M-Y H:i:s T", EUROPEAN: "j F Y", EUROPEANSHORT: "d.m.Y", EUROPEANSHORTWTIME: "d.m.Y H:i:s", ISO8601: "Y-m-d\\TH:i:sO", LEGAL: "j F Y", RFC822: "D, d M y H:i:s O",
        RFC850: "l, d-M-y H:i:s T", RFC1036: "D, d M y H:i:s O", RFC1123: "D, d M Y H:i:s O", RFC2822: "D, d M Y H:i:s O", RFC3339: "Y-m-d\\TH:i:sP", RSS: "D, d M Y H:i:s O", W3C: "Y-m-d\\TH:i:sP"
    }, f = { "pretty-a": "g:i.sA l jS \\o\\f F, Y", "pretty-b": "g:iA l jS \\o\\f F, Y", "pretty-c": "n/d/Y g:iA", "pretty-d": "n/d/Y", "pretty-e": "F jS - g:ia", "pretty-f": "g:iA", "pretty-g": "F jS, Y", "pretty-h": "F jS, Y g:mA" }; if (c) {
        if ("compound" == c) { if (!1 === k) return e; var d = {}, b; for (b in e) d[b] = dateFormat(g, e[b]); return d } if (e[c]) return dateFormat(g,
            e[c], k); if ("constants" == c) { if (!1 === k) return h; d = {}; for (b in h) d[b] = dateFormat(g, h[b]); return d } if (h[c]) return dateFormat(g, h[c], k); if ("pretty" == c) { if (!1 === k) return f; d = {}; for (b in f) d[b] = dateFormat(g, f[b]); return d } if (f[c]) return dateFormat(g, f[c], k); e = c.split(""); h = ""; for (b in e) (f = e[b]) && /[a-z]/i.test(f) && !/\\/.test(h + f) && (e[b] = d[f] ? d[f].apply(g) : f), h = e[b]; return e.join("").replace(/\\/g, "")
    } return g
};

exports.dateFormat = dateFormat;