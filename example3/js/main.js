//A very basic module
define(function(require){
	var $ = require('jquery');
	var module1 = require('module1');
	var module2 = require('subfolder/module2');

	//Now for using our dependencies...

	var module1instance = new module1({ el: $('#bleh') });
	var module2instance = new module2({ el: $('#bloo') });

	module1instance.bark();
	module2instance.mew();

	//You could create all kinds of backbone models, views, routers, etc from here :)

});