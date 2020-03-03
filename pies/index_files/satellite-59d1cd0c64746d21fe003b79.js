// Error Page code (404)
if (/Page Not Found/i.test(document.title) ) {
	s.pageType="errorPage";
	if (typeof s != 'undefined' && typeof s.un == 'string' && !/telstrabpafl/i.test(s.un)) {
		if (typeof BP_SC != 'undefined' && typeof BP_SC.addReportSuite == 'function') {
			BP_SC.addReportSuite('telstrabpafl');
		}
	}
	_satellite.loadScriptOnce("//code.jquery.com/jquery-3.2.1.min.js");
	s.tl();
}