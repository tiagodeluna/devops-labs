'use strict';

var featureToggles = require('../feature-toggles');

function Constructor() {

  var liatrioColors = {
    lightgreen: {
      label: 'LightGreen',
      value: 10,
      color:'#8cdd2a',
      highlight:'#b0e76f'
    },
    darkgreen: {
      label: 'DarkGreen',
      value: 10,
      color:'#27ae1d',
      highlight:'#85ac82'
    },
    black: {
      label: 'Black',
      value: 10,
      color:'#000000',
      highlight:'#797979'
    },
    purple: {
      label: 'Purple',
      value: 10,
      color:'#a000f0',
      highlight:'#d949f9'
    }
  };

  var stelligentColors = {
		darkblue: {
      label: 'DarkBlue',
      value: 10,
      color:'#000066',
      highlight: '#6F6F6F'
    },
    red: {
      label: 'Red',
      value: 10,
      color: '#CC0000',
      highlight: '#C9DF6E'
    },
    yellow: {
      label: 'Yellow',
      value: 10,
      color:'#FF9900',
      highlight: '#FFB75E'
    },
    gray: {
      label: 'Gray',
      value: 10,
      color:'#999999',
      highlight: '#a9a9a9'
    }
  };

  var chartData = {
		// Check for liatriofy feature toggle
		values: (featureToggles.liatriofy ? liatrioColors : stelligentColors),
	};

  this.getForChartJs = function () {
    var returnList = [];
    var k;
    for (k in chartData.values) {
      if (chartData.values.hasOwnProperty(k)) {
        returnList.push(chartData.values[k]);
      }
    }
    return returnList;
  };

  this.getAllCounts = function() {
    var allCounts = {};
    var k;
    for (k in chartData.values) {
      if (chartData.values.hasOwnProperty(k)) {
        allCounts[k] = chartData.values[k].value;
      }
    }
    return allCounts;
  };

  this.getCount = function(color) {
    if (chartData.values.hasOwnProperty(color)) {
      return chartData.values[color].value;
    }
    return -1;
  };

  this.incrementCount = function(color) {
    if (chartData.values.hasOwnProperty(color)) {
      chartData.values[color].value++;
    }
  };

  this.setCounts = function(counts) {
    var k;
    for (k in counts) {
      if (counts.hasOwnProperty(k) && chartData.values.hasOwnProperty(k)) {
        chartData.values[k].value = counts[k];
      }
    }
  };

  this.colorExists = function(color) {
    return chartData.values.hasOwnProperty(color);
  };

  this.getChartData = function() {
    return chartData;
  };
}

module.exports = Constructor;
