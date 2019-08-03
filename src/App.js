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
    loader: () => import("./components/QrCode"),
    loading: LoadingComponent
})
const HexConvert = Loadable({
    loader: () => import("./components/HexConvert"),
    loading: LoadingComponent
})
const MD5 = Loadable({
    loader: () => import("./components/MD5"),
    loading: LoadingComponent
})
const GUID = Loadable({
    loader: () => import("./components/GUID"),
    loading: LoadingComponent
})
const Img2base64 = Loadable({
    loader: () => import("./components/Img2base64"),
    loading: LoadingComponent
})
const Chinese2pinyin = Loadable({
    loader: () => import("./components/Chinese2pinyin"),
    loading: LoadingComponent
})
const Simple2complex = Loadable({
    loader: () => import("./components/Simple2complex"),
    loading: LoadingComponent
})
const word2pdf = Loadable({
    loader: () => import("./components/Word2pdf"),
    loading: LoadingComponent
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
                    <Route path="/md5" component={MD5}></Route>
                    <Route path="/guid" component={GUID}></Route>
                    <Route path="/img2base64" component={Img2base64}></Route>
                    <Route path="/chinese2pinyin" component={Chinese2pinyin}></Route>
                    <Route path="/simple2complex" component={Simple2complex}></Route>
                    <Route path="/word2pdf" component={word2pdf}></Route>
                </div>
            </BrowserRouter >
        );
    }
}
export default App;
