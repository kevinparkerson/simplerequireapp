//A very basic module
define(function(require){
	var $ = require('jquery');
	var _ = require('underscore');

	var module1 = require('module1');	//since the default require config base path is './', this works despite not being defined
	var module2 = require('subfolder/module2');	//need to reference the path to get this module

	console.log('Yo yo yo! Example 2 up in here!');
	console.log('jQuery: ', $);
	console.log('underscore: ', _);

	module1('goats');
	module2('poop');
});