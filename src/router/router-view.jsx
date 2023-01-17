import {
    Switch,
    Route
} from "react-router-dom"; // 引入 react-router-dom
import { Suspense } from 'react' // Suspense 配合前面的 laze() 使用，不加上会报错

const RouterView = (props) => {
    let { route } = props // 拿到index.jsx页面传过来的 路由列表
    return (
        // 加载时的dom
        <Suspense fallback={<div>Loading...</div>}> 
            <Switch>
                {
                    route.map((item) => {
                        return  <Route key={item.path} exact={item.exact} path={item.path} render={(props) => {
                            return <item.component route={item.children} {...props} />
                        }}></Route>
                    })
                }
            </Switch>
        </Suspense>
    )
}

export default RouterView
