import React, { Component } from 'react'
import { Input, Button } from 'antd'
import trans from 'zh2cht'
class Simple2complex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            result: ''
        }
    }
    change(type) {
        let action
        switch (type) {
            case 0:
                action = trans.toZh
                break
            case 1:
                action = trans.toCht
                break
            case 2:
                action = trans.toHx
                break
            default:
                break
        }
        let result = action(this.state.input)
        this.setState({
            result
        })
    }
            componentDidMount() {
                document.title = '简繁互换'
            }
    render() {
        return (
            <div style={{ margin: 50 }}>
                <Input onChange={e => { this.setState({ input: e.target.value }) }} placeholder="输入要转换的汉字" />
                <Button onClick={this.change.bind(this, 0)} style={{ margin: 20 }} type="primary">转换为简体</Button>
                <Button onClick={this.change.bind(this, 1)} style={{ margin: 20 }} type="primary">转换为繁体</Button>
                <Button onClick={this.change.bind(this, 2)} style={{ margin: 20 }} type="primary">转换为火星文</Button>
                <h4>{this.state.result}</h4>
            </div>
        )
    }
}
export default Simple2complex