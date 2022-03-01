import home from '@pages/home/index'
import search from '@pages/search/index'
import register from '@pages/register/index'
import login from '@pages/login/index'


export default[
    {
        path: '/',
        component: home
    },
    {
        path: '/search',
        component: search
    },
    {
        path: '/register',
        component: register
    }
    ,{
        path: '/login',
        component: login
    }
]