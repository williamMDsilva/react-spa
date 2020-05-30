import Users from './user/Users.jsx';
import Courses from './course/Courses.jsx';
import CoursesDetail from './course/detail/CoursesDetail.jsx';
import LessonsDetail from './course/detail/LessonsDetail.jsx';
import HomePage from './home/Home.jsx';
import Settings from './settings/Settings.jsx';

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
        exact: true,
        component: Courses
    },
    {
        path: "/dashboard/courses/:id",
        exact: true,
        component: CoursesDetail
    },
    {
        path: "/dashboard/courses/:courseId/lessons/:lessonId",
        exact: true,
        component: LessonsDetail
    },
    {
        path: "/dashboard/settings",
        component: Settings
    },
];