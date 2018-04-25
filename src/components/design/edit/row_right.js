import React from 'react'
import styles from './row_right.css'
import MyIcon from '../../ui/Icon.js'
import {Slider, Select} from 'antd';

export default class RowRight extends React.Component {

    constructor() {
        super();
    }

    render() {
        var {current_edit_item, flow_update_current_edit_item_props} = this.props
        // console.log(current_edit_item.ratio)
        return <div className={styles.wrapper_right}>
            <div className={styles.right}>
                <div className={styles.headerName}>编辑你的产品</div>

                <div className={styles.sub}>
                    <div className={styles.sub_header}>印花设计</div>
                    <div className={styles.buttonGroup}>
                        <div className={styles.button}>
                            <MyIcon type={"icon-chuizhijuzhongicon"}
                                    style={{fontSize: 20}}/>
                            <span className={styles.sub_button_title}>
                                           垂直居中
                                       </span>

                        </div>
                        <div className={styles.button}>
                            <MyIcon type={"icon-shuipingjuzhongicon"} style={{fontSize: 20}}/>

                            <span className={styles.sub_button_title}>
                                           水平居中
                                       </span>

                        </div>
                        <div className={styles.button}>
                            <MyIcon type={"icon-tupianicon1"} style={{fontSize: 20}}/>
                            <span className={styles.sub_button_title}>
                                           替换图片
                                       </span>
                        </div>

                    </div>
                    <div className={styles.scaleGroup}>
                        <div className={styles.icon}>
                            <MyIcon type={'icon-bili'} style={{fontSize: 28}}/>
                        </div>

                        <div className={styles.scale_title}>
                            <span>比例大小</span>
                            <Slider defaultValue={current_edit_item.ratio}
                                    value={current_edit_item.ratio} disabled={false} onChange={(value) => {
                                flow_update_current_edit_item_props(value)
                            }}/>
                        </div>

                    </div>
                </div>


                <div className={styles.sub}>
                    <div className={styles.sub_header}>产品设置</div>
                    <div className={styles.typeGroup}>
                        <div className={styles.big_header}>手机样式</div>
                        <Select defaultValue="jack" style={{width: '100%'}}>
                            <Select.Option value="jack">Jack</Select.Option>
                            <Select.Option value="lucy">Lucy</Select.Option>
                            <Select.Option value="Yiminghe">yiminghe</Select.Option>
                        </Select>
                    </div>
                    <div className={styles.colorGroup}>
                        <div className={styles.big_header}>选择默认颜色</div>
                        <div className={styles.color_item_group}>
                            <div className={styles.color_item} style={{background: '#ccc'}}></div>
                            <div className={styles.color_item} style={{background: '#767676'}}></div>
                            <div className={styles.color_item} style={{background: '#4e4e4e '}}></div>
                            <div className={styles.color_item} style={{background: '#434343'}}></div>
                            <div className={styles.color_item} style={{background: '#272727'}}></div>
                            <div className={styles.color_item} style={{background: '#ff4600'}}></div>


                            <div className={styles.color_item} style={{background: '#fa8254'}}></div>
                            <div className={styles.color_item} style={{background: '#0066ff'}}></div>
                            <div className={styles.color_item} style={{background: '#40bfff'}}></div>
                            <div className={styles.color_item} style={{background: '#91ff26'}}></div>
                            <div className={styles.color_item} style={{background: '#fffe92'}}></div>
                            <div className={styles.color_item} style={{background: '#fff073'}}></div>
                        </div>

                        <div className={styles.finish_btn}>
                            完成
                        </div>
                    </div>
                </div>

            </div>
        </div>

    }

}

