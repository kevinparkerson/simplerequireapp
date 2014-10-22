requirejs.config({
	baseUrl: './js/', //setting a different baseUrl because our files are under the js folder
	deps: ['main'],	//this is "kicking" off the app, by calling "js/main.js" once this config has been loaded
	paths: {
		'backbone': '../../lib/backbone',
		'jquery': '../../lib/jquery',
		'subfolder': 'subfolder',	//this is pointing to a directory
		'underscore': '../../lib/underscore'
	},
	shim: {	//setting up a shim for non-AMD libraries
		backbone: {
			deps: ['jquery', 'underscore'],	//adding these dependencies to backbone
			exports: 'backbone'
		}
	}
});