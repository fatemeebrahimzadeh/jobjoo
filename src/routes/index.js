import React, {lazy, Suspense} from 'react';
import {Navigate, useLocation, useRoutes} from 'react-router-dom';

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
            element: <Test/>
        },
        {
            path: 'test2',
            element: <Test2/>
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
                {path: 'login', element: <p>login</p>},
                {path: 'register', element: <p>register</p>},
            ],
        },

        // Main Routes
        {
            path: '*',
            element: <p>***</p>,
            children: [
                {path: '404', element: <p>404</p>},
                {path: '*', element: <Navigate to="/404" replace/>},
                {path: 'test', element: <Test/>},
            ],
        },
        {
            path: '/',
            element: <p>home</p>,
            children: [
                {element: <p>home</p>, index: true}
            ],
        },
        {path: '*', element: <Navigate to="/404" replace/>},
    ]);
}
// test
const Test = Loadable(lazy(() => import('../components/test/Test')));
const Test2 = Loadable(lazy(() => import('../components/test/Test2')));
;

// Authentication
const Login = Loadable(lazy(() => import('../components/test/Test')));
const Register = Loadable(lazy(() => import('../components/test/Test')));;
// Main
const HomePage = Loadable(lazy(() => import('../components/test/Test')));;
const NotFound = Loadable(lazy(() => import('../components/test/Test')));;
