import React, {Component} from 'react';
import styles from './OrderTrendChart.css';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts'

class OrderTrendChart extends Component {
    getOption() {
        this.xdata = ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
            '八月', '九月', '十月', '十一月', '十二月'
        ]
        this.ydata1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.ydata2= [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        return {
            xAxis: {
                type: 'category',
                data: this.xdata
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            legend: {
                data:['销售额','订单量'],
                left:20,
                selectedMode:'single'
            },
            series: [{
                name: '销售额',
                data: this.ydata2,
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [
                            {offset: 0, color: '#ffa71e'},
                            {offset: 0.5, color: '#ff7813'},
                            {offset: 1, color: '#ff4600'},
                        ]
                    )
                },
            },
                {
                    name: '订单量',
                    data: this.ydata1,
                    type: 'bar',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,
                            [
                                {offset: 0, color: '#ffa71e'},
                                {offset: 0.5, color: '#ff7813'},
                                {offset: 1, color: '#ff4600'},
                            ]
                        )
                    },
                }
            ]
        }
    }

    render() {
        return (
            <div className={styles.normal}>
                <ReactEcharts option={this.getOption()}
                              style={{height: 300}}
                              ref={(e) => {
                                  this.echarts_react = e;
                              }}
                />
            </div>
        );
    }

    componentDidMount() {
    };


}


export default OrderTrendChart;
