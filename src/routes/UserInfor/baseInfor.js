import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import styles from './baseInfor.css'
import {Input, Row, Col, Radio, Button} from 'antd'
import BirthDayPicker from '../../components/ui/birdayPicker.js'

class baseInfor extends React.Component {
    render() {
        return <div className={styles.baseInfor}>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>姓氏</div>
                <Input/>
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>名字</div>
                <Input/>
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>电邮</div>
                <Input/>
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>性别</div>
                <Radio.Group>
                    <Radio className={styles.radio} value={1}>男性</Radio>
                    <Radio value={2}>女性</Radio>
                </Radio.Group>

            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>出生年月日</div>
                <BirthDayPicker/>
            </div>

            <div className={styles.wrapper_button}>
                <button className={styles.finish_btn}>确定更新</button>
            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(baseInfor)

