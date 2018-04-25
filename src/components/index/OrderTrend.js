import React from 'react';
import styles from './OrderTrend.css';

import {Card, Col} from 'antd'
import OrderTrendChart from './OrderTrendChart'

function OrderTrend() {
    return (
        <Col
            className={styles.OrderTrend}
            md={16}
            sm={24}>
            <Card className={styles.card}
                  bodyStyle={{padding: '0px 0px 0px 0px'}}
            >
                <div className={styles.header}>
                    <div className={styles.header_title}>订单走势</div>
                    <div className={styles.button}>订单记录</div>
                </div>

                <OrderTrendChart/>

            </Card>
        </Col>
    );
}

export default OrderTrend;
