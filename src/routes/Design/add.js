import React from 'react';
import {
    connect
} from 'dva';
import styles from './add.css';
import {
    Card,
    Row,
    Col,
    Input,
    Select
} from 'antd'
import Drag from '../../components/design/add/Drag'
import ValidateInput from '../../components/ui/validateInput.js'
import {exp_not_null} from "../../util/regs";
import ValidateSelect from '../../components/ui/validateSelect.js'
const Option = Select.Option;

class Design_add extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.init()
    }

    render_shop_list() {
        var {
            upload_image, upload_token, shop_lists, default_shop_select
        } = this.props.store.design_upload
        var _array = [];
        if (shop_lists) {
            shop_lists.map((item) => {
                _array.push(<Option key={item.id}
                                    data-item-id={item.id}
                                    data-item-shopName={item.shopName}
                >{item.shopName}</Option>)
            })
        }
        return _array
    }

    render_categories_lists() {
        var {
            categories_lists,
        } = this.props.store.design_upload
        var _array = [];
        if (categories_lists) {
            categories_lists.map((item) => {
                _array.push(<Option key={item.id}
                                    data-item-id={item.id}
                                    data-item-categoryName={item.categoryName}
                >{item.categoryName}</Option>)
            })
        }
        return _array
    }

    render() {
        var {
            dispatch,
            history,
            select_shop_lists,
            select_categories_list
        } = this.props
        var {
            upload_image,
        } = this.props.store.design_global;

        var {upload_token, current_select_shop,current_categories_select}
        =this.props.store.design_upload

        return (
            <div className={styles.Design_add}>
                <Card className={styles.content}>
                    <Row className={styles.search_options}>
                        <Col
                            md={8} ms={24}
                            className={styles.search_options_item}>
                            <div className={styles.name}>标题：</div>
                            <div className={styles.input}>
                                <ValidateInput regs={[{reg: exp_not_null, error: "不能为空", isRequired: true}]}/>
                            </div>
                        </Col>
                        <Col md={8} ms={24}
                             className={styles.search_options_item}>
                            <div className={styles.name}>店面：</div>
                            <div className={styles.input}>
                                <ValidateSelect
                                    regs={[{reg:exp_not_null,isRequired:true,error:"不能为空"}]}
                                    value={current_select_shop.shopName}
                                    style={{width: '100%'}}
                                    onChange={(value1,value2)=>{
                                        select_shop_lists({current_select_shop:{
                                                id:value2.props['data-item-id'],
                                                shopName:value2.props['data-item-shopName']
                                            }})
                                    }}
                                >
                                    {this.render_shop_list.call(this)}
                                </ValidateSelect>
                            </div>
                        </Col>
                        <Col md={8} ms={24} className={styles.search_options_item}>
                            <div className={styles.name}>产品：</div>
                            <div className={styles.input}>
                                <Select value={current_categories_select.categoryName}
                                        onChange={(value1,value2)=>{
                                            select_categories_list({current_categories_select:{
                                                    "id": value2.props['data-item-id'],
                                                    "categoryName":value2.props['data-item-categoryName'],
                                                }
                                            })
                                        }}
                                        style={{width: '100%'}}>
                                    {this.render_categories_lists.call(this)}
                                </Select>
                            </div>
                        </Col>

                    </Row>

                    <div className={styles.drag_upload_wrapper}>
                        <div className={styles.drag_upload_wrapper_title}>
                            让你的设计，创造更多价值
                        </div>
                        <div className={styles.drag_wrapper}>
                            {
                                upload_image && <div className={styles.uploader_image_wrapper}>
                                    <img src={upload_image.src} alt=""/>
                                </div>
                            }

                            <Drag dispatch={dispatch} history={history}
                                  className={styles.drag}
                                  upload_image={upload_image}
                                  upload_token={upload_token}
                            />
                        </div>
                    </div>

                </Card>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        store: state
    };
}

export default connect(mapStateToProps,(dispatch)=>{
    return {
        select_shop_lists:(payload)=>{
            dispatch({type:'design_upload/set_current_select_shop',payload})
        },
        select_categories_list:(payload)=>{
            dispatch({type:'design_upload/set_current_categories_select',payload})
        },
        init:(payload)=>{
            /*1.fetch get image upload token
      * 2.fetch shop list
      * 3.fetch product type
      * */
            dispatch({type: "design_upload/flow_fetch_uplod_token", payload: {}});
            dispatch({type: "design_upload/flow_fetch_shop_lists", payload: {}});
            dispatch({type: "design_upload/flow_fetch_categories_list", payload: {}});
        }
    }
})(Design_add);