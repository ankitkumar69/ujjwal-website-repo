import Register from "./Register.jsx";
import Allproperty from "./allproperty.jsx";
import AnotherNav from "./anotherNav.jsx";

import Footer from "./footer.jsx";
import Home from "./home.jsx";
import Info from "./info.jsx";
import Login from "./login.jsx";
import About from "./about.jsx";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Addproperty from "./Addproperty.jsx";
import Manageprop from "./Manageprop.jsx";
import Addadmin from "./Addadmin.jsx";
import Edit from "./edit.jsx";
import Carddetail from "./card_detail.jsx"
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
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/allproperty",
          element: <Allproperty />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/addproperty",
          element: <Addproperty />,
        },
        {
          path: "/manageproperty",
          element: <Manageprop />,
        },
        {
          path: "/addadmin",
          element: <Addadmin />,
        },
        {
          path: "/edit/:id",
          element: <Edit />,
        },
        {
          path: "/propertydetail/:id",
          element: <Carddetail />,
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
