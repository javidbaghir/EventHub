import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={createBrowserRouter(router)} />)
