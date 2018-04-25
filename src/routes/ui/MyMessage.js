import React from 'react';
import { connect } from 'dva';
import './MyMessage.css';
import {Card,Button,message,notification } from 'antd'
class MyMessage extends React.PureComponent{
  render  () {
    return (
      <div>
       <Card>
          <Button onClick={()=>{
message.info("hello world")
          }}>基本</Button>
            <Button onClick={()=>{
message.success("hello world")
          }}>success</Button>
            <Button onClick={()=>{
message.error("hello world")
          }}>error</Button>
            <Button onClick={()=>{
message.warning("hello world")
          }}>warning</Button>
       </Card>
       <Card>
   
       <Button onClick={()=>{
         notification.config({
          placement: 'bottomRight',
          bottom: 50,
          duration: 3,
        });
 notification.open({ 
   message: 'Notification Title',
   description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
});
 // Dismiss manually and asynchronously
          }}>notification</Button>

       <Button onClick={()=>{
 const hide = message.loading('Action in progress..', 0);
 // Dismiss manually and asynchronously
 setTimeout(hide, 2500);
          }}>loading</Button>
       </Card>
      </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MyMessage);
