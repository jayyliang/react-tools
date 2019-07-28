import Todo from './components/Todo'
import Dashboard from './components/Dashboard'
let routes = [{
    path: "/",
    component: Todo,
    exact: true
}, {
    path: "/dashboard",
    component: Dashboard
}]

export default routes;