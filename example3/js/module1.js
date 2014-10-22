//module1
define(function(require){
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	return Backbone.View.extend({

		events: {
			'click': 'onClickHandler'
		},

		bark: function(){
			console.log('WOOF WOOF WOOF');
		},

		initialize: function(){
			_.bindAll(this, 'bark', 'render');

			this.render();
		},

		onClickHandler: function(){
			if(this.$el.hasClass('highlight')){
				this.$el.removeClass('highlight');
			}else{
				this.$el.addClass('highlight');
			}
		},

		render: function(){
			this.$el.text('hello! I am a dog');
		}

	});
});