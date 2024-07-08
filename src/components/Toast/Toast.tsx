import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Toast: React.FC = () => (
    <ToastContainer
        position={'bottom-right'}
        theme={'dark'}
        autoClose={6000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={false}
        pauseOnHover={true}
        transition={Bounce}
    />
)
