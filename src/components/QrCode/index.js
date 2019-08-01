import React, { Component } from 'react'
import { Button, Input } from 'antd'
import QRCode from 'qrcode.react'
import './index.css'
class QrCode extends Component {
    constructor(props) {
        super(props)
        this.downLoad = this.downLoad.bind(this)
        this.state = {
            value: '',
            hadCode: false
        }
    }
    componentDidMount() {
    }
    // 保存成png格式的图片
    downLoad(code) {
        setTimeout(() => {
            let canvas = document.getElementById(code)
            canvas = canvas.toDataURL("image/png");
            var oA = document.createElement("a");
            oA.download = '';// 设置下载的文件名，默认是'下载'
            oA.href = canvas;
            document.body.appendChild(oA);
            oA.click();
            oA.remove(); // 下载之后把创建的元素删除
        }, 0);
    }
    renderCode() {
        let value = this.refs.input.input.value
        this.setState({
            value,
            hadCode: true
        })
    }

    render() {
        return (
            <div>
                <div className="input">
                    <Input ref="input" placeholder="请输入二维码的内容,扫码访问网址，请输入类似 https://baidu.com"></Input>
                    <Button onClick={this.renderCode.bind(this)} className="button" type="primary">生成</Button>
                </div>
                {this.state.hadCode ? (
                    <div className="code">
                        <QRCode
                            value={this.state.value}  //value参数为生成二维码的链接
                            size={200} //二维码的宽高尺寸
                            fgColor="#000000"//二维码的颜色
                            id="code"
                        />
                        <div className="code-download"><Button onClick={this.downLoad.bind(this, 'code')} type="primary">下载</Button></div>
                    </div>
                ) : ''}
            </div>

        )
    }
}
export default QrCode