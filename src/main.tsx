import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Routes } from '~enums/Routes'
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
        path: '*',
        element: <Navigate to={Routes.HOME} />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
