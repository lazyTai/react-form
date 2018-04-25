import React from 'react'
import MyIcon from '../../ui/Icon.js'
import {BOX_ITEM_STATUS_READY, BOX_ITEM_STATUS_UNREADY} from '../../../constants'
import styles from './colums.css'
export default (props) => {
    var {
        flow_ready_box_item, flow_unready_box_item, flow_edit_item,
        itemArray,
    } = props
    var _array = [];
    _.map(itemArray, (item, index) => {
        _array.push(
            <div key={"DesignItemColums" + index} className={styles.itemBox}>
                <div className={styles.item_up}>
                    {/*覆盖*/}
                    {
                        item.status == BOX_ITEM_STATUS_UNREADY && <div className={styles.itemBoxMark}></div>
                    }
                    <div className={styles.template_image}>
                        <img src={item.template_url} alt=""/>
                    </div>
                </div>

                <div className={styles.item_down}>
                    <div className={styles.title}>
                        {item.type_name}
                    </div>
                    <div className={styles.buttonGroup}>
                        <button
                            onClick={flow_edit_item.bind(this, item)}
                        ><MyIcon type={"icon-bianjiicon"}/> 编辑
                        </button>
                        {
                            item.status == BOX_ITEM_STATUS_UNREADY && <button
                                onClick={flow_ready_box_item.bind(this, item)}
                            ><MyIcon type={"icon-zhunbei"} /> 待激活
                            </button>
                        }
                        {
                            item.status == BOX_ITEM_STATUS_READY && <button
                                style={{background: '#7fc44c', color: '#fff'}}
                                onClick={flow_unready_box_item.bind(this, item)}
                            ><MyIcon type={"icon-zhunbei"}/> 激活
                            </button>
                        }
                    </div>
                </div>


            </div>
        )
    })
    return _array
}

