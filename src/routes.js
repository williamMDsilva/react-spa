import Dashboard from './modules/dashboard/Dashboard.jsx';
import Landing from './modules/landing/Landing.jsx';
import Login from './modules/login/Login.jsx';

export default [
    {
        path: "/",
        exact: true,
        component: Landing
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    }
];