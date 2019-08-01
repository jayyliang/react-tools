import React, { Component } from 'react'
import { Button, Input, message } from 'antd'
import './index.css'
import Utils from '../../utils'
class ColorExchange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //rgb2hex
            r: '',
            g: '',
            b: '',
            hex: '',
            hadRgb: false,
            //hex2rgb
            hexInput: '',
            rgb: '',
            hadHex: false
        }
    }
    colorRGB2Hex() {
        if (!this.state.r || !this.state.g || !this.state.b) {
            message.info('请检查您的输入')
            return
        }
        var r = parseInt(this.state.r);
        var g = parseInt(this.state.g);
        var b = parseInt(this.state.b);
        if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
            message.info('请检查您的输入')
            return
        }
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        this.setState({
            hex
        })
    }
    copy(type) {
        let value
        if (type === 'rgb') {
            value = this.state.rgb
        } else {
            value = this.state.hex
        }
        Utils.Copy(value)
        message.info('已复制到粘贴板')
    }
    hexToRGB = () => {
        const hex = this.state.hexInput
        if (typeof hex !== 'string') {
            return null;
        }

        // 过滤非法输入
        if (!/^#[0-9ABCDEFabcdef]{1,6}$/.test(hex)) {
            return null
        }
        let pureStr = hex.slice(1);
        // 处理简写形式
        if (pureStr.length === 3) {
            // 7f7 => [7, f, 7] => [[7], [f], [7]] => [[77], [ff], [77]] => [77, ff, 77] => 77ff77
            pureStr = [].concat(...[...pureStr].map(v => [v]).map(v => v.concat(v))).join('')
        }

        let result = [];

        for (let i = 0; i < pureStr.length; i += 2) {
            result.push(parseInt((pureStr[i] + pureStr[i + 1]), 16));
        }
        this.setState({
            rgb: `rgb(${result.join(', ')})`
        })
    }
    render() {
        return (
            <div className="color-container">
                <div><h4>RGB转16进制</h4></div>
                <div className="color-content">
                    <div>
                        <Input maxLength='3' onChange={e => { this.setState({ r: e.target.value }) }} className="container-input"></Input>
                        <Input maxLength='3' onChange={e => { this.setState({ g: e.target.value }) }} className="container-input"></Input>
                        <Input maxLength='3' onChange={e => { this.setState({ b: e.target.value }) }} className="container-input"></Input>
                        <Button onClick={this.colorRGB2Hex.bind(this)} className="container-button" type="primary">转换</Button>
                    </div>
                    {this.state.hex ? (
                        <div className="rbg-container">
                            <div style={{ backgroundColor: this.state.hex, width: 150, height: 150, borderRadius: '10px' }} className="rgb"></div>
                            <Button onClick={this.copy.bind(this, 'hex')} className="rgb-copy" type="primary">复制</Button>
                            <h4>{this.state.hex}</h4>
                        </div>
                    ) : ''}

                </div>
                <div className="color-content">
                    <div><h4>16进制转rgb</h4></div>
                    <div>
                        <Input maxLength='7' onChange={e => { this.setState({ hexInput: e.target.value }) }} className="hex-input"></Input>
                        <Button onClick={this.hexToRGB.bind(this)} className="container-button" type="primary">转换</Button>
                    </div>
                    {this.state.rgb ? (
                        <div className="rbg-container">
                            <div style={{ backgroundColor: this.state.rgb, width: 150, height: 150, borderRadius: '10px' }} className="rgb"></div>
                            <Button onClick={this.copy.bind(this, 'hex')} className="rgb-copy" type="primary">复制</Button>
                            <h4>{this.state.rgb}</h4>
                        </div>
                    ) : ''}
                </div>
            </div>
        )
    }
}
export default ColorExchange