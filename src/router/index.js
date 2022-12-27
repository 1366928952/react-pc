import React from 'react'

import routes from './config' // 路由列表
import RouterView from './router-view'  // 封装好的 Router
const routerList = [   // 将所有路由拼接在一起
    ...routes
]

const ViewRouter = () => {
    return (
        <div>
            <RouterView route={routerList} />
        </div>
    )
}

export default ViewRouter
