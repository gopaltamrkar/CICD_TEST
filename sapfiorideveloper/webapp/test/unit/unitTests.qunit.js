/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fiorinamespace/sapfiorideveloper/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
