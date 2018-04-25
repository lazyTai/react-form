import React from 'react';
import {connect} from 'react-redux';
import styles from './edit.css';
import {bindActionCreators} from 'redux'
import Row from '../../components/design/edit/Row'


class edit extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        var {upload_image,flow_update_current_edit_item_props} = this.props.store.design_global
        return (
            <div className={styles.edit}>
                <div className={styles.edit_content}>
                    <div className={styles.header}>当前设计图</div>

                    <div className={styles.image_wrapper}>
                        {upload_image && <img src={upload_image.src} alt=""/>}
                    </div>
                    <div className={styles.tip_small}>设计还在草稿状态，完成产品设计后，按发布键开始线上销售</div>

                    <div className={styles.itemContent}>
                        <Row store={this.props.store}  {...this.props}/>
                    </div>
                </div>

            </div>
        );
    }

    componentWillMount() {
        if (!this.props.store.design_global.upload_image) {
            this.props.history.push('/app/design/add')
        }
    }

    componentDidMount() {
        this.props.fetch_design_templates()
    }

}

function mapStateToProps(state) {
    return {store: state};
}

function mapActionToProps(dispatch) {
    return {
        ready_box_item: bindActionCreators((payload) => {
            return {type: 'design_edit/flow_ready_box_item', payload}
        }, dispatch),
        flow_ready_box_item: bindActionCreators((payload) => {
            return {type: 'design_edit/flow_ready_box_item', payload}
        }, dispatch),
        flow_unready_box_item: bindActionCreators((payload) => {
            return {type: 'design_edit/flow_unready_box_item', payload}
        }, dispatch),
        fetch_design_templates: bindActionCreators((payload) => {
            return {type: 'design_edit/fetch_design_templates', payload}
        }, dispatch),
        flow_edit_item: bindActionCreators((payload) => {
            return {type: 'design_edit/flow_edit_item', payload}
        }, dispatch),
        flow_update_current_edit_item_props: bindActionCreators((payload) => {
            return {type: 'design_edit/flow_update_current_edit_item_props',payload}
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(edit);
