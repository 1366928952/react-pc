import {
    Routes,
    Route
} from "react-router-dom";
import { Suspense } from 'react' // Suspense 配合前面的 laze() 使用，不加上会报错

const RouterView = (props) => {
    let { route } = props // 拿到index.jsx页面传过来的 路由列表
    console.log(route,'route---------------');
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    route.map((item, index) => {
                        return item.component ? <Route key={index} path={item.path} render={(props) => {
                            return <item.component route={item.routes} {...props} />
                        }}></Route> : <Route path="*" element={item.redirect} /> // 找不到对应的路由时 全部去到404页面
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default RouterView
