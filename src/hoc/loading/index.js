import React from 'react';
import './index.css'

function hoc(ComponentClass) {
    return class HOC extends ComponentClass {
        render() {
            let loading = this.state.loading
            if (!loading) {
                console.log(loading)
                return super.render()
            }
            else {
                return (<div>
                    <div className="container">
                        <div className="loading"></div>
                    </div>
                </div>)
            }
        }
    }
}

export default hoc