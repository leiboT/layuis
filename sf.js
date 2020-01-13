layui.define(["element", "jquery"], function (exports) {
    var $ = layui.jquery,
        element = layui.element,
        layer = layui.layer,
        $body = $("body"),
        $root = $("#LAY_app"),
        $themeStyle = $('#LAY_layadmin_theme'),
        shrinkModeClass = "layadmin-side-shrink",
        $shrinkToggle = $("#LAY_app_flexible"),
        $shrinkToggleIcon = $("#LAY_app_flexible>.layui-icon"),
        shrinkIconClass = "layui-icon-spread-left",
        expandIconClass = "layui-icon-shrink-right",
        $fullScreenToggle = $("#LAY_app_fullscreen"),
        $fullScreenToggleIcon = $("#LAY_app_fullscreen>.layui-icon"),
        fullScreenIconClass = "layui-icon-screen-full",
        exitScreenIconClass = "layui-icon-screen-restore",
        menuTab = "layadmin-layout-tabs",
        $tabHeader = $("#LAY_app_tabsheader"),
        layuiShow = "layui-show",
        layuiHide = "layui-hide",
        layuiThis = "layui-this",
        tabCurrentIndex = 0,
        SF = function () {
            /**
             * 系统配置
             * @param name
             */
            this.config = function (key) {
                var configObj = {
                    themeId: 0,
                };
                return configObj[key];
            };
            this.themeId = this.config("themeId");
            this.themeList = [{
                    headerBgColor: '#1aa094',
                    headerColor: "#FFF",
                    logoBgColor: '#243346',
                    leftMenuBgColor: '#2f4056',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#FFF',
                    headerColor: "#333",
                    logoBgColor: '#243346',
                    leftMenuBgColor: '#2f4056',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#23262e',
                    headerColor: "#FFF",
                    logoBgColor: '#0c0c0c',
                    leftMenuBgColor: '#23262e',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#ffa4d1',
                    headerColor: "#FFF",
                    logoBgColor: '#e694bd',
                    leftMenuBgColor: '#1f1f1f',
                    leftMenuActiveBgColor: '#ffa4d1',
                    leftMenuHoverBgColor: '#1f1f1f',
                },
                {
                    headerBgColor: '#1aa094',
                    headerColor: "#FFF",
                    logoBgColor: '#0c0c0c',
                    leftMenuBgColor: '#23262e',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#1e9fff',
                    headerColor: "#FFF",
                    logoBgColor: '#0c0c0c',
                    leftMenuBgColor: '#1f1f1f',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },

                {
                    headerBgColor: '#ffb800',
                    headerColor: "#FFF",
                    logoBgColor: '#243346',
                    leftMenuBgColor: '#2f4056',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#e82121',
                    headerColor: "#FFF",
                    logoBgColor: '#0c0c0c',
                    leftMenuBgColor: '#1f1f1f',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#963885',
                    headerColor: "#FFF",
                    logoBgColor: '#243346',
                    leftMenuBgColor: '#2f4056',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#1e9fff',
                    headerColor: "#FFF",
                    logoBgColor: '#0069b7',
                    leftMenuBgColor: '#1f1f1f',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#ffb800',
                    headerColor: "#FFF",
                    logoBgColor: '#d09600',
                    leftMenuBgColor: '#2f4056',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#e82121',
                    headerColor: "#FFF",
                    logoBgColor: '#d91f1f',
                    leftMenuBgColor: '#1f1f1f',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                },
                {
                    headerBgColor: '#963885',
                    headerColor: "#FFF",
                    logoBgColor: '#772c6a',
                    leftMenuBgColor: '#2f4056',
                    leftMenuActiveBgColor: '#1aa094',
                    leftMenuHoverBgColor: '#3b3f4b',
                }
            ];
            /**
             * 设置主题
             * @param themeId
             */
            this.setTheme = function (themeId) {
                var themeData = this.getThemeData(themeId);
                var styleHtml = ".layui-side-menu,.layadmin-pagetabs .layui-tab-title li:after,.layadmin-pagetabs .layui-tab-title li.layui-this:after,.layui-layer-admin .layui-layer-title,.layadmin-side-shrink .layui-side-menu .layui-nav>.layui-nav-item>.layui-nav-child{background-color:" + themeData.leftMenuBgColor + " !important;}" +
                    ".layui-nav-tree .layui-this,.layui-nav-tree .layui-this>a,.layui-nav-tree .layui-nav-child dd.layui-this,.layui-nav-tree .layui-nav-child dd.layui-this a{background-color:" + themeData.leftMenuActiveBgColor + " !important;}" +
                    ".layui-layout-admin .layui-header{background-color:" + themeData.headerBgColor + " !important;}" +
                    ".layui-layout-admin .layui-header a, .layui-layout-admin .layui-header a cite, .layui-layout-admin{color:" + themeData.headerColor + " !important;}" +
                    ".layui-layout-admin .layui-header .layui-nav .layui-nav-more{border-top-color:" + themeData.headerColor + " !important;}" +
                    ".layui-layout-admin .layui-header .layui-nav .layui-nav-bar{background-color:" + themeData.headerColor + " !important;}" +
                    ".layui-layout-admin .layui-logo{background-color:" + themeData.logoBgColor + " !important;}";
                $themeStyle.html(styleHtml);
            };
            /**
             * 获取主题样式数据
             * @param themeId
             * @return {}
             */
            this.getThemeData = function (themeId) {
                var sessionThemeId = sessionStorage.getItem('themeId');
                var configThemeId = this.themeId;
                var useThemeId = themeId || sessionThemeId || configThemeId || 0;
                this.themeId = useThemeId;
                return this.themeList[useThemeId];
            };
            /**
             * 构建主题选择html
             * @return {string}
             */
            this.buildThemeSelectHtml = function () {
                var html = "";
                var themeId = this.themeId;
                $.each(this.themeList, function (key, val) {
                    if (key == themeId) {
                        html += '<li layadmin-event="selectTheme" class="sf-theme-active" data-theme-id="' + key + '">';
                    } else {
                        html += '<li layadmin-event="selectTheme" data-theme-id="' + key + '">';
                    }
                    html += '<ul>' +
                        '<li style="background-color: ' + val.logoBgColor + '"></li>' +
                        '<li style="background-color: ' + val.headerBgColor + '"></li>' +
                        '<li style="background-color: ' + val.leftMenuBgColor + '"></li></ul></li>';
                });
                return html;
            };
            this.themeSelectHtml = this.buildThemeSelectHtml();
            /**
             * 添加新Tab
             * @param tabId
             * @param href
             * @param title
             * @param addSession
             */
            this.tabAdd = function (tabId, href, title, addSession) {
                // 前端储存

                var hadOpen = false;
                $.each($tabHeader.children(), function (index, item) {
                    if ($(item).attr("lay-id") === tabId) {
                        hadOpen = true;
                        return;
                    }
                });
                if (hadOpen) {
                    this.tabChange(tabId);
                } else {
                    element.tabAdd(menuTab, {
                        title: title,
                        content: '<iframe width="100%" height="100%" frameborder="0" src="' + href + '"></iframe>',
                        id: tabId
                    });
                }
            };
            /**
             * 删除指定Tab项
             * @param tabId
             */
            this.tabDelete = function (tabId) {
                element.tabDelete(menuTab, tabId);
            };
            /**
             * 切换到指定Tab项
             * @param tabId
             */
            this.tabChange = function (tabId) {
                element.tabChange(menuTab, tabId);
            };
            /**
             * 选中指定menu
             * @param tabId
             */
            this.tabChange = function (tabId) {
                element.tabChange(menuTab, tabId);
            };

        },
        sf = new SF(),
        // 事件处理
        events = {
            // 左侧菜单栏伸缩切换
            flexible: function () {
                if ($shrinkToggle.attr("title") === "收起") {
                    $shrinkToggle.attr("title", "展开");
                    $shrinkToggleIcon.removeClass(expandIconClass).addClass(shrinkIconClass);
                    $root.addClass(shrinkModeClass);
                } else {
                    $shrinkToggle.attr("title", "收起");
                    $shrinkToggleIcon.removeClass(shrinkIconClass).addClass(expandIconClass);
                    $root.removeClass(shrinkModeClass);
                }
            },
            // 主题色切换
            theme: function () {
                var html = '<div class="sf-theme">' +
                    '<div class="sf-theme-title">配色方案</div>' +
                    '<ul class="sf-theme-content">' + sf.themeSelectHtml + '</ul>' +
                    '</div>';
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    shade: 0.1,
                    anim: -1,
                    shadeClose: true,
                    id: "sfThemeBox",
                    area: "300px",
                    offset: "r",
                    skin: "layui-anim layui-anim-rl layui-layer-adminRight",
                    content: html
                });
            },
            // 选择主题处理
            selectTheme: function (e) {
                var themeId = e.attr("data-theme-id");
                e.siblings().removeClass("sf-theme-active");
                e.addClass("sf-theme-active");
                sf.setTheme(themeId);

                // 前端用户喜好存储
                sessionStorage.setItem('themeId', themeId);
            },
            // 全屏切换
            fullscreen: function () {
                if ($fullScreenToggle.attr("title") === "开启全屏") {
                    var el = document.documentElement,
                        fsFn = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
                    if (typeof fsFn != "undefined" && fsFn) {
                        fsFn.call(el);
                        $fullScreenToggle.attr("title", "取消全屏");
                        $fullScreenToggleIcon.removeClass(fullScreenIconClass).addClass(exitScreenIconClass);
                    }
                } else {
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
                    $fullScreenToggle.attr("title", "开启全屏");
                    $fullScreenToggleIcon.removeClass(exitScreenIconClass).addClass(fullScreenIconClass);
                }
            },
            // 页面连接
            pageLink: function (e) {
                var href = e.attr("lay-href");
                var text = e.text();
                sf.tabAdd(href, href, text);
                sf.tabChange(href);
            },
            // 关闭当前标签页
            closeThisTabs: function () {
                var ce = $tabHeader.children()[tabCurrentIndex];
                if (ce && tabCurrentIndex !== 0) {
                    sf.tabDelete($(ce).attr("lay-id"));
                }
            },
            // 关闭其它标签页
            closeOtherTabs: function () {
                $.each($tabHeader.children(), function (index, item) {
                    if (index !== 0 && index !== tabCurrentIndex) {
                        sf.tabDelete($(item).attr("lay-id"));
                    }
                });
                // 剩首页及当前页
                tabCurrentIndex = 1;
            },
            // 关闭全部标签页
            closeAllTabs: function () {
                $.each($tabHeader.children(), function (index, item) {
                    if (index !== 0) {
                        sf.tabDelete($(item).attr("lay-id"));
                    }
                });
                // 重置到首页
                tabCurrentIndex = 0;
            }
        };
    sf.setTheme();
    // 标签切换事件处理    
    element.on("tab(" + menuTab + ")", function (data) {
        tabCurrentIndex = data.index;
    });
    // 标签页操作nav事件处理
    element.on("nav(layadmin-pagetabs-nav)", function (elem) {
        var parent = elem.parent();
        parent.removeClass(layuiThis);
        parent.parent().removeClass(layuiShow);
    });
    // 点击事件代理及处理   
    $body.on("click", "*[layadmin-event]", function () { // 普通点击
        var e = $(this);
        var eventName = e.attr("layadmin-event");
        events[eventName] && events[eventName].call(this, e);
    }).on("click", "*[lay-href]", function () { // 页面链接
        var e = $(this);
        events.pageLink(e);
    });
    // 导出模块
    exports("sf", sf);
})