import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Home } from '~/pages/Home'
import { Login } from '~/pages/Login'
import { Routes } from '~/routes'

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
        path: '*',
        element: <Navigate to={Routes.HOME} />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
