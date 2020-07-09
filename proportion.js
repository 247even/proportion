// jquery proportion
(function($) {
  $.fn.proportion = function(a, b) {
    console.log("using proportion jQuery");
    var a, b;
    if (a) {
      if (typeof a === 'array') {
        a = a[0];
        b = a[1]
      } else {
        a = a || 0;
        b = b || 0;
      }
    }
    $(this).css('height', $(this).outerWidth() * b / a);
    return this;
  }
})(jQuery);

var proportion_ = {};

function proportion(d) {
  console.log("proportion");
  // {element : xxx, proportion : [1,1], className : 'string', styleId : 'string', resize : true, inline : false}
  //    var el = typeof d.selector === 'string' ? document.querySelectorAll(d.selector) : d.selector;
  var el = document.querySelectorAll(d.selector);
  var ell = el.length;
  if (ell === 0) {
    //console.log('ERROR: no elements');
    return false;
  }

  var prop = {
    'selector': d.selector,
    'proportion': d.proportion || [1, 1],
    'className': d.className || 'prop_' + prop.proportion.toString,
    'styleId': d.styleId || className,
    'inline': typeof d.inline === true ? true : false,
    'resize': typeof d.resize === false ? false : true
  }

  for (i = 0; i < ell; i++) {

    if (!prop.inline && i === 0) {
      setHeight();
    }

    if (prop.inline) {
      el[i].style.height = height;
    }

    if (el[i].classList) {
      el[i].classList.add(prop.className);
    } else {
      el[i].className += ' ' + prop.className;
    }
  }

  function setHeight(wprop) {
    if (wprop) {
      prop = wprop
    };

    var eli = el ? el[0] : document.querySelector(prop.selector);
    var width = eli.style.width || eli.offsetWidth;
    var height = width * (prop.proportion[1] / prop.proportion[0]) + 'px';

    if (createStyle && !prop.inline) {
      var classStyle = '.' + prop.className + ' { height: ' + height + '; }';
      var classNameElement = document.getElementById(prop.className);
      if (classNameElement) {
        var cel = classNameElement.innerHTML;
        if (cel == classStyle) {
          //console.log('style exists');
          return false;
        }
        document.head.removeChild(classNameElement);
      }

      createStyle({
        id: prop.styleId,
        style: classStyle
      });
      return false;
    }

  };

  if (prop.resize) {
    proportion_[prop.styleId] = prop;
    window.addEventListener('resize', debounce(
      function(e) {
        setHeight(proportion_[prop.styleId]);
      }, 120, false));
  }
};
