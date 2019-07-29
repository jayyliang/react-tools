import React, { Component } from 'react'
import './index.css'
import { Button, Modal, Input } from 'antd'
import Item from './Item'
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.state = {
            head: ['未开始', '进行中', '已完成'],
            showModal: false,
            eventTitle: '',
            eventContent: '',
            todoList: []
        }
    }
    componentDidMount() {
        let todoList = JSON.parse(localStorage.getItem('todo'))

        if (todoList) {
            this.setState({
                todoList
            })
        }
    }
    updateList() {
        let todoList = JSON.parse(localStorage.getItem('todo'))
        this.setState({
            todoList
        })
    }
    add() {
        this.setState({
            showModal: true
        })
    }
    getRandom(n) {
        let res = ''
        for (; res.length < n; res += Math.random().toString(36).substr(2).toUpperCase()) { }
        return res.substr(0, n)
    }
    handleOk() {
        let todoList = localStorage.getItem('todo') || []
        if (todoList.length !== 0) {
            todoList = JSON.parse(todoList)
        }
        let todoItem = {}
        todoItem.eventTitle = this.state.eventTitle
        todoItem.eventContent = this.state.eventContent
        todoItem.type = 0
        todoItem.id = new Date().getTime();
        todoList.push(todoItem)
        localStorage.setItem('todo', JSON.stringify(todoList))
        this.setState({
            showModal: false,
            todoList
        })
    }
    handleCancel() {
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <div className="container">
                {this.state.head.map((item, index) => {
                    return (
                        <div key={index} className="content">
                            {
                                this.state.todoList.map(item => {
                                    if (item.type === index) {
                                        return (
                                            <div key={item.id}>
                                                <Item updateList={this.updateList.bind(this)} title={item.eventTitle} content={item.eventContent} id={item.id} type={item.type} />
                                            </div>
                                        )
                                    }else{
                                        return ''
                                    }
                                })
                            }
                            {
                                index === 0 ? <div className="add"><Button onClick={this.add} type="primary">增加</Button></div> : ''
                            }
                        </div>
                    )
                })}
                <Modal visible={this.state.showModal}
                    okText="确认"
                    cancelText="取消"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel} title="增加一个事件">
                    <Input onChange={e => { this.setState({ eventTitle: e.target.value }) }} className="input" placeholder="输入事件名称" />
                    <Input onChange={e => { this.setState({ eventContent: e.target.value }) }} className="input" placeholder="输入事件描述" />
                </Modal>
            </div>
        );
    }
}
export default Dashboard