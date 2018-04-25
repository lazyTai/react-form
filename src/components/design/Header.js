import React from 'react';
import styles from './Header.css';
import {Link} from 'react-router-dom'
import {FINISH, UNFINISH, WILL_TODO, SETP_1, SETP_2, SETP_3} from '../../constants'

class Header extends React.Component {
    constructor() {
        super();
        this.clickLink = this.clickLink.bind(this)
    }

    clickLink(to) {
        var {history, dispatch, process_status} = this.props;
        var process_index = null;
        if (to == "/app/design/add") {
            process_index = SETP_1
        }
        if (to == "/app/design/edit") {
            process_index = SETP_2
        }
        if (to == "/app/design/publish") {
            process_index = SETP_3
        }
        if (process_status[process_index - 1] == FINISH || process_status[process_index - 1] == WILL_TODO) {
            dispatch({type: 'design_global/update_process_index', process_index: process_index});
            history.push(to)
        }
    }

    render() {
        var {process_index} = this.props;
        return (
            <div className={styles.header}>
                <div className={styles.title}>
                    <strong>新的作品</strong>
                    <div className={styles.sub_title}>This is an English introduction</div>
                </div>


                <div className={styles.process}>
                    <div
                        onClick={this.clickLink.bind(this, "/app/design/add")}
                        className={styles.process_item}
                        data-active={[SETP_1, SETP_2, SETP_3].includes(process_index)}
                    >
                        <div className={styles.process_badge}>1
                        </div>
                        <div className={styles.process_item_title}>
                            上传设计
                        </div>
                    </div>
                    <div
                        data-active={[SETP_2, SETP_3].includes(process_index)}
                        onClick={this.clickLink.bind(this, "/app/design/edit")}
                        className={styles.process_item}>
                        <div className={styles.process_badge}>2</div>
                        <div className={styles.process_item_title}>
                            产品编辑
                        </div>
                    </div>
                    <div onClick={this.clickLink.bind(this, "/app/design/publish")}
                         data-active={[SETP_3].includes(process_index)}
                         className={styles.process_item}
                    >
                        <div className={styles.process_badge}>3</div>
                        <div className={styles.process_item_title}>
                            发布
                        </div>
                    </div>
                </div>

                <div className={styles.right_title}>
                    返回设计列表
                </div>
            </div>
        );
    }

}

export default Header;
