import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const constantRouterMap = [{
        path: '/login',
        name: 'Login',
        // component: ,
        meta: {
            title: "登 录",
            auth: false
        }
    },
    {
        path: '/',
        name: 'Home',
        component: resolve => require(['@/views/home.vue'], resolve),
        redirect: {
            name: 'personManager'
        },
        children: [{
                path: '/personManager',
                name: 'personManager',
                component: resolve => require(['@/views/personCenter/person.vue'], resolve),
                meta: {
                    title: "工作台",
                    auth: true,
                    crumbs: [{
                        name: '概况'
                    }, {
                        name: '工作台'
                    }]
                }
            },
            {
                path: '/memberLevels',
                name: 'memberLevels',
                component: resolve => require(['@/views/personLeval/leval.vue'], resolve),
                meta: {
                    title: "工作台",
                    auth: true,
                    crumbs: [{
                        name: '概况'
                    }, {
                        name: '工作台'
                    }]
                }
              
            }
        ]

    }
];

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: constantRouterMap,
    linkActiveClass: 'router-link-active'
})
