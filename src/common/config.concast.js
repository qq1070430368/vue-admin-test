const config = {
    MEAU: [
        {
          title: "首页",
          num: 1,
          name: "admin",
          icon: "ios-home",
          href: "/home",
          closable: false,
          showInTags: true,
          showInMenus: true,
          choosed: true
        }, 
        {
          title: "个人主页",
          name: "members-agents",
          icon: "ios-people",
          children: [
            {
              title: "个人中心",
              name: "personManager",
              href: "/personManager",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            },
            {
              title: "会员等级",
              name: "memberLevels",
              href: "/memberLevels",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            }
          ]
        },
        {
          title: "系统管理",
          name: "system-manage",
          icon: "ios-cog",
          children: [
            {
              title: "返水设置",
              name: "backwater-setting",
              href: "/home",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            },
            {
              title: "用户分销管理",
              name: "userDistribution",
              href: "/home",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            }
          ]
        },
       
      ]
}


module.exports = config;