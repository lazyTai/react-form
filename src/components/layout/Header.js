import React, {Component} from 'react';
import styles from './Header.css';
import {
    Layout, Menu, Badge, Breadcrumb, Icon, Popover, Button,
    Avatar
} from 'antd';
import MyIcon from '../ui/Icon'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
import LeftMenu from './LeftMenu'

class IndexHeader extends Component {
    constructor() {
        super();
        this.handleVisibleChange = this.handleVisibleChange.bind(this)
    }

    state = {
        visible_avatar_menu: false,
    }

    handleVisibleChange() {
        this.setState({
            visible_avatar_menu: !this.state.visible_avatar_menu
        })
    }

    render() {
        var {dispatch, collapsed, isMobile, menuArray} = this.props
        return (
            <div className={styles.index_header}>
                <div className={styles.button_set_left_menu}>
                    {!isMobile && collapsed && <MyIcon type="icon-shouqi" style={{fontSize: 25}}
                                                       onClick={() => {
                                                           dispatch({type: 'layout/change_left_menu_collapsed'})
                                                       }}
                    />}
                    {!isMobile && !collapsed && <MyIcon type="icon-zhankai" style={{fontSize: 25}}
                                                        onClick={() => {
                                                            dispatch({
                                                                type: 'layout/change_left_menu_collapsed',
                                                                payload: {a: 1}
                                                            })
                                                        }}
                    />}
                    {isMobile && <Popover
                        placement="bottomRight"
                        content={<LeftMenu collapsed={collapsed} menuArray={menuArray} isMobile={isMobile}/>}
                        trigger="click"
                        style={{}}
                    >
                        <Icon type="bars" style={{fontSize: 25}}/>
                    </Popover>}
                </div>

                <div className={styles.index_header_title}>
                    主页
                </div>


                <div className={styles.right_menu}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
                        style={{height: '100%', float: 'right'}}
                        mode="horizontal"
                        // inlineCollapsed={true}
                        // inlineIndent="30"
                    >
                        <Menu.Item key="2"
                                   style={{
                                       height: '100%',
                                       display: 'flex',
                                       alignItems: 'center',
                                   }}
                        >
                            <div>
                                <Badge count={25} offset={[0, -2]} style={{paddingLeft:6,paddingRight:6}}>
                                    <MyIcon type="icon-xiaoxiicon"
                                            style={{fontSize: '26px', fill: '#ff4600', marginLeft: 10}}
                                    />
                                </Badge>
                            </div>


                        </Menu.Item>
                        <Menu.Item key="3"
                                   style={{
                                       height: '100%',
                                       display: 'flex',
                                       alignItems: 'center',
                                   }}
                        >
                            <Popover
                                content={<a onClick={this.hide}>Close</a>}
                                title="Title"
                                trigger="click"
                                visible={this.state.visible_avatar_menu}
                                onVisibleChange={this.handleVisibleChange}
                            >
                                <div className={styles.avatar_name}>
                                    <Avatar
                                        style={{width: '40px', height: '40px'}}
                                        src="./static/ChatHead.png"/>

                                    <span className={styles.index_header_avatar_name}>李大锤</span>
                                </div>
                            </Popover>
                        </Menu.Item>
                    </Menu>
                </div>

            </div>
        );
    }

}

export default IndexHeader;
