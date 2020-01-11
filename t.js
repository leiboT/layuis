layui.define(["element", "jquery"], function (exports) {
    var $ = layui.jquery,
        element = layui.element,
        $body = $("body"),
        $root = $("#LAY_app"),
        $shrinkToggle = $("#LAY_app_flexible"),
        
        shrinkIcon = "layui-icon-spread-left",
        expandIcon = "layui-icon-spread-right",
        shrinkModeClass = "layadmin-side-shrink",

        t = {
            flexible: function () {
                if ($shrinkToggle.hasClass(shrinkIcon)) {
                    $shrinkToggle.removeClass(shrinkIcon).addClass(expandIcon);
                    $root.addClass(shrinkModeClass);
                } else {
                    $shrinkToggle.removeClass(expandIcon).addClass(shrinkIcon);
                    $root.removeClass(shrinkModeClass);
                }
                // debugger
            },
        };
    $body.on("click", "*[layadmin-event]", function (e) {
        var eventName = $(this).attr("layadmin-event");
        t[eventName] && t[eventName].call(this, e);
    });
    exports("t", t);
})