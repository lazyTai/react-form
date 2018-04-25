import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch, Redirect, Link} from 'dva/router'
import styles from './UserInfor.css'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

/*三个界面*/
const BaseInfor = Loadable({
    loader: () => import('./UserInfor/baseInfor.js'),
    loading: Loading
});
const Password = Loadable({
    loader: () => import('./UserInfor/password.js'),
    loading: Loading
});
const Phone = Loadable({
    loader: () => import('./UserInfor/phone.js'),
    loading: Loading
});

class UserInfor extends React.Component {
    constructor(){
        super();
        this.state={
            current_tab:''
        }
    }
    render() {
        return <div className={styles.user_infor}>
            <div className={styles.image_wrapper}>
                <img src="/static/ChatHead.png" alt=""/>
            </div>
            <div className={styles.tab_groups}>
                <Link to={"/app/user_infor/base"} className={styles.link}  >
                    <div className={styles.tab_group_item}
                         data-active={this.props.location.pathname=="/app/user_infor/base"} data-first="true"
                    >基本信息
                    </div>
                </Link>
                <Link to={"/app/user_infor/phone"} className={styles.link}>
                    <div className={styles.tab_group_item}  data-active={this.props.location.pathname=="/app/user_infor/phone"} >手机号码</div>
                </Link>

                <Link to={"/app/user_infor/password"} className={styles.link}>
                    <div className={styles.tab_group_item} data-active={this.props.location.pathname=="/app/user_infor/password"}
                         data-last="true"
                    >更换密码
                    </div>
                </Link>


            </div>
            <Route exact path={"/app/user_infor"} render={() => <Redirect to={"/app/user_infor/base"}/>}/>
            <Route path={"/app/user_infor/base"} component={BaseInfor}/>
            <Route path={"/app/user_infor/password"} component={Password}/>
            <Route path={"/app/user_infor/phone"} component={Phone}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(UserInfor)

