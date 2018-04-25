import React from 'react'
import {connect} from 'react-redux';
import styles from './row.css'
import _ from 'lodash'
import Colums from './colums'
import RowRight from './row_right'
import RowLeft from './row_left'

export default (props) => {

    var self = this;
    var {
        store:
            {
                design_edit:
                    {
                        design_templates,
                        current_edit_item,
                        flow_update_current_edit_item_props
                    }
            }
    } = props;
    var {
        flow_update_current_edit_item_props
    } = props
    var _array = [];
    _.map(design_templates, (item, index) => {
            _array.push(
                <div key={"DesignItemRow" + index} className={styles.rowWrapper}>
                    <div className={styles.itemBoxRow}>
                        <Colums itemArray={item} {...props}/>
                    </div>
                    {
                        current_edit_item && current_edit_item.row == index && <div className={styles.wrapper_left_right}>
                            <div className={styles.left_right}>
                                <RowLeft current_edit_item={current_edit_item}/>
                                <RowRight current_edit_item={current_edit_item} flow_update_current_edit_item_props={flow_update_current_edit_item_props}/>
                            </div>
                        </div>
                    }
                </div>
            )
        }
    )
    return _array
}

