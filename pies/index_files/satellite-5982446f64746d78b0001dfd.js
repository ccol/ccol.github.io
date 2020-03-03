_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
    try {
        var e = document,
            t = "2m",
            n = "afc|afl|bdini|bitza|bmovi|bmusi|bronc|bulld|bvide|caree|carlt|carsh|colli|cowbo|drago|essen|frema|gamea|geelo|gob|goldc|got|gwsgi|hawth|lifes|lions|media|mfc|mobil|mstor|myt|newca|nmfc|nrl|nswrl|parra|penri|porta|qrl|rabbi|racin|richm|roost|saint|seaea|shark|skyne|smart|sport|sydne|t|tbawa|tbwom|tglob|thewa|tinte|tippi|titan|tivis|tmedi|tradi|tsupe|ttowe|ttv|tuser|twhol|uat1m|westc|weste|wests|women|white",
            r = {
                bigpond: "b",
                telstra: "t",
                melbourne: "m",
                business: "b"
            },
            i = e.location.protocol + "//assets.kampyle.com/clients/7675057/sites/",
            s = new RegExp(Object.keys(r).join("|"), "gi"),
            o, u = typeof k_pageParams === "object" && k_pageParams.button && k_pageParams.button.site_name ? k_pageParams.button.site_name : e.location.hostname.replace(s, function(e) {
                return r[e];
            }).replace(/(.com.au$|.com$|.net$)|(^www.|^ww2.)|[^\w\s]/gi, "").substr(0, 5);
        if (n.indexOf(u.toLowerCase()) != -1) {
            o = e.createElement("script");
            o.setAttribute("type", "text/javascript");
            o.setAttribute("src", i + u + ".js" + "?rev=" + t);
            e.getElementsByTagName("head")[0].appendChild(o);
        }
      if(_satellite.getVar("tmh")("devstack.afl") || _satellite.getVar("tmh")("testafl.com")){
        _satellite.loadScriptOnce("https://nebula-cdn.kampyle.com/wau/5271/onsite/embed.js");
      }
    } catch (ignore) {}
})();
});
