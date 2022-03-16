import Home from '/src/pages/home/index'
import Search from '/src/pages/search/index'
import Register from '/src/pages/register/index'
import Login from '/src/pages/login/index'


export default[
    {
        path: '/',
        component: Home
    },
    {
        path: '/search/:keyword?',
        component: Search
    },
    {
        path: '/register',
        component: Register,
        //需要隐藏footer的路由添加此配置
        meta: {
            isHideFooter: true
        }
    },
    {
        path: '/login',
        component: Login
    }
]