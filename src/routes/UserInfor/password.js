import React from 'react'

import styles from './password.css'
import {Input} from 'antd'

class password extends React.Component {
    render() {
        return <div className={styles.password}>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>
                    旧密码
                </div>
                <Input/>
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>
                    新密码
                </div>
                <Input/>
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>
                    确定新密码
                </div>
                <Input/>
            </div>

            <div className={styles.wrapper_button}>
                <button className={styles.finish_btn}>确定更新</button>
            </div>
        </div>
    }
}


export default password

