import React, { Component } from 'react'
import Utils from '../../utils'
import { Input, Button, message } from 'antd';
import md5 from 'js-md5'
const { TextArea } = Input;
class MD5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    copy() {
        const input = document.getElementById('md5-value')
        Utils.Copy(input.value)
        message.info('已复制到粘贴板')
    }
    md5() {
        const input = document.getElementById('md5-value')
        input.value = md5(this.state.value)
    }
    render() {
        return (
            <div className="md5-container">
                <div style={{ margin: 30 }}>
                    <h4>MD5加密</h4>
                    <TextArea onChange={e => { this.setState({ value: e.target.value }) }} rows={8} cols={80} />
                    <Button onClick={this.md5.bind(this)} type="primary" style={{ marginTop: 20 }}>加密</Button>
                    <h4 style={{ marginTop: 20 }}>加密结果</h4>
                    <TextArea id="md5-value" rows={8} cols={80} />
                    <Button onClick={this.copy.bind(this)} type="primary" style={{ marginTop: 20 }}>复制结果</Button>
                </div>
            </div>
        );
    }
}
export default MD5