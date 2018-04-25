import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Route, Switch, Redirect, Link} from 'dva/router'
import styles from './store.css'
import MyIcon from '../components/ui/Icon.js'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const StoreIndex = Loadable({
    loader: () => import('./Shop/index.js'),
    loading: Loading
});
const StoreAdd = Loadable({
    loader: () => import('./Shop/add.js'),
    loading: Loading
});
const StoreEdit = Loadable({
    loader: () => import('./Shop/edit.js'),
    loading: Loading
});
import {Button} from 'antd'

class Store extends React.Component {
    render() {
        var {history} = this.props
        var {pathname} = this.props.location
        return <div className={styles.Store}>
            {
                pathname == "/app/shop/index" && <div className={styles.header}>
                    <div className={styles.h1}> 我的店面</div>
                    {/*<div className={styles.sub_title}>this is an important message</div>*/}
                    <Button type="primary" className={styles.header_button}
                            onClick={() => {
                                history.push('/app/shop/add')
                            }}
                    >新增界面</Button>
                </div>
            }
            {
                pathname == "/app/shop/add" && <div className={styles.header}>
                    <div className={styles.h1}>新增店面</div>
                    <div className={styles.sub_title}>
                        <Link to="/app/shop/index" className={styles.link}>
                            <MyIcon type={"icon-left"}/>返回店面管理
                        </Link>
                    </div>
                </div>
            }
            {
                pathname == "/app/shop/edit" && <div className={styles.header}>
                    <div className={styles.h1}>店面资料</div>
                    <div className={styles.sub_title}>
                        <div className={styles.sub_title}>
                            <Link to="/app/shop/index" className={styles.link}>
                                <MyIcon type={"icon-left"}/>
                                返回店面管理
                            </Link>
                        </div>
                    </div>
                </div>
            }

            <div className={styles.content}>
                <Route exact path="/app/shop" render={() => <Redirect to={"/app/shop/index"}/>}/>
                <Route exact path="/app/shop/index"
                       component={StoreIndex}/>
                <Route path="/app/shop/add"
                       component={StoreAdd}/>
                <Route path="/app/shop/edit/:shopId"
                       component={StoreEdit}/>
            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

function mapActionToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapActionToProps)(Store)

