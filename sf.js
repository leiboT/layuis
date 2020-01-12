layui.define(["element", "jquery"], function (exports) {
    var $ = layui.jquery,
        element = layui.element,
        layer = layui.layer,
        $body = $("body"),
        $root = $("#LAY_app"),
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
        SF = function () {
            /**
             *  系统配置
             * @param name
             * @returns {{BgColorDefault: number, urlSuffixDefault: boolean}|*}
             */
            this.config = function (name) {
                var config = {
                    urlHashLocation: true,   // URL地址hash定位
                    urlSuffixDefault: true, // URL后缀
                    BgColorDefault: 0,       // 默认皮肤（0开始）
                    checkUrlDefault: false,   // 是否判断URL有效
                };
                if (name == undefined) {
                    return config;
                } else {
                    return config[name];
                }
            };
            /**
            * 初始化背景色
            */
            this.initBgColor = function () {
                var bgcolorId = sessionStorage.getItem('layuiminiBgcolorId');
                if (bgcolorId == null || bgcolorId == undefined || bgcolorId == '') {
                    bgcolorId = this.config('BgColorDefault');
                }
                var bgcolorData = this.bgColorConfig(bgcolorId);
                var styleHtml = '.layui-layout-admin .layui-header{background-color:' + bgcolorData.headerRight + '!important;}\n' +
                    '.layui-header>ul>.layui-nav-item.layui-this,.layuimini-tool i:hover{background-color:' + bgcolorData.headerRightThis + '!important;}\n' +
                    '.layui-layout-admin .layui-logo {background-color:' + bgcolorData.headerLogo + '!important;}\n' +
                    '.layui-side.layui-bg-black,.layui-side.layui-bg-black>.layui-left-menu>ul {background-color:' + bgcolorData.menuLeft + '!important;}\n' +
                    '.layui-left-menu .layui-nav .layui-nav-child a:hover:not(.layui-this) {background-color:' + bgcolorData.menuLeftHover + ';}\n' +
                    '.layui-layout-admin .layui-nav-tree .layui-this, .layui-layout-admin .layui-nav-tree .layui-this>a, .layui-layout-admin .layui-nav-tree .layui-nav-child dd.layui-this, .layui-layout-admin .layui-nav-tree .layui-nav-child dd.layui-this a {\n' +
                    '    background-color: ' + bgcolorData.menuLeftThis + ' !important;\n' +
                    '}';
                $('#layuimini-bg-color').html(styleHtml);
            };
            /**
             * 配色方案配置项(默认选中第一个方案)
             * @param bgcolorId
             */
            this.bgColorConfig = function (bgcolorId) {
                var bgColorConfig = [
                    {
                        headerRight: '#1aa094',
                        headerRightThis: '#197971',
                        headerLogo: '#243346',
                        menuLeft: '#2f4056',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#23262e',
                        headerRightThis: '#0c0c0c',
                        headerLogo: '#0c0c0c',
                        menuLeft: '#23262e',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#ffa4d1',
                        headerRightThis: '#bf7b9d',
                        headerLogo: '#e694bd',
                        menuLeft: '#1f1f1f',
                        menuLeftThis: '#ffa4d1',
                        menuLeftHover: '#1f1f1f',
                    },
                    {
                        headerRight: '#1aa094',
                        headerRightThis: '#197971',
                        headerLogo: '#0c0c0c',
                        menuLeft: '#23262e',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#1e9fff',
                        headerRightThis: '#0069b7',
                        headerLogo: '#0c0c0c',
                        menuLeft: '#1f1f1f',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },

                    {
                        headerRight: '#ffb800',
                        headerRightThis: '#d09600',
                        headerLogo: '#243346',
                        menuLeft: '#2f4056',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#e82121',
                        headerRightThis: '#ae1919',
                        headerLogo: '#0c0c0c',
                        menuLeft: '#1f1f1f',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#963885',
                        headerRightThis: '#772c6a',
                        headerLogo: '#243346',
                        menuLeft: '#2f4056',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#1e9fff',
                        headerRightThis: '#0069b7',
                        headerLogo: '#0069b7',
                        menuLeft: '#1f1f1f',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#ffb800',
                        headerRightThis: '#d09600',
                        headerLogo: '#d09600',
                        menuLeft: '#2f4056',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#e82121',
                        headerRightThis: '#ae1919',
                        headerLogo: '#d91f1f',
                        menuLeft: '#1f1f1f',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    },
                    {
                        headerRight: '#963885',
                        headerRightThis: '#772c6a',
                        headerLogo: '#772c6a',
                        menuLeft: '#2f4056',
                        menuLeftThis: '#1aa094',
                        menuLeftHover: '#3b3f4b',
                    }
                ];
                if (bgcolorId == undefined) {
                    return bgColorConfig;
                } else {
                    return bgColorConfig[bgcolorId];
                }
            };
            /**
             * 构建背景颜色选择
             * @returns {string}
             */
            this.buildBgColorHtml = function () {
                var html = '';
                var bgcolorId = sessionStorage.getItem('layuiminiBgcolorId');
                if (bgcolorId == null || bgcolorId == undefined || bgcolorId == '') {
                    bgcolorId = 0;
                }
                var bgColorConfig = this.bgColorConfig();
                $.each(bgColorConfig, function (key, val) {
                    if (key == bgcolorId) {
                        html += '<li class="layui-this" layadmin-event="selectTheme" data-select-bgcolor="' + key + '">\n';
                    } else {
                        html += '<li layadmin-event="selectTheme" data-select-bgcolor="' + key + '">\n';
                    }
                    html += '<a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover">\n' +
                        '<div><span style="display:block; width: 20%; float: left; height: 12px; background: ' + val.headerLogo + ';"></span><span style="display:block; width: 80%; float: left; height: 12px; background: ' + val.headerRight + ';"></span></div>\n' +
                        '<div><span style="display:block; width: 20%; float: left; height: 40px; background: ' + val.menuLeft + ';"></span><span style="display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;"></span></div>\n' +
                        '</a>\n' +
                        '</li>';
                });
                return html;
            };
            /**
             * 打开新窗口
             * @param tabId
             * @param href
             * @param title
             */
            this.addTab = function (tabId, href, title, addSession) {
                if (addSession == undefined || addSession == true) {
                    var layuiminiTabInfo = JSON.parse(sessionStorage.getItem("layuiminiTabInfo"));
                    if (layuiminiTabInfo == null) {
                        layuiminiTabInfo = {};
                    }
                    layuiminiTabInfo[tabId] = { href: href, title: title }
                    sessionStorage.setItem("layuiminiTabInfo", JSON.stringify(layuiminiTabInfo));
                }
                element.tabAdd(menuTab, {
                    title: title + '<i data-tab-close="" class="layui-icon layui-unselect layui-tab-close">ဆ</i>' //用于演示
                    , content: '<iframe width="100%" height="100%" frameborder="0"  src="' + href + '"></iframe>'
                    , id: tabId
                });
            };
            this.tabAdd = function () {
                //新增一个Tab项
                element.tabAdd('demo', {
                    title: '新选项' + (Math.random() * 1000 | 0) //用于演示
                    , content: '内容' + (Math.random() * 1000 | 0)
                    , id: new Date().getTime() //实际使用一般是规定好的id，这里以时间戳模拟下
                })
            };
            this.tabDelete = function (othis) {
                //删除指定Tab项
                element.tabDelete('demo', '44'); //删除：“商品管理”


                othis.addClass('layui-btn-disabled');
            };
            this.tabChange = function () {
                //切换到指定Tab项
                element.tabChange('demo', '22'); //切换到：用户管理
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
                var loading = layer.load(0, { shade: false, time: 2 * 1000 });
                var clientHeight = (document.documentElement.clientHeight) - 95;
                var bgColorHtml = sf.buildBgColorHtml();
                var html = '<div class="layuimini-color">\n' +
                    '<div class="color-title">\n' +
                    '<span>配色方案</span>\n' +
                    '</div>\n' +
                    '<div class="color-content">\n' +
                    '<ul>\n' + bgColorHtml + '</ul>\n' +
                    '</div>\n' +
                    '</div>';
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    shade: 0.2,
                    anim: 2,
                    shadeClose: true,
                    id: 'layuiminiBgColor',
                    area: ['340px', clientHeight + 'px'],
                    offset: 'rb',
                    content: html,
                    end: function () {
                        $('.layuimini-select-bgcolor').removeClass('layui-this');
                    }
                });
                layer.close(loading);
            },
            // 选择主题处理
            selectTheme: function (e) {
                var bgcolorId = e.attr("data-select-bgcolor");
                $('.layuimini-color .color-content ul .layui-this').attr('class', '');
                e.attr('class', 'layui-this');
                sessionStorage.setItem('layuiminiBgcolorId', bgcolorId);
                sf.initBgColor();
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
                debugger
                sf.addTab("a", "/aaa", "xxxxx")
            }
        };
    element.on("tab(" + menuTab + ")", function (e) {
        debugger
    });
    element.on("tabDelete(" + menuTab + ")", function (e) {
        debugger
    });
    element.on('nav(layadmin-system-side-menu)', function (elem) {
        debugger
    });
    // 点击事件代理及处理   
    $body.on("click", "*[layadmin-event]", function () { // 普通点击
        var e = $(this);
        var eventName = e.attr("layadmin-event");
        events[eventName] && events[eventName].call(this, e);
    }).on("click", "*[lay-href]", function () { // 页面链接
        var e = $(this);
        events.pageLink(e);
    })
    // 
    exports("sf", sf);
})