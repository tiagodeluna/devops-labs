"use strict";
var {Given, Then, When} = require("cucumber");
var InMemStor = require("../../lib/inMemoryStorage.js");
var colors = new InMemStor;
var assert = require("assert");
var chartData = colors.getChartData();
var color;

Given(/^there are 5 colors$/, function () {
	//Gets the number of colors in chertData
	var length = Object.keys(chartData.values).length;
	//Asserts number of colors
	assert.equal(length, 5);
});

When(/^I click the color$/, function () {
	//The color to be added
	color = "blue";
	colors.incrementCount(color, function(err) {
		if (err) {
			assert.false();
		} else {
			assert.true();
		}
	});
});

Then(/^the color updates the value$/, function () {
	assert.equal(colors.getCount(color), 11);
});