import { useStore } from '@/store'



function LoginPage() {
    //解构赋值
    const { login } = useStore()
    // login
    const loginClick = async (values) => {
        await login.setToken({
            mobile: values.mobile,
            code: values.code
        })
        console.log('login--------')
    }
    loginClick({
        mobile: '1833333333333',
        code: '123456'
    })
    return (
        <>
            登录
        </>
    )
}
export default LoginPage