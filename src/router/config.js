import { lazy } from 'react'

const routes = [
    {
        path: '/',
        component: lazy(() => import('../pages/Home')),
        meta: {
            title: '首页'
        },
        exact: true,
    },
    {
        path: '/login',
        component: lazy(() => import('../pages/Login')),
        meta: {
            title: '登录页面'
        },
        exact: true
    },
    {
        path: '/404',
        component: lazy(() => import('../pages/NotFound')),
        meta: {
            title: '404'
        },
        exact: true
    },
]

export default routes
