import React from 'react'
import _ from 'lodash'

export default class Form extends React.Component {
    isValidate() {
        var isError = false;
        var errorMessage = [];
        _.map(this.domTree, (item) => {
            if (item && item.state) {
                if (item.state.isError) {
                    errorMessage = errorMessage.concat(item.state.isErrorMessage)
                }
            }
        })
        if (errorMessage.length > 0) {
            return {success: false, message: errorMessage}
        } else {
            return {success: true}
        }
    }

    constructor() {
        super();
        this.isValidate = this.isValidate.bind(this)
        this.domTree = {}
    }

    render() {
        var self = this;
        return <div ref={(mySelf) => {
            self.__dom__ = mySelf
        }}>
            {
                React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        ref: ref => self.domTree[child.key] = ref
                    });
                })
            }
        </div>
    }
}