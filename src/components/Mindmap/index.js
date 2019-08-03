import React, { Component } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/title';
import { Button, Icon } from 'antd'
class Mindmap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            options: {},
            myChart: null
        }
    }
    componentDidMount() {

    }
    change() {
        var reader = new FileReader();
        var file = document.getElementById('input').files[0];
        var that = this
        if (file) {
            reader.readAsText(file, "udf-8");//gbk编码
            reader.onload = () => {
                var json = JSON.parse(reader.result);
                let options
                if (that.state.type === 0) {
                    options = {
                        title: { 'text': json.title },
                    yAxis: [{ type: 'value' }],
                        xAxis: [{
                            type: 'category',
                            data: json.xData
                        }],
                        series: [{
                            name:'柱形图',
                            type: 'bar',
                            data: json.yData
                        }]
                    }
                } else {
                    options = {
                        title: { 'text': json.title },
                        series: [
                            {
                                type: 'pie',
                                center: ['50%', '45%'],
                                radius: '50%',
                                data: json.data
                            }
                        ]
                    }
                }
                var myChart = echarts.init(document.getElementById('main'));
                myChart.setOption(options)
                this.setState({
                    myChart
                })
            };
        }
    }
    upload(TYPE) {
        const input = document.getElementById('input')
        input.click()
        let type = TYPE
        this.setState({
            type
        })
    }
    downloadBar() {
        var Link = document.createElement('a');
        Link.download = "柱状图实例.json";
        Link.style.display = 'none';
        // 字符内容转变成blob地址
        var bar = JSON.stringify({
            title: '柱形图', //图表的标题
            xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"], //图表的横轴
            yData: [5, 20, 36, 10, 10, 20] //纵轴数量
        })
        var blob = new Blob([bar]);
        Link.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(Link);
        Link.click();
        document.body.removeChild(Link);
    }
    downloadPie() {
        var Link = document.createElement('a');
        Link.download = "饼状图实例.json";
        Link.style.display = 'none';
        // 字符内容转变成blob地址
        var bar = JSON.stringify({
            title: '柱形图', //图表的标题
            data: [
                { value: 1, name: 'Chrome' }, //value为所占比例 name为饼块名称
                { value: 2, name: 'Firefox' },
                { value: 3, name: 'Safari' },
                { value: 4, name: 'IE9+' },
                { value: 5, name: 'IE8-' }
            ]
        })
        var blob = new Blob([bar]);
        Link.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(Link);
        Link.click();
        // 然后移除
        document.body.removeChild(Link);
    }
    download() {
        //下载为json文件
        this.downloadBar()
        this.downloadPie()
    }
    downloadChart() {
        console.log(this.state.myChart)
        var canvas = echarts.init(document.getElementById('main'));
        canvas = canvas._dom.children[0].children[0]
        canvas = canvas.toDataURL("image/png");
        var oA = document.createElement("a");
        oA.download = '';// 设置下载的文件名，默认是'下载'
        oA.href = canvas;
        document.body.appendChild(oA);
        oA.click();
        oA.remove(); // 下载之后把创建的元素删除
    }
    render() {
        return (
            <div style={{ margin: 50 }}>
                <input onChange={this.change.bind(this)} style={{ opacity: 0 }} id="input" type="file" />
                <Button style={{ marginRight: 20 }} onClick={this.upload.bind(this, 0)} >
                    <Icon type="upload" />生成柱状图(上传json文件)
                </Button>
                <Button style={{ marginRight: 20 }} onClick={this.upload.bind(this, 1)} >
                    <Icon type="upload" />生成饼状图(上传json文件)
                </Button>
                <Button onClick={this.download.bind(this)} >
                    <Icon type="download" />点击下载实例json文件
                </Button>
                <div id="main" style={{ width: 400, height: 400 }}></div>
                {this.state.myChart ? <Button style={{ marginLeft: 170 }} onClick={this.downloadChart.bind(this)}>下载</Button> : ''}
            </div>

        );
    }
}
export default Mindmap