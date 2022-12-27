import { lazy } from 'react'

const routes = [
    // {
    //     path: '/test',
    //     component: lazy(() => import('../pages/Test')),
    //     meta: {
    //         title: '测试页面'
    //     },
    //     routes: [
    //         {
    //             path: '/test/demo',
    //             component:  lazy(() => import('../pages/Test/Demo'))
    //         },
    //         {
    //             path: '/test/demo2',
    //             component: lazy(() => import('../pages/Test/Demo2'))
    //         }
    //     ]
    // },
    {
        path: '/login',
        component: lazy(() => import('../pages/Login')),
        meta: {
            title: '登录页面'
        }
    },
    {
        path: '/',
        component: lazy(() => import('../pages/Home')),
        meta: {
            title: '首页'
        }
    },
    {
        path: null,
        redirect: lazy(() => import('../pages/NotFound')),
        meta: {
            title: '404'
        }
    },
]

export default routes
