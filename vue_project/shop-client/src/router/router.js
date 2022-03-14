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
        component: Register
    }
    ,{
        path: '/login',
        component: Login
    }
]