import React from 'react'
import styles from './validateSelect.css'
import {Select} from 'antd'
import PropTypes from 'prop-types'
import {array_distinct_insert_item, array_remove_obj, isMatch} from "../../util/uitls";

class validateSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            isError: false,
            isErrorMessage: []
        }
    }

    onChange(value,select_options) {
        var self=this;
        var {onChange,regs} = this.props;
        onChange && onChange.call(this, value,select_options);
        var isErrorArray = [];
        var errorMessageArray = [];
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
        var {regs, value} = this.props

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
        var {style}=this.props
        return <div className={styles.validateSelect} style={style}>
            <Select onChange={this.onChange.bind(this)} value={this.props.value} style={style}>
                {this.props.children}
            </Select>
            {
                this.state.isError && <div className={styles.error}>{this.state.isErrorMessage}</div>
            }
        </div>
    }
}

validateSelect.propTypes = {
    onChange: PropTypes.func,
    regs: PropTypes.array.isRequired,
    // value:PropTypes.
}
validateSelect.defaultProps = {
    value: ""
}

export default validateSelect

