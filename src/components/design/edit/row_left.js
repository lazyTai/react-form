import React from 'react'
import styles from './row_left.css'
import DragImage from './dragImage'
import {Stage, Layer} from 'react-konva'

class RowLeft extends React.Component {
    render() {
        var {current_edit_item,scale} = this.props
        return <div className={styles.left}>
            <div className={styles.wrapper_cavans_background}>
                <div className={styles.canvas}
                     style={{
                         top: 118,
                         left: 196,
                         width: 250,
                         height: 390
                     }}
                >
                    <Stage
                        width={250}
                        height={390}
                    >
                        <Layer>
                            <DragImage
                                current_edit_item={current_edit_item}
                            />
                        </Layer>
                    </Stage>
                </div>

                <div className={styles.background_image}>
                    <img src={current_edit_item.template_url} alt=""/>
                </div>

            </div>
        </div>
    }
}

export default RowLeft


