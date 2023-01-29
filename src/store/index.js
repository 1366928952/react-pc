//这里是index.js文件  （统一管理）
import React, { useContext } from "react";
import Login from "./login.Store";

class RootStore {
    constructor() {
        this.login = new Login()
        //如果还有其他文件，依照上面引入即可
    }
}
// 导入useStore方法供组件使用数据
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => useContext(context)
export { useStore }