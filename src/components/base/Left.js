import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
class Left extends Component {
    componentDidMount() {
        document.title = '在线工具'
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div style={{overflow:"scroll",height:'100vh',overflowX:"hidden"}}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.ItemGroup key="g1" title="日常工具">
                        <Menu.Item key="1"><Link to="/dashboard">看板</Link></Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="常用工具">
                        <Menu.Item key="3"><Link to="/qrcode">二维码生成</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/color-exchange">颜色转换</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/hex-convert">进制转换</Link></Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g3" title="数据安全">
                        <Menu.Item key="6"> <Link to="/md5" >MD5加密</Link></Menu.Item >
                        <Menu.Item key="7"> <Link to="/guid" >生成GUID</Link></Menu.Item >
                        <Menu.Item key="8"> <Link to="/img2base64" >图片转base64</Link></Menu.Item >
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g4" title="文本工具">
                        <Menu.Item key="9"> <Link to="/chinese2pinyin" >汉字转拼音</Link></Menu.Item >
                        <Menu.Item key="10"> <Link to="/simple2complex" >简繁互换</Link></Menu.Item >
                    </Menu.ItemGroup>
                    {/* <Menu.ItemGroup key="g5" title="文件工具">
                        <Menu.Item key="11"> <Link to="/word2pdf" >Word转PDF</Link></Menu.Item >
                        <Menu.Item key="12"> <Link to="" >PDF转Word</Link></Menu.Item >
                    </Menu.ItemGroup> */}
                    <Menu.ItemGroup key="g6" title="效率">
                        <Menu.Item key="13"> <Link to="" >思维导图</Link></Menu.Item>
                        <Menu.Item key="14"> <Link to="/translate" >在线翻译</Link></Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </div>
        )
    }
    handleClick = e => {
        // console.log('click ', e);
    };
}
export default Left