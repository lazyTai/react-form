import React from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'
import styles from './validateInput.css'

import {isMatch} from '../util/uitls.js'
import * as Regs from '../util/regs'
import {array_distinct_insert_item, array_remove_obj} from "../util/uitls";

var {exp_not_null} = Regs

class validateInput extends React.Component {
    constructor() {
        super();
        this.state = {
            isError: false,
            isErrorMessage: []
        }
    }

    onChange(e) {
        var self = this;
        var value = e.target.value
        var {regs, onChange} = this.props
        onChange && onChange.call(null, e.target.value)

        var isErrorArray = [];
        let errorMessageArray = [];
        regs.map((item) => {
            if (!isMatch(item.reg, value)) {
                isErrorArray.push(true)
                errorMessageArray = array_distinct_insert_item(errorMessageArray, item.error)
            } else {
                errorMessageArray = array_remove_obj(errorMessageArray, item.error)
                isErrorArray.push(false)
            }
        })
        var isError = false;
        isErrorArray.map((item) => {
            if (item) {
                isError = true;
                return false
            }
        })
        self.setState({
            isError: isError,
            isErrorMessage: errorMessageArray
        })
    }

    componentDidMount() {
        var self = this;
        var {regs, value, required} = this.props

        var isErrorArray = [];
        var errorMessageArray = [];
        regs.map((item) => {
            if (item.isRequired) {
                if (!isMatch(item.reg, value)) {
                    isErrorArray.push(true)
                    errorMessageArray = array_distinct_insert_item(errorMessageArray, item.error)
                } else {
                    errorMessageArray = array_remove_obj(errorMessageArray, item.error)
                    isErrorArray.push(false)
                }
            }
        })
        var isError = false;
        isErrorArray.map((item) => {
            if (item) {
                isError = true;
                return false
            }
        })
        self.setState({
            isError: isError,
            isErrorMessage: errorMessageArray
        })
    }

    render() {
        // var {error} = this.props
        return <div className={styles.validateInput}>
            <Input onChange={this.onChange.bind(this)}
                   defaultValue={this.props.value}
            />
            {
                this.state.isError && <div className={styles.error}>{this.state.isErrorMessage}</div>
            }

        </div>
    }
}

validateInput.propTypes = {
    onChange: PropTypes.func,
    regs: PropTypes.array.isRequired,
    // value:PropTypes.
}
validateInput.defaultProps = {
    value: ""
}
validateInput.Regs = Regs
export default validateInput

