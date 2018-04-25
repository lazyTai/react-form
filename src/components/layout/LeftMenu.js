import React, {Component} from 'react';
import styles from './LeftMenu.css';
import {Menu,} from 'antd';
import {Link} from 'react-router-dom'

const {SubMenu} = Menu;
import MyIcon from '../ui/Icon'

class LeftMenu extends Component {
    renderMenuArray(menuArray, collapsed, isMobile) {
        var _array = [];
        menuArray.map((item, index) => {
            if (item.children && item.children.length > 0) {
                var _array_chilren = [];
                item.children.map((item2, index2) => {
                    _array_chilren.push(
                        <Menu.Item key={item2.id}>
                            <Link to={item2.to}>
                                <div
                                    className={styles.layout_left_menu_content}
                                    style={!collapsed ? {
                                        marginLeft: 64
                                    } : {
                                        marginLeft: isMobile ? 10 : -5,
                                        width: 40,
                                    }}>
                                    <MyIcon type={item2.icon} className={styles.layout_left_menu_icon}/>
                                    <span className={styles.menu_item_text}>{item2.title}</span>
                                </div>
                            </Link>
                        </Menu.Item>
                    )
                })
                _array.push(
                    <SubMenu key={item.id}
                             className={styles.index_left_side_menu_sub_menu_header}
                             title={
                                 <div className={styles.layout_left_menu_content}
                                      style={!collapsed ? {
                                          marginLeft: 64
                                      } : {
                                          marginLeft: isMobile ? 10 : -5,
                                          width: 40,
                                      }}
                                 >
                                     <MyIcon type={item.icon} className={styles.layout_left_menu_icon}/>
                                     {!collapsed && <span className={styles.menu_item_text}>{item.title}</span>}
                                 </div>}
                    >
                        {_array_chilren}
                    </SubMenu>
                )
            }
            else {
                _array.push(
                    <Menu.Item
                        key={item.id}>
                        <Link to={item.to}>
                            <div className={styles.layout_left_menu_content}
                                 style={!collapsed ? {
                                     marginLeft: 64
                                 } : {
                                     marginLeft: isMobile ? 10 : -5,
                                     width: 40,
                                 }}
                            >
                                <MyIcon type={item.icon} className={styles.layout_left_menu_icon}/>
                                {!collapsed && <span className="">{item.title}</span>}
                            </div>
                        </Link>
                    </Menu.Item>
                )
            }
        })
        return _array
    }

    render() {
        var {collapsed, theme, menuArray, documentHeight, isMobile} = this.props;
        var all_height = document.documentElement.scrollHeight;
        // console.log('all_height', all_height)
        // style={{height: all_height + 'px'}}
        return (
            <div className={styles.index_left_side_menu}
                 style={{height: documentHeight + 'px', paddingTop: isMobile ? 0 : 45}}
            >
                <Menu
                    mode="inline"
                    theme={theme || "light"}
                    defaultSelectedKeys={['left_menu_index']}
                    inlineIndent="0"
                    mode={'inline'}
                    style={{
                        // background:'#fff'
                    }}
                >
                    {this.renderMenuArray(menuArray, collapsed, isMobile)}
                </Menu>
            </div>
        );
    }

}

export default LeftMenu;
