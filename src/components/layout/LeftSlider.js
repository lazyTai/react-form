import React from 'react';
import styles from './LeftSlider.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
import LeftMenu from './LeftMenu'
const { Header, Content, Sider } = Layout;
function LeftSlider({ collapsed, isMobile, menuArray, documentHeight }) {
  if (!isMobile) {
    return <Sider
      breakpoint="lg"
      collapsed={collapsed}
      className={styles.index_left_slider}
      style={{ width: 250, background: '#fff' }}
      width={250}
    >
      <div className={styles.logo_place}
        style={{
          width: collapsed ? '79px' : '250px'
        }}
      >
        <div className={styles.logo}
        >
          {collapsed ? <img src="./favicon.png" /> : <img src="./static/logo.png" />}

        </div>
      </div>
      <LeftMenu
        collapsed={collapsed} mode={'vertical'}
        menuArray={menuArray} documentHeight={documentHeight}
        isMobile={isMobile}
      />
    </Sider>
  } else {
    return null;
  }
}

export default LeftSlider;
