//module2
define(function(require){
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	return Backbone.View.extend({

		events: {
			'click': 'onClickHandler'
		},

		initialize: function(){
			_.bindAll(this, 'mew', 'render');

			this.render();
		},

		mew: function(){
			console.log('MEOW MEOW MEOW');
		},

		onClickHandler: function(){
			if(this.$el.hasClass('highlight')){
				this.$el.removeClass('highlight');
			}else{
				this.$el.addClass('highlight');
			}
		},

		render: function(){
			this.$el.text('hello! I am a cat');
		}

	});
});