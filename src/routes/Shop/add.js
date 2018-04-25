import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import styles from './add.css'
import {Row, Col, Input, Select, message, Modal, Alert} from 'antd'
import ValidateInput from '../../components/ui/validateInput.js'

var {exp_not_null, exp_is_internet} = ValidateInput.Regs;

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            shopName: '',
            shopUrlPath: "",
            currencyId: "",
            description: ""
        }
    }

    render() {
        var self = this;
        var {flow_add_shop} = this.props
        var {fetch_error_shop_name, fetch_error_url} = this.props.store.store_add;
        return <Row className={styles.add}>
            <Col md={12} sm={24}>
                <div className={styles.left}>
                    <div className={styles.header}>
                        定易让你的设计，不在局限于屏幕
                    </div>
                    <div className={styles.input_group}>
                        <div className={styles.subtitle}>店名</div>
                        <div className={styles.input}>
                            <ValidateInput
                                regs={[
                                    {reg: exp_not_null, error: '店名不能为空', isRequired: true}
                                ]}
                                value={self.state.shopName}
                                onChange={(value) => {
                                    self.setState({shopName: value})
                                }}/>
                            {fetch_error_shop_name && <div className={styles.error}>{fetch_error_shop_name}</div>}
                        </div>

                    </div>

                    <div className={styles.input_group}>
                        <div className={styles.subtitle}>网址</div>
                        <div className={styles.input}>
                            <ValidateInput
                                regs={[{reg: exp_is_internet, error: "不是网址格式"}]}
                                value={self.state.shopUrlPath}
                                onChange={(value) => {
                                    self.setState({shopUrlPath: value})
                                }}/>
                            {fetch_error_url && <div className={styles.error}>{fetch_error_url}</div>}
                        </div>
                    </div>
                    <div className={styles.input_group}>
                        <div className={styles.subtitle}>显示货币</div>
                        <Select style={{width: '100%', paddingRight: 50}} defaultValue={"人民币"}
                                onChange={(currencyId) => {
                                    self.setState({currencyId: 1})
                                }}>
                            <Select.Option key={"人民币"}> 人民币</Select.Option>
                        </Select>
                    </div>
                    <div className={styles.input_group}>
                        <div className={styles.subtitle}>描述</div>
                        <Input.TextArea style={{height: 235}}
                                        onChange={(e) => {
                                            self.setState({description: e.target.value})
                                        }}
                        />
                    </div>

                    <div className={styles.wrapper_button}>
                        <button className={styles.finish_btn}
                                onClick={this.add_shop.bind(this)}
                        >确定提交
                        </button>
                    </div>
                </div>
            </Col>
            <Col md={12} sm={0} className={styles.right}>
                <img src="/static/store.png" alt=""/>
            </Col>
        </Row>
    }

    add_shop() {
        if (this.state.shopName) {
            this.props.flow_add_shop(this.state)
        }
    }
}

function mapStateToProps(state) {
    return {store: state}
}

function mapActionToProps(dispatch) {
    return {
        flow_add_shop: bindActionCreators((payload) => {
            return {type: 'store_add/flow_add_shop', payload}
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(Add)

