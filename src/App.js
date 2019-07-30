import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import Left from './components/base/Left'
import { Spin, Icon } from 'antd';

// import Dashboard from './components/Dashboard'
// import Todo from './components/Todo'
const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} spin />
        return <div style={{ position: "absolute", left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}><Spin indicator={icon} /></div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const Dashboard = Loadable({
    loader: () => import("./components/Dashboard"),
    loading: MyLoadingComponent
});
const Todo = Loadable({
    loader: () => import("./components/Todo"),
    loading: MyLoadingComponent
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ display: "flex", width: "100%", height: "100%" }}>
                    <Route path="/" component={Left}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/todo" component={Todo}></Route>
                </div>
            </BrowserRouter >
        );
    }
}
export default App;
