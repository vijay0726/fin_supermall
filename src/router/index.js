import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Sort = () => import('../views/sort/Sort')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        // 指定的组件
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/sort',
        component: Sort
    },
    {
        path: '/profile',
        component: Profile
    }
    ,
    {
        path: '/detail/:iid',
        component: Detail
    }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router