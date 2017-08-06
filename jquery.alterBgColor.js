;(function($){
    $.fn.extend({
        "alterBgColor":function(options){
            //jQuery.extend()方法用于扩展已有的Object对象
            options=$.extend({
                odd : "odd",
                even : "even",
                selected :"selected"
            },options);
            //$("...",this)选择器将在this范围内进行选择
            $("tbody>tr:odd",this).addClass(options.odd);
            $("tbody>tr:even",this).addClass(options.even);
            $("tbody>tr",this).click(function() {
                var hasSelected=$(this).hasClass(options.selected);
                $(this)[hasSelected?"removeClass":"addClass"](options.selected)
                .find('checkbox').attr('checked',!hasSelected);
            });
            $("tbody>tr:has(:checked)",this).addClass(options.selected);
            return this;//返回this，使方法可链
        }
    })
})(jQuery);