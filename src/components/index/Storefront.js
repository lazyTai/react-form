import React, {Component} from 'react';
import styles from './Storefront.css';
import {Card, Col} from 'antd'

class Storefront extends Component {
    render() {
        return (<Col
                className={styles.Storefront}
                md={12}
                sm={24}>
                <Card className={styles.card}
                      bodyStyle={{padding: '38px 40px 16px 40px'}}
                >
                    <div className={styles.header}>
                        <div className={styles.header_title}>店面</div>
                        <div className={styles.button}>新增店面</div>
                    </div>

                    <div className={styles.content}>
                        <ul className={styles.table_row}>
                            <li className={styles.table_row_item}>店铺</li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>类别</div>
                                <strong>16</strong></li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>状态</div>
                                <strong>5</strong></li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>设计/产品</div>
                                <strong>1</strong></li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>操作系项</div>
                                <strong>1</strong></li>
                        </ul>
                        <ul className={styles.table_row}>
                            <li className={styles.table_row_item}>Pitaco</li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>标准</div>
                            </li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>运行中</div>
                            </li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>38</div>
                            </li>
                            <li className={styles.table_row_item}>
                                <div className={styles.title}>查看</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </Col>
        );
    }

}

export default Storefront;
