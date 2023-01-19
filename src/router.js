import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from './views/HomeView'
import AboutView from './components/AboutComponent'

// Photos
import Muan20221227 from './components/2022/20231227_ Muan'
import Busan20230103 from './components/2023/20230103_Busan'
import Seoul20230108 from './components/2023/20230108_Seoul'
import Seoul2 from './components/2023/20230108_Seoul_2'
import Tokyo20230116 from './components/2023/20230116_Tokyo'
import Tokyo20230117 from './components/2023/20230117_Tokyo'

Vue.use(VueRouter);

const route = [
    { 
        path: "/", 
        component: HomeView 
    }, 
    { 
        path: "/about", 
        component: AboutView
    },
    {
        path: "/2022",
        component: {
            template: "<router-view></router-view>",
        },
        children: [
            {
                path: "20221227-Muan",
                component: Muan20221227,
            }
        ]
    },
    {
        path: "/2023",
        component: {
            template: "<router-view></router-view>",
        },
        children: [
            {
                path: `20230103-Busan`,
                component: Busan20230103
            },
            {
                path: "20230108-Seoul",
                component: Seoul20230108,
            },
            {
                path: "20230108-Seoul-2",
                component: Seoul2,
            },
            {
                path: "20230116-Tokyo",
                component: Tokyo20230116,
            },
            {
                path: "20230117-Tokyo",
                component: Tokyo20230117,
            }
        ]
    },
    { 
        path: "*", 
        component: { 
            template: '<div>Not Found</div>'
        } 
    }
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
    mode: 'history',
    routes: route
});

export default router;