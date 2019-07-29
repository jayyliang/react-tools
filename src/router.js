import Todo from './components/Todo'
import Dashboard from './components/Dashboard'
let routes = [{
    path: "/todo",
    component: Todo,
    exact: true
}, {
    path: "/dashboard",
    component: Dashboard,
    exact:true
}]

export default routes;