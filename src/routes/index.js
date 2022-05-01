import React, { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import Jobs from "../pages/Jobs";

const Loadable = (Component) => (props) => {

    return (
        <Suspense fallback={<p>loading...</p>}>
            <Component {...props} />
        </Suspense>
    );
};
export default function Router() {
    return useRoutes([
        {
            path: 'test',
            element: <Test />
        },
        {
            path: 'jobs',
            element: <JobsPage />
        },
        {
            path: 'test2',
            element: <Test2 />
        },
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: (
                        <p>login</p>
                    ),
                },
                {
                    path: 'register',
                    element: (
                        <p>register</p>
                    ),
                },
                { path: 'login', element: <p>login</p> },
                { path: 'register', element: <p>register</p> },
            ],
        },

        // Main Routes
        {
            path: '*',
            element: <p>***</p>,
            children: [
                { path: '404', element: <p>404</p> },
                { path: '*', element: <Navigate to="/404" replace /> },
                { path: 'test', element: <Test /> },
            ],
        },
        {
            path: '/',
            element: <HomePage />,
            children: [
                { element: <HomePage />, index: true }
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
// test
const Test = Loadable(lazy(() => import('../components/test/Test')));

// Authentication
// const Login = Loadable(lazy(() => import('../components/test/Test')));
// const Register = Loadable(lazy(() => import('../components/test/Test')));
// Main
const HomePage = Loadable(lazy(() => import('../pages/home/Home')));
const Recruitment = Loadable(lazy(() => import('../pages/recruitment/Recruitment')));
// const NotFound = Loadable(lazy(() => import('../components/test/Test')));
const JobsPage = Loadable(lazy(() => import('../pages/Jobs')));
const Test2 = Loadable(lazy(() => import('../components/test/Test2')));
