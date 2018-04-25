~~~
import React from 'react'
import ReactDOM from 'react-dom'
import ValidateInput from './compoment/validateInput.js'
import Form from './compoment/form'
import * as reg from './util/regs.js'
import {uuid} from "./util/uitls";
import {message} from 'antd'

export default class App extends React.Component {
    onClick() {
        var result = this.__form__.isValidate()
        if (result.success) {
            debugger
        }
        message.error(result.message)
    }

    render() {
        var self = this;
        return <div>
            <Form ref={(mySelf) => {
                self.__form__ = mySelf
            }}>
                <ValidateInput
                    key={uuid()}
                    regs={[
                        {reg: reg.exp_email, isRequired: true, error: "is not email"},
                        {reg: reg.exp_not_null, isRequired: true, error: "is not null"}
                    ]}/>
                <ValidateInput
                    key={uuid()}
                    regs={[
                        {reg: reg.exp_num, isRequired: true,error: "is not num"},
                        {reg: reg.exp_not_null, isRequired: true, error: "is not null"}
                    ]}/>
                <div>
                    <button onClick={this.onClick.bind(this)}>validate</button>
                </div>
            </Form>

        </div>
    }

    componentDidMount() {
    }
}
~~~