$.fn.unorphan = function() {
  $(this).each(function() {
    var last = this.lastChild;

    if ((last) && (last.nodeType == 3)) {
      last.nodeValue = last.nodeValue.replace(/\s+([^\s]+\s*)$/g, '\xA0$1');
    }
  });
};
