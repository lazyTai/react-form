import React from 'react';
import { connect } from 'dva';
import styles from './Button.css';
import { Button, Col, Card, Row, Radio, Icon } from 'antd'
class _Button extends React.PureComponent {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  render() {
    const size = this.state.size;
    return (<div>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <Card>
            <Button style={{ margin: 10 }}
              type="primary"
            >primary</Button>
            <Button style={{ margin: 10 }}
            >default</Button>
            <Button style={{ margin: 10 }}
              type="dashed">dashed</Button>
            <Button style={{ margin: 10 }}
              type="danger"
            >danger</Button>
          </Card>
        </Col>

        <Col lg={{ span: 10, offset: 1 }}>
          <Card>
            <Button style={{ margin: 10 }} type="primary" shape="circle" icon="search" />
            <Button style={{ margin: 10 }} type="primary" icon="search">Search</Button>
            <Button style={{ margin: 10 }} shape="circle" icon="search" />
            <Button style={{ margin: 10 }} icon="search">Search</Button>
            <br />
            <Button style={{ margin: 10 }} shape="circle" icon="search" />
            <Button style={{ margin: 10 }} icon="search">Search</Button>
            <Button style={{ margin: 10 }} type="dashed" shape="circle" icon="search" />
            <Button style={{ margin: 10 }} type="dashed" icon="search">Search</Button>
          </Card>
        </Col>

      </Row>
      <br />
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <Card>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group> <br />
            <br />
            <Button type="primary" size={size} style={{ margin: 10 }}>Primary</Button>
            <Button size={size} style={{ margin: 10 }}>Normal</Button>
            <Button type="dashed" size={size} style={{ margin: 10 }}>Dashed</Button>
            <Button type="danger" size={size} style={{ margin: 10 }}>Danger</Button>
            <br />
            <Button type="primary" shape="circle" icon="download" size={size}  style={{ margin: 10 }}/>
            <Button type="primary" icon="download" size={size} style={{ margin: 10 }}>Download</Button>
            <br />
            <Button.Group size={size}>
              <Button type="primary">
                <Icon type="left" />Backward
          </Button>
              <Button type="primary">
                Forward<Icon type="right" />
              </Button>
            </Button.Group>
          </Card>
        </Col>
      </Row>
    </div >
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(_Button);
