import React, {
    Component
} from 'react'
import pinyin from 'pinyin'
import {
    Input,
    Button
} from 'antd'
class Chinese2pinyin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            input: ''
        }
    }

    componentWillMount() {
        document.title = '汉字转拼音'
    }
    change(type) {
        let TYPE
        if (type === 0) {
            TYPE = pinyin.STYLE_TONE
        } else {
            TYPE = pinyin.STYLE_NORMAL
        }
        let result = pinyin(this.state.input, {
            style: TYPE
        })
        result = result.join('   ')
        this.setState({
            result
        })
    }
    render() {
        return ( <
            div style = {
                {
                    margin: 50
                }
            } >
            <
            Input onChange = {
                e => {
                    this.setState({
                        input: e.target.value
                    })
                }
            }
            placeholder = "输入要转换的汉字" / >
            <
            Button onClick = {
                this.change.bind(this, 0)
            }
            style = {
                {
                    margin: 20
                }
            }
            type = "primary" > 转换结果带声调 < /Button><Button onClick={this.change.bind(this, 1)} style={{ margin: 20 }} type="primary">转换结果不带声调</Button >
            <
            h4 > {
                this.state.result
            } < /h4> < /
            div >
        );
    }
}
export default Chinese2pinyin