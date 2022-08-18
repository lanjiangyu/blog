module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        {
            //设置标签
            text: '快速开始',
            //设置此标签的链接
            link: '/readme/',
            //设置此导航栏的图标，请注意，导航图标只对一级标题有用，
            iconClass: 'aurora-navbar-si-glyph-dial-number-1'
        },
        {
            text:'问题和BUG',
            iconClass:"aurora-navbar-shoulijindu-xuanzhong",
            children: [


          {
                    text: '更新日志',
                    children: [
                        '/issue/CHANGELOG.md'
                    ]
                },
                {
                    text: '运行常见错误',
                    children: [
                        '/issue/common.md'
                    ]
                },

        ]
        },

        {
            text: '插件',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    children: [
                        "/plugin/archive/readme.md",
                    ],
                    text: "时间轴",
                },
                {
                    children: [
                        "/plugin/bubble/readme.md",
                    ],
                    text: "浪漫气泡",
                },
                {
                    children: [
                        "/plugin/coze/readme.md",
                    ],
                    text: "说说",
                },
                {
                    children: [
                        "/plugin/player/readme.md",
                    ],
                    text: "音乐播放器",
                },
                {
                    text: '看板娘',
                    children: [
                        '/style/live2d.md'
                    ]
                },
            ],
        },
        {
            text: 'life',
            iconClass: 'aurora-navbar-hua2',
            children: [
                {
                    children: [
                        {
                            text: 'Me',
                            link: "/about",
                        }

                    ],
                    text: "我?",
                },
                {
                    text: '说说',
                    children:[
                        {
                            text: 'chat',
                            link: '/mood'
                        }
                    ],
                },
                {
                    text: "相册",
                    children: [
                        {
                            text: 'photo',
                            link: '/photo'
                        }
                    ],
                },
            ],
        },
],
}