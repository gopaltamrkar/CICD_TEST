/*global QUnit*/

sap.ui.define([
	"fiorinamespace/sapfiorideveloper/controller/main_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("main_view Controller");

	QUnit.test("I should test the main_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
