import React from 'react'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AuthProviders from './Providers/AuthProviders';




ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProviders>
  <RouterProvider router={router}></RouterProvider>
 </AuthProviders>
)
