import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, Select } from 'antd'
const { Option } = Select;
const { TextArea } = Input;
class Translate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'auto',
            value: ''
        }
    }
    componentDidMount() {
        // console.log(process.env)
        // axios.get('/ajax.php?a=fy&f=auto&t=auto&w=今天我想吃烧饼').then(res => {
        //     console.log(res)
        // })
    }
    handleChange(value) {
        this.setState({
            type: value
        })
    }
    change() {
        let from, to
        let type = this.state.type.split('-')
        if(this.state.type==='auto'){
            from = 'auto'
            to = 'auto'
        }else{
            from = type[0]
            to = type[1]
        }
        axios.get(`/ajax.php?a=fy&f=${from}&t=${to}&w=${this.state.value}`).then(res => {
            const result = document.getElementById('result')
            result.value = res.data.content.out
        })
    }
    render() {
        return (
            <div style={{ margin: 50 }}>
                <Select defaultValue="自动检测语言" style={{ width: 150 }} onChange={this.handleChange.bind(this)}>
                    <Option value="auto">自动检测语言</Option>
                    <Option value="ch-ja">中文 TO 日语</Option>
                    <Option value="ch-en">中文 TO 英文</Option>
                    <Option value="ch-ko">中文 TO 韩语</Option>
                    <Option value="fr-ch">法语 TO 中文</Option>
                    <Option value="ch-de">中文 TO 德文</Option>
                    <Option value="en-ch">英文 TO 中文</Option>
                    <Option value="ja-ch">日语 TO 中文</Option>
                    <Option value="ch-es">中文 TO 西班牙语</Option>
                    <Option value="de-ch">德文 TO 中文</Option>
                    <Option value="ko-ch">韩语 TO 中文</Option>
                    <Option value="ch-fr">中文 TO 法语</Option>
                </Select>
                <Button onClick={this.change.bind(this)} type="primary" style={{ marginLeft: 30 }}>翻译</Button>
                <TextArea placeholder="请输入" style={{ marginTop: 20, marginBottom: 20 }} onChange={e => { this.setState({ value: e.target.value }) }} rows={8} />
                <TextArea placeholder="结果在这里" id="result" rows={8} cols={50} />
            </div>
        );
    }
}
export default Translate