import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd';

function setRouterLocation(str) {
  /* pathname: "/app/index", */
  var a = str; var b = a.split('/');
  return b.filter(function (item) { return item != "" });
}

function MyBreadcrumb(props) {
  var { location: { pathname } } = props
  var mapList = setRouterLocation(pathname);
  var _array = []
  mapList.map((item, index) => {
    if (item == "app") {
      _array.push(<Breadcrumb.Item key={"MyBreadcrumb" + index}><Link to={"/" + item}>首页</Link></Breadcrumb.Item>)
    } else {
      _array.push(<Breadcrumb.Item key={"MyBreadcrumb" + index}>{item}</Breadcrumb.Item>)
    }
  })
  return (
    <div className="Breadcrumb">
      <Breadcrumb>
        {_array}
      </Breadcrumb>
    </div>

  );
}

export default MyBreadcrumb;
