import { useRoutes } from 'react-router-dom';
//auth
import SignIn from './page/Auth/SignIn';
//admin
import Home from './page/home';
import Dashboard from './page/Dashboard';

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
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/ignition',
                    element: <Dashboard />
                },
                {
                    path: '/voltage',
                    element: <Dashboard />
                },
                {
                    path: '/fuel',
                    element: <Dashboard />
                },
                {
                    path: '/remotely',
                    element: <Dashboard />
                }
            ]
        },
    ]);
}