;(function($) {
  //$.fn.extend扩展jquery对象方法
  $.fn.extend({
    "color":function(value){
        if (value == undefined){
            return this.css("color");
        }else{
            return this.css("color",value);
        }
    }
  });
})(jQuery);

