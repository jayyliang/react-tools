import React, {
    Component
} from 'react'
import store from './store'
import { connect } from 'react-redux'
import { addCount, decCount, asyncTest } from './actions/Count'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.add = this.add.bind(this)
        this.dec = this.dec.bind(this)
        this.counter = this.counter.bind(this)
    }
    componentDidMount() {
        console.log(store.dispatch(asyncTest()))
    }

    add() {
        store.dispatch(addCount())
    }
    dec() {
        store.dispatch(decCount())
    }
    counter() {
        const { count } = this.props
        return (
            <div>
                {count}
                <button onClick={this.add}>add</button>
                <button onClick={this.dec}>dec</button>
            </div>
        )
    }
    goods() {
        const { goods } = this.props
        console.log(goods)
        return (
            <div>
                {goods.map(item => {
                    return <ul key={item.id}>
                        <li>{item.price}</li>
                        <li>{item.size}</li>
                    </ul>
                })}
            </div>


        )
    }
    render() {
        return (
            <div>
                {this.counter()}
                {/* {this.goods()} */}
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        count: state.Count.count,
        goods: state.Goods.goods
    }
}
export default connect(mapStateToProps)(App)