import React from 'react';
import { connect } from 'dva';
import styles from './Mydialog.css';
import {Modal,Card,Button} from 'antd'
var confirm=Modal.confirm
class Mydialog extends React.PureComponent{
  state={
    visible1:false,
    visible2:false,
    confirmLoading:false
  }
render(){
  return (
    <div className={styles.normal}>
    <Card>
     <div style={{margin:10}}>
     <Button onClick={()=>{
        this.setState({
          visible1:true
        })
      }}>Basic Modal</Button>
     </div>
     <div style={{margin:10}}>
     <Button onClick={()=>{
        this.setState({
          visible2:true
        })
      }}>异步关闭</Button>
     </div>
     <div style={{margin:10}}>
     <Button onClick={     ()=>{
        confirm({
          title:"确定吗？",
          content:"一旦执行就不能结束",
          onOk() {
           console.log('OK');
         },
         onCancel() {
           console.log('Cancel');
         },
        })
       }
     }>确定款</Button>
       <Button onClick={()=>{
        this.setState({
          visible2:true
        })
      }}>删除款</Button>
     </div>
    </Card>
    <Card>
      <h1>信息框</h1>
      <Button onClick={
        ()=>{
          Modal.info({
            title:"info",
            content:<div>info</div>,
            onOk(){}
          })
        }
      }>info</Button>
       <Button onClick={
        ()=>{
          Modal.success({
            title:"success",
            content:<div>success</div>,
            onOk(){}
          })
        }
      }>success</Button>
      <Button onClick={
        ()=>{
          Modal.error({
            title:"error",
            content:<div>error</div>,
            onOk(){}
          })
        }
      }>error</Button>
      <Button onClick={
        ()=>{
          Modal.warning({
            title:"warning",
            content:<div>warning</div>,
            onOk(){}
          })
        }
      }>warning</Button>
    </Card>
    <Modal
          title="Basic Modal"
          visible={this.state.visible1}
          onOk={()=>{
            this.setState({  visible1:false})
          }}
          onCancel={()=>{
            this.setState({  visible1:false})
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="異步"
          visible={this.state.visible2}
          onOk={()=>{
            this.setState({  confirmLoading:true})
            setTimeout(()=>{
              this.setState({  confirmLoading:false})
              this.setState({  visible2:false})
            },1000)
          }}
          confirmLoading={this.state.confirmLoading}
          onCancel={()=>{
            this.setState({  visible2:false})
          }}
        >
          <p>Some contents...</p>
        </Modal>
    </div>
  );
}
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Mydialog);
