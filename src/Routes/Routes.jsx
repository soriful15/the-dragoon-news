import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
// import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayOut from "../layouts/NewsLayOut";
import News from "../Pages/News/News/News";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TemrsCondition from "../Pages/Shared/Temrs&condition/TemrsCondition";


const router = createBrowserRouter([


  {
    path: '/',
    element: <LoginLayOut></LoginLayOut>,
    children: [
      {
        path: '/',
        // element: <Navigate to="/category/0"></Navigate>,
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: 'login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>

      },
      {
        path: 'terms',
        element: <TemrsCondition></TemrsCondition>
      }
    ]

  },

  {
    // path: '/',
    path: 'category',
    element: <Main></Main>,
    children: [
      /*  {
         path: '/',
         element: <Category></Category>,
         loader:()=>fetch(`https://the-dragoon-server-soriful15.vercel.app/news`)
       }, */
      {
        // path: '/category/:id',
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-dragoon-server-soriful15.vercel.app/categories/${params.id}`)
      },

    ]
  },
  {
    path: 'news',
    element: <NewsLayOut></NewsLayOut>,
    children: [

      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-dragoon-server-soriful15.vercel.app/news/${params.id}`)
      },

    ]
  },
]);

export default router;