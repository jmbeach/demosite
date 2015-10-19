function Calculator(t) {
    var a = this;
    this.data = t,
    $.each(["uniques", "cr", "aov"], function (t, e) {
        a[e] = parseInt(a.data[e], 10);
    }),
    $.each(["market", "vertical"],
        function (t, e) {
            a[e] = parseFloat(a.data[e], 10);
        }),
    this.cr /= 1e3,
    this.revenue = Math.round(this.uniques * this.cr * this.aov),
    this.percent = (this.market + this.vertical) / 2,
    this.uplift = Math.round(this.percent / 100 * this.revenue);
}
function addThousandsSeps(t) {
    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
Calculator.MARKETS = [
    { text: "Worldwide", value: 9 },
    { text: "North America", value: 11.5 },
    { text: "Central & South America", value: 9.5 },
    { text: "Middle East", value: 8.25 },
    { text: "Australia & Oceania", value: 10.5 },
    { text: "Europe", value: 10 },
    { text: "Africa", value: 8.5 },
    { text: "Asia", value: 10 }],
Calculator.VERTICALS = [
    { text: "Everything (department store)", value: 11.5 },
    { text: "Clothing & Apparel", value: 9.5 },
    { text: "Electronics", value: 8.25 },
    { text: "Office Supplies", value: 11 },
    { text: "Travel", value: 9.25 },
    { text: "Sporting Goods & Outdoors", value: 9.75 },
    { text: "Jewelery & Accessories", value: 10.5 },
    { text: "Arts & Crafts", value: 8.5 },
    { text: "Digital Goods", value: 11.5 },
    { text: "Furniture", value: 10.75 },
    { text: "Home & Garden", value: 9.5 },
    { text: "Specialty Goods", value: 8.25 },
    { text: "Other / Not Listed", value: 8 }],
Calculator.UNIQUES = {
    display: function (t, a, e) {
        return string = addThousandsSeps( e.toString()),
                t >= e ? string = "" + string + " or less" : e >= a
                && (string = "" + string + " or more"),
                string;
    }
}, Calculator.CR = { display: function (t, a, e) { return (e / 10).toString() + "%"; } }, Calculator.AOV = { display: function (t, a, e) { var n = "$" + addThousandsSeps(e); return t >= e ? n += " or less" : e >= a && (n += " or more"), n; } }, $.fn.serializeObject = function () { var t = {}, a = this.serializeArray(); return $.each(a, function () { void 0 !== t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""; }), t; }, $.fn.calculator = function () { function t(t, a) { t.append("<option></option>"), $.each(a, function (a, e) { t.append('<option value="' + e.value + '">' + e.text + "</option>"); }); } function a(t, a) { var e = $("<strong></strong>"); t.parent().find("label").append(e), t.on("change input", function () { var n = parseInt(t.val(), 10), r = parseInt(t.attr("min"), 10), i = parseInt(t.attr("max"), 10); e.text(a.display(r, i, n)); }).change(); } var e = $(this), n = $("#calculator-wait"), r = $("#calculator-results"); return t(e.find("#market"), Calculator.MARKETS.sort()), t(e.find("#vertical"), Calculator.VERTICALS.sort()), a(e.find("#uniques"), Calculator.UNIQUES), a(e.find("#cr"), Calculator.CR), a(e.find("#aov"), Calculator.AOV), e.validate({ submitHandler: function (t) { t = $(t); var a = new Calculator(t.serializeObject()); return r.find(".calculator-uplift").text("$" + addThousandsSeps(a.uplift)), t.fadeOut(250, function () { n.fadeIn(250, function () { setTimeout(function () { n.fadeOut(250, function () { r.fadeIn(250); }); }, 1500); }); }), !1; } }), e; }, $("#calculate-again").on("click", function () { return $("#calculator-results").fadeOut(250, function () { $("#calculator-form").fadeIn(250); }), !1; });