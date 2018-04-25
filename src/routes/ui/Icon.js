import React from 'react';
import { connect } from 'dva';
import './Icon.css';
import { Card, Icon } from 'antd'
import MyIcon from '../../components/ui/Icon'
// http://iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=609926&keyword=
function PageIcon() {
  return (
    <div style={{ padding: 10 }}>
      <Card title="基本">
        <Icon type="step-backward" style={{ fontSize: 50 }} />
        <Icon type="step-forward" style={{ fontSize: 50 }} />
        <Icon type="fast-backward" style={{ fontSize: 50 }} />
        <Icon type="fast-forward" style={{ fontSize: 50 }} />
        <Icon type="down" style={{ fontSize: 50 }} />
        <Icon type="up" style={{ fontSize: 50 }} />
        <Icon type="up-circle" style={{ fontSize: 50 }} />
      </Card>
      <Card title="自己定义" style={{ marginTop: 10 }}>
        <MyIcon type="icon-cuowu" style={{ fontSize: 50 }} />
        <MyIcon type="icon-weixuanyuanquan" style={{ fontSize: 50 }} />
        <MyIcon type="icon-Ps" style={{ fontSize: 50 }} />
        <MyIcon type="icon-file" style={{ fontSize: 50 }} />
        <MyIcon type="icon-Printer" style={{ fontSize: 50 }} />
        <MyIcon type="icon-Trash" style={{ fontSize: 50 }} />
        <MyIcon type="icon-clock" style={{ fontSize: 50 }} />
      </Card>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PageIcon);
