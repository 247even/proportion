(function($) {
	$.fn.proportion = function(a,b) {
		var a = !a ? 1 : a;
		var b = !b ? 1 : b;
		$(this).css('height', $(this).width() * b / a);
		return this;
	}
})(jQuery);
