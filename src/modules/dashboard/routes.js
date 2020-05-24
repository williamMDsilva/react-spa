import Users from './user/Users.jsx';
import Courses from './course/Courses.jsx';
import HomePage from './home/Home.jsx';

export default [
    {
        path: "/dashboard",
        exact: true,
        component: HomePage
    },
    {
        path: "/dashboard/users",
        component: Users
    },
    {
        path: "/dashboard/courses",
        component: Courses
    },
];