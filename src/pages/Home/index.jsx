import { useStore } from '@/store'
import styles from './index.module.scss'

function HomePage(){
    const { login } = useStore()
    return (
        <>
        <div className={styles.loginName}>
             欢迎 { login.mobile || '游客1234'}
        </div>
        首页
        </>
    )
}
export default HomePage