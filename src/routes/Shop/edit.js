import React from 'react'
import {
    connect
} from 'react-redux';
import {
    Route,
    Switch
} from 'dva/router'
import {
    Select,
    Input,
    Checkbox
} from 'antd'
import {
    bindActionCreators
} from 'redux'
import styles from './edit.css'

export class edit extends React.Component {
    render() {
        var {
            edit_shop
        } = this.props.store.store_edit;
        var self = this;
        return <div className={styles.edit}>
            <div className={styles.name_image_wrapper}>
                <img src="/static/ChatHead.png" alt=""/>
                <div className={styles.name_link_date}>
                    <div className={styles.name}>pitaco</div>
                    <div className={styles.link}>链接：http://www.diye.co/pitaco</div>
                    <div className={styles.date}>开店日期：2018-03-02</div>
                </div>
            </div>

            <div className={styles.input_group}>
                <div className={styles.subtitle}>显示货币</div>
                <Select style={{width: '100%', paddingRight: 50}} defaultValue={'人民币'}>
                    <Select.Option key={1}> 人民币</Select.Option>
                </Select>
            </div>
            <div className={styles.input_group}>
                <div className={styles.subtitle}>描述</div>
                <Input.TextArea style={{height: 235}}
                                value={edit_shop.description}
                                onChange={(e) => {
                                    self.props.set_edit_shop({
                                        edit_shop:
                                            {description: e.target.value}
                                    })
                                }}
                />

            </div>
            <div className={styles.input_group}>
                <Checkbox checked={edit_shop.isDefault}
                          onChange={
                              (e)=>{
                                  self.props.set_edit_shop({
                                      edit_shop:
                                          {isDefault: e.target.checked}
                                  })
                              }
                          }
                >账户预算店面</Checkbox>
            </div>

            <div className={styles.wrapper_button}>
                <button className={styles.finish_btn} data-ref="sureBtn"
                onClick={self.props.fetch_fetch_update_btn.bind(this, edit_shop)}>确定提交</button>
            </div>
        </div>
    }

    componentDidMount() {
        this.props.fetch_get_shop({
            shopId: this.props.match.params.shopId
        })
    }

}

function mapStateToProps(state) {
    return {
        store: state
    }
}

function mapMapToProps(dispatch) {
    return {
        fetch_get_shop: bindActionCreators((payload) => {
            return {
                type: 'store_edit/flow_fetch_get_shop',
                payload
            }
        }, dispatch),
        set_edit_shop: bindActionCreators(({
            edit_shop
        }) => {
            return {
                type: 'store_edit/set_edit_shop',
                edit_shop
            }
        }, dispatch),
        fetch_fetch_update_btn: bindActionCreators((payload) => {
            return {
                type: 'store_edit/fetch_fetch_update_btn',
                payload
            }
        }, dispatch),
    }
}

export default connect(mapStateToProps, mapMapToProps)(edit)