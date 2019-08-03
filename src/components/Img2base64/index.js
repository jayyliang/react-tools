import React, {
    Component
} from 'react'
import {
    Button,
    Icon,
    message,
    Input
} from 'antd'
import Utils from '../../utils'
const {
    TextArea
} = Input;
class Img2base64 extends Component {
    upload() {
        const input = document.getElementById('input')
        input.click()
    }
    componentDidMount() {
        document.title = '图片转base64'
    }
    change() {
        var reader = new FileReader();
        var AllowImgFileSize = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
        var file = document.getElementById('input').files[0];
        var files =file.name.split('.')
        var name = files[files.length-1]
        var type = ['gif', 'png', 'jpg', 'svg', 'jpeg']
        if (type.indexOf(name) === -1) {
            message.info(`不支持.${name}格式`)
            return
        }
        var imgUrlBase64;
        if (file) {
            //将文件以Data URL形式读入页面
            imgUrlBase64 = reader.readAsDataURL(file);
            reader.onload = function (e) {
                //var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1).length;//截取base64码部分（可选可不选，需要与后台沟通）
                if (AllowImgFileSize !== 0 && AllowImgFileSize < reader.result.length) {
                    message.info('上传失败，请上传不大于2M的图片！');
                    return;
                } else {
                    //执行上传操作
                    const input = document.getElementById('value')
                    input.value = reader.result
                }
            }
        }
    }
    copy() {
        const input = document.getElementById('value')
        Utils.Copy(input.value)
        message.info('已复制到粘贴板')
    }
    render() {
        return ( <
            div style = {
                {
                    margin: 50
                }
            } >
            <
            input onChange = {
                this.change.bind(this)
            }
            accept = "image/gif,image/jpeg,image/jpg,image/png,image/svg"
            style = {
                {
                    opacity: 0
                }
            }
            id = "input"
            type = "file" / >
            <
            Button style = {
                {
                    marginBottom: 20
                }
            }
            onClick = {
                this.upload.bind(this)
            } >
            <
            Icon type = "upload" / > 点击上传 <
            /Button> <
            TextArea id = 'value'
            rows = {
                8
            }
            cols = {
                80
            }
            /> <
            Button onClick = {
                this.copy.bind(this)
            }
            type = "primary"
            style = {
                {
                    marginTop: 20
                }
            } > 复制结果 < /Button> <
            /div>
        );
    }
}
export default Img2base64