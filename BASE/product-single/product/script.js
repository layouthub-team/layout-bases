window.HUB = window.HUB || {};

window.HUB.formatMoney = window.HUB.formatMoney || function(t, r) {
    function n(t, r) {
        return void 0 === t ? r : t
    }

    function e(t, r, e, o) {
        if (r = n(r, 2),
            e = n(e, ","),
            o = n(o, "."),
            isNaN(t) || null == t)
            return 0;
        var a = (t = (t / 100)
                .toFixed(r))
            .split(".");
        return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (a[1] ? o + a[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var o = "",
        a = /\{\{\s*(\w+)\s*\}\}/,
        i = r || '${{amount}}';
    switch (i.match(a)[1]) {
        case "amount":
            o = e(t, 2);
            break;
        case "amount_no_decimals":
            o = e(t, 0);
            break;
        case "amount_with_comma_separator":
            o = e(t, 2, ".", ",");
            break;
        case "amount_with_space_separator":
            o = e(t, 2, " ", ",");
            break;
        case "amount_with_period_and_space_separator":
            o = e(t, 2, " ", ".");
            break;
        case "amount_no_decimals_with_comma_separator":
            o = e(t, 0, ".", ",");
            break;
        case "amount_no_decimals_with_space_separator":
            o = e(t, 0, ".", "");
            break;
        case "amount_with_space_separator":
            o = e(t, 2, ",", "");
            break;
        case "amount_with_apostrophe_separator":
            o = e(t, 2, "'", ".")
    }
    return i.replace(a, o)
};