import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import styles from './publish.css'
import {Input, Checkbox,Col,Row} from 'antd'

const CheckboxGroup = Checkbox.Group;

class Publish extends React.Component {
    render() {
        return <div className={styles.publish}>
            <div className={styles.header}>当前设计图</div>
            <div className={styles.image_wrapper}>
                <img src="/static/ChatHead.png" alt=""/>
            </div>
            <div className={styles.title_wrapper}>
                <Input placeholder="Basic usage"/>
            </div>

            <Row className={styles.down}>
                <Col className={styles.left} md={12} sm={24}>
                    <div className={styles.sub_title}>
                        描述
                    </div>
                    <Input.TextArea className={styles.input_text_area}/>
                </Col>
                <Col className={styles.right} md={12} sm={24}>
                    <div className={styles.sub_title}>
                        标签 <small>(最多6个)</small>
                    </div>

                    <Input.TextArea className={styles.input_text_area}/>

                    <div className={styles.sub_title} style={{marginTop: 22}}>
                        产品分类 <small>(最多3个)</small>
                    </div>

                    <div className={styles.check_box_wrapper}>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                        <Checkbox value="1"
                                  className={styles.check_box}
                        >A</Checkbox>
                    </div>
                </Col>
            </Row>

            <div className={styles.btn_group}>
                <div className={styles.button}>存为草稿</div>
                <div className={styles.button}>发布</div>
            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Publish)

