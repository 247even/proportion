(function($) {
	$.fn.proportion = function(a,b) {
		var a = !a ? 0 : a;
		var b = !b ? 0 : b;
		$(this).css('height', $(this).outerWidth() * b / a);
		return this;
	}
})(jQuery);
