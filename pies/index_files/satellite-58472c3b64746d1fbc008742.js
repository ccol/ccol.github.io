if (typeof VBM != 'object') { var VBM = {}; }
onpagedata = typeof onpagedata == 'object' ? onpagedata : '';

function reportingBeacon(onpagedata) {

    //VBM.env = 'test';
    VBM.website = getWebsiteName();
    //VBM.website = getWebsiteNameTest();
    VBM.section = 'AFL Clubs';
    VBM.subsection = VBM.website;
    VBM.article_prefix = 'AFLNews';
    VBM.newspath = 'news';
    VBM.homepage = '/';
    VBM.pagetitle_start = '';
    VBM.pagetitle_end = '';
    VBM.newspath = VBM.newspath ? VBM.newspath : 'news';
    VBM.reportsuites = VBM.reportsuites ? VBM.reportsuites : 'telstrabpbigpondprd,telstrabpaflprd';
    VBM.appendTitle = false;
  
    switch (VBM.website) {
        case 'AFL':
            VBM.section = 'AFL.com'
            VBM.pagetitle_end = ' - AFL.com.au';
            VBM.subsection = '';
            break;

        case 'AFL Dream Team':
            VBM.section = 'AFL Dream Team'
            VBM.section = 'AFL.com';
            //unset subsection for afl.com. The subsection will be the directory structure . TBC
            VBM.subsection = '';
            break;

        case 'AFL Tipping':
            VBM.section = 'AFL Tipping'
            VBM.section = 'AFL.com';
            //unset subsection for afl.com. The subsection will be the directory structure . TBC
            VBM.subsection = '';
            break;

        case 'GWS':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:GWS';
            break;

        case 'Adelaide Crows':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:AC';
            break;
        case 'Brisbane Lions':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:BL';
            break;
        case 'Carlton Blues':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:CB';
            break;
        case 'Collingwood Magpies':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:CM';
            break;
        case 'Essendon Bombers':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:EB';
            break;
        case 'Fremantle':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:FRE';
            break;
        case 'Geelong Cats':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:GC';
            break;
        case 'Gold Coast':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:GCS';
            break;
        case 'Hawthorn Hawks':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:HH';
            break;
        case 'Melbourne Demons':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:NMD';
            break;
        case 'Kangaroos':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:KAN';
            break;
        case 'Richmond Tigers':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:RT';
            break;
        case 'St.Kilda Saints':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:SKS';
            break;
        case 'Sydney Swans':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:SS';
            break;
        case 'West Coast Eagles':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:WCE';
            break;
        case 'Western Bulldogs':
            VBM.section = 'AFL Clubs';
            VBM.article_prefix = 'AFLClubNews:WB';
            break;

        default:
            VBM.section = 'AFL Clubs';
            break;

    }
    // Define first levels of hierarchy
    VBM.hierarchy = 'BP|Sport|AFL|' + VBM.section;

    // Put code here to pull out the page name and any additional levels of hierarchy,
    // and pop it on the end of the hierarchy.
    // By default this grabs the document title, if it exists.
    VBM.dir_level1 = '';
    VBM.hierarchySuffix = '';

    if (VBM.subsection) {
        VBM.hierarchy = VBM.hierarchy + '|' + VBM.subsection;
    }


    // Home page
    if (window.location.pathname === '/' ||
        window.location.pathname === '/index.html' ||
        window.location.pathname === VBM.homepage
        //Test stubs
        ||
        window.location.pathname === '/AFL/' ||
        window.location.pathname === '/Brisbane/') {
        VBM.hierarchy = VBM.hierarchy + '|Homepage';
    } else {

        VBM.pathArray = window.location.pathname.split('/');

        //If test env - remove the first level

        if (VBM.env == 'test') {

            VBM.pathArray.shift();

        }

        if (VBM.pathArray[1]) {
            VBM.hierarchySuffix = '|' + VBM.pathArray[1].replace('.html', '');
        }
        if (VBM.pathArray[2]) {
            VBM.hierarchySuffix += '|' + VBM.pathArray[2].replace('.html', '');
        }
        if (VBM.pathArray[3]) {
            VBM.hierarchySuffix += '|' + VBM.pathArray[3].replace('.html', '');
        }
        if (VBM.pathArray[4]) {
            VBM.hierarchySuffix += '|' + VBM.pathArray[4].replace('.html', '');
        }
    }

    // Use Omniture's s.manageVars() to clear all the variables we set here.
    // If using AJAX methods where the page isn't re-loaded, you should do this
    // for ALL Omniture variables using:
    // s.manageVars("clearVars")
    s.manageVars("clearVars");
    if (s.getQueryParam("utm_source,utm_medium,utm_campaign,utm_term") != "")
        s.campaign = (s.getQueryParam("utm_source") || "None") + "|" + (s.getQueryParam("utm_medium") || "None") + "|" + (s.getQueryParam("utm_campaign") || "None") + "|" + (s.getQueryParam("utm_term") || "None");

    //Check for onpagedata object - set when customising on page metrics*/

    //Override the Document the page title
    if (typeof onpagedata == 'object' && onpagedata.title) {
        this.title = onpagedata.title;
    } else {
        this.title = sanitisePageName(document.title);
    }
    //Override the dir path with custom category
    if (typeof onpagedata == 'object' && onpagedata.category) {
        VBM.hierarchySuffix = '|' + onpagedata.category;
    }
    if (VBM.appendTitle === true) {
        VBM.hierarchySuffix = VBM.hierarchySuffix + '|' + this.title;
    }

    if (typeof onpagedata == 'object' && onpagedata.article) {
        VBM.custom_article = onpagedata.article;
    }

    //Open Text CMS populates artciles page woth the following meta tages:
    //<meta name="headline" content="Bartel scoffs at rib rumours and other stuff">
    //<meta name="author" content="Leigh,Matthews">
    //<meta name="datePublished" content="e6b5f1d084ad3310VgnVCM10000081fea8c0RCRD">
    if (getMetaValue('articleTitle')) {
        var article = getMetaValue('articleTitle');
        // get Article for womens
        if (document.referrer.indexOf('womens') >= 0) {
            s.prop29 = s.eVar61 = "AFLW:" + article;
        } else {
            s.prop29 = s.eVar61 = VBM.article_prefix + ":" + article;
        }
        VBM.hierarchySuffix = '|News|' + article;

        // get Article author
        if (getMetaValue('authorName')) {
            s.prop41 = s.eVar53 = getMetaValue('authorName');

        }
        //get Artcile ID
        if (getMetaValue('articleDate')) {
            s.prop43 = s.eVar56 = getMetaValue('articleDate');

        }
        //Get Article Keywords
        if (getMetaValue('keywords')) {
            s.prop42 = s.eVar55 = getMetaValue('keywords');

        }

    }

    //Match Centre
    //Open Text CMS populates artciles page woth the following meta tages:
    //<meta name="omni-match-name" content="Collingwood Vs Geelong Cats - Rd 28">
    /*<meta name="omni-match-sds-id" content="CD_M20110142801">

        <meta name="omni-match-round-id" content="CD_R201101428">
        <meta name="omni-match-season-id" content="CD_S2011014">
        <meta name="omni-match-home-team" content="coll">
        <meta name="omni-match-away-team" content="geel">
    <!-- END Omniture / Google / Neilson Analytics Meta tags -->

    <meta name="title" content="Collingwood Vs Geelong Cats - Rd 28">*/
    //prop52/evar60

    if (getMetaValue('omni-match-sds-id')) {
        s.prop53 = s.eVar62 = getMetaValue('omni-match-sds-id');

    }
    //Grab Taxonmy data TBC
    if (getMetaValue('omni-taxonomy')) {
        s.prop52 = eVar60 = getMetaValue('omni-taxonomy');

    }

    //Internal search
    //Do we know the page url?
    if (s.getQueryParam('query')) {
        s.eVar22 = s.getQueryParam('query');
    }

    if (s_readCookie('name') != "") {
        s.eVar28 = "Registered-AFL";
    } else {
        s.eVar28 = "Non-Registered-AFL";
    }


    if (/True/i.test(_satellite.readCookie("darkLaunchOffer"))) {
        s.contextData['DL'] = "DL-opt-in-AFL";
    } else {
        s.contextData['DL'] = "non-DL-opt-in-AFL";
    }
    // Error Page code (404)
    //if (/Page Not Found/i.test(document.title) ) {
    // s.pageType="errorPage";
    // }

    if (document.querySelectorAll(".c-article-sponsor-block").length > 0 &&  document.querySelectorAll(".c-article-sponsor-block__heading") > 0) {
        var adName = document.querySelectorAll(".c-article-sponsor-block__heading")[0].getAttribute("data-insights-region");
        adName += "|" + document.querySelectorAll(".c-article-sponsor-block__heading")[0].textContent;
        adName += "|" + $('.c-article-sponsor-block img').attr('alt');
        _satellite.notify("***ad display:" + adName);
        s.prop20 = adName;
    }

    s.prop17 = _satellite.getVar("dtm_ver");

    if (document.getElementsByTagName('body')[0].getAttribute('data-insights-breakpoint')) {
        s.prop21 = document.getElementsByTagName('body')[0].getAttribute('data-insights-breakpoint');
    }
    //Staging test stub
    //VBM.hierarchySuffix = VBM.hierarchySuffix.replace(/^\|afl\|/,'');

    VBM.hierarchy = VBM.hierarchy + VBM.hierarchySuffix;
    //alert(VBM.hierarchy);

    // To capture # value in URL
    if (/stats-pro/.test(location.href) && location.hash.length < 70) {
        if (location.hash.replace(/[#,\/]/g, '').length == 0) {
            VBM.hierarchy += "|Home";
        } else {
            VBM.hierarchy += "|" + /#\/(.*)/g.exec(location.hash)[1];
        }
    }

    // Report suites, if they exist
    if (VBM.reportsuites) {
        s.un = VBM.reportsuites;
    }
    // Split out pageHierarchy into the appropriate props and vars
    VBM.hierarchy = VBM.hierarchy.split('|');

    var i;
    for (i = 0; i < VBM.hierarchy.length; i += 1) {

        switch (i) {
            case 0:
                s.prop1 = VBM.hierarchy[i];
                s.eVar1 = VBM.hierarchy[i];
                break;
            case 1:
                s.prop2 = VBM.hierarchy[i];
                s.eVar2 = VBM.hierarchy[i];
                break;
            case 2:
                s.prop3 = VBM.hierarchy[i];
                s.eVar3 = VBM.hierarchy[i];
                break;
            case 3:
                s.channel = VBM.hierarchy[i];
                s.eVar4 = VBM.hierarchy[i];
                break;
            case 4:
                s.prop4 = VBM.hierarchy[i];
                s.eVar5 = VBM.hierarchy[i];
                break;
            case 5:
                s.prop5 = VBM.hierarchy[i];
                s.eVar15 = VBM.hierarchy[i];
                break;
                // To Be Confirmed - omn vars have not been created
            case 6:
                s.prop44 = VBM.hierarchy[i];
                s.eVar52 = VBM.hierarchy[i];
        }

        // Build up the hierarchy delimited by pipes
        if (i !== 0) {
            s.hier1 = s.hier1 + '|'
        }
        s.hier1 = (s.hier1 + VBM.hierarchy[i]).replace(/\|$/, '');

        // s.pageName skips the second level and delimit by colon
        if (i !== 1) {
            if (i !== 0) {
                s.pageName = s.pageName + ':';
            }
            s.pageName = (s.pageName + VBM.hierarchy[i]).replace(/:$/, '');
        }
    }
    /*Custom event tracking*/
    if (VBM.event) {
        if (s.events === null) {
            s.events = s.events + ',' + VBM.event;
        } else {
            s.events = VBM.event;
        }
    }

    var s_code = s.t();
    if (s_code) {
        document.write(s_code);
    }

    /*Functions for VBM Object */

    function getWebsiteName() {
        var hostname = window.location.hostname.replace(/^(www\.|m\.)/, '');

        aflSitesArray = new Object();
        aflSitesArray['afl.com.au'] = 'AFL';
        aflSitesArray['dreamteam.afl.com.au'] = 'AFL Dream Team';
        aflSitesArray['tipping.afl.com.au'] = 'AFL Tipping';
        aflSitesArray['afc.com.au'] = 'Adelaide Crows';
        aflSitesArray['lions.com.au'] = 'Brisbane Lions';
        aflSitesArray['carltonfc.com.au'] = 'Carlton Blues';
        aflSitesArray['collingwoodfc.com.au'] = 'Collingwood Magpies';
        aflSitesArray['essendonfc.com.au'] = 'Essendon Bombers';
        aflSitesArray['fremantlefc.com.au'] = 'Fremantle';
        aflSitesArray['geelongcats.com.au'] = 'Geelong Cats';
        aflSitesArray['goldcoastfc.com.au'] = 'Gold Coast';
        aflSitesArray['gwsgiants.com.au'] = 'GWS';
        aflSitesArray['hawthornfc.com.au'] = 'Hawthorn Hawks';
        aflSitesArray['melbournefc.com.au'] = 'Melbourne Demons';
        aflSitesArray['nmfc.com.au'] = 'Kangaroos';
        aflSitesArray['portadelaidefc.com.au'] = 'Port Adelaide';
        aflSitesArray['richmondfc.com.au'] = 'Richmond Tigers';
        aflSitesArray['saints.com.au'] = 'St.Kilda Saints';
        aflSitesArray['sydneyswans.com.au'] = 'Sydney Swans';
        aflSitesArray['westcoasteagles.com.au'] = 'West Coast Eagles';
        aflSitesArray['westernbulldogs.com.au'] = 'Western Bulldogs';

        if (aflSitesArray[hostname]) {
            return aflSitesArray[hostname];
        } else {
            VBM.reportsuites = 'telstrabpafldev';
        //add the sandpit domains                   
        aflSitesArray['afl.uat1.testafl.com'] = 'AFL';
        aflSitesArray['www-afc-sandpit001.devstack.afl'] = 'Adelaide Crows';
        aflSitesArray['www-lions-sandpit001.devstack.afl'] = 'Brisbane Lions';
        aflSitesArray['www-carltonfc-sandpit001.devstack.afl'] = 'Carlton Blues';
        aflSitesArray['www-collingwoodfc-sandpit001.devstack.afl'] = 'Collingwood Magpies';
        aflSitesArray['www-essendonfc-sandpit001.devstack.afl'] = 'Essendon Bombers';
        aflSitesArray['www-fremantlefc-sandpit001.devstack.afl'] = 'Fremantle';
        aflSitesArray['www-geelongcats-sandpit001.devstack.afl'] = 'Geelong Cats';
        aflSitesArray['www-goldcoastfc-sandpit001.devstack.afl'] = 'Gold Coast';
        aflSitesArray['www-gwsgiants-sandpit001.devstack.afl'] = 'GWS';
        aflSitesArray['www-hawthornfc-sandpit001.devstack.afl'] = 'Hawthorn Hawks';
        aflSitesArray['www-melbournefc-sandpit001.devstack.afl'] = 'Melbourne Demons';
        aflSitesArray['www-nmfc-sandpit001.devstack.afl'] = 'Kangaroos';
        aflSitesArray['www-portadelaidefc-sandpit001.devstack.afl'] = 'Port Adelaide';
        aflSitesArray['www-richmondfc-sandpit001.devstack.afl'] = 'Richmond Tigers';
        aflSitesArray['www-saints-sandpit001.devstack.afl'] = 'St.Kilda Saints';
        aflSitesArray['www-sydneyswans-sandpit001.devstack.afl'] = 'Sydney Swans';
        aflSitesArray['www-westcoasteagles-sandpit001.devstack.afl'] = 'West Coast Eagles';
        aflSitesArray['www-westernbulldogs-sandpit001.devstack.afl'] = 'Western Bulldogs';

         return aflSitesArray[hostname] || "default";
        }


    }

    function getWebsiteNameTest() {
        var hostname = window.location;

        var path = window.location.pathname;



        if (path.match(/\/AFL/)) {
            return 'AFL';
        };
        if (path.match(/\/Brisbane/)) {
            return 'Brisbane Lions';
        };



    }

    // Method to strip any funny stuff out of the pageName
    function sanitisePageName(string) {
        // Chop off the title prefix bit - if set
        string = string.replace(VBM.pagetitle_start, '');
        string = string.replace(VBM.pagetitle_end, '');
        // replace | with hyphen.
        string = string.replace(/[|]/g, '-');
        //trim
        string = string.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        return string;
    };


    function getQueryString() {
        var result = {},
            queryString = location.search.substring(1),
            re = /([^&=]+)=([^&]*)/g,
            m;

        while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }

        return result;
    }

    function reportingEvent(actionEvent, productName, productPrice, purchaseID) {

        if (actionEvent == undefined) {
            VBM.doEvents = 'false';
        } else {
            VBM.doEvents = 'true';
            switch (actionEvent) {
                case ('title'):
                    VBM.event = 'prodView';
                    VBM.productName = productName;
                    VBM.productPrice = '';
                    break;

                case ('checkout'):
                    VBM.event = 'scAdd,scOpen,scCheckout';
                    VBM.productName = productName;
                    VBM.productPrice = '';
                    break;

                case ('purchase'):
                    VBM.event = 'purchase';
                    VBM.productName = productName;
                    VBM.productPrice = productPrice;
                    VBM.purchaseID = purchaseID;
                    break;

            }
        }
    }


}

s.manageVars = new Function("c", "l", "f", "" +
    "var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa" +
    "geName,purchaseID,channel,server,pageType,campaign,state,zip,events" +
    ",products,transactionID';for(var n=1;n<51;n++){vl+=',prop'+n+',eVar" +
    "'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl" +
    "it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l" +
    "a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}" +
    "}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0" +
    ");return true;}else{return false;}");
s.clearVars = new Function("t", "var s=this;s[t]='';");
s.lowercaseVars = new Function("t", "" +
    "var s=this;if(s[t]){s[t]=s[t].toString();s[t]=s[t].toLowerCase();}");

function omnClickEvent() {

    s.manageVars('clearVars');

    s.un = VBM.reportsuites;
    s.linkTrackVars = '';
    if (VBM.ajax_eVar) {
        for (e in VBM.ajax_eVar) {

            s.linkTrackVars = s.linkTrackVars + e + ',';
            s[e] = VBM.ajax_eVar[e];
        }
    }
    if (VBM.ajax_prop) {
        for (p in VBM.ajax_prop) {

            s.linkTrackVars = s.linkTrackVars + p + ',';
            s[p] = VBM.ajax_prop[p];

        }
    }
    if (VBM.ajax_event) {
        for (t in VBM.ajax_event) {

            s.linkTrackVars = s.linkTrackVars + 'events' + ',';
            s.events = VBM.ajax_event[t];
            s.linkTrackEvents = VBM.ajax_event[t];
        }
    }

    var s_code = s.tl(this, 'o');

    if (s_code) {
        document.write(s_code);
    }
}

function trackOmnEvent(event) {

    s.manageVars('clearVars');

    s.un = VBM.reportsuites;
    s.linkTrackVars = 'events,eVar61,eVar53,eVar55';
    var type = '';

    switch (event) {
        case 'fblike':
            s.linkTrackEvents = "event53";
            s.events = 'event53';
            type = 'Facebook Like';
            break;
        case 'retweet':
            s.linkTrackEvents = "event54";
            s.events = 'event54';
            type = 'Retweet';

            break;

    }

    if (typeof VBM == 'object') {
        s.eVar61 = getMetaValue('headline');
        s.eVar53 = getMetaValue('author');
        s.eVar55 = getMetaValue('keywords');
    }

    s.tl(this, 'o', type);

}

function trackInterations(comment) {

    //not tracking comment for now
    s.manageVars('clearVars');
    s.un = VBM.reportsuites;
    s.linkTrackVars = 'events,eVar61,eVar53,eVar55';
    s.linkTrackEvents = "event52";
    s.events = 'event52';
    if (typeof VBM == 'object') {
        s.eVar61 = getMetaValue('headline');
        s.eVar53 = getMetaValue('author');
        s.eVar55 = getMetaValue('keywords');
    }
    var s_code = s.tl(this, 'o');

    if (s_code) {
        document.write(s_code);
    }


}

function getMetaValue(att1) {

   if (dataLayer.filter(obj => obj.event === 'articleView').length > 0) {
		
     try {
     var ret = dataLayer.filter(obj => obj.event === 'articleView')[0][att1];
     }
     catch(error) {}
    }
    return ret||"";

}

var galName = "";
var galPic = "";

function omnEvent(galName) {

    //var s = s_gi('account');
    //s.un = 'telstraglobaldev,telstrabpbigponddev,telstrabpafldev';
    s.un = 'telstraglobalprd,telstrabpbigpondprd,telstrabpaflprd';
    s.linkTrackVars = 'eVar75,events';
    s.linkTrackEvents = 'event100';
    s.events = 'event100';
    s.eVar75 = galName;

    var s_code = s.tl(true, 'o', galName);
    if (s_code) {
        document.write(s_code);
    }
}

function sendMenu(Nav_Click) {

    var path = location.pathname.substring(1, location.pathname.len);

    if (path == "") path = "Home";

    Nav_Click = path + ":" + Nav_Click.toLowerCase().trim();

    _satellite.notify("***" + Nav_Click);
    s.linkTrackVars = 'eVar51,events';
    s.linkTrackEvents = 'event2';
    s.eVar51 = Nav_Click;
    s.events = 'event2';
    s.tl(true, 'o', Nav_Click);
}

// Stats pro click listeners
if (/stats-pro/.test(location.href) && typeof jQuery.fn.on == 'function') {
    // Search field tracking
    if (typeof s != 'undefined') s.searchPerformed = false;

    jQuery(document.body).on("change", "input[class*='Search__input_']", function() {
        if (typeof s != 'undefined' && s.searchPerformed === false) {
            s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
            s.prop11 = 'D=pageName';
            s.prop68 = "Keyword Search";
            s.eVar68 = s.prop68;
            s.tl(true, 'o', "Statspro:Keyword Search");
            _satellite.notify("************" + s.eVar68);
            s.eVar68 = s.prop68 = "";
            s.searchPerformed = true;
        }
    });

    jQuery(document.body).on("click", "div[class*='TabPanel__tab_']", function() {
        if (/Compare/i.test(location.hash)) {
            var tabName = jQuery(this).text();
            if (typeof tabName == 'string' && tabName != '') tabName = tabName.toLowerCase();
            else tabName = 'unknown tab';
            // Custom renaming
            if (/multi\-player/i.test(tabName)) {
                tabName = 'multi-player';
            }
            s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
            s.prop11 = 'D=pageName';
            s.prop68 = "tab click:" + tabName;
            s.eVar68 = s.prop68;
            s.tl(true, 'o', "Statspro:Compare:Tab Click");
            _satellite.notify("************" + s.eVar68);
            s.eVar68 = s.prop68 = "";
        }
        if (/discover\/CD_/i.test(location.hash)) {
            var tabName = jQuery(this).text();
            if (typeof tabName == 'string' && tabName != '') tabName = tabName.toLowerCase();
            else tabName = 'unknown tab';
            // Custom renaming

            s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
            s.prop11 = 'D=pageName';
            s.prop68 = "tab click:" + tabName;
            s.eVar68 = s.prop68;
            s.tl(true, 'o', "Statspro:Player:Tab Click");
            _satellite.notify("************" + s.eVar68);
            s.eVar68 = s.prop68 = "";
        }
    });

    jQuery(document.body).on("click", "button[class*='AtAGlance__toggle-item_']", function() {
        if (/discover\/CD_/i.test(location.hash)) {
            var tabName = jQuery(this).text();
            if (typeof tabName == 'string' && tabName != '') tabName = tabName.toLowerCase();
            else tabName = 'unknown tab';
            // Custom renaming

            s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
            s.prop11 = 'D=pageName';
            s.prop68 = "tab click:" + tabName;
            s.eVar68 = s.prop68;
            s.tl(true, 'o', "Statspro:Player:Tab Click");
            _satellite.notify("************" + s.eVar68);
            s.eVar68 = s.prop68 = "";
        }
    });

    jQuery(document.body).on("click", "button[class*='FilterBar__search-button']", function() {
        if (/discover/i.test(location.hash)) {
            try {
                var filterList = jQuery("button[class*='FilterGroup__chip']");
                var filtersUsed = "None";
                if (typeof filterList == 'object' && typeof filterList[0] == 'object') {
                    for (var i = 0; i < filterList.length; i++) {
                        var indivFilterItem = filterList[i];
                        if (jQuery(indivFilterItem).text()) {
                            if (filtersUsed == 'None') filtersUsed = jQuery(indivFilterItem).text();
                            else filtersUsed = filtersUsed += '|' + jQuery(indivFilterItem).text().toLowerCase();
                        }
                    }
                }
                // Custom renaming

                s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
                s.prop11 = 'D=pageName';
                s.prop68 = "Search:with-filters:" + filtersUsed;
                s.eVar68 = s.prop68;
                s.tl(true, 'o', "Statspro:Discover:Search");
                _satellite.notify("************" + s.eVar68);
                s.eVar68 = s.prop68 = "";
            } catch (err) {
                //
            }
        }
    });

    jQuery(document.body).on("click", "a[href*='\#/Compare?playerIds']", function() {
        try {
            s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
            s.prop11 = 'D=pageName';
            s.prop68 = "Compare:with-players:";
            s.eVar68 = s.prop68;
            s.tl(true, 'o', "Statspro:Compare:Button Click");
            _satellite.notify("************" + s.eVar68);
            s.eVar68 = s.prop68 = "";
        } catch (err) {
            //
            console.log('************ Error', err);
        }
    });

    jQuery(document.body).on("click", "button[class*='WatchSearchBar__search-button___3S5LT']", function() {
        try {
            s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
            s.prop11 = 'D=pageName';
            s.prop68 = "Search Button clicked";
            s.eVar68 = s.prop68;
            s.tl(true, 'o', "Statspro:Watch:Search Button Clicked");
            _satellite.notify("************" + s.eVar68);
            s.eVar68 = s.prop68 = "";
        } catch (err) {
            //
            console.log('************ Error', err);
        }
    });
}

function click12() {
    if (typeof s != 'undefined') s.searchPerformed = false;
    if (/stats-pro/.test(location.href) && location.hash.length < 30) {
        reportingBeacon('');
    } else {
        if (/Discover/i.test(location.hash)) {
            var seasonvalue, sortbyvalue, grid;
            seasonvalue = $('.Dropdown__top___diHp2:eq(0)').text().replace(/(\r\n|\n|\r)/gm, "").split("CAREER/SEASON").pop();
            sortbyvalue = $('.Dropdown__top___diHp2:eq(1)').text().replace(/(\r\n|\n|\r)/gm, "").split("Sort By").pop();

            var pageType = 'unknown';
            if (typeof document.getElementsByClassName('ImageButton__base___3s5zd')[1] != 'undefined') {
                pageType = 'discover-home';
                grid = document.getElementsByClassName('ImageButton__base___3s5zd').length > 0 ? (document.getElementsByClassName('ImageButton__base___3s5zd')[1].className).includes("active") : null;            } else if (/Discover\/cd_/i.test(location.hash)) {
                pageType = 'player-summary';
                reportingBeacon('');
            }

            if (typeof s != 'undefined') {
                if (pageType == 'discover-home') {
                    s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
                    //s.eVar9 = regionName;
                    s.prop11 = 'D=pageName';
                    s.prop68 = "season:" + seasonvalue + "|" +
                        "sortby:" + sortbyvalue + "|";

                    if (($('.AdvancedFilter__block___1Dbri').length) == 0) {
                        s.prop68 += "AdvancedOptions:Minimised|";
                    } else {
                        s.prop68 += "AdvancedOptions:Selected|";
                    }

                    if (grid) {
                        s.prop68 += "View: Grid";
                    } else {
                        s.prop68 += "View: List";
                    }

                    //s.prop68 = s.prop68.slice(0, -1);
                    s.eVar68 = s.prop68;

                    s.tl(true, 'o', "Statspro:Discover");
                    _satellite.notify("************" + s.eVar68);
                    s.eVar68 = s.prop68 = "";
                } else if (pageType == 'player-summary') {
                    reportingBeacon();
                }
            }
        } else if (/Compare/i.test(location.hash)) {
        } else if (/Watch/i.test(location.hash)) {
        } else if (/round/i.test(location.hash)) {

        } else {
            var clubvalue, positionvalue, seasonvalue, sortbyvalue, grid;
            clubvalue = $('.Dropdown__top___diHp2:eq(0)').text();
            positionvalue = $('.Dropdown__top___diHp2:eq(1)').text();
            seasonvalue = $('.Dropdown__top___diHp2:eq(2)').text().replace(/(\r\n|\n|\r)/gm, "").split("CAREER/SEASON").pop();
            sortbyvalue = $('.Dropdown__top___diHp2:eq(3)').text().replace(/(\r\n|\n|\r)/gm, "").split("Sort By").pop();
            grid =  document.getElementsByClassName('ImageButton__base___3s5zd').length > 0 ? (document.getElementsByClassName('ImageButton__base___3s5zd')[1].className).includes("active"):null;


            if (typeof s !== 'undefined') {
                s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19,prop68,eVar68';
                //s.eVar9 = regionName;
                s.prop11 = 'D=pageName';

                s.prop68 = "club:" + clubvalue + "|" +
                    "position:" + positionvalue + "|" +
                    "season:" + seasonvalue + "|" +
                    "sortby:" + sortbyvalue + "|";

                if (grid) {
                    s.prop68 += "View: Grid";
                } else {
                    s.prop68 += "View: List";
                }

                //s.prop68 = s.prop68.slice(0, -1);
                s.eVar68 = s.prop68;

                s.tl(true, 'o', "Statspro:Discover");
                _satellite.notify("************" + s.eVar68);
                s.eVar68 = s.prop68 = "";
            }
        }
    }
}

//track the hash changes
_satellite.whenEvent('locationchange123', click12);

//send to omniture
reportingBeacon(onpagedata);