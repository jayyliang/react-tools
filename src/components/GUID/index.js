import React, { Component } from 'react'
import { Input, Button, message } from 'antd';
import Utils from '../../utils'
class GUID extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    guid() {
        var guid = (this._G() + this._G() + "-" + this._G() + "-" + this._G() + "-" + this._G() + "-" + this._G() + this._G() + this._G()).toUpperCase();
        const input = document.getElementById("input")
        input.value = guid
    }
    _G() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    copy() {
        const input = document.getElementById('input')
        Utils.Copy(input.value)
        message.info('已复制到粘贴板')
    }
    render() {
        return (
            <div>
                <div style={{ margin: 30 }}>
                    <h4>生成GUID</h4>
                    <Input id="input" />
                    <Button onClick={this.guid.bind(this)} type="primary" style={{ margin: 20 }}>生成</Button>
                    <Button onClick={this.copy.bind(this)} type="primary" style={{ margin: 20 }}>复制结果</Button>
                </div>
            </div>
        );
    }
}
export default GUID