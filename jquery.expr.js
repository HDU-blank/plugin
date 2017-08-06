;(function($){
    $.extend(jQuery.expr[":"], {
        between : function(a,i,m){
            var tmp = m[3].split(",");
            return tmp[0]-0<i&&i<tmp[1]-0;
        }
    });
})(jQuery);