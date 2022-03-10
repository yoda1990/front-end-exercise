import home from '/src/pages/home/index'
import search from '/src/pages/search/index'
import register from '/src/pages/register/index'
import login from '/src/pages/login/index'


export default[
    {
        path: '/',
        component: home
    },
    {
        path: '/search/:keyword?',
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