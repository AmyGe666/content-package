/**
 * This module was created by the BASEditor
 */
sap.ui.define(["sap/ui/integration/Designtime"], function (
    Designtime
) {
    "use strict";
    return function () {
        return new Designtime({
	"form": {
		"items": {
			"maxItems": {
				"manifestpath": "/sap.card/configuration/parameters/maxItems/value",
				"type": "integer",
				"label": "Maximum Items",
				"translatable": false,
				"description": "Defines how many items will be displayed at most."
			},
			"title": {
				"manifestpath": "/sap.card/configuration/parameters/title/value",
				"translatable": false
			},
			"subTitle": {
				"manifestpath": "/sap.card/configuration/parameters/subTitle/value",
				"translatable": false
			},
			"selectedCategoryName": {
				"manifestpath": "/sap.card/configuration/parameters/selectedCategoryName/value",
				"translatable": false
			}
		}
	},
	"preview": {
		"modes": "LiveAbstract"
	}
});
    };
});