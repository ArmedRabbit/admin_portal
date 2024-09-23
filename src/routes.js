import React from 'react'; // Add this line
import { useRoutes } from 'react-router-dom';
//auth
import SignIn from './page/Auth/SignIn';
//admin
import Home from './page/home';
import Dashboard from './page/Dashboard';
import Ignition from './page/Ignition';
import ACVoltage from './page/ACVoltage';
import Fuel from './page/Fuel';
import Remotely from './page/Remotely';

export default function Router() {
    return useRoutes([
        {
            path: '/login',
            element: (
                <SignIn />
            ),
        },
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    path: '/',
                    element: <Dashboard />
                },
                {
                    path: '/ignition',
                    element: <Ignition />
                },
                {
                    path: '/voltage',
                    element: <ACVoltage />
                },
                {
                    path: '/fuel',
                    element: <Fuel />
                },
                {
                    path: '/remotely',
                    element: <Remotely />
                }
            ]
        },
    ]);
}