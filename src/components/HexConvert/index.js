import React, { Component } from 'react'
import { Button, Input, message } from 'antd'
import './index.css'
import Utils from '../../utils'
class HexConvert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: null,
            to: null,
            content: null,
            data: null
        }
    }
    convert() {
        if (!this.state.from || !this.state.to || !this.state.content) {
            message.info('请检查您的输入')
            return
        }
        // console.log(typeof this.state.from)
        // if (typeof this.state.from != 'number' || typeof this.state.to != 'number') {
        //     message.info('请检查您的输入')
        //     return
        // }
        //把m进制的数字num转成n进制
        var s = this.state.content + '';
        var result = parseInt(s, this.state.from).toString(this.state.to);
        this.refs.data.input.value = result

    }
    copy() {
        let value = this.refs.data.input.value
        Utils.Copy(value)
        message.info('已复制到粘贴板')
    }
    render() {
        return (
            <div className="hex-convert-container">
                <div className="hex-convert-title">
                    <Input onChange={e => { this.setState({ from: e.target.value }) }} className="hex-convert-input" placeholder="输入待转换进制，如2"></Input>
                    <h4>转</h4>
                    <Input onChange={e => { this.setState({ to: e.target.value }) }} className="hex-convert-input" placeholder="输入要转换的进制，如16"></Input>
                    <Button className="hex-convert-btn" onClick={this.convert.bind(this)} type="primary">转换</Button>
                </div>
                <Input onChange={e => { this.setState({ content: e.target.value }) }} className="hex-convert-input" placeholder="输入要转换的内容"></Input>
                <Input ref="data" className="hex-convert-input" placeholder="转换结果"></Input>
                <Button onClick={this.copy.bind(this)} type="primary">复制结果</Button>
            </div>
        )
    }
}
export default HexConvert