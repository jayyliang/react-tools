import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import Left from './components/base/Left'
import LoadingComponent from './components/base/LoadingComponent'
const Dashboard = Loadable({
    loader: () => import("./components/Dashboard"),
    loading: LoadingComponent
});
const ColorExchange = Loadable({
    loader: () => import("./components/ColorExchange"),
    loading: LoadingComponent
});
const QrCode = Loadable({
    loader:()=>import("./components/QrCode"),
    loading:LoadingComponent
})
const HexConvert  = Loadable({
    loader:()=>import("./components/HexConvert"),
    loading:LoadingComponent
})

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ display: "flex", width: "100%", height: "100%" }}>
                    <Route path="/" component={Left}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/color-exchange" component={ColorExchange}></Route>
                    <Route path="/qrcode" component={QrCode}></Route>
                    <Route path="/hex-convert" component={HexConvert}></Route>
                </div>
            </BrowserRouter >
        );
    }
}
export default App;
