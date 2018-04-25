import React, {Component} from 'react';
import {Router, Route, Switch, Redirect, Link} from 'dva/router';
import {connect} from 'dva';
import styles from './layout.css';
import {Layout, Icon, BackTop} from 'antd';
import IndexHeader from '../components/layout/Header'
import LeftSlider from '../components/layout/LeftSlider';
import Breadcrumb from '../components/layout/Breadcrumb'
import {withRouter} from 'dva/router'

import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const PageIndex = Loadable({
    loader: () => import('../routes/Index'),
    loading: Loading
});
const PageButton = Loadable({
    loader: () => import('../routes/ui/Button'),
    loading: Loading
});
const PageIcon = Loadable({
    loader: () => import('../routes/ui/Icon'),
    loading: Loading
});
const PageLoading = Loadable({
    loader: () => import('../routes/ui/loading'),
    loading: Loading
});
const PageMydialog = Loadable({
    loader: () => import('../routes/ui/Mydialog'),
    loading: Loading
});
const PageMyMessage = Loadable({
    loader: () => import('../routes/ui/MyMessage'),
    loading: Loading
});
const PageMyTab = Loadable({
    loader: () => import('../routes/ui/MyTab'),
    loading: Loading
});

const Design = Loadable({
    loader: () => import('../routes/Design/desigeRoute.js'),
    loading: Loading
});
const UserInfor = Loadable({
    loader: () => import('../routes/UserInfor.js'),
    loading: Loading
});
const Shop = Loadable({
    loader: () => import('../routes/PageShop.js'),
    loading: Loading
});

const {Content, Footer} = Layout;

class DyLayout extends Component {

    render() {
        var self = this;
        var {dispatch, children, location} = this.props
        var {left_menu_collapsed, isMobile, menuArray, documentHeight} = this.props.store.layout;
        return (
            <Layout>
                <LeftSlider collapsed={left_menu_collapsed} dispatch={dispatch}
                            menuArray={menuArray} documentHeight={documentHeight}
                            isMobile={isMobile}/>
                <Layout>
                    <IndexHeader dispatch={dispatch} collapsed={left_menu_collapsed}
                                 isMobile={isMobile} menuArray={menuArray}/>
                    <Content
                        style={{overflowX: 'auto', overflowY: 'hidden'}}
                    >
                        {/*面包屑*/}
                        {/*<Breadcrumb {...this.props} />*/}
                        <Switch>
                            <Route path="/app" exact render={() => {
                                return <Redirect to="/app/index"/>
                            }}/>

                            <Route path="/app/index"
                                   component={PageIndex}/>
                            <Route exact path="/app/ui/button"
                                   component={PageButton}/>
                            <Route exact path="/app/ui/icon"
                                   component={PageIcon}/>
                            <Route exact path="/app/ui/loading"
                                   component={PageLoading}/>
                            <Route exact path="/app/ui/dialog"
                                   component={PageMydialog}/>
                            <Route exact path="/app/ui/message"
                                   component={PageMyMessage}/>
                            <Route exact path="/app/ui/tab"
                                   component={PageMyTab}/>

                            {/*设计*/}
                            <Route path="/app/design"
                                   component={Design}/>
                            {/*用户基本信息*/}
                            <Route path="/app/user_infor"
                                   component={UserInfor}/>

                            {/*开店*/}
                            <Route path="/app/shop"
                                   component={Shop}/>

                            <Route render={() => {
                                return <Redirect to="/app/index"/>
                            }}/>
                        </Switch>
                    </Content>

                    <BackTop>
                        <div className={styles.backup}></div>
                    </BackTop>
                    <Footer style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        京ICP证030173号-1/京公网安备11000002000001号/Power By ©2018 DingYi 版本号:v1.0.0
                    </Footer>
                </Layout>
            </Layout>
        )
    }

    componentWillMount() {

    }

    componentDidMount() {
        /* 设置 判断是不是手机 */
        this.init();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.init();
        }
    }

    init = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        var {dispatch} = this.props
        const clientWidth = document.body.clientWidth;
        dispatch({
            type: 'layout/setResponsive',
            payload: {isMobile: clientWidth <= 992}
        })
        dispatch({type: 'layout/fetch_get_menu', payload: {}});
    };
}

function mapStateToProps(state) {
    return {store: state};
}

export default withRouter(connect(mapStateToProps)(DyLayout));
