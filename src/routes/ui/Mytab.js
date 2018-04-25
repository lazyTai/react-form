import React from 'react';
import { connect } from 'dva';
import './Mytab.css';
import {Tabs,Card} from 'antd'
function Mytab() {
  return (
    <div>
      <Card>
      <Tabs defaultActiveKey="1-1" >
        <Tabs.TabPane tab="tab1" key="1-1">tab1  </Tabs.TabPane>
        <Tabs.TabPane tab="tab2" key="2-1">tab2 </Tabs.TabPane>
        <Tabs.TabPane tab="tab3" key="3-1">tab3  </Tabs.TabPane>
      </Tabs>
      </Card>
      <Card>
      <Tabs defaultActiveKey="2-2"  type="card" >
        <Tabs.TabPane tab="tab1" key="2-1">tab1  </Tabs.TabPane>
        <Tabs.TabPane tab="tab2" key="2-2">tab2 </Tabs.TabPane>
        <Tabs.TabPane tab="tab3" key="2-3">tab3  </Tabs.TabPane>
      </Tabs>
      </Card>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Mytab);
