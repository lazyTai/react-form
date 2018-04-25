import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Index.css';

import CardOrderTrend from '../components/index/OrderTrend'
import CardAccountBalance from '../components/index/AccountBalance'
import StateAffairs from '../components/index/StateAffairs'
import StoreFront from '../components/index/StoreFront'
import { Row } from 'antd'

class Index extends Component {
    render() {
        var { isMobile, } = this.props.store.layout;
        return (
            <div className={styles.dy_index} ref="index">
                <div className={styles.index_header}>
                    <div className={styles.h1}>标题（重要提示）</div>
                    <div className={styles.sub_title}>this is an important message</div>
                </div>

                <div className={styles.index_content}>
                    <Row>
                        <CardOrderTrend />
                        <CardAccountBalance />
                    </Row>

                    <Row style={{ marginTop: 20 }}>
                        <StateAffairs />
                        <StoreFront />
                    </Row>
                </div>
            </div>
        );

    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.dispatch({ type: 'layout/setDocumentHeight', payload: { height: this.refs['index'].scrollHeight } });
        // }, 500)
    }

}

function mapStateToProps(state) {
    return { store: state };
}

export default connect(mapStateToProps)(Index);
