import React from 'react';
import { connect } from 'dva';
import './loading.css';
import {Card,Spin} from 'antd'
function Loading() {
  return (
    <div>
      <Card  title="基本" style={{margin:10}}>
<Spin  />
      </Card>
      <Card  title="各种大小" style={{margin:10}}>
<Spin  size="small"/>
<Spin />
<Spin size="large" />
      </Card>

            <Card  title="加上文字" style={{margin:10}}>
<Spin  tip="加上加载文字。。。"/>

<Spin>
<div style={{padding:40,textAlign:"center"}}>
加上加载文字。。。
</div>
</Spin>
      </Card>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Loading);
