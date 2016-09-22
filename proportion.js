function proportion(el,a,b) {
		var a = !a ? 0 : a;
		var b = !b ? 0 : b;
		for (i = 0; i < el.length; i++) {
			el[i].style.height = el[i].offsetWidth * b / a+'px';
		}	
};
