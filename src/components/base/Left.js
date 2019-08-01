import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
class Left extends Component {
    componentDidMount() {
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
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
                </Menu>
            </div>
        )
    }
    handleClick = e => {
        // console.log('click ', e);
    };
}
export default Left