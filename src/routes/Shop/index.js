import React from 'react'
import styles from './index.css'
import {Table, Pagination} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'


class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: "", key: 'image', dataIndex: 'image', render() {
                        return <img src="http://www.atool.org/placeholder.png?size=40x40" alt=""
                                    className={styles.table_td_image}
                        />
                    }
                },
                {title: '店面类别', key: 'shopName', dataIndex: 'shopName' }, 
                {title: '状态', key: 'shopStatusName', dataIndex: 'shopStatusName' },
                {title: '设计/产品', key: 'designCount', dataIndex: 'designCount' },
                {title: '订单(7/30天) ', key: 'orderCount', dataIndex: 'orderCount' },
                {
                    title: '操作项目 ', key: 'action', dataIndex: 'action', render(value, record) {
                        return <Link to={{pathname: `/app/store/edit/${record.id}`, state: {shopId: record.id}}}
                                     className={styles.editLink}>修改</Link>
                    }
                }
            ],
        }
    }

    changePage(page) {
        this.props.flow_fetch_change_page(page)
    }

    componentDidMount() {
        this.props.flow_fetch_shop_lists({offset: 5, limit: 10})
    }

    render() {
        let {shop_lists, paging} = this.props.store.store_index
        var {columns} = this.state
        var current = 1;
        return <div className={styles.Index}>
            <Table columns={columns} dataSource={shop_lists} rowKey={record => record.id}
                   pagination={false}
            />
            <div style={{textAlign: 'center'}}>
                {
                    paging.limit && <Pagination
                        onChange={this.changePage.bind(this)}
                        style={{marginTop: 10, marginLeft: 10}}
                        current={(paging.offset / paging.limit) + 1} total={50}
                        pageSize={paging.limit}
                    />
                }
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

function mapActionToProps(dispatch) {
    return {
        flow_fetch_shop_lists: bindActionCreators((payload) => {
            return {type: 'store_index/flow_fetch_shop_lists', payload}
        }, dispatch),
        flow_fetch_change_page: bindActionCreators((payload) => {
            return {type: 'store_index/flow_fetch_change_page', payload}
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(Index)

