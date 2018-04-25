import React from 'react'
import styles from './birdayPicker.css'
import PropTypes from 'prop-types';
import {Select} from 'antd'
import {uuid} from '../../util/uitls.js'

class birdayPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            current_date: [],
            year_array: [],
            month_array: [],
            date_array: [],
            date_counts: 0,

        }
    }

    dateInit(current_date = []) {
        var year_array = []
        var month_array = []
        if (current_date.length <= 0) {
            var _d = new Date();
            current_date = [_d.getFullYear(), _d.getMonth() + 1, _d.getDate()]
        }
        var date_counts = (() => {
            var d = new Date(current_date[0], current_date[1], 0)
            return d.getDate();
        })();
        for (var i = current_date[0] - 100; i < current_date[0] + 100; i++) {
            year_array.push(i)
        }
        for (var i = 1; i < 13; i++) {
            month_array.push(i)
        }
        this.setState({
            year_array, month_array, date_counts: date_counts,
            current_date
        })
    }

    componentDidMount() {
        this.dateInit()
    }

    renderYears() {
        var {
            year_array,
            month_array,
            date_array,
        } = this.state
        var _array = [];
        year_array.map((item, index) => {
            _array.push(<Select.Option key={uuid()} value={item}>{item}</Select.Option>)
        })
        return _array
    }

    renderMonth() {
        var {
            year_array,
            month_array,
            date_array,
        } = this.state
        var _array = [];
        month_array.map((item, index) => {
            _array.push(<Select.Option key={uuid()} value={item}>{item}</Select.Option>)
        })
        return _array
    }

    renderDays() {
        var {
            date_counts,
        } = this.state
        var _array = [];
        for (let i = 1; i < date_counts + 1; i++) {
            _array.push(<Select.Option key={uuid()} value={i}>{i}</Select.Option>)
        }
        return _array
    }

    changeYear(value) {
        var {current_date} = this.state;
        current_date = [value, current_date[1], current_date[2]]
        this.setState({
            current_date
        })
        this.dateInit(current_date)
    }

    changeMonth(value) {
        var {current_date} = this.state;
        current_date = [current_date[0], value, current_date[2]]
        this.setState({
            current_date: current_date
        })
        this.dateInit(current_date)
    }

    changeDay(value) {
        var {current_date} = this.state
        current_date = [current_date[0], current_date[1], value]
        this.setState({
            current_date
        })
        this.dateInit(current_date)
    }

    render() {
        var {
            year_array,
            month_array,
            date_array,
        } = this.state;
        var {value} = this.props
        return <div className={styles.birdayPicker}>
            <div className={styles.group}>
                <Select defaultValue={value[0]} style={{width: 80}}
                        onChange={this.changeYear.bind(this)}
                >
                    {this.renderYears()}
                </Select>
                <span className={styles.sub_span}>年</span>
            </div>
            <div className={styles.group}>
                <Select defaultValue={value[1]} style={{width: 70}}
                        onChange={this.changeMonth.bind(this)}
                >
                    {this.renderMonth()}
                </Select>
                <span className={styles.sub_span}>月</span>
            </div>

            <div className={styles.group}>
                <Select defaultValue={value[2]} style={{width: 70}}
                        onChange={this.changeDay.bind(this)}>
                    {this.renderDays()}
                </Select>
                <span className={styles.sub_span}>日</span>
            </div>

        </div>
    }
}

const date = new Date()
birdayPicker.defaultProps = {
    value: [date.getFullYear(), date.getMonth() + 1, date.getDate()]
}
birdayPicker.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array
};

export default birdayPicker

