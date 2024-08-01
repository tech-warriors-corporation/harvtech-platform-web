import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { AccountProvider } from '~contexts/AccountProvider'
import { Routes } from '~enums/Routes'
import { Cultivations } from '~pages/Cultivations'
import { Dashboard } from '~pages/Dashboard'
import { Home } from '~pages/Home'
import { Login } from '~pages/Login'
import { NewCultivation } from '~pages/NewCultivation'
import { PrivacyPolicyAndDataProcessing } from '~pages/PrivacyPolicyAndDataProcessing'
import { RecipeUsed } from '~pages/RecipeUsed'
import { Register } from '~pages/Register'
import { Settings } from '~pages/Settings'
import { Users } from '~pages/Users'

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
        path: Routes.REGISTER,
        element: <Register />,
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
        path: Routes.NEW_CULTIVATION,
        element: <NewCultivation />,
    },
    {
        path: Routes.CULTIVATIONS,
        element: <Cultivations />,
    },
    {
        path: Routes.USERS,
        element: <Users />,
    },
    {
        path: Routes.SETTINGS,
        element: <Settings />,
    },
    {
        path: Routes.RECIPE_USED,
        element: <RecipeUsed />,
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
