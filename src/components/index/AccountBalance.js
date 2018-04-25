import React from 'react';
import styles from './AccountBalance.css';

import {Col, Card} from 'antd';

function AccountBalance() {
    return (
        <Col
            md={8}
            sm={24}
            className={styles.AccountBalance}>
            <Card className={styles.card}
                  bodyStyle={{
                      padding: '38px 40px 16px 40px',
                      background: 'url(\'/static/icon1.png\') no-repeat #fff',
                      backgroundPosition:'100% 90%'
                  }}
            >
                <div className={styles.header}>
                    <div className={styles.header_title}>账户余额</div>
                    <div className={styles.button}>财务中心</div>
                </div>

                <div className={styles.count_not_recorded}>
                    <div className={styles.count}>
                        余额：232.26 <small>RMB</small>
                    </div>
                    <div className={styles.not_recorded}>
                        未入账：232.26 <small>RMB</small>
                    </div>
                </div>

            </Card>

        </Col>
    );
}

export default AccountBalance;
