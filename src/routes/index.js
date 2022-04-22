import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

export default function Router() {
    return useRoutes([
        {path: 'test',
        element: <Test/>
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
                { path: 'test', element: <Test/> },
            ],
        },
        {
            path: '/',
            element:<p>///</p>,
            children: [
                { element: <p>home</p>, index: true }
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
// test
const Test =()=>import('../components/test/Test');

// Authentication
const Login = () => import('');
const Register = () => import('');
// Main
const HomePage = () => import('');
const NotFound = () => import('');
