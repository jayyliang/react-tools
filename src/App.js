import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import routes from './router'
import Left from './components/base/Left'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Left/>
                    {
                        routes.map((route, key) => {
                            return <Route key={key} path={route.path}
                                render={props => (
                                    <route.component {...props} exact={route.exact} routes={route.routes} />
                                )}
                            />
                        })
                    }
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
