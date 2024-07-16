import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { AccountProvider } from '~contexts/AccountProvider'
import { Routes } from '~enums/Routes'
import { Dashboard } from '~pages/Dashboard'
import { Home } from '~pages/Home'
import { Login } from '~pages/Login'
import { PrivacyPolicyAndDataProcessing } from '~pages/PrivacyPolicyAndDataProcessing'

const router = createBrowserRouter([
    {
        path: Routes.HOME,
        element: <Home />,
    },
    {
        path: Routes.LOGIN,
        element: <Login />,
    },
    {
        path: Routes.PRIVACY_POLICY_AND_DATA_PROCESSING,
        element: <PrivacyPolicyAndDataProcessing />,
    },
    {
        path: Routes.DASHBOARD,
        element: <Dashboard />,
    },
    {
        path: '*',
        element: <Navigate to={Routes.HOME} />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AccountProvider>
            <RouterProvider router={router} />
        </AccountProvider>
    </React.StrictMode>,
)
