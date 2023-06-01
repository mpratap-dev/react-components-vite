import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ColumnView from './pages/ColumnView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "column-view",
    element: <ColumnView />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
