import React from 'react'
import {Input} from 'antd'
import styles from './phone.css'
class phone extends React.Component {
    render() {
        return <div className={styles.phone}>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>
                    当前手机号码
                </div>
                <Input />
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>
                    更新手机号码
                </div>
                <Input />
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>
                    短信验证码
                </div>
                <div className={styles.button_input}>
                    <div className={styles.input}>
                        <Input />
                    </div>
                    <button>获取验证码</button>
                </div>
            </div>

            <div className={styles.wrapper_button}>
                <button className={styles.finish_btn}>确定更新</button>
            </div>
        </div>
    }
}


export default phone

