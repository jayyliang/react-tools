import React, { Component } from 'react'
import { Popover, Button } from 'antd'
import './item.css'
class Item extends Component {
    constructor(props) {
        super(props)

    }
    changeStatus(type) {
        let todoList = JSON.parse(localStorage.getItem('todo'))
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === this.props.id) {
                if (type === 'delete') {
                    todoList.splice(i, 1)
                } else {
                    todoList[i].type = type
                }
                localStorage.setItem('todo', JSON.stringify(todoList))
                this.props.updateList()
                break
            }
        }
    }
    render() {
        const content = (
            <div>
                <Button onClick={this.changeStatus.bind(this, 0)}>未开始</Button>
                <Button onClick={this.changeStatus.bind(this, 1)}>进行中</Button>
                <Button onClick={this.changeStatus.bind(this, 2)}>已完成</Button>
                <Button onClick={this.changeStatus.bind(this, 'delete')} type="primary">删除</Button>
            </div>
        )
        return (
            <div className="item">
                <div className="title-container">
                    <div className="title">{this.props.title}</div>
                    <Popover placement="bottom" title="改变事件状态" content={content} trigger="click">
                        <Button className="icon">状态变更</Button>
                    </Popover>
                </div>
                <div className="description">{this.props.content}</div>
            </div>
        )
    }
}
export default Item