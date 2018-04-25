import React, {Component} from 'react';
import styles from './StateAffairs.css';
import {Col, Card} from 'antd'

class StateAffairs extends Component {
    render() {
        return (
            <Col
                className={styles.StateAffairs}
                md={12}
                sm={24}>
                <Card className={styles.card}
                      bodyStyle={{padding: '38px 40px 16px 40px'}}
                >
                    <div className={styles.header}>
                        <div className={styles.header_title}>业务状况</div>
                        <div className={styles.button}>业务分析</div>
                    </div>

                    <div className={styles.content}>
                        <ul className={styles.table_row}>
                            <li className={styles.table_row_item}>处理中订单</li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>全部</div>
                                <strong>16</strong></li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>超过3天</div>
                                <strong>5</strong></li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>超过7天</div>
                                <strong>1</strong></li>
                        </ul>
                        <ul className={styles.table_row}>
                            <li className={styles.table_row_item}>新增设计</li>
                            <li className={styles.table_row_item}>
                                <strong>28</strong>
                                <div>/最近3天</div>
                            </li>
                            <li className={styles.table_row_item}>
                                <strong>68</strong>
                                <div>/最近7天</div>
                            </li>
                            <li className={styles.table_row_item}>
                                <strong>21</strong>
                                <div>/最近30天</div>
                            </li>
                        </ul>
                        <ul className={styles.table_row}>
                            <li className={styles.table_row_item1}>余额记录</li>
                            <li className={styles.table_row_item1}>
                                <div className="money" style={{color: '#ff4600'}}>+￥16.8</div>
                                <div>销售/6月16日</div>
                            </li>
                            <li className={styles.table_row_item1}>
                                <div className="money">-￥2000.0</div>
                                <div>销售/6月16日</div>
                            </li>
                            <li className={styles.table_row_item1}>
                                <div className="money" style={{color: '#ff4600'}}>+￥4000.8</div>
                                <div>销售/6月16日</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </Col>
        );
    }
}


export default StateAffairs;
