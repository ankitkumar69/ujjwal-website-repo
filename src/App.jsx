
import Register from "./Register.jsx";
import AnotherNav from "./anotherNav.jsx";
import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Info from "./info.jsx";
import Login from "./login.jsx";
import {
  RouterProvider,
  Outlet,
  createBrowserRouter,

} from "react-router-dom";
// import Practice from './practice.jsx'
function App() {
  const Layout = () => {
    return (
      <div>
         <Info />
        <AnotherNav />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
          path:"/",
          element:<Home />
      },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
