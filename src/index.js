import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Movies from './page/Movies';
import Summary from './page/Summary';
import ContextProvider from './store/ContextProvider';
import Login from './page/Login';
import AuthProvider from './hooks/AuthProvider';



const router = createBrowserRouter([
  {path:"/",
  element: (<Movies/>)

},
{path:"/summary/:id",
  element: (<Summary/>)

},
{path:"/login",
  element: (<Login/>)

}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ContextProvider>
<RouterProvider router={router} />
</ContextProvider>


);

