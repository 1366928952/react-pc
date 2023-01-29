import { makeAutoObservable } from "mobx";

class Login {
    mobile =  '';
    code = '';
    constructor() {
        makeAutoObservable(this)
    }
    setToken = ({ mobile, code }) => {
        this.mobile = mobile;
        this.code = code
        console.log(mobile, code, 'mobile,code------');
    }
}
export default Login